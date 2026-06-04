import { useState } from "react";
import { Loader } from "./components/Loader/Loader";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { GlassCardsRandom } from "./components/GlassCardsRandom/GlassCardsRandom";
import { Partners } from "./components/Partners/Partners";
import { FeatureCards } from "./components/FeatureCards/FeatureCards";
import { TableNumbers } from "./components/TableNumbers/TableNumbers";
import { Cases } from "./components/Cases/Cases";
import { GlassCards } from "./components/GlassCards/GlassCards";
import { Composition } from "./components/Composition/Composition";
import { FounderProfile } from "./components/FounderProfile/FounderProfile";
import { founderProfile } from "./data/founderProfile";
import { Footer } from "./components/Footer/Footer";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import { Offcanvas } from "./components/Offcanvas/Offcanvas";
import { Submenus } from "./components/Submenus/Submenus";
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
        <FounderProfile founder={founderProfile} />
        <GlassCardsRandom />
        <Partners />
        <FeatureCards />
        <TableNumbers />
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
