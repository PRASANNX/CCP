import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Composition.module.scss';
import { compositionCards } from '../../data/compositionCards';

gsap.registerPlugin(ScrollTrigger);

export function Composition() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Stagger reveal the cards
      gsap.fromTo(
        section.querySelectorAll('[data-mosaic-card]'),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef} aria-labelledby="composition-title">
      <div className={styles.inner}>
        
        <div className={styles.intro} data-reveal>
          <h2 id="composition-title" className={`display-m ${styles.title}`}>
            <span>[FILL: solution title line 1]</span>
            <span>[FILL: solution title line 2]</span>
            <span className={styles.lineWithShape}>
              <span className={styles.shape} aria-hidden="true" />
              [FILL: solution title line 3]
            </span>
            <span>[FILL: solution title line 4]</span>
          </h2>
          <div className={styles.summary}>
            <p className="text-l">
              [FILL: solution abstract]
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {/* Green Card */}
          <div className={`${styles.card} ${styles.greenCard}`} data-mosaic-card>
            <h3 className="display-xs">{compositionCards[0]?.title}</h3>
          </div>
          
          {/* Empty Media Card */}
          <div className={`${styles.card} ${styles.mediaCard}`} data-mosaic-card>
            <span className={styles.mediaPlaceholder}>[FILL: media block]</span>
          </div>
          
          {/* Round Dark Card */}
          <div className={`${styles.card} ${styles.roundCard}`} data-mosaic-card>
            <h3 className="display-xs" style={{ color: 'var(--white)' }}>
              {compositionCards[1]?.title}
            </h3>
          </div>
          
          {/* Blue Card */}
          <div className={`${styles.card} ${styles.blueCard}`} data-mosaic-card>
            <h3 className="display-xs">{compositionCards[2]?.title}</h3>
          </div>

          {/* Huge Metric Card */}
          <div className={`${styles.card} ${styles.metricCard}`} data-mosaic-card>
            <div className={styles.metricWrap}>
              <div className={styles.metric}>
                [FILL: M1]
              </div>
              <p className="display-xxs" style={{ marginTop: '2rem' }}>
                [FILL: big metric label]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
