import { useState, useEffect } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface CountUpOpts {
  duration?: number;
  start?: boolean;
}

export function useCountUp(target: number, opts?: CountUpOpts): number {
  const { duration = 1200, start = true } = opts ?? {};
  const reduced = usePrefersReducedMotion();

  const [value, setValue] = useState(() => (reduced && start ? target : 0));

  useEffect(() => {
    if (!start) return;

    if (reduced) {
      setValue(target);
      return;
    }

    const startTime = Date.now();
    // setInterval (not rAF) so it keeps running in background tabs
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setValue(Math.round(target * eased));
      if (p >= 1) clearInterval(interval);
    }, 16);

    return () => clearInterval(interval);
  }, [target, duration, start, reduced]);

  return value;
}
