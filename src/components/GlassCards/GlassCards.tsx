import styles from './GlassCards.module.scss';
import { glassCards } from '../../data/glassCards';
import { useReveal } from '../../hooks/useReveal';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const GlassCard = ({ data }: { data: any }) => {
  return (
    <div className={styles.card}>
      <h3 className="display-xs">{data.title}</h3>
      <p className="text-m" style={{ marginTop: '2rem', opacity: 0.8 }}>{data.desc}</p>
      <div className={styles.plus}>+</div>
    </div>
  );
};

export const GlassCards = () => {
  const sectionRef = useReveal<HTMLElement>();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.heading} data-reveal>
          <h2 className="display-l" style={{textTransform: 'none'}}>
            <span>[FILL: audience path title line 1]</span>
            <span>
              <span className={styles.shape} aria-hidden="true" />
              [FILL: audience path title line 2]
            </span>
            <span>[FILL: audience path title line 3]</span>
          </h2>
        </div>
        
        {!isMobile ? (
          /* Desktop Grid */
          <div className={styles.cardsGrid}>
            {glassCards.slice(0, 4).map((card, i) => (
              <div key={i} data-reveal>
                <GlassCard data={card} />
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
              {glassCards.slice(0, 4).map((card, i) => (
                <SwiperSlide key={i}>
                  <div className={styles.card}>
                    <h3 className="display-xs">{card.title}</h3>
                    <p className="text-m" style={{ marginTop: '1rem', opacity: 0.8 }}>{card.desc}</p>
                    <div className={styles.plus}>+</div>
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
