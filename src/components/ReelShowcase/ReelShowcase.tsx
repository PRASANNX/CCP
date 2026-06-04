import styles from "./ReelShowcase.module.scss";
import { reels } from "../../data/reels";

export function ReelShowcase() {
  return (
    <section
      className={styles.section}
      aria-labelledby="reel-showcase-title"
      data-component="reel-showcase"
    >
      <div className={styles.header} data-reveal>
        <p className={styles.eyebrow}>Our Work</p>
        <h2 id="reel-showcase-title" className={styles.title}>
          See Our Process in Action
        </h2>
        <p className={styles.description}>
          Watch how we bring stories to life across different formats and industries.
        </p>
      </div>

      <div className={styles.reelsGrid}>
        {reels.map((reel) => (
          <a
            key={reel.id}
            href={reel.url}
            target="_blank"
            rel="noreferrer"
            className={styles.reelCard}
            aria-label={`Watch ${reel.title} reel on Instagram`}
            data-reveal
          >
            <div className={styles.reelThumbnail}>
              <div className={styles.playButton} aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className={styles.reelInfo}>
              <h3 className={styles.reelTitle}>{reel.title}</h3>
              <p className={styles.reelLabel}>View on Instagram →</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
