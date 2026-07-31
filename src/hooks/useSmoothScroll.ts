import { useCallback } from 'react';

const NAV_HEIGHT = 72;

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function smoothScrollTo(targetY: number, duration = 900) {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    window.scrollTo({ top: targetY, behavior: 'instant' as const });
    return;
  }

  const startY = window.scrollY;
  const diff = targetY - startY;

  if (Math.abs(diff) < 2) return;

  const startTime = performance.now();

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutExpo(progress);
    window.scrollTo(0, startY + diff * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const targetY = window.scrollY + rect.top - NAV_HEIGHT;
  smoothScrollTo(targetY);
}

export function useSmoothAnchor() {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  }, []);
}