import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./BrandsWorkedWith.module.scss";
import { brands } from "../../data/brands";

gsap.registerPlugin(ScrollTrigger);

function isValidLogo(src?: string) {
  return Boolean(src && !src.includes("[FILL:"));
}

export function BrandsWorkedWith() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        section.querySelectorAll("[data-reveal]"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
          },
        }
      );

      // Stagger brand cards
      gsap.fromTo(
        section.querySelectorAll("[data-brand-card]"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section.querySelector("[data-brand-grid]"),
            start: "top 82%",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="brands-worked-with-title"
      data-component="brands-worked-with"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow} data-reveal>
            Selected collaborations
          </p>

          <h2
            id="brands-worked-with-title"
            className={styles.title}
            data-reveal
          >
            <span className={styles.headingLine}>Brands</span>
            <span className={styles.headingLine}>we have</span>
            <span className={styles.lineWithShape}>
              <span className={styles.shape} aria-hidden="true" />
              worked with
            </span>
          </h2>

          <p className={styles.summary} data-reveal>
            A growing network of institutions, events, businesses, and brand
            teams we have created content systems for.
          </p>
        </div>

        <div className={styles.grid} role="list" data-brand-grid>
          {brands.map((brand) => {
            const hasValidUrl =
              brand.website && !brand.website.includes("[FILL:");
            const CardTag = hasValidUrl ? "a" : "div";

            const cardProps = hasValidUrl
              ? {
                  href: brand.website,
                  target: "_blank" as const,
                  rel: "noreferrer",
                  "aria-label": `${brand.name} website`,
                }
              : {};

            return (
              <CardTag
                key={brand.id}
                className={styles.card}
                role="listitem"
                data-brand-card
                {...cardProps}
              >
                <div className={styles.logoWrap}>
                  {isValidLogo(brand.logoSrc) ? (
                    <img
                      className={styles.logo}
                      src={brand.logoSrc}
                      alt={`${brand.name} logo`}
                      loading="lazy"
                    />
                  ) : (
                    <span className={styles.logoPlaceholder}>
                      {brand.name.replace("[FILL: ", "").replace("]", "")}
                    </span>
                  )}
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.brandName}>
                    {brand.name.replace("[FILL: ", "").replace("]", "")}
                  </span>
                  {brand.category && !brand.category.includes("[FILL:") && (
                    <span className={styles.category}>{brand.category}</span>
                  )}
                </div>
              </CardTag>
            );
          })}
        </div>

        <p className={styles.note} data-reveal>
          Logos and brand names shown with permission. Some collaborations are
          under NDA and not listed.
        </p>
      </div>
    </section>
  );
}
