import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './TableNumbers.module.scss';
import { metrics } from '../../data/metrics';
import { useReveal } from '../../hooks/useReveal';

gsap.registerPlugin(ScrollTrigger);

export const TableNumbers = () => {
  const sectionRef = useReveal<HTMLElement>();
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      countersRef.current.forEach((counter) => {
        if (!counter) return;
        
        // Strip out non-numeric characters for the target value
        const targetText = counter.getAttribute('data-target') || '0';
        const targetNum = parseFloat(targetText.replace(/[^0-9.]/g, ''));
        
        if (isNaN(targetNum)) return;

        gsap.fromTo(
          counter,
          { innerHTML: 0 },
          {
            innerHTML: targetNum,
            duration: 2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: counter,
              start: 'top 85%',
            },
            snap: { innerHTML: 1 }, // round to integers
            onUpdate: function () {
              // Add back the suffix manually via data attribute if needed, or let React handle suffix next to it
              counter.innerHTML = Math.round(Number(this.targets()[0].innerHTML)).toString();
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef} data-stagger-parent>
      <div className="container">
        <h2 className="display-m" style={{ marginBottom: '4rem' }} data-stagger-child>
          [FILL: proof title line 1]<br/>
          [FILL: proof title line 2]<br/>
          [FILL: proof title line 3]
        </h2>

        <div className={styles.table}>
          {metrics.map((metric, i) => (
            <div key={i} className={styles.row} data-stagger-child>
              <div className={styles.colMedia}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.colLabel}>
                <h3 className="display-xs">{metric.label}</h3>
              </div>
              <div className={styles.colValue}>
                <span className="display-m">
                  <span 
                    ref={(el) => { countersRef.current[i] = el; }} 
                    data-target={metric.value}
                  >
                    {metric.value}
                  </span>
                  {metric.suffix}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
