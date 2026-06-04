import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set("[data-reveal]", { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // Generic reveals
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      // Hero animation (manual spans instead of SplitType as requested to preserve shapes)
      const heroTitleSpans = document.querySelectorAll<HTMLElement>('[data-hero-title] > span');
      if (heroTitleSpans.length) {
        // Wrap lines for overflow hidden
        heroTitleSpans.forEach((line) => {
          const wrapper = document.createElement('div');
          wrapper.style.overflow = 'hidden';
          wrapper.style.display = 'block'; // ensure it acts like a line
          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);
          line.style.display = 'inline-block'; // allow yPercent transform
        });

        gsap.fromTo(
          heroTitleSpans,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power4.out",
            stagger: 0.08,
            delay: 0.2,
          }
        );
      }

      const heroCopy = document.querySelector<HTMLElement>("[data-hero-copy]");
      if (heroCopy) {
        gsap.fromTo(heroCopy, 
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: 0.65,
          }
        );
      }

      const heroActions = document.querySelector<HTMLElement>("[data-hero-actions]");
      if (heroActions) {
        gsap.fromTo(heroActions.children, 
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.08,
            delay: 0.82,
          }
        );
      }

      // Table rows
      gsap.utils.toArray<HTMLElement>("[data-number-row]").forEach((row, index) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.04,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      // Composition cards
      gsap.utils.toArray<HTMLElement>("[data-composition-card]").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: index * 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
