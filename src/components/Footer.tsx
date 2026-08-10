import type { ComponentType, SVGProps } from "react";

import {
  ChevronDownIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/icons";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterGroup {
  heading?: string;
  links: FooterLink[];
}

interface FooterColumn {
  title: string;
  groups: FooterGroup[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Create",
    groups: [
      {
        heading: "Business tools",
        links: [
          { label: "Project strategy", href: "/services" },
          { label: "Business account", href: "/contact" },
          { label: "Business center", href: "/contact" },
          { label: "Creative shop", href: "/projets" },
        ],
      },
      {
        heading: "Creative tools",
        links: [
          { label: "Oddysee Studio", href: "/services" },
          { label: "Creative exchange", href: "/contact" },
          { label: "Creative center", href: "/projets" },
        ],
      },
    ],
  },
  {
    title: "Learn",
    groups: [
      {
        heading: "Get inspired",
        links: [
          { label: "Insights", href: "/projets" },
          { label: "Case studies", href: "/projets" },
          { label: "Blog", href: "/" },
        ],
      },
      {
        heading: "Build skills",
        links: [
          { label: "Oddysee Academy", href: "/a-propos" },
          { label: "Certification", href: "/contact" },
        ],
      },
    ],
  },
  {
    title: "Support",
    groups: [
      {
        links: [
          { label: "Marketing partners", href: "/a-propos" },
          { label: "For agencies", href: "/services" },
          { label: "Brand safety", href: "/a-propos" },
          { label: "Help center", href: "/contact" },
          { label: "Contact us", href: "/contact" },
        ],
      },
      {
        heading: "Refer",
        links: [{ label: "Oddysee Affiliate", href: "/contact" }],
      },
    ],
  },
];

const legalLinks: FooterLink[] = [
  { label: "Terms & policies", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Oddysee.com", href: "/" },
];

const socialLinks: {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
];

const linkClassName =
  "font-sans text-sm leading-6 text-[#1D0D3B]/75 transition hover:text-[#1D0D3B] hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#632BC5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EDEDED]";

function FooterColumnContent({ column }: { column: FooterColumn }) {
  return (
    <div className="space-y-7">
      {column.groups.map((group, groupIndex) => (
        <div key={column.title + "-" + (group.heading ?? groupIndex)}>
          {group.heading ? (
            <p className="mb-2 font-sans text-sm font-bold text-[#1D0D3B]">
              {group.heading}
            </p>
          ) : null}
          <ul className="space-y-1.5">
            {group.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={linkClassName}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function FooterCta() {
  return (
    <section className="max-w-[410px] text-[#1D0D3B]">
      <h2 className="font-sans text-[clamp(40px,3vw,50px)] font-medium leading-[0.98] tracking-[-0.04em]">
        Let&apos;s Build
        <br />
        Something Great
      </h2>
      <p className="mt-6 max-w-[390px] font-sans text-sm leading-[1.5] text-[#1D0D3B]/80">
        We craft modern, user-focused digital experiences that help brands
        grow, connect, and leave a lasting impactful impression.
      </p>
      <a
        href="/contact"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-[#1D0D3B] px-8 py-4 font-sans text-sm font-bold text-white backdrop-blur-md transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#632BC5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F7F3FF]"
      >
        Hire Us Now
      </a>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="page-cover font-sans p-4 md:p-6 lg:p-8">
      <div className="footer-panel relative isolate mx-auto max-w-[1536px] bg-[#F7F3FF] px-6 py-12 md:px-10 md:py-14 lg:px-14 lg:py-16">
        <span
          aria-hidden="true"
          className="footer-brand-mark pointer-events-none absolute -right-24 -top-24 z-0 hidden h-[430px] w-[430px] select-none xl:block"
        />

        <nav aria-label="Footer navigation" className="relative z-10">
          <div className="space-y-8 md:hidden">
            <FooterCta />
            <div className="space-y-2">
              {footerColumns.map((column) => (
                <details
                  key={column.title}
                  className="group border-b border-[#1D0D3B]/15"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between py-5 font-sans text-lg font-bold text-[#1D0D3B] outline-none focus-visible:ring-2 focus-visible:ring-[#632BC5] [&::-webkit-details-marker]:hidden">
                    {column.title}
                    <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="pb-6">
                    <FooterColumnContent column={column} />
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="hidden grid-cols-2 gap-x-12 gap-y-14 md:grid lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-10 xl:pr-64">
            <div className="md:col-span-2 lg:col-span-3 xl:col-span-2">
              <FooterCta />
            </div>
            {footerColumns.map((column) => (
              <section
                key={column.title}
                aria-labelledby={"footer-" + column.title}
              >
                <h2
                  id={"footer-" + column.title}
                  className="mb-5 font-sans text-base font-bold text-[#1D0D3B]"
                >
                  {column.title}
                </h2>
                <FooterColumnContent column={column} />
              </section>
            ))}
          </div>
        </nav>

        <div className="relative z-10 mt-16 grid items-center gap-8 md:mt-24 xl:mt-32 xl:grid-cols-[1fr_auto_1fr]">
          <label className="relative mx-auto block w-full max-w-[280px] xl:mx-0">
            <span className="sr-only">Select language and region</span>
            <select
              defaultValue="english-global"
              className="h-12 w-full appearance-none rounded-full border border-[#1D0D3B]/25 bg-transparent px-6 pr-12 font-sans text-sm font-semibold text-[#1D0D3B] outline-none transition hover:border-[#1D0D3B]/50 focus-visible:border-[#632BC5] focus-visible:ring-2 focus-visible:ring-[#632BC5]/30"
            >
              <option value="english-global">English - Global</option>
              <option value="french">Français</option>
              <option value="english-us">English - United States</option>
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1D0D3B]/60"
            />
          </label>

          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 font-sans text-xs font-semibold text-[#1D0D3B]">
            <span>© 2026</span>
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className={linkClassName}>
                {link.label}
              </a>
            ))}
          </div>

          <ul className="flex items-center justify-center gap-3 xl:justify-end">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1D0D3B]/25 text-[#1D0D3B] transition hover:border-[#1D0D3B] hover:bg-[#1D0D3B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#632BC5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EDEDED]"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
