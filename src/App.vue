<template>
  <div class="painting-container" ref="container">
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
import { ref, onMounted, onUnmounted, watch } from 'vue';
import * as THREE from 'three';
import gsap from 'gsap';

// --- 状态管理 ---
const container = ref(null);
const canvasEl = ref(null);
const isExploring = ref(false);
const dialogue = ref(null);
const isGrayscale = ref(false);
const bloomIntensity = ref(1);

let scene, camera, renderer, layers = [];
let mouse = new THREE.Vector2();
let targetMouse = new THREE.Vector2();

// --- 初始化场景 ---
const initScene = () => {
  scene = new THREE.Scene();
  // 使用透视相机增强深度感
  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 6;

  renderer = new THREE.WebGLRenderer({
    canvas: canvasEl.value,
    antialias: true,
    alpha: false
  });
  renderer.setClearColor(0xeef2f3, 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.sortObjects = true;
};

// --- 加载图层 ---
const loadLayers = () => {
  const loader = new THREE.TextureLoader();
  const baseUrl = import.meta.env.BASE_URL;

  // 图片定义
  const assets = [
    { url: `${baseUrl}sky.png`, depth: -2, scale: 6, name: 'sky' },      // 背景
    { url: `${baseUrl}boy.png`, depth: -0.5, scale: 4.5, name: 'boy' },   // 中景
    { url: `${baseUrl}lady-removebg-preview.png`, depth: 1, scale: 3.8, name: 'woman' },  // 主体
    { url: `${baseUrl}grass-removebg-preview.png`, depth: 2.5, scale: 5, name: 'grass' } // 前景
  ];

  assets.forEach((item, index) => {
    loader.load(
      item.url,
      (texture) => {
        const aspect = texture.image.width / texture.image.height;
        const geometry = new THREE.PlaneGeometry(aspect * item.scale, item.scale);
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide,
          color: new THREE.Color(1, 1, 1),
          alphaTest: 0.1,
          depthWrite: true
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(0, 0, item.depth);
        mesh.userData.name = item.name;
        mesh.renderOrder = -item.depth;

        scene.add(mesh);
        layers.push(mesh);
        console.log(`✓ 加载成功: ${item.name} (${texture.image.width}x${texture.image.height})`);
      },
      undefined,
      (error) => {
        console.error(`✗ 加载失败: ${item.url}`, error);
      }
    );
  });
};

// --- 交互逻辑 ---
const onMouseMove = (e) => {
  targetMouse.x = (e.clientX / window.innerWidth) - 0.5;
  targetMouse.y = (e.clientY / window.innerHeight) - 0.5;
};

const onClick = (e) => {
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(pointer, camera);
  const intersects = raycaster.intersectObjects(layers);

  if (intersects.length > 0) {
    const clickedObj = intersects[0].object.userData.name;
    if (clickedObj === 'woman') {
      dialogue.value = "“克劳德总是在风起时按下快门（画笔），他说这层面纱捕捉到了光的灵魂。”";
    } else if (clickedObj === 'boy') {
      dialogue.value = "这是让（Jean），莫奈的长子。在那个夏天，他始终在草坡的那头好奇地看着。";
    }
  }
};

const startExplore = () => {
  isExploring.value = true;
  gsap.to(camera.position, { z: 5.5, duration: 2, ease: "power2.inOut" });

  // 调整草的尺寸和位置
  const grass = layers.find(l => l.userData.name === 'grass');
  if (grass) {
    gsap.to(grass.scale, { x: 0.7, y: 0.7, z: 0.7, duration: 2, ease: "power2.inOut" });
    gsap.to(grass.position, { y: 0.5, duration: 2, ease: "power2.inOut" });
  }
};

const toggleGrayscale = () => {
  isGrayscale.value = !isGrayscale.value;
  layers.forEach(mesh => {
    gsap.to(mesh.material.color, {
      r: isGrayscale.value ? 0.3 : 1,
      g: isGrayscale.value ? 0.3 : 1,
      b: isGrayscale.value ? 0.3 : 1,
      duration: 1
    });
  });
};

// --- 动画循环 ---
const animate = () => {
  requestAnimationFrame(animate);

  // 1. 平滑鼠标视差
  mouse.x += (targetMouse.x - mouse.x) * 0.05;
  mouse.y += (targetMouse.y - mouse.y) * 0.05;

  layers.forEach((mesh) => {
    const factor = mesh.position.z * 0.5; 
    mesh.position.x = mouse.x * factor;
    mesh.position.y = -mouse.y * factor;
  });

  // 2. 模拟微风 (草地轻轻晃动)
  const grass = layers.find(l => l.userData.name === 'grass');
  if (grass) {
    grass.rotation.z = Math.sin(Date.now() * 0.001) * 0.02;
  }

  renderer.render(scene, camera);
};

const onResize = () => {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

onMounted(() => {
  initScene();
  loadLayers();
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('click', onClick);
  window.addEventListener('resize', onResize);
  animate();
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('click', onClick);
  window.removeEventListener('resize', onResize);
  renderer?.dispose();
});
</script>

<style scoped>
.painting-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  background: radial-gradient(circle, #eef2f3 0%, #8e9eab 100%);
  overflow: hidden;
  font-family: 'PingFang SC', serif;
  position: relative;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* UI 层样式 */
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

.fade-out { opacity: 0; pointer-events: none; }
.fade-in { opacity: 1 !important; }

.start-btn {
  margin-top: 20px;
  padding: 12px 40px;
  background: rgba(44, 62, 80, 0.8);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  letter-spacing: 2px;
  transition: 0.3s;
}

.start-btn:hover { background: #34495e; transform: scale(1.05); }

.dialogue-box {
  position: absolute;
  top: 50%;
  left: 15%;
  z-index: 100;
  cursor: pointer;
}

.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.4);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  max-width: 250px;
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
}

.bottom-bar {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 30px;
  background: rgba(255,255,255,0.5);
  padding: 10px 30px;
  border-radius: 40px;
  opacity: 0;
  transition: 1s;
}

.mode-btn {
  background: none;
  border: 1px solid #2c3e50;
  padding: 5px 15px;
  border-radius: 15px;
  cursor: pointer;
}

/* 动画 */
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>