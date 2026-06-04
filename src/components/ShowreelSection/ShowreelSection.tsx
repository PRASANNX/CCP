import { useEffect, useRef, useState } from "react";
import styles from "./ShowreelSection.module.scss";

type ShowreelSectionProps = {
  videoSrc?: string;
  posterSrc?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

export function ShowreelSection({
  videoSrc = "[FILL: showreel video URL]",
  posterSrc = "[FILL: showreel poster URL]",
  eyebrow = "Showreel",
  title = "Films, events, content and experiences in motion",
  description =
    "A quick look at how CCP turns campaigns, events, brand stories, campus moments, and content systems into visual experiences that move people.",
  primaryCtaLabel = "Watch showreel",
  primaryCtaHref = "#showreel",
  secondaryCtaLabel = "Start a project",
  secondaryCtaHref = "#contact",
}: ShowreelSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showFallbackPlay, setShowFallbackPlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const hasVideo =
    videoSrc && videoSrc.trim() !== "" && !videoSrc.includes("[FILL:");

  const hasPoster =
    posterSrc && posterSrc.trim() !== "" && !posterSrc.includes("[FILL:");

  const getYouTubeId = (url?: string) => {
    if (!url) return null;
    try {
      const ytShort = url.match(/youtu\.be\/([A-Za-z0-9_-]{11})/);
      if (ytShort && ytShort[1]) return ytShort[1];
      const ytFull = url.match(/[?&]v=([A-Za-z0-9_-]{11})/);
      if (ytFull && ytFull[1]) return ytFull[1];
      const embed = url.match(/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/);
      if (embed && embed[1]) return embed[1];
    } catch (e) {
      /* ignore */
    }
    return null;
  };

  const youtubeId = hasVideo ? getYouTubeId(videoSrc) : null;
  const isYouTube = !!youtubeId;
  const hasDirectVideo = hasVideo && !isYouTube;

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !hasDirectVideo) return;

    video.muted = true;
    video.playsInline = true;

    const attemptAutoplay = async () => {
      try {
        await video.play();
        setIsPlaying(true);
        setShowFallbackPlay(false);
      } catch {
        setIsPlaying(false);
        setShowFallbackPlay(true);
      }
    };

    attemptAutoplay();
  }, [hasDirectVideo, videoSrc]);

  const handlePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;

    try {
      await video.play();
      setIsPlaying(true);
      setShowFallbackPlay(false);
    } catch {
      setShowFallbackPlay(true);
    }
  };

  const handleTogglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      await handlePlay();
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      className={styles.section}
      id="showreel"
      aria-labelledby="showreel-title"
      data-component="showreel"
    >
      <div className={styles.background} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content} data-reveal>
          <p className={styles.eyebrow}>{eyebrow}</p>

          <h2 id="showreel-title" className={`${styles.title} display-l`}>
            {title}
          </h2>

          <p className={`${styles.description} text-xl`}>
            {description}
          </p>

          <div className={styles.actions}>
            <a className={styles.primaryButton} href={primaryCtaHref}>
              <span>{primaryCtaLabel}</span>
              <span aria-hidden="true">→</span>
            </a>

            <a className={styles.secondaryButton} href={secondaryCtaHref}>
              <span>{secondaryCtaLabel}</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className={styles.videoCard} data-reveal>
          <div className={styles.videoShell}>
            {hasDirectVideo ? (
              <video
                ref={videoRef}
                className={styles.video}
                src={videoSrc}
                poster={hasPoster ? posterSrc : undefined}
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
                aria-label="CCP showreel video"
              />
            ) : isYouTube ? (
              <iframe
                className={styles.videoIframe}
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&modestbranding=1&rel=0&playsinline=1`}
                title="CCP showreel (YouTube)"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                loading="lazy"
                aria-label="CCP showreel video"
              />
            ) : (
              <div className={styles.videoPlaceholder}>
                [FILL: showreel video]
              </div>
            )}

            <div className={styles.videoOverlay} aria-hidden="true" />

            {showFallbackPlay && hasDirectVideo && (
              <button
                type="button"
                className={styles.playButton}
                onClick={handlePlay}
                aria-label="Play showreel"
              >
                ▶
              </button>
            )}

            {hasDirectVideo ? (
              <button
                type="button"
                className={styles.controlButton}
                onClick={handleTogglePlay}
                aria-label={isPlaying ? "Pause showreel" : "Play showreel"}
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
            ) : isYouTube ? (
              <a
                className={styles.controlButton}
                href={`https://www.youtube.com/watch?v=${youtubeId}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Open showreel on YouTube"
              >
                Open
              </a>
            ) : null}
          </div>

          <div className={styles.videoMeta}>
            <span>CCP Showreel</span>
            <span>Muted autoplay</span>
          </div>
        </div>
      </div>
    </section>
  );
}
