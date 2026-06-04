import styles from './Footer.module.scss';
import { useReveal } from '../../hooks/useReveal';

export const Footer = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <footer className={styles.footer} ref={ref}>
      <div className="container">
        <h2 className="display-l">[FILL: org name]</h2>
        <div className={styles.inner}>
          <div className={styles.links}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Imprint</a>
          </div>
          <div className={styles.newsletter}>
            <p>[FILL: newsletter/contact form placeholder]</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
