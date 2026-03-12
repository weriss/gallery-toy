<template>
  <div class="page-tech" :class="pageStateClass">
    <!-- Three.js 3D 场景 -->
    <canvas ref="canvasEl" class="scene-canvas"></canvas>
    <div
      v-if="showCornerMatte"
      class="corner-matte"
      :class="{ 'corner-matte-intro': introShroudVisible }"
    ></div>
    <div
      v-if="introShroudVisible"
      class="intro-shroud"
      :style="introShroudStyle"
    ></div>
    <div
      v-if="introTransitionActive"
      class="intro-transition"
    ></div>

    <!-- 扫描线效果 -->
    <div class="scanline-overlay"></div>
    
    <!-- 色差边缘 -->
    <div class="chromatic-edge"></div>
    <div class="weather-overlay" :class="pageStateClass"></div>
    <div class="noise-overlay"></div>

    <Transition name="cue">
      <div
        v-if="sceneCue && !activeTransmission && !introBriefing && !endingPanel"
        class="scene-cue"
        :class="`cue-${sceneCue.mode}`"
      >
        <div class="cue-weather"></div>
        <div class="cue-frame">
          <div class="cue-kicker">FIELD SHIFT</div>
          <h2 class="cue-title">{{ sceneCue.title }}</h2>
          <p class="cue-body">{{ sceneCue.body }}</p>
        </div>
      </div>
    </Transition>

    <!-- HUD 角框 -->
    <div class="hud-corner tl"></div>
    <div class="hud-corner tr"></div>
    <div class="hud-corner bl"></div>
    <div class="hud-corner br"></div>

    <!-- HUD 状态 -->
    <div class="hud-status">
      <div><span class="status-dot"></span>{{ linkStatus }}</div>
      <div>{{ currentDate }}</div>
      <div>FIELD UNIT: NIA-7</div>
      <div>PENDING WINDOWS: {{ pendingSignals }}</div>
      <div>NEXT WINDOW: {{ nextSignalLabel }}</div>
      <div>VECTOR: {{ vectorLabel }}</div>
    </div>

    <!-- 左下角数据流 -->
    <div class="data-stream">
      <div v-for="(line, i) in dataLines" :key="i" class="data-line" :style="{ animationDelay: `${i * 0.3}s` }">
        {{ line }}
      </div>
    </div>

    <!-- 主内容 -->
    <div v-show="showCover" class="tech-content" ref="contentEl">
      <div class="tech-label">// ECHO DESK · REMOTE ADVISORY LINK</div>
      <h1 class="tech-title" data-text="WERISS">WERISS</h1>
      <div class="tech-tagline">
        <span class="tag-line"></span>
        YOU CANNOT ENTER, BUT YOUR WORDS ARRIVE FIRST
      </div>
      
      <div class="tech-description">
        回响链路已重连。<br/>
        一名进入山脉的实地人员正在向你发送失真信号。<br/>
        <span class="red-text">你只有几秒</span>决定她下一步该怎么走。
      </div>

      <button class="tech-btn" @click="handleExplore">
        <span class="btn-bracket">[</span>
        LINK IN
        <span class="btn-bracket">]</span>
      </button>
    </div>

    <!-- 探索模式：退出按钮 + 速度控制 -->
    <div v-show="showExploreHud" class="explore-hud" ref="exploreHudEl">
      <div class="link-metrics">
        <div v-for="metric in statDisplay" :key="metric.label" class="metric-chip">
          <span class="metric-label">{{ metric.label }}</span>
          <span class="metric-value">{{ metric.value }}</span>
        </div>
      </div>
      <div class="tour-speed">
        <span class="speed-label">CRUISE SPEED</span>
        <input type="range" min="0.2" max="3" step="0.1" v-model.number="tourSpeed" class="speed-slider" />
        <span class="speed-val">{{ tourSpeed.toFixed(1) }}x</span>
      </div>
      <button class="exit-btn" @click="handleExit">
        <span class="btn-bracket">[</span> EXIT <span class="btn-bracket">]</span>
      </button>
    </div>

    <Transition name="briefing">
      <div v-if="introBriefing" class="briefing-panel">
        <div class="briefing-kicker">ROLE BRIEF / {{ introBriefing.label }}</div>
        <h2 class="briefing-title">{{ introBriefing.title }}</h2>
        <p class="briefing-copy">{{ introBriefing.body }}</p>
        <div class="briefing-progress">
          <span
            v-for="step in introStepsCount"
            :key="step"
            class="progress-dot"
            :class="{ active: step - 1 === introBriefingIndex }"
          ></span>
        </div>
        <button class="choice-btn briefing-action" @click="handleAcknowledgeIntro">
          <span class="choice-id">GO</span>
          <span class="choice-copy">{{ introBriefing.action }}</span>
        </button>
      </div>
    </Transition>

    <Transition name="prep">
      <div v-if="pendingTransmission && !activeTransmission" class="prep-panel">
        <div class="prep-header">
          <span class="prep-kicker">LINK PREP / {{ pendingTransmission.id }}</span>
          <span class="prep-dist">DIST {{ pendingTransmission.dist }}m</span>
        </div>
        <h2 class="prep-title">{{ pendingTransmission.title }}</h2>
        <p class="prep-body">{{ pendingTransmission.prompt }}</p>
        <div class="prep-progress">
          <span
            v-for="step in 3"
            :key="step"
            class="prep-dot"
            :class="{ active: step <= pendingTransmission.progress }"
          ></span>
        </div>
        <div class="prep-instruction">
          <span class="prep-instruction-label">WINDOW STATUS</span>
          <span>
            {{
              pendingTransmission.windowReady
                ? '正式窗口已稳定，完成至少 1 次预热后即可接入。'
                : '正式窗口还在生成，先做一次链路预热。'
            }}
          </span>
        </div>
        <div class="prep-actions">
          <button
            v-for="action in pendingTransmission.actions"
            :key="action.id"
            class="prep-action"
            :class="{ used: pendingTransmission.usedActions.includes(action.id) }"
            :disabled="pendingTransmission.usedActions.includes(action.id)"
            @click="handlePrepAction(action.id)"
          >
            {{ action.label }}
          </button>
        </div>
        <div class="prep-result">{{ pendingTransmission.lastResult }}</div>
        <button
          class="prep-confirm"
          :class="{ ready: canOpenPendingWindow }"
          :disabled="!canOpenPendingWindow"
          @click="handleOpenPendingWindow"
        >
          {{ canOpenPendingWindow ? '接入正式建议窗口' : '等待链路稳定' }}
        </button>
      </div>
    </Transition>

    <Transition name="buffer">
      <div
        v-if="bufferingTransmission && !activeTransmission"
        class="buffer-panel"
        :class="`buffer-${bufferingTransmission.mode}`"
      >
        <div class="buffer-grid"></div>
        <div class="buffer-header">
          <span class="buffer-kicker">WINDOW SYNC / {{ bufferingTransmission.id }}</span>
          <span class="buffer-dist">DIST {{ bufferingTransmission.dist }}m</span>
        </div>
        <h2 class="buffer-title">{{ bufferingTransmission.title }}</h2>
        <p class="buffer-lead">{{ bufferingTransmission.lead }}</p>
        <div class="buffer-progress">
          <div
            class="buffer-progress-fill"
            :style="{ transform: `scaleX(${bufferingTransmission.progress})` }"
          ></div>
        </div>
        <div class="buffer-steps">
          <div
            v-for="(step, index) in bufferingTransmission.steps"
            :key="step"
            class="buffer-step"
            :class="{
              active: index === bufferingTransmission.stepIndex,
              done: index < bufferingTransmission.stepIndex,
            }"
          >
            <span class="buffer-step-index">0{{ index + 1 }}</span>
            <span>{{ step }}</span>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 信号弹窗 -->
    <Transition name="signal">
      <div v-if="activeTransmission" class="comms-popup">
        <div class="signal-header">
          <span class="signal-tag">// WINDOW_{{ activeTransmission.id }}</span>
          <span class="signal-dist">DIST: {{ activeTransmission.dist }}m</span>
        </div>
        <div class="signal-meta">
          <div>{{ activeTransmission.title }}</div>
          <div>{{ activeTransmission.subtitle }}</div>
        </div>
        <div class="signal-body" v-html="activeTransmission.message"></div>

        <div v-if="activeTransmission.stage === 'choice'" class="choice-panel">
          <div class="panel-label">TRANSMIT ADVICE</div>
          <button
            v-for="choice in activeTransmission.choices"
            :key="choice.id"
            class="choice-btn"
            :class="{ obscured: choice.obscured }"
            @click="handleSendAdvice(choice)"
          >
            <span class="choice-id">{{ choice.id }}</span>
            <span class="choice-copy">{{ choice.label }}</span>
          </button>
        </div>

        <div v-else class="reply-panel">
          <div class="panel-label">ADVICE SENT</div>
          <div class="outgoing-copy">{{ activeTransmission.selectedChoice?.advisory }}</div>
          <div class="panel-label panel-label-reply">FIELD REPLY</div>
          <div class="incoming-copy" :class="{ pending: !activeTransmission.reply }">
            {{ activeTransmission.reply || 'NIA-7 is reading your signal...' }}
          </div>
        </div>

        <div class="signal-bar"></div>
      </div>
    </Transition>

    <Transition name="ending">
      <div v-if="endingPanel" class="ending-panel">
        <div class="ending-header">
          <div class="ending-kicker">ENDING / {{ endingPanel.code }}</div>
          <div class="ending-vector">{{ endingPanel.vector }}</div>
        </div>
        <h2 class="ending-title">{{ endingPanel.title }}</h2>
        <p class="ending-summary">{{ endingPanel.summary }}</p>
        <div class="ending-body">{{ endingPanel.body }}</div>
        <div class="ending-stats">
          <div class="ending-stat">
            <span>TRUST</span>
            <strong>{{ stats.trust }}</strong>
          </div>
          <div class="ending-stat">
            <span>RISK</span>
            <strong>{{ stats.risk }}</strong>
          </div>
          <div class="ending-stat">
            <span>TRUTH</span>
            <strong>{{ stats.truth }}</strong>
          </div>
        </div>
        <div class="ending-actions">
          <button class="choice-btn ending-action" @click="handleRestartLink">
            <span class="choice-id">R1</span>
            <span class="choice-copy">重新接入链路，开始下一轮回响</span>
          </button>
          <button class="choice-btn ending-action ending-action-muted" @click="handleExit">
            <span class="choice-id">R2</span>
            <span class="choice-copy">关闭链路，返回封面</span>
          </button>
        </div>
      </div>
    </Transition>

    <!-- 点击提示 -->
    <div
      class="click-hint"
      v-if="isExploring && signalsArmed && !activeTransmission && !bufferingTransmission && !endingPanel && !introBriefing"
    >
      CLICK TERRAIN TO DROP ROUTE MARKERS
    </div>

    <!-- 涟漪 Canvas 覆盖层 -->
    <canvas ref="rippleEl" class="ripple-canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import gsap from 'gsap';
import { useTechNarrative } from '@/composables/useTechNarrative';
import { useTechScene } from '@/composables/useTechScene';

const props = defineProps<{
  active: boolean;
}>();

const emit = defineEmits<{ (e: 'explore-mode', active: boolean): void }>();

const canvasEl = ref<HTMLCanvasElement | null>(null);
const contentEl = ref<HTMLDivElement | null>(null);
const exploreHudEl = ref<HTMLDivElement | null>(null);
const rippleEl = ref<HTMLCanvasElement | null>(null);

const isExploring = ref(false);
const showCover = ref(true);
const showExploreHud = ref(false);
const tourSpeed = ref(1.0);
const routeMarkers = ref(0);
const introTransitionActive = ref(false);
let introTransitionTimer: ReturnType<typeof setTimeout> | null = null;
let introTransitionResetTimer: ReturnType<typeof setTimeout> | null = null;
const {
  activeTransmission,
  advanceIntroBriefing,
  bufferingTransmission,
  completedSignals,
  dataLines,
  dismissNarrative,
  endingPanel,
  environmentMode,
  introBriefing,
  introBriefingIndex,
  linkStatus,
  openPendingTransmission,
  pendingSignals,
  pendingTransmission,
  nextSignalLabel,
  performPrepAction,
  resetSession,
  scheduleUpcomingSignal,
  sceneCue,
  sendAdvice,
  signalsArmed,
  startIntroBriefing,
  statDisplay,
  stats,
  vectorLabel,
} = useTechNarrative({
  isExploring,
  routeMarkers,
});

const {
  animateScene,
  disposeScene,
  flyToTourStart,
  initScene,
  initializeRippleCanvas,
  onCanvasClick,
  onMouseMove,
  onResize,
  playIntroSequence,
  resetSessionVisuals,
  resetTour,
  returnCameraHome,
} = useTechScene({
  activeTransmission,
  canvasEl,
  completedSignals,
  isExploring,
  environmentMode,
  rippleEl,
  routeMarkers,
  sceneCue,
  signalsArmed,
  tourSpeed,
});

const pageStateClass = computed(() => `mode-${environmentMode.value}`);
const introStepsCount = 3;
const introRevealLevel = computed(() => {
  if (!isExploring.value) return 0.04;
  if (introBriefingIndex.value === null) return 1;
  return [0.12, 0.32, 0.58][introBriefingIndex.value] ?? 0.12;
});
const introShroudVisible = computed(() => introRevealLevel.value < 1);
const showCornerMatte = computed(() => isExploring.value && !endingPanel.value);
const canOpenPendingWindow = computed(() => (
  Boolean(pendingTransmission.value?.windowReady) && (pendingTransmission.value?.progress ?? 0) > 0
));
const introShroudStyle = computed(() => {
  const radius = 8 + introRevealLevel.value * 60;
  const softA = Math.max(radius - 18, 0);
  const softB = Math.max(radius - 8, 0);
  return {
    background: `radial-gradient(circle at 50% 56%, rgba(3, 2, 5, 0) 0%, rgba(3, 2, 5, 0.05) ${softA}%, rgba(3, 2, 5, 0.22) ${softB}%, rgba(3, 2, 5, 0.68) ${radius}%, rgba(1, 1, 4, 0.98) 100%)`,
  };
});

const currentDate = computed(() => {
  const now = new Date();
  return `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;
});

const restoreCoverState = () => {
  showCover.value = true;
  showExploreHud.value = false;

  nextTick(() => {
    if (contentEl.value && !isExploring.value) {
      gsap.killTweensOf(contentEl.value);
      contentEl.value.style.opacity = '1';
      contentEl.value.style.transform = 'translateY(0)';
    }

    if (exploreHudEl.value && !isExploring.value) {
      gsap.killTweensOf(exploreHudEl.value);
      exploreHudEl.value.style.opacity = '0';
      exploreHudEl.value.style.transform = 'translateY(20px)';
    }
  });
};

const resetTechPageToCover = () => {
  if (introTransitionTimer) clearTimeout(introTransitionTimer);
  if (introTransitionResetTimer) clearTimeout(introTransitionResetTimer);

  introTransitionActive.value = false;
  isExploring.value = false;
  dismissNarrative();
  resetSessionVisuals();
  resetTour();
  returnCameraHome();
  emit('explore-mode', false);
  restoreCoverState();
};

const handleExplore = () => {
  if (isExploring.value) return;

  isExploring.value = true;
  emit('explore-mode', true);
  resetSession();
  resetSessionVisuals();
  resetTour();
  startIntroBriefing();
  playIntroSequence();

  if (contentEl.value) {
    gsap.killTweensOf(contentEl.value);
    gsap.to(contentEl.value, {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: 'power2.in',
      onComplete: () => {
        if (isExploring.value) {
          showCover.value = false;
        }
      }
    });
  } else {
    showCover.value = false;
  }

  showExploreHud.value = true;
  nextTick(() => {
    if (exploreHudEl.value) {
      gsap.killTweensOf(exploreHudEl.value);
      gsap.fromTo(exploreHudEl.value,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: 'power2.out' }
      );
    }
  });
};

const handleAcknowledgeIntro = () => {
  if (introTransitionTimer) clearTimeout(introTransitionTimer);
  if (introTransitionResetTimer) clearTimeout(introTransitionResetTimer);
  introTransitionActive.value = true;

  introTransitionTimer = setTimeout(() => {
    const unlocked = advanceIntroBriefing();
    if (unlocked) {
      flyToTourStart();
      scheduleUpcomingSignal();
    }
  }, 220);

  introTransitionResetTimer = setTimeout(() => {
    introTransitionActive.value = false;
  }, 620);
};

const handleSendAdvice = (choice: NonNullable<typeof activeTransmission.value>['choices'][number]) => {
  sendAdvice(choice);
};

const handlePrepAction = (actionId: string) => {
  performPrepAction(actionId);
};

const handleOpenPendingWindow = () => {
  openPendingTransmission();
};

const handleExit = () => {
  if (!isExploring.value) return;

  isExploring.value = false;
  emit('explore-mode', false);
  dismissNarrative();

  if (exploreHudEl.value) {
    gsap.killTweensOf(exploreHudEl.value);
    gsap.to(exploreHudEl.value, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.in',
      onComplete: () => {
        if (!isExploring.value) {
          showExploreHud.value = false;
        }
      }
    });
  } else {
    showExploreHud.value = false;
  }

  showCover.value = true;
  nextTick(() => {
    if (contentEl.value) {
      gsap.killTweensOf(contentEl.value);
      gsap.fromTo(contentEl.value,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power2.out' }
      );
    }
  });

  returnCameraHome();
};

const handleRestartLink = () => {
  if (!isExploring.value) return;

  resetSession();
  resetSessionVisuals();
  resetTour();
  startIntroBriefing();
  playIntroSequence();
};

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isExploring.value) handleExit();
};

watch(
  () => props.active,
  (active) => {
    if (!active) {
      resetTechPageToCover();
      return;
    }
    if (active) {
      restoreCoverState();
    }
  },
  { immediate: true },
);

onMounted(() => {
  initScene();
  animateScene();
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('resize', onResize);
  window.addEventListener('keydown', onKeyDown);
  initializeRippleCanvas();
  canvasEl.value?.addEventListener('click', onCanvasClick);
});

onUnmounted(() => {
  if (introTransitionTimer) clearTimeout(introTransitionTimer);
  if (introTransitionResetTimer) clearTimeout(introTransitionResetTimer);
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('resize', onResize);
  window.removeEventListener('keydown', onKeyDown);
  canvasEl.value?.removeEventListener('click', onCanvasClick);
  dismissNarrative();
  disposeScene();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Noto+Serif+SC:wght@900&display=swap');

.page-tech {
  width: 100%;
  height: 100%;
  position: relative;
  font-family: 'Space Mono', 'Courier New', monospace;
  background: #030205;
  color: #f0e040;
  overflow: hidden;
}

.scene-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.intro-shroud {
  position: absolute;
  inset: 0;
  z-index: 34;
  pointer-events: none;
  transition: background 0.85s cubic-bezier(0.16, 1, 0.3, 1);
}

.intro-transition {
  position: absolute;
  inset: 0;
  z-index: 35;
  pointer-events: none;
  background:
    radial-gradient(circle at 50% 56%, rgba(255, 244, 198, 0.02) 0%, rgba(255, 244, 198, 0.035) 18%, rgba(3, 2, 5, 0.18) 34%, rgba(3, 2, 5, 0.6) 62%, rgba(1, 1, 4, 0.92) 100%);
  animation: shroudFlow 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.corner-matte {
  position: absolute;
  inset: 0;
  z-index: 33;
  pointer-events: none;
  background:
    radial-gradient(circle at 0 0, rgba(0, 0, 0, 0.82) 0, rgba(0, 0, 0, 0.36) 16%, transparent 34%),
    radial-gradient(circle at 100% 0, rgba(0, 0, 0, 0.82) 0, rgba(0, 0, 0, 0.36) 16%, transparent 34%),
    radial-gradient(circle at 0 100%, rgba(0, 0, 0, 0.82) 0, rgba(0, 0, 0, 0.36) 16%, transparent 34%),
    radial-gradient(circle at 100% 100%, rgba(0, 0, 0, 0.82) 0, rgba(0, 0, 0, 0.36) 16%, transparent 34%);
  opacity: 0.94;
  transition: opacity 0.45s ease;
  animation: matteBreath 7.5s ease-in-out infinite;
}

.corner-matte-intro {
  opacity: 1;
}

.scanline-overlay {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px);
  pointer-events: none;
  z-index: 50;
}

.chromatic-edge {
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 80px rgba(204,0,0,0.12), inset 0 0 30px rgba(80,0,120,0.15);
  pointer-events: none;
  z-index: 50;
}

.weather-overlay,
.noise-overlay,
.scene-cue {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.weather-overlay {
  z-index: 38;
  opacity: 0;
  transition: opacity 0.4s ease, background 0.4s ease;
}

.noise-overlay {
  z-index: 49;
  opacity: 0.16;
  mix-blend-mode: screen;
  background-image:
    radial-gradient(circle at 20% 20%, rgba(255,255,255,0.16) 0 1px, transparent 1px),
    radial-gradient(circle at 80% 40%, rgba(255,255,255,0.08) 0 1px, transparent 1px),
    radial-gradient(circle at 40% 80%, rgba(255,255,255,0.12) 0 1px, transparent 1px);
  background-size: 120px 120px, 160px 160px, 140px 140px;
  animation: noiseDrift 8s linear infinite;
}

@keyframes noiseDrift {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-30px, 18px, 0); }
}

@keyframes matteBreath {
  0%, 100% { opacity: 0.92; transform: scale(1); }
  50% { opacity: 0.985; transform: scale(1.012); }
}

@keyframes irisTransition {
  0% {
    opacity: 0;
    transform: scale(1.04);
    filter: blur(12px);
  }
  35% {
    opacity: 1;
    transform: scale(1);
    filter: blur(2px);
  }
  100% {
    opacity: 0;
    transform: scale(0.98);
    filter: blur(0);
  }
}

@keyframes shroudFlow {
  0% {
    opacity: 0;
    transform: scale(1.08);
    filter: blur(16px);
  }
  35% {
    opacity: 0.8;
    transform: scale(1.03);
    filter: blur(8px);
  }
  70% {
    opacity: 0.42;
    transform: scale(0.995);
    filter: blur(2px);
  }
  100% {
    opacity: 0;
    transform: scale(0.98);
    filter: blur(0);
  }
}

.mode-quake .weather-overlay {
  opacity: 0.28;
  background:
    linear-gradient(135deg, rgba(255, 124, 64, 0.18), transparent 45%),
    repeating-linear-gradient(-24deg, transparent 0 18px, rgba(255, 219, 177, 0.08) 18px 20px);
}

.mode-storm .weather-overlay {
  opacity: 0.34;
  background:
    linear-gradient(180deg, rgba(16, 35, 54, 0.08), rgba(72, 147, 214, 0.18)),
    repeating-linear-gradient(-18deg, transparent 0 14px, rgba(175, 223, 255, 0.12) 14px 16px);
  animation: rainSweep 0.9s linear infinite;
}

.mode-fissure .weather-overlay {
  opacity: 0.42;
  background:
    radial-gradient(circle at 50% 62%, rgba(77, 216, 255, 0.28), transparent 30%),
    linear-gradient(90deg, transparent 0 42%, rgba(7, 18, 28, 0.92) 42% 58%, transparent 58% 100%);
}

.mode-whiteout .weather-overlay {
  opacity: 0.48;
  background:
    radial-gradient(circle at 20% 25%, rgba(255,255,255,0.45), transparent 22%),
    linear-gradient(180deg, rgba(230, 240, 248, 0.48), rgba(180, 195, 210, 0.24));
}

.mode-magnetic .weather-overlay {
  opacity: 0.3;
  background:
    linear-gradient(90deg, rgba(255, 72, 214, 0.1), transparent 35%, rgba(123, 224, 255, 0.12) 65%, transparent),
    repeating-linear-gradient(0deg, transparent 0 4px, rgba(123,224,255,0.05) 4px 5px);
}

.mode-skyfold .weather-overlay {
  opacity: 0.28;
  background:
    radial-gradient(circle at 50% 10%, rgba(255, 239, 181, 0.28), transparent 22%),
    linear-gradient(180deg, rgba(16, 6, 24, 0.12), rgba(42, 11, 38, 0.28)),
    repeating-linear-gradient(90deg, transparent 0 70px, rgba(255, 214, 109, 0.06) 70px 71px);
}

@keyframes rainSweep {
  from { background-position: 0 0, 0 0; }
  to { background-position: 0 0, 24px 80px; }
}

.scene-cue {
  z-index: 58;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cue-weather {
  position: absolute;
  inset: 0;
  opacity: 0.9;
}

.cue-frame {
  position: relative;
  width: min(620px, 86vw);
  padding: 24px 26px;
  background: rgba(6, 10, 16, 0.68);
  border: 1px solid rgba(123, 224, 255, 0.24);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(10px);
}

.cue-kicker {
  font-size: 9px;
  letter-spacing: 0.24em;
  color: rgba(123, 224, 255, 0.7);
  margin-bottom: 12px;
}

.cue-title {
  font-family: 'Noto Serif SC', serif;
  font-size: clamp(28px, 4vw, 42px);
  line-height: 1.08;
  color: #f8e2a4;
  margin-bottom: 12px;
}

.cue-body {
  max-width: 42rem;
  font-size: 14px;
  line-height: 1.9;
  color: rgba(248, 226, 164, 0.86);
}

.cue-quake .cue-weather {
  background:
    linear-gradient(90deg, transparent 0 30%, rgba(255, 155, 105, 0.18) 30% 32%, transparent 32% 100%),
    linear-gradient(145deg, rgba(255, 96, 48, 0.2), transparent 40%);
  animation: quakeFlash 0.35s steps(2, end) infinite;
}

.cue-storm .cue-weather {
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(123, 224, 255, 0.12)),
    repeating-linear-gradient(-15deg, transparent 0 18px, rgba(216, 243, 255, 0.12) 18px 20px);
  animation: rainSweep 0.7s linear infinite;
}

.cue-fissure .cue-weather {
  background:
    radial-gradient(circle at 50% 55%, rgba(106, 227, 255, 0.22), transparent 22%),
    linear-gradient(90deg, transparent 0 44%, rgba(5, 14, 24, 0.95) 44% 56%, transparent 56%);
}

.cue-whiteout .cue-weather {
  background:
    radial-gradient(circle at 30% 35%, rgba(255,255,255,0.34), transparent 18%),
    radial-gradient(circle at 70% 62%, rgba(255,255,255,0.2), transparent 20%),
    linear-gradient(180deg, rgba(232, 239, 245, 0.3), rgba(168, 180, 194, 0.18));
}

.cue-magnetic .cue-weather {
  background:
    linear-gradient(90deg, rgba(255, 72, 214, 0.16), transparent 38%, rgba(123, 224, 255, 0.16) 62%, transparent),
    repeating-linear-gradient(0deg, transparent 0 5px, rgba(255,255,255,0.05) 5px 6px);
  animation: magneticShift 0.9s linear infinite;
}

.cue-skyfold .cue-weather {
  background:
    radial-gradient(circle at 50% 12%, rgba(255, 239, 181, 0.28), transparent 18%),
    repeating-linear-gradient(90deg, transparent 0 64px, rgba(255, 214, 109, 0.08) 64px 65px),
    linear-gradient(180deg, rgba(20, 8, 25, 0.08), rgba(64, 16, 58, 0.2));
}

@keyframes quakeFlash {
  0%, 100% { opacity: 0.7; transform: translateX(0); }
  50% { opacity: 1; transform: translateX(6px); }
}

@keyframes magneticShift {
  0%, 100% { transform: translateX(0); opacity: 0.9; }
  50% { transform: translateX(8px); opacity: 0.65; }
}

.briefing-panel {
  position: absolute;
  left: 50%;
  bottom: 44px;
  transform: translateX(-50%);
  z-index: 78;
  width: min(560px, 84vw);
  padding: 18px 20px;
  background: linear-gradient(180deg, rgba(4, 6, 10, 0.44), rgba(5, 7, 11, 0.8));
  border: 1px solid rgba(123, 224, 255, 0.16);
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(12px);
}

.briefing-kicker {
  font-size: 10px;
  letter-spacing: 0.24em;
  color: rgba(123, 224, 255, 0.72);
  margin-bottom: 14px;
}

.briefing-title {
  font-family: 'Noto Serif SC', serif;
  font-size: clamp(24px, 3vw, 34px);
  line-height: 1.1;
  color: #f8e2a4;
  margin-bottom: 10px;
}

.briefing-copy {
  font-size: 14px;
  line-height: 1.85;
  color: rgba(248, 226, 164, 0.84);
  margin-bottom: 12px;
  max-width: 42rem;
}

.briefing-progress {
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
}

.progress-dot {
  width: 28px;
  height: 2px;
  background: rgba(123, 224, 255, 0.18);
  transition: background 0.25s ease, transform 0.25s ease;
}

.progress-dot.active {
  background: #7be0ff;
  transform: scaleX(1.12);
}

.briefing-action {
  background: rgba(10, 18, 28, 0.85);
}

.prep-panel {
  position: absolute;
  left: 50%;
  bottom: 42px;
  transform: translateX(-50%);
  z-index: 76;
  width: min(560px, 84vw);
  padding: 18px 20px;
  background: rgba(6, 10, 16, 0.7);
  border: 1px solid rgba(123, 224, 255, 0.18);
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(12px);
  animation: commsBreath 4.6s ease-in-out infinite;
}

.prep-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 10px;
  font-size: 9px;
  letter-spacing: 0.2em;
  color: rgba(123, 224, 255, 0.7);
}

.prep-title {
  font-family: 'Noto Serif SC', serif;
  font-size: clamp(24px, 3vw, 34px);
  line-height: 1.08;
  color: #f8e2a4;
  margin-bottom: 10px;
}

.prep-body {
  font-size: 13px;
  line-height: 1.8;
  color: rgba(248, 226, 164, 0.82);
  margin-bottom: 12px;
}

.prep-progress {
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
}

.prep-instruction {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 9px 12px;
  margin-bottom: 14px;
  background: rgba(10, 18, 28, 0.52);
  border: 1px solid rgba(123, 224, 255, 0.12);
  font-size: 11px;
  line-height: 1.6;
  color: rgba(248, 226, 164, 0.74);
}

.prep-instruction-label {
  flex: 0 0 auto;
  font-size: 9px;
  letter-spacing: 0.2em;
  color: rgba(123, 224, 255, 0.68);
}

.prep-dot {
  width: 28px;
  height: 2px;
  background: rgba(123, 224, 255, 0.18);
  transition: background 0.25s ease, transform 0.25s ease;
}

.prep-dot.active {
  background: #f8e2a4;
  transform: scaleX(1.08);
}

.prep-actions {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 12px;
}

.prep-action {
  padding: 12px 10px;
  background: rgba(10, 18, 28, 0.78);
  border: 1px solid rgba(123, 224, 255, 0.18);
  color: rgba(248, 226, 164, 0.88);
  font-family: inherit;
  font-size: 12px;
  line-height: 1.5;
  cursor: pointer;
  transition: transform 0.18s ease, border-color 0.18s ease, opacity 0.18s ease;
}

.prep-action:hover:not(:disabled) {
  transform: translateY(-2px);
  border-color: rgba(255, 200, 87, 0.42);
}

.prep-action.used,
.prep-action:disabled {
  opacity: 0.46;
  cursor: default;
}

.prep-result {
  min-height: 1.8em;
  font-size: 12px;
  line-height: 1.7;
  color: rgba(123, 224, 255, 0.8);
  margin-bottom: 12px;
}

.prep-confirm {
  width: 100%;
  padding: 13px 14px;
  background: rgba(9, 16, 24, 0.78);
  border: 1px solid rgba(123, 224, 255, 0.18);
  color: rgba(170, 199, 214, 0.72);
  font-family: inherit;
  font-size: 12px;
  letter-spacing: 0.08em;
  cursor: not-allowed;
  transition: border-color 0.18s ease, color 0.18s ease, transform 0.18s ease, background 0.18s ease;
}

.prep-confirm.ready {
  background: rgba(10, 18, 28, 0.92);
  border-color: rgba(255, 200, 87, 0.32);
  color: rgba(248, 226, 164, 0.92);
  cursor: pointer;
}

.prep-confirm.ready:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 200, 87, 0.5);
}

.buffer-panel {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 77;
  width: min(560px, 82vw);
  padding: 24px 24px 22px;
  background: rgba(5, 9, 14, 0.76);
  border: 1px solid rgba(123, 224, 255, 0.18);
  box-shadow: 0 26px 80px rgba(0, 0, 0, 0.34);
  backdrop-filter: blur(16px);
  overflow: hidden;
}

.buffer-grid {
  position: absolute;
  inset: 0;
  opacity: 0.28;
  background:
    linear-gradient(transparent 95%, rgba(123, 224, 255, 0.08) 95%),
    linear-gradient(90deg, transparent 95%, rgba(123, 224, 255, 0.07) 95%);
  background-size: 100% 22px, 22px 100%;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.86), transparent);
  animation: bufferDrift 4.6s linear infinite;
}

.buffer-header,
.buffer-title,
.buffer-lead,
.buffer-progress,
.buffer-steps {
  position: relative;
  z-index: 1;
}

.buffer-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  font-size: 9px;
  letter-spacing: 0.2em;
  color: rgba(123, 224, 255, 0.72);
}

.buffer-title {
  font-family: 'Noto Serif SC', serif;
  font-size: clamp(26px, 3.2vw, 38px);
  line-height: 1.05;
  color: #f8e2a4;
  margin-bottom: 10px;
}

.buffer-lead {
  font-size: 13px;
  line-height: 1.75;
  color: rgba(248, 226, 164, 0.84);
  margin-bottom: 16px;
}

.buffer-progress {
  height: 8px;
  border: 1px solid rgba(123, 224, 255, 0.16);
  background: rgba(8, 14, 20, 0.8);
  overflow: hidden;
  margin-bottom: 18px;
}

.buffer-progress-fill {
  width: 100%;
  height: 100%;
  transform-origin: left center;
  background:
    linear-gradient(90deg, rgba(123, 224, 255, 0.2), rgba(248, 226, 164, 0.84) 50%, rgba(123, 224, 255, 0.2));
  box-shadow: 0 0 20px rgba(248, 226, 164, 0.18);
  transition: transform 0.34s ease;
}

.buffer-steps {
  display: grid;
  gap: 8px;
}

.buffer-step {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  background: rgba(10, 18, 28, 0.42);
  border: 1px solid rgba(123, 224, 255, 0.08);
  color: rgba(164, 187, 198, 0.72);
  font-size: 12px;
  line-height: 1.6;
  transition: border-color 0.24s ease, color 0.24s ease, background 0.24s ease;
}

.buffer-step-index {
  flex: 0 0 auto;
  font-size: 9px;
  letter-spacing: 0.2em;
  color: rgba(123, 224, 255, 0.54);
}

.buffer-step.active {
  background: rgba(14, 24, 36, 0.76);
  border-color: rgba(248, 226, 164, 0.24);
  color: rgba(248, 226, 164, 0.9);
  animation: bufferPulse 1s ease-in-out infinite;
}

.buffer-step.done {
  border-color: rgba(123, 224, 255, 0.16);
  color: rgba(123, 224, 255, 0.82);
}

.buffer-quake .buffer-progress-fill,
.buffer-storm .buffer-progress-fill {
  background:
    linear-gradient(90deg, rgba(123, 224, 255, 0.12), rgba(248, 226, 164, 0.74) 40%, rgba(123, 224, 255, 0.32));
}

.buffer-fissure .buffer-progress-fill,
.buffer-magnetic .buffer-progress-fill,
.buffer-skyfold .buffer-progress-fill {
  background:
    linear-gradient(90deg, rgba(106, 227, 255, 0.16), rgba(248, 226, 164, 0.82) 44%, rgba(255, 145, 243, 0.22));
}

.cue-enter-active,
.briefing-enter-active {
  animation: briefingIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.prep-enter-active {
  animation: briefingIn 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.buffer-enter-active {
  animation: bufferIn 0.42s cubic-bezier(0.16, 1, 0.3, 1);
}

.cue-enter-active {
  animation: overlayIn 0.42s cubic-bezier(0.16, 1, 0.3, 1);
}

.cue-leave-active,
.briefing-leave-active {
  animation: briefingOut 0.25s ease-in forwards;
}

.prep-leave-active {
  animation: briefingOut 0.2s ease-in forwards;
}

.buffer-leave-active {
  animation: bufferOut 0.22s ease-in forwards;
}

.cue-leave-active {
  animation: overlayOut 0.25s ease-in forwards;
}

@keyframes overlayIn {
  from {
    opacity: 0;
    transform: translateY(14px);
    filter: blur(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes overlayOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-8px);
  }
}

@keyframes briefingIn {
  from {
    opacity: 0;
    transform: translate(-50%, 18px);
    filter: blur(8px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
    filter: blur(0);
  }
}

@keyframes bufferIn {
  from {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 18px)) scale(0.985);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    filter: blur(0);
  }
}

@keyframes bufferOut {
  from {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(-50%, calc(-50% - 10px)) scale(1.01);
  }
}

@keyframes bufferDrift {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-22px, 18px, 0); }
}

@keyframes bufferPulse {
  0%, 100% { box-shadow: inset 0 0 0 rgba(248, 226, 164, 0); }
  50% { box-shadow: inset 0 0 24px rgba(248, 226, 164, 0.08); }
}

@keyframes briefingOut {
  from {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  to {
    opacity: 0;
    transform: translate(-50%, 12px);
  }
}

.hud-corner {
  position: absolute;
  width: 60px;
  height: 60px;
  pointer-events: none;
  z-index: 60;
}
.hud-corner::before,
.hud-corner::after {
  content: '';
  position: absolute;
  background: rgba(204, 26, 26, 0.8);
}
.hud-corner::before { width: 2px; height: 20px; }
.hud-corner::after  { width: 20px; height: 2px; }
.hud-corner.tl { top: 40px; left: 40px; }
.hud-corner.tl::before { top: 0; left: 0; }
.hud-corner.tl::after  { top: 0; left: 0; }
.hud-corner.tr { top: 40px; right: 40px; }
.hud-corner.tr::before { top: 0; right: 0; }
.hud-corner.tr::after  { top: 0; right: 0; }
.hud-corner.bl { bottom: 40px; left: 40px; }
.hud-corner.bl::before { bottom: 0; left: 0; }
.hud-corner.bl::after  { bottom: 0; left: 0; }
.hud-corner.br { bottom: 40px; right: 40px; }
.hud-corner.br::before { bottom: 0; right: 0; }
.hud-corner.br::after  { bottom: 0; right: 0; }

.hud-status {
  position: absolute;
  top: 48px;
  right: 80px;
  font-size: 10px;
  color: rgba(204, 26, 26, 0.7);
  line-height: 1.9;
  text-align: right;
  letter-spacing: 0.1em;
  z-index: 60;
}
.status-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #cc1a1a;
  margin-right: 6px;
  animation: statusBlink 1.2s infinite;
}
@keyframes statusBlink {
  0%, 100% { opacity: 1; box-shadow: 0 0 6px #cc1a1a; }
  50% { opacity: 0.2; box-shadow: none; }
}

.data-stream {
  position: absolute;
  bottom: 50px;
  left: 50px;
  z-index: 60;
  font-size: 9px;
  letter-spacing: 0.08em;
  color: rgba(34, 255, 100, 0.5);
  line-height: 1.8;
}
.data-line {
  opacity: 0;
  animation: dataFadeIn 0.5s ease forwards, dataScroll 0.8s ease-in-out infinite alternate;
}
@keyframes dataFadeIn { to { opacity: 1; } }
@keyframes dataScroll { from { opacity: 0.3; } to { opacity: 0.7; } }

.tech-content {
  position: relative;
  z-index: 60;
  padding: 0 8vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  pointer-events: none;
}

.tech-label {
  font-size: 10px;
  letter-spacing: 0.35em;
  color: rgba(204, 26, 26, 0.6);
  margin-bottom: 16px;
  text-transform: uppercase;
}

.tech-title {
  font-family: 'Noto Serif SC', serif;
  font-size: clamp(64px, 10vw, 140px);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.02em;
  color: #f0e040;
  position: relative;
  text-shadow: 0 0 20px rgba(204, 26, 26, 0.5);
  margin-bottom: 24px;
}
.tech-title::before,
.tech-title::after {
  content: attr(data-text);
  position: absolute;
  top: 0; left: 0;
  font-family: inherit;
  font-size: inherit;
  font-weight: 900;
  line-height: inherit;
  letter-spacing: inherit;
}
.tech-title::before {
  color: #cc1a1a;
  clip-path: polygon(0 30%, 100% 30%, 100% 50%, 0 50%);
  animation: glitch-1 4s infinite;
}
.tech-title::after {
  color: #40d0f0;
  clip-path: polygon(0 62%, 100% 62%, 100% 80%, 0 80%);
  animation: glitch-2 4s infinite;
}
@keyframes glitch-1 {
  0%, 88%, 100% { transform: translate(0); }
  89% { transform: translate(-4px, 2px); }
  91% { transform: translate(3px, -2px); }
  93% { transform: translate(-2px, 1px); }
}
@keyframes glitch-2 {
  0%, 88%, 100% { transform: translate(0); }
  90% { transform: translate(4px, -2px); }
  92% { transform: translate(-3px, 2px); }
  94% { transform: translate(2px, -1px); }
}

.tech-tagline {
  font-size: 12px;
  letter-spacing: 0.2em;
  color: rgba(240, 224, 64, 0.5);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}
.tag-line {
  width: 30px;
  height: 1px;
  background: #cc1a1a;
  box-shadow: 0 0 6px #cc1a1a;
}

.tech-description {
  font-size: 15px;
  line-height: 2;
  color: rgba(240, 224, 64, 0.45);
  max-width: 420px;
  margin-bottom: 40px;
}
.red-text {
  color: #cc1a1a;
  text-shadow: 0 0 8px rgba(204, 26, 26, 0.6);
  animation: redPulse 2s ease-in-out infinite;
}
@keyframes redPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.tech-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 32px;
  background: transparent;
  border: 1px solid rgba(204, 26, 26, 0.7);
  color: rgba(240, 224, 64, 0.8);
  font-family: 'Space Mono', monospace;
  font-size: 13px;
  letter-spacing: 0.25em;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  width: fit-content;
  pointer-events: all;
  box-shadow: 0 0 12px rgba(204,26,26,0.2), inset 0 0 12px rgba(204,26,26,0.05);
}
.tech-btn::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(204,26,26,0.3), transparent);
  transition: left 0.4s ease;
}
.tech-btn:hover::before { left: 100%; }
.tech-btn:hover {
  border-color: #cc1a1a;
  color: #f0e040;
  box-shadow: 0 0 24px rgba(204,26,26,0.5), inset 0 0 20px rgba(204,26,26,0.1);
}
.btn-bracket { color: #cc1a1a; font-weight: bold; }

/* 探索模式 HUD */
.explore-hud {
  display: flex;
  position: absolute;
  bottom: 44px;
  right: 44px;
  z-index: 70;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  opacity: 0;
}

.link-metrics {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;
  max-width: min(420px, 72vw);
}

.metric-chip {
  min-width: 92px;
  padding: 10px 12px;
  border: 1px solid rgba(123, 224, 255, 0.22);
  background: rgba(3, 2, 5, 0.72);
  backdrop-filter: blur(6px);
  box-shadow: inset 0 0 18px rgba(123, 224, 255, 0.04);
}

.metric-label {
  display: block;
  font-size: 8px;
  letter-spacing: 0.22em;
  color: rgba(123, 224, 255, 0.55);
  margin-bottom: 6px;
}

.metric-value {
  display: block;
  font-size: 18px;
  color: #f6d58c;
  line-height: 1;
}

.tour-speed {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(3, 2, 5, 0.7);
  border: 1px solid rgba(204, 26, 26, 0.3);
  padding: 8px 14px;
  backdrop-filter: blur(4px);
}
.speed-label {
  font-size: 9px;
  letter-spacing: 0.2em;
  color: rgba(204, 26, 26, 0.6);
  white-space: nowrap;
}
.speed-val {
  font-size: 10px;
  color: #f0e040;
  min-width: 28px;
  text-align: right;
}
.speed-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100px;
  height: 2px;
  background: rgba(204, 26, 26, 0.3);
  outline: none;
  cursor: pointer;
}
.speed-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 0;
  background: #cc1a1a;
  cursor: pointer;
  box-shadow: 0 0 6px #cc1a1a;
}

.exit-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background: transparent;
  border: 1px solid rgba(204, 26, 26, 0.7);
  color: rgba(240, 224, 64, 0.8);
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.25em;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.exit-btn:hover {
  border-color: #cc1a1a;
  color: #f0e040;
  box-shadow: 0 0 16px rgba(204, 26, 26, 0.4);
}
.exit-btn .btn-bracket { color: #cc1a1a; font-weight: bold; }

/* ── 信号弹窗 ── */
.comms-popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 80;
  width: min(560px, 88vw);
  background: rgba(3, 2, 5, 0.88);
  border: 1px solid rgba(123, 224, 255, 0.34);
  padding: 22px 24px;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 30px rgba(123, 224, 255, 0.12), inset 0 0 20px rgba(123, 224, 255, 0.03);
  pointer-events: auto;
  overflow: hidden;
  animation: commsBreath 4.6s ease-in-out infinite;
}

.comms-popup::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(115deg, transparent 0 36%, rgba(123, 224, 255, 0.08) 46%, transparent 58%),
    repeating-linear-gradient(0deg, transparent 0 3px, rgba(255,255,255,0.02) 3px 4px);
  mix-blend-mode: screen;
  opacity: 0.7;
  pointer-events: none;
  animation: commsSweep 5.5s linear infinite;
}
.signal-header {
  display: flex;
  justify-content: space-between;
  font-size: 9px;
  letter-spacing: 0.2em;
  color: rgba(123, 224, 255, 0.62);
  margin-bottom: 14px;
  border-bottom: 1px solid rgba(123, 224, 255, 0.14);
  padding-bottom: 10px;
}
.signal-tag { color: #7be0ff; }
.signal-dist { color: rgba(240, 224, 64, 0.5); }
.signal-meta {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
  font-size: 10px;
  letter-spacing: 0.14em;
  color: rgba(255, 200, 87, 0.72);
  text-transform: uppercase;
}
.signal-body {
  font-size: 14px;
  line-height: 1.9;
  color: rgba(240, 224, 64, 0.85);
  margin-bottom: 18px;
}
.signal-body :deep(.hl) {
  color: #7be0ff;
  text-shadow: 0 0 8px rgba(123, 224, 255, 0.35);
}

.choice-panel,
.reply-panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.panel-label {
  font-size: 9px;
  letter-spacing: 0.22em;
  color: rgba(255, 200, 87, 0.72);
}

.panel-label-reply {
  margin-top: 4px;
}

.choice-btn {
  width: 100%;
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 14px;
  align-items: center;
  text-align: left;
  padding: 12px 14px;
  border: 1px solid rgba(123, 224, 255, 0.24);
  background: rgba(10, 16, 24, 0.78);
  color: rgba(240, 224, 64, 0.88);
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  font-family: inherit;
  position: relative;
  overflow: hidden;
}

.choice-btn:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 200, 87, 0.44);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}

.choice-id {
  color: #7be0ff;
  font-size: 11px;
  letter-spacing: 0.12em;
}

.choice-copy {
  font-size: 13px;
  line-height: 1.6;
}

.choice-btn.obscured .choice-copy {
  color: rgba(240, 224, 64, 0.72);
  text-shadow: 1px 0 rgba(123, 224, 255, 0.28), -1px 0 rgba(255, 90, 160, 0.24);
  animation: choiceInterference 1.8s steps(2, end) infinite;
}

.choice-btn.obscured::after {
  content: 'SIGNAL LOSS';
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 8px;
  letter-spacing: 0.18em;
  color: rgba(123, 224, 255, 0.58);
}

.outgoing-copy,
.incoming-copy {
  padding: 12px 14px;
  border: 1px solid rgba(123, 224, 255, 0.18);
  background: rgba(10, 16, 24, 0.7);
  font-size: 13px;
  line-height: 1.7;
  color: rgba(240, 224, 64, 0.88);
}

.outgoing-copy {
  border-color: rgba(255, 200, 87, 0.28);
}

.incoming-copy.pending {
  color: rgba(123, 224, 255, 0.72);
}

.signal-bar {
  margin-top: 14px;
  height: 1px;
  background: linear-gradient(90deg, #7be0ff, transparent);
  animation: signalScan 2.5s linear infinite;
}
@keyframes signalScan {
  0%   { opacity: 1; transform: scaleX(1); transform-origin: left; }
  50%  { opacity: 0.4; }
  100% { opacity: 1; transform: scaleX(1); transform-origin: left; }
}

/* 弹窗进出动画 */
.signal-enter-active { animation: sigIn 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.signal-leave-active { animation: sigOut 0.3s ease-in forwards; }
@keyframes sigIn {
  0% { opacity: 0; transform: translate(-50%, calc(-50% + 18px)) scale(0.985); filter: blur(7px); }
  35% { opacity: 0.55; transform: translate(-50%, calc(-50% + 8px)) scale(1.004); filter: blur(2px); }
  70% { opacity: 0.88; transform: translate(-50%, calc(-50% - 2px)); }
  100% { opacity: 1; transform: translate(-50%, -50%) scale(1); filter: blur(0); }
}
@keyframes sigOut {
  from { opacity: 1; transform: translate(-50%, -50%); }
  to   { opacity: 0; transform: translate(-50%, calc(-50% - 10px)); }
}

@keyframes commsBreath {
  0%, 100% { box-shadow: 0 0 30px rgba(123, 224, 255, 0.12), inset 0 0 20px rgba(123, 224, 255, 0.03); }
  50% { box-shadow: 0 0 38px rgba(123, 224, 255, 0.18), inset 0 0 24px rgba(123, 224, 255, 0.06); }
}

@keyframes commsSweep {
  from { transform: translateX(-24%); opacity: 0.3; }
  50% { opacity: 0.72; }
  to { transform: translateX(24%); opacity: 0.3; }
}

@keyframes choiceInterference {
  0%, 100% { clip-path: inset(0 0 0 0); transform: translateX(0); }
  33% { clip-path: inset(12% 0 24% 0); transform: translateX(0.5px); }
  66% { clip-path: inset(44% 0 8% 0); transform: translateX(-0.8px); }
}

.ending-panel {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 85;
  width: min(620px, 90vw);
  padding: 26px 28px;
  background:
    linear-gradient(135deg, rgba(10, 16, 24, 0.96), rgba(36, 18, 8, 0.88)),
    rgba(3, 2, 5, 0.92);
  border: 1px solid rgba(255, 200, 87, 0.3);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.38), inset 0 0 30px rgba(123, 224, 255, 0.04);
  backdrop-filter: blur(12px);
}

.ending-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.ending-kicker {
  color: #7be0ff;
}

.ending-vector {
  color: rgba(255, 200, 87, 0.72);
}

.ending-title {
  font-family: 'Noto Serif SC', serif;
  font-size: clamp(28px, 4vw, 42px);
  line-height: 1.1;
  color: #f8e2a4;
  margin-bottom: 14px;
}

.ending-summary {
  font-size: 15px;
  line-height: 1.9;
  color: rgba(248, 226, 164, 0.9);
  margin-bottom: 12px;
}

.ending-body {
  font-size: 13px;
  line-height: 1.85;
  color: rgba(123, 224, 255, 0.82);
  padding: 14px 16px;
  background: rgba(7, 11, 18, 0.55);
  border: 1px solid rgba(123, 224, 255, 0.18);
  margin-bottom: 18px;
}

.ending-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 18px;
}

.ending-stat {
  padding: 12px 14px;
  border: 1px solid rgba(255, 200, 87, 0.18);
  background: rgba(36, 18, 8, 0.32);
}

.ending-stat span {
  display: block;
  font-size: 8px;
  letter-spacing: 0.2em;
  color: rgba(255, 200, 87, 0.66);
  margin-bottom: 6px;
}

.ending-stat strong {
  font-size: 20px;
  color: #f8e2a4;
}

.ending-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ending-action {
  background: rgba(8, 16, 25, 0.84);
}

.ending-action-muted {
  opacity: 0.88;
}

.ending-enter-active {
  animation: endingIn 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.ending-leave-active {
  animation: endingOut 0.28s ease-in forwards;
}

@keyframes endingIn {
  from {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 18px)) scale(0.98);
    filter: blur(6px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    filter: blur(0);
  }
}

@keyframes endingOut {
  from {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(-50%, calc(-50% - 8px)) scale(0.98);
  }
}

/* 点击提示 */
.click-hint {
  position: absolute;
  bottom: 130px;
  right: 44px;
  z-index: 65;
  font-size: 9px;
  letter-spacing: 0.2em;
  color: rgba(123, 224, 255, 0.38);
  pointer-events: none;
  animation: hintBlink 2.5s ease-in-out infinite;
}
@keyframes hintBlink {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 0.8; }
}

/* 涟漪 Canvas */
.ripple-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 55;
}

@media (max-width: 720px) {
  .hud-status {
    top: 24px;
    right: 24px;
  }

  .data-stream {
    left: 24px;
    bottom: 28px;
    max-width: 46vw;
  }

  .tech-content {
    padding: 0 24px;
  }

  .explore-hud {
    right: 20px;
    bottom: 20px;
    left: 20px;
    align-items: stretch;
  }

  .link-metrics {
    justify-content: flex-start;
    max-width: none;
  }

  .tour-speed {
    justify-content: space-between;
  }

  .comms-popup {
    width: min(92vw, 560px);
    padding: 18px;
  }

  .cue-frame,
  .briefing-panel {
    width: min(92vw, 620px);
    padding: 20px;
  }

  .signal-meta {
    flex-direction: column;
    gap: 6px;
  }

  .briefing-panel {
    bottom: 20px;
  }

  .prep-panel {
    bottom: 20px;
    width: min(92vw, 560px);
  }

  .buffer-panel {
    width: min(92vw, 560px);
    padding: 20px;
  }

  .prep-actions {
    grid-template-columns: 1fr;
  }

  .prep-instruction {
    flex-direction: column;
    align-items: flex-start;
  }

  .ending-panel {
    width: min(92vw, 620px);
    padding: 20px;
  }

  .ending-header {
    flex-direction: column;
    gap: 6px;
  }

  .ending-stats {
    grid-template-columns: 1fr;
  }

  .choice-btn {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}
</style>
