import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { navigation } from '../../data/navigation';
import { Submenus } from '../Submenus/Submenus';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavEnter = (rel: string) => {
    setActiveSubmenu(rel);
  };

  const handleNavLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
        onMouseLeave={handleNavLeave}
      >
        <div className="container">
          <div className={styles.inner}>
            <a href="/" className={styles.brand}>
              [FILL: org name]
            </a>

            <nav className={`${styles.nav} desktopOnly`}>
              <ul>
                {navigation.map((item) => (
                  <li
                    key={item.label}
                    onMouseEnter={() => handleNavEnter(item.rel)}
                  >
                    <a href={item.href} className={styles.navLink}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.actions}>
              <a href="#" className={`btn btn--dark desktopOnly`}>
                CONTACT
              </a>
              <button
                className={`${styles.menuBtn} mobileOnly`}
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
              >
                MENU
              </button>
            </div>
          </div>
        </div>

        {/* Submenus component - pass the active state */}
        <div className="desktopOnly">
          <Submenus
            activeSubmenu={activeSubmenu}
            onMouseEnter={() => {}} // keeps it open if mouse moves down into it
          />
        </div>
      </header>

      {/* Overlay mask for submenus */}
      <div
        className={`${styles.mask} desktopOnly ${activeSubmenu ? styles.maskActive : ''}`}
        aria-hidden="true"
      />

      {mobileMenuOpen && (
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};
