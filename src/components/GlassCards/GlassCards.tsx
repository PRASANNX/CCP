import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './GlassCards.module.scss';
import { glassCards } from '../../data/glassCards';
import { useMagnetic } from '../../hooks/useMagnetic';

const Card = ({ data }: { data: any }) => {
  const ref = useMagnetic<HTMLDivElement>();
  return (
    <div className={styles.card} ref={ref}>
      <h4>{data.title}</h4>
      <p>{data.desc}</p>
    </div>
  );
};

export const GlassCards = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <h2 data-reveal className="display-m">Audience Paths</h2>
        <div className={styles.desktopGrid}>
          {glassCards.map((c: any, i: number) => <Card key={i} data={c} />)}
        </div>
        <div className={styles.mobileSwiper}>
          <Swiper spaceBetween={20} slidesPerView={1.2}>
            {glassCards.map((c: any, i: number) => (
              <SwiperSlide key={i}><Card data={c} /></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
