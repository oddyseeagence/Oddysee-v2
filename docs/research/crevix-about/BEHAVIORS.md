# Crevix About Page Behaviors

## Observed live behaviors

- The header is visually transparent at the top and overlays the hero background. Its compact central nav is a translucent pill.
- Framer reveals and count-up effects are scroll-driven. The supplied capture shows their completed states and is the implementation source of truth.
- Team images and result cards use subtle scale/brightness hover transitions.
- Testimonial content is presented as a horizontal carousel on the live page; the supplied desktop capture shows three cards simultaneously. The clone keeps three visible cards and exposes a mobile horizontal scroller.
- FAQ rows are click-driven accordions. Only one item should be open at a time; the first item starts open.
- Buttons use short background/brightness transitions of roughly 200–300ms.

## Clone implementation

- Use CSS transitions and the existing reduced-motion safeguards.
- Keep information sections in normal flow so full-page captures remain complete and stable.
- Preserve keyboard focus styles for links and FAQ buttons.
- Mobile testimonial cards scroll horizontally with snap points; desktop cards form a three-column grid.
