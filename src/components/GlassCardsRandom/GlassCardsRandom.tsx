import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './GlassCardsRandom.module.scss';
import { useMagnetic } from '../../hooks/useMagnetic';

export const GlassCardsRandom = () => {
  const Card = ({ title, desc }: { title: string, desc: string }) => {
    const ref = useMagnetic<HTMLDivElement>();
    return (
      <div className={styles.card} ref={ref}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    );
  };

  const cardsData = [
    { title: '[FILL: step 1 title]', desc: '[FILL: step 1 desc]' },
    { title: '[FILL: step 2 title]', desc: '[FILL: step 2 desc]' },
    { title: '[FILL: step 3 title]', desc: '[FILL: step 3 desc]' },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        <h2 data-reveal className="display-m">[FILL: methodology title]</h2>
        
        <div className={styles.desktopLayout}>
          {cardsData.map((c: any, i: number) => (
            <div key={i} className={styles[`pos${i+1}`]}>
              <Card title={c.title} desc={c.desc} />
            </div>
          ))}
        </div>

        <div className={styles.mobileSwiper}>
          <Swiper spaceBetween={24} slidesPerView={1.2}>
            {cardsData.map((c: any, i: number) => (
              <SwiperSlide key={i}>
                <Card title={c.title} desc={c.desc} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
