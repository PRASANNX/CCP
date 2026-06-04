import { useEffect } from 'react';
import styles from './Submenus.module.scss';
import { navigation } from '../../data/navigation';

export const Submenus = ({ activeRel, onClose }: { activeRel: string | null, onClose: () => void }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <>
      <div 
        className={`${styles.mask} ${activeRel ? styles.visible : ''}`} 
        onClick={onClose}
      />
      <div 
        className={`${styles.submenuContainer} ${activeRel ? styles.visible : ''}`}
        onMouseLeave={onClose}
      >
        {navigation.map(nav => (
          <div 
            key={nav.rel} 
            className={`${styles.submenu} ${activeRel === nav.rel ? styles.active : ''}`}
          >
            <div className="container">
              <h3>{nav.label} Submenu</h3>
              <p>Placeholder content for {nav.rel}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
