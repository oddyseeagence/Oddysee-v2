# ServiceVisual Specification

## Overview

- **Target file:** `src/components/services/ServiceVisual.tsx`
- **Interaction model:** decorative/static with a subtle parent hover response

## Variants

- `applications`: simplified desktop application and mobile product mockup.
- `social`: stacked social-content cards and engagement controls.
- `ads`: campaign dashboard with metric cards and bar chart.
- `seo`: search input, ranked results, and local-search marker.
- `website`: responsive browser frame with modular page blocks.

## Visual language

- Lucide line icons match the icon set used in the `a-propos` statistics grid.
- Organic SVG paths sit behind each interface mockup and use the current purple
  design token with opacity instead of legacy colors.
- UI cards use current background, foreground, primary, border, radius, and
  shadow utilities.
- The illustrations are `aria-hidden` because adjacent text carries all meaning.

## Responsive behavior

- Fluid aspect ratio on desktop and mobile.
- Internal UI scales through percentage widths and standard responsive padding.
- No critical labels depend on the illustration being legible at small sizes.
