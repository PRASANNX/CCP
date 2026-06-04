import { useRef } from 'react';
import styles from './MobileMenu.module.scss';
import { navigation } from '../../data/navigation';
import { useOffcanvasFocusTrap } from '../../hooks/useOffcanvasFocusTrap';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  
  useOffcanvasFocusTrap(menuRef, isOpen, onClose);

  return (
    <div
      ref={menuRef}
      className={`${styles.container} ${isOpen ? styles.isOpen : ''} mobileOnly`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.header}>
        <div className={styles.brand}>[FILL: org name]</div>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
          CLOSE
        </button>
      </div>
      
      <div className={styles.body}>
        <nav>
          <ul>
            {navigation.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="display-xxs" onClick={onClose}>
                  {item.label}
                </a>
                {item.children && (
                  <ul className={styles.subLinks}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href} onClick={onClose}>{child.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className={styles.footer}>
        <a href="#" className="btn btn--dark" style={{ width: '100%' }}>
          CONTACT
        </a>
      </div>
    </div>
  );
};
