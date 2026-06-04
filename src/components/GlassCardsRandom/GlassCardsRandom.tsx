import styles from './GlassCardsRandom.module.scss';
import { useReveal } from '../../hooks/useReveal';
import { useMagnetic } from '../../hooks/useMagnetic';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const CenterCard = ({ title, className }: { title: string, className?: string }) => {
  const ref = useMagnetic<HTMLDivElement>({ strength: 0.1 });
  return (
    <article className={`${styles.card} ${styles.center} ${className || ''}`}>
      <div ref={ref} className={styles.magneticInner}>
        <h3 className="display-xxs">{title}</h3>
      </div>
    </article>
  );
};

const ProcessCard = ({ number, title, className }: { number: string; title: string, className?: string }) => {
  const ref = useMagnetic<HTMLDivElement>({ strength: 0.1 });
  return (
    <article className={`${styles.card} ${className || ''}`}>
      <div ref={ref} className={styles.magneticInner}>
        <p className="label" style={{ marginBottom: '1rem', color: 'var(--grey)' }}>{number}</p>
        <h3 className="display-xxs">{title}</h3>
      </div>
    </article>
  );
};

export const GlassCardsRandom = () => {
  const sectionRef = useReveal<HTMLDivElement>();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className={styles.section} ref={sectionRef} data-stagger-parent data-component="glasscards-random">
      <div className="container">
        
        {!isMobile ? (
          /* Desktop Grid */
          <div className={styles.stage}>
            <div data-stagger-child>
              <CenterCard title="[FILL: methodology title]" />
            </div>
            <div data-stagger-child>
              <ProcessCard number="[FILL: step number 1]" title="[FILL: step 1 title]" className={styles.topLeft} />
            </div>
            <div data-stagger-child>
              <ProcessCard number="[FILL: step number 2]" title="[FILL: step 2 title]" className={styles.bottomRight} />
            </div>
            <div data-stagger-child>
              <ProcessCard number="[FILL: step number 3]" title="[FILL: step 3 title]" className={styles.bottom} />
            </div>
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
              <SwiperSlide>
                <div className={`${styles.mobileCard} ${styles.activeMobile}`}>
                  <h3 className="text-xl" style={{color: 'var(--black)'}}>[FILL: methodology title]</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.mobileCard}>
                  <p className="label" style={{ marginBottom: '1rem', color: 'var(--grey)' }}>[FILL: step number 1]</p>
                  <h3 className="text-xl">[FILL: step 1 title]</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.mobileCard}>
                  <p className="label" style={{ marginBottom: '1rem', color: 'var(--grey)' }}>[FILL: step number 2]</p>
                  <h3 className="text-xl">[FILL: step 2 title]</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.mobileCard}>
                  <p className="label" style={{ marginBottom: '1rem', color: 'var(--grey)' }}>[FILL: step number 3]</p>
                  <h3 className="text-xl">[FILL: step 3 title]</h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}

      </div>
    </section>
  );
};
