/**
 * Lazy load wrapper for Framer Motion components
 * This allows Framer Motion to be loaded only when needed
 */
import { lazy, Suspense, useState, useEffect } from 'react';

// Create lazy components
const MotionLazy = lazy(() => import('framer-motion'));
const AnimatePresenceLazy = lazy(() => import('framer-motion').then(m => ({ default: m.AnimatePresence })));

// Wrapper components that show nothing while loading
export function Motion({ children, ...props }) {
  const [mounted, setMounted] = useState(false);
  const [MotionComponent, setMotionComponent] = useState(null);

  useEffect(() => {
    let cancelled = false;
    import('framer-motion').then((mod) => {
      if (!cancelled) {
        setMotionComponent(() => mod.motion);
        setMounted(true);
      }
    });
    return () => { cancelled = true; };
  }, []);

  if (!mounted || !MotionComponent) {
    return null; // Or return children without animation
  }

  return <MotionComponent {...props}>{children}</MotionComponent>;
}

export function AnimatePresence({ children, ...props }) {
  const [mounted, setMounted] = useState(false);
  const [AnimatePresenceComponent, setAnimatePresenceComponent] = useState(null);

  useEffect(() => {
    let cancelled = false;
    import('framer-motion').then((mod) => {
      if (!cancelled) {
        setAnimatePresenceComponent(() => mod.AnimatePresence);
        setMounted(true);
      }
    });
    return () => { cancelled = true; };
  }, []);

  if (!mounted || !AnimatePresenceComponent) {
    return <>{children}</>;
  }

  return <AnimatePresenceComponent {...props}>{children}</AnimatePresenceComponent>;
}

// Fallback components using CSS animations
export function MotionFallback({ children, initial = {}, animate = {}, transition = {}, className = '', style = {}, ...props }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        animation: `${transition.duration || 0.3}s ease-out forwards`,
        opacity: animate.opacity ?? 1,
        transform: `translate(${animate.x || 0}px, ${animate.y || 0}px)`,
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export default { Motion, AnimatePresence, MotionFallback };
