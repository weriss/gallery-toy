import { computed, reactive, ref, type Ref } from 'vue';
import {
  CLOSED_ADVISORY_STATUS,
  FINAL_SIGNAL_ID,
  IDLE_FIELD_REPLY,
  INITIAL_ADVISORY_STATUS,
  INITIAL_FIELD_REPLY,
  type AnalysisBriefCard,
  TECH_INTRO_BRIEFING,
  TECH_INTRO_SEQUENCE_CUE,
  TECH_RESPONSE_CUES,
  TECH_SIGNAL_LAYOUTS,
  TECH_WINDOW_CUES,
  type ActiveTransmission,
  type AnalysisClue,
  type AnalysisHypothesis,
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

interface PendingTransmission {
  id: string;
  title: string;
  subtitle: string;
  dist: string;
  displayTitle: string;
  question: string;
  briefing: string;
  briefCards: AnalysisBriefCard[];
  objective: string;
  howToPlay: string[];
  clues: AnalysisClue[];
  hypotheses: AnalysisHypothesis[];
  discoveredClueIds: string[];
  attemptedHypothesisIds: string[];
  selectedHypothesisId: string | null;
  breakthroughTitle: string;
  breakthroughDetail: string;
  progress: number;
  windowReady: boolean;
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
const SCRIPTED_SIGNAL_DISTANCE: Record<string, number> = {
  'Ω-01': 2.8,
  'Ψ-02': 3.1,
  'Δ-03': 2.6,
  'Λ-04': 2.9,
  'X-05': 3.4,
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
  let bufferTimer: ReturnType<typeof setTimeout> | null = null;
  let bufferStepTimers: ReturnType<typeof setTimeout>[] = [];

  const clearTimers = () => {
    if (signalTimer) clearTimeout(signalTimer);
    if (replyTimer) clearTimeout(replyTimer);
    if (cueTimer) clearTimeout(cueTimer);
    if (bufferTimer) clearTimeout(bufferTimer);
    bufferStepTimers.forEach((timer) => clearTimeout(timer));
    signalTimer = null;
    replyTimer = null;
    cueTimer = null;
    bufferTimer = null;
    bufferStepTimers = [];
  };

  const createBufferSteps = (nodeId: string, mode: SceneCueMode | 'calm') => {
    if (nodeId === 'Ω-01') {
      return [
        '归档红脊呼吸层规则',
        '回放 NIA-7 首次视野切片',
        '展开第一道正式建议窗口',
      ];
    }
    if (mode === 'storm') {
      return ['整理雾墙背风面线索', '压低链路风噪', '部署横向观察窗口'];
    }
    if (mode === 'fissure') {
      return ['复核裂口循环深度', '锁定探针折返点', '展开下行建议窗口'];
    }
    if (mode === 'magnetic') {
      return ['剥离受污染地图层', '保留身体感知锚点', '重建导航窗口'];
    }
    if (mode === 'skyfold') {
      return ['回算整条路线倾向', '固定最终代价锚点', '展开终局建议窗口'];
    }
    return ['整理现场线索', '压低链路噪声', '建立正式建议窗口'];
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

  const triggerSceneCue = (cue: SceneCue, duration = 2600) => {
    if (cueTimer) clearTimeout(cueTimer);
    sceneCue.value = cue;
    cueTimer = setTimeout(() => {
      sceneCue.value = null;
    }, duration);
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
    activeTransmission.value = null;
    bufferingTransmission.value = null;
    const cue = TECH_WINDOW_CUES[nodeId];
    if (cue) {
      environmentMode.value = cue.mode;
      triggerSceneCue(cue, 2400);
    }

    pendingTransmission.value = {
      id: nodeId,
      title: event.title,
      subtitle: event.subtitle,
      dist: dist.toFixed(1),
      displayTitle: event.analysis.displayTitle,
      question: event.analysis.question,
      briefing: event.analysis.briefing,
      briefCards: event.analysis.briefCards,
      objective: event.analysis.objective,
      howToPlay: event.analysis.howToPlay,
      clues: event.analysis.clues,
      hypotheses: event.analysis.hypotheses,
      discoveredClueIds: [],
      attemptedHypothesisIds: [],
      selectedHypothesisId: null,
      breakthroughTitle: event.analysis.breakthroughTitle,
      breakthroughDetail: event.analysis.breakthroughDetail,
      progress: 0,
      windowReady: false,
      lastResult: '副本分析已打开。先调取线索，再判断这关真正的规则。',
    };
  };

  const scheduleUpcomingSignal = () => {
    const nextId = getUpcomingSignalId();
    if (!nextId) {
      pendingTransmission.value = null;
      return;
    }
    openTransmission(nextId, SCRIPTED_SIGNAL_DISTANCE[nextId] ?? 3);
  };

  const inspectPendingClue = (clueId: string) => {
    if (!pendingTransmission.value) return;

    const clue = pendingTransmission.value.clues.find((item) => item.id === clueId);
    if (!clue) return;

    const alreadyDiscovered = pendingTransmission.value.discoveredClueIds.includes(clueId);
    const nextDiscoveredClueIds = alreadyDiscovered
      ? pendingTransmission.value.discoveredClueIds
      : [...pendingTransmission.value.discoveredClueIds, clueId];

    pendingTransmission.value = {
      ...pendingTransmission.value,
      discoveredClueIds: nextDiscoveredClueIds,
      progress: nextDiscoveredClueIds.length,
      lastResult: alreadyDiscovered
        ? clue.detail
        : `${clue.detail}${nextDiscoveredClueIds.length === pendingTransmission.value.clues.length ? ' 全部核心线索已归档，可以提交破局判断。' : ''}`,
    };
  };

  const submitPendingHypothesis = (hypothesisId: string) => {
    if (!pendingTransmission.value) return;

    const hypothesis = pendingTransmission.value.hypotheses.find((item) => item.id === hypothesisId);
    const event = SIGNAL_EVENT_MAP.get(pendingTransmission.value.id);
    if (!hypothesis || !event) return;

    if (pendingTransmission.value.discoveredClueIds.length < 2) {
      pendingTransmission.value = {
        ...pendingTransmission.value,
        lastResult: '至少先看两条线索，不然这更像撞运气，而不是破局。',
      };
      return;
    }

    const analysis = event.analysis;
    if (hypothesisId === analysis.solutionId) {
      pendingTransmission.value = {
        ...pendingTransmission.value,
        selectedHypothesisId: hypothesisId,
        windowReady: true,
        lastResult: `${analysis.solutionFeedback} ${analysis.breakthroughTitle}：${analysis.breakthroughDetail}`,
      };
      return;
    }

    const alreadyAttempted = pendingTransmission.value.attemptedHypothesisIds.includes(hypothesisId);
    if (!alreadyAttempted) {
      updateStat('risk', 1);
    }

    pendingTransmission.value = {
      ...pendingTransmission.value,
      selectedHypothesisId: hypothesisId,
      attemptedHypothesisIds: alreadyAttempted
        ? pendingTransmission.value.attemptedHypothesisIds
        : [...pendingTransmission.value.attemptedHypothesisIds, hypothesisId],
      lastResult: `${analysis.failureFeedback}${alreadyAttempted ? '' : ' 风险 +1。'}`,
    };
  };

  const openPendingTransmission = () => {
    if (!pendingTransmission.value || !pendingTransmission.value.windowReady) {
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
      lead: pending.breakthroughTitle,
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
      const clarity = pending.discoveredClueIds.length;
      const route = pending.id === FINAL_SIGNAL_ID ? createRouteProfile(snapshotStats()) : null;
      activeTransmission.value = {
        id: pending.id,
        title: pending.title,
        subtitle: pending.subtitle,
        dist: pending.dist,
        message: route ? buildFinalMessage(event.message, route) : event.message,
        choices: (route ? buildFinalChoices(event.choices, route) : event.choices).map((choice) => ({
          ...choice,
          obscured: choice.obscured && clarity < pending.clues.length,
        })),
        stage: 'choice',
      };
      bufferingTransmission.value = null;
      bufferTimer = null;
      bufferStepTimers = [];
    }, totalDuration);
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
    if (pendingTransmission.value) return pendingTransmission.value.windowReady ? 'BREAKTHROUGH LOCKED' : 'CASE ANALYSIS';
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
    if (pendingTransmission.value) {
      return pendingTransmission.value.windowReady
        ? `${pendingTransmission.value.id} READY`
        : `${pendingTransmission.value.id} CASE OPEN`;
    }
    if (bufferingTransmission.value) return `${bufferingTransmission.value.id} WINDOW FORMING`;
    if (activeTransmission.value) return `${activeTransmission.value.id} LIVE`;
    const nextId = getUpcomingSignalId();
    return nextId ? `${nextId} READY` : 'COMPLETE';
  });

  const dataLines = computed(() => [
    `LINK::${isExploring.value ? 'OPEN' : 'SEALED'}.............`,
    'FIELD_UNIT: NIA-7',
    `TRUST_INDEX: ${stats.trust.toString().padStart(2, '0')}`,
    `RISK_VECTOR: ${stats.risk.toString().padStart(2, '0')}`,
    `TRUTH_DEPTH: ${stats.truth.toString().padStart(2, '0')}`,
    `ROUTE_MARKERS: ${routeMarkers.value.toString().padStart(2, '0')}`,
    `CASE_FILE: ${nextSignalLabel.value}`,
    `LAST_ADVICE: ${lastAdvisory.value}`,
    `FIELD_REPLY: ${lastFieldReply.value}`,
  ]);

  return {
    activeTransmission,
    advanceIntroBriefing,
    bufferingTransmission,
    completedSignals,
    dataLines,
    dismissNarrative,
    endingPanel,
    environmentMode,
    inspectPendingClue,
    introBriefing,
    introBriefingIndex,
    linkStatus,
    nextSignalLabel,
    openPendingTransmission,
    pendingSignals,
    pendingTransmission,
    resetSession,
    sceneCue,
    scheduleUpcomingSignal,
    sendAdvice,
    signalsArmed,
    startIntroBriefing,
    statDisplay,
    stats,
    submitPendingHypothesis,
    vectorLabel,
  };
}
