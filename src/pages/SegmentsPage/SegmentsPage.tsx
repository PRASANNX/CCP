import { PageHero } from "../../components/common/PageHero/PageHero";
import { SegmentGrid } from "../../components/segments/SegmentGrid/SegmentGrid";
import { SegmentCard } from "../../components/segments/SegmentCard/SegmentCard";
import { CTASection } from "../../components/common/CTASection/CTASection";
import { segmentsData } from "../../data/segments";
import { useScrollAnimations } from "../../hooks/useScrollAnimations";

export function SegmentsPage() {
  useScrollAnimations();

  return (
    <main>
      <PageHero
        title="Industries We Serve"
        description="We build content systems specifically designed for the unique challenges of your sector."
      />
      
      <section className="section section--white">
        <div className="container">
          <SegmentGrid>
            {segmentsData.map(segment => (
              <SegmentCard key={segment.id} segment={segment} />
            ))}
          </SegmentGrid>
        </div>
      </section>

      <CTASection
        title="Find your niche"
        description="Don't see your industry listed? We build custom content systems for any vertical."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </main>
  );
}
