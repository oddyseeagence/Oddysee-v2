# AboutPurposeTeam Specification

## Overview

- **Target file:** `src/components/about/AboutPurposeTeam.tsx`
- **Screenshot:** `docs/design-references/crevix-about-master-1920.png`
- **Interaction model:** static timeline with portrait-card hover

## DOM Structure

Purpose heading/timeline, team heading/copy, two-row team grid containing five portraits and one recruitment card.

## Computed Styles

- Section spacing: 190–230px between major blocks.
- Section heading: 64px Lora, 64px line-height, white.
- Timeline grid: left rail 3px violet, 48px circular markers, three content rows with bottom dividers.
- Team grid: 3 equal columns, 24px gaps; cards approximately square with 18px radius and hidden overflow.
- Portraits: grayscale assets, object-fit cover, centered faces.
- Recruitment tile: `#a88fff` to `#8966ff` soft gradient, centered circular plus icon and 15px label.

## States & Behaviors

- Team portrait hover: image scale 1 → 1.035 and brightness 1 → 1.08 over 450ms.
- Recruitment card hover: gradient brightens and plus rotates 45 degrees.

## Assets

- `/images/crevix-about/team-ethan.png`
- `/images/crevix-about/team-noah.png`
- `/images/crevix-about/team-olivia.png`
- `/images/crevix-about/team-liam.png`
- `/images/crevix-about/team-ava.png`

## Text Content

Oddysee mission, vision, values, and French team labels.

## Responsive Behavior

- 1024px: team grid uses two columns.
- 767px: purpose split stacks and team grid becomes one column.
