import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);

    // A client-side route change swaps the page without a reload, so focus
    // stays on the link that was just clicked — now removed from the page — and
    // a screen reader announces nothing. Move it to the new content instead.
    // Skipped on first load (the browser already handles that) and for in-page
    // hash jumps, which return above.
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    document.getElementById('main')?.focus({ preventScroll: true });
  }, [pathname, hash]);

  return null;
}
