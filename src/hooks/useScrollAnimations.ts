import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Generic [data-reveal] elements
      const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]');
      revealElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          }
        );
      });

      // Hero title split into lines
      const heroTitle = document.querySelector<HTMLElement>('.hero-title-reveal');
      if (heroTitle) {
        const split = new SplitType(heroTitle, { types: 'lines,words' });

        // Wrap lines for overflow hidden
        split.lines?.forEach((line) => {
          const wrapper = document.createElement('div');
          wrapper.style.overflow = 'hidden';
          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);
        });

        gsap.fromTo(
          split.lines,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            stagger: 0.1,
          }
        );
      }

      // Hero copy and buttons
      const heroCopy = document.querySelector<HTMLElement>('.hero-copy-reveal');
      if (heroCopy) {
        gsap.fromTo(
          heroCopy,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
        );
      }

      const heroActions = document.querySelector<HTMLElement>('.hero-actions-reveal');
      if (heroActions) {
        gsap.fromTo(
          heroActions,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.9 }
        );
      }

      // Stagger cards by section
      document.querySelectorAll<HTMLElement>('[data-stagger-parent]').forEach((parent) => {
        const children = parent.querySelectorAll<HTMLElement>('[data-stagger-child]');
        gsap.fromTo(
          children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: parent,
              start: 'top 80%',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
};
