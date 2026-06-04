import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./TableNumbers.module.scss";
import { metrics } from "../../data/metrics";

gsap.registerPlugin(ScrollTrigger);

function parseMetric(value: string) {
  if (!/^\$?\d+(\.\d+)?[A-Za-z+%]*$/.test(value)) {
    return null;
  }

  const match = value.match(/^(\$)?(\d+(?:\.\d+)?)(.*)$/);

  if (!match) return null;

  return {
    prefix: match[1] ?? "",
    number: Number(match[2]),
    suffix: match[3] ?? "",
  };
}

export function TableNumbers() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      section.querySelectorAll<HTMLElement>("[data-metric-value]").forEach((el) => {
        const raw = el.dataset.value ?? "";
        const parsed = parseMetric(raw);

        if (!parsed) return;

        const obj = { value: 0 };

        gsap.to(obj, {
          value: parsed.number,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = `${parsed.prefix}${Math.round(obj.value)}${parsed.suffix}`;
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      data-component="table-numbers"
      aria-labelledby="proof-title"
    >
      <div className={styles.inner}>
        <h2 id="proof-title" className={`${styles.heading} display-l`} data-reveal>
          <span>Proof</span>
          <span className={styles.headingLineWithShape}>
            <span className={styles.shape} aria-hidden="true" />
            in
          </span>
          <span>outcomes</span>
        </h2>

        <div className={styles.table}>
          {metrics.map((metric) => (
            <article className={styles.row} key={metric.label} data-number-row>
              <h3 className={`${styles.label} text-m`}>{metric.label}</h3>

              <div
                className={styles.value}
                data-metric-value
                data-value={metric.value}
              >
                {metric.value}
              </div>

              <div className={styles.media} aria-label={metric.imageAlt}>
                <div className={styles.mediaPlaceholder}>
                  {metric.imageAlt}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
