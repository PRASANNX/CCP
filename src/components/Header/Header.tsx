import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { navigation } from '../../data/navigation';
import { useMagnetic } from '../../hooks/useMagnetic';

interface HeaderProps {
  onOpenMobileMenu: () => void;
  onOpenOffcanvas: () => void;
  activeSubmenu: string | null;
  setActiveSubmenu: (val: string | null) => void;
}

export const Header = ({
  onOpenMobileMenu,
  onOpenOffcanvas,
  activeSubmenu,
  setActiveSubmenu,
}: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

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

  const ctaRef = useMagnetic<HTMLButtonElement>({ strength: 0.1 });

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
              <button
                className={`btn btn--dark desktopOnly`}
                ref={ctaRef}
                onClick={onOpenOffcanvas}
              >
                CONTACT
              </button>
              <button
                className={`${styles.menuBtn} mobileOnly`}
                onClick={onOpenMobileMenu}
                aria-label="Open menu"
              >
                MENU
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay mask for submenus */}
      <div
        className={`${styles.mask} desktopOnly ${
          activeSubmenu ? styles.maskActive : ''
        }`}
        aria-hidden="true"
      />
    </>
  );
};
