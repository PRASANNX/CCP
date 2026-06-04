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
        aria-label="[FILL: close backdrop label]"
      />
      
      <aside 
        ref={dialogRef}
        className={`${styles.panel} ${styles.panelActive}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="offcanvas-title"
      >
        <div className={styles.header}>
          <h3 id="offcanvas-title" className="display-xxs">[FILL: offcanvas title]</h3>
          <button 
            className={styles.closeBtn} 
            onClick={onClose}
            aria-label="[FILL: close label]"
          >
            [FILL: close label]
          </button>
        </div>
        
        <div className={styles.body}>
          <p className="text-m">[FILL: offcanvas content/form]</p>
        </div>
      </aside>
    </>
  );
};
