import styles from './FeatureCards.module.scss';
import { featureCards } from '../../data/featureCards';
import { useReveal } from '../../hooks/useReveal';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const FeatureCard = ({ data, index }: { data: any; index: number }) => {
  // Use specific class based on index to create D-shapes
  const shapeClass = index === 0 ? styles.shapeRight : styles.shapeLeft;

  return (
    <div className={`${styles.card} ${shapeClass}`}>
      <div className={styles.inner}>
        <h3 className="display-xs">{data.title}</h3>
        <p className="label" style={{ marginTop: '1rem', textTransform: 'none', fontSize: '15px' }}>{data.detail}</p>
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
          <h2 className="display-m" style={{textTransform: 'none'}}>
            [FILL: difference title line 1]<br/>
            <span className={styles.shape} aria-hidden="true" />
            [FILL: difference title line 3]
          </h2>
        </div>
        
        {!isMobile ? (
          /* Desktop Grid */
          <div className={styles.desktopGrid}>
            {featureCards.slice(0, 3).map((card, i) => (
              <div key={i} data-stagger-child>
                <FeatureCard data={card} index={i} />
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
                  <div className={`${styles.mobileCard}`}>
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
