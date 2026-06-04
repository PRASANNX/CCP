import styles from './Hero.module.scss';
import { useReveal } from '../../hooks/useReveal';

export const Hero = () => {
  const ctaRef = useReveal<HTMLDivElement>({ delay: 0.4 });
  return (
    <div className={styles.container}>
      <div className="container">
        <h1 className={`${styles.title} hero-title-reveal display-xl`}>
          [FILL: project title line 1]<br/>
          <span className={styles.oval}></span>[FILL: project title line 2]<br/>
          [FILL: project title line 3]<br/>
          [FILL: project title line 4]
        </h1>
        <div className={styles.content}>
          <p data-reveal className="text-xl">[FILL: abstract]</p>
          <div ref={ctaRef} className={styles.actions}>
            <button className="btn">[FILL: hero CTA 1]</button>
            <button className="btn">[FILL: hero CTA 2]</button>
          </div>
        </div>
      </div>
    </div>
  );
};
