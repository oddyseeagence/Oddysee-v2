import Image from "next/image";
import Link from "next/link";

interface LegalLink {
  label: string;
  href: string;
}

interface LandingLegalProps {
  disclaimer: string;
  links?: readonly LegalLink[];
  copyright?: string;
}

export function LandingLegal({
  disclaimer,
  links = [],
  copyright = "© 2026 Oddysee. Tous droits réservés.",
}: LandingLegalProps) {
  return (
    <footer className="page-cover p-4 font-sans md:p-6 lg:p-8">
      <div className="footer-panel relative isolate mx-auto max-w-[1320px] border border-[#1D0D3B]/10 bg-[#F7F3FF] px-6 py-7 md:px-10 md:py-8 lg:px-12">
        <span
          aria-hidden="true"
          className="footer-brand-mark pointer-events-none absolute -right-12 -top-16 z-0 hidden h-[280px] w-[280px] select-none lg:block"
        />

        <div className="relative z-10 grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-start md:gap-10 lg:pr-44">
          <Link
            href="/"
            aria-label="Retour à l’accueil Oddysee"
            className="inline-flex w-fit rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#632BC5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F7F3FF]"
          >
            <Image
              src="/images/2Oddysee_Horizontal_White.svg"
              alt="Oddysee"
              width={192}
              height={73}
              className="h-10 w-auto"
            />
          </Link>

          <p className="max-w-[760px] text-sm leading-6 text-[#1D0D3B]/70">
            {disclaimer}
          </p>
        </div>

        <div className="relative z-10 mt-8 flex flex-col gap-5 border-t border-[#1D0D3B]/15 pt-5 text-xs font-medium text-[#1D0D3B]/60 sm:flex-row sm:items-center sm:justify-between lg:pr-44">
          <p>{copyright}</p>
          {links.length ? (
            <nav aria-label="Liens légaux">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition hover:text-[#1D0D3B] hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#632BC5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3FF]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
