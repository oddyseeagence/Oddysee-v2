# AboutTestimonialsFaq Specification

## Overview

- **Target files:** `src/components/about/AboutTestimonials.tsx`, `src/components/about/AboutFaq.tsx`
- **Screenshot:** `docs/design-references/crevix-about-master-1920.png`
- **Interaction model:** static testimonial strip and click-driven FAQ

## DOM Structure

Testimonial heading/rating, three quote cards, centered FAQ heading, two accordion columns, help link.

## Computed Styles

- Testimonial heading: 64px Lora; rating 56px violet.
- Quote cards: white surface, black text, 18px radius, ~405px height, large violet quote mark top-right, avatar strip bottom.
- FAQ: centered 64px Lora heading.
- FAQ rows: white background, black text, 72px closed height, 18px radius, 14–16px body text, violet plus/minus on right.
- Grid gap: 16px vertical, 24px between columns.

## States & Behaviors

- First FAQ item open by default.
- Clicking a row closes the current item and opens the selected item.
- Answer height and opacity transition over 280ms; chevron rotates 180 degrees.

## Responsive Behavior

- 1024px: testimonials keep three columns with tighter type.
- 767px: testimonials become horizontally scrollable snap cards; FAQ becomes one column.
