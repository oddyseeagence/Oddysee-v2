"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  rootMargin?: string;
}

const DEFAULT_ROOT_MARGIN = "0px 0px -12% 0px";
const TRIGGER_LINE_RATIO = 0.88;

/**
 * Reveals an element once it reaches the viewport trigger line.
 *
 * Content starts visible so server-rendered HTML, browsers without
 * IntersectionObserver, and reduced-motion users can never get stuck with
 * permanently hidden content.
 */
export function useScrollReveal<T extends HTMLElement>({
  rootMargin = DEFAULT_ROOT_MARGIN,
}: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);
  const [isRevealed, setIsRevealed] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

    let frameId = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsRevealed(true);
        observer.disconnect();
      },
      {
        rootMargin,
        threshold: 0,
      },
    );

    frameId = window.requestAnimationFrame(() => {
      const bounds = node.getBoundingClientRect();
      const triggerLine = window.innerHeight * TRIGGER_LINE_RATIO;

      // Covers initial-viewport content, restored scroll positions, and fast
      // scrolls that happen before the observer begins watching the element.
      if (bounds.top <= triggerLine) {
        setIsRevealed(true);
        return;
      }

      setIsRevealed(false);
      observer.observe(node);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [rootMargin]);

  return { ref, isRevealed };
}
