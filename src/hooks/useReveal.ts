import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealConfig {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
}

export const useReveal = <T extends HTMLElement>(config?: RevealConfig) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion || !ref.current) return;

    const el = ref.current;

    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: config?.y ?? 40 },
      {
        opacity: 1,
        y: 0,
        duration: config?.duration ?? 0.9,
        delay: config?.delay ?? 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: config?.start ?? 'top 85%',
        },
      }
    );

    return () => {
      tween.kill();
    };
  }, []);

  return ref;
};
