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
    <footer className="page-cover px-4 py-6 font-sans text-white md:px-6 md:py-7 lg:px-8">
      <div className="mx-auto max-w-[1320px] rounded-[24px] border border-white/10 bg-white/[0.04] px-6 py-7 md:px-10 md:py-8">
        <div className="grid gap-6 md:grid-cols-[220px_minmax(0,1fr)] md:items-start md:gap-10">
          <Link
            href="/"
            aria-label="Retour à l’accueil Oddysee"
            className="inline-flex w-fit rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#A78FFF] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1D0D3B]"
          >
            <Image
              src="/images/Oddysee_Horizontal_White-1.svg"
              alt="Oddysee"
              width={192}
              height={73}
              className="h-10 w-auto"
            />
          </Link>

          <p className="max-w-[820px] text-sm leading-6 text-white/55">
            {disclaimer}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>{copyright}</p>
          {links.length ? (
            <nav aria-label="Liens légaux">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78FFF]"
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
