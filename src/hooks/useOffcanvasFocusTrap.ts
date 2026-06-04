import { useEffect, type RefObject } from 'react';

export const useOffcanvasFocusTrap = (
  ref: RefObject<HTMLElement | null>,
  isOpen: boolean,
  onClose: () => void
) => {
  useEffect(() => {
    if (!isOpen || !ref.current) return;

    const el = ref.current;
    
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Focus first focusable
    const focusable = el.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length) focusable[0].focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      
      if (e.key === 'Tab') {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, ref, onClose]);
};
