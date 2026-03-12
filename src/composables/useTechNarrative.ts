import { computed, onBeforeUnmount, onMounted, reactive, ref, type Ref } from 'vue';
import {
  CLOSED_ADVISORY_STATUS,
  FINAL_SIGNAL_ID,
  IDLE_FIELD_REPLY,
  INITIAL_ADVISORY_STATUS,
  INITIAL_FIELD_REPLY,
  TECH_INTRO_BRIEFING,
  TECH_INTRO_SEQUENCE_CUE,
  TECH_RESPONSE_CUES,
  TECH_SIGNAL_LAYOUTS,
  TECH_WINDOW_CUES,
  type ActiveTransmission,
  type CommChoice,
  type EndingPanel,
  type IntroBriefing,
  type SceneCue,
  type SceneCueMode,
  type StatKey,
} from '@/config/techNarrative';

interface UseTechNarrativeOptions {
  isExploring: Ref<boolean>;
  routeMarkers: Ref<number>;
}

interface PrepAction {
  id: string;
  label: string;
  result: string;
}

interface PendingTransmission {
  id: string;
  title: string;
  subtitle: string;
  dist: string;
  prompt: string;
  progress: number;
  windowReady: boolean;
  actions: PrepAction[];
  usedActions: string[];
  lastResult: string;
}

interface BufferingTransmission {
  id: string;
  title: string;
  subtitle: string;
  dist: string;
  mode: SceneCueMode | 'calm';
  lead: string;
  steps: string[];
  stepIndex: number;
  progress: number;
}

interface RouteSnapshot {
  trust: number;
  risk: number;
  truth: number;
}

interface RouteProfile extends RouteSnapshot {
  bond: number;
  descent: number;
  strain: number;
  dominant: 'return' | 'truth' | 'liminal' | 'collapse';
  vector: string;
}

const SIGNAL_EVENT_MAP = new Map(TECH_SIGNAL_LAYOUTS.map((layout) => [layout.id, layout.event]));
const SIGNAL_SEQUENCE = TECH_SIGNAL_LAYOUTS.map((layout) => layout.id);
const SIGNAL_INTERVAL_MS = 6500;
const SCRIPTED_SIGNAL_DISTANCE: Record<string, number> = {
  'Ω-01': 2.8,
  'Ψ-02': 3.1,
  'Δ-03': 2.6,
  'Λ-04': 2.9,
  'X-05': 3.4,
};
const WINDOW_MIN_DELAY_BY_MODE: Record<SceneCueMode, number> = {
  quake: 1600,
  storm: 1800,
  fissure: 2000,
  whiteout: 1700,
  magnetic: 2200,
  skyfold: 2400,
};

export function useTechNarrative({ isExploring, routeMarkers }: UseTechNarrativeOptions) {
  const stats = reactive({
    trust: 0,
    risk: 0,
    truth: 0,
  });
  const activeTransmission = ref<ActiveTransmission | null>(null);
  const endingPanel = ref<EndingPanel | null>(null);
  const introBriefingIndex = ref<number | null>(null);
  const lastAdvisory = ref(CLOSED_ADVISORY_STATUS);
  const lastFieldReply = ref(IDLE_FIELD_REPLY);
  const sceneCue = ref<SceneCue | null>(null);
  const environmentMode = ref<SceneCueMode | 'calm'>('calm');
  const pendingTransmission = ref<PendingTransmission | null>(null);
  const bufferingTransmission = ref<BufferingTransmission | null>(null);
  const signalsArmed = ref(false);
  const nextSignalId = ref<string | null>(null);
  const nextSignalCountdownMs = ref(0);
  const completedSignals = reactive<Record<string, boolean>>(
    Object.fromEntries(TECH_SIGNAL_LAYOUTS.map((layout) => [layout.id, false])),
  );

  let signalTimer: ReturnType<typeof setTimeout> | null = null;
  let replyTimer: ReturnType<typeof setTimeout> | null = null;
  let cueTimer: ReturnType<typeof setTimeout> | null = null;
  let openTimer: ReturnType<typeof setTimeout> | null = null;
  let bufferTimer: ReturnType<typeof setTimeout> | null = null;
  let bufferStepTimers: ReturnType<typeof setTimeout>[] = [];
  let nextSignalTimer: ReturnType<typeof setTimeout> | null = null;
  let nextSignalInterval: ReturnType<typeof setInterval> | null = null;
  let nextSignalDeadline = 0;
  let pausedSignalCountdownMs = 0;

  const clearTimers = () => {
    if (signalTimer) clearTimeout(signalTimer);
    if (replyTimer) clearTimeout(replyTimer);
    if (cueTimer) clearTimeout(cueTimer);
    if (openTimer) clearTimeout(openTimer);
    if (bufferTimer) clearTimeout(bufferTimer);
    if (nextSignalTimer) clearTimeout(nextSignalTimer);
    if (nextSignalInterval) clearInterval(nextSignalInterval);
    bufferStepTimers.forEach((timer) => clearTimeout(timer));
    signalTimer = null;
    replyTimer = null;
    cueTimer = null;
    openTimer = null;
    bufferTimer = null;
    nextSignalTimer = null;
    nextSignalInterval = null;
    nextSignalDeadline = 0;
    pausedSignalCountdownMs = 0;
    bufferStepTimers = [];
  };

  const createBufferSteps = (nodeId: string, mode: SceneCueMode | 'calm') => {
    if (nodeId === 'Ω-01') {
      return [
        '扫描红脊附近的地形回声',
        '调取 NIA-7 首段现场片段',
        '重组第一道建议窗口',
      ];
    }
    if (mode === 'storm') {
      return ['压低风噪通道', '过滤发光雾墙雪噪', '锁定建议窗口'];
    }
    if (mode === 'fissure') {
      return ['提取裂口深度回波', '压住过曝蓝光', '重组下行窗口'];
    }
    if (mode === 'magnetic') {
      return ['清理重复地形图层', '同步残留相位', '恢复窗口文本'];
    }
    if (mode === 'skyfold') {
      return ['校准高空星图偏移', '固定最终链路锚点', '展开最后一道窗口'];
    }
    return ['校准链路噪声', '调取现场片段', '建立建议窗口'];
  };

  const createPrepActions = (mode: SceneCueMode | 'calm'): PrepAction[] => {
    if (mode === 'storm') {
      return [
        { id: 'stabilize', label: '稳定链路增益', result: '风噪被压低了一些，语音边缘更清楚了。' },
        { id: 'sweep', label: '扫频过滤雪噪', result: '高频雪噪被剔除了，画面不再整片发白。' },
        { id: 'route', label: '重标记前方路径', result: '你给她补了一条临时路径线，前方轮廓短暂稳定。' },
      ];
    }
    if (mode === 'fissure') {
      return [
        { id: 'depth', label: '校准深度回波', result: '裂缝边缘的深度回波开始成形。' },
        { id: 'exposure', label: '压低裂口炫光', result: '过曝被压下去，底部轮廓露出来了一点。' },
        { id: 'anchor', label: '固定链路锚点', result: '你把信号锚在裂口边缘，掉帧没那么严重了。' },
      ];
    }
    if (mode === 'magnetic') {
      return [
        { id: 'phase', label: '重同步相位', result: '两套地形开始偶尔重合，错误地图不再一直覆盖。' },
        { id: 'checksum', label: '校验旧地图层', result: '一部分失真的图层被识别成旧回响。' },
        { id: 'trim', label: '裁掉噪声通道', result: '只剩几个核心参数还在跳动，但链路更稳了。' },
      ];
    }
    if (mode === 'skyfold') {
      return [
        { id: 'align', label: '对齐天幕坐标', result: '高空光带不再整片错位，星图边缘开始成形。' },
        { id: 'pulse', label: '发送定位脉冲', result: '回响回来了一个清晰峰值，你抓住了它。' },
        { id: 'shield', label: '压住失真外溢', result: '链路边缘没那么撕裂了，最后一条窗口更稳。' },
      ];
    }

    return [
      { id: 'stabilize', label: '稳定链路', result: '底噪降下去了一点，信号更像一条完整线路了。' },
      { id: 'scan', label: '扫一遍场景', result: '轮廓线短暂变亮，你多拿到了一点现场信息。' },
      { id: 'route', label: '标记临时路径', result: '系统接受了你的标记，前方区域不再完全模糊。' },
    ];
  };

  const snapshotStats = (): RouteSnapshot => ({
    trust: stats.trust,
    risk: stats.risk,
    truth: stats.truth,
  });

  const createRouteProfile = (route: RouteSnapshot): RouteProfile => {
    const bond = route.trust * 2 - route.risk;
    const descent = route.truth * 2 + route.risk;
    const strain = route.risk * 2 - route.trust - route.truth;

    let dominant: RouteProfile['dominant'] = 'liminal';
    if (strain >= 4 && route.risk >= route.truth + 1) {
      dominant = 'collapse';
    } else if (bond >= descent + 2) {
      dominant = 'return';
    } else if (descent >= bond + 2) {
      dominant = 'truth';
    }

    const vector =
      dominant === 'return'
        ? 'SAFE RETURN VECTOR'
        : dominant === 'collapse'
          ? 'PRESSURE VECTOR'
          : dominant === 'truth'
            ? 'WITNESS VECTOR'
            : route.truth >= route.trust
              ? 'WITNESS VECTOR'
              : 'SAFE RETURN VECTOR';

    return {
      ...route,
      bond,
      descent,
      strain,
      dominant,
      vector,
    };
  };

  const buildFinalMessage = (baseMessage: string, route: RouteProfile) => {
    if (route.dominant === 'return') {
      return `${baseMessage}<br/><span class="hl">她一路都在等你把“回来”说出口。现在这句话终于有了重量。</span>`;
    }
    if (route.dominant === 'truth') {
      return `${baseMessage}<br/><span class="hl">你前面每一次逼近都把她推得更深。现在不是要不要看见，而是看见以后还能不能回来。</span>`;
    }
    if (route.dominant === 'collapse') {
      return `${baseMessage}<br/><span class="hl">你们之前积累的高压还没退。这个窗口不是单纯的选择题，而是一次止损或失联的分界。</span>`;
    }
    return `${baseMessage}<br/><span class="hl">她对你的信任和对山的执念都还没压过对方。最后这句话会决定哪一边先落地。</span>`;
  };

  const buildFinalChoices = (choices: CommChoice[], route: RouteProfile) => choices.map((choice) => {
    if (choice.id === 'E1') {
      if (route.dominant === 'return') {
        return {
          ...choice,
          label: '返回。把她完整带回来，结束这条已经够深的路线',
        };
      }
      if (route.dominant === 'truth') {
        return {
          ...choice,
          label: '现在回头。承认你们已经看得够深了',
        };
      }
      if (route.dominant === 'collapse') {
        return {
          ...choice,
          label: '强制返撤。趁链路还撑得住把她拉回来',
        };
      }
    }

    if (choice.id === 'E2') {
      if (route.dominant === 'truth') {
        return {
          ...choice,
          label: '继续深入。把前面一路换来的真相走到底',
        };
      }
      if (route.dominant === 'return') {
        return {
          ...choice,
          label: '违背前面的谨慎，赌最后一次逼近',
        };
      }
      if (route.dominant === 'collapse') {
        return {
          ...choice,
          label: '继续硬压。接受她可能直接断在更深处',
        };
      }
    }

    if (choice.id === 'E3') {
      if (route.dominant === 'liminal') {
        return {
          ...choice,
          label: '留在原地，把这条摇晃的链路撑到最后',
        };
      }
      if (route.dominant === 'return') {
        return {
          ...choice,
          label: '先不撤离，停在原地把回程坐标钉死',
        };
      }
      if (route.dominant === 'truth') {
        return {
          ...choice,
          label: '别再前进，留在回响中心守住最后一层画面',
        };
      }
    }

    return choice;
  });

  const getUpcomingSignalId = () => SIGNAL_SEQUENCE.find((id) => !completedSignals[id]) ?? null;

  const clearScheduledSignal = () => {
    if (nextSignalTimer) clearTimeout(nextSignalTimer);
    if (nextSignalInterval) clearInterval(nextSignalInterval);
    nextSignalTimer = null;
    nextSignalInterval = null;
    nextSignalDeadline = 0;
    pausedSignalCountdownMs = 0;
    nextSignalId.value = null;
    nextSignalCountdownMs.value = 0;
  };

  const launchScheduledSignal = (nodeId: string) => {
    clearScheduledSignal();
    openTransmission(nodeId, SCRIPTED_SIGNAL_DISTANCE[nodeId] ?? 3);
  };

  const startScheduledSignalCountdown = (nodeId: string, durationMs = SIGNAL_INTERVAL_MS) => {
    if (!signalsArmed.value || endingPanel.value || activeTransmission.value || pendingTransmission.value || bufferingTransmission.value) {
      return;
    }

    if (typeof document !== 'undefined' && document.hidden) {
      nextSignalId.value = nodeId;
      nextSignalCountdownMs.value = durationMs;
      pausedSignalCountdownMs = durationMs;
      return;
    }

    if (nextSignalTimer) clearTimeout(nextSignalTimer);
    if (nextSignalInterval) clearInterval(nextSignalInterval);

    nextSignalId.value = nodeId;
    nextSignalCountdownMs.value = durationMs;
    pausedSignalCountdownMs = 0;
    nextSignalDeadline = Date.now() + durationMs;

    nextSignalInterval = setInterval(() => {
      nextSignalCountdownMs.value = Math.max(0, nextSignalDeadline - Date.now());
    }, 100);

    nextSignalTimer = setTimeout(() => {
      launchScheduledSignal(nodeId);
    }, durationMs);
  };

  const scheduleUpcomingSignal = (durationMs = SIGNAL_INTERVAL_MS) => {
    const nextId = getUpcomingSignalId();
    if (!nextId) {
      clearScheduledSignal();
      return;
    }
    startScheduledSignalCountdown(nextId, durationMs);
  };

  const pauseScheduledSignal = () => {
    if (!nextSignalId.value || !nextSignalDeadline) return;
    pausedSignalCountdownMs = Math.max(0, nextSignalDeadline - Date.now());
    if (nextSignalTimer) clearTimeout(nextSignalTimer);
    if (nextSignalInterval) clearInterval(nextSignalInterval);
    nextSignalTimer = null;
    nextSignalInterval = null;
    nextSignalDeadline = 0;
    nextSignalCountdownMs.value = pausedSignalCountdownMs;
  };

  const resumeScheduledSignal = () => {
    if (!nextSignalId.value || !pausedSignalCountdownMs) return;
    startScheduledSignalCountdown(nextSignalId.value, pausedSignalCountdownMs);
  };

  const handleVisibilityChange = () => {
    if (typeof document === 'undefined') return;
    if (document.hidden) {
      pauseScheduledSignal();
      return;
    }
    resumeScheduledSignal();
  };

  const resetStats = () => {
    stats.trust = 0;
    stats.risk = 0;
    stats.truth = 0;
  };

  const resetCompletedSignals = () => {
    Object.keys(completedSignals).forEach((key) => {
      completedSignals[key] = false;
    });
  };

  const resetSession = () => {
    clearTimers();
    clearScheduledSignal();
    activeTransmission.value = null;
    endingPanel.value = null;
    introBriefingIndex.value = null;
    pendingTransmission.value = null;
    bufferingTransmission.value = null;
    sceneCue.value = null;
    environmentMode.value = 'calm';
    signalsArmed.value = false;
    routeMarkers.value = 0;
    lastAdvisory.value = INITIAL_ADVISORY_STATUS;
    lastFieldReply.value = INITIAL_FIELD_REPLY;
    resetStats();
    resetCompletedSignals();
  };

  const dismissNarrative = () => {
    clearTimers();
    clearScheduledSignal();
    activeTransmission.value = null;
    endingPanel.value = null;
    introBriefingIndex.value = null;
    pendingTransmission.value = null;
    bufferingTransmission.value = null;
    sceneCue.value = null;
    environmentMode.value = 'calm';
    signalsArmed.value = false;
  };

  const triggerSceneCue = (cue: SceneCue, duration = 2600) => {
    if (cueTimer) clearTimeout(cueTimer);
    sceneCue.value = cue;
    cueTimer = setTimeout(() => {
      sceneCue.value = null;
    }, duration);
  };

  const startIntroBriefing = () => {
    introBriefingIndex.value = 0;
    signalsArmed.value = false;
  };

  const advanceIntroBriefing = () => {
    if (introBriefingIndex.value === null) return false;

    if (introBriefingIndex.value < TECH_INTRO_BRIEFING.length - 1) {
      introBriefingIndex.value += 1;
      return false;
    }

    introBriefingIndex.value = null;
    signalsArmed.value = true;
    lastFieldReply.value = 'NIA-7 awaiting your first instruction.';
    environmentMode.value = 'quake';
    triggerSceneCue(TECH_INTRO_SEQUENCE_CUE, 3000);
    return true;
  };

  const updateStat = (key: StatKey, delta = 0) => {
    stats[key] = Math.max(0, stats[key] + delta);
  };

  const resolveEnding = (choice: CommChoice, routeSnapshot: RouteSnapshot): EndingPanel => {
    const route = createRouteProfile(routeSnapshot);

    if (choice.id === 'E1') {
      if (route.dominant === 'return' || route.bond >= 3) {
        return {
          code: 'SAFE RETURN',
          vector: 'SAFE RETURN VECTOR',
          title: '带回山风的人',
          summary: 'NIA-7 离开了 WERISS。她没有带出全部答案，但她把这条链路和自己的呼吸一起带回来了。',
          body: '你前面给出的每一次谨慎都在替这句“回头”蓄力。归档里只留下了一段被反复擦除的地形记录，以及一句她拒绝解释的话: “你那天让我回头，所以我才确认，山后面真的还有路。”',
        };
      }

      return {
        code: 'FRACTURED RETURN',
        vector: route.vector,
        title: '折返时带着雪噪的人',
        summary: 'NIA-7 最终回来了，但你们前面一路压出来的高压没有一并退去。她带回的是人，以及一段永远对不齐的记录。',
        body: '这不是轻松的生还。你在前半程把她推得太深，最后这句“回头”更像一次硬生生的折返。她回来后很久都不肯复盘，只说山里有些东西不是看见了就能带走的。',
      };
    }

    if (choice.id === 'E2') {
      if (route.dominant === 'truth' && route.truth >= 4) {
        return {
          code: 'FIRST ARRIVAL',
          vector: route.risk >= route.truth ? 'PRESSURE VECTOR' : 'WITNESS VECTOR',
          title: '先抵达的人',
          summary: '链路在最后几十秒里一段一段掉帧，你没有再收到她完整的声音，只剩一张不断重写的山脊星图。',
          body: '任务归档会把这次行动标成失败，但你知道那不是失败。那是一场到达。她继续向前，把真相送进了你再也无法跟上的深处。',
        };
      }

      return {
        code: 'WHITEOUT LOSS',
        vector: 'PRESSURE VECTOR',
        title: '断在更深处的人',
        summary: '你让她继续往前，但前面几次高压和误判已经把这条路线磨到极限。最后留下的不是抵达，而是失联。',
        body: '归档只收到了几段碎裂的高度数据和一句被雪噪切断的话。你知道她确实走进去了，只是这一次，前面那些选择没有把路铺成“到达”，而是铺成了“消失”。',
      };
    }

    if (route.dominant === 'liminal' && route.trust >= 2 && route.truth >= 2) {
      return {
        code: 'ECHO LOOP',
        vector: 'WITNESS VECTOR',
        title: '另一端的人',
        summary: 'NIA-7 没有继续，也没有返回。她把自己留在回响最强的那一层，只为了把链路再撑久一点。',
        body: '在连接熄灭前，你收到了最后一条短讯: “如果下一次你还会听见我，第一句别问我在哪里。先告诉我，左边那道山脊后面发红的东西，到底是什么。”',
      };
    }

    return {
      code: 'ANCHOR VIGIL',
      vector: route.vector,
      title: '留在风暴中心的人',
      summary: '她停在回响中心，不是为了永远留在那里，而是为了把你们前面一路没能确认的东西再钉牢一点。',
      body: '这是一个被前面所有犹豫和逼近共同推出来的停顿。她没有真正回来，也没有继续深入，只是把自己变成了链路最后的锚点，让这场行动以悬置而不是结论收尾。',
    };
  };

  const openTransmission = (nodeId: string, dist: number) => {
    const event = SIGNAL_EVENT_MAP.get(nodeId);
    if (!event || completedSignals[nodeId] || !signalsArmed.value) return;

    clearTimers();
    clearScheduledSignal();
    const cue = TECH_WINDOW_CUES[nodeId];
    const cueDelay = cue ? WINDOW_MIN_DELAY_BY_MODE[cue.mode] : 1400;
    if (cue) {
      environmentMode.value = cue.mode;
      triggerSceneCue(cue, 2200);
    }

    pendingTransmission.value = {
      id: nodeId,
      title: event.title,
      subtitle: event.subtitle,
      dist: dist.toFixed(1),
      prompt: cue ? `链路正在穿过 ${cue.title}，先做一点预热工作。` : '第一道回响正在成形，先把链路稳住。',
      progress: 0,
      windowReady: false,
      actions: createPrepActions(cue?.mode ?? 'calm'),
      usedActions: [],
      lastResult: '正式建议窗口还没建立。先做一次链路预热。',
    };

    const openWindow = () => {
      if (!pendingTransmission.value || pendingTransmission.value.id !== nodeId) return;

      pendingTransmission.value = {
        ...pendingTransmission.value,
        windowReady: true,
        lastResult:
          pendingTransmission.value.progress > 0
            ? '窗口已经稳定。你可以接入正式建议。'
            : '窗口已经稳定，但你最好先做一次链路预热。',
      };
    };

    const resolvedDelay = Math.max(event.delayMs ?? 0, cueDelay);
    openTimer = setTimeout(openWindow, resolvedDelay);
  };

  const openPendingTransmission = () => {
    if (!pendingTransmission.value || !pendingTransmission.value.windowReady || pendingTransmission.value.progress < 1) {
      return;
    }

    const pending = pendingTransmission.value;
    const event = SIGNAL_EVENT_MAP.get(pending.id);
    if (!event) {
      pendingTransmission.value = null;
      return;
    }

    pendingTransmission.value = null;
    const mode = TECH_WINDOW_CUES[pending.id]?.mode ?? 'calm';
    const steps = createBufferSteps(pending.id, mode);
    const totalDuration = pending.id === 'Ω-01' ? 2200 : 1550;

    bufferingTransmission.value = {
      id: pending.id,
      title: pending.title,
      subtitle: pending.subtitle,
      dist: pending.dist,
      mode,
      lead: pending.id === 'Ω-01' ? '正在检索首道回响片段' : '正在调取现场数据',
      steps,
      stepIndex: 0,
      progress: 0.12,
    };

    steps.forEach((_, index) => {
      const stepDelay = Math.round((totalDuration / steps.length) * index);
      const timer = setTimeout(() => {
        if (!bufferingTransmission.value || bufferingTransmission.value.id !== pending.id) return;
        bufferingTransmission.value = {
          ...bufferingTransmission.value,
          stepIndex: index,
          progress: Math.min(0.3 + ((index + 1) / steps.length) * 0.62, 0.96),
        };
      }, stepDelay);
      bufferStepTimers.push(timer);
    });

    bufferTimer = setTimeout(() => {
      const quality = pending.progress;
      const route = pending.id === FINAL_SIGNAL_ID ? createRouteProfile(snapshotStats()) : null;
      activeTransmission.value = {
        id: pending.id,
        title: pending.title,
        subtitle: pending.subtitle,
        dist: pending.dist,
        message: route ? buildFinalMessage(event.message, route) : event.message,
        choices: (route ? buildFinalChoices(event.choices, route) : event.choices).map((choice) => ({
          ...choice,
          obscured: choice.obscured && quality < 2,
        })),
        stage: 'choice',
      };
      bufferingTransmission.value = null;
      bufferTimer = null;
      bufferStepTimers = [];
    }, totalDuration);
  };

  const performPrepAction = (actionId: string) => {
    if (!pendingTransmission.value) return;

    const action = pendingTransmission.value.actions.find((item) => item.id === actionId);
    if (!action || pendingTransmission.value.usedActions.includes(actionId)) return;

    pendingTransmission.value = {
      ...pendingTransmission.value,
      progress: Math.min(3, pendingTransmission.value.progress + 1),
      usedActions: [...pendingTransmission.value.usedActions, actionId],
      lastResult: pendingTransmission.value.windowReady
        ? `${action.result} 正式窗口已稳定，可以接入。`
        : `${action.result} 正式窗口还在生成。`,
    };
  };

  const sendAdvice = (choice: CommChoice) => {
    if (!activeTransmission.value || activeTransmission.value.stage !== 'choice') return null;

    const transmissionId = activeTransmission.value.id;
    const routeBeforeFinal = transmissionId === FINAL_SIGNAL_ID ? snapshotStats() : null;
    Object.entries(choice.effects).forEach(([key, delta]) => {
      updateStat(key as StatKey, delta);
    });

    completedSignals[transmissionId] = true;
    lastAdvisory.value = choice.id;
    lastFieldReply.value = 'READING SIGNAL...';

    const responseCue = TECH_RESPONSE_CUES[choice.id];
    if (responseCue) {
      environmentMode.value = responseCue.mode;
      triggerSceneCue(responseCue, 2600);
    }

    activeTransmission.value = {
      ...activeTransmission.value,
      stage: 'response',
      selectedChoice: choice,
      reply: '',
    };

    replyTimer = setTimeout(() => {
      if (!activeTransmission.value) return;

      lastFieldReply.value = choice.reply;
      activeTransmission.value = {
        ...activeTransmission.value,
        reply: choice.reply,
      };

      signalTimer = setTimeout(() => {
        if (transmissionId === FINAL_SIGNAL_ID && routeBeforeFinal) {
          endingPanel.value = resolveEnding(choice, routeBeforeFinal);
        }
        activeTransmission.value = null;
        if (transmissionId !== FINAL_SIGNAL_ID) {
          scheduleUpcomingSignal();
        }
      }, 3600);
    }, 900);

    return transmissionId;
  };

  const pendingSignals = computed(() =>
    Object.values(completedSignals).filter((completed) => !completed).length,
  );

  const linkStatus = computed(() => {
    if (!isExploring.value) return 'LINK STANDBY';
    if (endingPanel.value) return 'LINK RESOLVED';
    if (introBriefingIndex.value !== null) return 'ROLE BRIEFING';
    if (bufferingTransmission.value) return 'WINDOW SYNC';
    return activeTransmission.value ? 'LIVE ADVISORY WINDOW' : 'LINK TRACKING';
  });

  const introBriefing = computed<IntroBriefing | null>(() => (
    introBriefingIndex.value === null ? null : TECH_INTRO_BRIEFING[introBriefingIndex.value]
  ));

  const vectorLabel = computed(() => {
    return createRouteProfile(snapshotStats()).vector;
  });

  const statDisplay = computed(() => [
    { label: 'TRUST', value: stats.trust },
    { label: 'RISK', value: stats.risk },
    { label: 'TRUTH', value: stats.truth },
  ]);

  const nextSignalLabel = computed(() => {
    if (!nextSignalId.value) return 'STANDBY';
    const seconds = Math.ceil(nextSignalCountdownMs.value / 1000);
    return `${nextSignalId.value} IN ${seconds.toString().padStart(2, '0')}s`;
  });

  const dataLines = computed(() => [
    `LINK::${isExploring.value ? 'OPEN' : 'SEALED'}.............`,
    'FIELD_UNIT: NIA-7',
    `TRUST_INDEX: ${stats.trust.toString().padStart(2, '0')}`,
    `RISK_VECTOR: ${stats.risk.toString().padStart(2, '0')}`,
    `TRUTH_DEPTH: ${stats.truth.toString().padStart(2, '0')}`,
    `ROUTE_MARKERS: ${routeMarkers.value.toString().padStart(2, '0')}`,
    `NEXT_WINDOW: ${nextSignalLabel.value}`,
    `LAST_ADVICE: ${lastAdvisory.value}`,
    `FIELD_REPLY: ${lastFieldReply.value}`,
  ]);

  onMounted(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', handleVisibilityChange);
    }
  });

  onBeforeUnmount(() => {
    if (typeof document !== 'undefined') {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    }
    clearScheduledSignal();
  });

  return {
    activeTransmission,
    advanceIntroBriefing,
    completedSignals,
    dataLines,
    dismissNarrative,
    endingPanel,
    introBriefing,
    introBriefingIndex,
    linkStatus,
    bufferingTransmission,
    openTransmission,
    pendingSignals,
    pendingTransmission,
    nextSignalCountdownMs,
    nextSignalLabel,
    openPendingTransmission,
    scheduleUpcomingSignal,
    performPrepAction,
    resetSession,
    environmentMode,
    sceneCue,
    sendAdvice,
    signalsArmed,
    startIntroBriefing,
    statDisplay,
    stats,
    triggerSceneCue,
    vectorLabel,
  };
}
