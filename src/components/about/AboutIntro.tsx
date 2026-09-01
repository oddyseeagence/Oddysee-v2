import {
  BadgeCheck,
  MonitorSmartphone,
  Palette,
  PanelsTopLeft,
  TrendingUp,
  UsersRound,
} from "lucide-react";

import { Header } from "@/components/Header";

const statistics = [
  {
    label: "Projets réalisés",
    detail: "Stratégies, sites et campagnes conçus pour convertir.",
    icon: PanelsTopLeft,
  },
  {
    label: "Clients accompagnés",
    detail: "Des collaborations durables centrées sur des résultats.",
    icon: UsersRound,
  },
  {
    label: "Années d’expérience",
    detail:
      "À accompagner des entreprises ambitieuses vers une croissance mesurable.",
    icon: BadgeCheck,
  },
  {
    label: "Identités de marque",
    detail:
      "Des univers visuels cohérents pensés pour renforcer votre crédibilité.",
    icon: Palette,
  },
  {
    label: "Expériences digitales",
    detail:
      "Des interfaces digitales conçues pour transformer vos visiteurs en clients.",
    icon: MonitorSmartphone,
  },
  {
    label: "Stratégies de croissance",
    detail:
      "Des systèmes d’acquisition pensés pour attirer, convertir et évoluer.",
    icon: TrendingUp,
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[34px] font-medium leading-[1.08] tracking-[-0.035em] text-[#1D0D3B] sm:text-[40px] md:text-[44px] md:leading-[1.1] lg:text-[48px] lg:leading-[52.8px]">
      {children}
    </p>
  );
}

export function AboutIntro() {
  return (
    <>
      <Header darkLogo />

      <section
        id="hero"
        className="relative isolate flex min-h-[580px] items-center overflow-hidden bg-white pb-10 pt-28 text-left md:min-h-[620px] md:pb-14 md:pt-32"
      >
        <div className="about-container">
          <h1 className="sr-only">À propos d’Oddysee</h1>
          <h2 className="max-w-[980px] font-heading text-4xl font-medium leading-[44px] tracking-[-1px] text-[#1D0D3B] md:text-6xl md:leading-[64px] md:tracking-[-1.5px] lg:text-[80px] lg:leading-[88px] lg:tracking-[-2.5px]">
            Pensée pour la croissance.
          </h2>
          <p className="mt-10 max-w-[650px] text-[18px] font-medium leading-[1.45] text-[#1D0D3B]/65 sm:text-[20px] md:mt-12 md:text-[22px]">
            Née à Marrakech, Oddysee accompagne les entreprises dans la
            création de systèmes digitaux capables d’attirer, convaincre et
            convertir leurs futurs clients.
          </p>
        </div>
      </section>

      <section className="bg-white pb-16 text-[#1D0D3B] md:pb-20 lg:pb-24">
        <div aria-hidden="true" className="h-px w-full bg-[#1D0D3B]/12" />
        <div className="about-container">
          <div className="grid gap-8 pt-16 md:grid-cols-[32%_minmax(0,1fr)] md:gap-10 md:pt-20 lg:pt-24">
            <div className="pt-1">
              <Eyebrow>Notre histoire</Eyebrow>
            </div>

            <div>
              <h2 className="max-w-[980px] font-heading text-[34px] leading-[1.08] tracking-[-0.035em] text-[#1D0D3B] sm:text-[40px] md:text-[44px] md:leading-[1.1] lg:text-[48px] lg:leading-[52.8px]">
                Oddysee est née d’une ambition&nbsp;: construire des écosystèmes
                digitaux performants, capables d’aider les entreprises à gagner
                en visibilité, convertir davantage et accélérer leur croissance.
              </h2>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-[minmax(0,320px)] justify-center gap-5 md:mt-24 md:grid-cols-[repeat(2,minmax(0,320px))] md:gap-6 lg:mt-28 lg:grid-cols-[repeat(3,minmax(0,320px))]">
            {statistics.map((statistic) => {
              const Icon = statistic.icon;

              return (
                <article
                  key={statistic.label}
                  className="group flex aspect-square flex-col rounded-[14px] bg-[#F7F3FF] p-8 font-sans text-[#1D0D3B] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-14 w-14">
                    <Icon
                      aria-hidden="true"
                      className="h-12 w-12 text-[#1D0D3B]"
                      strokeWidth={1.7}
                    />
                    <span
                      aria-hidden="true"
                      className="absolute bottom-1 right-0 h-3.5 w-3.5 rotate-45 rounded-[2px] bg-[#8966ff] transition-transform duration-300 group-hover:rotate-[135deg]"
                    />
                  </div>

                  <h3 className="mt-8 max-w-[280px] font-sans text-[22px] font-semibold leading-[1.08] tracking-[-0.035em] md:text-[24px]">
                    {statistic.label}
                  </h3>

                  <p className="mt-5 max-w-[340px] text-[16px] leading-[1.5] text-[#1D0D3B]/72 md:text-[17px]">
                    {statistic.detail}
                  </p>
                </article>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
