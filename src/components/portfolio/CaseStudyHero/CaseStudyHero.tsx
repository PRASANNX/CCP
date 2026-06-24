import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { BrandCaseStudy } from "../../../data/caseStudies";
import styles from "./CaseStudyHero.module.scss";

type CaseStudyHeroProps = {
  caseStudy: BrandCaseStudy;
};

export function CaseStudyHero({ caseStudy }: CaseStudyHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current || !bgRef.current) return;
    
    // Parallax effect
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Reveal animations
    gsap.fromTo(
      containerRef.current.querySelectorAll("[data-reveal]"),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  return (
    <section className={styles.hero} ref={containerRef}>
      {caseStudy.heroMedia ? (
        <img
          ref={bgRef}
          src={caseStudy.heroMedia.src}
          alt={caseStudy.brandName}
          className={styles.bgMedia}
        />
      ) : (
        <div ref={bgRef} className={styles.bgMedia} style={{ background: "var(--dark)" }} />
      )}
      <div className={styles.overlay} />
      
      <div className={`container ${styles.inner}`}>
        <span className={styles.segment} data-reveal>{caseStudy.segment}</span>
        <h1 className={styles.title} data-reveal>{caseStudy.brandName}</h1>
        <p className={styles.description} data-reveal>{caseStudy.shortDescription}</p>
      </div>
    </section>
  );
}
