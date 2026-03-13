import type { Ref } from 'vue';
import * as THREE from 'three';
import gsap from 'gsap';
import { FINAL_SIGNAL_ID, TECH_SIGNAL_LAYOUTS, TECH_WINDOW_CUES, type ActiveTransmission, type AnalysisClue, type AnalysisFocusTarget, type AnalysisSceneAnchor, type SceneCue, type SceneCueMode } from '@/config/techNarrative';

export interface SceneHotspot {
  clueId: string;
  discovered: boolean;
  label: string;
  x: number;
  y: number;
  visible: boolean;
}

interface UseTechSceneOptions {
  activeTransmission: Ref<ActiveTransmission | null>;
  analysisFocusTarget: Ref<AnalysisFocusTarget | null>;
  canvasEl: Ref<HTMLCanvasElement | null>;
  completedSignals: Record<string, boolean>;
  isExploring: Ref<boolean>;
  pendingTransmission: Ref<{ clues: AnalysisClue[]; discoveredClueIds: string[] } | null>;
  rippleEl: Ref<HTMLCanvasElement | null>;
  routeMarkers: Ref<number>;
  sceneHotspots: Ref<SceneHotspot[]>;
  environmentMode: Ref<SceneCueMode | 'calm'>;
  sceneCue: Ref<SceneCue | null>;
  signalsArmed: Ref<boolean>;
  tourSpeed: Ref<number>;
}

interface RuntimeSignalNode {
  beacon?: THREE.Mesh;
  completed: boolean;
  halo?: THREE.Mesh;
  id: string;
  light?: THREE.PointLight;
  mesh?: THREE.Mesh;
  pos: THREE.Vector3;
  ring?: THREE.Mesh;
  triggered: boolean;
}

interface LocalDominionZone {
  bloom: THREE.Mesh;
  group: THREE.Group;
  halo: THREE.Mesh;
  id: string;
  light: THREE.PointLight;
  moteA: THREE.Mesh;
  moteB: THREE.Mesh;
  pillar: THREE.Mesh;
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
  analysisFocusTarget,
  canvasEl,
  completedSignals,
  isExploring,
  pendingTransmission,
  rippleEl,
  routeMarkers,
  sceneHotspots,
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
  let terrainShader: THREE.Shader | null = null;
  let wireMesh: THREE.Mesh;
  let keyLight: THREE.DirectionalLight;
  let fillLight: THREE.DirectionalLight;
  let ambientLight: THREE.AmbientLight;
  let crackLight: THREE.PointLight;
  let driftParticles: THREE.Points;
  let driftParticleBase: Float32Array;
  let sunMesh: THREE.Mesh;
  let sunCorona: THREE.Mesh;
  let sunRays: THREE.Mesh[] = [];
  let hazeMesh: THREE.Mesh;
  let colorDominionGroup: THREE.Group;
  let colorDominionVeils: THREE.Mesh[] = [];
  let colorDominionFloor: THREE.Mesh;
  let localDominionGroup: THREE.Group;
  let localDominionZones: LocalDominionZone[] = [];
  let horizonMonolithGroup: THREE.Group;
  let horizonMonoliths: THREE.Mesh[] = [];
  let horizonArches: THREE.Mesh[] = [];
  let veilCanopyGroup: THREE.Group;
  let veilCanopies: THREE.Mesh[] = [];
  let veilRibs: THREE.Mesh[] = [];
  let relicCrownGroup: THREE.Group;
  let relicCrownArcs: THREE.Mesh[] = [];
  let relicCrownShards: THREE.Mesh[] = [];
  let terrainResponseGroup: THREE.Group;
  let ridgeTraceGroup: THREE.Group;
  let ridgeTraceBands: THREE.Mesh[] = [];
  let stormTrackGroup: THREE.Group;
  let stormTrackBands: THREE.Mesh[] = [];
  let fissureScarGroup: THREE.Group;
  let fissureScarBands: THREE.Mesh[] = [];
  let magneticSigilGroup: THREE.Group;
  let magneticSigils: THREE.Mesh[] = [];
  let magneticCrossbars: THREE.Mesh[] = [];
  let skyfoldHaloGroup: THREE.Group;
  let skyfoldHaloRings: THREE.Mesh[] = [];
  let skyfoldHaloSpokes: THREE.Mesh[] = [];
  let scanSweepGroup: THREE.Group;
  let scanSweepBands: THREE.Mesh[] = [];
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
  let lastTriggeredRevealId: string | null = null;

  const ripples: Array<{ x: number; y: number; r: number; maxR: number; alpha: number }> = [];
  const raycaster = new THREE.Raycaster();
  const mouseNDC = new THREE.Vector2();
  const fogColor = new THREE.Color(0x0a0005);
  const clearColor = new THREE.Color(0x030205);
  const wireColor = new THREE.Color(0x77d7ff);
  const sunColor = new THREE.Color(0xcc2200);
  const vector3Scratch = new THREE.Vector3();
  const lookScratch = new THREE.Vector3();
  const colorScratch = new THREE.Color();
  const hotspotProjected = new THREE.Vector3();
  const worldPositionScratch = new THREE.Vector3();
  const spectacleReveal = {
    ridge: 0,
    storm: 0,
    fissure: 0,
    magnetic: 0,
    skyfold: 0,
  };
  const cameraRevealOffset = {
    x: 0,
    y: 0,
    z: 0,
    lookX: 0,
    lookY: 0,
    lookZ: 0,
    fov: 0,
  };

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
      position: new THREE.Vector3(0.8, 11.4, 22.6),
      lookAt: new THREE.Vector3(4.1, 10.1, 6.4),
      fov: 78,
      damping: 0.024,
    },
  };

  const getCueProfile = (mode?: SceneCue['mode']) => {
    switch (mode) {
      case 'quake':
        return { fogDensity: 0.024, fogColor: 0x15070a, clearColor: 0x040204, wireColor: 0xff8f3d, sunColor: 0xff5a36, hazeOpacity: 0.14, shake: 0.1, cameraLift: 0.35, cameraPush: -0.25, terrainGlow: 0xff6a2f, ambientColor: 0x26110d, keyColor: 0xff7e3b, fillColor: 0xb74a30, dominionColor: 0xff8f3d };
      case 'storm':
        return { fogDensity: 0.031, fogColor: 0x08111a, clearColor: 0x04070b, wireColor: 0x91dfff, sunColor: 0xaec9ff, hazeOpacity: 0.16, shake: 0.06, cameraLift: 0.18, cameraPush: -0.45, terrainGlow: 0x7ccfff, ambientColor: 0x0b1a28, keyColor: 0xbde7ff, fillColor: 0x4b7ea7, dominionColor: 0x9edcff };
      case 'fissure':
        return { fogDensity: 0.036, fogColor: 0x02070a, clearColor: 0x020305, wireColor: 0x6ae3ff, sunColor: 0x4ecbff, hazeOpacity: 0.18, shake: 0.08, cameraLift: -0.8, cameraPush: -0.95, terrainGlow: 0x45cfff, ambientColor: 0x071018, keyColor: 0x78ebff, fillColor: 0x1f6787, dominionColor: 0x63e8ff };
      case 'whiteout':
        return { fogDensity: 0.044, fogColor: 0xdbe4ea, clearColor: 0xaab6c4, wireColor: 0xf4fbff, sunColor: 0xe4eef8, hazeOpacity: 0.2, shake: 0.03, cameraLift: 0.15, cameraPush: -0.1, terrainGlow: 0xe9f3ff, ambientColor: 0x94a2af, keyColor: 0xf8fbff, fillColor: 0xbdcad6, dominionColor: 0xe4eef8 };
      case 'magnetic':
        return { fogDensity: 0.026, fogColor: 0x070413, clearColor: 0x030107, wireColor: 0xff77f7, sunColor: 0x7be0ff, hazeOpacity: 0.13, shake: 0.12, cameraLift: 0.22, cameraPush: -0.18, terrainGlow: 0xff67e8, ambientColor: 0x13091e, keyColor: 0xff77f7, fillColor: 0x5fa7c7, dominionColor: 0xff77f7 };
      case 'skyfold':
        return { fogDensity: 0.016, fogColor: 0x09030f, clearColor: 0x020105, wireColor: 0xffd76d, sunColor: 0xfff3b3, hazeOpacity: 0.1, shake: 0.04, cameraLift: 0.65, cameraPush: 0.18, terrainGlow: 0xffdd89, ambientColor: 0x20121a, keyColor: 0xfff0c2, fillColor: 0xd69d46, dominionColor: 0xffd76d };
      default:
        return { fogDensity: 0.02, fogColor: 0x0a0005, clearColor: 0x030205, wireColor: 0x77d7ff, sunColor: 0xcc2200, hazeOpacity: 0.09, shake: 0, cameraLift: 0, cameraPush: 0, terrainGlow: 0x7be0ff, ambientColor: 0x26111b, keyColor: 0xff6622, fillColor: 0xb93d22, dominionColor: 0x7be0ff };
    }
  };

  const getSignalMode = (signalId: string): SceneCue['mode'] | undefined => {
    return TECH_WINDOW_CUES[signalId]?.mode;
  };

  const playRevealPulse = (
    key: keyof typeof spectacleReveal,
    peak = 1,
    settle = 0.12,
    riseDuration = 1.15,
    fallDuration = 3.2,
  ) => {
    gsap.killTweensOf(spectacleReveal, key);
    gsap.set(spectacleReveal, { [key]: 0 });
    gsap.timeline()
      .to(spectacleReveal, {
        [key]: peak,
        duration: riseDuration,
        ease: 'power3.out',
      })
      .to(spectacleReveal, {
        [key]: settle,
        duration: fallDuration,
        ease: 'sine.out',
      });
  };

  const playSignalReveal = (signalId: string) => {
    switch (signalId) {
      case 'Ω-01':
        trauma = Math.max(trauma, 0.14);
        playRevealPulse('ridge', 1, 0.18, 1.0, 3.4);
        gsap.killTweensOf(cameraRevealOffset);
        gsap.set(cameraRevealOffset, { x: -2.6, y: 1.6, z: 4.8, lookY: 0.9, lookZ: -2.2, fov: -8 });
        gsap.timeline()
          .to(cameraRevealOffset, {
            x: 0.8,
            y: 0.2,
            z: -1.2,
            lookY: 0.2,
            lookZ: -0.6,
            fov: 4,
            duration: 1.4,
            ease: 'power3.out',
          })
          .to(cameraRevealOffset, {
            x: 0,
            y: 0,
            z: 0,
            lookX: 0,
            lookY: 0,
            lookZ: 0,
            fov: 0,
            duration: 2.6,
            ease: 'sine.out',
          });
        break;
      case 'Ψ-02':
        trauma = Math.max(trauma, 0.1);
        playRevealPulse('storm', 1, 0.16, 1.2, 3.2);
        gsap.killTweensOf(cameraRevealOffset);
        gsap.set(cameraRevealOffset, { x: 3.8, y: 1.2, z: 5.4, lookX: -1.1, lookY: 0.6, lookZ: -2.4, fov: -10 });
        gsap.timeline()
          .to(cameraRevealOffset, {
            x: -1.4,
            y: -0.3,
            z: -1.6,
            lookX: 0.6,
            lookY: 0.15,
            lookZ: 0.4,
            fov: 3,
            duration: 1.5,
            ease: 'power3.out',
          })
          .to(cameraRevealOffset, {
            x: 0,
            y: 0,
            z: 0,
            lookX: 0,
            lookY: 0,
            lookZ: 0,
            fov: 0,
            duration: 2.4,
            ease: 'sine.out',
          });
        break;
      case 'Δ-03':
        trauma = Math.max(trauma, 0.16);
        playRevealPulse('fissure', 1, 0.14, 0.9, 3.3);
        gsap.killTweensOf(cameraRevealOffset);
        gsap.set(cameraRevealOffset, { x: 0.4, y: 4.2, z: 6.2, lookY: -1.4, lookZ: -4.8, fov: -12 });
        gsap.timeline()
          .to(cameraRevealOffset, {
            x: 0,
            y: -1.6,
            z: -2.1,
            lookY: 0.5,
            lookZ: -1.2,
            fov: 5,
            duration: 1.25,
            ease: 'power4.out',
          })
          .to(cameraRevealOffset, {
            x: 0,
            y: 0,
            z: 0,
            lookX: 0,
            lookY: 0,
            lookZ: 0,
            fov: 0,
            duration: 2.7,
            ease: 'sine.out',
          });
        break;
      case 'Λ-04':
        trauma = Math.max(trauma, 0.12);
        playRevealPulse('magnetic', 1, 0.16, 1.1, 3.4);
        gsap.killTweensOf(cameraRevealOffset);
        gsap.set(cameraRevealOffset, { x: -3.2, y: 2.1, z: 4.2, lookX: 1.6, lookY: 0.3, lookZ: -2.1, fov: -9 });
        gsap.timeline()
          .to(cameraRevealOffset, {
            x: 1.6,
            y: -0.4,
            z: -1.8,
            lookX: -0.9,
            lookY: 0.1,
            lookZ: 0.6,
            fov: 4,
            duration: 1.45,
            ease: 'power3.out',
          })
          .to(cameraRevealOffset, {
            x: 0,
            y: 0,
            z: 0,
            lookX: 0,
            lookY: 0,
            lookZ: 0,
            fov: 0,
            duration: 2.8,
            ease: 'sine.out',
          });
        break;
      case 'X-05':
        trauma = Math.max(trauma, 0.12);
        playRevealPulse('skyfold', 1, 0.22, 1.45, 4);
        gsap.killTweensOf(cameraRevealOffset);
        gsap.set(cameraRevealOffset, { x: 0, y: 7.5, z: 11.4, lookY: 4.2, lookZ: -6.4, fov: -16 });
        gsap.timeline()
          .to(cameraRevealOffset, {
            x: 0.3,
            y: -1.2,
            z: -3.8,
            lookY: 1,
            lookZ: -1.5,
            fov: 7,
            duration: 1.8,
            ease: 'power4.out',
          })
          .to(cameraRevealOffset, {
            x: 0,
            y: 0,
            z: 0,
            lookX: 0,
            lookY: 0,
            lookZ: 0,
            fov: 0,
            duration: 3.2,
            ease: 'sine.out',
          });
        break;
      default:
        break;
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
    if (node.beacon) {
      const material = node.beacon.material as THREE.MeshBasicMaterial;
      material.color.set(0x7be0ff);
      material.opacity = 0.14;
      node.beacon.scale.set(1, 1, 1);
    }
    if (node.halo) {
      const material = node.halo.material as THREE.MeshBasicMaterial;
      material.color.set(0xffc857);
      material.opacity = 0.18;
      node.halo.scale.setScalar(1);
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
    if (node.beacon) {
      const material = node.beacon.material as THREE.MeshBasicMaterial;
      material.color.set(0xffc857);
      material.opacity = 0.08;
    }
    if (node.halo) {
      const material = node.halo.material as THREE.MeshBasicMaterial;
      material.color.set(0x7be0ff);
      material.opacity = 0.1;
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

    const terrainMaterial = new THREE.MeshStandardMaterial({
      color: 0x372415,
      roughness: 0.82,
      metalness: 0.06,
      emissive: new THREE.Color(0x2a0808),
      emissiveIntensity: 0.62,
      side: THREE.FrontSide,
    });
    terrainMaterial.onBeforeCompile = (shader) => {
      terrainShader = shader;
      shader.uniforms.uTerrainDominionColor = { value: new THREE.Color(0x7be0ff) };
      shader.uniforms.uTerrainShadowColor = { value: new THREE.Color(0x130c12) };
      shader.uniforms.uTerrainLightDir = { value: new THREE.Vector3(-0.3, 0.88, -0.34).normalize() };
      shader.uniforms.uTerrainTime = { value: 0 };
      shader.uniforms.uTerrainContourStrength = { value: 0.55 };

      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `
          #include <common>
          varying vec3 vTerrainWorldPosition;
          varying vec3 vTerrainWorldNormal;
        `)
        .replace('#include <worldpos_vertex>', `
          #include <worldpos_vertex>
          vTerrainWorldPosition = worldPosition.xyz;
          vTerrainWorldNormal = normalize(mat3(modelMatrix) * objectNormal);
        `);

      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `
          #include <common>
          uniform vec3 uTerrainDominionColor;
          uniform vec3 uTerrainShadowColor;
          uniform vec3 uTerrainLightDir;
          uniform float uTerrainTime;
          uniform float uTerrainContourStrength;
          varying vec3 vTerrainWorldPosition;
          varying vec3 vTerrainWorldNormal;
        `)
        .replace('vec4 diffuseColor = vec4( diffuse, opacity );', `
          vec4 diffuseColor = vec4( diffuse, opacity );
          vec3 terrainUp = vec3(0.0, 1.0, 0.0);
          float terrainHeightMask = smoothstep(-1.2, 5.8, vTerrainWorldPosition.y);
          float terrainSlopeMask = 1.0 - clamp(dot(normalize(vTerrainWorldNormal), terrainUp), 0.0, 1.0);
          float terrainLightFacing = clamp(dot(normalize(vTerrainWorldNormal), normalize(uTerrainLightDir)), 0.0, 1.0);
          float terrainDirectionalShadow = pow(1.0 - terrainLightFacing, 1.4);
          float contourSpacing = 0.36;
          float contourCoord = (vTerrainWorldPosition.y + vTerrainWorldPosition.x * 0.045 - vTerrainWorldPosition.z * 0.03) / contourSpacing;
          float contourBand = abs(fract(contourCoord) - 0.5);
          float contourLine = 1.0 - smoothstep(0.18, 0.48, contourBand);
          float ridgeMask = smoothstep(-6.0, 8.0, -vTerrainWorldPosition.z);
          float viewRim = pow(1.0 - abs(dot(normalize(vViewPosition), normalize(vTerrainWorldNormal))), 1.8);
          float terrainValleyShadow = terrainSlopeMask * (0.42 + ridgeMask * 0.12) + terrainDirectionalShadow * 0.65;
          vec3 terrainShadowTint = mix(diffuseColor.rgb, uTerrainShadowColor, 0.34 + terrainValleyShadow * 0.52);
          vec3 terrainDominionTint = mix(terrainShadowTint, uTerrainDominionColor, terrainHeightMask * 0.18 + ridgeMask * 0.11);
          diffuseColor.rgb = mix(diffuseColor.rgb, terrainDominionTint, 0.64);
          diffuseColor.rgb += contourLine * (0.065 + uTerrainContourStrength * 0.09) * (0.3 + terrainSlopeMask * 0.9);
          diffuseColor.rgb += terrainHeightMask * 0.038;
          diffuseColor.rgb += viewRim * ridgeMask * 0.04;
        `);
    };
    terrainMaterial.customProgramCacheKey = () => 'weriss-terrain-depth-v1';

    terrainMesh = new THREE.Mesh(geo, terrainMaterial);
    terrainMesh.castShadow = true;
    terrainMesh.receiveShadow = true;
    scene.add(terrainMesh);

    const wireGeo = geo.clone();
    wireMesh = new THREE.Mesh(
      wireGeo,
      new THREE.MeshBasicMaterial({
        color: 0x77d7ff,
        wireframe: true,
        transparent: true,
        opacity: 0.22,
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

    keyLight = new THREE.DirectionalLight(0xff6622, 2.5);
    keyLight.position.set(-9, 22, -12);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(2048, 2048);
    keyLight.shadow.bias = -0.00035;
    keyLight.shadow.normalBias = 0.025;
    keyLight.shadow.camera.near = 1;
    keyLight.shadow.camera.far = 80;
    keyLight.shadow.camera.left = -24;
    keyLight.shadow.camera.right = 24;
    keyLight.shadow.camera.top = 24;
    keyLight.shadow.camera.bottom = -24;
    keyLight.target.position.set(0, 1.8, -4);
    scene.add(keyLight.target);
    scene.add(keyLight);

    fillLight = new THREE.DirectionalLight(0xff3300, 0.95);
    fillLight.position.set(12, 4, 18);
    scene.add(fillLight);

    ambientLight = new THREE.AmbientLight(0x331122, 1.05);
    scene.add(ambientLight);

    crackLight = new THREE.PointLight(0xffb347, 2.2, 14);
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
        new THREE.PointsMaterial({ color: 0xffd080, size: 0.1, transparent: true, opacity: 0.16 }),
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
            opacity: 0.12 + Math.random() * 0.1,
          }),
        ),
      );
    }

    const driftCount = 420;
    driftParticleBase = new Float32Array(driftCount * 3);
    const driftGeo = new THREE.BufferGeometry();
    const driftPos = new Float32Array(driftCount * 3);
    for (let i = 0; i < driftCount; i += 1) {
      const x = (Math.random() - 0.5) * 48;
      const y = Math.random() * 16 + 1;
      const z = (Math.random() - 0.5) * 36 - 2;
      driftParticleBase[i * 3] = x;
      driftParticleBase[i * 3 + 1] = y;
      driftParticleBase[i * 3 + 2] = z;
      driftPos[i * 3] = x;
      driftPos[i * 3 + 1] = y;
      driftPos[i * 3 + 2] = z;
    }
    driftGeo.setAttribute('position', new THREE.BufferAttribute(driftPos, 3));
    driftParticles = new THREE.Points(
      driftGeo,
      new THREE.PointsMaterial({
        color: 0xffb56b,
        size: 0.16,
        transparent: true,
        opacity: 0.26,
        depthWrite: false,
      }),
    );
    scene.add(driftParticles);
  };

  const buildHorizonMonoliths = () => {
    horizonMonolithGroup = new THREE.Group();
    horizonMonoliths = [];
    horizonArches = [];

    for (let i = 0; i < 10; i += 1) {
      const angle = (i / 10) * Math.PI * 2;
      const radius = 31 + Math.sin(i * 1.7) * 3;
      const height = 10 + (i % 4) * 3.2 + Math.random() * 2.5;
      const monolith = new THREE.Mesh(
        new THREE.BoxGeometry(1.4 + (i % 3) * 0.35, height, 1.2 + (i % 2) * 0.4),
        new THREE.MeshStandardMaterial({
          color: 0x120f18,
          emissive: new THREE.Color(0x150d1f),
          emissiveIntensity: 0.9,
          roughness: 0.84,
          metalness: 0.25,
          transparent: true,
          opacity: 0.2,
        }),
      );
      monolith.position.set(Math.cos(angle) * radius, height * 0.45, Math.sin(angle) * radius - 12);
      monolith.rotation.y = angle + Math.PI / 2;
      monolith.userData.baseY = monolith.position.y;
      monolith.castShadow = true;
      monolith.receiveShadow = true;
      horizonMonoliths.push(monolith);
      horizonMonolithGroup.add(monolith);

      const slit = new THREE.Mesh(
        new THREE.PlaneGeometry(0.16, height * 0.6),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0xffc857 : 0x7be0ff,
          transparent: true,
          opacity: 0.18,
          side: THREE.DoubleSide,
          depthWrite: false,
        }),
      );
      slit.position.set(0, 0, 0.72);
      monolith.add(slit);
    }

    for (let i = 0; i < 4; i += 1) {
      const arch = new THREE.Mesh(
        new THREE.TorusGeometry(20 + i * 3.6, 0.16 + i * 0.03, 10, 90, Math.PI * (0.8 + i * 0.08)),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0xffd58a : 0x7be0ff,
          transparent: true,
          opacity: 0.12,
          side: THREE.DoubleSide,
          depthWrite: false,
        }),
      );
      arch.rotation.x = Math.PI / 2.25 + i * 0.06;
      arch.rotation.z = -0.55 + i * 0.34;
      arch.position.set(-6 + i * 4.5, 8 + i * 2.4, -24 - i * 3.5);
      horizonArches.push(arch);
      horizonMonolithGroup.add(arch);
    }

    horizonMonolithGroup.visible = true;
    scene.add(horizonMonolithGroup);
  };

  const buildVeilCanopy = () => {
    veilCanopyGroup = new THREE.Group();
    veilCanopies = [];
    veilRibs = [];

    for (let i = 0; i < 3; i += 1) {
      const geometry = new THREE.PlaneGeometry(38 + i * 6, 18 + i * 3, 22, 14);
      const positions = geometry.attributes.position as THREE.BufferAttribute;
      for (let v = 0; v < positions.count; v += 1) {
        const x = positions.getX(v);
        const y = positions.getY(v);
        positions.setZ(v, Math.sin(x * 0.13 + i) * 1.8 + Math.cos(y * 0.18 + i * 0.7) * 1.2);
      }
      geometry.computeVertexNormals();
      const veil = new THREE.Mesh(
        geometry,
        new THREE.MeshBasicMaterial({
          color: i === 1 ? 0xfff0b8 : 0x7be0ff,
          transparent: true,
          opacity: 0.1,
          side: THREE.DoubleSide,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }),
      );
      veil.position.set(-10 + i * 10, 14 + i * 3.4, -12 - i * 4);
      veil.rotation.x = -Math.PI / 2.9 - i * 0.08;
      veil.rotation.z = -0.28 + i * 0.22;
      veilCanopies.push(veil);
      veilCanopyGroup.add(veil);
    }

    for (let i = 0; i < 5; i += 1) {
      const points = [];
      const startX = -18 + i * 8;
      for (let p = 0; p <= 16; p += 1) {
        const t = p / 16;
        points.push(new THREE.Vector3(
          startX + Math.sin(t * Math.PI * (1.2 + i * 0.12)) * (4 + i * 0.6),
          5 + t * (18 + i * 1.8),
          -18 - i * 3.2 + Math.cos(t * Math.PI * 1.4 + i) * 3.4,
        ));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const rib = new THREE.Mesh(
        new THREE.TubeGeometry(curve, 40, 0.08 + i * 0.01, 6, false),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0xffe2a1 : 0x7be0ff,
          transparent: true,
          opacity: 0.16,
          depthWrite: false,
        }),
      );
      veilRibs.push(rib);
      veilCanopyGroup.add(rib);
    }

    veilCanopyGroup.visible = true;
    scene.add(veilCanopyGroup);
  };

  const buildRelicCrown = () => {
    relicCrownGroup = new THREE.Group();
    relicCrownArcs = [];
    relicCrownShards = [];

    for (let i = 0; i < 5; i += 1) {
      const arc = new THREE.Mesh(
        new THREE.TorusGeometry(10.5 + i * 1.3, 0.08 + i * 0.015, 10, 120, Math.PI * (0.6 + i * 0.15)),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0xffd76d : 0xb8f1ff,
          transparent: true,
          opacity: 0.12,
          side: THREE.DoubleSide,
          depthWrite: false,
        }),
      );
      arc.rotation.x = Math.PI / 2.2 + i * 0.1;
      arc.rotation.z = i * 0.42;
      arc.position.set(2, 16 + i * 1.2, -18 - i * 2.2);
      relicCrownArcs.push(arc);
      relicCrownGroup.add(arc);
    }

    for (let i = 0; i < 22; i += 1) {
      const shard = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.18 + Math.random() * 0.35, 0),
        new THREE.MeshBasicMaterial({
          color: i % 3 === 0 ? 0xfff0c2 : i % 3 === 1 ? 0x7be0ff : 0xffc857,
          transparent: true,
          opacity: 0.14,
          depthWrite: false,
        }),
      );
      const angle = (i / 22) * Math.PI * 2;
      shard.position.set(
        Math.cos(angle) * (12 + Math.random() * 4),
        16 + Math.sin(angle * 1.7) * 3.4,
        -18 + Math.sin(angle) * (5 + Math.random() * 3),
      );
      shard.userData.baseY = shard.position.y;
      relicCrownShards.push(shard);
      relicCrownGroup.add(shard);
    }

    relicCrownGroup.visible = true;
    scene.add(relicCrownGroup);
  };

  const buildTerrainResponses = () => {
    terrainResponseGroup = new THREE.Group();

    ridgeTraceGroup = new THREE.Group();
    ridgeTraceBands = [];
    const ridgeNode = runtimeSignalNodes.find((node) => node.id === 'Ω-01');
    for (let i = 0; i < 3; i += 1) {
      const band = new THREE.Mesh(
        new THREE.PlaneGeometry(8 + i * 1.8, 1 + i * 0.4),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0xff8f3d : 0xffd58a,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
        }),
      );
      band.rotation.x = -Math.PI / 2;
      if (ridgeNode) {
        band.position.set(ridgeNode.pos.x + i * 1.6, 2.08 + i * 0.02, ridgeNode.pos.z - 3.8 - i * 0.9);
      }
      band.userData.baseX = band.position.x;
      band.rotation.z = -0.26 + i * 0.12;
      ridgeTraceBands.push(band);
      ridgeTraceGroup.add(band);
    }
    terrainResponseGroup.add(ridgeTraceGroup);

    stormTrackGroup = new THREE.Group();
    stormTrackBands = [];
    const stormNode = runtimeSignalNodes.find((node) => node.id === 'Ψ-02');
    for (let i = 0; i < 3; i += 1) {
      const band = new THREE.Mesh(
        new THREE.PlaneGeometry(10 + i * 2, 2 + i * 0.7),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0x9edcff : 0xe8f7ff,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
        }),
      );
      band.rotation.x = -Math.PI / 2;
      if (stormNode) {
        band.position.set(stormNode.pos.x + i * 1.8, 3.56 + i * 0.02, stormNode.pos.z - 2.8 - i * 1.4);
      }
      band.userData.baseX = band.position.x;
      band.rotation.z = -0.42 + i * 0.08;
      stormTrackBands.push(band);
      stormTrackGroup.add(band);
    }
    terrainResponseGroup.add(stormTrackGroup);

    fissureScarGroup = new THREE.Group();
    fissureScarBands = [];
    const fissureNode = runtimeSignalNodes.find((node) => node.id === 'Δ-03');
    for (let i = 0; i < 3; i += 1) {
      const band = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2 + i * 0.5, 10 + i * 2.4),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0x63e8ff : 0xb5f2ff,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
        }),
      );
      band.rotation.x = -Math.PI / 2;
      if (fissureNode) {
        band.position.set(fissureNode.pos.x - 0.5 + i * 0.14, 2.06 + i * 0.02, fissureNode.pos.z - 1.8);
      }
      band.rotation.z = 0.08 + i * 0.03;
      fissureScarBands.push(band);
      fissureScarGroup.add(band);
    }
    terrainResponseGroup.add(fissureScarGroup);

    magneticSigilGroup = new THREE.Group();
    magneticSigils = [];
    magneticCrossbars = [];
    const magneticNode = runtimeSignalNodes.find((node) => node.id === 'Λ-04');
    for (let i = 0; i < 3; i += 1) {
      const sigil = new THREE.Mesh(
        new THREE.RingGeometry(2.2 + i * 1.1, 2.5 + i * 1.1, 64),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0xff77f7 : 0x7be0ff,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
        }),
      );
      sigil.rotation.x = -Math.PI / 2;
      if (magneticNode) {
        sigil.position.set(magneticNode.pos.x, 3.06 + i * 0.03, magneticNode.pos.z);
      }
      magneticSigils.push(sigil);
      magneticSigilGroup.add(sigil);
    }
    for (let i = 0; i < 4; i += 1) {
      const bar = new THREE.Mesh(
        new THREE.PlaneGeometry(5.5, 0.16),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0xff77f7 : 0x7be0ff,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
        }),
      );
      bar.rotation.x = -Math.PI / 2;
      bar.rotation.z = (i / 4) * Math.PI / 2;
      if (magneticNode) {
        bar.position.set(magneticNode.pos.x, 3.1 + i * 0.01, magneticNode.pos.z);
      }
      magneticCrossbars.push(bar);
      magneticSigilGroup.add(bar);
    }
    terrainResponseGroup.add(magneticSigilGroup);

    skyfoldHaloGroup = new THREE.Group();
    skyfoldHaloRings = [];
    skyfoldHaloSpokes = [];
    const skyfoldNode = runtimeSignalNodes.find((node) => node.id === 'X-05');
    for (let i = 0; i < 3; i += 1) {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(4.2 + i * 2.2, 4.55 + i * 2.2, 72),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0xffe091 : 0x7be0ff,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
        }),
      );
      ring.rotation.x = -Math.PI / 2;
      if (skyfoldNode) {
        ring.position.set(skyfoldNode.pos.x, 5.06 + i * 0.04, skyfoldNode.pos.z - 0.4);
      }
      skyfoldHaloRings.push(ring);
      skyfoldHaloGroup.add(ring);
    }
    for (let i = 0; i < 6; i += 1) {
      const spoke = new THREE.Mesh(
        new THREE.PlaneGeometry(11, 0.18),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0xfff0c2 : 0xffd76d,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
        }),
      );
      spoke.rotation.x = -Math.PI / 2;
      spoke.rotation.z = (i / 6) * Math.PI;
      if (skyfoldNode) {
        spoke.position.set(skyfoldNode.pos.x, 5.12 + i * 0.01, skyfoldNode.pos.z - 0.4);
      }
      skyfoldHaloSpokes.push(spoke);
      skyfoldHaloGroup.add(spoke);
    }
    terrainResponseGroup.add(skyfoldHaloGroup);

    terrainResponseGroup.visible = true;
    scene.add(terrainResponseGroup);
  };

  const buildColorDominion = () => {
    colorDominionGroup = new THREE.Group();
    colorDominionVeils = [];

    for (let i = 0; i < 3; i += 1) {
      const veil = new THREE.Mesh(
        new THREE.PlaneGeometry(120, 42 + i * 8),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0xff8f3d : 0x7be0ff,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
        }),
      );
      veil.position.set(0, 10 + i * 4, -30 - i * 12);
      veil.rotation.x = -Math.PI / 2.55 - i * 0.05;
      colorDominionVeils.push(veil);
      colorDominionGroup.add(veil);
    }

    colorDominionFloor = new THREE.Mesh(
      new THREE.CircleGeometry(34, 96),
      new THREE.MeshBasicMaterial({
        color: 0xff8f3d,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      }),
    );
    colorDominionFloor.rotation.x = -Math.PI / 2;
    colorDominionFloor.position.set(0, 0.18, -2);
    colorDominionGroup.add(colorDominionFloor);

    colorDominionGroup.visible = true;
    scene.add(colorDominionGroup);
  };

  const buildLocalDominionZones = () => {
    localDominionGroup = new THREE.Group();
    localDominionZones = [];

    runtimeSignalNodes.forEach((node, index) => {
      const zoneGroup = new THREE.Group();
      zoneGroup.position.copy(node.pos);
      zoneGroup.position.y += 0.06;

      const halo = new THREE.Mesh(
        new THREE.RingGeometry(1.9, 3.8, 64),
        new THREE.MeshBasicMaterial({
          color: 0xff8f3d,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
        }),
      );
      halo.rotation.x = -Math.PI / 2;
      zoneGroup.add(halo);

      const bloom = new THREE.Mesh(
        new THREE.CircleGeometry(5.8, 72),
        new THREE.MeshBasicMaterial({
          color: 0xff8f3d,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
        }),
      );
      bloom.rotation.x = -Math.PI / 2;
      bloom.position.y = 0.02;
      zoneGroup.add(bloom);

      const pillar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.8, 2.2, 7.5, 24, 1, true),
        new THREE.MeshBasicMaterial({
          color: 0xff8f3d,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
        }),
      );
      pillar.position.y = 3.2;
      zoneGroup.add(pillar);

      const moteA = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.22 + index * 0.01, 0),
        new THREE.MeshBasicMaterial({
          color: 0xffd58a,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }),
      );
      moteA.position.set(2.2, 1.6, 0.4);
      zoneGroup.add(moteA);

      const moteB = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.18 + index * 0.01, 0),
        new THREE.MeshBasicMaterial({
          color: 0x7be0ff,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }),
      );
      moteB.position.set(-2.5, 2.3, -0.6);
      zoneGroup.add(moteB);

      const light = new THREE.PointLight(0xff8f3d, 0, 14);
      light.position.set(0, 2.2, 0);
      zoneGroup.add(light);

      localDominionZones.push({
        id: node.id,
        group: zoneGroup,
        halo,
        bloom,
        pillar,
        moteA,
        moteB,
        light,
      });
      localDominionGroup.add(zoneGroup);
    });

    localDominionGroup.visible = true;
    scene.add(localDominionGroup);
  };

  const buildScanSweeps = () => {
    scanSweepGroup = new THREE.Group();
    scanSweepBands = [];

    for (let i = 0; i < 3; i += 1) {
      const band = new THREE.Mesh(
        new THREE.PlaneGeometry(54, 3.4 + i * 1.2, 1, 1),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0x7be0ff : 0xffc857,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
        }),
      );
      band.rotation.x = -Math.PI / 2;
      band.position.set(0, 0.28 + i * 0.08, 10 - i * 8);
      scanSweepBands.push(band);
      scanSweepGroup.add(band);
    }

    scanSweepGroup.visible = true;
    scene.add(scanSweepGroup);
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
      wall.castShadow = true;
      wall.receiveShadow = true;
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
      shard.userData.baseY = shard.position.y;
      fissureShards.push(shard);
      fissureGroup.add(shard);
    }

    fissureGroup.visible = false;
    const fissureNode = runtimeSignalNodes.find((node) => node.id === 'Δ-03');
    if (fissureNode) {
      fissureGroup.position.copy(fissureNode.pos).add(new THREE.Vector3(-0.6, 0.3, -2.6));
    }
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
    const skyfoldNode = runtimeSignalNodes.find((node) => node.id === 'X-05');
    if (skyfoldNode) {
      skyfoldGroup.position.copy(skyfoldNode.pos).add(new THREE.Vector3(0, -1.4, 0));
    }
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

      const beacon = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.42, 4.6, 14, 1, true),
        new THREE.MeshBasicMaterial({
          color: 0x7be0ff,
          transparent: true,
          opacity: 0.14,
          depthWrite: false,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
        }),
      );
      beacon.position.copy(node.pos).add(new THREE.Vector3(0, 2.25, 0));
      scene.add(beacon);
      node.beacon = beacon;

      const halo = new THREE.Mesh(
        new THREE.RingGeometry(0.65, 1.25, 40),
        new THREE.MeshBasicMaterial({
          color: 0xffc857,
          transparent: true,
          opacity: 0.18,
          depthWrite: false,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
        }),
      );
      halo.rotation.x = -Math.PI / 2;
      halo.position.copy(node.pos).add(new THREE.Vector3(0, 0.08, 0));
      scene.add(halo);
      node.halo = halo;

      const light = new THREE.PointLight(0x7be0ff, 2, 6);
      light.position.copy(node.pos);
      scene.add(light);
      node.light = light;
    });
  };

  const animateSetPieces = (mode: SceneCue['mode'] | undefined, elapsed: number) => {
    const profile = getCueProfile(mode);
    const ridgeReveal = spectacleReveal.ridge;
    const stormReveal = spectacleReveal.storm;
    const fissureReveal = spectacleReveal.fissure;
    const magneticReveal = spectacleReveal.magnetic;
    const skyfoldReveal = spectacleReveal.skyfold;
    const stormOpacity = mode === 'storm' ? 0.88 : 0;
    const fissureOpacity = mode === 'fissure' ? 0.94 : 0;
    const skyfoldOpacity = mode === 'skyfold' ? 0.92 : 0;
    const horizonOpacity =
      mode === 'quake' ? 0.38 :
      mode === 'magnetic' ? 0.34 :
      mode === 'skyfold' ? 0.44 :
      mode === 'storm' ? 0.24 :
      0.18;
    const veilOpacity =
      mode === 'storm' ? 0.34 :
      mode === 'whiteout' ? 0.42 :
      mode === 'skyfold' ? 0.36 :
      mode === 'magnetic' ? 0.2 :
      0.12;
    const relicOpacity =
      mode === 'skyfold' ? 0.4 :
      mode === 'magnetic' ? 0.3 :
      mode === 'quake' ? 0.22 :
      0.14;
    const horizonFinalOpacity = horizonOpacity + ridgeReveal * 0.26 + magneticReveal * 0.16 + skyfoldReveal * 0.1;
    const veilFinalOpacity = veilOpacity + stormReveal * 0.26 + skyfoldReveal * 0.16;
    const relicFinalOpacity = relicOpacity + magneticReveal * 0.2 + skyfoldReveal * 0.3;
    const stormFinalOpacity = stormOpacity + stormReveal * 0.12;
    const fissureFinalOpacity = fissureOpacity + fissureReveal * 0.12;
    const skyfoldFinalOpacity = skyfoldOpacity + skyfoldReveal * 0.08;
    const ridgeResidue = (mode === 'quake' ? 0.42 : 0.08) + ridgeReveal * 0.38;
    const stormResidue = (mode === 'storm' || mode === 'whiteout' ? 0.46 : 0.08) + stormReveal * 0.34;
    const fissureResidue = (mode === 'fissure' ? 0.52 : 0.06) + fissureReveal * 0.42;
    const magneticResidue = (mode === 'magnetic' ? 0.5 : 0.06) + magneticReveal * 0.4;
    const skyfoldResidue = (mode === 'skyfold' ? 0.58 : 0.08) + skyfoldReveal * 0.44;
    const dominionStrength = Math.max(ridgeResidue, stormResidue, fissureResidue, magneticResidue, skyfoldResidue);
    const activeSignalId = pendingTransmission.value?.id ?? activeTransmission.value?.id ?? null;

    setGroupOpacity(horizonMonolithGroup, horizonFinalOpacity);
    setGroupOpacity(veilCanopyGroup, veilFinalOpacity);
    setGroupOpacity(relicCrownGroup, relicFinalOpacity);
    setGroupOpacity(terrainResponseGroup, dominionStrength * 0.54);
    setGroupOpacity(colorDominionGroup, dominionStrength * 0.2);
    setGroupOpacity(stormGroup, stormFinalOpacity);
    setGroupOpacity(fissureGroup, fissureFinalOpacity);
    setGroupOpacity(skyfoldGroup, skyfoldFinalOpacity);

    colorDominionVeils.forEach((veil, index) => {
      const material = veil.material as THREE.MeshBasicMaterial;
      material.color.lerp(colorScratch.set(profile.dominionColor), 0.1);
      material.opacity = 0.012 + dominionStrength * (0.03 + index * 0.014) + Math.sin(elapsed * (0.35 + index * 0.08) + index) * 0.006;
      veil.position.x = Math.sin(elapsed * 0.18 + index) * (2 + dominionStrength * 6);
      veil.rotation.z = Math.sin(elapsed * 0.12 + index * 0.5) * dominionStrength * 0.05;
    });

    const dominionFloorMaterial = colorDominionFloor.material as THREE.MeshBasicMaterial;
    dominionFloorMaterial.color.lerp(colorScratch.set(profile.dominionColor), 0.1);
    dominionFloorMaterial.opacity = 0.01 + dominionStrength * 0.06 + Math.sin(elapsed * 0.42) * 0.006;
    colorDominionFloor.scale.set(
      1 + dominionStrength * 0.08 + Math.sin(elapsed * 0.3) * 0.02,
      1 + dominionStrength * 0.08 + Math.sin(elapsed * 0.3) * 0.02,
      1,
    );

    localDominionZones.forEach((zone, index) => {
      const nativeMode = getSignalMode(zone.id);
      const nativeProfile = getCueProfile(nativeMode);
      const nativeStrength =
        zone.id === 'Ω-01' ? ridgeResidue + ridgeReveal * 0.3 :
        zone.id === 'Ψ-02' ? stormResidue + stormReveal * 0.3 :
        zone.id === 'Δ-03' ? fissureResidue + fissureReveal * 0.32 :
        zone.id === 'Λ-04' ? magneticResidue + magneticReveal * 0.3 :
        zone.id === 'X-05' ? skyfoldResidue + skyfoldReveal * 0.34 :
        0.12;
      const focusBoost = activeSignalId === zone.id ? 0.22 : 0;
      const zoneStrength = Math.min(1.25, nativeStrength + focusBoost);
      const zoneColor = activeSignalId === zone.id ? profile.dominionColor : nativeProfile.dominionColor;
      const glowColor = activeSignalId === zone.id ? profile.terrainGlow : nativeProfile.terrainGlow;

      zone.group.visible = zoneStrength > 0.06;

      const haloMaterial = zone.halo.material as THREE.MeshBasicMaterial;
      haloMaterial.color.lerp(colorScratch.set(zoneColor), 0.1);
      haloMaterial.opacity = 0.012 + zoneStrength * 0.08 + Math.sin(elapsed * 1.2 + index) * 0.008;
      zone.halo.rotation.z += 0.0012 + zoneStrength * 0.0014;
      zone.halo.scale.setScalar(1 + zoneStrength * 0.12 + Math.sin(elapsed * 0.5 + index) * 0.03);

      const bloomMaterial = zone.bloom.material as THREE.MeshBasicMaterial;
      bloomMaterial.color.lerp(colorScratch.set(zoneColor), 0.08);
      bloomMaterial.opacity = 0.008 + zoneStrength * 0.06 + Math.sin(elapsed * 0.8 + index * 0.7) * 0.006;
      zone.bloom.scale.setScalar(1 + zoneStrength * 0.16 + Math.sin(elapsed * 0.4 + index) * 0.03);

      const pillarMaterial = zone.pillar.material as THREE.MeshBasicMaterial;
      pillarMaterial.color.lerp(colorScratch.set(glowColor), 0.1);
      pillarMaterial.opacity = 0.008 + zoneStrength * 0.04 + Math.sin(elapsed * 1.6 + index) * 0.005;
      zone.pillar.scale.set(
        1 + zoneStrength * 0.08,
        1 + zoneStrength * 0.14 + Math.sin(elapsed * 0.7 + index) * 0.04,
        1 + zoneStrength * 0.08,
      );
      zone.pillar.position.y = 3.2 + Math.sin(elapsed * 0.9 + index) * 0.25 + zoneStrength * 0.3;

      const moteAMaterial = zone.moteA.material as THREE.MeshBasicMaterial;
      moteAMaterial.color.lerp(colorScratch.set(zoneColor), 0.1);
      moteAMaterial.opacity = 0.015 + zoneStrength * 0.1;
      zone.moteA.position.x = Math.cos(elapsed * 0.9 + index) * (1.8 + zoneStrength * 0.8);
      zone.moteA.position.z = Math.sin(elapsed * 0.9 + index) * (1.2 + zoneStrength * 0.6);
      zone.moteA.position.y = 1.7 + Math.sin(elapsed * 1.4 + index) * 0.35 + zoneStrength * 0.2;
      zone.moteA.rotation.x += 0.016;
      zone.moteA.rotation.y += 0.01;

      const moteBMaterial = zone.moteB.material as THREE.MeshBasicMaterial;
      moteBMaterial.color.lerp(colorScratch.set(glowColor), 0.1);
      moteBMaterial.opacity = 0.01 + zoneStrength * 0.085;
      zone.moteB.position.x = Math.cos(-elapsed * 0.7 - index * 0.6) * (2.4 + zoneStrength * 0.7);
      zone.moteB.position.z = Math.sin(-elapsed * 0.7 - index * 0.6) * (1.5 + zoneStrength * 0.5);
      zone.moteB.position.y = 2.3 + Math.sin(elapsed * 1.1 + index * 0.4) * 0.4 + zoneStrength * 0.26;
      zone.moteB.rotation.x += 0.012;
      zone.moteB.rotation.z += 0.014;

      zone.light.color.lerp(colorScratch.set(glowColor), 0.08);
      zone.light.intensity += ((0.7 + zoneStrength * 3.4) - zone.light.intensity) * 0.08;
      zone.light.distance = 8 + zoneStrength * 5;
    });

    horizonMonolithGroup.position.y = ridgeReveal * 1.4 + magneticReveal * 0.55 + skyfoldReveal * 0.35;
    horizonMonolithGroup.scale.setScalar(1 + ridgeReveal * 0.05 + magneticReveal * 0.04);
    horizonMonolithGroup.rotation.y = Math.sin(elapsed * 0.08) * 0.04 + magneticReveal * 0.06;

    veilCanopyGroup.position.y = stormReveal * 1.8 + skyfoldReveal * 0.7;
    veilCanopyGroup.scale.set(
      1 + stormReveal * 0.06,
      1 + stormReveal * 0.12 + skyfoldReveal * 0.04,
      1 + skyfoldReveal * 0.03,
    );

    relicCrownGroup.position.y = magneticReveal * 0.7 + skyfoldReveal * 1.5;
    relicCrownGroup.scale.setScalar(1 + magneticReveal * 0.08 + skyfoldReveal * 0.16);

    stormGroup.scale.set(
      1 + stormReveal * 0.08,
      1 + stormReveal * 0.18,
      1 + stormReveal * 0.08,
    );
    fissureGroup.scale.set(
      1 + fissureReveal * 0.12,
      1 + fissureReveal * 0.28,
      1 + fissureReveal * 0.12,
    );
    skyfoldGroup.scale.setScalar(1 + skyfoldReveal * 0.16);

    horizonMonoliths.forEach((monolith, index) => {
      monolith.position.y = (monolith.userData.baseY as number) + Math.sin(elapsed * 0.22 + index * 0.7) * 0.12;
      monolith.rotation.z = Math.sin(elapsed * 0.18 + index) * (0.01 + magneticResidue * 0.02);
      monolith.rotation.x = Math.sin(elapsed * 0.12 + index * 0.6) * magneticResidue * 0.015;
      const material = monolith.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.8 + horizonOpacity * 1.3 + ridgeResidue * 0.6 + Math.sin(elapsed * (0.9 + ridgeResidue * 0.4) + index) * 0.08;
      material.color.lerp(colorScratch.set(mode === 'magnetic' ? 0x1f1128 : mode === 'skyfold' ? 0x1a1421 : 0x120f18), 0.08);
      const slit = monolith.children[0] as THREE.Mesh | undefined;
      if (slit) {
        const slitMaterial = slit.material as THREE.MeshBasicMaterial;
        slitMaterial.opacity = 0.1 + ridgeResidue * 0.22 + magneticResidue * 0.12 + Math.sin(elapsed * 1.4 + index) * 0.04;
        slit.position.z = 0.72 + Math.sin(elapsed * 0.8 + index) * magneticResidue * 0.08;
      }
    });

    horizonArches.forEach((arch, index) => {
      arch.rotation.z += 0.0007 + index * 0.00012 + skyfoldResidue * 0.0006;
      arch.rotation.x = Math.PI / 2.25 + index * 0.06 + Math.sin(elapsed * 0.45 + index) * (0.02 + ridgeResidue * 0.015);
      const material = arch.material as THREE.MeshBasicMaterial;
      material.opacity = 0.05 + horizonOpacity * 0.45 + skyfoldResidue * 0.08 + Math.sin(elapsed * (0.8 + skyfoldResidue * 0.3) + index) * 0.02;
    });

    veilCanopies.forEach((veil, index) => {
      veil.rotation.z = -0.28 + index * 0.22 + Math.sin(elapsed * 0.32 + index) * (0.05 + stormResidue * 0.06);
      veil.position.x = -10 + index * 10 + Math.sin(elapsed * 0.24 + index * 0.6) * (0.8 + stormResidue * 1.4);
      veil.position.z = -12 - index * 4 + Math.cos(elapsed * 0.28 + index) * stormResidue * 0.9;
      const material = veil.material as THREE.MeshBasicMaterial;
      material.opacity = 0.04 + veilOpacity * (0.4 + index * 0.12) + stormResidue * 0.1 + Math.sin(elapsed * (0.9 + stormResidue * 0.4) + index) * 0.02;
    });

    veilRibs.forEach((rib, index) => {
      rib.rotation.y = Math.sin(elapsed * 0.18 + index) * (0.08 + stormResidue * 0.08);
      rib.rotation.z = Math.sin(elapsed * 0.22 + index * 0.4) * skyfoldResidue * 0.03;
      const material = rib.material as THREE.MeshBasicMaterial;
      material.opacity = 0.06 + veilOpacity * 0.5 + stormResidue * 0.1 + Math.sin(elapsed * 0.7 + index) * 0.025;
    });

    relicCrownArcs.forEach((arc, index) => {
      arc.rotation.z += 0.001 + index * 0.00018 + magneticResidue * 0.0008 + skyfoldResidue * 0.001;
      arc.rotation.x = Math.PI / 2.2 + index * 0.1 + Math.sin(elapsed * 0.26 + index) * (0.03 + skyfoldResidue * 0.04);
      arc.rotation.y = Math.sin(elapsed * 0.18 + index * 0.7) * magneticResidue * 0.08;
      const material = arc.material as THREE.MeshBasicMaterial;
      material.opacity = 0.05 + relicOpacity * 0.45 + magneticResidue * 0.08 + skyfoldResidue * 0.12 + Math.sin(elapsed * (1.1 + skyfoldResidue * 0.4) + index) * 0.02;
    });

    relicCrownShards.forEach((shard, index) => {
      shard.rotation.x += 0.006 + index * 0.00015;
      shard.rotation.y += 0.008 + index * 0.00012;
      shard.position.y = (shard.userData.baseY as number) + Math.sin(elapsed * 0.9 + index * 0.4) * (0.28 + skyfoldResidue * 0.24);
      shard.position.x += Math.sin(elapsed * 0.32 + index) * magneticResidue * 0.01;
      const material = shard.material as THREE.MeshBasicMaterial;
      material.opacity = 0.04 + relicOpacity * 0.4 + magneticResidue * 0.06 + skyfoldResidue * 0.1 + Math.sin(elapsed * 1.4 + index) * 0.02;
    });

    if (stormFinalOpacity > 0.01) {
      stormCurtains.forEach((curtain, index) => {
        curtain.position.x = -6 + index * 4 + Math.sin(elapsed * 1.8 + index) * (0.25 + stormResidue * 0.4);
        curtain.position.y = 4.2 + Math.sin(elapsed * 2.4 + index * 0.3) * (0.2 + stormResidue * 0.18);
        curtain.scale.x = 1 + stormResidue * 0.08;
      });
      stormWall.rotation.y += 0.002;
      const stormMaterial = stormWall.material as THREE.MeshBasicMaterial;
      stormMaterial.opacity = 0.06 + Math.sin(elapsed * 0.9) * 0.025 + stormFinalOpacity * 0.11 + stormResidue * 0.035;

      const stormParticleMaterial = stormParticles.material as THREE.PointsMaterial;
      stormParticleMaterial.opacity = 0.2 + stormResidue * 0.18 + Math.sin(elapsed * 1.6) * 0.03;
      stormParticleMaterial.size = 0.11 + stormResidue * 0.08;
      stormParticleMaterial.color.lerp(colorScratch.set(0xeff8ff), 0.08);

      const positions = stormParticles.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < positions.count; i += 1) {
        let y = positions.getY(i) - (0.22 + stormResidue * 0.08);
        let x = positions.getX(i) + (0.08 + stormResidue * 0.03);
        if (y < -1) y = 11 + Math.random() * 3;
        if (x > 10) x = -10;
        positions.setY(i, y);
        positions.setX(i, x);
      }
      positions.needsUpdate = true;
    }

    if (fissureFinalOpacity > 0.01) {
      fissureWalls.forEach((wall, index) => {
        wall.rotation.y = (index === 0 ? -1 : 1) * (0.42 + Math.sin(elapsed * 0.7 + index) * fissureResidue * 0.06);
        const wallMaterial = wall.material as THREE.MeshStandardMaterial;
        wallMaterial.emissiveIntensity = 1 + fissureResidue * 1.2 + Math.sin(elapsed * 1.1 + index) * 0.1;
      });
      const coreMaterial = fissureCore.material as THREE.MeshBasicMaterial;
      coreMaterial.opacity = 0.28 + Math.sin(elapsed * 2.4) * 0.08 + fissureFinalOpacity * 0.16 + fissureReveal * 0.06;
      fissureCore.scale.y = 1 + Math.sin(elapsed * 1.6) * 0.06 + fissureReveal * 0.16;
      fissureShards.forEach((shard, index) => {
        shard.position.y = (shard.userData.baseY as number) + Math.sin(elapsed * 1.2 + index) * 0.22 + fissureReveal * 0.35;
        shard.rotation.x += 0.01 + index * 0.0004;
        shard.rotation.y += 0.02 + index * 0.0003;
      });
    }

    if (skyfoldFinalOpacity > 0.01) {
      skyfoldArcs.forEach((arc, index) => {
        arc.rotation.z += 0.0015 + index * 0.0004 + skyfoldReveal * 0.0025;
        arc.rotation.x = Math.PI / 2.1 + index * 0.08 + Math.sin(elapsed * 0.7 + index) * 0.02 + skyfoldReveal * 0.02;
        arc.scale.setScalar(1 + skyfoldResidue * 0.06 + Math.sin(elapsed * 0.3 + index) * 0.01);
      });
      skyfoldPillars.forEach((pillar, index) => {
        pillar.position.y = 6 + index * 0.18 + Math.sin(elapsed * 1.5 + index * 0.5) * 0.28 + skyfoldReveal * 0.55 + skyfoldResidue * 0.22;
        pillar.scale.y = 1 + skyfoldResidue * 0.08 + Math.sin(elapsed * 0.5 + index) * 0.02;
      });
    }

    ridgeTraceBands.forEach((band, index) => {
      const material = band.material as THREE.MeshBasicMaterial;
      material.opacity = 0.02 + ridgeResidue * (0.14 + index * 0.05) + Math.sin(elapsed * (1.1 + index * 0.2) + index) * 0.015;
      band.scale.x = 1 + ridgeReveal * 0.12 + Math.sin(elapsed * 0.5 + index) * 0.03;
      band.position.x = (band.userData.baseX as number) + Math.sin(elapsed * 0.24 + index) * 0.2;
    });

    stormTrackBands.forEach((band, index) => {
      const material = band.material as THREE.MeshBasicMaterial;
      material.opacity = 0.02 + stormResidue * (0.16 + index * 0.05) + Math.sin(elapsed * 1.5 + index) * 0.018;
      band.position.x = (band.userData.baseX as number) + Math.sin(elapsed * 0.45 + index) * (0.5 + stormResidue * 0.45);
      band.scale.y = 1 + stormReveal * 0.18 + Math.sin(elapsed * 0.72 + index) * 0.04;
    });

    fissureScarBands.forEach((band, index) => {
      const material = band.material as THREE.MeshBasicMaterial;
      material.opacity = 0.03 + fissureResidue * (0.18 + index * 0.05) + Math.sin(elapsed * 1.8 + index) * 0.02;
      band.scale.y = 1 + fissureReveal * 0.25 + Math.sin(elapsed * 0.8 + index) * 0.06;
      band.rotation.z = 0.08 + index * 0.03 + Math.sin(elapsed * 0.35 + index) * fissureResidue * 0.02;
    });

    magneticSigils.forEach((sigil, index) => {
      const material = sigil.material as THREE.MeshBasicMaterial;
      material.opacity = 0.02 + magneticResidue * (0.14 + index * 0.04) + Math.sin(elapsed * 1.3 + index) * 0.015;
      sigil.rotation.z += 0.001 + index * 0.0002 + magneticReveal * 0.0014;
      sigil.scale.setScalar(1 + magneticReveal * 0.08 + Math.sin(elapsed * 0.6 + index) * 0.02);
    });

    magneticCrossbars.forEach((bar, index) => {
      const material = bar.material as THREE.MeshBasicMaterial;
      material.opacity = 0.02 + magneticResidue * 0.16 + Math.sin(elapsed * 1.5 + index) * 0.014;
      bar.rotation.z += magneticResidue * 0.0006 * (index % 2 === 0 ? 1 : -1);
    });

    skyfoldHaloRings.forEach((ring, index) => {
      const material = ring.material as THREE.MeshBasicMaterial;
      material.opacity = 0.03 + skyfoldResidue * (0.16 + index * 0.05) + Math.sin(elapsed * 1.1 + index) * 0.016;
      ring.rotation.z += 0.0012 + index * 0.00024 + skyfoldReveal * 0.0015;
      ring.scale.setScalar(1 + skyfoldReveal * 0.1 + Math.sin(elapsed * 0.4 + index) * 0.02);
    });

    skyfoldHaloSpokes.forEach((spoke, index) => {
      const material = spoke.material as THREE.MeshBasicMaterial;
      material.opacity = 0.02 + skyfoldResidue * 0.18 + Math.sin(elapsed * 1.3 + index) * 0.014;
      spoke.rotation.z += 0.0008 * (index % 2 === 0 ? 1 : -1) + skyfoldReveal * 0.0006;
      spoke.scale.x = 1 + skyfoldReveal * 0.08;
    });

    const sweepStrength =
      mode === 'storm' ? 0.34 :
      mode === 'fissure' ? 0.3 :
      mode === 'magnetic' ? 0.26 :
      mode === 'skyfold' ? 0.4 :
      mode === 'quake' ? 0.22 :
      0.14;

    const sweepAccent =
      mode === 'storm' ? 0x9edcff :
      mode === 'fissure' ? 0x63e8ff :
      mode === 'magnetic' ? 0xff77f7 :
      mode === 'skyfold' ? 0xffe091 :
      mode === 'quake' ? 0xff8f3d :
      0x7be0ff;

    scanSweepBands.forEach((band, index) => {
      const material = band.material as THREE.MeshBasicMaterial;
      material.color.lerp(colorScratch.set(sweepAccent), 0.08);
      material.opacity += ((sweepStrength * (0.5 + index * 0.2)) - material.opacity) * 0.08;
      band.position.z = ((elapsed * (2.8 + index * 0.5) + index * 8) % 30) - 15;
      band.position.x = Math.sin(elapsed * 0.45 + index) * 4.5;
      band.scale.x = 0.94 + Math.sin(elapsed * 0.7 + index * 0.8) * 0.06;
    });

    const driftMaterial = driftParticles.material as THREE.PointsMaterial;
    driftMaterial.color.lerp(colorScratch.set(sweepAccent), 0.04);
    driftMaterial.opacity += ((0.18 + sweepStrength * 0.36) - driftMaterial.opacity) * 0.06;
    driftMaterial.size += (((mode === 'skyfold' ? 0.2 : 0.16) - driftMaterial.size)) * 0.08;

    const driftPositions = driftParticles.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < driftPositions.count; i += 1) {
      const baseX = driftParticleBase[i * 3];
      const baseY = driftParticleBase[i * 3 + 1];
      const baseZ = driftParticleBase[i * 3 + 2];
      driftPositions.setX(i, baseX + Math.sin(elapsed * 0.3 + i * 0.17) * 1.1);
      driftPositions.setY(i, baseY + Math.sin(elapsed * 0.65 + i * 0.11) * 0.55);
      driftPositions.setZ(i, baseZ + ((elapsed * (0.85 + (i % 7) * 0.04) + i * 0.9) % 28) - 14);
    }
    driftPositions.needsUpdate = true;
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

  const getAnalysisShot = (target: AnalysisFocusTarget, elapsed: number) => {
    if (!camera) return null;

    if (target === 'sun' && sunMesh) {
      return {
        position: sunMesh.position.clone().add(new THREE.Vector3(-2.4, 0.8, 7.8)),
        lookAt: sunMesh.position.clone().add(new THREE.Vector3(0, -0.2, 0)),
        damping: 0.08,
        fov: 34,
      };
    }

    if (target === 'storm' && stormWall) {
      return {
        position: stormWall.position.clone().add(new THREE.Vector3(6.4, -1.6, 7.8)),
        lookAt: stormWall.position.clone().add(new THREE.Vector3(-0.4, -1.1, 2.6)),
        damping: 0.075,
        fov: 42,
      };
    }

    if (target === 'fissure' && fissureCore) {
      const coreWorld = getObjectWorldPosition(fissureCore);
      if (!coreWorld) return null;
      return {
        position: coreWorld.clone().add(new THREE.Vector3(2.1, 1.1, 5.4)),
        lookAt: coreWorld.clone().add(new THREE.Vector3(0, 0.3, -0.8)),
        damping: 0.08,
        fov: 36,
      };
    }

    if (target === 'magnetic') {
      const node = runtimeSignalNodes.find((item) => item.id === 'Λ-04');
      if (!node) return null;
      return {
        position: node.pos.clone().add(new THREE.Vector3(-3.6, 2.2, 3.2)),
        lookAt: node.pos.clone().add(new THREE.Vector3(0.8, 0.3, -2.1)),
        damping: 0.07,
        fov: 40,
      };
    }

    if (target === 'skyfold' && skyfoldArcs.length > 0) {
      const anchor = getObjectWorldPosition(skyfoldArcs[1] ?? skyfoldArcs[0]);
      if (!anchor) return null;
      return {
        position: anchor.clone().add(new THREE.Vector3(0.4, 1.8, 10.5)),
        lookAt: anchor.clone().add(new THREE.Vector3(0, 0.2, -1.2)),
        damping: 0.06,
        fov: 38,
      };
    }

    return null;
  };

  const getSignalNodePosition = (nodeId: string) => (
    runtimeSignalNodes.find((node) => node.id === nodeId)?.pos ?? null
  );

  const getObjectWorldPosition = (object: THREE.Object3D | null | undefined, offset?: THREE.Vector3) => {
    if (!object) return null;
    object.getWorldPosition(worldPositionScratch);
    return worldPositionScratch.clone().add(offset ?? new THREE.Vector3());
  };

  const getSceneAnchorPosition = (anchor: AnalysisSceneAnchor) => {
    switch (anchor) {
      case 'red_sun':
        return sunMesh?.position.clone().add(new THREE.Vector3(0, -0.5, 0)) ?? null;
      case 'ridge_vent': {
        const nodePos = getSignalNodePosition('Ω-01');
        return nodePos?.clone().add(new THREE.Vector3(1.6, 0.9, -3.8)) ?? null;
      }
      case 'echo_spine': {
        const nodePos = getSignalNodePosition('Ω-01');
        return nodePos?.clone().add(new THREE.Vector3(-2.3, 1.1, -1.3)) ?? null;
      }
      case 'storm_front':
        return stormWall?.position.clone().add(new THREE.Vector3(-0.2, -2.6, 5.2)) ?? null;
      case 'stone_shelter': {
        const nodePos = getSignalNodePosition('Ψ-02');
        return nodePos?.clone().add(new THREE.Vector3(-1.8, 0.45, -1.2)) ?? null;
      }
      case 'crosswind_gap': {
        const nodePos = getSignalNodePosition('Ψ-02');
        return nodePos?.clone().add(new THREE.Vector3(2.4, 1.8, -4.6)) ?? null;
      }
      case 'fissure_probe': {
        const nodePos = getSignalNodePosition('Δ-03');
        return nodePos?.clone().add(new THREE.Vector3(-0.9, 0.4, 0.6)) ?? null;
      }
      case 'fissure_core':
        return getObjectWorldPosition(fissureCore, new THREE.Vector3(0, 3.1, 0));
      case 'snow_loop':
        return getObjectWorldPosition(fissureCore, new THREE.Vector3(2.4, 2.3, 1.4));
      case 'hud_glitch': {
        const nodePos = getSignalNodePosition('Λ-04');
        return nodePos?.clone().add(new THREE.Vector3(0.8, 1.5, 0.3)) ?? null;
      }
      case 'old_map': {
        const nodePos = getSignalNodePosition('Λ-04');
        return nodePos?.clone().add(new THREE.Vector3(-2.2, 0.35, -1.4)) ?? null;
      }
      case 'body_vector': {
        const nodePos = getSignalNodePosition('Λ-04');
        return nodePos?.clone().add(new THREE.Vector3(1.6, 0.9, 1.7)) ?? null;
      }
      case 'route_beacon': {
        return getObjectWorldPosition(skyfoldPillars[3] ?? skyfoldPillars[2], new THREE.Vector3(0, 1.1, 0));
      }
      case 'sky_seam':
        return getObjectWorldPosition(skyfoldArcs[1] ?? skyfoldArcs[0], new THREE.Vector3(-0.2, 0.8, 0));
      case 'final_voice':
        return getObjectWorldPosition(skyfoldPillars[1] ?? skyfoldPillars[0], new THREE.Vector3(0.45, 1.3, -0.4));
      default:
        return null;
    }
  };

  const updateSceneHotspots = () => {
    if (!sceneHotspots.value) return;

    if (!pendingTransmission.value || activeTransmission.value || !renderer || !camera) {
      if (sceneHotspots.value.length) {
        sceneHotspots.value = [];
      }
      return;
    }

    const viewportWidth = renderer.domElement.clientWidth;
    const viewportHeight = renderer.domElement.clientHeight;

    const hotspots = pendingTransmission.value.clues.map((clue) => {
      const worldPosition = getSceneAnchorPosition(clue.sceneAnchor);
      if (!worldPosition) {
        return {
          clueId: clue.id,
          discovered: pendingTransmission.value?.discoveredClueIds.includes(clue.id) ?? false,
          label: clue.sceneLabel,
          x: -9999,
          y: -9999,
          visible: false,
        };
      }

      hotspotProjected.copy(worldPosition).project(camera);
      const visible =
        hotspotProjected.z > -1 &&
        hotspotProjected.z < 1 &&
        hotspotProjected.x > -1.08 &&
        hotspotProjected.x < 1.08 &&
        hotspotProjected.y > -1.08 &&
        hotspotProjected.y < 1.08;

      return {
        clueId: clue.id,
        discovered: pendingTransmission.value?.discoveredClueIds.includes(clue.id) ?? false,
        label: clue.sceneLabel,
        x: ((hotspotProjected.x + 1) * 0.5) * viewportWidth,
        y: ((1 - hotspotProjected.y) * 0.5) * viewportHeight,
        visible,
      };
    });

    sceneHotspots.value = hotspots;
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

    const revealSourceId = pendingTransmission.value?.id ?? activeTransmission.value?.id ?? null;
    if (revealSourceId && revealSourceId !== lastTriggeredRevealId) {
      playSignalReveal(revealSourceId);
      lastTriggeredRevealId = revealSourceId;
    }

    const currentMode = sceneCue.value?.mode ?? environmentMode.value;
    const profile = getCueProfile(currentMode);
    const sceneDominionStrength =
      currentMode === 'skyfold' ? 0.9 :
      currentMode === 'fissure' ? 0.78 :
      currentMode === 'storm' || currentMode === 'whiteout' ? 0.7 :
      currentMode === 'magnetic' ? 0.74 :
      currentMode === 'quake' ? 0.68 :
      0.34;
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
    (hazeMesh.material as THREE.MeshBasicMaterial).color.lerp(colorScratch.set(profile.dominionColor), 0.06);
    const terrainMaterial = terrainMesh.material as THREE.MeshStandardMaterial;
    terrainMaterial.emissive.lerp(colorScratch.set(profile.terrainGlow), 0.08);
    terrainMaterial.emissiveIntensity += ((0.48 + sceneDominionStrength * 0.6) - terrainMaterial.emissiveIntensity) * 0.05;
    terrainMaterial.color.lerp(colorScratch.set(
      currentMode === 'whiteout' ? 0xc2ccd6 :
      currentMode === 'magnetic' ? 0x2b1f31 :
      currentMode === 'skyfold' ? 0x392717 :
      currentMode === 'storm' ? 0x1d2831 :
      currentMode === 'fissure' ? 0x1a2026 :
      currentMode === 'quake' ? 0x402318 :
      0x372415,
    ), 0.04);
    keyLight.color.lerp(colorScratch.set(profile.keyColor), 0.06);
    fillLight.color.lerp(colorScratch.set(profile.fillColor), 0.06);
    ambientLight.color.lerp(colorScratch.set(profile.ambientColor), 0.05);
    crackLight.color.lerp(colorScratch.set(profile.terrainGlow), 0.06);
    keyLight.intensity += ((2.45 + sceneDominionStrength * 1.05) - keyLight.intensity) * 0.05;
    fillLight.intensity += ((0.38 + sceneDominionStrength * 0.18) - fillLight.intensity) * 0.05;
    ambientLight.intensity += ((0.78 + sceneDominionStrength * 0.12) - ambientLight.intensity) * 0.05;
    crackLight.intensity += ((1.4 + sceneDominionStrength * 0.9) - crackLight.intensity) * 0.05;
    if (terrainShader) {
      terrainShader.uniforms.uTerrainDominionColor.value.lerp(colorScratch.set(profile.dominionColor), 0.08);
      terrainShader.uniforms.uTerrainShadowColor.value.lerp(colorScratch.set(
        currentMode === 'whiteout' ? 0x69737c :
        currentMode === 'storm' ? 0x0b1119 :
        currentMode === 'fissure' ? 0x081116 :
        currentMode === 'magnetic' ? 0x120917 :
        currentMode === 'skyfold' ? 0x18120d :
        currentMode === 'quake' ? 0x180d0c :
        0x130c12,
      ), 0.06);
      terrainShader.uniforms.uTerrainLightDir.value.set(
        keyLight.position.x - keyLight.target.position.x,
        keyLight.position.y - keyLight.target.position.y,
        keyLight.position.z - keyLight.target.position.z,
      ).normalize();
      terrainShader.uniforms.uTerrainTime.value = elapsed;
      terrainShader.uniforms.uTerrainContourStrength.value += ((0.78 + sceneDominionStrength * 0.52) - terrainShader.uniforms.uTerrainContourStrength.value) * 0.06;
    }
    animateSetPieces(currentMode, elapsed);

    const pulse = 1 + Math.sin(elapsed * 1.2) * 0.03 + Math.sin(elapsed * 3.7) * 0.01 + trauma * 0.08;
    sunMesh.scale.setScalar(pulse);
    (sunCorona.material as THREE.MeshBasicMaterial).opacity = 0.10 + Math.sin(elapsed * 0.8) * 0.06;
    sunRays.forEach((ray, index) => {
      (ray.material as THREE.MeshBasicMaterial).opacity =
        0.06 + Math.sin(elapsed * (1.5 + index * 0.4) + index) * 0.08;
    });

    if (isExploring.value) {
      const analysisShot = analysisFocusTarget.value ? getAnalysisShot(analysisFocusTarget.value, elapsed) : null;
      const focusShot = !analysisShot && activeTransmission.value ? getFocusShot(activeTransmission.value.id, elapsed) : null;
      const cruiseShot = !analysisShot && !focusShot ? getCruiseShot(findNextNodeId(), elapsed) : null;

      if (analysisShot) {
        camera.position.x += ((analysisShot.position.x + cameraRevealOffset.x) - camera.position.x) * analysisShot.damping;
        camera.position.y += ((analysisShot.position.y + cameraRevealOffset.y) - camera.position.y) * analysisShot.damping;
        camera.position.z += ((analysisShot.position.z + cameraRevealOffset.z) - camera.position.z) * analysisShot.damping;
        camera.fov += ((analysisShot.fov + cameraRevealOffset.fov) - camera.fov) * 0.06;
        camera.updateProjectionMatrix();
        lookScratch.copy(analysisShot.lookAt).add(new THREE.Vector3(
          cameraRevealOffset.lookX,
          cameraRevealOffset.lookY,
          cameraRevealOffset.lookZ,
        ));
        camera.lookAt(lookScratch);
      } else if (focusShot) {
        camera.position.x += ((focusShot.position.x + cameraRevealOffset.x) - camera.position.x) * focusShot.damping;
        camera.position.y += ((focusShot.position.y + cameraRevealOffset.y) - camera.position.y) * focusShot.damping;
        camera.position.z += ((focusShot.position.z + cameraRevealOffset.z) - camera.position.z) * focusShot.damping;
        camera.fov += ((focusShot.fov + cameraRevealOffset.fov) - camera.fov) * 0.05;
        camera.updateProjectionMatrix();
        lookScratch.copy(focusShot.lookAt).add(new THREE.Vector3(
          cameraRevealOffset.lookX,
          cameraRevealOffset.lookY,
          cameraRevealOffset.lookZ,
        ));
        camera.lookAt(lookScratch);
      } else if (cruiseShot) {
        camera.position.x += ((cruiseShot.position.x + cameraRevealOffset.x) - camera.position.x) * cruiseShot.damping;
        camera.position.y += ((cruiseShot.position.y + profile.cameraLift * 0.35 + cameraRevealOffset.y) - camera.position.y) * cruiseShot.damping;
        camera.position.z += ((cruiseShot.position.z + profile.cameraPush * 0.35 + cameraRevealOffset.z) - camera.position.z) * cruiseShot.damping;
        camera.fov += ((cruiseShot.fov + cameraRevealOffset.fov) - camera.fov) * 0.04;
        camera.updateProjectionMatrix();
        lookScratch.copy(cruiseShot.lookAt).add(new THREE.Vector3(
          cameraRevealOffset.lookX,
          cameraRevealOffset.lookY,
          cameraRevealOffset.lookZ,
        ));
        camera.lookAt(lookScratch);
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

        if (node.beacon) {
          const beaconMaterial = node.beacon.material as THREE.MeshBasicMaterial;
          const beaconPulse = node.completed
            ? 0.08 + Math.sin(elapsed * 1.4 + node.pos.z) * 0.02
            : node.triggered
              ? 0.34 + Math.sin(elapsed * 3.8 + node.pos.x) * 0.08
              : 0.16 + Math.sin(elapsed * 2.2 + node.pos.x) * 0.04;
          beaconMaterial.opacity = beaconPulse;
          node.beacon.scale.y = node.triggered ? 1.18 : 0.94 + nodePulse * 0.2;
          node.beacon.position.y = node.pos.y + 2.15 + Math.sin(elapsed * 1.6 + node.pos.z) * 0.12;
        }

        if (node.halo) {
          const haloMaterial = node.halo.material as THREE.MeshBasicMaterial;
          haloMaterial.opacity = node.completed
            ? 0.08 + Math.sin(elapsed * 1.2 + node.pos.x) * 0.02
            : node.triggered
              ? 0.24 + Math.sin(elapsed * 3.2 + node.pos.z) * 0.06
              : 0.14 + Math.sin(elapsed * 1.8 + node.pos.z) * 0.04;
          node.halo.scale.setScalar(node.triggered ? 1.18 + Math.sin(elapsed * 2.8) * 0.06 : 1 + nodePulse * 0.1);
          node.halo.rotation.z += node.triggered ? 0.01 : 0.004;
        }

        const dist = camera.position.distanceTo(node.pos);
        node.triggered = !node.completed && signalsArmed.value && !activeTransmission.value && dist < 3.5;
      });

      animateRipples();
      updateSceneHotspots();
    } else {
      if (sceneHotspots.value.length) {
        sceneHotspots.value = [];
      }
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
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.84;

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0005, 0.022);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.set(0, 6, 18);
    camera.lookAt(0, 1, 0);

    buildTerrain();
    buildSun();
    buildAtmosphere();
    buildColorDominion();
    buildLocalDominionZones();
    buildHorizonMonoliths();
    buildVeilCanopy();
    buildRelicCrown();
    buildTerrainResponses();
    buildScanSweeps();
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

    if (sceneHotspots.value.length) {
      sceneHotspots.value = [];
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
    lastTriggeredRevealId = null;
    spectacleReveal.ridge = 0;
    spectacleReveal.storm = 0;
    spectacleReveal.fissure = 0;
    spectacleReveal.magnetic = 0;
    spectacleReveal.skyfold = 0;
    cameraRevealOffset.x = 0;
    cameraRevealOffset.y = 0;
    cameraRevealOffset.z = 0;
    cameraRevealOffset.lookX = 0;
    cameraRevealOffset.lookY = 0;
    cameraRevealOffset.lookZ = 0;
    cameraRevealOffset.fov = 0;
    sceneHotspots.value = [];
    setGroupOpacity(colorDominionGroup, 0);
    setGroupOpacity(localDominionGroup, 0);
    setGroupOpacity(horizonMonolithGroup, 0.18);
    setGroupOpacity(veilCanopyGroup, 0.12);
    setGroupOpacity(relicCrownGroup, 0.14);
    setGroupOpacity(terrainResponseGroup, 0);
    setGroupOpacity(stormGroup, 0);
    setGroupOpacity(fissureGroup, 0);
    setGroupOpacity(skyfoldGroup, 0);
    colorDominionVeils.forEach((veil, index) => {
      const material = veil.material as THREE.MeshBasicMaterial;
      material.opacity = 0;
      material.color.set(index % 2 === 0 ? 0xff8f3d : 0x7be0ff);
      veil.position.x = 0;
      veil.rotation.z = 0;
    });
    const dominionFloorMaterial = colorDominionFloor.material as THREE.MeshBasicMaterial;
    dominionFloorMaterial.opacity = 0;
    dominionFloorMaterial.color.set(0xff8f3d);
    colorDominionFloor.scale.set(1, 1, 1);
    localDominionZones.forEach((zone) => {
      zone.group.visible = false;
      zone.light.intensity = 0;
      zone.light.distance = 14;
      zone.halo.rotation.z = 0;
      zone.halo.scale.set(1, 1, 1);
      zone.bloom.scale.set(1, 1, 1);
      zone.pillar.scale.set(1, 1, 1);
      zone.pillar.position.y = 3.2;
      (zone.halo.material as THREE.MeshBasicMaterial).opacity = 0;
      (zone.bloom.material as THREE.MeshBasicMaterial).opacity = 0;
      (zone.pillar.material as THREE.MeshBasicMaterial).opacity = 0;
      (zone.moteA.material as THREE.MeshBasicMaterial).opacity = 0;
      (zone.moteB.material as THREE.MeshBasicMaterial).opacity = 0;
      (zone.halo.material as THREE.MeshBasicMaterial).color.set(0xff8f3d);
      (zone.bloom.material as THREE.MeshBasicMaterial).color.set(0xff8f3d);
      (zone.pillar.material as THREE.MeshBasicMaterial).color.set(0xff8f3d);
      (zone.moteA.material as THREE.MeshBasicMaterial).color.set(0xffd58a);
      (zone.moteB.material as THREE.MeshBasicMaterial).color.set(0x7be0ff);
      zone.moteA.position.set(2.2, 1.6, 0.4);
      zone.moteB.position.set(-2.5, 2.3, -0.6);
    });
    scanSweepBands.forEach((band) => {
      const material = band.material as THREE.MeshBasicMaterial;
      material.opacity = 0;
    });
    const terrainMaterial = terrainMesh.material as THREE.MeshStandardMaterial;
    terrainMaterial.color.set(0x372415);
    terrainMaterial.emissive.set(0x2a0808);
    terrainMaterial.emissiveIntensity = 0.62;
    keyLight.color.set(0xff6622);
    keyLight.intensity = 2.5;
    fillLight.color.set(0xff3300);
    fillLight.intensity = 0.95;
    ambientLight.color.set(0x331122);
    ambientLight.intensity = 1.05;
    crackLight.color.set(0xffb347);
    crackLight.intensity = 2.2;
    if (terrainShader) {
      terrainShader.uniforms.uTerrainDominionColor.value.set(0x7be0ff);
      terrainShader.uniforms.uTerrainShadowColor.value.set(0x130c12);
      terrainShader.uniforms.uTerrainLightDir.value.set(-0.3, 0.88, -0.34).normalize();
      terrainShader.uniforms.uTerrainTime.value = 0;
      terrainShader.uniforms.uTerrainContourStrength.value = 0.55;
    }
    (hazeMesh.material as THREE.MeshBasicMaterial).color.set(0x550010);
    (hazeMesh.material as THREE.MeshBasicMaterial).opacity = 0.18;
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
