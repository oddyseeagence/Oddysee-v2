# Testimonials Specification

## Overview
- **Target file:** `src/components/Testimonials.tsx`
- **Screenshot:** `docs/design-references/crevix.framer.website/11-testimonials.jpg`
- **Interaction model:** CAROUSEL — auto-advancing + dot-click-to-jump (see BEHAVIORS.md). 5 pagination dots, 3 cards visible at once at desktop.

## DOM Structure
Header row: eyebrow "Testimonial" (left) + heading "Real Stories From Our Clients" (serif, left) ... right side: big serif stat "4.9/5" + description paragraph (right-aligned column).

Below: horizontally-scrolling/sliding track of testimonial cards, 3 visible at desktop. Each card: light bg (`#faf9ff`), `border-radius: 16px`, padding ~32px, contains:
1. Large purple double-quote-mark glyph, top-right of card, decorative (`QuoteIcon`, ~48x36px, color `#a78fff`).
2. Quote text (dark, serif-adjacent sans, ~18px, line-height 1.5).
3. Footer band at bottom of card (distinguished by a light-purple background block, full-width, rounded bottom corners matching card): circular avatar (48px) + name (bold) + role (muted), inline left-aligned.

Below the track: 5 pagination dots, centered, first active (solid white/light, larger or fully opaque), rest dim gray.

## Computed Styles

### Header
- eyebrow: Satoshi 400 16px + arrow-dot flanks
- heading: Lora serif ~48px, color `#faf9ff`
- stat "4.9": Lora serif ~56px, color `#a78fff` (purple), "/5" suffix smaller ~24px muted
- stat description: Satoshi 400 16px, color `rgba(250,249,255,0.7)`, max-width ~280px

### Card
- background: `#faf9ff`, border-radius: 16px, overflow: hidden (for footer band), min-height ~340px

### Quote glyph
- `QuoteIcon`, ~48px, color `#a78fff` (light purple), position: absolute top-right ~24px, opacity 1

### Quote text
- Satoshi 400, ~18px, line-height 1.5 (~27px), color `#0a0a0a`, padding: 32px 32px 0

### Footer band
- background: `rgba(137,102,255,0.12)` (light purple tint), padding: 20px 32px, flex row, align-items center, gap 12px
- avatar: 48px circle, object-fit cover
- name: Satoshi 700 ~16px, color `#0a0a0a`
- role: Satoshi 400 ~14px, color `rgba(10,10,10,0.6)`

### Pagination dots
- 8px circles, gap 8px, inactive: `rgba(250,249,255,0.3)`, active: `#faf9ff` (solid, full opacity)

## States & Behaviors

### Carousel — INTERACTION MODEL: auto-advancing + dot click
- **Trigger:** `setInterval` ~4500ms advances to next page; clicking a dot jumps directly to that page (`transform: translateX(-100%*index)` on the track, `transition: transform 500ms ease`)
- Pause auto-advance on hover over the track (reasonable default).
- 5 dots imply 5 "pages"; with 3 cards visible at desktop, implement as a sliding window over 5-6 testimonial entries (site content shows 5-6 quotes cycling) — build data array of 5 testimonials, each dot = one testimonial set offset, OR simplest robust approach: build 6 testimonial objects, group into pages of however many fit, dot count = number of pages (5). Prioritize a working smooth carousel over exact page-grouping math.

## Assets
Avatar images (`public/images/`): `e4BWmAGi1BLgfp8ovDBTi284Ec.png`, `Ve4xe8fe2mEHspmmkKz2EDVx0A4.png`, `KC3Kuv2mmVfyLTTg0k3nlV2IAO8.png`, `JfJAfR6lq1p2gtGDdu4qauSo5k.png`, `SDZauHxn0fY54tA8kHIfP6zJ9aU.png` (reuse hero avatar set or dedicated ones — verify against screenshot; David Miller/Michael Johnson/Sophia Anderson visible avatars).

## Text Content (verbatim)
- Eyebrow: "Testimonial" / Heading: "Real Stories From Our Clients"
- Stat: "4.9/5" — "Real feedback from clients we've partnered with across various projects and industries."
- Quotes (name — role — quote):
  1. Michael Johnson — Tech Startup CEO — "Great experience working with this team, they understood our needs clearly and delivered clean, modern design on time perfectly."
  2. Sophia Anderson — Marketing Director — "The team was very professional and easy to work with, they communicated clearly, shared updates regularly, and delivered a beautiful design that helped our business grow online."
  3. Emily Carter — Product Manager — "Amazing work quality and attention to detail, the final design looked beautiful and worked smoothly across all devices and screens."
  4. Olivia Martinez — Brand Manager — "We are very happy with the final result, the design looks modern and professional, and the process was simple, fast, and well organized from start to finish."
  5. David Miller — SaaS Business Owner — "Working with this team was a great experience, they understood our needs clearly and delivered a clean, modern design that improved our brand and user experience perfectly."

## Responsive Behavior
- **Desktop (1440px):** 3 cards visible per page.
- **Tablet (768px):** 2 cards visible per page, dot count may adjust (keep 5 dots, adjust which testimonials group together).
- **Mobile (390px):** 1 card visible per page (full-width), swipeable if possible (touch drag optional, dots remain primary navigation).
- **Breakpoint:** ~1024px, ~640px.
