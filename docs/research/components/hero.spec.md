# Hero Specification

## Overview
- **Target file:** `src/components/Hero.tsx`
- **Screenshot:** `docs/design-references/crevix.framer.website/02-hero.jpg`
- **Interaction model:** static content, page-load entrance animation (fade/stagger), no scroll-trigger (in initial viewport).

## DOM Structure
Full-width dark section (`bg-background`), relative positioning. Contains:
1. A giant decorative background word "Strategic" (first word of heading), very low opacity, huge serif font, positioned behind/above the real heading, left-aligned, partially cropped — purely decorative, `aria-hidden`.
2. Heading: two-line serif heading "Strategic Design System" / "For Scaling Brands".
3. Subtext paragraph below heading.
4. Button row: primary pill "Hire Us Now" + secondary pill "More About Us".
5. Right-side badge (absolute/flex positioned, vertically centered-ish with heading): small circular starburst icon (~48px, white circle bg, purple sparkle icon centered) + 3-line text "5+ Years Helping / Brands Grow / Through Design".

Below the hero (could be same component or next): **Trusted By strip** — "Trusted by" label + row of 4-5 overlapping circular avatars (32-40px, white border ~2px, `margin-left: -12px` overlap) + "Startups and Leading Brands Worldwide" text.

## Computed Styles

### Section container
- padding: ~140px top, ~80px bottom, padding-inline ~76-110px, max-width ~1320px centered
- background: `#0a0a0a`

### Decorative background word
- font: Lora serif, ~180-220px (much larger than heading), color: `rgba(250,249,255,0.04)` (barely visible), position: absolute, top-left of section, `z-index: 0`, `pointer-events: none`, line-height: 1

### Heading (h1)
- font-family: Lora, "Lora Placeholder", serif
- font-size: 80px, font-weight: 400, line-height: 88px, letter-spacing: -2.5px
- color: `#faf9ff`
- max-width: ~980px

### Subtext (p)
- font: Satoshi, 500, 18px, line-height: 27px, color: `#faf9ff` at reduced opacity (~0.75), max-width ~480px, margin-top ~24px

### Primary button ("Hire Us Now")
- background: `#8966ff` (or gradient `#b19bfd`→`#562de8`), color: `#faf9ff`, border-radius: 9999px, padding: 16px 40px, font: Satoshi 700 ~14-16px

### Secondary button ("More About Us")
- background: `rgba(250,249,255,0.3)`, color: `#faf9ff`, border-radius: 9999px (100px), padding: 16px 40px 14px

### Badge (5+ Years...)
- icon circle: 48px, background `#faf9ff`, centered `SparkleIcon` in purple
- text: Satoshi 400, ~16px, line-height ~24px, color `#faf9ff`, 3 lines stacked tight

### Trusted-by strip
- "Trusted by" text: Satoshi 400 16px, color rgba(250,249,255,0.7)
- avatar stack: circles 32-36px, `-12px` negative margin overlap, `border: 2px solid #0a0a0a`
- following text: Satoshi 400 16px, color `#faf9ff`

## States & Behaviors

### Page-load entrance
- **Trigger:** on mount (component enters DOM already in viewport)
- **Before:** heading/subtext/buttons/badge at `opacity: 0, translateY: 16px`; decorative bg word at `opacity: 0`
- **After:** `opacity: 1, translateY: 0`
- **Transition:** `600ms ease-out`, staggered ~120ms between: bg word → heading → subtext → buttons → badge
- **Implementation:** simple CSS keyframe or Framer-Motion-less approach — use a mounted-state `useEffect` toggling a class, or CSS `animation` with staggered `animation-delay` per child.

### Button hover
- Primary: brightness `1.08`, 150ms ease
- Secondary: background opacity increases to `rgba(250,249,255,0.4)`, 150ms ease

## Assets
- No image assets in this section (pure typography + icons + avatar images).
- Avatar images: use `public/images/e4BWmAGi1BLgfp8ovDBTi284Ec.png`, `Ve4xe8fe2mEHspmmkKz2EDVx0A4.png`, `KC3Kuv2mmVfyLTTg0k3nlV2IAO8.png`, `JfJAfR6lq1p2gtGDdu4qauSo5k.png`, `SDZauHxn0fY54tA8kHIfP6zJ9aU.png` (all 48x48 or 192x192, downloaded to `public/images/`).
- Icon: `SparkleIcon` from `src/components/icons.tsx`.

## Text Content (verbatim)
- Heading: "Strategic Design System For Scaling Brands"
- Subtext: "We create strategic design and development solutions that elevate brands and drive scalable digital growth effectively."
- Buttons: "Hire Us Now", "More About Us"
- Badge: "5+ Years Helping Brands Grow Through Design"
- Trusted-by: "Trusted by" ... "Startups and Leading Brands Worldwide"

## Responsive Behavior
- **Desktop (1440px):** as described, heading and badge side-by-side.
- **Tablet (768px):** heading font-size drops to ~48-56px, badge moves below buttons (stacks), max-width of heading/subtext becomes full container width.
- **Mobile (390px):** heading ~36-40px, line-height tightened, buttons stack or wrap, badge stacks below buttons full-width, trusted-by strip wraps avatars above the text if needed.
- **Breakpoint:** ~768px and ~640px transitions.
