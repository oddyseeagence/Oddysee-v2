# ServicesShowcasePage Specification

## Overview

- **Target file:** `src/components/services/ServicesShowcasePage.tsx`
- **Reference:** existing homepage and `a-propos` route
- **Interaction model:** static content with link hover/focus states

## DOM structure

- Page wrapper
  - Main
    - Services hero
    - Five service sections rendered from one typed data array
      - Service label and line icon
      - Large promise with a highlighted phrase
      - French description paragraph
      - `Parler à un expert` link
      - Decorative service visual
    - Existing `Testimonials`
    - Existing `Faq`
  - Existing `Footer`

## Design tokens and typography

- Backgrounds use `background`, white, and the existing lavender treatment.
- Foreground uses `foreground`; muted copy uses foreground opacity.
- Accent, highlights, blobs, controls, and CTA buttons use `primary`/`accent`.
- Hero typography copies the `a-propos` hero scale: 36px mobile, 60px tablet,
  and 80px desktop with the existing Host Grotesk heading family.
- Service promises copy the `a-propos` section scale: 42px mobile, 52px small,
  and 64px desktop.
- Service labels copy the 6-card grid heading scale: 22–24px semibold.
- Cards use the existing 3xl radius token and soft primary-tinted shadows.

## Content (verbatim headings)

1. Applications & logiciels — “Donnez vie à vos applications et logiciels.”
2. Réseaux sociaux — “Transformez vos réseaux sociaux en Machine à crédibilité.”
3. Publicité digitale — “Menez des campagnes numériques qui donnent des Résultats concrets.”
4. SEO — “Apparaître dans les Premiers résultats de recherche.”
5. Sites web — “Faites évoluer votre entreprise avec un meilleur Site-web.”

Each entry includes a French paragraph covering the service scope supplied in
the brief and a `/contact` CTA labeled `Parler à un expert`.

## States and behaviors

- Service visual/card hover: slight vertical translation and icon rotation.
- CTA hover: slightly darker/stronger purple plus a small arrow translation.
- Focus-visible: primary-colored ring with offset.
- No content is hidden behind JavaScript.

## Responsive behavior

- **Desktop (>=1024px):** two equal columns with alternating visual side.
- **Tablet (<1024px):** single column, copy first, visual second.
- **Mobile (390px):** single column, reduced padding, fluid heading wrapping,
  full-width visual, and full-width or content-sized CTA as space permits.
