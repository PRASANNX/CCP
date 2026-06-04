import styles from './Partners.module.scss';
import { partnersRow1, partnersRow2 } from '../../data/partners';
import { useReveal } from '../../hooks/useReveal';

export const Partners = () => {
  const sectionRef = useReveal<HTMLElement>();
  
  // Combine all partners into one array for the grid
  const allPartners = [...partnersRow1, ...partnersRow2];

  return (
    <section className={styles.partners} ref={sectionRef}>
      <div className="container">
        <h2 className={`display-m ${styles.heading}`}>
          [FILL: Innovation Partners title]
        </h2>
        
        <div className={styles.logoGrid}>
          {allPartners.map((p, i) => (
            <div key={i} className={styles.logoItem}>
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
