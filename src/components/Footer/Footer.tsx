import styles from './Footer.module.scss';
import { useReveal } from '../../hooks/useReveal';
import logo from '../../assets/logo.png';

export const Footer = () => {
  const footerRef = useReveal<HTMLDivElement>();

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className="container">
        <div className={styles.top} data-reveal>
          <img src={logo} alt="CCProductions" style={{ height: 'clamp(72px, 12vw, 150px)', width: 'auto', filter: 'invert(1) brightness(1.5)' }} />
        </div>

        <hr />
        
        <div className={styles.middle} data-reveal>
          <div className={styles.newsletter}>
            <h3 className="display-xs">Start the conversation</h3>
            <p className="text-m">Share your brand, campus, event, or campaign goals and we’ll map the right content structure.</p>
            <div className={styles.formPlaceholder}>Enter email / request proposal</div>
          </div>
          
          <div className={styles.linksGroup}>
            <h3 className="text-s">Quick Links</h3>
            <div className={styles.links}>
              <a href="#">Segments</a>
              <a href="#">Offerings</a>
              <a href="#">Work</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>

        <hr />

        <div className={styles.bottom} data-reveal>
          <div className={styles.social}>
            <a href="#" aria-label="Social link 1">Instagram</a>
            <a href="#" aria-label="Social link 2">LinkedIn</a>
            <a href="#" aria-label="Social link 3">YouTube</a>
          </div>
          <div className={styles.legal}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
