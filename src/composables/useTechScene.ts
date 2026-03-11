import type { Ref } from 'vue';
import * as THREE from 'three';
import gsap from 'gsap';
import { FINAL_SIGNAL_ID, TECH_SIGNAL_LAYOUTS, TECH_WINDOW_CUES, type ActiveTransmission, type SceneCue, type SceneCueMode } from '@/config/techNarrative';

interface UseTechSceneOptions {
  activeTransmission: Ref<ActiveTransmission | null>;
  canvasEl: Ref<HTMLCanvasElement | null>;
  completedSignals: Record<string, boolean>;
  isExploring: Ref<boolean>;
  onSignalTrigger: (nodeId: string, dist: number) => void;
  rippleEl: Ref<HTMLCanvasElement | null>;
  routeMarkers: Ref<number>;
  environmentMode: Ref<SceneCueMode | 'calm'>;
  sceneCue: Ref<SceneCue | null>;
  signalsArmed: Ref<boolean>;
  tourSpeed: Ref<number>;
}

interface RuntimeSignalNode {
  completed: boolean;
  id: string;
  light?: THREE.PointLight;
  mesh?: THREE.Mesh;
  pos: THREE.Vector3;
  ring?: THREE.Mesh;
  triggered: boolean;
}

interface ShotProfile {
  offset: THREE.Vector3;
  lookOffset: THREE.Vector3;
  damping: number;
  fov: number;
  wobbleX: number;
  wobbleY: number;
}

const GRID_W = 120;
const GRID_H = 80;
const TERRAIN_W = 40;
const TERRAIN_H = 26;
export function useTechScene({
  activeTransmission,
  canvasEl,
  completedSignals,
  isExploring,
  onSignalTrigger,
  rippleEl,
  routeMarkers,
  environmentMode,
  sceneCue,
  signalsArmed,
  tourSpeed,
}: UseTechSceneOptions) {
  const runtimeSignalNodes: RuntimeSignalNode[] = TECH_SIGNAL_LAYOUTS.map((layout) => ({
    id: layout.id,
    pos: new THREE.Vector3(layout.position.x, layout.position.y, layout.position.z),
    triggered: false,
    completed: false,
  }));

  let renderer: THREE.WebGLRenderer;
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let animFrameId = 0;
  let terrainOriginalY: Float32Array;
  let terrainMesh: THREE.Mesh;
  let wireMesh: THREE.Mesh;
  let sunMesh: THREE.Mesh;
  let sunCorona: THREE.Mesh;
  let sunRays: THREE.Mesh[] = [];
  let hazeMesh: THREE.Mesh;
  let fissureGroup: THREE.Group;
  let fissureWalls: THREE.Mesh[] = [];
  let fissureCore: THREE.Mesh;
  let fissureShards: THREE.Mesh[] = [];
  let stormGroup: THREE.Group;
  let stormCurtains: THREE.Mesh[] = [];
  let stormWall: THREE.Mesh;
  let stormParticles: THREE.Points;
  let skyfoldGroup: THREE.Group;
  let skyfoldArcs: THREE.Mesh[] = [];
  let skyfoldPillars: THREE.Mesh[] = [];
  let clock: THREE.Clock;
  let mouseX = 0;
  let rippleCtx: CanvasRenderingContext2D | null = null;
  let trauma = 0;

  const ripples: Array<{ x: number; y: number; r: number; maxR: number; alpha: number }> = [];
  const raycaster = new THREE.Raycaster();
  const mouseNDC = new THREE.Vector2();
  const fogColor = new THREE.Color(0x0a0005);
  const clearColor = new THREE.Color(0x030205);
  const wireColor = new THREE.Color(0x77d7ff);
  const sunColor = new THREE.Color(0xcc2200);
  const vector3Scratch = new THREE.Vector3();

  const shotProfiles: Record<string, ShotProfile> = {
    'Ω-01': {
      offset: new THREE.Vector3(-4.8, 2.8, 4.4),
      lookOffset: new THREE.Vector3(0.4, 1.1, -2.8),
      damping: 0.045,
      fov: 58,
      wobbleX: 0.18,
      wobbleY: 0.08,
    },
    'Ψ-02': {
      offset: new THREE.Vector3(5.2, 1.6, 4.8),
      lookOffset: new THREE.Vector3(-0.8, 0.6, -2.4),
      damping: 0.06,
      fov: 64,
      wobbleX: 0.35,
      wobbleY: 0.12,
    },
    'Δ-03': {
      offset: new THREE.Vector3(0.7, -0.9, 2.2),
      lookOffset: new THREE.Vector3(0, -1.4, -3.2),
      damping: 0.07,
      fov: 71,
      wobbleX: 0.06,
      wobbleY: 0.05,
    },
    'Λ-04': {
      offset: new THREE.Vector3(-2.8, 2.2, 3.1),
      lookOffset: new THREE.Vector3(1.2, 0.4, -2.6),
      damping: 0.055,
      fov: 62,
      wobbleX: 0.24,
      wobbleY: 0.16,
    },
    'X-05': {
      offset: new THREE.Vector3(0, 5.8, 8.2),
      lookOffset: new THREE.Vector3(0, 4.4, -6),
      damping: 0.038,
      fov: 72,
      wobbleX: 0.1,
      wobbleY: 0.05,
    },
  };

  const cruiseProfiles: Record<string, { position: THREE.Vector3; lookAt: THREE.Vector3; fov: number; damping: number }> = {
    'Ω-01': {
      position: new THREE.Vector3(-10.5, 4.6, 14.8),
      lookAt: new THREE.Vector3(-6.8, 2.2, 7),
      fov: 60,
      damping: 0.028,
    },
    'Ψ-02': {
      position: new THREE.Vector3(-4.4, 3.8, 10.4),
      lookAt: new THREE.Vector3(0, 2.8, 1.2),
      fov: 62,
      damping: 0.03,
    },
    'Δ-03': {
      position: new THREE.Vector3(3.8, 3.2, 9.4),
      lookAt: new THREE.Vector3(7.2, 1.4, 7),
      fov: 64,
      damping: 0.03,
    },
    'Λ-04': {
      position: new THREE.Vector3(-1.8, 4.8, 8.8),
      lookAt: new THREE.Vector3(-5.1, 2.9, 3.2),
      fov: 61,
      damping: 0.028,
    },
    'X-05': {
      position: new THREE.Vector3(1.2, 6.6, 16.4),
      lookAt: new THREE.Vector3(4, 4.4, 10),
      fov: 68,
      damping: 0.024,
    },
  };

  const getCueProfile = (mode?: SceneCue['mode']) => {
    switch (mode) {
      case 'quake':
        return { fogDensity: 0.028, fogColor: 0x15070a, clearColor: 0x040204, wireColor: 0xff8f3d, sunColor: 0xff5a36, hazeOpacity: 0.28, shake: 0.1, cameraLift: 0.35, cameraPush: -0.25 };
      case 'storm':
        return { fogDensity: 0.036, fogColor: 0x08111a, clearColor: 0x04070b, wireColor: 0x91dfff, sunColor: 0xaec9ff, hazeOpacity: 0.34, shake: 0.06, cameraLift: 0.18, cameraPush: -0.45 };
      case 'fissure':
        return { fogDensity: 0.044, fogColor: 0x02070a, clearColor: 0x020305, wireColor: 0x6ae3ff, sunColor: 0x4ecbff, hazeOpacity: 0.42, shake: 0.08, cameraLift: -0.8, cameraPush: -0.95 };
      case 'whiteout':
        return { fogDensity: 0.052, fogColor: 0xdbe4ea, clearColor: 0xaab6c4, wireColor: 0xf4fbff, sunColor: 0xe4eef8, hazeOpacity: 0.5, shake: 0.03, cameraLift: 0.15, cameraPush: -0.1 };
      case 'magnetic':
        return { fogDensity: 0.03, fogColor: 0x070413, clearColor: 0x030107, wireColor: 0xff77f7, sunColor: 0x7be0ff, hazeOpacity: 0.22, shake: 0.12, cameraLift: 0.22, cameraPush: -0.18 };
      case 'skyfold':
        return { fogDensity: 0.018, fogColor: 0x09030f, clearColor: 0x020105, wireColor: 0xffd76d, sunColor: 0xfff3b3, hazeOpacity: 0.16, shake: 0.04, cameraLift: 0.65, cameraPush: 0.18 };
      default:
        return { fogDensity: 0.022, fogColor: 0x0a0005, clearColor: 0x030205, wireColor: 0x77d7ff, sunColor: 0xcc2200, hazeOpacity: 0.18, shake: 0, cameraLift: 0, cameraPush: 0 };
    }
  };

  const setMeshOpacity = (mesh: THREE.Mesh, opacity: number) => {
    const material = mesh.material;
    if (Array.isArray(material)) {
      material.forEach((item) => {
        item.transparent = true;
        item.opacity = opacity;
      });
      return;
    }
    material.transparent = true;
    material.opacity = opacity;
  };

  const setGroupOpacity = (group: THREE.Group, opacity: number) => {
    group.visible = opacity > 0.01;
    group.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        setMeshOpacity(child, opacity);
      }
      if (child instanceof THREE.Points) {
        const material = child.material as THREE.PointsMaterial;
        material.transparent = true;
        material.opacity = opacity;
      }
    });
  };

  const findNextNodeId = () => runtimeSignalNodes.find((node) => !completedSignals[node.id])?.id ?? FINAL_SIGNAL_ID;

  const fbm = (x: number, z: number): number => {
    let val = 0;
    let amp = 1.0;
    let freq = 1.0;
    const maxAmp = [1.0, 0.52, 0.52 * 0.52, 0.52 * 0.52 * 0.52, 0.52 * 0.52 * 0.52 * 0.52];
    const totalAmp = maxAmp.reduce((sum, item) => sum + item, 0);
    for (let i = 0; i < 5; i += 1) {
      val += Math.sin(x * freq * 0.4 + freq) * Math.cos(z * freq * 0.35 + freq * 0.7) * amp;
      val += Math.sin(x * freq * 0.7 + freq * 2.1) * Math.sin(z * freq * 0.6 + freq * 1.3) * amp * 0.5;
      amp *= 0.52;
      freq *= 2.1;
    }
    return val / (totalAmp * 1.5);
  };

  const resetNodeVisual = (node: RuntimeSignalNode) => {
    if (node.mesh) {
      const material = node.mesh.material as THREE.MeshBasicMaterial;
      material.color.set(0x7be0ff);
      material.opacity = 0.9;
      node.mesh.scale.setScalar(1);
    }
    if (node.ring) {
      const material = node.ring.material as THREE.MeshBasicMaterial;
      material.color.set(0xffc857);
      material.opacity = 0.35;
      node.ring.rotation.set(0, 0, 0);
    }
    if (node.light) {
      node.light.color.set(0x7be0ff);
      node.light.intensity = 2;
    }
  };

  const applyCompletedVisual = (node: RuntimeSignalNode) => {
    if (node.mesh) {
      const material = node.mesh.material as THREE.MeshBasicMaterial;
      material.color.set(0xffc857);
      material.opacity = 0.75;
    }
    if (node.ring) {
      const material = node.ring.material as THREE.MeshBasicMaterial;
      material.color.set(0x7be0ff);
      material.opacity = 0.18;
    }
    if (node.light) {
      node.light.color.set(0xffc857);
      node.light.intensity = 0.8;
    }
  };

  const syncNodeCompletionVisual = (node: RuntimeSignalNode) => {
    const nextCompleted = completedSignals[node.id];
    if (node.completed === nextCompleted) return;

    node.completed = nextCompleted;
    if (node.completed) {
      applyCompletedVisual(node);
      return;
    }
    resetNodeVisual(node);
  };

  const buildTerrain = () => {
    const geo = new THREE.PlaneGeometry(TERRAIN_W, TERRAIN_H, GRID_W, GRID_H);
    geo.rotateX(-Math.PI / 2);

    const pos = geo.attributes.position as THREE.BufferAttribute;
    terrainOriginalY = new Float32Array(pos.count);

    for (let i = 0; i < pos.count; i += 1) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const ridge = Math.exp(-((z + 2) ** 2) / 40) * 3.5;
      const height = fbm(x, z) * 4 + ridge;
      const y = Math.max(height, -0.5);
      pos.setY(i, y);
      terrainOriginalY[i] = y;
    }
    geo.computeVertexNormals();

    terrainMesh = new THREE.Mesh(
      geo,
      new THREE.MeshStandardMaterial({
        color: 0x372415,
        roughness: 0.9,
        metalness: 0.15,
        emissive: new THREE.Color(0x2a0808),
        emissiveIntensity: 1.2,
        side: THREE.FrontSide,
      }),
    );
    terrainMesh.receiveShadow = true;
    scene.add(terrainMesh);

    const wireGeo = geo.clone();
    wireMesh = new THREE.Mesh(
      wireGeo,
      new THREE.MeshBasicMaterial({
        color: 0x77d7ff,
        wireframe: true,
        transparent: true,
        opacity: 0.32,
      }),
    );
    scene.add(wireMesh);

    const lowerWireGeo = geo.clone();
    const lowerPos = lowerWireGeo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < lowerPos.count; i += 1) {
      lowerPos.setY(i, lowerPos.getY(i) - 0.08);
    }
    lowerWireGeo.computeVertexNormals();
    scene.add(
      new THREE.Mesh(
        lowerWireGeo,
        new THREE.MeshBasicMaterial({
          color: 0xff8f3d,
          wireframe: true,
          transparent: true,
          opacity: 0.07,
        }),
      ),
    );

    const keyLight = new THREE.DirectionalLight(0xff6622, 2.5);
    keyLight.position.set(0, 20, -15);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xff3300, 1.4);
    fillLight.position.set(0, 5, 20);
    scene.add(fillLight);

    scene.add(new THREE.AmbientLight(0x331122, 2.5));

    const crackLight = new THREE.PointLight(0xffb347, 8, 20);
    crackLight.position.set(2, 0.5, 2);
    scene.add(crackLight);
  };

  const buildSun = () => {
    sunMesh = new THREE.Mesh(
      new THREE.SphereGeometry(2.2, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xcc2200 }),
    );
    sunMesh.position.set(8, 14, -25);
    scene.add(sunMesh);

    sunCorona = new THREE.Mesh(
      new THREE.SphereGeometry(3.2, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0xff3300,
        transparent: true,
        opacity: 0.15,
        side: THREE.BackSide,
      }),
    );
    sunMesh.add(sunCorona);

    sunMesh.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(5.5, 32, 32),
        new THREE.MeshBasicMaterial({
          color: 0x660011,
          transparent: true,
          opacity: 0.07,
          side: THREE.BackSide,
        }),
      ),
    );

    sunRays = [];
    for (let i = 0; i < 12; i += 1) {
      const angle = (i / 12) * Math.PI * 2;
      const len = 3 + Math.random() * 3;
      const ray = new THREE.Mesh(
        new THREE.PlaneGeometry(0.15 + Math.random() * 0.2, len),
        new THREE.MeshBasicMaterial({
          color: 0xff2200,
          transparent: true,
          opacity: 0.12 + Math.random() * 0.1,
          side: THREE.DoubleSide,
        }),
      );
      ray.rotation.z = angle;
      ray.position.set(
        Math.cos(angle) * (2.8 + len / 2),
        Math.sin(angle) * (2.8 + len / 2),
        0,
      );
      sunRays.push(ray);
      sunMesh.add(ray);
    }
  };

  const buildAtmosphere = () => {
    hazeMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(200, 30),
      new THREE.MeshBasicMaterial({
        color: 0x550010,
        transparent: true,
        opacity: 0.18,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    );
    hazeMesh.rotation.x = Math.PI / 2;
    hazeMesh.position.set(0, 0.1, -10);
    scene.add(hazeMesh);

    const starCount = 300;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      starPos[i * 3] = (Math.random() - 0.5) * 160;
      starPos[i * 3 + 1] = Math.random() * 40 + 5;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 80 - 15;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    scene.add(
      new THREE.Points(
        starGeo,
        new THREE.PointsMaterial({ color: 0xffd080, size: 0.1, transparent: true, opacity: 0.5 }),
      ),
    );

    for (let t = 0; t < 6; t += 1) {
      const points: THREE.Vector3[] = [];
      const bx = (Math.random() - 0.5) * 16;
      const bz = (Math.random() - 0.5) * 8 - 2;
      for (let s = 0; s <= 20; s += 1) {
        const p = s / 20;
        points.push(
          new THREE.Vector3(
            bx + Math.sin(p * Math.PI * 3 + t) * p * 1.5,
            p * (4 + Math.random() * 3),
            bz + Math.cos(p * Math.PI * 2.5 + t * 0.7) * p * 1.2,
          ),
        );
      }
      const curve = new THREE.CatmullRomCurve3(points);
      scene.add(
        new THREE.Mesh(
          new THREE.TubeGeometry(curve, 30, 0.03 + Math.random() * 0.04, 6, false),
          new THREE.MeshBasicMaterial({
            color: t % 2 === 0 ? 0x44ff88 : 0x8800ff,
            transparent: true,
            opacity: 0.25 + Math.random() * 0.2,
          }),
        ),
      );
    }
  };

  const buildStormSetPiece = () => {
    stormGroup = new THREE.Group();
    stormCurtains = [];

    for (let i = 0; i < 4; i += 1) {
      const curtain = new THREE.Mesh(
        new THREE.PlaneGeometry(6.5, 10 + i * 0.7),
        new THREE.MeshBasicMaterial({
          color: 0xbde7ff,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          side: THREE.DoubleSide,
        }),
      );
      curtain.position.set(-6 + i * 4, 4.5, -2 - i * 1.8);
      curtain.rotation.y = -0.18 + i * 0.12;
      stormCurtains.push(curtain);
      stormGroup.add(curtain);
    }

    stormWall = new THREE.Mesh(
      new THREE.SphereGeometry(18, 32, 20, 0, Math.PI),
      new THREE.MeshBasicMaterial({
        color: 0x8dd8ff,
        transparent: true,
        opacity: 0,
        side: THREE.BackSide,
        depthWrite: false,
      }),
    );
    stormWall.position.set(2, 6, -12);
    stormGroup.add(stormWall);

    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(320 * 3);
    for (let i = 0; i < 320; i += 1) {
      particlePos[i * 3] = (Math.random() - 0.5) * 18;
      particlePos[i * 3 + 1] = Math.random() * 10 + 1;
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    stormParticles = new THREE.Points(
      particleGeo,
      new THREE.PointsMaterial({
        color: 0xe8f7ff,
        size: 0.12,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      }),
    );
    stormGroup.add(stormParticles);
    stormGroup.visible = false;
    scene.add(stormGroup);
  };

  const buildFissureSetPiece = () => {
    fissureGroup = new THREE.Group();
    fissureWalls = [];
    fissureShards = [];

    const wallGeometry = new THREE.PlaneGeometry(5.5, 9, 8, 12);
    for (let side = -1; side <= 1; side += 2) {
      const wall = new THREE.Mesh(
        wallGeometry,
        new THREE.MeshStandardMaterial({
          color: 0x161d24,
          emissive: new THREE.Color(0x0a1e26),
          emissiveIntensity: 1,
          transparent: true,
          opacity: 0,
          side: THREE.DoubleSide,
        }),
      );
      wall.position.set(side * 2.6, -0.2, -1.8);
      wall.rotation.y = side * 0.42;
      wall.rotation.x = -0.06;
      fissureWalls.push(wall);
      fissureGroup.add(wall);
    }

    fissureCore = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 1.05, 11, 18, 1, true),
      new THREE.MeshBasicMaterial({
        color: 0x63e8ff,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
    );
    fissureCore.position.set(0, -1.8, -3.2);
    fissureGroup.add(fissureCore);

    for (let i = 0; i < 18; i += 1) {
      const shard = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.12 + Math.random() * 0.22, 0),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0x63e8ff : 0xb5f2ff,
          transparent: true,
          opacity: 0,
        }),
      );
      shard.position.set((Math.random() - 0.5) * 2.8, -1.2 + Math.random() * 3.8, -2.4 - Math.random() * 3.8);
      fissureShards.push(shard);
      fissureGroup.add(shard);
    }

    fissureGroup.visible = false;
    scene.add(fissureGroup);
  };

  const buildSkyfoldSetPiece = () => {
    skyfoldGroup = new THREE.Group();
    skyfoldArcs = [];
    skyfoldPillars = [];

    for (let i = 0; i < 4; i += 1) {
      const arc = new THREE.Mesh(
        new THREE.TorusGeometry(8 + i * 1.6, 0.06 + i * 0.01, 10, 120, Math.PI * 1.2),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0xffe091 : 0x7be0ff,
          transparent: true,
          opacity: 0,
          side: THREE.DoubleSide,
        }),
      );
      arc.rotation.x = Math.PI / 2.1 + i * 0.08;
      arc.rotation.z = i * 0.35;
      arc.position.set(0, 10 + i * 0.9, -10 - i * 1.6);
      skyfoldArcs.push(arc);
      skyfoldGroup.add(arc);
    }

    for (let i = 0; i < 6; i += 1) {
      const pillar = new THREE.Mesh(
        new THREE.PlaneGeometry(0.18, 8 + Math.random() * 4),
        new THREE.MeshBasicMaterial({
          color: 0xfff0c2,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          side: THREE.DoubleSide,
        }),
      );
      pillar.position.set(-8 + i * 3.2, 6 + Math.random() * 2, -8 - Math.random() * 4);
      pillar.rotation.z = (Math.random() - 0.5) * 0.18;
      skyfoldPillars.push(pillar);
      skyfoldGroup.add(pillar);
    }

    skyfoldGroup.visible = false;
    scene.add(skyfoldGroup);
  };

  const buildSignalNodes = () => {
    runtimeSignalNodes.forEach((node) => {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0x7be0ff, transparent: true, opacity: 0.9 }),
      );
      mesh.position.copy(node.pos);
      scene.add(mesh);
      node.mesh = mesh;

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.35, 0.03, 8, 32),
        new THREE.MeshBasicMaterial({ color: 0xffc857, transparent: true, opacity: 0.35 }),
      );
      ring.position.copy(node.pos);
      scene.add(ring);
      node.ring = ring;

      const light = new THREE.PointLight(0x7be0ff, 2, 6);
      light.position.copy(node.pos);
      scene.add(light);
      node.light = light;
    });
  };

  const animateSetPieces = (mode: SceneCue['mode'] | undefined, elapsed: number) => {
    const stormOpacity = mode === 'storm' ? 0.88 : 0;
    const fissureOpacity = mode === 'fissure' ? 0.94 : 0;
    const skyfoldOpacity = mode === 'skyfold' ? 0.92 : 0;

    setGroupOpacity(stormGroup, stormOpacity);
    setGroupOpacity(fissureGroup, fissureOpacity);
    setGroupOpacity(skyfoldGroup, skyfoldOpacity);

    if (stormOpacity > 0.01) {
      stormCurtains.forEach((curtain, index) => {
        curtain.position.x = -6 + index * 4 + Math.sin(elapsed * 1.8 + index) * 0.25;
        curtain.position.y = 4.2 + Math.sin(elapsed * 2.4 + index * 0.3) * 0.2;
      });
      stormWall.rotation.y += 0.002;
      const stormMaterial = stormWall.material as THREE.MeshBasicMaterial;
      stormMaterial.opacity = 0.1 + Math.sin(elapsed * 0.9) * 0.04 + stormOpacity * 0.18;

      const positions = stormParticles.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < positions.count; i += 1) {
        let y = positions.getY(i) - 0.22;
        let x = positions.getX(i) + 0.08;
        if (y < -1) y = 11 + Math.random() * 3;
        if (x > 10) x = -10;
        positions.setY(i, y);
        positions.setX(i, x);
      }
      positions.needsUpdate = true;
    }

    if (fissureOpacity > 0.01) {
      const coreMaterial = fissureCore.material as THREE.MeshBasicMaterial;
      coreMaterial.opacity = 0.28 + Math.sin(elapsed * 2.4) * 0.08 + fissureOpacity * 0.16;
      fissureCore.scale.y = 1 + Math.sin(elapsed * 1.6) * 0.06;
      fissureShards.forEach((shard, index) => {
        shard.position.y += Math.sin(elapsed * 1.2 + index) * 0.002;
        shard.rotation.x += 0.01 + index * 0.0004;
        shard.rotation.y += 0.02 + index * 0.0003;
      });
    }

    if (skyfoldOpacity > 0.01) {
      skyfoldArcs.forEach((arc, index) => {
        arc.rotation.z += 0.0015 + index * 0.0004;
        arc.rotation.x = Math.PI / 2.1 + index * 0.08 + Math.sin(elapsed * 0.7 + index) * 0.02;
      });
      skyfoldPillars.forEach((pillar, index) => {
        pillar.position.y = 6 + index * 0.18 + Math.sin(elapsed * 1.5 + index * 0.5) * 0.28;
      });
    }
  };

  const getFocusShot = (nodeId: string, elapsed: number) => {
    const node = runtimeSignalNodes.find((item) => item.id === nodeId);
    const profile = shotProfiles[nodeId];
    if (!node || !profile) return null;

    return {
      position: vector3Scratch.copy(node.pos).add(profile.offset).add(new THREE.Vector3(
        Math.sin(elapsed * 0.8 + node.pos.x) * profile.wobbleX,
        Math.sin(elapsed * 1.1 + node.pos.z) * profile.wobbleY,
        0,
      )),
      lookAt: node.pos.clone().add(profile.lookOffset),
      damping: profile.damping,
      fov: profile.fov,
    };
  };

  const getCruiseShot = (nodeId: string, elapsed: number) => {
    const profile = cruiseProfiles[nodeId];
    if (!profile) return null;

    return {
      position: profile.position.clone().add(new THREE.Vector3(
        Math.sin(elapsed * 0.22 + profile.position.x) * 0.18,
        Math.sin(elapsed * 0.16 + profile.position.z) * 0.08,
        Math.cos(elapsed * 0.18 + profile.position.y) * 0.12,
      )),
      lookAt: profile.lookAt.clone().add(new THREE.Vector3(
        Math.sin(elapsed * 0.15) * 0.4,
        Math.sin(elapsed * 0.12 + 0.8) * 0.12,
        0,
      )),
      damping: profile.damping * (0.9 + tourSpeed.value * 0.15),
      fov: profile.fov,
    };
  };

  const clampCameraToTerrain = () => {
    if (!camera || !terrainMesh) return;

    const origin = new THREE.Vector3(camera.position.x, 40, camera.position.z);
    raycaster.set(origin, new THREE.Vector3(0, -1, 0));
    const hits = raycaster.intersectObject(terrainMesh, false);
    const minY = (hits[0]?.point.y ?? 0) + 1.35;
    if (camera.position.y < minY) {
      camera.position.y += (minY - camera.position.y) * 0.35;
    }
  };

  const animateRipples = () => {
    if (!rippleCtx || !rippleEl.value) return;

    rippleCtx.clearRect(0, 0, rippleEl.value.width, rippleEl.value.height);
    for (let i = ripples.length - 1; i >= 0; i -= 1) {
      const ripple = ripples[i];
      ripple.r += 3.5;
      ripple.alpha -= 0.012;
      if (ripple.alpha <= 0) {
        ripples.splice(i, 1);
        continue;
      }

      rippleCtx.beginPath();
      rippleCtx.arc(ripple.x, ripple.y, ripple.r, 0, Math.PI * 2);
      rippleCtx.strokeStyle = `rgba(204, 26, 26, ${ripple.alpha})`;
      rippleCtx.lineWidth = 1.5;
      rippleCtx.stroke();

      rippleCtx.beginPath();
      rippleCtx.arc(ripple.x, ripple.y, ripple.r * 0.6, 0, Math.PI * 2);
      rippleCtx.strokeStyle = `rgba(34, 255, 100, ${ripple.alpha * 0.4})`;
      rippleCtx.lineWidth = 0.8;
      rippleCtx.stroke();
    }
  };

  const animateScene = () => {
    animFrameId = requestAnimationFrame(animateScene);
    if (!renderer || !scene || !camera || !wireMesh || !terrainMesh || !sunMesh || !sunCorona) return;

    const elapsed = clock.getElapsedTime();
    const pos = wireMesh.geometry.attributes.position as THREE.BufferAttribute;
    const facePos = terrainMesh.geometry.attributes.position as THREE.BufferAttribute;

    for (let i = 0; i < pos.count; i += 1) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const wave =
        Math.sin(x * 0.4 + elapsed * 0.6) * 0.18
        + Math.sin(z * 0.55 + elapsed * 0.45) * 0.14
        + Math.sin((x + z) * 0.3 + elapsed * 0.8) * 0.1;
      const nextY = terrainOriginalY[i] + wave;
      pos.setY(i, nextY);
      facePos.setY(i, nextY);
    }

    pos.needsUpdate = true;
    facePos.needsUpdate = true;
    wireMesh.geometry.computeVertexNormals();
    terrainMesh.geometry.computeVertexNormals();

    const currentMode = sceneCue.value?.mode ?? environmentMode.value;
    const profile = getCueProfile(currentMode);
    trauma += ((sceneCue.value ? profile.shake : 0) - trauma) * 0.06;

    fogColor.lerp(new THREE.Color(profile.fogColor), 0.04);
    clearColor.lerp(new THREE.Color(profile.clearColor), 0.04);
    wireColor.lerp(new THREE.Color(profile.wireColor), 0.06);
    sunColor.lerp(new THREE.Color(profile.sunColor), 0.05);
    scene.fog.color.copy(fogColor);
    (scene.fog as THREE.FogExp2).density += (profile.fogDensity - (scene.fog as THREE.FogExp2).density) * 0.05;
    renderer.setClearColor(clearColor, 1);
    (wireMesh.material as THREE.MeshBasicMaterial).color.copy(wireColor);
    (sunMesh.material as THREE.MeshBasicMaterial).color.copy(sunColor);
    (sunCorona.material as THREE.MeshBasicMaterial).color.copy(sunColor);
    (hazeMesh.material as THREE.MeshBasicMaterial).opacity += (profile.hazeOpacity - (hazeMesh.material as THREE.MeshBasicMaterial).opacity) * 0.04;
    animateSetPieces(currentMode, elapsed);

    const pulse = 1 + Math.sin(elapsed * 1.2) * 0.03 + Math.sin(elapsed * 3.7) * 0.01 + trauma * 0.08;
    sunMesh.scale.setScalar(pulse);
    (sunCorona.material as THREE.MeshBasicMaterial).opacity = 0.10 + Math.sin(elapsed * 0.8) * 0.06;
    sunRays.forEach((ray, index) => {
      (ray.material as THREE.MeshBasicMaterial).opacity =
        0.06 + Math.sin(elapsed * (1.5 + index * 0.4) + index) * 0.08;
    });

    if (isExploring.value) {
      const focusShot = activeTransmission.value ? getFocusShot(activeTransmission.value.id, elapsed) : null;
      const cruiseShot = !focusShot ? getCruiseShot(findNextNodeId(), elapsed) : null;

      if (focusShot) {
        camera.position.x += (focusShot.position.x - camera.position.x) * focusShot.damping;
        camera.position.y += (focusShot.position.y - camera.position.y) * focusShot.damping;
        camera.position.z += (focusShot.position.z - camera.position.z) * focusShot.damping;
        camera.fov += (focusShot.fov - camera.fov) * 0.05;
        camera.updateProjectionMatrix();
        camera.lookAt(focusShot.lookAt);
      } else if (cruiseShot) {
        camera.position.x += (cruiseShot.position.x - camera.position.x) * cruiseShot.damping;
        camera.position.y += ((cruiseShot.position.y + profile.cameraLift * 0.35) - camera.position.y) * cruiseShot.damping;
        camera.position.z += ((cruiseShot.position.z + profile.cameraPush * 0.35) - camera.position.z) * cruiseShot.damping;
        camera.fov += (cruiseShot.fov - camera.fov) * 0.04;
        camera.updateProjectionMatrix();
        camera.lookAt(cruiseShot.lookAt);
      }

      if (trauma > 0.01) {
        camera.position.x += (Math.random() - 0.5) * trauma;
        camera.position.y += (Math.random() - 0.5) * trauma * 0.6;
      }

      clampCameraToTerrain();

      runtimeSignalNodes.forEach((node) => {
        if (!node.mesh || !node.light) return;

        syncNodeCompletionVisual(node);

        const nodePulse = node.completed
          ? 0.55 + Math.sin(elapsed * 2.2 + node.pos.x) * 0.06
          : 0.72 + Math.sin(elapsed * 3 + node.pos.x) * 0.22;
        node.mesh.scale.setScalar(nodePulse);
        node.light.intensity = node.completed
          ? 0.6 + Math.sin(elapsed * 1.6 + node.pos.z) * 0.15
          : 1.6 + Math.sin(elapsed * 2.5 + node.pos.z) * 0.9;

        if (node.ring) {
          node.ring.rotation.x += 0.01;
          node.ring.rotation.y += 0.015;
        }

        const dist = camera.position.distanceTo(node.pos);
        if (!node.completed && signalsArmed.value && !activeTransmission.value && !node.triggered && dist < 3.5) {
          node.triggered = true;
          onSignalTrigger(node.id, dist);
        }
        if (node.triggered && dist > 6) {
          node.triggered = false;
        }
      });

      animateRipples();
    } else {
      camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.02;
      camera.position.y = 6 + Math.sin(elapsed * 0.3) * 0.3;
      camera.fov += (60 - camera.fov) * 0.05;
      camera.updateProjectionMatrix();
      camera.lookAt(0, 1 + Math.sin(elapsed * 0.2) * 0.2, 0);
    }

    renderer.render(scene, camera);
  };

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
    buildStormSetPiece();
    buildFissureSetPiece();
    buildSkyfoldSetPiece();
    buildSignalNodes();
  };

  const onMouseMove = (event: MouseEvent) => {
    mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
  };

  const onResize = () => {
    if (!camera || !renderer) return;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (rippleEl.value) {
      rippleEl.value.width = window.innerWidth;
      rippleEl.value.height = window.innerHeight;
    }
  };

  const onCanvasClick = (event: MouseEvent) => {
    if (!isExploring.value || !signalsArmed.value || !canvasEl.value || !camera || !terrainMesh || !renderer) return;

    if (rippleEl.value) {
      ripples.push({ x: event.clientX, y: event.clientY, r: 0, maxR: 120, alpha: 0.7 });
    }

    mouseNDC.set(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1,
    );
    raycaster.setFromCamera(mouseNDC, camera);
    const hits = raycaster.intersectObject(terrainMesh);
    if (hits.length === 0) return;

    routeMarkers.value += 1;
    const shakeX = (Math.random() - 0.5) * 0.35;
    const shakeY = (Math.random() - 0.5) * 0.2;
    gsap.timeline()
      .to(camera.position, { x: `+=${shakeX}`, y: `+=${shakeY}`, duration: 0.07, ease: 'none' })
      .to(camera.position, { x: `-=${shakeX * 0.8}`, y: `-=${shakeY * 0.8}`, duration: 0.07, ease: 'none' })
      .to(camera.position, { x: `+=${shakeX * 0.15}`, y: `+=${shakeY * 0.15}`, duration: 0.1, ease: 'none' });
  };

  const initializeRippleCanvas = () => {
    if (!rippleEl.value) return;

    rippleEl.value.width = window.innerWidth;
    rippleEl.value.height = window.innerHeight;
    rippleCtx = rippleEl.value.getContext('2d');
  };

  const resetSessionVisuals = () => {
    ripples.length = 0;
    trauma = 0;
    setGroupOpacity(stormGroup, 0);
    setGroupOpacity(fissureGroup, 0);
    setGroupOpacity(skyfoldGroup, 0);
    runtimeSignalNodes.forEach((node) => {
      node.triggered = false;
      node.completed = false;
      resetNodeVisual(node);
    });
  };

  const resetTour = () => {
    return;
  };

  const flyToTourStart = () => {
    if (!camera) return;
    gsap.to(camera.position, { x: -10, y: 4, z: 14, duration: 1.2, ease: 'power2.out' });
  };

  const playIntroSequence = () => {
    if (!camera) return;

    trauma = 0.18;
    gsap.timeline()
      .to(camera.position, {
        x: -3,
        y: 7.2,
        z: 13,
        duration: 0.9,
        ease: 'power2.out',
      })
      .to(camera.position, {
        x: 2.5,
        y: 4.2,
        z: 10.4,
        duration: 1.4,
        ease: 'power2.inOut',
      }, '-=0.35')
      .to(camera.position, {
        x: -9.5,
        y: 4.1,
        z: 14.2,
        duration: 1.1,
        ease: 'power2.out',
      });
  };

  const returnCameraHome = () => {
    if (!camera) return;
    gsap.to(camera.position, { x: 0, y: 6, z: 18, duration: 2, ease: 'power3.inOut' });
  };

  const disposeScene = () => {
    cancelAnimationFrame(animFrameId);
    renderer?.dispose();
  };

  return {
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
  };
}
