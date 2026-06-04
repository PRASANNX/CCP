import { useRef, useState, useEffect } from 'react';
import styles from './Offcanvas.module.scss';
import { useOffcanvasFocusTrap } from '../../hooks/useOffcanvasFocusTrap';

export const Offcanvas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleTrigger = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('[data-offcanvas]')) {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    document.addEventListener('click', handleTrigger);
    return () => document.removeEventListener('click', handleTrigger);
  }, []);

  useOffcanvasFocusTrap(panelRef, isOpen, () => setIsOpen(false));

  return (
    <>
      <div 
        className={`${styles.backdrop} ${isOpen ? styles.visible : ''}`} 
        onClick={() => setIsOpen(false)}
      />
      <div 
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        className={`${styles.panel} ${isOpen ? styles.open : ''}`}
        aria-hidden={!isOpen}
      >
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>Close</button>
        <h2 className="display-xs">[FILL: offcanvas title]</h2>
        <form className={styles.form}>
          <input type="text" placeholder="[FILL: form name label]" />
          <input type="email" placeholder="[FILL: form email label]" />
          <textarea placeholder="[FILL: form message label]" rows={4}></textarea>
          <button className="btn" type="button">[FILL: form submit label]</button>
        </form>
      </div>
    </>
  );
};
