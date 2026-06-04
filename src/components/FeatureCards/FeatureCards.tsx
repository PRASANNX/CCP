import styles from './FeatureCards.module.scss';
import { featureCards } from '../../data/featureCards';
import { useReveal } from '../../hooks/useReveal';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const FeatureCards = () => {
  const sectionRef = useReveal<HTMLElement>();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className={styles.section} ref={sectionRef} data-stagger-parent>
      <div className="container">
        
        <div className={styles.sectionHeader}>
          <h2 className={`display-m ${styles.heading}`} style={{textTransform: 'none'}}>
            <span>[FILL: difference title line 1]</span>
            <span>[FILL: difference title line 2]</span>
            <span><span className={styles.shape} aria-hidden="true" />[FILL: difference title line 3]</span>
          </h2>
        </div>
        
        {!isMobile ? (
          /* Desktop Grid */
          <div className={styles.cardsGrid}>
            {featureCards.map((card, i) => (
              <div key={i} data-stagger-child className={styles.card}>
                <div className={styles.inner}>
                  <h3 className="display-xs">{card.title}</h3>
                  <p className="label" style={{ marginTop: '1rem', textTransform: 'none', fontSize: '15px' }}>{card.detail}</p>
                </div>
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
                  <div className={`${styles.mobileCard} ${i === 0 ? styles.firstCard : ''}`}>
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
