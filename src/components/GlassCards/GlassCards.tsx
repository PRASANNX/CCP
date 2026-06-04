import styles from './GlassCards.module.scss';
import { glassCards } from '../../data/glassCards';
import { useReveal } from '../../hooks/useReveal';
import { useMagnetic } from '../../hooks/useMagnetic';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const GlassCard = ({ data }: { data: any }) => {
  const ref = useMagnetic<HTMLDivElement>({ strength: 0.05, rotate: 1 });
  return (
    <div className={styles.card} ref={ref}>
      <h3 className="display-xs">{data.title}</h3>
      <p className="text-m" style={{ marginTop: '2rem' }}>{data.desc}</p>
    </div>
  );
};

export const GlassCards = () => {
  const sectionRef = useReveal<HTMLElement>();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className={styles.section} ref={sectionRef} data-stagger-parent>
      <div className="container">
        <div style={{ marginBottom: '4rem' }} data-stagger-child>
          <h2 className="display-l">
            [FILL: audience path title line 1]<br/>
            <span className={styles.shape} aria-hidden="true" />
            [FILL: audience path title line 2]<br/>
            [FILL: audience path title line 3]
          </h2>
        </div>
        
        {!isMobile ? (
          /* Desktop Grid */
          <div className={styles.desktopGrid}>
            {glassCards.map((card, i) => (
              <div key={i} data-stagger-child>
                <GlassCard data={card} />
              </div>
            ))}
          </div>
        ) : (
          /* Mobile Swiper */
          <div className={styles.mobileSwiper}>
            <Swiper spaceBetween={16} slidesPerView={1.1} centeredSlides={true}>
              {glassCards.map((card, i) => (
                <SwiperSlide key={i}>
                  <div className={styles.mobileCard}>
                    <h3 className="display-xs">{card.title}</h3>
                    <p className="text-m" style={{ marginTop: '1rem' }}>{card.desc}</p>
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
