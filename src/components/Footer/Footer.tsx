import styles from './Footer.module.scss';
import { useReveal } from '../../hooks/useReveal';

export const Footer = () => {
  const footerRef = useReveal<HTMLDivElement>();

  return (
    <footer className={styles.footer} ref={footerRef} data-stagger-parent>
      <div className="container">
        <h2 className="display-l" data-stagger-child>[FILL: CTA title]</h2>
        
        <div className={styles.inner} data-stagger-child>
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
            </div>
          </div>
        </div>

        <div className={styles.bottom} data-stagger-child>
          <div className={styles.social}>
            <a href="#">[FILL: Social 1]</a>
            <a href="#">[FILL: Social 2]</a>
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
