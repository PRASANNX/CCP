import { useEffect, useRef } from "react";
import styles from "./Hero.module.scss";

type HeroProps = {
  onOpenOffcanvas?: () => void;
};

export function Hero({ onOpenOffcanvas }: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;

    if (!section || !bg) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isTouch) return;

    const handleMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      bg.style.setProperty("--mx", `${x * 24}px`);
      bg.style.setProperty("--my", `${y * 24}px`);
    };

    const handleLeave = () => {
      bg.style.setProperty("--mx", "0px");
      bg.style.setProperty("--my", "0px");
    };

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", handleLeave);

    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.hero}
      data-component="hero"
      aria-labelledby="hero-title"
    >
      <div ref={bgRef} className={styles.background} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.titleWrap} data-reveal>
          <h1 id="hero-title" className={`${styles.title} display-m`} data-hero-title>
            <span>Content</span>
            <span>that drives</span>
            <span className={styles.lineWithShape}>
              <span className={styles.shape} aria-hidden="true" />
              attention, trust
            </span>
            <span>and results</span>
          </h1>
        </div>

        <div className={styles.copyBlock}>
          <p className={`${styles.copy} text-xl`} data-hero-copy>
            CCP creates content-led marketing, event coverage, corporate films, social media systems, virtual tours, and immersive VR experiences for education, institutions, and growing brands. With 10–12 years of marketing experience, we focus on work that does more than look good — it builds visibility, credibility, and action.
          </p>

          <div className={styles.actions} data-hero-actions>
            <a href="#model" className={styles.button}>
              <span>View Offerings</span>
              <span className={styles.buttonIcon} aria-hidden="true">
                →
              </span>
            </a>

            <button
              type="button"
              className={styles.button}
              onClick={onOpenOffcanvas}
            >
              <span>Start Conversation</span>
              <span className={styles.buttonIcon} aria-hidden="true">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
