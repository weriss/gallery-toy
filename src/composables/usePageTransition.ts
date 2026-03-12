import gsap from 'gsap';

interface PageTransitionReturn {
  switchToTech: () => void;
  switchToMonet: () => void;
  animateBubbles: (activePageId: string) => void;
}

export function usePageTransition(): PageTransitionReturn {
  let techIntroTimer: ReturnType<typeof setTimeout> | null = null;

  const switchToTech = (): void => {
    const monet = document.querySelector<HTMLElement>('.page-monet');
    const tech = document.querySelector<HTMLElement>('.page-tech');

    if (techIntroTimer) {
      clearTimeout(techIntroTimer);
      techIntroTimer = null;
    }

    gsap.killTweensOf([
      monet,
      tech,
      '.tech-label',
      '.tech-title',
      '.tech-tagline',
      '.tech-description',
      '.tech-btn',
      '.hud-corner',
      '.hud-status',
    ]);

    if (monet) {
      gsap.to(monet, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
      });
    }

    if (tech) {
      gsap.set(tech, { display: 'block' });
      gsap.fromTo(
        tech,
        { opacity: 0.72 },
        { opacity: 1, duration: 0.45, ease: 'power2.out', overwrite: 'auto' },
      );
    }

    techIntroTimer = setTimeout(() => {
      if (!tech || tech.offsetParent === null) return;

      gsap.fromTo('.tech-label',
        { x: -24, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: 'power2.out', overwrite: 'auto' }
      );

      gsap.fromTo('.tech-title',
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, delay: 0.08, ease: 'power3.out', overwrite: 'auto' }
      );

      gsap.fromTo('.tech-tagline',
        { x: -24, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, delay: 0.14, ease: 'power2.out', overwrite: 'auto' }
      );

      gsap.fromTo('.tech-description',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, delay: 0.2, ease: 'power2.out', overwrite: 'auto' }
      );

      gsap.fromTo('.tech-btn',
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, delay: 0.26, ease: 'power2.out', overwrite: 'auto' }
      );

      gsap.fromTo('.hud-corner',
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.35, delay: 0.08, stagger: 0.06, ease: 'power2.out', overwrite: 'auto' }
      );

      gsap.fromTo('.hud-status',
        { y: -12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, delay: 0.12, ease: 'power2.out', overwrite: 'auto' }
      );

      techIntroTimer = null;
    }, 40);
  };

  const switchToMonet = (): void => {
    const monet = document.querySelector<HTMLElement>('.page-monet');

    if (techIntroTimer) {
      clearTimeout(techIntroTimer);
      techIntroTimer = null;
    }

    gsap.killTweensOf([
      '.tech-label',
      '.tech-title',
      '.tech-tagline',
      '.tech-description',
      '.tech-btn',
      '.hud-corner',
      '.hud-status',
    ]);

    if (monet) {
      gsap.to(monet, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      });
    }
  };

  const animateBubbles = (activePageId: string): void => {
    const bubbles = document.querySelectorAll<HTMLElement>('.bubble-item');
    bubbles.forEach((bubble) => {
      const isActive = bubble.classList.contains('active');
      const bubbleElement = bubble.querySelector<HTMLElement>('.bubble');
      
      if (bubbleElement) {
        gsap.to(bubbleElement, {
          scale: isActive ? 1.2 : 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)"
        });
      }
    });
  };

  return {
    switchToTech,
    switchToMonet,
    animateBubbles
  };
}
