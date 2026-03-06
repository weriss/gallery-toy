import gsap from 'gsap';

interface PageTransitionReturn {
  switchToTech: () => void;
  switchToMonet: () => void;
  animateBubbles: (activePageId: string) => void;
}

export function usePageTransition(): PageTransitionReturn {
  const switchToTech = (): void => {
    const monet = document.querySelector<HTMLElement>('.page-monet');
    const tech = document.querySelector<HTMLElement>('.page-tech');
    
    if (monet) {
      gsap.to(monet, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
      });
    }
    
    setTimeout(() => {
      if (tech) {
        gsap.set(tech, { display: 'block' });
      }
      
      gsap.from('.tech-label', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out"
      });
      
      gsap.from('.tech-title', {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out"
      });
      
      gsap.from('.tech-tagline', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out"
      });
      
      gsap.from('.tech-description', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out"
      });
      
      gsap.from('.tech-btn', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        delay: 1,
        ease: "back.out(1.7)"
      });
      
      gsap.from('.hud-corner', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        stagger: 0.1,
        ease: "back.out(1.5)"
      });
      
      gsap.from('.hud-status', {
        y: -20,
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
        ease: "power2.out"
      });
    }, 500);
  };

  const switchToMonet = (): void => {
    const monet = document.querySelector<HTMLElement>('.page-monet');
    
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
