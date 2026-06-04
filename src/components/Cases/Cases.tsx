import { useState } from 'react';
import styles from './Cases.module.scss';
import { cases } from '../../data/cases';
import { useReveal } from '../../hooks/useReveal';
import { useMagnetic } from '../../hooks/useMagnetic';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CaseCard = ({ data, onEnter }: { data: any; onEnter: () => void }) => {
  const ref = useMagnetic<HTMLAnchorElement>({ strength: 0.1 });
  
  return (
    <a 
      href="#" 
      className={styles.card} 
      ref={ref}
      onMouseEnter={onEnter}
      onFocus={onEnter}
    >
      <div className={styles.cardInner}>
        <p className="label">{data.category}</p>
        <h3 className="display-xs" style={{ marginTop: 'auto' }}>{data.title}</h3>
      </div>
    </a>
  );
};

export const Cases = () => {
  const sectionRef = useReveal<HTMLElement>();
  const [activeColor, setActiveColor] = useState(cases[0].color);

  return (
    <section 
      className={styles.section} 
      ref={sectionRef}
      style={{ backgroundColor: activeColor }}
      data-stagger-parent
    >
      <div className="container">
        
        {/* Desktop Grid */}
        <div className={`desktopOnly ${styles.desktopGrid}`} aria-hidden="false">
          {cases.map((item, i) => (
            <div key={i} data-stagger-child>
              <CaseCard 
                data={item} 
                onEnter={() => setActiveColor(item.color)} 
              />
            </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className={`mobileOnly ${styles.mobileSwiper}`} aria-hidden="true">
          <Swiper spaceBetween={16} slidesPerView={1.1}>
            {cases.map((item, i) => (
              <SwiperSlide key={i}>
                <a href="#" className={styles.mobileCard} style={{ backgroundColor: item.color }}>
                  <p className="label">{item.category}</p>
                  <h3 className="display-xs" style={{ marginTop: 'auto' }}>{item.title}</h3>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};
