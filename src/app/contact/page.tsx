import type { Metadata } from "next";
import Image from "next/image";

import { ContactCopyButton } from "@/components/ContactCopyButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Contact | Oddysee",
  description:
    "Parlez-nous de votre projet et découvrez comment Oddysee peut accompagner la croissance de votre marque.",
};

const contactRows = [
  {
    label: "Contact",
    value: "contact@oddysee.fr",
    href: "mailto:contact@oddysee.fr",
    copyValue: "contact@oddysee.fr",
  },
  {
    label: "Localisation",
    value: "Marrakech, Maroc — ouvert à l’international",
    copyValue: "Marrakech, Maroc",
  },
  {
    label: "Recrutement",
    value: "Rejoindre notre équipe",
    href: "mailto:contact@oddysee.fr?subject=Candidature%20Oddysee",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header darkLogo />

      <main
        id="hero"
        className="overflow-hidden bg-white text-[#1D0D3B] selection:bg-[#632BC5] selection:text-white"
      >
        <div className="mx-auto max-w-[1920px] px-5 pb-20 pt-32 sm:px-8 md:px-10 lg:px-8 lg:pb-[166px] lg:pt-[216px]">
          <div className="grid gap-12 lg:min-h-[556px] lg:grid-cols-[minmax(0,672px)_475px] lg:justify-between lg:gap-16">
            <div className="flex min-w-0 flex-col">
              <h1 className="font-heading text-[clamp(60px,4.2vw,80px)] font-medium leading-[0.95] tracking-[-0.055em] text-[#1D0D3B]">
                Prêt à parler ?
              </h1>

              <a
                href="mailto:contact@oddysee.fr?subject=Parlons%20de%20votre%20projet"
                className="group mt-20 flex min-h-[88px] w-full items-center justify-between rounded-[12px] border border-black/80 px-7 py-5 text-[22px] font-medium tracking-[-0.025em] outline-none transition-[background-color,color] duration-300 hover:bg-[#632BC5] hover:text-white focus-visible:ring-2 focus-visible:ring-[#632BC5] focus-visible:ring-offset-4 lg:mt-[225px] lg:min-h-[82px] lg:px-7 lg:py-4 lg:text-[22px]"
              >
                <span>Vérifiez si on peut travailler avec vous</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-[29px] font-light leading-none transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

              <dl className="mt-12 space-y-7 lg:mt-[51px] lg:space-y-[22px]">
                {contactRows.map((row) => (
                  <div
                    key={row.label}
                    className="grid gap-2 text-[18px] leading-[1.35] tracking-[-0.02em] sm:grid-cols-[150px_minmax(0,1fr)] lg:grid-cols-[192px_minmax(0,1fr)_auto] lg:gap-10 lg:text-[18px]"
                  >
                    <dt className="font-semibold">{row.label}</dt>
                    <dd>
                      {row.href ? (
                        <a
                          href={row.href}
                          className="transition-colors hover:text-[#632BC5]"
                        >
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </dd>
                    {row.copyValue ? (
                      <ContactCopyButton value={row.copyValue} />
                    ) : null}
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative order-first aspect-[3/4] w-full overflow-hidden rounded-[10px] bg-[#eeeae3] lg:order-none lg:h-[556px] lg:aspect-auto lg:self-start">
              <Image
                src="/images/contact-casablanca.png"
                alt="Professionnel créatif travaillant dans une avenue de Casablanca"
                fill
                priority
                sizes="(min-width: 1024px) 475px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-20 border-t border-black/50 pt-7 md:mt-32 lg:mt-[126px] lg:pt-6">
            <div className="flex justify-center sm:justify-end">
              <div className="flex w-full flex-nowrap justify-center gap-3 sm:w-auto sm:justify-end sm:gap-4 lg:gap-3">
                <a
                  href="#"
                  className="inline-flex min-h-12 min-w-0 flex-1 items-center justify-center rounded-full bg-[#1D0D3B] px-4 text-[16px] font-semibold text-white transition-colors hover:bg-[#632BC5] sm:min-h-14 sm:min-w-[166px] sm:flex-none sm:px-8 sm:text-[18px] lg:min-h-[45px] lg:min-w-[133px] lg:px-6 lg:text-[16px]"
                >
                  Linkedin
                </a>
                <a
                  href="#"
                  className="inline-flex min-h-12 min-w-0 flex-1 items-center justify-center rounded-full bg-[#1D0D3B] px-4 text-[16px] font-semibold text-white transition-colors hover:bg-[#632BC5] sm:min-h-14 sm:min-w-[184px] sm:flex-none sm:px-8 sm:text-[18px] lg:min-h-[45px] lg:min-w-[147px] lg:px-6 lg:text-[16px]"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
