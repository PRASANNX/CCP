import styles from './Hero.module.scss';
import { useReveal } from '../../hooks/useReveal';

export const Hero = () => {
  const ctaRef = useReveal<HTMLDivElement>({ delay: 0.6 });

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.top}>
          <h1 className="hero-title-reveal display-xl">
            [FILL: PROJECT TITLE LINE 1]
            <br />
            <span className={styles.shape} aria-hidden="true"></span>
            [FILL: PROJECT TITLE LINE 2]
            <br />
            [FILL: PROJECT TITLE LINE 3]
            <br />
            [FILL: PROJECT TITLE LINE 4]
          </h1>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyWrapper}>
            <p className="hero-copy-reveal text-xl">
              [FILL: abstract]
            </p>
          </div>
          <div className={`${styles.actions} hero-actions-reveal`} ref={ctaRef}>
            <button className="btn btn--outline">[FILL: HERO CTA 1]</button>
            <button className="btn btn--outline">[FILL: HERO CTA 2]</button>
          </div>
        </div>
      </div>
    </section>
  );
};
