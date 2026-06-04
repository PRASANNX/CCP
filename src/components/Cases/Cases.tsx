import { useState } from 'react';
import styles from './Cases.module.scss';
import { cases } from '../../data/cases';
import { useReveal } from '../../hooks/useReveal';
import { useMagnetic } from '../../hooks/useMagnetic';
import { useMediaQuery } from '../../hooks/useMediaQuery';
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
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section 
      className={styles.section} 
      ref={sectionRef}
      style={{ backgroundColor: activeColor }}
      data-stagger-parent
      onMouseLeave={() => setActiveColor(cases[0].color)}
    >
      <div className="container">
        <div style={{ marginBottom: '4rem' }}>
          <h2 className="display-l" data-stagger-child>[FILL: evidence section title]</h2>
        </div>
        
        {!isMobile ? (
          /* Desktop Grid */
          <div className={styles.desktopGrid}>
            {cases.map((item, i) => (
              <div key={i} data-stagger-child>
                <CaseCard 
                  data={item} 
                  onEnter={() => setActiveColor(item.color)} 
                />
              </div>
            ))}
          </div>
        ) : (
          /* Mobile Swiper */
          <div className={styles.mobileSwiper}>
            <Swiper spaceBetween={16} slidesPerView={1.1} centeredSlides={true}>
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
        )}

        <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }} data-stagger-child>
          <a href="#" className="btn btn--outline" style={{ borderColor: 'var(--white)', color: 'var(--white)' }}>
            [FILL: evidence CTA]
          </a>
        </div>

      </div>
    </section>
  );
};
