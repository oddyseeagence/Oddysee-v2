# Blog Specification

## Overview
- **Target file:** `src/components/Blog.tsx`
- **Screenshot:** `docs/design-references/crevix.framer.website/12-blog-heading.jpg`, `docs/design-references/crevix.framer.website/13-blog-faq-transition.jpg`
- **Interaction model:** static, scroll-reveal fade-up.

## DOM Structure
Header: eyebrow "Blog & News" + heading "Explore Latest Thoughts" (serif, left) + "Explore More" pill button (right-aligned, same row).

Below: 2-column layout — LEFT: one large featured post card (image ~large, ~16:10, `border-radius: 16px`, light gray bg mockup photo) with caption below (outside image): category label (left) + date (right) on one line, then title (serif, larger), then excerpt paragraph. RIGHT column: 3 smaller stacked posts, each = small square/rect thumbnail image (~120x120px) + text block to its right (category label, serif title, excerpt), rows separated by generous vertical gap (~40px), NO dividers.

## Computed Styles

### Header
- eyebrow: Satoshi 400 16px + arrow flanks; heading: Lora serif ~48px; button: `rgba(250,249,255,0.15)` bg, pill, padding 16px 32px

### Featured post (left column)
- image: border-radius 16px, aspect-ratio ~16:10, object-fit cover
- category/date row: Satoshi 400 14px, color `rgba(250,249,255,0.6)`, flex justify-between
- title: Lora serif ~28px, color `#faf9ff`, margin-top 12px
- excerpt: Satoshi 400 16px, color `rgba(250,249,255,0.7)`, margin-top 8px

### Small post row (right column, x3)
- flex row, gap 20px, align-items: flex-start
- thumbnail: ~120x120px, border-radius 12px, object-fit cover, flex-shrink 0
- category: Satoshi 400 14px, color `rgba(250,249,255,0.6)`
- title: Lora serif ~22px, color `#faf9ff`, margin-top 4px
- excerpt: Satoshi 400 15px, color `rgba(250,249,255,0.7)`, margin-top 4px

## States & Behaviors

### Scroll reveal
- Featured post fades up first, then small posts stagger ~100ms each, 550ms ease-out.

### Card hover
- Image slight scale (`1.02`, 300ms) on the featured/thumbnail images.

## Assets
- Featured post image: `public/images/U6Npa7O4X2OlLqe9caPvFM1fQ.png` (large, "Studio Display Mockups" monitor photo)
- Small post thumbnails: `public/images/PTrOdXdJAOGMtfCb7ccLalR0o.png` (hand with phone), `public/images/AJqFBTpotUc0ji5w7bB9Y4dQ7hM.png` (tablet), `public/images/4bk7BRxDDKxeAdxLYsjHmyTbc2Q.png` (laptop with black ring mockup)

## Text Content (verbatim)
- Eyebrow: "Blog & News" / Heading: "Explore Latest Thoughts" / Button: "Explore More"
- Featured: category "Modern Trends", date "Jul 7, 2026", title "Modern UI Design Trends", excerpt "User experience will evolve with AI, personalization, accessibility, and smarter interactions across all digital platforms."
- Post 2: category "Mobile First", title "Mobile App First Design Strategy", excerpt "Design for smaller screens first, ensuring responsive layouts, faster performance, and seamless experiences across devices."
- Post 3: category "UX Practices", title "Essential UI Best Practices Guide", excerpt "Learn key usability principles and user-centered strategies to create intuitive and effective digital interfaces."
- Post 4: category "Design Future", title "Future Directions Of UI Design", excerpt "UI design will evolve with AI, voice interaction, immersive experiences, and more personalized, adaptive user interfaces."

## Responsive Behavior
- **Desktop (1440px):** 2-column (featured left, 3-stack right) as described.
- **Tablet (768px):** stack featured on top, then 3 small posts below (still row-style thumbnail+text, or 2-col grid).
- **Mobile (390px):** all single column, thumbnails become full-width top of each post block instead of side-by-side.
- **Breakpoint:** ~1024px, ~640px.
