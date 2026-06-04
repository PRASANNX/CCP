import { useState } from "react";
import type { KeyboardEvent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./GlassCardsRandom.module.scss";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const steps = [
  {
    number: "01.",
    title: "Discover the story",
    detail: "We understand the brand, audience, and the real business goal before making anything.",
    accent: "red",
  },
  {
    number: "02.",
    title: "Create practical output",
    detail: "We produce creatives, videos, films, ads, and event assets that can be used immediately.",
    accent: "blue",
  },
  {
    number: "03.",
    title: "Scale visibility",
    detail: "We build content systems that improve reach, credibility, and conversion over time.",
    accent: "green",
  },
];

export function GlassCardsRandom() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveIndex(index);
    }
  };

  return (
    <section
      id="partnership"
      className={styles.section}
      data-component="glasscards-random"
      aria-labelledby="methodology-title"
    >
      <div className={styles.inner}>
        <div className={styles.mediaCard} data-reveal>
          <div className={styles.mediaTexture} aria-hidden="true" />
          <div className={styles.mediaOverlay} aria-hidden="true" />

          <h2 id="methodology-title" className={`${styles.mediaTitle} display-s`}>
            A content system that works
          </h2>

          <a href="#" className={styles.mediaButton}>
            <span>Our Approach</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {!isMobile ? (
          <div className={styles.processGrid}>
            {steps.map((step, index) => {
              const isActive = activeIndex === index;

              return (
                <article
                  key={step.number}
                  tabIndex={0}
                  className={`${styles.processCard} ${isActive ? styles.active : ""}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  data-reveal
                >
                  <div className={styles.processTop}>
                    <span className={styles.number}>{step.number}</span>
                    <span
                      className={`${styles.dot} ${styles[step.accent]}`}
                      aria-hidden="true"
                    />
                  </div>

                  <div className={styles.processBottom}>
                    <h3 className="display-xxs">{step.title}</h3>
                    <p className="text-s">{step.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.08}
            spaceBetween={16}
            pagination={{ clickable: true }}
            className={styles.swiper}
          >
            {steps.map((step) => (
              <SwiperSlide key={step.number}>
                <article className={styles.processCard}>
                  <div className={styles.processTop}>
                    <span className={styles.number}>{step.number}</span>
                    <span className={`${styles.dot} ${styles[step.accent]}`} />
                  </div>
                  <div className={styles.processBottom}>
                    <h3 className="display-xxs">{step.title}</h3>
                    <p className="text-s">{step.detail}</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
