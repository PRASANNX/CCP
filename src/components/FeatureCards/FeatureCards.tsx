import styles from './FeatureCards.module.scss';
import { featureCards } from '../../data/featureCards';
import { useReveal } from '../../hooks/useReveal';
import { useMagnetic } from '../../hooks/useMagnetic';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const FeatureCard = ({ data, active }: { data: any; active?: boolean }) => {
  const ref = useMagnetic<HTMLDivElement>({ strength: 0.05, rotate: 1 });
  
  return (
    <div className={`${styles.card} ${active ? styles.active : ''}`} ref={ref}>
      <div className={styles.default}>
        <h3 className="display-xs">{data.title}</h3>
        <p className="label" style={{ marginTop: '1rem' }}>{data.subtitle}</p>
      </div>
      <div className={styles.hover}>
        <h3 className="text-xl">{data.hoverTitle}</h3>
        <p className="text-m">{data.detail}</p>
      </div>
    </div>
  );
};

export const FeatureCards = () => {
  const sectionRef = useReveal<HTMLElement>();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className={styles.section} ref={sectionRef} data-stagger-parent>
      <div className="container">
        
        <div className={styles.sectionHeader}>
          <h2 className="display-s">
            [FILL: difference title line 1]<br/>
            [FILL: difference title line 2]<br/>
            <span className={styles.shape} aria-hidden="true" />
            [FILL: difference title line 3]
          </h2>
        </div>
        
        {!isMobile ? (
          /* Desktop Grid */
          <div className={styles.desktopGrid}>
            {featureCards.map((card, i) => (
              <div key={i} data-stagger-child>
                <FeatureCard data={card} active={i === 0} />
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
              {featureCards.map((card, i) => (
                <SwiperSlide key={i}>
                  <div className={`${styles.mobileCard} ${i === 0 ? styles.active : ''}`}>
                    <h3 className="display-xs">{card.title}</h3>
                    <p className="text-m" style={{ marginTop: '1rem' }}>{card.detail}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

      </div>
    </section>
  );
};
