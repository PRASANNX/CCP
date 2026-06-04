import styles from './GlassCardsRandom.module.scss';
import { useReveal } from '../../hooks/useReveal';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const GlassCardsRandom = () => {
  const sectionRef = useReveal<HTMLDivElement>();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const cards = [
    { num: '01.', dotColor: 'var(--red)', title: '[FILL: step 1 title]', subtitle: '[FILL: step 1 detail]' },
    { num: '02.', dotColor: 'var(--blue)', title: '[FILL: step 2 title]', subtitle: '[FILL: step 2 detail]' },
    { num: '03.', dotColor: 'var(--green)', title: '[FILL: step 3 title]', subtitle: '[FILL: step 3 detail]' }
  ];

  return (
    <section className={styles.section} ref={sectionRef} data-stagger-parent>
      <div className="container">
        
        {/* Top Banner */}
        <div className={styles.banner} data-stagger-child>
          <div className={styles.bannerContent}>
            <h2 className="display-m">[FILL: methodology title]</h2>
            <a href="#" className="btn btn--outline" style={{ borderColor: 'var(--white)', color: 'var(--white)', marginTop: '2rem' }}>
              [FILL: methodology CTA] &gt;
            </a>
          </div>
        </div>
        
        {!isMobile ? (
          /* Desktop Grid */
          <div className={styles.grid}>
            {cards.map((card, i) => (
              <div key={i} className={styles.card} data-stagger-child>
                <div className={styles.cardHeader}>
                  <span className={styles.num}>{card.num}</span>
                  <span className={styles.dot} style={{ backgroundColor: card.dotColor }}></span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className="display-xxs">{card.title}</h3>
                  <p className="text-s" style={{ color: 'var(--white-50)', marginTop: '1rem' }}>{card.subtitle}</p>
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
              {cards.map((card, i) => (
                <SwiperSlide key={i}>
                  <div className={styles.card}>
                    <div className={styles.cardHeader}>
                      <span className={styles.num}>{card.num}</span>
                      <span className={styles.dot} style={{ backgroundColor: card.dotColor }}></span>
                    </div>
                    <div className={styles.cardBody}>
                      <h3 className="display-xxs">{card.title}</h3>
                      <p className="text-s" style={{ color: 'var(--white-50)', marginTop: '1rem' }}>{card.subtitle}</p>
                    </div>
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
