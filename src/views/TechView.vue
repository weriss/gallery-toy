<template>
  <div class="page-tech">
    <!-- Three.js 3D 场景 -->
    <canvas ref="canvasEl" class="scene-canvas"></canvas>

    <!-- 扫描线效果 -->
    <div class="scanline-overlay"></div>
    
    <!-- 色差边缘 -->
    <div class="chromatic-edge"></div>

    <!-- HUD 角框 -->
    <div class="hud-corner tl"></div>
    <div class="hud-corner tr"></div>
    <div class="hud-corner bl"></div>
    <div class="hud-corner br"></div>

    <!-- HUD 状态 -->
    <div class="hud-status">
      <div><span class="status-dot"></span>ANOMALY DETECTED</div>
      <div>{{ currentDate }}</div>
      <div>DEPTH: ████ m</div>
      <div>ENTITY: UNKNOWN</div>
    </div>

    <!-- 左下角数据流 -->
    <div class="data-stream">
      <div v-for="(line, i) in dataLines" :key="i" class="data-line" :style="{ animationDelay: `${i * 0.3}s` }">
        {{ line }}
      </div>
    </div>

    <!-- 主内容 -->
    <div class="tech-content" ref="contentEl">
      <div class="tech-label">// SECTOR_NULL · WASTELAND PROTOCOL</div>
      <h1 class="tech-title" data-text="WERISS">WERISS</h1>
      <div class="tech-tagline">
        <span class="tag-line"></span>
        THE ABYSS GAZES BACK
      </div>
      
      <div class="tech-description">
        在荒原的尽头<br/>
        <span class="red-text">某物</span>正在苏醒
      </div>

      <button class="tech-btn" @click="handleExplore">
        <span class="btn-bracket">[</span>
        INITIALIZE
        <span class="btn-bracket">]</span>
      </button>
    </div>

    <!-- 探索模式：退出按钮 + 速度控制 -->
    <div class="explore-hud" ref="exploreHudEl">
      <div class="tour-speed">
        <span class="speed-label">CRUISE SPEED</span>
        <input type="range" min="0.2" max="3" step="0.1" v-model.number="tourSpeed" class="speed-slider" />
        <span class="speed-val">{{ tourSpeed.toFixed(1) }}x</span>
      </div>
      <button class="exit-btn" @click="handleExit">
        <span class="btn-bracket">[</span> EXIT <span class="btn-bracket">]</span>
      </button>
    </div>

    <!-- 信号弹窗 -->
    <Transition name="signal">
      <div v-if="signalPopup" class="signal-popup">
        <div class="signal-header">
          <span class="signal-tag">// SIGNAL_{{ signalPopup.id }}</span>
          <span class="signal-dist">DIST: {{ signalPopup.dist }}m</span>
        </div>
        <div class="signal-body" v-html="signalPopup.text"></div>
        <div class="signal-bar"></div>
      </div>
    </Transition>

    <!-- 点击提示 -->
    <div class="click-hint" v-if="isExploring && !signalPopup">CLICK TERRAIN TO DISTURB</div>

    <!-- 涟漪 Canvas 覆盖层 -->
    <canvas ref="rippleEl" class="ripple-canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import gsap from 'gsap';

const emit = defineEmits<{ (e: 'explore-mode', active: boolean): void }>();

const canvasEl = ref<HTMLCanvasElement | null>(null);
const contentEl = ref<HTMLDivElement | null>(null);
const exploreHudEl = ref<HTMLDivElement | null>(null);

const isExploring = ref(false);
const tourSpeed = ref(1.0);

// ── 信号节点 ──
interface SignalNode {
  id: string;
  pos: THREE.Vector3;
  text: string;
  triggered: boolean;
  mesh?: THREE.Mesh;
  light?: THREE.PointLight;
}

const SIGNAL_NODES: SignalNode[] = [
  {
    id: 'Ω-01', pos: new THREE.Vector3(-7, 2, 8),
    text: '...它不是第一次了<br/>我们在 <span class="hl">第三纪元</span> 就测量到这个频率<br/><em>但当时没有人活着出来</em>',
    triggered: false,
  },
  {
    id: 'Ψ-02', pos: new THREE.Vector3(0, 3.5, 1),
    text: '信号源：<span class="hl">未知深度</span><br/>内容：「醒来。你找到了正确的山。」<br/>发送时间：<em>-∞ 年前</em>',
    triggered: false,
  },
  {
    id: 'Δ-03', pos: new THREE.Vector3(7, 2, 7),
    text: '此处地磁异常<br/>建议 <span class="hl">立即撤离</span><br/><em>——最后一次收到此警告的人已不存在</em>',
    triggered: false,
  },
  {
    id: 'Λ-04', pos: new THREE.Vector3(-5, 3, 3),
    text: '形态分析完成：<span class="hl">非欧几里得结构</span><br/>山脉不符合任何已知地质模型<br/><em>它在生长</em>',
    triggered: false,
  },
  {
    id: 'X-05', pos: new THREE.Vector3(4, 5, 16),
    text: '从这里能看见它<br/>那个 <span class="hl">太阳</span> 不是太阳<br/><em>请不要继续向前</em>',
    triggered: false,
  },
];

const signalPopup = ref<{ id: string; text: string; dist: string } | null>(null);
let signalTimer: ReturnType<typeof setTimeout> | null = null;
const lastTriggeredSignal = ref('');

// ── 涟漪 ──
const rippleEl = ref<HTMLCanvasElement | null>(null);
interface Ripple { x: number; y: number; r: number; maxR: number; alpha: number; }
const ripples: Ripple[] = [];
let rippleCtx: CanvasRenderingContext2D | null = null;
const raycaster = new THREE.Raycaster();
const mouseNDC = new THREE.Vector2();

const currentDate = computed(() => {
  const now = new Date();
  return `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;
});

const dataLines = [
  'SYS::BREACH_DETECTED............',
  'ENTITY_CLASS: [REDACTED]',
  'WARNING: DO_NOT_LOOK_DIRECTLY',
  'FREQ: 0.000███ Hz',
  'SIGNAL_ORIGIN: UNKNOWN',
  'CONTAINMENT: FAILED',
];

// ── Three.js 场景 ──
let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let animFrameId: number;

let terrainOriginalY: Float32Array;
let terrainMesh: THREE.Mesh;
let wireMesh: THREE.Mesh;
let sunMesh: THREE.Mesh;
let sunCorona: THREE.Mesh;
let sunRays: THREE.Mesh[] = [];
let clock: THREE.Clock;

// 自动巡游路径
let tourT = 0;  // 路径参数 0~1 循环
const TOUR_WAYPOINTS = [
  { x: -10, y: 4,  z: 14, lx:  0, ly: 1, lz: -5 },
  { x:  -6, y: 2.5, z:  6, lx: -4, ly: 2, lz:  0 },
  { x:   0, y: 3,  z:  2, lx:  0, ly: 3, lz: -8 },
  { x:   7, y: 2.5, z:  6, lx:  4, ly: 2, lz:  0 },
  { x:  10, y: 4,  z: 14, lx:  0, ly: 1, lz: -5 },
  { x:   4, y: 6,  z: 18, lx:  0, ly: 2, lz:  0 },
  { x: -10, y: 4,  z: 14, lx:  0, ly: 1, lz: -5 }, // 回到起点形成循环
];

const GRID_W = 120;
const GRID_H = 80;
const TERRAIN_W = 40;
const TERRAIN_H = 26;

function fbm(x: number, z: number): number {
  let val = 0;
  let amp = 1.0;
  let freq = 1.0;
  const max_amp = [1.0, 0.52, 0.52*0.52, 0.52*0.52*0.52, 0.52*0.52*0.52*0.52];
  const totalAmp = max_amp.reduce((a, b) => a + b, 0);
  const octaves = 5;
  for (let i = 0; i < octaves; i++) {
    val += Math.sin(x * freq * 0.4 + freq) * Math.cos(z * freq * 0.35 + freq * 0.7) * amp;
    val += Math.sin(x * freq * 0.7 + freq * 2.1) * Math.sin(z * freq * 0.6 + freq * 1.3) * amp * 0.5;
    amp *= 0.52;
    freq *= 2.1;
  }
  return val / (totalAmp * 1.5);
}

const initScene = () => {
  if (!canvasEl.value) return;
  clock = new THREE.Clock();

  renderer = new THREE.WebGLRenderer({ canvas: canvasEl.value, antialias: true, alpha: false });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x030205, 1);
  renderer.shadowMap.enabled = true;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a0005, 0.022);

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(0, 6, 18);
  camera.lookAt(0, 1, 0);

  buildTerrain();
  buildSun();
  buildAtmosphere();
  buildSignalNodes();
};

const buildTerrain = () => {
  const geo = new THREE.PlaneGeometry(TERRAIN_W, TERRAIN_H, GRID_W, GRID_H);
  geo.rotateX(-Math.PI / 2);

  const pos = geo.attributes.position as THREE.BufferAttribute;
  const count = pos.count;
  terrainOriginalY = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const ridge = Math.exp(-((z + 2) ** 2) / 40) * 3.5;
    const h = fbm(x, z) * 4 + ridge;
    const y = Math.max(h, -0.5);
    pos.setY(i, y);
    terrainOriginalY[i] = y;
  }
  geo.computeVertexNormals();

  // 实体面
  const faceMat = new THREE.MeshStandardMaterial({
    color: 0x3a1a12,
    roughness: 0.9,
    metalness: 0.15,
    emissive: new THREE.Color(0x2a0808),
    emissiveIntensity: 1.2,
    side: THREE.FrontSide,
  });
  terrainMesh = new THREE.Mesh(geo, faceMat);
  terrainMesh.receiveShadow = true;
  scene.add(terrainMesh);

  // 线框层
  const wireGeo = geo.clone();
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x22ff66,
    wireframe: true,
    transparent: true,
    opacity: 0.38,
  });
  wireMesh = new THREE.Mesh(wireGeo, wireMat);
  scene.add(wireMesh);

  // 深处紫色线框
  const wireGeo2 = geo.clone();
  const pos2 = wireGeo2.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < pos2.count; i++) {
    pos2.setY(i, pos2.getY(i) - 0.08);
  }
  wireGeo2.computeVertexNormals();
  scene.add(new THREE.Mesh(wireGeo2, new THREE.MeshBasicMaterial({
    color: 0x8800ff,
    wireframe: true,
    transparent: true,
    opacity: 0.07,
  })));

  const dirLight = new THREE.DirectionalLight(0xff6622, 2.5);
  dirLight.position.set(0, 20, -15);
  dirLight.castShadow = true;
  scene.add(dirLight);

  // 正面补光（让山脸正面可见）
  const fillLight = new THREE.DirectionalLight(0xff3300, 1.4);
  fillLight.position.set(0, 5, 20);
  scene.add(fillLight);

  scene.add(new THREE.AmbientLight(0x331122, 2.5));

  const crackLight = new THREE.PointLight(0xff2200, 8, 20);
  crackLight.position.set(2, 0.5, 2);
  scene.add(crackLight);
};

const buildSun = () => {
  const sunGeo = new THREE.SphereGeometry(2.2, 32, 32);
  sunMesh = new THREE.Mesh(sunGeo, new THREE.MeshBasicMaterial({ color: 0xcc2200 }));
  sunMesh.position.set(8, 14, -25);
  scene.add(sunMesh);

  const coronaGeo = new THREE.SphereGeometry(3.2, 32, 32);
  sunCorona = new THREE.Mesh(coronaGeo, new THREE.MeshBasicMaterial({
    color: 0xff3300,
    transparent: true,
    opacity: 0.15,
    side: THREE.BackSide,
  }));
  sunMesh.add(sunCorona);

  sunMesh.add(new THREE.Mesh(
    new THREE.SphereGeometry(5.5, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0x660011, transparent: true, opacity: 0.07, side: THREE.BackSide })
  ));

  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2;
    const len = 3 + Math.random() * 3;
    const ray = new THREE.Mesh(
      new THREE.PlaneGeometry(0.15 + Math.random() * 0.2, len),
      new THREE.MeshBasicMaterial({
        color: 0xff2200,
        transparent: true,
        opacity: 0.12 + Math.random() * 0.1,
        side: THREE.DoubleSide,
      })
    );
    ray.rotation.z = angle;
    ray.position.set(
      Math.cos(angle) * (2.8 + len / 2),
      Math.sin(angle) * (2.8 + len / 2),
      0
    );
    sunRays.push(ray);
    sunMesh.add(ray);
  }
};

const buildAtmosphere = () => {
  const haze = new THREE.Mesh(
    new THREE.PlaneGeometry(200, 30),
    new THREE.MeshBasicMaterial({ color: 0x550010, transparent: true, opacity: 0.18, depthWrite: false, side: THREE.DoubleSide })
  );
  haze.rotation.x = Math.PI / 2;
  haze.position.set(0, 0.1, -10);
  scene.add(haze);

  const starCount = 300;
  const starGeo = new THREE.BufferGeometry();
  const starPos = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    starPos[i * 3]     = (Math.random() - 0.5) * 160;
    starPos[i * 3 + 1] = Math.random() * 40 + 5;
    starPos[i * 3 + 2] = (Math.random() - 0.5) * 80 - 15;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffd080, size: 0.1, transparent: true, opacity: 0.5 })));

  for (let t = 0; t < 6; t++) {
    const points: THREE.Vector3[] = [];
    const bx = (Math.random() - 0.5) * 16;
    const bz = (Math.random() - 0.5) * 8 - 2;
    for (let s = 0; s <= 20; s++) {
      const p = s / 20;
      points.push(new THREE.Vector3(
        bx + Math.sin(p * Math.PI * 3 + t) * p * 1.5,
        p * (4 + Math.random() * 3),
        bz + Math.cos(p * Math.PI * 2.5 + t * 0.7) * p * 1.2,
      ));
    }
    const curve = new THREE.CatmullRomCurve3(points);
    scene.add(new THREE.Mesh(
      new THREE.TubeGeometry(curve, 30, 0.03 + Math.random() * 0.04, 6, false),
      new THREE.MeshBasicMaterial({ color: t % 2 === 0 ? 0x44ff88 : 0x8800ff, transparent: true, opacity: 0.25 + Math.random() * 0.2 })
    ));
  }
};

const buildSignalNodes = () => {
  SIGNAL_NODES.forEach((node) => {
    // 发光小球
    const geo = new THREE.SphereGeometry(0.18, 16, 16);
    const mat = new THREE.MeshBasicMaterial({ color: 0x00ffaa, transparent: true, opacity: 0.9 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(node.pos);
    scene.add(mesh);
    node.mesh = mesh;

    // 外层光晕环
    const ringGeo = new THREE.TorusGeometry(0.35, 0.03, 8, 32);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00ffaa, transparent: true, opacity: 0.3 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.copy(node.pos);
    scene.add(ring);

    // 点光源
    const light = new THREE.PointLight(0x00ffaa, 2, 6);
    light.position.copy(node.pos);
    scene.add(light);
    node.light = light;
  });
};

let mouseX = 0;
const onMouseMove = (e: MouseEvent) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
};
const onResize = () => {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

// 在两个路径点之间做 Catmull-Rom 插值
function catmullRom(p0: number, p1: number, p2: number, p3: number, t: number): number {
  return 0.5 * (
    (2 * p1) +
    (-p0 + p2) * t +
    (2*p0 - 5*p1 + 4*p2 - p3) * t * t +
    (-p0 + 3*p1 - 3*p2 + p3) * t * t * t
  );
}

function sampleTourPath(globalT: number) {
  const pts = TOUR_WAYPOINTS;
  const segments = pts.length - 1;
  const scaled = ((globalT % 1) + 1) % 1 * segments;
  const seg = Math.floor(scaled);
  const lt = scaled - seg;
  const i0 = Math.max(seg - 1, 0);
  const i1 = seg;
  const i2 = Math.min(seg + 1, pts.length - 1);
  const i3 = Math.min(seg + 2, pts.length - 1);
  return {
    x:  catmullRom(pts[i0].x,  pts[i1].x,  pts[i2].x,  pts[i3].x,  lt),
    y:  catmullRom(pts[i0].y,  pts[i1].y,  pts[i2].y,  pts[i3].y,  lt),
    z:  catmullRom(pts[i0].z,  pts[i1].z,  pts[i2].z,  pts[i3].z,  lt),
    lx: catmullRom(pts[i0].lx, pts[i1].lx, pts[i2].lx, pts[i3].lx, lt),
    ly: catmullRom(pts[i0].ly, pts[i1].ly, pts[i2].ly, pts[i3].ly, lt),
    lz: catmullRom(pts[i0].lz, pts[i1].lz, pts[i2].lz, pts[i3].lz, lt),
  };
}

const animateScene = () => {
  animFrameId = requestAnimationFrame(animateScene);
  if (!renderer || !scene || !camera || !wireMesh || !terrainMesh || !sunMesh || !sunCorona) return;
  const t = clock.getElapsedTime();

  // 地形波动
  const pos = wireMesh.geometry.attributes.position as THREE.BufferAttribute;
  const fpos = terrainMesh.geometry.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const wave = Math.sin(x * 0.4 + t * 0.6) * 0.18
               + Math.sin(z * 0.55 + t * 0.45) * 0.14
               + Math.sin((x + z) * 0.3 + t * 0.8) * 0.1;
    const ny = terrainOriginalY[i] + wave;
    pos.setY(i, ny);
    fpos.setY(i, ny);
  }
  pos.needsUpdate = true;
  fpos.needsUpdate = true;
  wireMesh.geometry.computeVertexNormals();
  terrainMesh.geometry.computeVertexNormals();

  // 太阳脉动
  const pulse = 1 + Math.sin(t * 1.2) * 0.03 + Math.sin(t * 3.7) * 0.01;
  sunMesh.scale.setScalar(pulse);
  (sunCorona.material as THREE.MeshBasicMaterial).opacity = 0.10 + Math.sin(t * 0.8) * 0.06;
  sunRays.forEach((ray, i) => {
    (ray.material as THREE.MeshBasicMaterial).opacity = 0.06 + Math.sin(t * (1.5 + i * 0.4) + i) * 0.08;
  });

  if (isExploring.value) {
    // 自动巡游：沿路径平滑移动
    tourT += 0.00008 * tourSpeed.value;
    const p = sampleTourPath(tourT);
    camera.position.x += (p.x - camera.position.x) * 0.025;
    camera.position.y += (p.y - camera.position.y) * 0.025;
    camera.position.z += (p.z - camera.position.z) * 0.025;
    camera.lookAt(
      p.lx + Math.sin(t * 0.15) * 0.5,
      p.ly + Math.sin(t * 0.1) * 0.2,
      p.lz
    );

    // 信号节点脉动 + 距离检测
    SIGNAL_NODES.forEach((node) => {
      if (!node.mesh || !node.light) return;
      const pulse = 0.7 + Math.sin(t * 3 + node.pos.x) * 0.3;
      node.mesh.scale.setScalar(pulse);
      node.light.intensity = 1.5 + Math.sin(t * 2.5 + node.pos.z) * 1.0;

      // 接近触发（距离 < 3.5）
      const dist = camera.position.distanceTo(node.pos);
      if (!node.triggered && dist < 3.5) {
        node.triggered = true;
        lastTriggeredSignal.value = node.id;
        signalPopup.value = { id: node.id, text: node.text, dist: dist.toFixed(1) };
        if (signalTimer) clearTimeout(signalTimer);
        signalTimer = setTimeout(() => { signalPopup.value = null; }, 5000);
      }
      // 离开后可再触发
      if (node.triggered && dist > 6) node.triggered = false;
    });

    // 涟漪动画
    if (rippleCtx && rippleEl.value) {
      rippleCtx.clearRect(0, 0, rippleEl.value.width, rippleEl.value.height);
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += 3.5;
        rp.alpha -= 0.012;
        if (rp.alpha <= 0) { ripples.splice(i, 1); continue; }
        rippleCtx.beginPath();
        rippleCtx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        rippleCtx.strokeStyle = `rgba(204, 26, 26, ${rp.alpha})`;
        rippleCtx.lineWidth = 1.5;
        rippleCtx.stroke();

        rippleCtx.beginPath();
        rippleCtx.arc(rp.x, rp.y, rp.r * 0.6, 0, Math.PI * 2);
        rippleCtx.strokeStyle = `rgba(34, 255, 100, ${rp.alpha * 0.4})`;
        rippleCtx.lineWidth = 0.8;
        rippleCtx.stroke();
      }
    }
  } else {
    // 普通模式：鼠标跟随
    camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.02;
    camera.position.y = 6 + Math.sin(t * 0.3) * 0.3;
    camera.lookAt(0, 1 + Math.sin(t * 0.2) * 0.2, 0);
  }

  renderer.render(scene, camera);
};

const handleExplore = () => {
  if (isExploring.value) return;
  isExploring.value = true;
  emit('explore-mode', true);

  // 初始化巡游位置（从当前相机位置出发）
  tourT = 0;

  // 淡出主内容
  gsap.to(contentEl.value, {
    opacity: 0,
    y: -30,
    duration: 0.8,
    ease: 'power2.in',
    onComplete: () => { if (contentEl.value) contentEl.value.style.display = 'none'; }
  });

  // 淡入探索 HUD
  if (exploreHudEl.value) {
    exploreHudEl.value.style.display = 'flex';
    gsap.fromTo(exploreHudEl.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: 'power2.out' }
    );
  }
};

const handleExit = () => {
  if (!isExploring.value) return;
  isExploring.value = false;
  emit('explore-mode', false);

  // 淡出探索 HUD
  gsap.to(exploreHudEl.value, {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: 'power2.in',
    onComplete: () => { if (exploreHudEl.value) exploreHudEl.value.style.display = 'none'; }
  });

  // 淡回主内容
  if (contentEl.value) {
    contentEl.value.style.display = 'flex';
    gsap.fromTo(contentEl.value,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power2.out' }
    );
  }

  // 相机飞回原位
  gsap.to(camera.position, { x: 0, y: 6, z: 18, duration: 2, ease: 'power3.inOut' });
};

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isExploring.value) handleExit();
};

const onCanvasClick = (e: MouseEvent) => {
  if (!isExploring.value || !canvasEl.value) return;
  if (!camera || !terrainMesh || !renderer) return;

  // 2D 涟漪
  if (rippleEl.value) {
    ripples.push({ x: e.clientX, y: e.clientY, r: 0, maxR: 120, alpha: 0.7 });
  }

  // 3D Raycaster 打到地形，震动相机
  mouseNDC.set(
    (e.clientX / window.innerWidth) * 2 - 1,
    -(e.clientY / window.innerHeight) * 2 + 1
  );
  raycaster.setFromCamera(mouseNDC, camera);
  const hits = raycaster.intersectObject(terrainMesh);
  if (hits.length > 0) {
    // 短暂震动相机（仅偏移量，不干扰巡游主路径）
    const shakeX = (Math.random() - 0.5) * 0.35;
    const shakeY = (Math.random() - 0.5) * 0.2;
    gsap.timeline()
      .to(camera.position, { x: `+=${shakeX}`, y: `+=${shakeY}`, duration: 0.07, ease: 'none' })
      .to(camera.position, { x: `-=${shakeX * 0.8}`, y: `-=${shakeY * 0.8}`, duration: 0.07, ease: 'none' })
      .to(camera.position, { x: `+=${shakeX * 0.15}`, y: `+=${shakeY * 0.15}`, duration: 0.1, ease: 'none' });
  }
};

onMounted(() => {
  initScene();
  animateScene();
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('resize', onResize);
  window.addEventListener('keydown', onKeyDown);

  // 涟漪 Canvas 初始化
  if (rippleEl.value) {
    rippleEl.value.width = window.innerWidth;
    rippleEl.value.height = window.innerHeight;
    rippleCtx = rippleEl.value.getContext('2d');
  }
  window.addEventListener('click', onCanvasClick);
});

onUnmounted(() => {
  cancelAnimationFrame(animFrameId);
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('resize', onResize);
  window.removeEventListener('keydown', onKeyDown);
  window.removeEventListener('click', onCanvasClick);
  if (signalTimer) clearTimeout(signalTimer);
  renderer?.dispose();
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
  display: none;
  position: absolute;
  bottom: 44px;
  right: 44px;
  z-index: 70;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  opacity: 0;
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
.signal-popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 80;
  width: min(480px, 85vw);
  background: rgba(3, 2, 5, 0.88);
  border: 1px solid rgba(0, 255, 170, 0.4);
  padding: 20px 24px;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 30px rgba(0, 255, 170, 0.15), inset 0 0 20px rgba(0, 255, 170, 0.03);
  pointer-events: none;
}
.signal-header {
  display: flex;
  justify-content: space-between;
  font-size: 9px;
  letter-spacing: 0.2em;
  color: rgba(0, 255, 170, 0.6);
  margin-bottom: 14px;
  border-bottom: 1px solid rgba(0, 255, 170, 0.15);
  padding-bottom: 10px;
}
.signal-tag { color: #00ffaa; }
.signal-dist { color: rgba(240, 224, 64, 0.5); }
.signal-body {
  font-size: 14px;
  line-height: 1.9;
  color: rgba(240, 224, 64, 0.85);
}
.signal-body :deep(.hl) {
  color: #cc1a1a;
  text-shadow: 0 0 8px rgba(204, 26, 26, 0.5);
}
.signal-body :deep(em) {
  color: rgba(240, 224, 64, 0.4);
  font-style: normal;
  font-size: 12px;
  display: block;
  margin-top: 6px;
  letter-spacing: 0.05em;
}
.signal-bar {
  margin-top: 14px;
  height: 1px;
  background: linear-gradient(90deg, #00ffaa, transparent);
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
  from { opacity: 0; transform: translate(-50%, calc(-50% + 18px)); filter: blur(4px); }
  to   { opacity: 1; transform: translate(-50%, -50%); filter: blur(0); }
}
@keyframes sigOut {
  from { opacity: 1; transform: translate(-50%, -50%); }
  to   { opacity: 0; transform: translate(-50%, calc(-50% - 10px)); }
}

/* 点击提示 */
.click-hint {
  position: absolute;
  bottom: 130px;
  right: 44px;
  z-index: 65;
  font-size: 9px;
  letter-spacing: 0.2em;
  color: rgba(240, 224, 64, 0.25);
  pointer-events: none;
  animation: hintBlink 2.5s ease-in-out infinite;
}
@keyframes hintBlink {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 0.7; }
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
</style>
