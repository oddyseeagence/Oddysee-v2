# Projects Specification

## Overview
- **Target file:** `src/components/Projects.tsx`
- **Screenshot:** `docs/design-references/crevix.framer.website/06-projects-heading.jpg`, `docs/design-references/crevix.framer.website/07-projects-grid.jpg`
- **Interaction model:** static grid, scroll-reveal fade-up; cards likely have hover (scale/lift) — apply conservative default.

## DOM Structure
Header row: eyebrow "Project Showcase" + heading "Our Featured Projects" (serif, left) + description paragraph below heading + "Explore More" pill button (right-aligned, same row as heading).

Below: project grid — first row has 2 large cards side-by-side (each ~50% width, tall ~400-420px), second row has 3 smaller cards side-by-side (~33% width each, ~380px tall). Each card: image (rotated/tilted product mockup photography, `border-radius: 16-20px`, `overflow: hidden`), with a caption row below the image (outside the rounded card): numbered index ("1.", "2." ...) + project title (bold) + arrow icon link (first card shows "More Details" text + arrow; others show just an arrow icon).

## Computed Styles

### Header row
- eyebrow: Satoshi 400 16px + `EyebrowArrowIcon` flanks
- heading: Lora serif ~64px, color `#faf9ff`
- description: Satoshi 400 16px, color `rgba(250,249,255,0.7)`, max-width ~500px, margin-top ~16px
- "Explore More" button: `background: rgba(250,249,255,0.15)`, border-radius 9999px, padding 16px 32px

### Project card image
- border-radius: 16-20px, overflow: hidden, object-fit: cover, aspect ratio varies (large cards ~4:3, small cards taller)

### Caption row (below each card)
- flex row, justify-content: space-between, align-items: center, margin-top: 16px
- index: Satoshi 400 ~16px, color `rgba(250,249,255,0.6)`
- title: Satoshi 700 ~18px, color `#faf9ff`
- "More Details" (card 1 only): Satoshi 400 ~16px, color `#faf9ff`, paired with `ArrowUpRightIcon`
- other cards: just `ArrowUpRightIcon` (~20px, white, circular hover bg optional)

## States & Behaviors

### Scroll reveal
- Cards fade up staggered ~100ms each, 550ms ease-out, row 1 before row 2.

### Card hover
- Image scales slightly (`transform: scale(1.03)`, 300ms ease) within the overflow-hidden container; arrow icon on caption gets a subtle background circle on hover.

## Assets
5 project images (all downloaded to `public/images/`):
1. Busix: `th0iLwfNy4GC3lETawQhJYrM.png`
2. MindEasee: `XGpOxv5lnuHffpehV7PCZKFuF4.png`
3. Lunex: `aiLTjYPkgfqyzApAFEHC4C2uDg.png`
4. Zentro: `m9iGbTvzSU0X8EmaayVuOMIRork.png`
5. Vynex: `TzNUKQ3nV4fZNTQVsrtY5HZdZQg.png`

(Exact mapping between filenames and card position should be verified against the screenshot at build time — assign in DOM order matching the numbered captions 1-5 as shown in `07-projects-grid.jpg`.)

## Text Content (verbatim)
- Eyebrow: "Project Showcase"
- Heading: "Our Featured Projects"
- Description: "We create strategic design and development solutions that elevate brands and drive scalable digital growth effectively."
- Button: "Explore More"
- Cards: "1. Busix - Framer template" (+ "More Details" link), "2. MindEasee - Framer template", "3. Lunex - App UI Kit", "4. Zentro - SaaS Website Template", "5. Vynex - Dashboard UI Kit"

## Responsive Behavior
- **Desktop (1440px):** 2-col row then 3-col row as described.
- **Tablet (768px):** 2-column grid throughout (5 items wrap 2-2-1).
- **Mobile (390px):** single column, full-width cards stacked, captions below each.
- **Breakpoint:** ~1024px (2-col row collapses), ~640px (single column).
