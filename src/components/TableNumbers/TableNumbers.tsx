import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './TableNumbers.module.scss';
import { metrics } from '../../data/metrics';
import { useReveal } from '../../hooks/useReveal';

gsap.registerPlugin(ScrollTrigger);

function parseMetric(value: string) {
  if (value.includes("[FILL:")) return null;

  const match = value.match(/^\$?(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;

  return {
    number: Number(match[1]),
    suffix: match[2] ?? "",
    prefix: value.startsWith("$") ? "$" : "",
  };
}

export const TableNumbers = () => {
  const sectionRef = useReveal<HTMLElement>();
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      countersRef.current.forEach((counter) => {
        if (!counter) return;
        
        const targetText = counter.getAttribute('data-target') || '0';
        const parsed = parseMetric(targetText);
        
        if (!parsed) return;

        gsap.fromTo(
          counter,
          { innerHTML: 0 },
          {
            innerHTML: parsed.number,
            duration: 2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: counter,
              start: 'top 85%',
              once: true
            },
            snap: { innerHTML: 1 },
            onUpdate: function () {
              const val = Math.round(Number(this.targets()[0].innerHTML));
              counter.innerHTML = `${parsed.prefix}${new Intl.NumberFormat('en-US').format(val)}${parsed.suffix}`;
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="container">
        <h2 className="display-l" style={{ marginBottom: '4rem' }} data-reveal>
          [FILL: proof title line 1]<br/>
          <span className={styles.shape} aria-hidden="true" />
          [FILL: proof title line 2]<br/>
          [FILL: proof title line 3]
        </h2>

        <div className={styles.table}>
          {metrics.map((metric, i) => (
            <div key={i} className={styles.row} data-number-row>
              <div className={styles.colLabel}>
                <h3 className="label" style={{textTransform: 'none', fontWeight: 600, fontSize: '16px'}}>{metric.label}</h3>
              </div>
              <div className={styles.colValue}>
                <span className={styles.massiveNumber}>
                  <span 
                    ref={(el) => { countersRef.current[i] = el; }} 
                    data-target={metric.value}
                  >
                    {metric.value}
                  </span>
                  {metric.suffix}
                </span>
              </div>
              <div className={styles.colMedia}>
                <div className={styles.photo}>
                  <span>[FILL: TableNumbers row image {i+1}]</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
