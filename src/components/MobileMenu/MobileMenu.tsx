import { useEffect } from 'react';
import styles from './MobileMenu.module.scss';
import { navigation } from '../../data/navigation';

export const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    }
    document.addEventListener('keydown', handleKey);
    
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : ''}`} aria-hidden={!isOpen}>
      <div className={styles.inner}>
        <button className={styles.closeBtn} onClick={onClose}>Close</button>
        <nav className={styles.nav}>
          {navigation.map(nav => (
            <a key={nav.rel} href={nav.href} onClick={onClose} className="display-xs">
              {nav.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
