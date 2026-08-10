# Crevix — Page Topology

Source: https://crevix.framer.website/ (Framer template, dark theme, serif/sans pairing)

## Global Layout
- Single page, vertical scroll, no scroll-snap, no smooth-scroll library (no `.lenis`/`.locomotive-scroll` detected, `scroll-behavior: auto`).
- Body background: `rgb(10, 10, 10)` (near-black) — most sections sit directly on this background. Some sections have light/white card backgrounds inset within the dark page (About cards are dark, Process/Pricing/Testimonial/Blog cards are near-white `rgb(250,249,255)`).
- Header/nav is **NOT sticky or fixed** — it scrolls away normally with the page (confirmed via computed `position` — only the Framer marketplace badge cluster is `position: fixed`).
- Max content width ~1280–1320px centered, with ~76px side gutters at desktop (1440px viewport → content starts ~x=76-110).
- A fixed-position widget cluster (bottom-right, `z-index: 2147483647`) shows "Get 50% Code", "Buy Now", "Made in Framer" — these are Framer marketplace upsell badges, **not part of the actual site design** and MUST be excluded from the clone.

## Sections (top → bottom)

1. **Header / Nav** — static (scrolls with page). Logo mark (purple rotated-square with lightbulb icon) + "Crevix." wordmark, center nav links (Pages ▾ dropdown, About Us, Services, Projects, Contact Us), right-aligned pill button "Get Start Now" (gray/translucent).
2. **Hero** — full-bleed dark section. Giant faint background word "Strategic" fades in behind the real heading (decorative). Heading "Strategic Design System For Scaling Brands" (Lora serif, ~80px). Subtext paragraph. Two CTA buttons (primary purple pill "Hire Us Now", secondary translucent pill "More About Us"). Right side: small starburst badge icon + "5+ Years Helping Brands Grow Through Design" text.
3. **Trusted By strip** — "Trusted by" + overlapping circular avatar stack (4-5 avatars) + "Startups and Leading Brands Worldwide".
4. **About** — tag pill "About Crevix." heading "We Create Strategic Design That Helps Brands Grow" (serif). 3-column feature card row: Visual Identity / Design Excellence / Creative Strategy, each with a purple rounded-square icon tile + title + description.
5. **Showreel** — large full-width image card (concrete/laptop mockup photo) with purple gradient overlay wash and large serif "Showreel" text bottom-left. Likely a video trigger (play showreel) — treat as static image card with text overlay for clone; contains a video element per asset scan (`WKG3JrKuuXHmdKCS9p58DUa42A4.mp4` poster image matches this photo).
6. **Services** — tag "Our Services", heading "Built For Today's Brands" + "More Services" pill button (top-right). Below: 4-row list (numbered `/ 01 /` … `/ 04 /`), each row = number + serif title (left) + description (right), separated by thin horizontal dividers. Likely hover state per row (background tint) — treat as static list, add subtle hover.
7. **Projects** — tag "Project Showcase", heading "Our Featured Projects" + description + "Explore More" pill (top-right). Grid of 5 project cards (2 large side-by-side, then 3 more) with tilted/rotated mockup photography, numbered captions ("1. Busix - Framer template", etc.), arrow-icon "More Details" link on first card, arrow icon on others.
8. **Process** — tag "Our Process", heading "How We Build Projects" + description. 3 light cards (near-white bg) side by side: Plan Phase `.01`, Design Phase `.02`, Build Phase `.03` — each has small purple eyebrow label, serif title, and a huge faint numeral bottom-right.
9. **Pricing** — tag "Pricing Plans", heading "Flexible Plans For You". 3 pricing cards: Elite Experience ($900/mo), Ultimate Experience ($1500/mo — visually elevated/highlighted with purple-tinted bg + larger scale + solid purple CTA), Custom Pricing (Contact Us). Each has eyebrow bullet + duration pill (top), price, description, CTA button, divider, "What's included:" checklist with arrow bullets.
10. **Testimonial** — tag "Testimonial", heading "Real Stories From Our Clients", right-aligned "4.9/5" big serif stat + description. Carousel of quote cards (near-white bg, purple quote-mark glyph, quote text, avatar+name+role footer band). 5 pagination dots below, first active (white), rest gray. **INTERACTION MODEL: carousel — auto-rotating and/or dot-click driven** (5 dots for likely 5 testimonial "pages", 3 cards visible at once on desktop).
11. **Blog & News** — tag "Blog & News", heading "Explore Latest Thoughts" + "Explore More" pill. 1 large featured post card (image + category "Modern Trends" + date + title + excerpt) on the left, 3 smaller stacked posts on the right (image thumb + category + title + excerpt).
12. **CTA band** — centered serif heading "Create World-Class Visuals That Elevate Your Brand" + small purple pill "Get A Quote" button, on plain dark background.
13. **FAQ** — tag "FAQ", heading "All You Need To Know". Two-column accordion (4 rows left, 4 rows right), light cards. First item expanded by default (shows answer paragraph + chevron-up), rest collapsed (chevron-down). **INTERACTION MODEL: click-to-expand accordion**, single-open-at-a-time is the common Framer pattern (verify per item; default assumption if not otherwise confirmed). Below grid: "Don't find the answer? We can help. Click here" (link in purple).
14. **Newsletter** — "Join Our Design Newsletter Today" heading (left) + email input pill + "Subscribe Now" button (right), thin divider below.
15. **Footer** — Large layout: left column "Let's Build Something Great" heading + description + "Hire Us Now" button + "Follow Us On:" social icon row (Facebook, Instagram, X, LinkedIn — square dark tiles). Right: 3 link columns (Useful Links, Inner Pages, Contact Info incl. phone/email/address). Bottom: copyright line "© 2026 Crevix. Digital creations protected worldwide" over a huge low-opacity "Crevix." wordmark with purple radial glow, partially cropped by viewport bottom.

## Assets Summary
- 88 `<img>` elements, 33 unique image URLs (rest are repeated logo/icon instances across breakpoint variants).
- 4 `<video>` elements (`.mp4`, all `muted`+`loop`; only the first is `autoplay`) — hero/showreel background motion and possibly project card hover video.
- 0 native inline `<svg>` — all icons are hosted `.svg`/`.png` files referenced via `<img src>` (safe to treat as downloaded image assets rather than inline icon components), except small decorative bullet/arrow icons which appear to be `data:image/svg+xml` inline (framer chevron/arrow glyphs) — recreate these as small inline SVG icon components since they're simple UI glyphs (chevron, arrow, star).
- Favicon: `wMP2HzLEsQgbfcotq51H63FRjs.svg`.

## Responsive Note
Live responsive testing at 768/390px was not obtainable in this session (browser viewport resize tool did not take effect — `window.innerWidth` stayed at 1440 despite resize calls). Responsive behavior for the clone will follow standard mobile-first conventions (nav → hamburger drawer, multi-column grids → single column stacks, hero right-side badge stacks below text) and should be spot-checked in Phase 5 QA once the dev server is running locally.
