import { useState } from "react";
import type { KeyboardEvent } from "react";
import styles from "./FeatureCards.module.scss";
import { featureCards } from "../../data/featureCards";

export function FeatureCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    index: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveIndex(index);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setActiveIndex((prev) =>
        prev === featureCards.length - 1 ? 0 : prev + 1
      );
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActiveIndex((prev) =>
        prev === 0 ? featureCards.length - 1 : prev - 1
      );
    }
  };

  return (
    <section
      className={styles.section}
      data-component="cards"
      aria-labelledby="feature-cards-title"
    >
      <div className={styles.headingWrap} data-reveal>
        <h2 id="feature-cards-title" className={`${styles.heading} display-s`}>
          <span>What makes</span>
          <span>CCP</span>
          <span className={styles.headingLineWithShape}>
            <span className={styles.shape} aria-hidden="true" />
            different
          </span>
        </h2>
      </div>

      <div
        className={styles.cards}
        role="list"
        aria-label="What makes CCP different"
      >
        {featureCards.map((card, index) => {
          const isActive = activeIndex === index;

          return (
            <article
              key={card.title}
              className={`${styles.card} ${isActive ? styles.active : ""}`}
              role="listitem"
              data-reveal
            >
              <button
                type="button"
                className={styles.cardButton}
                aria-pressed={isActive}
                aria-label={`${card.title} — ${card.detail}`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <div className={styles.cardIndex}>
                  {String(index + 1).padStart(2, "0")}.
                </div>

                <div className={styles.cardContent}>
                  <h3 className={`${styles.cardTitle} display-xs`}>
                    {card.title}
                  </h3>

                  <p className={`${styles.cardSubtitle} text-s`}>
                    {card.subtitle}
                  </p>

                  <div className={styles.cardDetailWrap}>
                    <p className={`${styles.cardDetail} text-s`}>
                      {card.detail}
                    </p>
                  </div>
                </div>

                <span className={styles.cardArrow} aria-hidden="true">
                  →
                </span>
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
