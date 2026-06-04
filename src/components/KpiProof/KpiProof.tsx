import { useState, useRef, useEffect, useCallback } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./KpiProof.module.scss";
import { metrics } from "../../data/metrics";
import type { MetricCard } from "../../data/metrics";

gsap.registerPlugin(ScrollTrigger);

/* ─── SVG path helper ─── */
function createPath(data: number[], width = 640, height = 150): string {
  if (!data.length) return `M 0 ${height} L ${width} ${height}`;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  return data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((value - min) / range) * height;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

function createAreaPath(data: number[], width = 640, height = 150): string {
  if (!data.length) return "";
  const linePath = createPath(data, width, height);
  return `${linePath} L ${width} ${height} L 0 ${height} Z`;
}

/* ─── Trend badge ─── */
function TrendBadge({ trend, direction }: { trend?: string; direction?: MetricCard["trendDirection"] }) {
  if (!trend) return null;

  const cls =
    direction === "up"
      ? styles.trendUp
      : direction === "down"
        ? styles.trendDown
        : styles.trendNeutral;

  return (
    <span className={`${styles.trend} ${cls}`} aria-label={`Trend: ${trend}`}>
      {trend}
    </span>
  );
}

/* ─── Single KPI card ─── */
function KpiCard({
  metric,
  isActive,
  onActivate,
  onKeyNav,
}: {
  metric: MetricCard;
  isActive: boolean;
  onActivate: () => void;
  onKeyNav: (e: ReactKeyboardEvent) => void;
}) {
  const pathRef = useRef<SVGPathElement>(null);
  const svgW = 640;
  const svgH = 150;

  const linePath = createPath(metric.chartData, svgW, svgH);
  const areaPath = createAreaPath(metric.chartData, svgW, svgH);

  // Animate dash on activation
  useEffect(() => {
    const el = pathRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isActive) {
      const len = el.getTotalLength();
      el.style.setProperty("--path-length", `${len}`);
      if (!prefersReducedMotion) {
        el.classList.remove(styles.chartPathActive);
        // Force reflow
        void el.getBoundingClientRect();
        el.classList.add(styles.chartPathActive);
      }
    }
  }, [isActive]);

  return (
    <div
      className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      aria-label={`${metric.label}: ${metric.value}`}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      onKeyDown={onKeyNav}
    >
      <div className={styles.cardTop}>
        <p className={styles.label}>{metric.label}</p>
        <div className={styles.metricRow}>
          <span className={styles.metricValue}>{metric.value}</span>
          <TrendBadge trend={metric.trend} direction={metric.trendDirection} />
        </div>
      </div>

      <div className={styles.chartWrap}>
        <svg
          className={styles.chartSvg}
          viewBox={`0 0 ${svgW} ${svgH}`}
          preserveAspectRatio="none"
          role="img"
          aria-label={`${metric.chartLabel} performance chart`}
        >
          {areaPath && <path className={styles.chartArea} d={areaPath} />}
          <path
            ref={pathRef}
            className={styles.chartPath}
            d={linePath}
          />
          <text
            className={styles.chartLabel}
            x={svgW - 4}
            y={14}
            textAnchor="end"
          >
            {metric.chartLabel}
          </text>
        </svg>
      </div>

      <div
        className={`${styles.cardBottom} ${isActive ? styles.cardBottomVisible : ""}`}
        aria-hidden={!isActive}
      >
        <p className={styles.cardDescription}>{metric.description}</p>
      </div>
    </div>
  );
}

/* ─── Main section ─── */
export function KpiProof() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll("[data-reveal]"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 78%" },
        }
      );

      gsap.fromTo(
        section.querySelectorAll("[role='button']"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 68%" },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleKeyDown = useCallback(
    (e: ReactKeyboardEvent, index: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActiveIndex(index);
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((index + 1) % metrics.length);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((index - 1 + metrics.length) % metrics.length);
      }
    },
    []
  );

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="kpi-proof-title"
      data-component="kpi-proof"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow} data-reveal>
            Performance
          </p>

          <h2 id="kpi-proof-title" className={styles.title} data-reveal>
            <span className={styles.headingLine}>Proof</span>
            <span className={styles.headingLine}>in</span>
            <span className={styles.headingLine}>outcomes</span>
          </h2>

          <p className={styles.description} data-reveal>
            Every campaign, event, film, and content system should leave behind
            measurable proof — reach, views, engagement, saves, shares,
            enquiries, and brand lift. CCP structures content so performance can
            be tracked, understood, and improved.
          </p>
        </div>

        <div className={styles.grid}>
          {metrics.map((metric, index) => (
            <KpiCard
              key={metric.id}
              metric={metric}
              isActive={activeIndex === index}
              onActivate={() => setActiveIndex(index)}
              onKeyNav={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
