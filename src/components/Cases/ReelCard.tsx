import type { FC } from "react";
import { useState, useEffect } from "react";
import type { Reel } from "../../data/reels";
import styles from "./Cases.module.scss";

interface ReelCardProps {
  reel: Reel;
  isMobile?: boolean;
}

export const ReelCard: FC<ReelCardProps> = ({ reel, isMobile = false }) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchThumbnail = async () => {
      try {
        const response = await fetch(
          `https://api.microlink.io/?url=https://www.instagram.com/reel/${reel.shortcode}/`,
          {
            headers: {
              "Accept": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          if (data.data?.image?.url) {
            setThumbnail(data.data.image.url);
          }
        }
      } catch (error) {
        console.warn(`Failed to fetch thumbnail for reel ${reel.id}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchThumbnail();
  }, [reel.id, reel.shortcode]);

  if (isMobile) {
    return (
      <a
        href={reel.url}
        target="_blank"
        rel="noreferrer"
        className={styles.reelCardMobile}
      >
        <div className={styles.reelThumbnailMobile} style={{ background: reel.color }}>
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={reel.title}
              className={styles.thumbnailImageMobile}
              loading="lazy"
            />
          ) : (
            <div className={styles.reelIconMobile}>{reel.icon}</div>
          )}
          <div className={styles.playButton} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <h3 className="display-xs" style={{ color: "var(--black)", marginTop: "12px" }}>
          {reel.title}
        </h3>
        {reel.caption ? (
          <p className={styles.reelLabel} style={{ color: "var(--black)", marginTop: 8, textTransform: "none" }}>
            {reel.caption}
          </p>
        ) : null}
      </a>
    );
  }

  return (
    <a
      href={reel.url}
      target="_blank"
      rel="noreferrer"
      className={styles.reelCard}
      aria-label={`Watch ${reel.title} reel on Instagram`}
      data-reveal
    >
      <div className={styles.reelThumbnail} style={{ background: reel.color }}>
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={reel.title}
            className={styles.thumbnailImage}
            loading="lazy"
          />
        ) : (
          <div className={styles.reelIcon}>{reel.icon}</div>
        )}
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
        <p className={styles.reelLabel} style={{ textTransform: "none" }}>{reel.caption}</p>
      </div>
    </a>
  );
};
