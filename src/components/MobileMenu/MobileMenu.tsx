import { useRef, useEffect } from 'react';
import styles from './MobileMenu.module.scss';
import { navigation } from '../../data/navigation';

type MobileMenuProps = {
  onClose: () => void;
  onOpenOffcanvas: () => void;
};

export const MobileMenu = ({ onClose, onOpenOffcanvas }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Body scroll lock
    document.body.style.overflow = 'hidden';
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className={`${styles.container} ${styles.isOpen} mobileOnly`}
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
        <nav aria-label="[FILL: mobile nav label]">
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
        <button 
          className="btn btn--dark" 
          style={{ width: '100%' }}
          onClick={() => {
            onClose();
            onOpenOffcanvas();
          }}
        >
          [FILL: contact label]
        </button>
      </div>
    </div>
  );
};
