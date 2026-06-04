import styles from './Partners.module.scss';
import { partnersRow1, partnersRow2 } from '../../data/partners';
import { useReveal } from '../../hooks/useReveal';

export const Partners = () => {
  const sectionRef = useReveal<HTMLElement>();
  
  // Combine all partners into one array for the grid
  const allPartners = [...partnersRow1, ...partnersRow2];

  return (
    <section className={styles.partners} ref={sectionRef}>
      <h2 className="sr-only">Our Partners</h2>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className={styles.gridWrapper}>
          <div className={styles.grid}>
            {allPartners.map((p, i) => (
              <div key={i} className={styles.cell}>
                <span className={styles.logoText}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaContainer}>
          <a href="#" className="btn btn--outline" style={{ borderColor: 'var(--white-50)', color: 'var(--white)' }}>
            View all partners &gt;
          </a>
        </div>
      </div>
    </section>
  );
};
