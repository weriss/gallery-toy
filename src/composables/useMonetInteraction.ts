import { type Ref } from 'vue';
import * as THREE from 'three';
import gsap from 'gsap';

interface DialogueTexts {
  [key: string]: string;
}

interface MonetInteractionReturn {
  onMouseMove: (e: MouseEvent) => void;
  onClick: (e: MouseEvent) => void;
  startExplore: () => void;
}

export function useMonetInteraction(
  isExploring: Ref<boolean>,
  dialogue: Ref<string | null>,
  layers: Ref<THREE.Mesh[]>,
  camera: THREE.PerspectiveCamera
): MonetInteractionReturn {
  const onMouseMove = (e: MouseEvent): void => {
    // 这个逻辑由 useMonetScene 中的 updateMouseTarget 处理
  };

  const onClick = (e: MouseEvent): void => {
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(layers.value);

    if (intersects.length > 0) {
      const clickedObj = intersects[0].object as THREE.Mesh;
      const objName = clickedObj.userData.name as string;
      
      gsap.timeline()
        .to(clickedObj.scale, { 
          x: 1.1, 
          y: 1.1, 
          z: 1.1, 
          duration: 0.2, 
          ease: "power2.out" 
        })
        .to(clickedObj.scale, { 
          x: 1, 
          y: 1, 
          z: 1, 
          duration: 0.3, 
          ease: "elastic.out(1, 0.5)" 
        });
      
      gsap.timeline()
        .to(clickedObj.rotation, {
          z: Math.random() > 0.5 ? 0.1 : -0.1,
          duration: 0.2,
          ease: "power1.out"
        })
        .to(clickedObj.rotation, {
          z: 0,
          duration: 0.4,
          ease: "elastic.out(1, 0.3)"
        });
      
      const dialogueTexts: DialogueTexts = {
        woman: '展签 01 / 前景人物层。用于建立主视觉的第一眼情绪和风向。正式 CG 中她会被替换成进入 WERISS 的现场角色。',
        boy: '展签 02 / 远景陪体层。这个位置负责提供尺度参照，让山体和天空的压迫感有了可比较的人类尺寸。',
        grass: '展签 03 / 前景风场层。它不只是草，而是镜头前方的速度线。风一旦成立，整个画面就开始有叙事。',
        sky: '展签 04 / 天幕底片层。后续会叠加红脊、极光磁暴或 skyfold 光带，这里是所有关键 CG 的情绪起点。'
      };

      if (dialogueTexts[objName]) {
        dialogue.value = dialogueTexts[objName];
      }
    }
  };

  const startExplore = (): void => {
    isExploring.value = true;
    
    gsap.timeline()
      .to(camera.position, { 
        z: 5.5, 
        duration: 2, 
        ease: "power2.inOut" 
      })
      .to(camera.rotation, {
        z: 0.02,
        duration: 0.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 1
      }, "-=1");

    const grass = layers.value.find(l => l.userData.name === 'grass');
    if (grass) {
      gsap.timeline()
        .to(grass.scale, { 
          x: 0.7, 
          y: 0.7, 
          z: 0.7, 
          duration: 2, 
          ease: "power2.inOut" 
        })
        .to(grass.position, { 
          y: 0.5, 
          duration: 2, 
          ease: "power2.inOut" 
        }, "-=2");
    }
    
    layers.value.forEach((mesh, index) => {
      if (mesh.userData.name !== 'grass') {
        gsap.to(mesh.position, {
          y: mesh.position.y + (Math.random() - 0.5) * 0.3,
          duration: 2,
          ease: "power1.inOut",
          delay: index * 0.1
        });
      }
    });
  };

  return {
    onMouseMove,
    onClick,
    startExplore,
  };
}
