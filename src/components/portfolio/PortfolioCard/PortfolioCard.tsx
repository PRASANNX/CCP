import { Link } from "react-router-dom";
import type { BrandCaseStudy } from "../../../data/caseStudies";
import styles from "./PortfolioCard.module.scss";

type PortfolioCardProps = {
  caseStudy: BrandCaseStudy;
};

export function PortfolioCard({ caseStudy }: PortfolioCardProps) {
  const orientationClass = caseStudy.heroMedia?.orientation 
    ? styles[caseStudy.heroMedia.orientation] 
    : "";

  return (
    <Link to={`/work/${caseStudy.slug}`} className={styles.card} data-reveal>
      <div className={`${styles.mediaWrap} ${orientationClass}`}>
        {caseStudy.heroMedia ? (
          <img
            src={caseStudy.heroMedia.src}
            alt={caseStudy.brandName}
            className={styles.image}
            loading="lazy"
          />
        ) : (
          <div className={styles.image} style={{ background: "var(--medium)" }} />
        )}
        <div className={styles.overlay}>
          <span className={styles.viewBtn}>View Project &rarr;</span>
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.brandName}>{caseStudy.brandName}</h3>
        <span className={styles.segment}>{caseStudy.segment}</span>
        {caseStudy.services && (
          <div className={styles.tags}>
            {caseStudy.services.slice(0, 3).map((service) => (
              <span key={service} className={styles.tag}>
                {service}
              </span>
            ))}
            {caseStudy.services.length > 3 && (
              <span className={styles.tag}>+{caseStudy.services.length - 3}</span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
