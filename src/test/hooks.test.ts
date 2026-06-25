import { renderHook, act, render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';
import React from 'react';

// ── helpers ──────────────────────────────────────────────────────────────────

function stubMatchMedia(matches: boolean) {
  const listeners: ((e: { matches: boolean }) => void)[] = [];
  const mq = {
    matches,
    addEventListener: (_: string, cb: (e: { matches: boolean }) => void) => listeners.push(cb),
    removeEventListener: (_: string, cb: (e: { matches: boolean }) => void) => {
      const i = listeners.indexOf(cb);
      if (i !== -1) listeners.splice(i, 1);
    },
    _dispatch: (m: boolean) => listeners.forEach(cb => cb({ matches: m })),
  };
  vi.stubGlobal('matchMedia', vi.fn(() => mq));
  return mq;
}

// ── usePrefersReducedMotion ────────────────────────────────────────────────

describe('usePrefersReducedMotion', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('returns false when no preference set', () => {
    stubMatchMedia(false);
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(false);
  });

  it('returns true when prefers-reduced-motion matches', () => {
    stubMatchMedia(true);
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(true);
  });

  it('updates when media query changes', () => {
    const mq = stubMatchMedia(false);
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(false);
    act(() => mq._dispatch(true));
    expect(result.current).toBe(true);
  });
});

// ── useCountUp ─────────────────────────────────────────────────────────────

describe('useCountUp', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    stubMatchMedia(false);
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it('starts at 0 when start=true and not reduced', () => {
    const { result } = renderHook(() => useCountUp(100, { start: true, duration: 500 }));
    expect(result.current).toBe(0);
  });

  it('reaches target value after duration', () => {
    const { result } = renderHook(() => useCountUp(50, { start: true, duration: 500 }));
    act(() => vi.advanceTimersByTime(600));
    expect(result.current).toBe(50);
  });

  it('stays at 0 when start=false', () => {
    const { result } = renderHook(() => useCountUp(100, { start: false }));
    act(() => vi.advanceTimersByTime(2000));
    expect(result.current).toBe(0);
  });

  it('jumps to target immediately when reduced motion', () => {
    vi.unstubAllGlobals();
    stubMatchMedia(true);
    const { result } = renderHook(() => useCountUp(75, { start: true }));
    expect(result.current).toBe(75);
  });

  it('counts up incrementally (not a flat line)', () => {
    const { result } = renderHook(() => useCountUp(100, { start: true, duration: 1000 }));
    act(() => vi.advanceTimersByTime(300));
    expect(result.current).toBeGreaterThan(0);
    expect(result.current).toBeLessThan(100);
  });
});

// ── useInView ──────────────────────────────────────────────────────────────

describe('useInView', () => {
  let triggerIntersection: (isIntersecting: boolean) => void;
  let disconnectSpy: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    disconnectSpy = vi.fn();
    class MockIO {
      observe = vi.fn();
      disconnect = disconnectSpy;
      constructor(cb: IntersectionObserverCallback) {
        triggerIntersection = (isIntersecting: boolean) =>
          cb([{ isIntersecting } as IntersectionObserverEntry], {} as IntersectionObserver);
      }
    }
    vi.stubGlobal('IntersectionObserver', MockIO);
  });
  afterEach(() => vi.unstubAllGlobals());

  function Wrapper() {
    const [ref, inView] = useInView();
    return React.createElement('div', { ref, 'data-testid': 'target', 'data-inview': String(inView) });
  }

  it('returns false initially', () => {
    render(React.createElement(Wrapper));
    expect(screen.getByTestId('target')).toHaveAttribute('data-inview', 'false');
  });

  it('becomes true when element intersects', async () => {
    render(React.createElement(Wrapper));
    act(() => triggerIntersection(true));
    await waitFor(() =>
      expect(screen.getByTestId('target')).toHaveAttribute('data-inview', 'true'),
    );
  });

  it('stays false when not intersecting', () => {
    render(React.createElement(Wrapper));
    act(() => triggerIntersection(false));
    expect(screen.getByTestId('target')).toHaveAttribute('data-inview', 'false');
  });

  it('disconnects after first intersection (fire-once)', async () => {
    render(React.createElement(Wrapper));
    act(() => triggerIntersection(true));
    await waitFor(() => expect(disconnectSpy).toHaveBeenCalledTimes(1));
  });
});
