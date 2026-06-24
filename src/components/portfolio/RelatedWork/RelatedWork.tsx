import { Link } from "react-router-dom";
import { PortfolioGrid } from "../PortfolioGrid/PortfolioGrid";
import { PortfolioCard } from "../PortfolioCard/PortfolioCard";
import { caseStudies } from "../../../data/caseStudies";
import type { BrandCaseStudy } from "../../../data/caseStudies";
import styles from "./RelatedWork.module.scss";

type RelatedWorkProps = {
  currentId: string;
  segment?: string;
  relatedSlugs?: string[];
};

export function RelatedWork({ currentId, segment, relatedSlugs }: RelatedWorkProps) {
  let relatedCases: BrandCaseStudy[] = [];

  if (relatedSlugs && relatedSlugs.length > 0) {
    relatedCases = caseStudies.filter(cs => relatedSlugs.includes(cs.slug));
  } else if (segment) {
    relatedCases = caseStudies.filter(cs => cs.segment === segment && cs.id !== currentId);
  }

  if (relatedCases.length === 0) {
    // Fallback to random if none found in segment
    relatedCases = caseStudies.filter(cs => cs.id !== currentId).slice(0, 2);
  } else {
    relatedCases = relatedCases.slice(0, 2);
  }

  if (relatedCases.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header} data-reveal>
          <h2 className={styles.title}>More Work</h2>
          <Link to="/work" className="btn btn--outline" style={{ borderColor: 'var(--medium)', color: 'var(--black)' }}>
            View All Work
          </Link>
        </div>
        
        <PortfolioGrid>
          {relatedCases.map((cs) => (
            <PortfolioCard key={cs.id} caseStudy={cs} />
          ))}
        </PortfolioGrid>
      </div>
    </section>
  );
}
