import styles from './Composition.module.scss';
import { compositionCards } from '../../data/compositionCards';
import { useReveal } from '../../hooks/useReveal';
import { useMagnetic } from '../../hooks/useMagnetic';

const CompCard = ({ data }: { data: any }) => {
  const ref = useMagnetic<HTMLDivElement>();
  if (data.type === 'text') {
    return <div className={`${styles.card} ${styles[data.color]}`} ref={ref}><h3>{data.title}</h3></div>;
  }
  if (data.type === 'number') {
    return <div className={`${styles.card} ${styles.numberCard}`} ref={ref}>
      <div className="display-l">{data.value}</div>
      <p>{data.title}</p>
    </div>;
  }
  return <div className={`${styles.card} ${styles.mediaCard}`} ref={ref}>
    <span>{data.alt}</span>
  </div>;
};

export const Composition = () => {
  const headerRef = useReveal<HTMLDivElement>();
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.header} ref={headerRef}>
          <h2 className="display-m">Composition</h2>
          <p>A mosaic grid representation.</p>
        </div>
        <div className={styles.grid}>
          {compositionCards.map((c: any, i: number) => <CompCard key={i} data={c} />)}
        </div>
      </div>
    </div>
  );
};
