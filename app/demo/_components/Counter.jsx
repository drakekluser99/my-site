'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Animated count-up, triggered once when scrolled into view. Shared by any
 * prototype with a "stat row" (palestra's scoreboard, immobiliare's agency
 * numbers) instead of each reinventing its own IntersectionObserver.
 */
function skipsAnimation() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window);
}

export default function Counter({ target, suffix = '', duration = 1100, className = '' }) {
  const ref = useRef(null);
  // Lazy initial state instead of setState-in-effect for the
  // reduced-motion/no-IO fallbacks: land straight on the final value.
  const [value, setValue] = useState(() => (skipsAnimation() ? target : 0));

  useEffect(() => {
    const el = ref.current;
    if (!el || skipsAnimation()) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          let start = null;
          function step(ts) {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className={className}>
      {value}
      {suffix}
    </div>
  );
}
