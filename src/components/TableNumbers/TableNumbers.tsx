import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './TableNumbers.module.scss';
import { metrics } from '../../data/metrics';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const TableNumbers = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      rowsRef.current.forEach((row) => {
        if (!row) return;
        const valEl = row.querySelector(`.${styles.value}`);
        if (!valEl) return;
        const originalText = valEl.textContent || '';
        const numericMatch = originalText.match(/(\d+)/);
        
        gsap.fromTo(row,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 85%',
              onEnter: () => {
                if (numericMatch && !originalText.includes('[FILL:')) {
                  const targetNum = parseInt(numericMatch[0], 10);
                  const suffix = originalText.replace(numericMatch[0], '');
                  gsap.to({ val: 0 }, {
                    val: targetNum,
                    duration: 2,
                    ease: 'power2.out',
                    onUpdate: function() {
                      if (valEl) valEl.textContent = Math.floor(this.targets()[0].val) + suffix;
                    }
                  });
                }
              }
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className="container">
        <h2 className="display-m" data-reveal>Proof of outcomes</h2>
        <div className={styles.table}>
          {metrics.map((m: any, i: number) => (
            <div key={i} className={styles.row} ref={el => { if (el) rowsRef.current[i] = el; }}>
              <div className={styles.label}>{m.label}</div>
              <div className={`${styles.value} display-s`}>{m.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
