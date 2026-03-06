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
  toggleGrayscale: () => void;
}

export function useMonetInteraction(
  isExploring: Ref<boolean>,
  dialogue: Ref<string | null>,
  isGrayscale: Ref<boolean>,
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
        woman: '"克劳德总是在风起时按下快门（画笔），他说这层面纱捕捉到了光的灵魂。"',
        boy: '这是让（Jean），莫奈的长子。在那个夏天，他始终在草坡的那头好奇地看着。',
        grass: '这片草地生长在阿让特伊的山坡上，那里的每一缕风都带着塞纳河的气息。',
        sky: '1875年的天空，那时印象派还被世人嘲笑，但莫奈坚信光影的魔法终将被认可。'
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

  const toggleGrayscale = (): void => {
    isGrayscale.value = !isGrayscale.value;
    
    layers.value.forEach((mesh, index) => {
      const material = mesh.material as THREE.MeshBasicMaterial;
      
      gsap.to(material.color, {
        r: isGrayscale.value ? 0.3 : 1,
        g: isGrayscale.value ? 0.3 : 1,
        b: isGrayscale.value ? 0.3 : 1,
        duration: 1.5,
        delay: index * 0.1,
        ease: "power2.inOut"
      });
      
      if (isGrayscale.value) {
        gsap.to(mesh.rotation, {
          z: (Math.random() - 0.5) * 0.05,
          duration: 1,
          delay: index * 0.1,
          ease: "power1.inOut"
        });
      } else {
        gsap.to(mesh.rotation, {
          z: 0,
          duration: 1,
          delay: index * 0.1,
          ease: "power1.inOut"
        });
      }
    });
  };

  return {
    onMouseMove,
    onClick,
    startExplore,
    toggleGrayscale
  };
}
