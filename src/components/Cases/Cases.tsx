import { useState } from 'react';
import styles from './Cases.module.scss';
import { cases } from '../../data/cases';
import { useReveal } from '../../hooks/useReveal';
import { useMagnetic } from '../../hooks/useMagnetic';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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
  const [activeCase, setActiveCase] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section 
      className={styles.section} 
      ref={sectionRef}
      data-stagger-parent
      onMouseLeave={() => setActiveCase(0)}
    >
      <div className={styles.backgrounds} aria-hidden="true">
        {cases.map((item, index) => (
          <div
            className={`${styles.background} ${activeCase === index ? styles.active : ""}`}
            key={item.title}
            style={{ background: item.color }}
          />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
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
                  onEnter={() => setActiveCase(i)} 
                />
              </div>
            ))}
          </div>
        ) : (
          /* Mobile Swiper */
          <div className={styles.mobileSwiper}>
            <Swiper 
              modules={[Pagination]}
              spaceBetween={16} 
              slidesPerView={1.08} 
              pagination={{ clickable: true }}
            >
              {cases.map((item, i) => (
                <SwiperSlide key={i}>
                  <a href="#" className={styles.mobileCard} style={{ backgroundColor: item.color }}>
                    <p className="label">{item.category}</p>
                    <h3 className="display-xs" style={{ marginTop: 'auto', color: 'var(--black)' }}>{item.title}</h3>
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
