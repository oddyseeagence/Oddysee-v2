# Showreel Specification

## Overview
- **Target file:** `src/components/Showreel.tsx`
- **Screenshot:** `docs/design-references/crevix.framer.website/04-showreel.jpg`
- **Interaction model:** static image/video card, scroll-reveal fade-up on enter. No click interaction confirmed (treat as decorative visual, not a video player trigger, since no play-button overlay was observed).

## DOM Structure
Full-width card, `border-radius: 24px`, overflow hidden, height ~700-750px at desktop, contained within the page's max-width wrapper (not full-bleed to viewport edge — has same side gutters as other sections).
- Background: photo of a laptop/mockup on concrete surface (grayscale-ish photography).
- Overlay: `linear-gradient(236deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.05) 20%, rgba(10,10,10,0.05) 50%, rgb(10,10,10) 68%, rgb(10,10,10) 100%)` — dark fade from top-right transparent to bottom-left solid black, PLUS a purple tint wash (the extracted screenshot shows a purple-gray cast over the image, likely a `mix-blend-mode` or semi-transparent purple overlay layer — apply `background: rgba(137,102,255,0.15)` with `mix-blend-mode: multiply` or `overlay` on top of the image, tuned to match screenshot).
- Text: large serif "Showreel" bottom-left, white, ~72px, positioned with padding ~48-64px from edges.

## Computed Styles

### Card container
- border-radius: 24px, overflow: hidden, position: relative, height: ~700px (desktop), width: 100% (within max-width wrapper)

### Background image
- object-fit: cover, object-position: center, width/height: 100%

### Gradient overlay (bottom-left dark fade)
- `background: linear-gradient(236deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.05) 20%, rgba(10,10,10,0.05) 50%, rgb(10,10,10) 68%, rgb(10,10,10) 100%)`, position: absolute inset-0

### "Showreel" text
- font: Lora serif, ~72-80px, color: `#faf9ff`, position: absolute, bottom: ~48px, left: ~48px, z-index above overlay

## States & Behaviors

### Scroll reveal
- **Trigger:** IntersectionObserver ~0.2 threshold
- **Before/After:** `opacity 0→1, translateY 24px→0`, 600ms ease-out

### Video note
An underlying `<video>` element (`WKG3JrKuuXHmdKCS9p58DUa42A4.mp4`, poster `ZLfjupIzIYXJw7hzRvT4aWylANA.png`) exists on the live site for this exact visual (poster image matches this card's photo). Implement as: poster image shown by default via `<video poster=".." muted loop playsInline>` with the mp4 as source, autoPlay on viewport-enter (IntersectionObserver) if feasible, else static `<Image>` of the poster is an acceptable fallback — prioritize matching the visual, video playback is a bonus.

## Assets
- Poster/background image: `public/images/ZLfjupIzIYXJw7hzRvT4aWylANA.png` (1820KB, high-res)
- Video: `public/videos/WKG3JrKuuXHmdKCS9p58DUa42A4.mp4`

## Text Content (verbatim)
- "Showreel"

## Responsive Behavior
- **Desktop (1440px):** height ~700px, text ~72-80px.
- **Tablet (768px):** height ~450-500px, text ~48px.
- **Mobile (390px):** height ~320-360px, text ~36px, padding reduced to ~24px.
- **Breakpoint:** ~768px.
