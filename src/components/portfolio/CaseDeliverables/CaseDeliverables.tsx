import type { BrandCaseStudy } from "../../../data/caseStudies";
import styles from "./CaseDeliverables.module.scss";

type CaseDeliverablesProps = {
  caseStudy: BrandCaseStudy;
};

export function CaseDeliverables({ caseStudy }: CaseDeliverablesProps) {
  if (!caseStudy.deliverables?.length && !caseStudy.metrics?.length) return null;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        {caseStudy.deliverables?.length > 0 && (
          <div data-reveal>
            <h2 className={styles.title}>Deliverables</h2>
            <div className={styles.tags}>
              {caseStudy.deliverables.map((item) => (
                <span key={item} className={styles.tag}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {caseStudy.metrics && caseStudy.metrics.length > 0 && (
          <div data-reveal>
            <h2 className={styles.title}>The Results</h2>
            <div className={styles.metrics}>
              {caseStudy.metrics.map((metric, i) => (
                <div key={i} className={styles.metricCard}>
                  <span className={styles.metricValue}>{metric.value}</span>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
