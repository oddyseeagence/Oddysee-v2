# Pricing Specification

## Overview
- **Target file:** `src/components/Pricing.tsx`
- **Screenshot:** `docs/design-references/crevix.framer.website/09-pricing-heading.jpg`, `docs/design-references/crevix.framer.website/10-pricing-cards.jpg`
- **Interaction model:** static, scroll-reveal fade-up.

## DOM Structure
Centered header: eyebrow "Pricing Plans" (flanked by arrow-dot icons, centered) + heading "Flexible Plans For You" (serif, centered).

Below: 3-column grid of pricing cards, middle card ("Ultimate Experience") visually elevated — slightly taller/larger via negative margin-top (~-16px) and a distinct light-purple tinted background vs the other two which are plain light `#faf9ff`. All cards: `border-radius: 16px`, padding ~24-32px.

Each card, top to bottom:
1. Row: small bullet + plan name (purple text) on left, duration pill (outlined, e.g. "5-7 Days") on right.
2. Price: huge serif number ("$900") + "/month" smaller suffix.
3. One-line description.
4. CTA button "Get This Plan" (full-width pill) — gray/disabled-looking on the two outer cards, solid purple on the featured middle card.
5. Divider line.
6. "What's included:" label (bold, dark).
7. Checklist: each item = small right-chevron/arrow bullet (`ArrowRightIcon`, purple, rotated to point right, small ~14px) + text, ~16px gap between items.

## Computed Styles

### Header
- eyebrow centered: Satoshi 400 16px + purple bullet dot, centered with heading below
- heading: Lora serif ~56px, centered, color `#faf9ff`

### Card (standard)
- background: `#faf9ff`, border-radius: 16px, padding: 24px 24px 32px

### Card (featured/middle)
- background: light purple tint e.g. `#e8e2ff` or `rgba(137,102,255,0.08)` over `#faf9ff`, same radius, slightly larger scale (`transform: scale(1.03)` or extra padding/negative margin to appear taller), positioned with `margin-top: -16px` so it "pops up" above the other two

### Eyebrow row (plan name + duration pill)
- plan name: Satoshi 500 ~16px, color `#8966ff`, preceded by small dot bullet (•)
- duration pill: border `1px solid rgba(10,10,10,0.15)`, border-radius 9999px, padding 6px 16px, Satoshi 400 14px, color `#0a0a0a`

### Price
- font: Lora serif or Satoshi, ~56px, color `#0a0a0a`, "/month" suffix ~16px muted gray inline

### Description
- Satoshi 400, 16px, color `rgba(10,10,10,0.6)`

### CTA button
- standard cards: background `rgba(10,10,10,0.15)` (gray), color `rgba(10,10,10,0.4)`, border-radius 9999px, padding 16px, full-width, text-align center
- featured card: background `#8966ff`, color `#faf9ff`, same shape

### Checklist item
- `ArrowRightIcon` ~14px purple + text Satoshi 400 16px color `#0a0a0a`, gap 12px, vertical gap between items ~16px

## States & Behaviors

### Scroll reveal
- Cards fade up staggered left→right, 550ms ease-out; featured card may pop in with slight scale (0.95→1.0) for emphasis.

### CTA hover
- Featured button: brightness 1.08. Standard buttons: background darkens slightly — note these look intentionally muted/disabled in the design (not necessarily interactive-looking) but should still have a hover state for UX.

## Assets
None (pure typography, icons only).

## Text Content (verbatim)
- Eyebrow: "Pricing Plans" / Heading: "Flexible Plans For You"
- **Elite Experience** — "5-7 Days" — "$900/month" — "Elegant intuitive design for modern brands." — CTA "Get This Plan" — Includes: "Mobile App UI Design", "Website & Landing Page Design", "Dashboard Interface Design", "Up to 10 Screens Included", "2 Revisions Included"
- **Ultimate Experience** (featured) — "10-15 Days" — "$1500/month" — "Polished scalable experience for growing brands." — CTA "Get This Plan" — Includes: "Mobile, Web & Dashboard Design", "Up to 20 Screens Included", "High-Fidelity Prototyping", "User Flow & UX Structure", "4 Revisions Included"
- **Custom Pricing** — "Project based" — "Contact Us" (in place of a price) — "Custom solutions for large scale projects." — CTA "Get This Plan" — Includes: "Consultation based project scoping", "Custom UX/UI and design systems", "Deep collaboration with your team", "Full design and development integration", "Priority Support Included"

## Responsive Behavior
- **Desktop (1440px):** 3-column, middle card elevated.
- **Tablet (768px):** stack to 1-2 columns; featured card loses the negative-margin pop but keeps its tint/color distinction.
- **Mobile (390px):** single column stack, featured card can move to top or stay in original order — keep original DOM order (Elite, Ultimate, Custom).
- **Breakpoint:** ~1024px, ~640px.
