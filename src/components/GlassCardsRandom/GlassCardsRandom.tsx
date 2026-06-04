import styles from './GlassCardsRandom.module.scss';
import { useReveal } from '../../hooks/useReveal';
import { useMagnetic } from '../../hooks/useMagnetic';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CenterCard = ({ title }: { title: string }) => {
  const ref = useMagnetic<HTMLDivElement>({ strength: 0.1 });
  return (
    <div className={`${styles.card} ${styles.active}`} ref={ref}>
      <h3 className="display-xxs">{title}</h3>
    </div>
  );
};

const ProcessCard = ({ number, title }: { number: string; title: string }) => {
  const ref = useMagnetic<HTMLDivElement>({ strength: 0.1 });
  return (
    <div className={styles.card} ref={ref}>
      <p className="label" style={{ marginBottom: '1rem', color: 'var(--grey)' }}>{number}</p>
      <h3 className="display-xxs">{title}</h3>
    </div>
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
          <div className={styles.desktopGrid}>
            <div className={styles.centerWrap} data-stagger-child>
              <CenterCard title="[FILL: methodology title]" />
            </div>
            <div className={`${styles.floatCard} ${styles.pos1}`} data-stagger-child>
              <ProcessCard number="[FILL: step number 1]" title="[FILL: step 1 title]" />
            </div>
            <div className={`${styles.floatCard} ${styles.pos2}`} data-stagger-child>
              <ProcessCard number="[FILL: step number 2]" title="[FILL: step 2 title]" />
            </div>
            <div className={`${styles.floatCard} ${styles.pos3}`} data-stagger-child>
              <ProcessCard number="[FILL: step number 3]" title="[FILL: step 3 title]" />
            </div>
          </div>
        ) : (
          /* Mobile Swiper */
          <div className={styles.mobileSwiper}>
            <Swiper spaceBetween={16} slidesPerView={1.2} centeredSlides={true}>
              <SwiperSlide>
                <div className={`${styles.mobileCard} ${styles.activeMobile}`}>
                  <h3 className="text-xl">[FILL: methodology title]</h3>
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
