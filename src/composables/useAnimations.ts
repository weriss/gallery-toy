import gsap from 'gsap';

interface AnimationsReturn {
  initHeaderAnimation: () => void;
  initBubbleAnimation: () => void;
}

export function useAnimations(): AnimationsReturn {
  const initHeaderAnimation = (): void => {
    const header = document.querySelector<HTMLElement>('.painting-header');
    if (!header) return;

    const h1 = header.querySelector<HTMLElement>('h1');
    const p = header.querySelector<HTMLElement>('p');
    const btn = header.querySelector<HTMLElement>('.start-btn');

    if (h1) {
      gsap.from(h1, {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
      });
    }
    
    if (p) {
      gsap.from(p, {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power3.out"
      });
    }
    
    if (btn) {
      gsap.from(btn, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 1.2,
        ease: "back.out(1.7)"
      });
      
      gsap.to(btn, {
        y: -5,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });
    }
  };

  const initBubbleAnimation = (): void => {
    setTimeout(() => {
      const bubbles = document.querySelectorAll<HTMLElement>('.bubble-item');
      bubbles.forEach((bubble, index) => {
        gsap.set(bubble, {
          x: -150,
          opacity: 0,
          scale: 0
        });
        
        gsap.to(bubble, {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 2 + index * 0.2,
          ease: "elastic.out(1, 0.5)"
        });
      });
    }, 100);
  };

  return {
    initHeaderAnimation,
    initBubbleAnimation
  };
}
