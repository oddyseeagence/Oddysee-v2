# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/crevix.framer.website/02-hero.jpg` (top nav visible)
- **Interaction model:** static (NOT sticky/fixed — scrolls away with page content, confirmed via computed style scan of the live site). Nav "Pages" item is click-driven dropdown.

## DOM Structure
`<header>` full-width, dark bg, flex row, space-between, vertically centered, ~24px vertical padding, max content width ~1320px centered with ~76-110px side gutters at 1440px viewport.
- Left: logo group — rotated purple square (diamond) icon (40x40px, `border-radius: 12px`, `background: #8966ff`, `transform: rotate(45deg)` on the square only, containing a white lightbulb glyph rotated back to upright) + wordmark "Crevix." in Satoshi bold, ~24px, white (`#faf9ff`).
- Center: nav — flex row, gap ~32px: "Pages" (with small chevron-down, opens dropdown) , "About Us", "Services", "Projects", "Contact Us". Font: Satoshi regular, 16px, line-height 24px, color `#faf9ff`.
- Right: pill button "Get Start Now" — `background: rgba(250,249,255,0.15)` (gray/translucent, NOT purple), `color: #faf9ff`, `border-radius: 9999px`, `padding: 16px 32px`, Satoshi medium ~14-16px.

## Computed Styles

### Container
- display: flex, justify-content: space-between, align-items: center
- padding: 24px 76px (desktop), background: transparent (sits on page `#0a0a0a` background)
- position: static (part of normal document flow)

### Logo icon
- width/height: 40px, background: `#8966ff`, border-radius: 12px, rotated 45deg (diamond shape); icon glyph white, centered, counter-rotated -45deg to stay upright

### Wordmark
- font: Satoshi, 700, ~24px, color `#faf9ff`

### Nav links
- font: Satoshi, 400, 16px, line-height: 24px, color: `#faf9ff`
- gap between items: ~32px
- "Pages" has a `ChevronDownIcon` (12-14px) to its right, gap ~4px

### CTA pill
- background: rgba(250,249,255,0.15), color: #faf9ff, border-radius: 9999px, padding: 16px 32px, font-weight 700

## States & Behaviors

### Nav link hover
- **Trigger:** hover
- **Before:** color `#faf9ff`
- **After:** color `#a78fff` (light purple) or opacity 0.7 — apply `transition: color 150ms ease`

### "Pages" dropdown
- **Trigger:** click
- **Behavior:** reveals a dropdown panel below (dark card, rounded 12px, small shadow) listing page links: Home, About Us, Services, Service Details, Projects, Project Details, Members, Members Details, Blog & News, Blog Details, Pricing Plan, Career, Career Details, Contract, Privacy Policy, 404 Page. Since this clone is a single landing page, render the dropdown UI (open/close on click, closes on outside click) with non-functional `href="#"` links grouped under two columns/labels ("Useful Links" style) — content doesn't need real destinations.
- **Implementation:** simple `useState` open/close, `ChevronDownIcon` rotates 180deg when open, dropdown fades/slides in (`opacity 0→1, translateY -8px→0, 200ms ease`).

### CTA pill hover
- brightness increase (`filter: brightness(1.1)`) + 150ms transition

## Assets
- Logo icon: recreate as a styled `<div>` (rotated square) with an inline lightbulb SVG (add `LightbulbIcon` to `src/components/icons.tsx` if not present — simple bulb outline).
- Icons: `ChevronDownIcon` from `src/components/icons.tsx`.

## Text Content (verbatim)
Crevix. / Pages / About Us / Services / Projects / Contact Us / Get Start Now

Dropdown items (from site's footer "Useful Links"/"Inner Pages"/"More Pages" text): Home, About Us, Services, Service Details, Projects, Project Details, Members, Members Details, Blog & News, Blog Details, Pricing Plan, Career, Career Details, Contract, Privacy Policy, 404 Page.

## Responsive Behavior
- **Desktop (1440px):** full row as described.
- **Tablet (768px):** center nav links likely collapse into a hamburger menu; keep logo left, hamburger icon right (drop the "Get Start Now" pill or move into the mobile menu).
- **Mobile (390px):** logo + hamburger icon only, full nav + CTA moves into a slide-down/full-screen mobile menu on hamburger click.
- **Breakpoint:** switch to hamburger at ~768px (standard Tailwind `md`).
