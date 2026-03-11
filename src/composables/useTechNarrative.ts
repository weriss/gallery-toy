import { computed, reactive, ref, type Ref } from 'vue';
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

const SIGNAL_EVENT_MAP = new Map(TECH_SIGNAL_LAYOUTS.map((layout) => [layout.id, layout.event]));
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
  const completedSignals = reactive<Record<string, boolean>>(
    Object.fromEntries(TECH_SIGNAL_LAYOUTS.map((layout) => [layout.id, false])),
  );

  let signalTimer: ReturnType<typeof setTimeout> | null = null;
  let replyTimer: ReturnType<typeof setTimeout> | null = null;
  let cueTimer: ReturnType<typeof setTimeout> | null = null;
  let openTimer: ReturnType<typeof setTimeout> | null = null;
  let bufferTimer: ReturnType<typeof setTimeout> | null = null;
  let bufferStepTimers: ReturnType<typeof setTimeout>[] = [];

  const clearTimers = () => {
    if (signalTimer) clearTimeout(signalTimer);
    if (replyTimer) clearTimeout(replyTimer);
    if (cueTimer) clearTimeout(cueTimer);
    if (openTimer) clearTimeout(openTimer);
    if (bufferTimer) clearTimeout(bufferTimer);
    bufferStepTimers.forEach((timer) => clearTimeout(timer));
    signalTimer = null;
    replyTimer = null;
    cueTimer = null;
    openTimer = null;
    bufferTimer = null;
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

  const resolveEnding = (choice: CommChoice): EndingPanel => {
    if (choice.id === 'E1') {
      return {
        code: 'SAFE RETURN',
        vector: 'SAFE RETURN VECTOR',
        title: '带回山风的人',
        summary: 'NIA-7 离开了 WERISS。她没有带出全部答案，但她把这条链路和自己的呼吸一起带回来了。',
        body: '归档里只留下了一段被反复擦除的地形记录，以及一句她拒绝解释的话: “你那天让我回头，所以我才确认，山后面真的还有路。”',
      };
    }

    if (choice.id === 'E2') {
      return {
        code: 'FIRST ARRIVAL',
        vector: stats.risk >= stats.truth ? 'PRESSURE VECTOR' : 'WITNESS VECTOR',
        title: '先抵达的人',
        summary: '链路在最后几十秒里一段一段掉帧，你没有再收到她完整的声音，只剩一张不断重写的山脊星图。',
        body: '任务归档会把这次行动标成失败，但你知道那不是失败。那是一场到达。她继续向前，把真相送进了你再也无法跟上的深处。',
      };
    }

    return {
      code: 'ECHO LOOP',
      vector: 'WITNESS VECTOR',
      title: '另一端的人',
      summary: 'NIA-7 没有继续，也没有返回。她把自己留在回响最强的那一层，只为了把链路再撑久一点。',
      body: '在连接熄灭前，你收到了最后一条短讯: “如果下一次你还会听见我，第一句别问我在哪里。先告诉我，左边那道山脊后面发红的东西，到底是什么。”',
    };
  };

  const openTransmission = (nodeId: string, dist: number) => {
    const event = SIGNAL_EVENT_MAP.get(nodeId);
    if (!event || completedSignals[nodeId] || !signalsArmed.value) return;

    clearTimers();
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
      activeTransmission.value = {
        id: pending.id,
        title: pending.title,
        subtitle: pending.subtitle,
        dist: pending.dist,
        message: event.message,
        choices: event.choices.map((choice) => ({
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
        if (transmissionId === FINAL_SIGNAL_ID) {
          endingPanel.value = resolveEnding(choice);
        }
        activeTransmission.value = null;
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
    if (stats.truth >= stats.trust && stats.truth >= stats.risk + 1) return 'WITNESS VECTOR';
    if (stats.risk > stats.trust) return 'PRESSURE VECTOR';
    return 'SAFE RETURN VECTOR';
  });

  const statDisplay = computed(() => [
    { label: 'TRUST', value: stats.trust },
    { label: 'RISK', value: stats.risk },
    { label: 'TRUTH', value: stats.truth },
  ]);

  const dataLines = computed(() => [
    `LINK::${isExploring.value ? 'OPEN' : 'SEALED'}.............`,
    'FIELD_UNIT: NIA-7',
    `TRUST_INDEX: ${stats.trust.toString().padStart(2, '0')}`,
    `RISK_VECTOR: ${stats.risk.toString().padStart(2, '0')}`,
    `TRUTH_DEPTH: ${stats.truth.toString().padStart(2, '0')}`,
    `ROUTE_MARKERS: ${routeMarkers.value.toString().padStart(2, '0')}`,
    `LAST_ADVICE: ${lastAdvisory.value}`,
    `FIELD_REPLY: ${lastFieldReply.value}`,
  ]);

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
    openPendingTransmission,
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
