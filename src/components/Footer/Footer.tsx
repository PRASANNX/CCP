import styles from './Footer.module.scss';
import { useReveal } from '../../hooks/useReveal';

export const Footer = () => {
  const footerRef = useReveal<HTMLDivElement>();

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className="container">
        <div className={styles.top} data-reveal>
          <h2 className="display-l">[FILL: CTA title]</h2>
        </div>

        <hr />
        
        <div className={styles.middle} data-reveal>
          <div className={styles.newsletter}>
            <h3 className="display-xs">[FILL: Newsletter Title]</h3>
            <p className="text-m">[FILL: Newsletter text]</p>
            <div className={styles.formPlaceholder}>[FILL: Newsletter Form]</div>
          </div>
          
          <div className={styles.linksGroup}>
            <h3 className="text-s">[FILL: Links Header]</h3>
            <div className={styles.links}>
              <a href="#">[FILL: Link 1]</a>
              <a href="#">[FILL: Link 2]</a>
              <a href="#">[FILL: Link 3]</a>
              <a href="#">[FILL: Link 4]</a>
            </div>
          </div>
        </div>

        <hr />

        <div className={styles.bottom} data-reveal>
          <div className={styles.social}>
            <a href="#" aria-label="Social link 1">[FILL: Social 1]</a>
            <a href="#" aria-label="Social link 2">[FILL: Social 2]</a>
            <a href="#" aria-label="Social link 3">[FILL: Social 3]</a>
          </div>
          <div className={styles.legal}>
            <a href="#">[FILL: Legal 1]</a>
            <a href="#">[FILL: Legal 2]</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
