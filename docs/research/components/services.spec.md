# Services Specification

## Overview
- **Target file:** `src/components/Services.tsx`
- **Screenshot:** `docs/design-references/crevix.framer.website/05-services.jpg`
- **Interaction model:** static list, scroll-reveal fade-up on enter; each row likely has a hover state (subtle background tint) — treat as a nice-to-have hover, not confirmed via diff.

## DOM Structure
Dark section. Header row: eyebrow "Our Services" (flanked by arrow-dot icons) stacked above heading "Built For Today's Brands" (serif, left-aligned) with a "More Services" pill button top-right (same row as heading, right-aligned).

Below: a 4-row list, each row separated by a full-width thin horizontal divider (`border-top: 1px solid rgba(250,249,255,0.1)`), each row = 3-column flex/grid: `/ 01 /` style index label (left, muted), title (center-left, large serif), description (right-aligned block, smaller sans). Generous vertical padding per row (~64px).

## Computed Styles

### Header row
- eyebrow: Satoshi 400 16px, color `#faf9ff`, flanked by `EyebrowArrowIcon` (purple, ~14px)
- heading: Lora serif, ~56px, color `#faf9ff`
- "More Services" button: `background: rgba(250,249,255,0.15)`, color `#faf9ff`, border-radius 9999px, padding 16px 32px, Satoshi 700

### Row divider
- `border-top: 1px solid rgba(250,249,255,0.1)`, full width

### Row index (`/ 01 /`)
- Satoshi 400, ~16px, color `rgba(250,249,255,0.6)`, width ~100px fixed

### Row title
- Lora serif, ~40px, color `#faf9ff`, flex-grow

### Row description
- Satoshi 400, ~16px, line-height 24px, color `rgba(250,249,255,0.7)`, max-width ~320px, text-align right (per screenshot description sits right-aligned block)

## States & Behaviors

### Scroll reveal
- Header + each row fade up on enter, staggered ~80ms per row, 500ms ease-out.

### Row hover
- **Trigger:** hover
- Subtle background tint appears behind the row (`rgba(250,249,255,0.03)`, full-bleed within section padding, rounded ~12px) + title color shifts to `#a78fff`, 200ms ease. This is a reasonable default; verify visually in QA.

## Assets
None (pure typography).

## Text Content (verbatim)
- Eyebrow: "Our Services"
- Heading: "Built For Today's Brands"
- Button: "More Services"
- Row 1 — "/ 01 /" "Mobile App Design" — "We create mobile apps that are easy to use and look modern"
- Row 2 — "/ 02 /" "Dashboard Design" — "We create clean dashboards that show data clearly and are easy"
- Row 3 — "/ 03 /" "Full Website Design" — "We create mobile apps that are easy to use and look modern"
- Row 4 — "/ 04 /" "Landing Page Design" — "We build pages that attract users and increase conversions."

(Note: rows 1 and 3 share identical description text verbatim on the live site — this is intentional, preserve as-is for fidelity.)

## Responsive Behavior
- **Desktop (1440px):** 3-column row layout as described.
- **Tablet (768px):** description may drop below title (2-row layout per item) or shrink to a narrower right column.
- **Mobile (390px):** each row stacks: index + title on one line/block, description below full-width, left-aligned instead of right-aligned.
- **Breakpoint:** ~768px.
