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
            <span>Content</span>
            <span>experience</span>
            <span className={styles.lineWithShape}>
              <span className={styles.shape} aria-hidden="true" />
              and
            </span>
            <span>results</span>
          </h2>
          <div className={styles.summary}>
            <p className="text-l">
              CCP combines creatives, videos, event coverage, social media systems, ads, virtual tours, and corporate films to help brands present themselves better and move audiences to action.
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
            <span className={styles.mediaPlaceholder}>Event production team documenting a live moment</span>
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
                100+
              </div>
              <p className="display-xxs" style={{ marginTop: '2rem' }}>
                Assets built with purpose
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
