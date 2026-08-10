# FAQ Specification

## Overview
- **Target file:** `src/components/Faq.tsx`
- **Screenshot:** `docs/design-references/crevix.framer.website/13-blog-faq-transition.jpg`, `docs/design-references/crevix.framer.website/14-faq-full.jpg`
- **Interaction model:** CLICK-TO-EXPAND ACCORDION. First item expanded by default; rest collapsed. Two columns of 4 items each (8 total).

## DOM Structure
Centered header: eyebrow "FAQ" + heading "All You Need To Know" (serif, centered).

Below: 2-column grid (gap ~24px horizontal, ~16px vertical), each column has 4 accordion item cards stacked. Each item: light bg (`#faf9ff`), `border-radius: 16px`, padding ~24px 28px, flex row header (question text + chevron icon right-aligned) — click toggles expansion. Expanded item additionally shows an answer paragraph below the question with a gap.

Below the grid: centered helper text "Don't find the answer? We can help. `Click here`" where "Click here" is a purple link.

## Computed Styles

### Header
- eyebrow centered: Satoshi 400 16px + arrow-dot flanks; heading: Lora serif ~48px, centered

### Accordion item (collapsed)
- background: `#faf9ff`, border-radius: 16px, padding: 24px 28px
- question: Satoshi 500, ~18px, color `#0a0a0a`
- chevron: `ChevronDownIcon`, ~20px, color `rgba(10,10,10,0.5)`, right-aligned via flex `justify-content: space-between`

### Accordion item (expanded — first item only by default)
- Same card, chevron becomes `ChevronUpIcon`
- Answer paragraph: Satoshi 400, ~16px, line-height 1.5, color `rgba(10,10,10,0.65)`, margin-top: 12px

### Helper text row
- Satoshi 400 16px, color `rgba(250,249,255,0.7)`, centered; "Click here" link: color `#a78fff`, underline on hover

## States & Behaviors

### Accordion — click to expand
- **Trigger:** click anywhere on the item header
- **Before (collapsed):** answer `height: 0, opacity: 0, overflow: hidden`
- **After (expanded):** answer `height: auto (animate via max-height or grid-template-rows trick), opacity: 1`
- **Transition:** 300ms ease for height/opacity, chevron rotates 180deg over 200ms
- Only one item open at a time is the common Framer pattern — clicking a new item closes the previously open one (implement globally across both columns, not per-column). Default open: first item (col 1, row 1) — "What services do you offer?".

## Assets
None (icons only: `ChevronDownIcon`, `ChevronUpIcon`).

## Text Content (verbatim)
- Eyebrow: "FAQ" / Heading: "All You Need To Know"
- Column 1:
  1. "What services do you offer?" (expanded by default) — "We offer UI UX design, web design, branding, and complete digital design solutions for businesses."
  2. "How much do your services cost?"
  3. "How long does a project take?"
  4. "Do you offer revisions on work?"
- Column 2:
  1. "Can I see your previous work?"
  2. "Do you work with startups?"
  3. "What tools do you use?"
  4. "Do you design mobile apps?"
  (Answers for column 2 and column 1 items 2-4 were not visible/expanded on the live site during extraction — write plausible, concise one-sentence answers consistent with the agency's tone, matching the style of the one confirmed answer.)
- Helper text: "Don't find the answer? We can help. Click here"

## Responsive Behavior
- **Desktop (1440px):** 2-column grid.
- **Tablet (768px):** may remain 2-column narrower or go single column.
- **Mobile (390px):** single column, all 8 items stacked in original left-column-then-right-column order.
- **Breakpoint:** ~768px.
