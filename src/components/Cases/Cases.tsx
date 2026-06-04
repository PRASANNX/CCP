import { useState } from "react";
import type { KeyboardEvent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Cases.module.scss";
import { reels } from "../../data/reels";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ReelCard } from "./ReelCard";

export function Cases() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveIndex(index);
    }
  };

  return (
    <section
      className={styles.section}
      data-component="cases"
      aria-labelledby="cases-title"
      onMouseLeave={() => setActiveIndex(null)}
    >
      <div className={styles.backgrounds} aria-hidden="true">
        <div className={`${styles.bgBase} ${activeIndex === null ? styles.active : ""}`} />
        {reels.map((item, index) => (
          <div
            className={`${styles.bgItem} ${activeIndex === index ? styles.active : ""}`}
            key={item.id}
            style={{ background: item.color }}
          />
        ))}
      </div>

      <div className={styles.inner}>
        <div className={styles.header} data-reveal>
          <h2 id="cases-title" className="display-l">
            Selected work across content, film & experiences
          </h2>
        </div>

        {!isMobile ? (
          <div className={styles.grid}>
            {reels.map((reel, index) => (
              <div
                key={reel.id}
                style={{ display: "contents" }}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onKeyDown={(e) => handleKeyDown(e as unknown as KeyboardEvent<HTMLElement>, index)}
                data-reveal
              >
                <ReelCard reel={reel} />
              </div>
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.08}
            pagination={{ clickable: true }}
            className={styles.swiper}
          >
            {reels.map((reel) => (
              <SwiperSlide key={reel.id}>
                <ReelCard reel={reel} isMobile={true} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className={styles.actions} data-reveal>
          <a href="#cases" className={styles.button}>
            <span>Explore Case Structure</span>
          </a>
        </div>
      </div>
    </section>
  );
}
