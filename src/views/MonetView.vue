<template>
  <div class="page-monet">
    <!-- 顶部标题 -->
    <header class="painting-header" :class="{ 'fade-out': isExploring }">
      <div class="archive-kicker">WERISS // ECHO ARCHIVE</div>
      <h1>关键 CG 陈列馆</h1>
      <p>展示主视觉分层、镜头定格与氛围样张。点击陈列层可以查看档案展签。</p>
      <button @click="startExplore" class="start-btn">进入陈列</button>
    </header>

    <!-- 交互对话框 -->
    <Transition name="fade">
      <div v-if="dialogue" class="dialogue-box" @click="dialogue = null">
        <div class="glass-card">
          <p class="handwriting">{{ dialogue }}</p>
          <span class="close-hint">点击收起展签</span>
        </div>
      </div>
    </Transition>

    <!-- Three.js 画布 -->
    <canvas ref="canvasEl"></canvas>

    <Transition name="tree">
      <section v-if="isExploring" class="branch-tree-stage">
        <button class="tree-exit-btn" @click="exitExplore">返回陈列入口</button>
        <div class="branch-tree-caption">
          <div class="branch-tree-kicker">TOP-DOWN BRANCH TREE</div>
          <h2>WERISS 多叉树</h2>
          <p>从上往下读。每一次分叉都是一次建议，每一片叶子都是故事走向。</p>
        </div>

        <div class="branch-tree-plane">
          <svg class="branch-tree-svg" viewBox="0 0 1000 2140" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="branchTreeGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="rgba(255,247,222,0.95)" />
                <stop offset="55%" stop-color="rgba(255,221,162,0.88)" />
                <stop offset="100%" stop-color="rgba(214,168,88,0.42)" />
              </linearGradient>
              <filter id="branchTreeBlur">
                <feGaussianBlur stdDeviation="4.5" />
              </filter>
            </defs>

            <path class="branch-glow trunk-glow" d="M500 88 L500 1940" />
            <path class="branch-line trunk-line" d="M500 88 L500 1940" />

            <path class="branch-glow" d="M500 310 C438 336 348 374 220 420" />
            <path class="branch-glow" d="M500 310 C490 344 490 382 500 446" />
            <path class="branch-glow" d="M500 310 C562 336 652 374 780 420" />
            <path class="branch-line" d="M500 310 C438 336 348 374 220 420" />
            <path class="branch-line" d="M500 310 C490 344 490 382 500 446" />
            <path class="branch-line" d="M500 310 C562 336 652 374 780 420" />
            <path class="branch-return-glow" d="M220 420 C308 470 392 534 500 620" />
            <path class="branch-return-glow" d="M500 446 C500 492 500 548 500 620" />
            <path class="branch-return-glow" d="M780 420 C692 470 608 534 500 620" />
            <path class="branch-return-line" d="M220 420 C308 470 392 534 500 620" />
            <path class="branch-return-line" d="M500 446 C500 492 500 548 500 620" />
            <path class="branch-return-line" d="M780 420 C692 470 608 534 500 620" />

            <path class="branch-glow" d="M500 710 C424 742 322 780 198 820" />
            <path class="branch-glow" d="M500 710 C490 744 490 782 500 846" />
            <path class="branch-glow" d="M500 710 C576 742 678 780 802 820" />
            <path class="branch-line" d="M500 710 C424 742 322 780 198 820" />
            <path class="branch-line" d="M500 710 C490 744 490 782 500 846" />
            <path class="branch-line" d="M500 710 C576 742 678 780 802 820" />
            <path class="branch-return-glow" d="M198 820 C292 876 386 946 500 1020" />
            <path class="branch-return-glow" d="M500 846 C500 894 500 946 500 1020" />
            <path class="branch-return-glow" d="M802 820 C708 876 614 946 500 1020" />
            <path class="branch-return-line" d="M198 820 C292 876 386 946 500 1020" />
            <path class="branch-return-line" d="M500 846 C500 894 500 946 500 1020" />
            <path class="branch-return-line" d="M802 820 C708 876 614 946 500 1020" />

            <path class="branch-glow" d="M500 1110 C432 1144 338 1182 222 1220" />
            <path class="branch-glow" d="M500 1110 C490 1144 490 1182 500 1246" />
            <path class="branch-glow" d="M500 1110 C568 1144 662 1182 778 1220" />
            <path class="branch-line" d="M500 1110 C432 1144 338 1182 222 1220" />
            <path class="branch-line" d="M500 1110 C490 1144 490 1182 500 1246" />
            <path class="branch-line" d="M500 1110 C568 1144 662 1182 778 1220" />
            <path class="branch-return-glow" d="M222 1220 C314 1276 402 1346 500 1420" />
            <path class="branch-return-glow" d="M500 1246 C500 1292 500 1346 500 1420" />
            <path class="branch-return-glow" d="M778 1220 C686 1276 598 1346 500 1420" />
            <path class="branch-return-line" d="M222 1220 C314 1276 402 1346 500 1420" />
            <path class="branch-return-line" d="M500 1246 C500 1292 500 1346 500 1420" />
            <path class="branch-return-line" d="M778 1220 C686 1276 598 1346 500 1420" />

            <path class="branch-glow" d="M500 1510 C432 1544 338 1582 222 1620" />
            <path class="branch-glow" d="M500 1510 C490 1544 490 1582 500 1646" />
            <path class="branch-glow" d="M500 1510 C568 1544 662 1582 778 1620" />
            <path class="branch-line" d="M500 1510 C432 1544 338 1582 222 1620" />
            <path class="branch-line" d="M500 1510 C490 1544 490 1582 500 1646" />
            <path class="branch-line" d="M500 1510 C568 1544 662 1582 778 1620" />
            <path class="branch-return-glow" d="M222 1620 C316 1680 404 1748 500 1820" />
            <path class="branch-return-glow" d="M500 1646 C500 1694 500 1748 500 1820" />
            <path class="branch-return-glow" d="M778 1620 C684 1680 596 1748 500 1820" />
            <path class="branch-return-line" d="M222 1620 C316 1680 404 1748 500 1820" />
            <path class="branch-return-line" d="M500 1646 C500 1694 500 1748 500 1820" />
            <path class="branch-return-line" d="M778 1620 C684 1680 596 1748 500 1820" />

            <path class="branch-glow" d="M500 1910 C422 1950 332 1992 222 2054" />
            <path class="branch-glow" d="M500 1910 C500 1952 500 1998 500 2072" />
            <path class="branch-glow" d="M500 1910 C578 1950 668 1992 778 2054" />
            <path class="branch-line" d="M500 1910 C422 1950 332 1992 222 2054" />
            <path class="branch-line" d="M500 1910 C500 1952 500 1998 500 2072" />
            <path class="branch-line" d="M500 1910 C578 1950 668 1992 778 2054" />
          </svg>

          <article
            v-for="node in trunkNodes"
            :key="node.id"
            class="tree-trunk-node"
            :class="`tree-trunk-${node.kind}`"
            :style="{ left: `${node.x}%`, top: `${node.y}px` }"
          >
            <span class="tree-trunk-id">{{ node.id }}</span>
            <h3>{{ node.title }}</h3>
            <p>{{ node.note }}</p>
          </article>

          <div
            v-for="fork in forkMarkers"
            :key="fork.id"
            class="tree-fork-badge"
            :style="{ left: `${fork.x}%`, top: `${fork.y}px` }"
          >
            <span>{{ fork.label }}</span>
            <small>{{ fork.note }}</small>
          </div>

          <div class="tree-final-center-link" aria-hidden="true"></div>

          <article
            v-for="choice in choiceNodes"
            :key="choice.id"
            class="tree-choice-node"
            :class="`tree-choice-${choice.tone}`"
            :style="{ left: `${choice.x}%`, top: `${choice.y}px` }"
          >
            <span class="tree-choice-id">{{ choice.id }}</span>
            <h4>{{ choice.label }}</h4>
            <p>{{ choice.note }}</p>
            <div class="tree-next-step">导向 {{ choice.next }}</div>
          </article>

          <article
            v-for="leaf in endingLeaves"
            :key="leaf.id"
            class="tree-ending-leaf"
            :style="{ left: `${leaf.x}%`, top: `${leaf.y}px` }"
          >
            <span class="tree-choice-id">{{ leaf.id }}</span>
            <h4>{{ leaf.label }}</h4>
            <p>{{ leaf.note }}</p>
          </article>
        </div>
      </section>
    </Transition>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue';
import gsap from 'gsap';
import { useMonetScene } from '@/composables/useMonetScene';
import { useMonetInteraction } from '@/composables/useMonetInteraction';

const props = defineProps({
  active: {
    type: Boolean,
    required: true,
  },
});

const canvasEl = ref(null);
const isExploring = ref(false);
const dialogue = ref(null);
const trunkNodes = [
  { id: 'ENTRY', title: '进入回响链接', note: '起点 / ECHO DESK 接入 WERISS。', x: 50, y: 84, kind: 'root' },
  { id: 'Ω-01', title: '红脊初判', note: '第一次判断风险基调。', x: 50, y: 208, kind: 'event' },
  { id: 'Ψ-02', title: '发光雾墙', note: '不管前一轮怎么选，都会汇入这一轮。', x: 50, y: 620, kind: 'event' },
  { id: 'Δ-03', title: '蓝裂口', note: '第二轮选择后，故事继续向下推进。', x: 50, y: 1020, kind: 'event' },
  { id: 'Λ-04', title: '双地图失真', note: '第三轮之后，路线重新汇入主干。', x: 50, y: 1420, kind: 'event' },
  { id: 'X-05', title: '天穹展开', note: '最后一轮主干事件，下一次分叉直接导向结局。', x: 50, y: 1820, kind: 'event' },
];
const forkMarkers = [
  {
    id: 'fork-a',
    x: 50,
    y: 310,
    label: '分叉 A',
    note: '第一次建议',
  },
  {
    id: 'fork-b',
    x: 50,
    y: 710,
    label: '分叉 B',
    note: '雾墙抉择',
  },
  {
    id: 'fork-c',
    x: 50,
    y: 1110,
    label: '分叉 C',
    note: '裂口抉择',
  },
  {
    id: 'fork-d',
    x: 50,
    y: 1510,
    label: '分叉 D',
    note: '失真抉择',
  },
  {
    id: 'fork-e',
    x: 50,
    y: 1910,
    label: '终局分叉',
    note: '结局入口',
  },
];
const choiceNodes = [
  { id: 'A1', label: '高处确认', note: '稳住视野，风险较低。', next: 'Ψ-02', x: 22, y: 420, tone: 'calm' },
  { id: 'A2', label: '继续逼近', note: '真相推进更快。', next: 'Ψ-02', x: 50, y: 446, tone: 'risk' },
  { id: 'A3', label: '校准传感器', note: '先拿参数，再继续推进。', next: 'Ψ-02', x: 78, y: 420, tone: 'calm' },

  { id: 'B1', label: '穿越雾墙', note: '直接冲进更深层画面。', next: 'Δ-03', x: 20, y: 820, tone: 'risk' },
  { id: 'B2', label: '后撤保链', note: '优先维持稳定。', next: 'Δ-03', x: 50, y: 846, tone: 'calm' },
  { id: 'B3', label: '横移找掩体', note: '保留中间态继续观察。', next: 'Δ-03', x: 80, y: 820, tone: 'calm' },

  { id: 'C1', label: '沿边缘前进', note: '不直接下裂口。', next: 'Λ-04', x: 22, y: 1220, tone: 'calm' },
  { id: 'C2', label: '直接下行', note: '进入深部奇观线。', next: 'Λ-04', x: 50, y: 1246, tone: 'reveal' },
  { id: 'C3', label: '先放探针', note: '以更稳方式拿证据。', next: 'Λ-04', x: 78, y: 1220, tone: 'reveal' },

  { id: 'D1', label: '盲走地形', note: '信脚下，不信地图。', next: 'X-05', x: 22, y: 1620, tone: 'calm' },
  { id: 'D2', label: '锁旧地图', note: '真相更近，现实更薄。', next: 'X-05', x: 50, y: 1646, tone: 'risk' },
  { id: 'D3', label: '切掉辅助层', note: '保链路，失去部分视野。', next: 'X-05', x: 78, y: 1620, tone: 'reveal' },
];
const endingLeaves = [
  { id: 'E1', label: '返回', note: '生还结局 / 带回残缺记录。', x: 22, y: 2056 },
  { id: 'E2', label: '继续深入', note: '求真结局 / 链路逐步熄灭。', x: 50, y: 2072 },
  { id: 'E3', label: '原地维持链路', note: '回响结局 / 形成循环闭环。', x: 78, y: 2056 },
];

const {
  initScene,
  loadLayers,
  playArchiveReveal,
  animate,
  onResize,
  updateMouseTarget,
  layers,
  scene,
  camera,
  renderer
} = useMonetScene(canvasEl);

const {
  onClick,
  startExplore,
} = useMonetInteraction(
  isExploring,
  dialogue,
  layers,
  camera
);

const exitExplore = () => {
  isExploring.value = false;
  dialogue.value = null;

  if (camera) {
    gsap.killTweensOf(camera.position);
    gsap.killTweensOf(camera.rotation);
    gsap.to(camera.position, {
      z: 6,
      duration: 1.2,
      ease: 'power2.inOut',
    });
    gsap.to(camera.rotation, {
      z: 0,
      duration: 0.9,
      ease: 'power2.out',
    });
  }

  layers.value.forEach((mesh) => {
    gsap.killTweensOf(mesh.position);
    gsap.killTweensOf(mesh.scale);
    gsap.killTweensOf(mesh.rotation);
    gsap.to(mesh.position, {
      x: 0,
      y: 0,
      duration: 0.9,
      ease: 'power2.out',
    });
    gsap.to(mesh.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 0.9,
      ease: 'power2.out',
    });
    gsap.to(mesh.rotation, {
      z: 0,
      duration: 0.9,
      ease: 'power2.out',
    });
  });

  nextTick(() => {
    const stage = document.querySelector('.branch-tree-stage');
    if (stage instanceof HTMLElement) {
      stage.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  window.setTimeout(() => {
    playArchiveReveal();
  }, 80);
};

const onKeyDown = (event) => {
  if (event.key === 'Escape' && isExploring.value) {
    exitExplore();
  }
};

onMounted(() => {
  initScene();
  loadLayers();
  window.addEventListener('mousemove', updateMouseTarget);
  canvasEl.value?.addEventListener('click', onClick);
  window.addEventListener('resize', onResize);
  window.addEventListener('keydown', onKeyDown);
  animate();
});

watch(
  () => props.active,
  (active) => {
    if (!active && isExploring.value) {
      exitExplore();
      return;
    }
    if (!active || isExploring.value) return;
    window.setTimeout(() => {
      playArchiveReveal();
    }, 60);
  },
);

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMouseTarget);
  canvasEl.value?.removeEventListener('click', onClick);
  window.removeEventListener('resize', onResize);
  window.removeEventListener('keydown', onKeyDown);
  renderer?.dispose();
});
</script>

<style scoped>
.page-monet {
  width: 100%;
  height: 100%;
  position: relative;
  background:
    radial-gradient(circle at 18% 18%, rgba(255, 255, 255, 0.04), transparent 18%),
    linear-gradient(180deg, #060606 0%, #020202 100%);
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  pointer-events: auto;
}

.painting-header {
  position: absolute;
  top: 9%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 10;
  transition: all 1s ease;
  color: #f3e1b5;
  width: min(760px, 82vw);
}

.archive-kicker {
  font-size: 0.78rem;
  letter-spacing: 0.38em;
  color: rgba(227, 197, 135, 0.68);
  margin-bottom: 1rem;
}

.painting-header h1 {
  font-size: clamp(2.8rem, 5vw, 4.4rem);
  margin-bottom: 0.5rem;
  text-shadow: 0 10px 30px rgba(0,0,0,0.28);
  letter-spacing: 0.12em;
}

.painting-header p {
  font-size: 1.2rem;
  opacity: 0.86;
  letter-spacing: 0.08em;
  line-height: 1.8;
  color: rgba(245, 229, 192, 0.88);
}

.fade-out { 
  opacity: 0; 
  pointer-events: none;
  transform: translateX(-50%) translateY(-20px);
}

.start-btn {
  margin-top: 20px;
  padding: 12px 40px;
  background: rgba(31, 22, 14, 0.82);
  color: #f6e8c0;
  border: 1px solid rgba(227, 197, 135, 0.32);
  border-radius: 999px;
  cursor: pointer;
  letter-spacing: 0.24em;
  transition: all 0.3s ease;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.24);
  position: relative;
  overflow: hidden;
}

.start-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.start-btn:hover::before {
  width: 300px;
  height: 300px;
}

.start-btn:hover { 
  background: rgba(54, 37, 22, 0.92);
  transform: scale(1.05);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.3);
}

.start-btn:active {
  transform: scale(0.98);
}

.dialogue-box {
  position: absolute;
  top: 50%;
  left: 15%;
  z-index: 100;
  cursor: pointer;
  animation: slideInLeft 0.5s ease-out;
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.branch-tree-stage {
  position: absolute;
  inset: 0;
  z-index: 11;
  overflow: auto;
}

.tree-exit-btn {
  position: sticky;
  top: 18px;
  left: calc(100% - 220px);
  z-index: 4;
  margin: 18px 0 0 calc(100% - 220px);
  width: 180px;
  padding: 12px 16px;
  border: 1px solid rgba(255, 224, 168, 0.22);
  background: rgba(7, 6, 3, 0.7);
  color: #fff0d1;
  letter-spacing: 0.18em;
  cursor: pointer;
  backdrop-filter: blur(10px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.24);
  transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
}

.tree-exit-btn:hover {
  transform: translateY(-2px);
  background: rgba(28, 20, 11, 0.86);
  border-color: rgba(255, 224, 168, 0.4);
}

.branch-tree-caption {
  position: absolute;
  top: 7%;
  left: 50%;
  transform: translateX(-50%);
  width: min(440px, 34vw);
  padding: 16px 18px;
  background: rgba(7, 6, 3, 0.42);
  border: 1px solid rgba(255, 224, 168, 0.1);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(8px);
  color: rgba(255, 244, 224, 0.9);
  text-align: center;
  z-index: 2;
}

.branch-tree-kicker {
  margin-bottom: 10px;
  font-size: 0.72rem;
  letter-spacing: 0.34em;
  color: rgba(255, 224, 168, 0.58);
}

.branch-tree-caption h2 {
  margin-bottom: 8px;
  font-size: clamp(1.8rem, 2.4vw, 2.7rem);
  line-height: 1.04;
  color: #fff0d1;
}

.branch-tree-caption p {
  font-size: 0.94rem;
  line-height: 1.75;
  color: rgba(255, 241, 214, 0.72);
}

.branch-tree-plane {
  position: relative;
  width: min(1080px, 92vw);
  height: 2140px;
  margin: 210px auto 60px;
}

.branch-tree-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.branch-glow,
.branch-line {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.branch-return-glow,
.branch-return-line {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.branch-glow {
  stroke: url(#branchTreeGlow);
  stroke-width: 16;
  opacity: 0.14;
  filter: url(#branchTreeBlur);
}

.branch-line {
  stroke: url(#branchTreeGlow);
  stroke-width: 4.8;
  opacity: 0.92;
  stroke-dasharray: 1400;
  stroke-dashoffset: 1400;
  animation: treeGrow 2.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.branch-return-glow {
  stroke: url(#branchTreeGlow);
  stroke-width: 10;
  opacity: 0.08;
  filter: url(#branchTreeBlur);
}

.branch-return-line {
  stroke: rgba(255, 227, 174, 0.72);
  stroke-width: 2.8;
  opacity: 0.72;
  stroke-dasharray: 8 10;
  animation: returnFlowIn 1.6s ease-out forwards;
}

.trunk-glow {
  stroke-width: 26;
  opacity: 0.18;
}

.trunk-line {
  stroke-width: 9;
}

.tree-trunk-node,
.tree-choice-node,
.tree-ending-leaf,
.tree-fork-badge {
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.tree-trunk-node {
  width: min(260px, 24vw);
  padding: 12px 14px;
  background: rgba(9, 7, 4, 0.58);
  border: 1px solid rgba(255, 224, 168, 0.12);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(8px);
  color: rgba(255, 244, 224, 0.86);
  opacity: 0;
  transform: translate(-50%, calc(-50% + 16px)) scale(0.98);
  animation: nodeLift 0.6s ease forwards;
}

.tree-trunk-root {
  width: min(300px, 26vw);
  background: rgba(12, 10, 5, 0.7);
  border-color: rgba(255, 233, 188, 0.24);
}

.tree-node-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  color: rgba(255, 224, 168, 0.56);
}

.tree-trunk-node h3,
.tree-choice-node h4,
.tree-ending-leaf h4 {
  margin-bottom: 8px;
  font-size: 1rem;
  line-height: 1.3;
  color: #fff3d6;
}

.tree-trunk-node p,
.tree-choice-node p,
.tree-ending-leaf p,
.tree-fork-badge small {
  font-size: 0.8rem;
  line-height: 1.58;
  color: rgba(255, 241, 214, 0.68);
}

.tree-trunk-id,
.tree-choice-id {
  display: inline-block;
  margin-bottom: 8px;
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  color: rgba(255, 225, 170, 0.72);
}

.tree-fork-badge {
  display: grid;
  gap: 3px;
  min-width: 124px;
  padding: 8px 10px;
  background: rgba(9, 7, 4, 0.38);
  border: 1px solid rgba(255, 224, 168, 0.08);
  border-radius: 12px;
  text-align: center;
  opacity: 0;
  transform: translate(-50%, calc(-50% + 16px)) scale(0.98);
  animation: nodeLift 0.6s ease forwards;
}

.tree-fork-badge span {
  font-size: 0.66rem;
  letter-spacing: 0.24em;
  color: rgba(255, 225, 170, 0.78);
}

.tree-final-center-link {
  position: absolute;
  left: 50%;
  top: 1942px;
  width: 3px;
  height: 104px;
  transform: translateX(-50%);
  background:
    linear-gradient(180deg, rgba(255, 232, 188, 0.82), rgba(255, 214, 138, 0.64));
  box-shadow: 0 0 14px rgba(255, 225, 170, 0.2);
  opacity: 0.9;
  pointer-events: none;
}

.tree-choice-node,
.tree-ending-leaf {
  width: min(210px, 18vw);
  padding: 12px 12px 10px;
  background: rgba(10, 8, 4, 0.48);
  border: 1px solid rgba(255, 224, 168, 0.08);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
  backdrop-filter: blur(8px);
  opacity: 0;
  transform: translate(-50%, calc(-50% + 16px)) scale(0.98);
  animation: nodeLift 0.6s ease forwards;
}

.tree-choice-calm {
  border-color: rgba(255, 232, 180, 0.12);
}

.tree-choice-risk {
  border-color: rgba(255, 196, 132, 0.22);
}

.tree-choice-reveal {
  border-color: rgba(200, 232, 255, 0.18);
}

.tree-ending-leaf {
  border-color: rgba(255, 239, 205, 0.18);
  background: rgba(13, 10, 5, 0.62);
}

.tree-next-step {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid rgba(255, 224, 168, 0.08);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  color: rgba(255, 225, 170, 0.62);
}

.glass-card {
  background: rgba(26, 18, 12, 0.72);
  backdrop-filter: blur(12px);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(227, 197, 135, 0.22);
  box-shadow: 0 20px 40px rgba(0,0,0,0.18);
  max-width: 320px;
  transition: all 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.handwriting {
  font-size: 1.02rem;
  color: #f4e6c4;
  line-height: 1.8;
}

.close-hint {
  display: block;
  font-size: 0.7rem;
  margin-top: 10px;
  color: rgba(227, 197, 135, 0.64);
  text-align: right;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.fade-enter-active, .fade-leave-active { 
  transition: all 0.5s ease; 
}

.fade-enter-from { 
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

.fade-leave-to { 
  opacity: 0;
  transform: scale(0.9) translateY(-20px);
}

.tree-enter-active {
  animation: treeOverlayIn 0.7s ease-out;
}

.tree-leave-active {
  animation: treeOverlayOut 0.3s ease-in forwards;
}

@keyframes treeGrow {
  0% {
    stroke-dashoffset: 1400;
    opacity: 0.2;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0.95;
  }
}

@keyframes returnFlowIn {
  0% {
    opacity: 0;
    stroke-dashoffset: 120;
  }
  100% {
    opacity: 0.72;
    stroke-dashoffset: 0;
  }
}

@keyframes nodeLift {
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes treeOverlayIn {
  from {
    opacity: 0;
    filter: blur(10px);
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
}

@keyframes treeOverlayOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@media (max-width: 1080px) {
  .branch-tree-caption {
    width: min(84vw, 420px);
  }

  .tree-trunk-node {
    width: min(280px, 30vw);
  }

  .tree-choice-node,
  .tree-ending-leaf {
    width: min(220px, 22vw);
  }
}

@media (max-width: 720px) {
  .painting-header {
    width: min(88vw, 540px);
  }

  .branch-tree-caption {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    width: calc(100% - 32px);
    margin: 110px 16px 18px;
  }

  .branch-tree-plane {
    width: calc(100% - 16px);
    min-width: 980px;
    margin: 30px 8px 40px;
  }
}
</style>
