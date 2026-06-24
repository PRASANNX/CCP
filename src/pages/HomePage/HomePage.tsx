import { useOutletContext } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { LogoCarousel } from "../../components/LogoCarousel/LogoCarousel";
import { FounderProfile } from "../../components/FounderProfile/FounderProfile";
import { founderProfile } from "../../data/founderProfile";
import { ShowreelSection } from "../../components/ShowreelSection/ShowreelSection";
import { GlassCardsRandom } from "../../components/GlassCardsRandom/GlassCardsRandom";
import { BrandsWorkedWith } from "../../components/BrandsWorkedWith/BrandsWorkedWith";
import { FeatureCards } from "../../components/FeatureCards/FeatureCards";
import { KpiProof } from "../../components/KpiProof/KpiProof";
import { Cases } from "../../components/Cases/Cases";
import { GlassCards } from "../../components/GlassCards/GlassCards";
import { Composition } from "../../components/Composition/Composition";
import { useScrollAnimations } from "../../hooks/useScrollAnimations";

type ContextType = {
  openOffcanvas: () => void;
};

export function HomePage() {
  useScrollAnimations();
  const { openOffcanvas } = useOutletContext<ContextType>();

  return (
    <main id="top">
      <Hero onOpenOffcanvas={openOffcanvas} />
      <LogoCarousel />
      <FounderProfile founder={founderProfile} />
      <ShowreelSection
        videoSrc="https://www.youtube.com/watch?v=ip7viNZ7YRU"
        posterSrc="/assets/showreel/poster.jpg"
      />
      <GlassCardsRandom />
      <BrandsWorkedWith />
      <FeatureCards />
      <KpiProof />
      <Cases />
      <GlassCards />
      <Composition />
    </main>
  );
}
