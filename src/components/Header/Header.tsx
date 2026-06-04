import { useState } from 'react';
import styles from './Header.module.scss';
import { navigation } from '../../data/navigation';
import { Submenus } from '../Submenus/Submenus';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export const Header = () => {
  const [activeRel, setActiveRel] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.brand}>[FILL: org name]</div>
          <nav className={styles.desktopNav}>
            {navigation.map((item: any) => (
              <a 
                key={item.rel}
                href={item.href}
                className={styles.navLink}
                onMouseEnter={() => setActiveRel(item.rel)}
                onFocus={() => setActiveRel(item.rel)}
                aria-expanded={activeRel === item.rel}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className={styles.actions}>
            <button className="btn" data-offcanvas>Contact</button>
            <button 
              className={styles.mobileToggle}
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
            >
              Menu
            </button>
          </div>
        </div>
      </header>
      <Submenus activeRel={activeRel} onClose={() => setActiveRel(null)} />
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};
