import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './FeatureCards.module.scss';
import { featureCards } from '../../data/featureCards';
import { useReveal } from '../../hooks/useReveal';

const Card = ({ data }: { data: any }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className={styles.card} ref={ref}>
      <div className={styles.defaultTitle}>{data.title}</div>
      <div className={styles.hoverContent}>
        <h4>{data.subtitle}</h4>
        <p>{data.detail}</p>
      </div>
    </div>
  );
};

export const FeatureCards = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.desktopGrid}>
          {featureCards.map((c: any, i: number) => <Card key={i} data={c} />)}
        </div>
        <div className={styles.mobileSwiper}>
          <Swiper spaceBetween={16} slidesPerView={1.2}>
            {featureCards.map((c: any, i: number) => (
              <SwiperSlide key={i}><Card data={c} /></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
