import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MagneticConfig {
  strength?: number;
  rotate?: number;
}

export const useMagnetic = <T extends HTMLElement>(config: MagneticConfig = { strength: 0.08, rotate: 2 }) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    // Disabled on touch/mobile
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouch || !ref.current) return;

    const el = ref.current;
    const strength = config.strength ?? 0.08;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        rotate: (x / rect.width) * (config.rotate ?? 2),
        duration: 0.6,
        ease: 'power3.out',
        overwrite: 'auto'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        rotate: 0,
        duration: 0.6,
        ease: 'power3.out',
        overwrite: 'auto'
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [config]);

  return ref;
};
