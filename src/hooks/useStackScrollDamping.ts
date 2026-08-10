"use client";

import { type RefObject, useEffect } from "react";

interface ScrollDampingOptions {
  /** Fraction of real scroll delta applied while inside the section (0-1). Lower = slower. */
  dampingFactor?: number;
  /** Per-frame ease toward the damped target (0-1). Lower = smoother/laggier catch-up. */
  easing?: number;
}

const DEFAULT_DAMPING_FACTOR = 0.35;
const DEFAULT_EASING = 0.18;
/** Stop the rAF loop once within this many px of the target — avoids an endless sub-pixel tail. */
const SETTLE_THRESHOLD_PX = 0.5;

/**
 * Slows scrolling while the viewport travels through a stacked-panel
 * section — no pinning, no lock/timer. Real wheel/touch delta is scaled
 * down (dampingFactor) and the visible scroll position eases toward that
 * damped target every frame (easing), so input always moves the page,
 * just more slowly. There is never a frozen state: every event nudges the
 * target further, it's simply approached gradually instead of instantly.
 *
 * Bounds are NOT clamped — once a damped target lands past the section
 * edge, the eased motion is allowed to carry through it, and the very
 * next scroll input (now measured outside the section) is left alone, so
 * native full-speed scrolling resumes immediately with no lingering drag.
 */
export function useStackScrollDamping(
  panelRefs: RefObject<(HTMLElement | null)[]>,
  { dampingFactor = DEFAULT_DAMPING_FACTOR, easing = DEFAULT_EASING }: ScrollDampingOptions = {},
) {
  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (reducedMotionQuery.matches) return;

    let sectionStart = 0;
    let sectionEnd = 0;

    const computeBounds = () => {
      const panels = panelRefs.current.filter(
        (panel): panel is HTMLElement => Boolean(panel),
      );
      if (panels.length < 2) return;

      const first = panels[0];
      const last = panels[panels.length - 1];
      sectionStart = first.getBoundingClientRect().top + window.scrollY;
      sectionEnd = last.getBoundingClientRect().bottom + window.scrollY;
    };

    computeBounds();

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(computeBounds, 150);
    };

    const isInsideSection = (y: number) => y >= sectionStart && y <= sectionEnd;

    let targetY: number | null = null;
    // Our own tracked float render position. Reading window.scrollY back
    // inside the animation loop is what caused the original bug: browsers
    // round scrollY to whole pixels, so the eased value could never close
    // the last sub-pixel gap and the loop ran forever, silently fighting
    // any later scroll (including native scroll right after exiting).
    // Tracking the exact value we last requested avoids that round-trip.
    let visualY: number | null = null;
    let frameId = 0;

    const tick = () => {
      frameId = 0;
      if (targetY === null || visualY === null) return;

      const nextY = visualY + (targetY - visualY) * easing;

      if (Math.abs(targetY - nextY) < SETTLE_THRESHOLD_PX) {
        window.scrollTo(0, targetY);
        targetY = null;
        visualY = null;
        return;
      }

      visualY = nextY;
      window.scrollTo(0, nextY);
      frameId = window.requestAnimationFrame(tick);
    };

    const handleDelta = (deltaY: number, event: Event) => {
      if (!deltaY) return;

      // Mid-interpolation, keep chasing from the pending target so bursts
      // of events accumulate smoothly instead of jumping off the visible
      // (lagging) scroll position.
      const referenceY = targetY ?? window.scrollY;
      if (!isInsideSection(referenceY)) {
        targetY = null;
        visualY = null;
        return;
      }

      event.preventDefault();
      if (visualY === null) visualY = referenceY;
      targetY = referenceY + deltaY * dampingFactor;

      if (!frameId) frameId = window.requestAnimationFrame(tick);
    };

    const onWheel = (event: WheelEvent) => handleDelta(event.deltaY, event);

    let touchY = 0;
    const onTouchStart = (event: TouchEvent) => {
      touchY = event.touches[0]?.clientY ?? 0;
    };
    const onTouchMove = (event: TouchEvent) => {
      const nextY = event.touches[0]?.clientY ?? touchY;
      const deltaY = touchY - nextY;
      touchY = nextY;
      handleDelta(deltaY, event);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("resize", onResize);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);
    };
  }, [panelRefs, dampingFactor, easing]);
}
