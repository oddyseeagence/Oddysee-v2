# Crevix About Page Topology

Master reference: `docs/design-references/crevix-about-master-1920.png`

## Global layout

- 1920px source viewport, near-black `#0a0a0a` page background.
- Main content width is approximately 1632px with 144px desktop side gutters.
- Lora is used for all display headings; compact Satoshi-style grotesk is used for labels and body copy.
- Shared palette: `#faf9ff` foreground, `#a88fff` violet, `#8966ff` saturated violet, white cards with black text, and `rgba(250,249,255,.14)` dividers.
- Navigation sits over the hero. All other sections remain in normal document flow.

## Section order and interaction model

1. **Compact navigation + hero** — static positioning over a gradient image; link hover and CTA hover.
2. **Story + statistics** — split story row followed by three light statistic cards; static with subtle card hover.
3. **Trusted brands** — six-cell outlined logo grid; static.
4. **Purpose timeline** — left-aligned heading and a right-side three-step vertical timeline; static.
5. **Team grid** — two rows of three square cards with five monochrome portraits plus a violet recruitment card; image hover zoom.
6. **Results** — centered heading over three equal cards: image/text, violet metric, and video-poster composition; card hover.
7. **Awards** — two-column heading row followed by five full-width divider rows; row hover.
8. **Testimonials** — heading/rating row and three light quote cards; static desktop strip.
9. **FAQ** — centered heading with two columns of accordion rows; click-driven disclosure.
10. **Gradient CTA** — large rounded gradient panel with centered heading and small violet action.
11. **Newsletter + footer + oversized brand wordmark** — email row, four-column footer, legal row, then purple-glow oversized Oddysee wordmark.

## Responsive architecture

- At 1024px: content gutters reduce, story/timeline remain two-column, team/results/testimonials use two columns.
- At 767px: every split section stacks, card grids become one column, FAQ becomes one column, footer columns become two columns.
- At 480px: typography and section spacing compress; navigation becomes the shared mobile menu.
