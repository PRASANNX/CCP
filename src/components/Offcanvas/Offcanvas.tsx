import { useRef, useEffect } from 'react';
import styles from './Offcanvas.module.scss';
import { useOffcanvasFocusTrap } from '../../hooks/useOffcanvasFocusTrap';

type OffcanvasProps = {
  onClose: () => void;
};

export const Offcanvas = ({ onClose }: OffcanvasProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  
  useOffcanvasFocusTrap(dialogRef, true, onClose);

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
    <>
      <div 
        className={`${styles.backdrop} ${styles.backdropActive}`} 
        onClick={onClose}
        aria-hidden="true"
        aria-label="Close backdrop"
      />
      
      <aside 
        ref={dialogRef}
        className={`${styles.panel} ${styles.panelActive}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="offcanvas-title"
      >
        <div className={styles.header}>
          <h3 id="offcanvas-title" className="display-xxs">Start a CCP project</h3>
          <button 
            className={styles.closeBtn} 
            onClick={onClose}
            aria-label="Close"
          >
            Close
          </button>
        </div>
        
        <div className={styles.body}>
          <p className="text-m">Tell us what you want to build — a campaign, event coverage, a corporate film, ads, a virtual tour, or education-focused content.</p>
        </div>
      </aside>
    </>
  );
};
