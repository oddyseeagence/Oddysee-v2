# About Specification

## Overview
- **Target file:** `src/components/About.tsx`
- **Screenshot:** `docs/design-references/crevix.framer.website/03-about.jpg`
- **Interaction model:** scroll-triggered fade-up on enter (standard pattern per BEHAVIORS.md), no other interactivity.

## DOM Structure
Dark section. Top: small eyebrow tag "About Crevix." flanked by two small arrow-dot glyphs (`EyebrowArrowIcon`). Below: two-column-ish layout — heading is right-aligned-ish / large serif heading "We Create Strategic Design That Helps Brands Grow" occupying right ~65% width (eyebrow sits top-left, heading top-right per screenshot). Below both: 3-column grid of feature cards, equal width, gap ~40px.

Each feature card: purple rounded-square icon tile (56x56px) + title (serif) + description paragraph, stacked vertically, left-aligned.

## Computed Styles

### Section container
- padding: ~120px vertical, ~76-110px horizontal, background `#0a0a0a`

### Eyebrow tag
- font: Satoshi 400, 16px, color `#faf9ff`, flanked by small arrow icons (~14px, purple, `EyebrowArrowIcon`), gap ~8px

### Heading
- font: Lora serif, ~48px, line-height ~1.15, color `#faf9ff`, max-width ~760px, positioned to the right of / below the eyebrow (per screenshot: eyebrow top-left, heading occupies wide right area same row on desktop)

### Feature card
- icon tile: 56x56px (some screenshots show ~64px), `background: #a78fff` (light purple), `border-radius: 16px`, centered white-line icon (~28px) inside
- title: Lora serif, ~24px, color `#faf9ff`, margin-top ~20px
- description: Satoshi 400, ~16px, line-height ~24px, color `rgba(250,249,255,0.7)`, margin-top ~8px, max-width ~320px

## States & Behaviors

### Scroll reveal
- **Trigger:** IntersectionObserver, threshold ~0.2, fires once
- **Before:** `opacity: 0, translateY: 20px`
- **After:** `opacity: 1, translateY: 0`
- **Transition:** 550ms ease-out, stagger ~100ms per feature card (heading fades first, then cards left→right)

## Assets
- 3 icon tile images (or recreate as inline icons): `public/images/wsdjftbdgo7jaFV4j3GK0u3yWx0.png` (pen/identity icon), `public/images/Is1zQc6s9oNVBeX2GJ8qrdim7r8.png` (monitor/dashboard icon), `public/images/rbGVkaqGfuvnJi18DsLFsGGaYo.png` (lightbulb icon) — these are small (~134px) line-art icons on transparent bg; use as `<Image>` inside the purple tile rather than recreating as SVG (simpler and pixel-accurate).

## Text Content (verbatim)
- Eyebrow: "About Crevix."
- Heading: "We Create Strategic Design That Helps Brands Grow"
- Card 1 — "Visual Identity": "We build strong visual identities that communicate brand values clearly and consistently effectively."
- Card 2 — "Design Excellence": "We deliver premium design solutions focused on aesthetics, usability, and brand growth."
- Card 3 — "Creative Strategy": "We craft thoughtful design strategies that align brands with goals and audience needs."

## Responsive Behavior
- **Desktop (1440px):** eyebrow + heading roughly same row (heading right-aligned block), 3-column card grid.
- **Tablet (768px):** heading below eyebrow (stacked), cards go to 2 columns or remain 3 narrower columns.
- **Mobile (390px):** everything stacks single column, cards full-width stacked with normal gap ~32px.
- **Breakpoint:** ~768px.
