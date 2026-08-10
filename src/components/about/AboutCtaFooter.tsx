import Link from "next/link";

interface FooterLink {
  href: string;
  label: string;
}

const usefulLinks: FooterLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/projets", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks: FooterLink[] = [
  { href: "/services", label: "Identité de marque" },
  { href: "/services", label: "Design d’interface" },
  { href: "/services", label: "Sites web" },
  { href: "/services", label: "Stratégie digitale" },
];

const linkClassName =
  "text-[13px] leading-6 text-[var(--about-muted)] transition-colors duration-200 hover:text-[var(--about-accent)] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--about-accent)]";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 fill-none stroke-current stroke-[1.5]"
      viewBox="0 0 20 20"
    >
      <path d="M4.5 15.5 15.5 4.5M7 4.5h8.5V13" />
    </svg>
  );
}

export function AboutCtaFooter() {
  return (
    <footer className="overflow-hidden pb-0">
      <section className="about-container pt-24 lg:pt-32" aria-labelledby="newsletter-title">
        <div className="grid gap-8 border-b border-[var(--about-border)] pb-12 md:grid-cols-[1fr_auto] md:items-end lg:pb-16">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--about-accent)]">
              Des nouvelles, sans bruit
            </p>
            <h2
              className="about-display mt-3 max-w-md text-[30px] leading-[1.02] tracking-[-0.035em] sm:text-[36px]"
              id="newsletter-title"
            >
              Rejoignez notre newsletter design
            </h2>
          </div>

          <form
            aria-describedby="newsletter-note"
            className="flex w-full max-w-[500px] flex-col gap-3 sm:flex-row md:w-[460px]"
          >
            <label className="sr-only" htmlFor="about-newsletter-email">
              Votre adresse e-mail
            </label>
            <input
              className="h-[44px] min-w-0 flex-1 rounded-full border border-[var(--about-border)] bg-white/[0.04] px-6 text-[13px] text-[var(--about-foreground)] outline-none transition placeholder:text-[var(--about-muted)] hover:border-white/30 focus:border-[var(--about-accent)] focus:ring-2 focus:ring-[var(--about-accent)]/20"
              id="about-newsletter-email"
              name="email"
              placeholder="votre@email.com"
              type="email"
            />
            <button
              className="h-[44px] shrink-0 rounded-full bg-[var(--about-accent-strong)] px-7 text-[12px] font-semibold text-white transition duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--about-accent)]"
              type="button"
            >
              S’inscrire
            </button>
            <span className="sr-only" id="newsletter-note">
              Présentation du formulaire, aucun envoi de données.
            </span>
          </form>
        </div>
      </section>

      <section className="about-container py-16 lg:py-20">
        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-[1.6fr_0.7fr_0.8fr_1fr]">
          <div className="max-w-lg md:pr-12">
            <h2 className="about-display text-[30px] leading-none tracking-[-0.035em]">
              Faisons quelque chose de grand
            </h2>
            <p className="mt-5 max-w-md text-[13px] leading-[1.6] text-[var(--about-muted)]">
              Stratégie, identité et expériences digitales pour les marques qui
              veulent avancer avec une vision claire.
            </p>
            <Link
              className="mt-7 inline-flex h-10 items-center gap-2 rounded-full bg-[var(--about-accent-strong)] px-6 text-[12px] font-semibold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--about-accent)]"
              href="/contact"
            >
              Écrivez-nous
              <ArrowIcon />
            </Link>
          </div>

          <nav aria-labelledby="footer-links-title">
            <h3 className="text-[15px] font-semibold" id="footer-links-title">
              Liens utiles
            </h3>
            <ul className="mt-5 space-y-1.5">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link className={linkClassName} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services-title">
            <h3 className="text-[15px] font-semibold" id="footer-services-title">
              Notre expertise
            </h3>
            <ul className="mt-5 space-y-1.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link className={linkClassName} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[15px] font-semibold">Nous contacter</h3>
            <address className="mt-5 not-italic">
              <ul className="space-y-1.5">
                <li>
                  <a className={linkClassName} href="tel:+212522000000">
                    +212 5 22 00 00 00
                  </a>
                </li>
                <li>
                  <a className={linkClassName} href="mailto:hello@oddysee.ma">
                    hello@oddysee.ma
                  </a>
                </li>
                <li className="pt-2 text-[13px] leading-6 text-[var(--about-muted)]">
                  Casablanca, Maroc
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--about-border)] pt-7 text-[11px] text-[var(--about-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Oddysee. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link className={linkClassName} href="#">
              Confidentialité
            </Link>
            <Link className={linkClassName} href="#">
              Mentions légales
            </Link>
          </div>
        </div>
      </section>

      <div
        aria-label="Oddysee"
        className="relative -mb-[0.08em] flex min-h-[180px] items-end justify-center overflow-hidden pt-12 sm:min-h-[240px] lg:min-h-[350px]"
      >
        <div
          aria-hidden="true"
          className="absolute bottom-[-50%] left-1/2 h-[90%] w-[80%] -translate-x-1/2 rounded-[50%] bg-[#7a44d5]/45 blur-[90px]"
        />
        <p className="relative select-none whitespace-nowrap text-[clamp(100px,17vw,320px)] font-medium leading-[0.72] tracking-[-0.085em] text-white">
          Oddysee
        </p>
      </div>
    </footer>
  );
}
