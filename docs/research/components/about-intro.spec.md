# AboutIntro Specification

## Overview

- **Target file:** `src/components/about/AboutIntro.tsx`
- **Screenshot:** `docs/design-references/crevix-about-master-1920.png`
- **Interaction model:** static with link/card hover

## DOM Structure

Shared compact dark header, hero, story split row, three statistic cards, trusted label, six-cell brand grid.

## Computed Styles

- Page background: `rgb(10, 10, 10)`.
- Hero image: `hero-glow.png`, full width, 1920 source ratio 6400/2236, object-fit cover.
- Hero desktop height: ~560px; headline centered at ~80px Lora, 88px line-height, weight 400, `rgb(250,249,255)`.
- Hero eyebrow: 13px grotesk, violet.
- Main width: 1632px at 1920 viewport; 144px side gutter.
- Story desktop: 32% / 68% split, 40px gap; story heading about 48px Lora/52.8px.
- Stats: three equal columns, 24px gap, light background, 18px radius, ~255px high, black text. Values 72–84px Lora.
- Brand grid: three columns by two rows, 1px violet-white border, 190px rows.

## States & Behaviors

- Nav/button hover: violet brightness increase, 200ms.
- Stat hover: translateY(-4px), border becomes violet, 250ms.

## Assets

- `/images/crevix-about/hero-glow.png`
- Existing Oddysee purple and white SVG logos.

## Text Content

French Oddysee content while preserving the target line lengths and hierarchy.

## Responsive Behavior

- 1024px: story remains split, stats stay 3 columns with smaller text.
- 767px: story stacks, stats and logos become one/two columns, hero headline 48px.
