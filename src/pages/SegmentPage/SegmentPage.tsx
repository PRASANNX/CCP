import { useParams, Link } from "react-router-dom";
import { useScrollAnimations } from "../../hooks/useScrollAnimations";
import { segmentsData } from "../../data/segments";
import { SegmentHero } from "../../components/segments/SegmentHero/SegmentHero";
import { ProblemSolution } from "../../components/segments/ProblemSolution/ProblemSolution";
import { SegmentServices } from "../../components/segments/SegmentServices/SegmentServices";
import { SegmentWorkShowcase } from "../../components/segments/SegmentWorkShowcase/SegmentWorkShowcase";
import { FAQAccordion } from "../../components/common/FAQAccordion/FAQAccordion";
import { CTASection } from "../../components/common/CTASection/CTASection";
import styles from "./SegmentPage.module.scss";

export function SegmentPage() {
  useScrollAnimations();
  const { segmentSlug } = useParams();

  const segment = segmentsData.find(s => s.slug === segmentSlug);

  if (!segment) {
    return (
      <main className={styles.notFound}>
        <div className="container" style={{ padding: "200px 0", textAlign: "center" }}>
          <h1 className="display-m">Segment Not Found</h1>
          <p className="text-l" style={{ marginTop: "24px", marginBottom: "48px" }}>
            The industry page you're looking for doesn't exist.
          </p>
          <Link to="/segments" className="btn btn--dark">Back to Segments</Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <SegmentHero segment={segment} />
      <ProblemSolution segment={segment} />
      <SegmentServices segment={segment} />
      <SegmentWorkShowcase segmentSlug={segment.slug} featuredBrands={segment.featuredBrands} />
      
      {segment.faqs && segment.faqs.length > 0 && (
        <section className="section section--white">
          <div className="container" data-reveal>
            <h2 className="display-s" style={{ textAlign: "center", marginBottom: "48px" }}>
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={segment.faqs} />
          </div>
        </section>
      )}

      <CTASection
        title={segment.cta.title}
        description={segment.cta.description}
        buttonLabel={segment.cta.buttonLabel}
        buttonHref="/contact"
      />
    </main>
  );
}
