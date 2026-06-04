import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Loader.module.scss';

export const Loader = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!loaderRef.current) return;
    // Fade out after load
    const tl = gsap.timeline();
    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 1,
      delay: 1, // wait a bit for initial render
      ease: 'power2.inOut',
      onComplete: () => {
        if (loaderRef.current) loaderRef.current.style.display = 'none';
      }
    });
  }, []);

  return (
    <div className={styles.container} ref={loaderRef}>
      <div className={styles.spinner}></div>
    </div>
  );
};
