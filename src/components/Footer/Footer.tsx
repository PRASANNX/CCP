import styles from './Footer.module.scss';
import { useReveal } from '../../hooks/useReveal';

export const Footer = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <footer className={styles.footer} ref={ref}>
      <div className="container">
        <h2 className="display-l">[FILL: footer headline]</h2>
        
        <div className={styles.inner}>
          
          <div className={styles.linksGroup}>
            <h3 className="label">[FILL: footer link group title]</h3>
            <div className={styles.links}>
              <a href="#">[FILL: org name] Hub 1</a>
              <a href="#">[FILL: org name] Hub 2</a>
              <a href="#">[FILL: org name] Hub 3</a>
            </div>
          </div>

          <div className={styles.newsletter}>
            <h3 className="display-xs">[FILL: newsletter title]</h3>
            <p className="text-m">[FILL: newsletter description]</p>
            {/* Form placeholder */}
            <div className={styles.formPlaceholder}>[FILL: email input form]</div>
          </div>
          
        </div>
        
        <div className={styles.bottom}>
          <div className={styles.social}>
            <a href="#">[FILL: social link 1]</a>
            <a href="#">[FILL: social link 2]</a>
          </div>
          <div className={styles.legal}>
            <a href="#">[FILL: legal link 1]</a>
            <a href="#">[FILL: legal link 2]</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
