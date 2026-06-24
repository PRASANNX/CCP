import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import type { SegmentPageData } from "../../../data/segments";
import styles from "./SegmentHero.module.scss";

type SegmentHeroProps = {
  segment: SegmentPageData;
};

export function SegmentHero({ segment }: SegmentHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const elements = sectionRef.current?.querySelectorAll("[data-hero-reveal]");
      if (elements) {
        gsap.fromTo(
          elements,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.15,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.noise} aria-hidden="true" />

      <div className={styles.inner}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb" data-hero-reveal>
          <Link to="/segments">Segments</Link>
          <span className={styles.breadcrumbSeparator} aria-hidden="true">{" / "}</span>
          <span className={styles.breadcrumbCurrent}>{segment.shortTitle}</span>
        </nav>

        <h1 className={styles.title} data-hero-reveal>
          {segment.title}
        </h1>

        <h2 className={styles.statement} data-hero-reveal>
          {segment.heroStatement}
        </h2>

        <p className={styles.description} data-hero-reveal>
          {segment.description}
        </p>
      </div>
    </section>
  );
}
