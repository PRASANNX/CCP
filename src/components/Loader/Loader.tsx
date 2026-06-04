import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Loader.module.scss';

export const Loader = () => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    const tl = gsap.timeline({
      delay: 0.8,
      onComplete: () => {
        if (loaderRef.current) {
          loaderRef.current.style.display = 'none';
        }
      },
    });

    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <div className={styles.loader} ref={loaderRef} aria-hidden="true">
      <div className={styles.spinnerWrap}>
        <div className={styles.spinner} />
      </div>
    </div>
  );
};
