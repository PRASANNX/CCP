import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Default reveal for [data-reveal]
    const revealElements = document.querySelectorAll('[data-reveal]');
    revealElements.forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        }
      );
    });

    // Hero title split logic
    const heroTitle = document.querySelector('.hero-title-reveal');
    if (heroTitle) {
      const split = new SplitType(heroTitle as HTMLElement, { types: 'lines,words' });
      gsap.fromTo(split.lines,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 1, ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: heroTitle,
            start: 'top 90%'
          }
        }
      );
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
};
