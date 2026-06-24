import { useState } from "react";
import { PageHero } from "../../components/common/PageHero/PageHero";
import { FilterTabs } from "../../components/common/FilterTabs/FilterTabs";
import { PortfolioGrid } from "../../components/portfolio/PortfolioGrid/PortfolioGrid";
import { PortfolioCard } from "../../components/portfolio/PortfolioCard/PortfolioCard";
import { CTASection } from "../../components/common/CTASection/CTASection";
import { caseStudies } from "../../data/caseStudies";
import { useScrollAnimations } from "../../hooks/useScrollAnimations";

const SEGMENT_TABS = [
  { id: "all", label: "All Work" },
  { id: "education", label: "Education" },
  { id: "hospitality", label: "Hospitality" },
  { id: "real-estate", label: "Real Estate" },
  { id: "events", label: "Events" },
];

export function WorkPage() {
  useScrollAnimations();
  const [activeTab, setActiveTab] = useState("all");

  const filteredCases = activeTab === "all" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.segment === activeTab);

  return (
    <main>
      <PageHero
        title="Selected Collaborations"
        description="A growing network of institutions, events, businesses, and brand teams we have created content systems for."
      />
      
      <section className="section section--white">
        <div className="container">
          <FilterTabs 
            tabs={SEGMENT_TABS} 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />
          
          <PortfolioGrid>
            {filteredCases.map(cs => (
              <PortfolioCard key={cs.id} caseStudy={cs} />
            ))}
          </PortfolioGrid>

          {filteredCases.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <p className="text-l">More work coming soon in this category.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Start a Project"
        description="Tell us what you want to build and we'll help you create a system that drives attention and trust."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </main>
  );
}
