import styles from './Hero.module.scss';
import { useReveal } from '../../hooks/useReveal';

interface HeroProps {
  onOpenOffcanvas: () => void;
}

export const Hero = ({ onOpenOffcanvas }: HeroProps) => {
  const ctaRef = useReveal<HTMLDivElement>({ delay: 0.6 });

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.top}>
          <h1 className="display-xl" data-hero-title>
            <span>[FILL: PROJECT TITLE LINE 1]</span>
            <span>[FILL: PROJECT TITLE LINE 2]</span>
            <span>
              <span className={styles.shape} aria-hidden="true" />
              [FILL: PROJECT TITLE LINE 3]
            </span>
            <span>[FILL: PROJECT TITLE LINE 4]</span>
          </h1>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyWrapper}>
            <p className="hero-copy-reveal text-xl">
              [FILL: abstract]
            </p>
          </div>
          <div className={`${styles.actions} hero-actions-reveal`} ref={ctaRef}>
            <button className="btn btn--outline" onClick={onOpenOffcanvas}>[FILL: HERO CTA 1]</button>
            <button className="btn btn--outline" onClick={onOpenOffcanvas}>[FILL: HERO CTA 2]</button>
          </div>
        </div>
      </div>
    </section>
  );
};
