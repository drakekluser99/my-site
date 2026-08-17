'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

/**
 * Shared scroll-reveal wrapper — the "one authored motion moment" used
 * consistently across all 6 demo prototypes instead of a different scroll
 * effect invented per page. Renders `as` (default div) with a fade+rise-in
 * triggered once it enters the viewport; honors prefers-reduced-motion.
 */
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '', ...rest }) {
  const ref = useRef(null);
  // Lazy initial state instead of setState-in-effect for the no-IO fallback:
  // browsers without IntersectionObserver start already visible.
  const [visible, setVisible] = useState(
    () => typeof window !== 'undefined' && !('IntersectionObserver' in window)
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.in : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
