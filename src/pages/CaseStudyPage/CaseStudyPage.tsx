import { useParams, Link } from "react-router-dom";
import { useScrollAnimations } from "../../hooks/useScrollAnimations";
import { caseStudies } from "../../data/caseStudies";
import { CaseStudyHero } from "../../components/portfolio/CaseStudyHero/CaseStudyHero";
import { CaseOverview } from "../../components/portfolio/CaseOverview/CaseOverview";
import { CaseDeliverables } from "../../components/portfolio/CaseDeliverables/CaseDeliverables";
import { CaseMediaGallery } from "../../components/portfolio/CaseMediaGallery/CaseMediaGallery";
import { RelatedWork } from "../../components/portfolio/RelatedWork/RelatedWork";
import { CTASection } from "../../components/common/CTASection/CTASection";
import styles from "./CaseStudyPage.module.scss";

export function CaseStudyPage() {
  useScrollAnimations();
  const { brandSlug } = useParams();

  const caseStudy = caseStudies.find(cs => cs.slug === brandSlug);

  if (!caseStudy) {
    return (
      <main className={styles.notFound}>
        <div className="container" style={{ padding: "200px 0", textAlign: "center" }}>
          <h1 className="display-m">Case Study Not Found</h1>
          <p className="text-l" style={{ marginTop: "24px", marginBottom: "48px" }}>
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/work" className="btn btn--dark">Back to Work</Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <CaseStudyHero caseStudy={caseStudy} />
      <CaseOverview caseStudy={caseStudy} />
      <CaseDeliverables caseStudy={caseStudy} />
      <CaseMediaGallery gallery={caseStudy.gallery} />
      <RelatedWork 
        currentId={caseStudy.id} 
        segment={caseStudy.segment} 
        relatedSlugs={caseStudy.relatedBrands} 
      />
      <CTASection
        title="Start a Project"
        description="Tell us what you want to build and we'll help you create a system that drives attention and trust."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </main>
  );
}
