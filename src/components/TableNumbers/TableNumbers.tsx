import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./TableNumbers.module.scss";
import { metrics } from "../../data/metrics";

gsap.registerPlugin(ScrollTrigger);

// Helper to determine if we should animate the number
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

function createPath(data: number[], width = 900, height = 190) {
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

function getPoint(data: number[], index: number, width = 900, height = 190) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const value = data[index];

  return {
    x: (index / (data.length - 1)) * width,
    y: height - ((value - min) / range) * height,
  };
}

// Generate deterministic dummy chart data for our metrics to fulfill the analytics visual
const getChartData = (index: number) => {
  const datasets = [
    [5, 6, 4, 8, 7, 5, 6, 5, 9, 8, 7, 120, 110, 90, 75, 62, 76, 112, 130],
    [1, 2, 1, 3, 8, 45, 89, 20, 42, 56, 12, 67, 30, 40, 50, 18, 24, 50, 82],
    [3, 4, 7, 12, 25, 110, 4, 3, 8, 14, 110, 70, 20, 10, 40, 60, 80, 90],
    [10, 15, 20, 25, 30, 45, 60, 80, 120, 150, 180, 250]
  ];
  return datasets[index % datasets.length];
};

type CardProps = {
  metric: typeof metrics[0];
  index: number;
  isActive: boolean;
  onActivate: () => void;
};

function MotionAnalyticsCard({ metric, index, isActive, onActivate }: CardProps) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const valueRef = useRef<HTMLDivElement | null>(null);

  const data = getChartData(index);
  const path = createPath(data);
  const lastPoint = getPoint(data, data.length - 1);
  
  // The original string value
  const rawValue = metric.value;
  const isLongText = rawValue.length > 12;

  // Chart axes placeholders
  const yLabels = ["High", "Med", "Low", "0"];
  const xLabels = ["Q1", "Q2", "Q3", "Q4"];
  const trend = [12.4, 44.4, 21.6, 85.2][index % 4];

  useEffect(() => {
    const pathEl = pathRef.current;
    if (!pathEl) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const length = pathEl.getTotalLength();

    pathEl.style.strokeDasharray = `${length}`;
    pathEl.style.strokeDashoffset = prefersReducedMotion ? "0" : `${length}`;

    if (prefersReducedMotion) return;

    pathEl.animate(
      [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
      {
        duration: 1200,
        easing: "cubic-bezier(.16, 1, .3, 1)",
        fill: "forwards",
      }
    );
  }, [isActive]);

  // Number counting animation (scroll triggered)
  useEffect(() => {
    const el = valueRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const parsed = parseMetric(rawValue);
    if (!parsed) return; // don't animate non-numeric strings

    const obj = { value: 0 };

    const ctx = gsap.context(() => {
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
    }, el);

    return () => ctx.revert();
  }, [rawValue]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onActivate();
    }
  };

  return (
    <button
      type="button"
      className={`${styles.card} ${isActive ? styles.active : ""}`}
      aria-pressed={isActive}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.note}>Tap / hover to replay chart</div>

      <div className={styles.cardTop}>
        <div className={styles.metricLabel}>
          {metric.label}
          <span className={styles.infoDot} aria-label="More information">
            i
          </span>
        </div>
      </div>

      <div className={styles.metricMain}>
        <div
          ref={valueRef}
          className={`${styles.metricValue} ${isLongText ? styles.metricValueLong : ''}`}
          data-metric-value
          data-value={rawValue}
        >
          {rawValue}
        </div>

        <div className={`${styles.trend} ${styles.up}`}>
          <span>↑</span>
          <span>{trend}% YoY</span>
        </div>
      </div>

      <div className={styles.chartWrap}>
        <svg
          className={styles.chart}
          viewBox="0 0 900 280"
          role="img"
          aria-label={`${metric.label} trend chart`}
        >
          {[20, 80, 140, 200].map((y) => (
            <line key={y} className={styles.gridLine} x1="80" y1={y} x2="890" y2={y} />
          ))}

          {yLabels.map((label, i) => (
            <text key={label} className={styles.axisLabel} x="0" y={28 + i * 60}>
              {label}
            </text>
          ))}

          {xLabels.map((label, i) => (
            <text
              key={label}
              className={styles.axisLabel}
              x={80 + i * (800 / (xLabels.length - 1))}
              y="250"
            >
              {label}
            </text>
          ))}

          <g transform="translate(80, 20)">
            <path ref={pathRef} className={styles.chartPath} d={path} />
            <circle className={styles.chartDot} cx={lastPoint.x} cy={lastPoint.y} r="8" />
          </g>
        </svg>

        <div className={styles.legend}>
          <span className={styles.legendLine} />
          <span>{metric.imageAlt}</span>
        </div>
      </div>
    </button>
  );
}

export function TableNumbers() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section} data-component="table-numbers" aria-labelledby="proof-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 id="proof-title" className={`${styles.heading} display-l`} data-reveal>
            <span>Proof</span>
            <span className={styles.headingLineWithShape}>
              <span className={styles.shape} aria-hidden="true" />
              in
            </span>
            <span>outcomes</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {metrics.map((metric, index) => (
            <MotionAnalyticsCard
              key={`${metric.label}-${index}`}
              metric={metric}
              index={index}
              isActive={activeIndex === index}
              onActivate={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
