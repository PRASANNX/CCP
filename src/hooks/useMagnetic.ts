import { type RefObject, useEffect, useRef } from "react";
import gsap from "gsap";

type MagneticOptions = {
  strength?: number;
  rotate?: number;
};

export function useMagnetic<T extends HTMLElement>(
  options: MagneticOptions = {}
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const strength = options.strength ?? 0.08;
  const rotate = options.rotate ?? 1.5;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isTouch) return;

    const handleMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        rotateX: -y * strength * rotate,
        rotateY: x * strength * rotate,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 0.65,
        ease: "elastic.out(1, 0.45)",
      });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength, rotate]);

  return ref;
}
