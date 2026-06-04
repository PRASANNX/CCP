import styles from './GlassCardsRandom.module.scss';
import { useReveal } from '../../hooks/useReveal';
import { useMagnetic } from '../../hooks/useMagnetic';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const GlassCardItem = ({ title, active }: { title: string; active?: boolean }) => {
  const ref = useMagnetic<HTMLDivElement>({ strength: 0.1 });
  return (
    <div className={`${styles.card} ${active ? styles.active : ''}`} ref={ref}>
      <h3 className="display-xxs">{title}</h3>
    </div>
  );
};

export const GlassCardsRandom = () => {
  const sectionRef = useReveal<HTMLDivElement>();

  const cards = [
    { title: '[FILL: glass card 1]', active: false },
    { title: '[FILL: glass card 2]', active: true },
    { title: '[FILL: glass card 3]', active: false },
    { title: '[FILL: glass card 4]', active: false },
  ];

  return (
    <section className={styles.section} ref={sectionRef} data-stagger-parent>
      <div className="container">
        
        {/* Desktop Grid */}
        <div className={`desktopOnly ${styles.desktopGrid}`} aria-hidden="false">
          <div className={styles.centerWrap} data-stagger-child>
            <GlassCardItem title={cards[1].title} active />
          </div>
          <div className={`${styles.floatCard} ${styles.pos1}`} data-stagger-child>
            <GlassCardItem title={cards[0].title} />
          </div>
          <div className={`${styles.floatCard} ${styles.pos2}`} data-stagger-child>
            <GlassCardItem title={cards[2].title} />
          </div>
          <div className={`${styles.floatCard} ${styles.pos3}`} data-stagger-child>
            <GlassCardItem title={cards[3].title} />
          </div>
        </div>

        {/* Mobile Swiper - hidden from screen readers if on desktop to avoid duplicate content */}
        <div className={`mobileOnly ${styles.mobileSwiper}`} aria-hidden="true">
          <Swiper spaceBetween={16} slidesPerView={1.2}>
            {cards.map((card, i) => (
              <SwiperSlide key={i}>
                <div className={styles.mobileCard}>
                  <h3 className="text-xl">{card.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};
