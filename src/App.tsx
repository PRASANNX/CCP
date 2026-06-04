import { useState } from "react";
import { Loader } from "./components/Loader/Loader";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { GlassCardsRandom } from "./components/GlassCardsRandom/GlassCardsRandom";
import { BrandsWorkedWith } from "./components/BrandsWorkedWith/BrandsWorkedWith";
import { FeatureCards } from "./components/FeatureCards/FeatureCards";
import { KpiProof } from "./components/KpiProof/KpiProof";
import { Cases } from "./components/Cases/Cases";
import { ShowreelSection } from "./components/ShowreelSection/ShowreelSection";
import { GlassCards } from "./components/GlassCards/GlassCards";
import { Composition } from "./components/Composition/Composition";
import { FounderProfile } from "./components/FounderProfile/FounderProfile";
import { founderProfile } from "./data/founderProfile";
import { Footer } from "./components/Footer/Footer";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import { Offcanvas } from "./components/Offcanvas/Offcanvas";
import { Submenus } from "./components/Submenus/Submenus";
import { LogoCarousel } from "./components/LogoCarousel/LogoCarousel";
import { useLenis } from "./hooks/useLenis";
import { useScrollAnimations } from "./hooks/useScrollAnimations";
import './styles/globals.scss';

function App() {
  useLenis();
  useScrollAnimations();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const openOffcanvas = () => {
    setIsMobileMenuOpen(false);
    setIsOffcanvasOpen(true);
  };

  return (
    <>
      <Loader />

      <Header
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenOffcanvas={openOffcanvas}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />

      {activeSubmenu && (
        <Submenus
          activeKey={activeSubmenu}
          onClose={() => setActiveSubmenu(null)}
        />
      )}

      {isMobileMenuOpen && (
        <MobileMenu
          onClose={() => setIsMobileMenuOpen(false)}
          onOpenOffcanvas={openOffcanvas}
        />
      )}

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

      <Footer />

      {isOffcanvasOpen && (
        <Offcanvas onClose={() => setIsOffcanvasOpen(false)} />
      )}
    </>
  );
}

export default App;
