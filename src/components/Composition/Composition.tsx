import styles from './Composition.module.scss';
import { useReveal } from '../../hooks/useReveal';
import { compositionCards } from '../../data/compositionCards';

export const Composition = () => {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section className={styles.section} ref={sectionRef} data-stagger-parent>
      <div className="container">
        
        <div className={styles.intro}>
          <h2 className={`display-m ${styles.title}`} style={{textTransform: 'none'}}>
            <span>[FILL: solution title line 1]</span>
            <span>[FILL: solution title line 2]</span>
            <span>
              <span className={styles.shape} aria-hidden="true" />
              [FILL: solution title line 3]
            </span>
            <span>[FILL: solution title line 4]</span>
          </h2>
          <div className={styles.summary}>
            <p className="text-l">
              [FILL: solution abstract]
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {/* Green Card */}
          <div className={`${styles.card} ${styles.greenCard}`} data-stagger-child>
            <h3 className="display-xs">{compositionCards[0]?.title}</h3>
          </div>
          
          {/* Empty Media Card */}
          <div className={`${styles.card} ${styles.mediaCard}`} data-stagger-child>
            <span style={{color: 'var(--grey)', fontSize: '14px'}}>[FILL: media block]</span>
          </div>
          
          {/* Round Dark Card */}
          <div className={`${styles.card} ${styles.roundCard}`} style={{justifyContent: 'center', alignItems: 'center'}} data-stagger-child>
            <h3 className="display-xs" style={{color: 'var(--white)'}}>{compositionCards[1]?.title}</h3>
          </div>
          
          {/* Blue Card */}
          <div className={`${styles.card} ${styles.blueCard}`} data-stagger-child>
            <h3 className="display-xs">{compositionCards[2]?.title}</h3>
          </div>

          {/* Huge Metric Card */}
          <div className={`${styles.card} ${styles.metricCard}`} data-stagger-child>
            <div>
              <div className={styles.metric}>
                [FILL: M1]
              </div>
              <p className="display-xxs" style={{marginTop: '2rem'}}>
                [FILL: big metric label]
              </p>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};
