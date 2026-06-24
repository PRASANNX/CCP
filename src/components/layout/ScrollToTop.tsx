import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Kill all ScrollTrigger instances from previous page
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Scroll to top
    window.scrollTo(0, 0);

    // Refresh ScrollTrigger after a tick so new page elements register
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => cancelAnimationFrame(rafId);
  }, [pathname]);

  return null;
}
