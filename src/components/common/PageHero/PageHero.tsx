import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import styles from "./PageHero.module.scss";

type Breadcrumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  titleLines?: string[];
  description?: string;
  breadcrumbs?: Breadcrumb[];
};

export function PageHero({
  eyebrow,
  title,
  titleLines,
  description,
  breadcrumbs,
}: PageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const elements = section.querySelectorAll("[data-hero-reveal]");
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
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.noise} aria-hidden="true" />

      <div className={styles.inner}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className={styles.breadcrumb} aria-label="Breadcrumb" data-hero-reveal>
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <span key={crumb.label}>
                  {index > 0 && (
                    <span className={styles.breadcrumbSeparator} aria-hidden="true">
                      {" / "}
                    </span>
                  )}
                  {crumb.href && !isLast ? (
                    <Link to={crumb.href}>{crumb.label}</Link>
                  ) : (
                    <span className={isLast ? styles.breadcrumbCurrent : undefined}>
                      {crumb.label}
                    </span>
                  )}
                </span>
              );
            })}
          </nav>
        )}

        {eyebrow && (
          <p className={styles.eyebrow} data-hero-reveal>
            {eyebrow}
          </p>
        )}

        <h1 className={styles.title} data-hero-reveal>
          {titleLines
            ? titleLines.map((line, i) => (
                <span key={i} className={styles.headingLine}>
                  {line}
                </span>
              ))
            : title}
        </h1>

        {description && (
          <p className={styles.description} data-hero-reveal>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
