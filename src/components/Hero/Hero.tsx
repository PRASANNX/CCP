import styles from './Hero.module.scss';
import { useReveal } from '../../hooks/useReveal';

interface HeroProps {
  onOpenOffcanvas: () => void;
}

export const Hero = ({ onOpenOffcanvas }: HeroProps) => {
  const ctaRef = useReveal<HTMLDivElement>({ delay: 0.6 });

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        
        <div className={styles.title} data-hero-title>
          <h1 className="display-m" style={{textTransform: 'none'}}>
            <span>[FILL: PROJECT TITLE LINE 1]</span>
            <span>[FILL: PROJECT TITLE LINE 2]</span>
            <span>
              <span className={styles.shape} aria-hidden="true" />
              [FILL: PROJECT TITLE LINE 3]
            </span>
            <span>[FILL: PROJECT TITLE LINE 4]</span>
          </h1>
        </div>

        <div className={styles.copyBlock}>
          <div className={styles.copyWrapper}>
            <p className="text-xl" data-hero-copy>
              [FILL: abstract]
            </p>
          </div>
          <div className={styles.actions} data-hero-actions ref={ctaRef}>
            <button className="btn btn--outline" onClick={onOpenOffcanvas} style={{ borderColor: 'var(--white)', color: 'var(--white)' }}>
              [FILL: HERO CTA 1]
              <span className={styles.icon}>&gt;</span>
            </button>
            <button className="btn btn--outline" onClick={onOpenOffcanvas} style={{ borderColor: 'var(--white)', color: 'var(--white)' }}>
              [FILL: HERO CTA 2]
              <span className={styles.icon}>&gt;</span>
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};
