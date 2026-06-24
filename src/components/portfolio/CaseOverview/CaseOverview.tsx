import type { BrandCaseStudy } from "../../../data/caseStudies";
import styles from "./CaseOverview.module.scss";

type CaseOverviewProps = {
  caseStudy: BrandCaseStudy;
};

export function CaseOverview({ caseStudy }: CaseOverviewProps) {
  return (
    <section className={styles.overview}>
      <div className="container">
        <div className={styles.grid}>
          {caseStudy.challenge && (
            <div className={styles.col} data-reveal>
              <h3 className={styles.label}>The Challenge</h3>
              <p className={styles.content}>{caseStudy.challenge}</p>
            </div>
          )}
          
          <div className={styles.col} data-reveal>
            <h3 className={styles.label}>Our Solution</h3>
            <p className={styles.content}>{caseStudy.solution || caseStudy.overview}</p>
          </div>
          
          {caseStudy.impact && (
            <div className={styles.col} data-reveal>
              <h3 className={styles.label}>The Impact</h3>
              <p className={styles.content}>{caseStudy.impact}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
