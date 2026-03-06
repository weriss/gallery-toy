<template>
  <div class="page-monet">
    <!-- 顶部标题 -->
    <header class="painting-header" :class="{ 'fade-out': isExploring }">
      <h1>画中世界</h1>
      <p>克劳德·莫奈 - 《撑阳伞的女人》</p>
      <button @click="startExplore" class="start-btn">进入画作</button>
    </header>

    <!-- 交互对话框 -->
    <Transition name="fade">
      <div v-if="dialogue" class="dialogue-box" @click="dialogue = null">
        <div class="glass-card">
          <p class="handwriting">{{ dialogue }}</p>
          <span class="close-hint">点击关闭</span>
        </div>
      </div>
    </Transition>

    <!-- Three.js 画布 -->
    <canvas ref="canvasEl"></canvas>

    <!-- 底部功能栏 -->
    <div class="bottom-bar" :class="{ 'fade-in': isExploring }">
      <div class="control-group">
        <label>光影流动</label>
        <input type="range" v-model="bloomIntensity" min="0" max="2" step="0.1" />
      </div>
      <button @click="toggleGrayscale" class="mode-btn">
        {{ isGrayscale ? '恢复色彩' : '1875年记忆' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useMonetScene } from '@/composables/useMonetScene';
import { useMonetInteraction } from '@/composables/useMonetInteraction';

const canvasEl = ref(null);
const isExploring = ref(false);
const dialogue = ref(null);
const isGrayscale = ref(false);
const bloomIntensity = ref(1);

const {
  initScene,
  loadLayers,
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
  toggleGrayscale
} = useMonetInteraction(
  isExploring,
  dialogue,
  isGrayscale,
  layers,
  camera
);

onMounted(() => {
  initScene();
  loadLayers();
  window.addEventListener('mousemove', updateMouseTarget);
  window.addEventListener('click', onClick);
  window.addEventListener('resize', onResize);
  animate();
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMouseTarget);
  window.removeEventListener('click', onClick);
  window.removeEventListener('resize', onResize);
  renderer?.dispose();
});
</script>

<style scoped>
.page-monet {
  width: 100%;
  height: 100%;
  position: relative;
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
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 10;
  transition: all 1s ease;
  color: #2c3e50;
}

.painting-header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  letter-spacing: 4px;
}

.painting-header p {
  font-size: 1.2rem;
  opacity: 0.8;
  letter-spacing: 2px;
}

.fade-out { 
  opacity: 0; 
  pointer-events: none;
  transform: translateX(-50%) translateY(-20px);
}

.fade-in { 
  opacity: 1 !important;
  transform: translateX(-50%) translateY(0) !important;
}

.start-btn {
  margin-top: 20px;
  padding: 12px 40px;
  background: rgba(44, 62, 80, 0.8);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(44, 62, 80, 0.3);
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
  background: #34495e; 
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(44, 62, 80, 0.4);
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

.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.4);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  max-width: 250px;
  transition: all 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.handwriting {
  font-size: 1.2rem;
  color: #34495e;
  line-height: 1.8;
  font-style: italic;
}

.close-hint {
  display: block;
  font-size: 0.7rem;
  margin-top: 10px;
  color: #95a5a6;
  text-align: right;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.bottom-bar {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 30px;
  align-items: center;
  background: rgba(255,255,255,0.5);
  backdrop-filter: blur(10px);
  padding: 15px 30px;
  border-radius: 40px;
  opacity: 0;
  transition: all 1s ease;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.control-group label {
  font-size: 0.9rem;
  color: #2c3e50;
  font-weight: 500;
}

.control-group input[type="range"] {
  width: 150px;
  cursor: pointer;
}

.mode-btn {
  background: rgba(44, 62, 80, 0.1);
  border: 2px solid #2c3e50;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #2c3e50;
  font-weight: 500;
  letter-spacing: 1px;
}

.mode-btn:hover {
  background: #2c3e50;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(44, 62, 80, 0.3);
}

.mode-btn:active {
  transform: translateY(0);
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
</style>
