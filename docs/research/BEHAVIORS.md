# Crevix — Behavior Bible

## Global
- **Scroll library:** none detected (no Lenis/Locomotive class markers, native `scroll-behavior: auto`). Use native scroll.
- **Header:** static, NOT sticky/fixed — scrolls away with the page (confirmed via computed style scan; only element with `position: fixed` site-wide is the Framer marketplace badge cluster, which is excluded from the clone).
- **Hero entrance animation:** on load, the giant background word ("Strategic") and the real heading/subtext/buttons fade/blur in with a staggered delay (~0.3-0.6s stagger observed between first paint and settled state over ~2-3s). Implement as a simple staggered fade-up (opacity 0→1, translateY 12-16px→0, ~0.6s ease-out, staggered ~100-150ms per element) on mount — this is a page-load reveal, not scroll-triggered (content was already in the initial viewport).
- **Scroll-into-view reveals:** sections below the fold (About cards, Showreel, Services rows, Project cards, Process cards, Pricing cards, Testimonial cards, Blog cards) likely use the same fade-up-on-enter pattern common to Framer sites. Treat as: `opacity 0→1, translateY 20px→0, duration 0.5-0.6s ease-out`, triggered once when ~20-30% of the element enters the viewport (IntersectionObserver threshold ~0.2, no repeat). Apply consistently per component rather than per-section-specific tuning, since exact per-element easing could not be diffed via computed style scroll-state capture in this session.

## Testimonial Carousel
- **Interaction model:** carousel — 5 pagination dots visible, first dot active (solid white), rest gray/dim. 3 testimonial cards shown at once at desktop width; page text listing shows content repeating (6 quotes cycling through 5 "pages" worth of positions), consistent with a horizontally-sliding track.
- Implement as an auto-advancing carousel (common Framer default ~4-5s interval) with dot click-to-jump support. Pause-on-hover is a reasonable default; exact timing not confirmed from static extraction — tune visually against the live site if discrepancy is spotted in QA.

## FAQ Accordion
- **Interaction model:** click-to-expand accordion, two columns of 4 items each (8 total).
- First item ("What services do you offer?") is expanded by default on load, revealing its answer paragraph and a chevron-up icon; all others show chevron-down and are collapsed.
- Standard behavior: clicking a collapsed item expands it (height auto + fade-in of answer text, chevron rotates 180°); most Framer FAQ components allow only one open at a time per column or globally — default to single-open-at-a-time globally unless QA shows otherwise.

## Buttons
- **Primary pill button** (e.g. "Hire Us Now", "Get This Plan" on featured plan): solid purple background (`rgb(137,102,255)` / gradient `rgb(177,155,253)→rgb(86,45,232)` on some elements), fully rounded (`border-radius: 9999px`), padding `16px 40px`. Likely a subtle scale/brightness hover (Framer default `scale(1.02)` or opacity shift) — not confirmed via diff, apply a conservative hover (slight brightness increase + 150ms ease).
- **Secondary pill button** (e.g. "More About Us"): translucent white background `rgba(250,249,255,0.3)`, same pill radius, white text.
- **Tag/eyebrow pills** ("About Crevix.", "Our Services", etc.): small text with flanking arrow-dot glyphs, no visible background box.

## Nav
- "Pages" nav item has a dropdown chevron — click reveals a dropdown menu (not captured in this session's sweep; implement as a simple dropdown revealing the "Useful Links"-style page list seen in the footer/page-text dump: Home, About Us, Services, Service Details, Projects, Project Details, Members, Members Details, Blog & News, Blog Details, Pricing Plan, Career, Career Details, Contract, Privacy Policy, 404 Page — grouped under "More Pages"/"Utility Pages" per the extracted text). Since this clone's scope is the single landing page, implement the dropdown UI shell but link items can be non-functional anchors.

## Known Gaps (flag for Phase 5 QA)
- Live responsive breakpoint behavior (768px/390px) could not be captured this session — the browser automation viewport resize did not take effect (`window.innerWidth` remained 1440 after multiple resize calls). Mobile/tablet layouts in the clone are built on standard Tailwind mobile-first stacking conventions and must be visually diffed against the real site in a follow-up QA pass.
- Exact hover-state computed CSS diffs (color/shadow/transform before-after) were not captured for buttons, nav links, project cards, or pricing cards due to the same session constraint; implemented hover states are reasonable defaults (brightness/scale/underline) pending visual QA.
- Testimonial carousel auto-advance interval and easing, and FAQ accordion open/close transition timing, are Framer-typical defaults, not measured values.
