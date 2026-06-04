import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './Cases.module.scss';
import { cases } from '../../data/cases';
import { useMagnetic } from '../../hooks/useMagnetic';

const CaseCard = ({ data, onHover }: { data: any, onHover: () => void }) => {
  const ref = useMagnetic<HTMLDivElement>();
  return (
    <div 
      className={styles.card} 
      ref={ref}
      onMouseEnter={onHover}
      onFocus={onHover}
      tabIndex={0}
    >
      <div className={styles.category}>{data.category}</div>
      <h3 className="display-xs">{data.title}</h3>
    </div>
  );
};

export const Cases = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.backgrounds}>
        {cases.map((_, i) => (
          <div 
            key={i} 
            className={`${styles.bgPanel} ${i === activeIdx ? styles.active : ''}`}
          />
        ))}
      </div>
      <div className="container">
        <h2 className="display-m" data-reveal style={{color: 'var(--white)', position: 'relative', zIndex: 2}}>Selected Cases</h2>
        
        {/* Desktop Grid */}
        <div className={styles.desktopGrid}>
          {cases.map((c: any, i: number) => (
            <CaseCard key={i} data={c} onHover={() => setActiveIdx(i)} />
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className={styles.mobileSwiper}>
          <Swiper spaceBetween={24} slidesPerView={1.2}>
            {cases.map((c: any, i: number) => (
              <SwiperSlide key={i}>
                <CaseCard data={c} onHover={() => setActiveIdx(i)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
