# Footer Specification (includes Newsletter band)

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/crevix.framer.website/15-cta-newsletter.jpg` (newsletter band), `docs/design-references/crevix.framer.website/16-footer.jpg`
- **Interaction model:** static; newsletter has a functional-looking (non-wired) email input + submit button.

## DOM Structure
1. **Newsletter band:** flex row, space-between — left: two-line serif heading "Join Our Design Newsletter Today"; right: email input pill (`placeholder="Business email"`) + "Subscribe Now" pill button (solid purple), inline. Thin horizontal divider below this band.
2. **Main footer:** 2-column-ish layout — LEFT (wider): heading "Let's Build Something Great" (serif, 2 lines) + description paragraph + "Hire Us Now" pill button + "Follow Us On :" label + row of 4 square social icon tiles (Facebook, Instagram, X, LinkedIn). RIGHT: 3 link columns side by side — "Useful Links" (Home, About Us, Services, Projects, Contact Us), "Inner Pages" (Members, Career, Pricing Plan, Blog & News, Privacy Policy), "Contact Info" (phone, email, address as plain text lines, not links necessarily).
3. **Bottom bar:** thin divider, then centered copyright line "© 2026 Crevix. Digital creations protected worldwide", sitting on top of a huge, low-opacity "Crevix." wordmark (with a purple radial-gradient glow behind/around it and a small white dot accent near the top) that bleeds off the bottom of the viewport (cropped, decorative, `aria-hidden`, `pointer-events-none`).

## Computed Styles

### Newsletter heading
- Lora serif, ~40px, color `#faf9ff`, line-height 1.2

### Email input
- background: `#faf9ff`, border-radius: 9999px, padding: 16px 24px, color `#0a0a0a`, placeholder color `rgba(10,10,10,0.4)`, min-width ~280px

### Subscribe button
- background: `#8966ff`, color `#faf9ff`, border-radius 9999px, padding 16px 32px, Satoshi 700

### Footer heading ("Let's Build Something Great")
- Lora serif, ~48px, color `#faf9ff`, line-height 1.15

### Footer description
- Satoshi 400, 16px, color `rgba(250,249,255,0.7)`, margin-top 16px, max-width ~360px

### Social icon tile
- 40x40px, background `rgba(250,249,255,0.1)`, border-radius: 10px, icon centered ~18px color `#faf9ff`

### Link columns
- column title ("Useful Links" etc.): Satoshi 700, ~18px, color `#faf9ff`
- links: Satoshi 400, ~16px, color `rgba(250,249,255,0.7)`, vertical gap ~16px, hover color `#faf9ff`

### Contact info column
- same as links but non-interactive plain text lines (phone / email / address)

### Bottom copyright
- Satoshi 400, 14px, color `rgba(250,249,255,0.6)`, centered

### Giant wordmark background
- Lora or Satoshi bold, extremely large (~280-320px font-size), color `#faf9ff` at reduced opacity blended with a purple radial gradient glow (`background: radial-gradient(circle at 70% 30%, rgba(137,102,255,0.4), transparent 60%)` behind the text), positioned absolute, bottom of section, overflow hidden by viewport (text is cropped, only top portion visible), a small solid white dot decorates near the top of the "x" or between letters (decorative accent, ~16px circle)

## States & Behaviors
- Scroll reveal on newsletter/footer content (subtle fade-up), 550ms ease-out.
- Social icon hover: background lightens to `rgba(250,249,255,0.2)`, 150ms.
- Footer link hover: color `#faf9ff`, underline optional, 150ms.
- Subscribe button hover: brightness 1.08.
- Email input: standard focus ring (`ring-2 ring-[#8966ff]`).

## Assets
- Social icons: `FacebookIcon`, `InstagramIcon`, `XIcon`, `LinkedInIcon` from `src/components/icons.tsx`.

## Text Content (verbatim)
- Newsletter: "Join Our Design Newsletter Today", input placeholder "Business email", button "Subscribe Now"
- Footer heading: "Let's Build Something Great"
- Footer description: "We craft modern, user-focused digital experiences that help brands grow, connect, and leave a lasting impactful impression."
- Button: "Hire Us Now"
- "Follow Us On :"
- **Useful Links:** Home, About Us, Services, Projects, Contact Us
- **Inner Pages:** Members, Career, Pricing Plan, Blog & News, Privacy Policy
- **Contact Info:** "+1 (555) 123-4567", "hello@crevixstudio.com", "350 Fifth Avenue, New York, NY 10118, USA"
- Copyright: "© 2026 Crevix. Digital creations protected worldwide"
- Giant wordmark: "Crevix."

## Responsive Behavior
- **Desktop (1440px):** newsletter row side-by-side; footer 2-column (left content + 3-col links) as described.
- **Tablet (768px):** newsletter stacks (heading above input row); footer link columns may wrap to 2+1.
- **Mobile (390px):** newsletter fully stacked, input full-width; footer left content stacks above link columns, which stack to single column each; giant wordmark font-size scales down proportionally but stays cropped/bleeding off bottom.
- **Breakpoint:** ~768px.
