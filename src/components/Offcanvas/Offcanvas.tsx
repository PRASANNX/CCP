import { useState, useRef, useEffect } from 'react';
import styles from './Offcanvas.module.scss';
import { useOffcanvasFocusTrap } from '../../hooks/useOffcanvasFocusTrap';

export const Offcanvas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  
  useOffcanvasFocusTrap(dialogRef, isOpen, () => setIsOpen(false));

  // Expose a global method to open the offcanvas from anywhere (like the Hero CTA)
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-offcanvas', handleOpen);
    return () => window.removeEventListener('open-offcanvas', handleOpen);
  }, []);

  return (
    <>
      <div 
        className={`${styles.backdrop} ${isOpen ? styles.backdropActive : ''}`} 
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      
      <div 
        ref={dialogRef}
        className={`${styles.panel} ${isOpen ? styles.panelActive : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        <div className={styles.header}>
          <h3 className="display-xxs">[FILL: offcanvas title]</h3>
          <button 
            className={styles.closeBtn} 
            onClick={() => setIsOpen(false)}
            aria-label="Close panel"
          >
            CLOSE
          </button>
        </div>
        
        <div className={styles.body}>
          <p className="text-m">[FILL: offcanvas content/form]</p>
        </div>
      </div>
    </>
  );
};
