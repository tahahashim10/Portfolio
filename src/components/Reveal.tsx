import React, { useEffect, useMemo, useRef, useState } from 'react';

type Effect = 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom' | 'blur';
type RevealStyle = React.CSSProperties & {
  '--reveal-delay'?: string;
  '--reveal-duration'?: string;
};

type RevealProps = {
  children: React.ReactNode;
  /** Visual effect */
  effect?: Effect;
  /** Delay in ms before animation starts */
  delay?: number;
  /** Duration in ms for the animation */
  duration?: number;
  /** Intersection threshold */
  threshold?: number;
  /** Viewport margin for triggering the reveal */
  rootMargin?: string;
  /** If true, reveals each direct child with a stagger */
  cascade?: boolean;
  /** Additional delay per child when cascading (ms) */
  cascadeDelay?: number;
  className?: string;
  /** If true, only animate the first time it comes into view */
  once?: boolean;
};

export function Reveal({
  children,
  effect = 'fade-up',
  delay = 0,
  duration = 760,
  threshold = 0.12,
  rootMargin = '0px 0px -12% 0px',
  cascade = false,
  cascadeDelay = 64,
  className = '',
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, once]);

  const styleBase = useMemo<RevealStyle>(
    () => ({
      '--reveal-delay': `${delay}ms`,
      '--reveal-duration': `${duration}ms`,
    }),
    [delay, duration]
  );

  if (cascade) {
    const items = React.Children.toArray(children);
    return (
      <div ref={ref} className={`reveal-cascade ${visible ? 'is-visible' : ''} ${className}`} style={styleBase}>
        {items.map((child, i) => (
          <div
            key={i}
            className={`reveal-item reveal--${effect} ${visible ? 'is-visible' : ''}`}
            style={{
              '--reveal-delay': `${delay + i * cascadeDelay}ms`,
              '--reveal-duration': `${duration}ms`,
            } as RevealStyle}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`reveal reveal--${effect} ${visible ? 'is-visible' : ''} ${className}`}
      style={styleBase}
    >
      {children}
    </div>
  );
}

export default Reveal;
