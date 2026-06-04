import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Partners.module.scss';
import { partners } from '../../data/partners';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Partners = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: trackRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className="sr-only">Our Partners</h2>
      <div className={styles.marquee}>
        <div className={styles.track} ref={trackRef}>
          {/* Double up for infinite effect */}
          {[...partners, ...partners].map((p: any, i: number) => (
            <div key={i} className={styles.logo}>{p.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
