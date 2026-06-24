import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { Offcanvas } from "../Offcanvas/Offcanvas";
import { Submenus } from "../Submenus/Submenus";
import { ScrollToTop } from "./ScrollToTop";
import { useLenis } from "../../hooks/useLenis";
import styles from "./SiteLayout.module.scss";

export function SiteLayout() {
  useLenis();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const openOffcanvas = () => {
    setIsMobileMenuOpen(false);
    setIsOffcanvasOpen(true);
  };

  return (
    <div className={styles.layout}>
      <ScrollToTop />

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

      <div className={styles.main}>
        <Outlet context={{ openOffcanvas }} />
      </div>

      <Footer />

      {isOffcanvasOpen && (
        <Offcanvas onClose={() => setIsOffcanvasOpen(false)} />
      )}
    </div>
  );
}
