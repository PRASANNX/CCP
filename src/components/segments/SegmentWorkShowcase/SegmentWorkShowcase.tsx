import { Link } from "react-router-dom";
import { PortfolioGrid } from "../../portfolio/PortfolioGrid/PortfolioGrid";
import { PortfolioCard } from "../../portfolio/PortfolioCard/PortfolioCard";
import { caseStudies } from "../../../data/caseStudies";
import type { BrandCaseStudy } from "../../../data/caseStudies";
import styles from "./SegmentWorkShowcase.module.scss";

type SegmentWorkShowcaseProps = {
  segmentSlug: string;
  featuredBrands?: string[];
};

export function SegmentWorkShowcase({ segmentSlug, featuredBrands }: SegmentWorkShowcaseProps) {
  let relatedCases: BrandCaseStudy[] = [];

  if (featuredBrands && featuredBrands.length > 0) {
    relatedCases = caseStudies.filter(cs => featuredBrands.includes(cs.slug));
  } else {
    relatedCases = caseStudies.filter(cs => cs.segment === segmentSlug).slice(0, 4);
  }

  if (relatedCases.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header} data-reveal>
          <h2 className={styles.title}>Selected Work</h2>
          <Link to={`/work?segment=${segmentSlug}`} className="btn btn--outline" style={{ borderColor: 'var(--medium)', color: 'var(--black)' }}>
            View All in {segmentSlug}
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
