import { ref, type Ref } from 'vue';
import * as THREE from 'three';
import gsap from 'gsap';

interface LayerAsset {
  depth: number;
  scale: number;
  name: string;
  title: string;
  subtitle: string;
  aspect: number;
  accent: string;
}

interface MonetSceneReturn {
  initScene: () => void;
  loadLayers: () => void;
  playArchiveReveal: () => void;
  animate: () => void;
  onResize: () => void;
  updateMouseTarget: (e: MouseEvent) => void;
  layers: Ref<THREE.Mesh[]>;
  scene: THREE.Scene | undefined;
  camera: THREE.PerspectiveCamera | undefined;
  renderer: THREE.WebGLRenderer | undefined;
  mouse: THREE.Vector2;
  targetMouse: THREE.Vector2;
}

export function useMonetScene(canvasEl: Ref<HTMLCanvasElement | null>): MonetSceneReturn {
  const layers = ref<THREE.Mesh[]>([]);
  let scene: THREE.Scene | undefined;
  let camera: THREE.PerspectiveCamera | undefined;
  let renderer: THREE.WebGLRenderer | undefined;
  let mouse = new THREE.Vector2();
  let targetMouse = new THREE.Vector2();
  const assets: LayerAsset[] = [
    { depth: -2, scale: 6.1, name: 'sky', title: 'SKYFOLD MATTE', subtitle: '天幕底片 / 高空异象保留位', aspect: 16 / 9, accent: 'rgba(255, 231, 178, 0.92)' },
    { depth: -0.4, scale: 4.6, name: 'boy', title: 'SCALE FIGURE', subtitle: '远景尺度参照 / 人类尺寸锚点', aspect: 4 / 5, accent: 'rgba(144, 214, 255, 0.9)' },
    { depth: 1.1, scale: 3.9, name: 'woman', title: 'HERO SILHOUETTE', subtitle: '主角剪影保留位 / 第一眼情绪层', aspect: 4 / 5, accent: 'rgba(255, 216, 143, 0.92)' },
    { depth: 2.5, scale: 5.3, name: 'grass', title: 'WIND FOREGROUND', subtitle: '前景风场 / 速度线与遮挡层', aspect: 21 / 9, accent: 'rgba(255, 255, 255, 0.9)' }
  ];

  const initScene = (): void => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 6;

    if (!canvasEl.value) return;

    renderer = new THREE.WebGLRenderer({
      canvas: canvasEl.value,
      antialias: true,
      alpha: false
    });
    renderer.setClearColor(0x050505, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.sortObjects = true;
  };

  const createPlaceholderTexture = (asset: LayerAsset): THREE.CanvasTexture => {
    const canvas = document.createElement('canvas');
    canvas.width = 1600;
    canvas.height = Math.round(canvas.width / asset.aspect);
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return new THREE.CanvasTexture(canvas);
    }

    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.lineWidth = 4;
    ctx.strokeRect(28, 28, canvas.width - 56, canvas.height - 56);

    ctx.strokeStyle = asset.accent.replace('0.92', '0.22').replace('0.9', '0.22');
    ctx.lineWidth = 1.5;
    ctx.setLineDash([14, 12]);
    ctx.strokeRect(58, 58, canvas.width - 116, canvas.height - 116);
    ctx.setLineDash([]);

    ctx.fillStyle = 'rgba(255,255,255,0.035)';
    for (let index = 0; index < 4; index += 1) {
      ctx.fillRect(88, 124 + index * 26, canvas.width - 176, 6);
    }

    ctx.fillStyle = 'rgba(255,255,255,0.22)';
    ctx.font = '700 48px "Space Mono", monospace';
    ctx.fillText(asset.title, 88, 200);

    ctx.fillStyle = 'rgba(255,255,255,0.14)';
    ctx.font = '500 24px "Space Mono", monospace';
    ctx.fillText(asset.subtitle, 88, 242);

    ctx.fillStyle = 'rgba(255,255,255,0.12)';
    ctx.font = '400 18px "Space Mono", monospace';
    ctx.fillText(`LAYER / ${asset.name.toUpperCase()} / DEPTH ${asset.depth}`, 88, canvas.height - 84);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  };

  const playArchiveReveal = (): void => {
    layers.value.forEach((mesh: THREE.Mesh, index) => {
      const side = index % 2 === 0 ? -1 : 1;
      const material = mesh.material as THREE.MeshBasicMaterial;

      gsap.killTweensOf(mesh.position);
      gsap.killTweensOf(mesh.rotation);
      gsap.killTweensOf(material);

      mesh.position.x = side * (11 + index * 2.2);
      mesh.position.y = index === 0 ? -0.35 : index === 3 ? 0.35 : 0;
      mesh.rotation.y = side * 0.9;
      mesh.rotation.z = side * 0.04;
      material.opacity = 0.12;

      gsap.to(mesh.position, {
        x: 0,
        y: 0,
        duration: 1.6,
        delay: index * 0.16,
        ease: 'power3.out'
      });
      gsap.to(mesh.rotation, {
        y: 0,
        z: 0,
        duration: 1.5,
        delay: index * 0.16,
        ease: 'power2.out'
      });
      gsap.to(material, {
        opacity: 1,
        duration: 1.1,
        delay: index * 0.16 + 0.12,
        ease: 'power2.inOut'
      });
    });
  };

  const loadLayers = (): void => {

    assets.forEach((item, index) => {
      const texture = createPlaceholderTexture(item);
      const geometry = new THREE.PlaneGeometry(item.aspect * item.scale, item.scale);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: false,
        side: THREE.DoubleSide,
        color: new THREE.Color(1, 1, 1),
        depthWrite: true
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0, 0, item.depth);
      mesh.userData.name = item.name;
      mesh.renderOrder = -item.depth;

      mesh.position.x = 0;
      mesh.rotation.y = 0;
      mesh.material.opacity = 1;

      if (scene) {
        scene.add(mesh);
      }
      layers.value.push(mesh);
    });

    requestAnimationFrame(() => {
      playArchiveReveal();
    });
  };

  const animate = (): void => {
    requestAnimationFrame(animate);

    mouse.x += (targetMouse.x - mouse.x) * 0.08;
    mouse.y += (targetMouse.y - mouse.y) * 0.08;

    layers.value.forEach((mesh: THREE.Mesh) => {
      const factor = mesh.position.z * 0.5; 
      mesh.position.x = mouse.x * factor;
      mesh.position.y = -mouse.y * factor;
    });

    const grass = layers.value.find((l: THREE.Mesh) => l.userData.name === 'grass');
    if (grass) {
      grass.rotation.z = Math.sin(Date.now() * 0.001) * 0.02;
    }
    
    const woman = layers.value.find((l: THREE.Mesh) => l.userData.name === 'woman');
    if (woman) {
      woman.rotation.z = Math.sin(Date.now() * 0.0008) * 0.015;
    }
    
    const sky = layers.value.find((l: THREE.Mesh) => l.userData.name === 'sky');
    if (sky) {
      sky.position.x += Math.sin(Date.now() * 0.0003) * 0.001;
    }

    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
  };

  const onResize = (): void => {
    if (!camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  const updateMouseTarget = (e: MouseEvent): void => {
    targetMouse.x = (e.clientX / window.innerWidth) - 0.5;
    targetMouse.y = (e.clientY / window.innerHeight) - 0.5;
  };

  return {
    initScene,
    loadLayers,
    playArchiveReveal,
    animate,
    onResize,
    updateMouseTarget,
    layers,
    scene,
    camera,
    renderer,
    mouse,
    targetMouse
  };
}
