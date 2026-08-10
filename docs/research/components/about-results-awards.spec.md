# AboutResultsAwards Specification

## Overview

- **Target file:** `src/components/about/AboutResultsAwards.tsx`
- **Screenshot:** `docs/design-references/crevix-about-master-1920.png`
- **Interaction model:** static with card and row hover

## DOM Structure

Centered results heading, three result cards, awards heading row, five awards rows.

## Computed Styles

- Results heading: centered 64px Lora.
- Result cards: 3 equal columns, 24px gap, 18px radius, ~520px height.
- Card one: white surface, square artwork at top, body copy below.
- Card two: violet background with a large `100%` Lora metric and bottom avatar stack.
- Card three: light poster image with centered 64px violet play button.
- Awards heading: left eyebrow and right heading occupying 55% width.
- Award rows: 1px `rgba(250,249,255,.14)` divider, 100–110px height, 3-column date/title/trait.

## States & Behaviors

- Cards lift 5px on hover with 300ms transform.
- Award row text shifts from muted white to full white; trait turns violet.

## Assets

- `/images/crevix-about/result-innovation.png`
- `/images/crevix-about/result-video-poster.png`

## Responsive Behavior

- 1024px: result cards remain three columns with reduced height.
- 767px: cards stack and award rows use a two-line layout.
