import { ref, type Ref } from 'vue';
import * as THREE from 'three';
import gsap from 'gsap';

interface LayerAsset {
  url: string;
  depth: number;
  scale: number;
  name: string;
}

interface MonetSceneReturn {
  initScene: () => void;
  loadLayers: () => void;
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
    renderer.setClearColor(0xeef2f3, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.sortObjects = true;
  };

  const loadLayers = (): void => {
    const loader = new THREE.TextureLoader();
    const baseUrl = import.meta.env.BASE_URL as string;

    const assets: LayerAsset[] = [
      { url: `${baseUrl}sky.png`, depth: -2, scale: 6, name: 'sky' },
      { url: `${baseUrl}boy.png`, depth: -0.5, scale: 4.5, name: 'boy' },
      { url: `${baseUrl}lady-removebg-preview.png`, depth: 1, scale: 3.8, name: 'woman' },
      { url: `${baseUrl}grass-removebg-preview.png`, depth: 2.5, scale: 5, name: 'grass' }
    ];

    assets.forEach((item, index) => {
      loader.load(
        item.url,
        (texture: THREE.Texture) => {
          const image = texture.image as HTMLImageElement;
          const aspect = image.width / image.height;
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

          mesh.position.x = index % 2 === 0 ? -15 : 15;
          mesh.rotation.y = index % 2 === 0 ? -Math.PI / 4 : Math.PI / 4;
          mesh.material.opacity = 0;

          if (scene) {
            scene.add(mesh);
          }
          layers.value.push(mesh);
          console.log(`✓ 加载成功: ${item.name} (${image.width}x${image.height})`);

          gsap.to(mesh.position, {
            x: 0,
            duration: 1.5,
            delay: index * 0.3,
            ease: "power3.out"
          });
          gsap.to(mesh.rotation, {
            y: 0,
            duration: 1.5,
            delay: index * 0.3,
            ease: "power2.out"
          });
          gsap.to(mesh.material, {
            opacity: 1,
            duration: 1,
            delay: index * 0.3 + 0.5,
            ease: "power2.inOut"
          });
        },
        undefined,
        (error: unknown) => {
          console.error(`✗ 加载失败: ${item.url}`, error);
        }
      );
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
