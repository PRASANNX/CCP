import styles from './Composition.module.scss';
import { compositionCards } from '../../data/compositionCards';
import { useReveal } from '../../hooks/useReveal';
import { useMagnetic } from '../../hooks/useMagnetic';

const CompCard = ({ data }: { data: any }) => {
  const ref = useMagnetic<HTMLDivElement>({ strength: 0.05, rotate: 1 });
  
  if (data.type === 'text') {
    return (
      <div className={`${styles.card} ${styles[data.color]} ${data.span ? styles[data.span] : ''}`}>
        <div className={styles.magneticInner} ref={ref}>
          <h3 className="display-xxs">{data.title}</h3>
        </div>
      </div>
    );
  }
  
  if (data.type === 'number') {
    return (
      <div className={`${styles.card} ${styles.numberCard} ${data.span ? styles[data.span] : ''}`}>
        <div className={styles.magneticInner} ref={ref}>
          <div className="display-l">{data.value}</div>
          <p className="label">{data.title}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`${styles.card} ${styles.mediaCard} ${data.span ? styles[data.span] : ''}`}>
      <div className={styles.magneticInner} ref={ref}>
        <span>{data.alt}</span>
      </div>
    </div>
  );
};

export const Composition = () => {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <div className="container">
        
        <div className={styles.header} ref={headerRef} data-reveal>
          <h2 className="display-m">
            [FILL: composition title line 1]<br/>
            [FILL: composition title line 2]<br/>
            <span className={styles.shape} aria-hidden="true"></span><br/>
            [FILL: composition title line 3]
          </h2>
          <p className="text-xl">[FILL: composition summary]</p>
        </div>
        
        <div className={styles.grid}>
          {compositionCards.map((c, i) => (
            <div key={i} data-composition-card>
              <CompCard data={c} />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
