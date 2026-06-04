import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Partners.module.scss';
import { partnersRow1, partnersRow2 } from '../../data/partners';
import { useReveal } from '../../hooks/useReveal';

gsap.registerPlugin(ScrollTrigger);

export const Partners = () => {
  const sectionRef = useReveal<HTMLElement>();
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!track1Ref.current || !track2Ref.current) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Row 1 goes left
      gsap.to(track1Ref.current, {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Row 2 goes right
      gsap.to(track2Ref.current, {
        xPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.partners} ref={sectionRef}>
      <h2 className="sr-only">Our Partners</h2>
      
      <div className={styles.marquee}>
        <div className={styles.track} ref={track1Ref}>
          {/* Original set */}
          {partnersRow1.map((p, i) => (
            <div key={`r1-${i}`} className={styles.logo}>
              {p.name}
            </div>
          ))}
          {/* Duplicate set for infinite scroll */}
          {partnersRow1.map((_, i) => (
            <div key={`r1-dup-${i}`} className={styles.logo} aria-hidden="true">
              <span className={styles.logoVisualClone} aria-hidden="true"></span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.marquee}>
        <div className={`${styles.track} ${styles.trackReverse}`} ref={track2Ref}>
          {/* Original set */}
          {partnersRow2.map((p, i) => (
            <div key={`r2-${i}`} className={styles.logo}>
              {p.name}
            </div>
          ))}
          {/* Duplicate set for infinite scroll */}
          {partnersRow2.map((_, i) => (
            <div key={`r2-dup-${i}`} className={styles.logo} aria-hidden="true">
              <span className={styles.logoVisualClone} aria-hidden="true"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
