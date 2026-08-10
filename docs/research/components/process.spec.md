# Process Specification

## Overview
- **Target file:** `src/components/Process.tsx`
- **Screenshot:** `docs/design-references/crevix.framer.website/08-process.jpg`
- **Interaction model:** static, scroll-reveal fade-up.

## DOM Structure
Header: eyebrow "Our Process" + heading "How We Build Projects" (serif, left) + description paragraph, all left-aligned this time (unlike Projects section which right-aligns button).

Below: 3-column grid of light cards (`background: #faf9ff`, `border-radius: 16px`, equal width, gap ~24px, height ~400-450px). Each card: small purple eyebrow label top-left ("Plan Phase" / "Design Phase" / "Build Phase"), dark serif title below it (2 lines), then a LOT of empty vertical space, then a huge faint numeral bottom-right (".01" / ".02" / ".03") in light-gray, very large (~72-96px), partially cropped by card edge.

## Computed Styles

### Header
- eyebrow: Satoshi 400 16px, color `#faf9ff` + purple arrow flanks
- heading: Lora serif ~56px, color `#faf9ff`
- description: Satoshi 400 16px, color `rgba(250,249,255,0.7)`, max-width ~600px

### Card
- background: `#faf9ff`, border-radius: 16px, padding: 32px, position: relative, overflow: hidden, min-height: ~420px

### Card eyebrow ("Plan Phase")
- Satoshi 500, ~14px, color `#8966ff` (purple), letter-spacing slight

### Card title
- Lora serif, ~28px, color `#0a0a0a` (dark text on light card), line-height 1.3, margin-top ~12px, max-width ~85%

### Card numeral (".01")
- Lora serif or Satoshi, ~88px, color `rgba(10,10,10,0.08)` (very light gray), position: absolute, bottom: 16px, right: 24px, line-height: 1

## States & Behaviors

### Scroll reveal
- Cards fade up staggered ~100ms left→right, 550ms ease-out.

## Assets
None (pure typography, no images in this section).

## Text Content (verbatim)
- Eyebrow: "Our Process"
- Heading: "How We Build Projects"
- Description: "We follow simple steps to plan, design, and deliver projects that meet client goals effectively and ensure long term success."
- Card 1: "Plan Phase" / "Design Concept and Wireframing uI" / ".01"
- Card 2: "Design Phase" / "Creating full UI Design and Prototyping" / ".02"
- Card 3: "Build Phase" / "Testing UI and Ensuring Quality Assurance" / ".03"

## Responsive Behavior
- **Desktop (1440px):** 3-column grid.
- **Tablet (768px):** 2-column + 1 wrapping, or keep 3 narrower columns with reduced padding.
- **Mobile (390px):** single column, cards stack, reduce min-height to ~280px.
- **Breakpoint:** ~768px.
