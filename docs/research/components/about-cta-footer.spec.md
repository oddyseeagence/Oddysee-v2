# AboutCtaFooter Specification

## Overview

- **Target file:** `src/components/about/AboutCtaFooter.tsx`
- **Screenshot:** `docs/design-references/crevix-about-master-1920.png`
- **Interaction model:** static links, form presentation, button hover

## DOM Structure

Large gradient CTA panel, newsletter heading/form row, footer information columns, legal row, oversized Oddysee wordmark glow.

## Computed Styles

- CTA: 1632px wide, ~510px high, 24px radius, violet/cream blurred gradient, centered 64px Lora headline.
- CTA button: 132px × 42px, fully rounded, violet background.
- Newsletter row: 1px bottom divider, heading on left, pill input and button on right.
- Footer grid: brand statement 40% plus three compact link/contact columns; 18–20px headings and 14px muted links.
- Oversized wordmark: 250–320px display size, white text, purple glow fading into black at the page bottom.

## States & Behaviors

- Buttons brighten on hover; links transition from muted white to white/violet.
- Newsletter form is presentation-only and does not transmit data.

## Responsive Behavior

- 1024px: footer becomes two-column.
- 767px: CTA headline 38px, newsletter stacks, footer becomes one column, oversized wordmark shrinks to 100px.
