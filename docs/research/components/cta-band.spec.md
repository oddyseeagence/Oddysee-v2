# CTA Band Specification

## Overview
- **Target file:** `src/components/CtaBand.tsx`
- **Screenshot:** `docs/design-references/crevix.framer.website/15-cta-newsletter.jpg` (top portion)
- **Interaction model:** static, scroll-reveal fade-up. Very simple section — keep this component small.

## DOM Structure
Centered single-column content on plain dark background: two-line serif heading, centered, followed by a small purple pill button below with a comfortable gap (~32px).

## Computed Styles
- Section padding: ~120px vertical, text-align: center
- Heading: Lora serif, ~48px, line-height ~1.2, color `#faf9ff`, max-width ~700px, centered
- Button: background `#8966ff` (or gradient `#b19bfd`→`#562de8`), color `#faf9ff`, border-radius 9999px, padding 14px 28px (this button reads visually smaller than the hero buttons — Satoshi 700 ~14px), centered via `mx-auto`

## States & Behaviors
- Scroll reveal: `opacity 0→1, translateY 20px→0`, 550ms ease-out.
- Button hover: brightness 1.08, 150ms.

## Assets
None.

## Text Content (verbatim)
- Heading: "Create World-Class Visuals That Elevate Your Brand"
- Button: "Get A Quote"

## Responsive Behavior
- **Desktop (1440px):** heading ~48px as described.
- **Tablet (768px):** heading ~36px.
- **Mobile (390px):** heading ~28-32px, tighter line-height, section padding reduced to ~64px vertical.
- **Breakpoint:** ~768px.
