import { useState } from "react";
import type { KeyboardEvent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Cases.module.scss";
import { cases } from "../../data/cases";
import { useMediaQuery } from "../../hooks/useMediaQuery";

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
        {cases.map((item, index) => (
          <div
            className={`${styles.bgItem} ${activeIndex === index ? styles.active : ""}`}
            key={item.title}
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
            {cases.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <article
                  key={item.title}
                  tabIndex={0}
                  className={`${styles.card} ${isActive ? styles.active : ""}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  data-reveal
                >
                  <div className={styles.cardInner}>
                    <p className="text-s" style={{ opacity: 0.8 }}>
                      {item.category}
                    </p>
                    <h3 className="display-xs" style={{ marginTop: "auto" }}>
                      {item.title}
                    </h3>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.08}
            pagination={{ clickable: true }}
            className={styles.swiper}
          >
            {cases.map((item) => (
              <SwiperSlide key={item.title}>
                <article className={styles.cardMobile} style={{ background: item.color }}>
                  <div className={styles.cardInner}>
                    <p className="text-s" style={{ opacity: 0.9 }}>
                      {item.category}
                    </p>
                    <h3 className="display-xs" style={{ marginTop: "auto", color: "var(--black)" }}>
                      {item.title}
                    </h3>
                  </div>
                </article>
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
