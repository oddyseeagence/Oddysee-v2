import type { Metadata } from "next";

import { CtaBand } from "@/components/CtaBand";
import {
  TrustBanner,
  type PartnerLogo,
} from "@/components/TrustBanner";
import { LandingComparison } from "@/components/landing/LandingComparison";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingLegal } from "@/components/landing/LandingLegal";
import { LandingVideoBlock } from "@/components/landing/LandingVideoBlock";
import { LandingVideoTestimonials } from "@/components/landing/LandingVideoTestimonials";
import { LandingWhatsAppCta } from "@/components/landing/LandingWhatsAppCta";

// TODO: replace with approved /get-web campaign metadata.
export const metadata: Metadata = {
  title: "Site web, workflow & WhatsApp | Oddysee",
  description:
    "Présentation temporaire de la future campagne Site web / Workflow / WhatsApp Oddysee.",
};

// TODO: replace every placeholder below with approved /get-web campaign content.
// The whiteboard term "W/As Bot" is interpreted here as WhatsApp only as an
// unapproved, replaceable thematic reference.
const campaign = {
  headline: "Vos concurrents sont déjà en ligne. Pas vous.",
  introduction:
    "Chaque jour sans site web, c'est des clients qui achètent ailleurs. On vous met en ligne en 7 jours — avec un site qui vend, pas juste une vitrine.",
  introductionSubdescription:
    "🇺🇸 États-Unis · 🇫🇷 France · 🇧🇪 Belgique · 🇲🇦 Maroc · 🇨🇬 Congo · 🇨🇮 Côte d'Ivoire · 🇹🇩 Tchad · 🇹🇬 Togo Déjà +200 entreprises accompagnées",
  videoHeading:
    "Découvrez comment on transforme votre activité en machine à clients — en moins de 3 minutes.",
  videoDescription:
    "Regardez la vidéo avant de cliquer ci-dessous  ",
  // TODO: replace with the approved /get-web CTA label and destination.
  ctaLabel: "Contacter un expert sur WhatsApp",
  ctaHref: "/contact",
  comparisonHeading: "Du besoin digital à une valeur à préciser.",
  comparisonDescription:
    "Les formulations ci-dessous servent uniquement à préserver la structure du futur message Site web / Workflow / WhatsApp.",
  midCtaHeading: "Ils l'ont fait. Voici leurs résultats.",
  midCtaDescription:
    "Des entrepreneurs qui ont pris leur place en ligne — et qui n'attendent plus le bouche-à-oreille pour vendre.",
  finalCtaHeading: "Prêt à mettre votre entreprise en ligne ?",
  finalCtaDescription:
    "Discutez avec un expert Oddysee dès maintenant. On répond en moins d'une heure sur WhatsApp — du lundi au samedi.",
  finalCtaLabel: "Contacter un expert maintenant",
} as const;

const clientStats = [
  {
    value: "+200",
    label: "Entreprises accompagnées",
  },
  {
    value: "7 jours",
    label: "De la commande au site en ligne",
  },
  {
    value: "3 continents · 8 pays",
    label: "Amérique · Europe · Afrique",
  },
  {
    value: "+2 M",
    label: "De prospects générés pour nos clients",
  },
] as const;

// TODO: replace with approved /get-web problem statements.
const problems = [
  {
    title: "Vos clients ne vous trouvent pas.",
    description:
      "Ils cherchent votre service sur Google, sur Facebook, sur Instagram. Ils tombent sur vos concurrents. Ils achètent chez eux.\n\nVous, vous restez avec votre bouche-à-oreille — utile, mais imprévisible.",
  },
  {
    title: "Vos concurrents avancent. Vous les regardez.",
    description:
      "Chaque semaine, un nouveau concurrent lance son site. Sa boutique en ligne. Sa présence WhatsApp automatisée.\n\nPendant ce temps, votre entreprise reste dépendante des clients de proximité — et de ce qu'ils veulent bien raconter de vous.",
  },
  {
    title: "Un client vous demande votre site. Vous n'en avez pas.",
    description:
      "Le message est reçu : « ils ne sont pas encore digitalisés ». La confiance baisse. Le prospect se tourne vers un concurrent mieux présenté.\n\nSans site web professionnel en 2026, vous perdez des ventes avant même de discuter.",
  },
  {
    title: "Dans un an, ce sera plus tard.",
    description:
      "Internet se démocratise à grande vitesse en Afrique francophone. Les entreprises qui prennent leur place maintenant domineront leur marché demain.\n\nCelles qui attendent devront rattraper — à un coût beaucoup plus élevé, avec une concurrence beaucoup plus dense.",
  },
] as const;

// TODO: replace with approved /get-web value statements.
const benefits = [
  {
    title: "Un site professionnel dont vous êtes fier.",
    description:
      "Quand un client vous demande votre site, vous envoyez le lien avec assurance. Il découvre une entreprise sérieuse, structurée, professionnelle. La conversation commence bien avant votre premier échange.",
  },
  {
    title: "Vos clients vous trouvent — sans effort.",
    description:
      "Votre site apparaît sur Google. Votre présence sur les réseaux devient cohérente. Les personnes qui cherchent votre service dans votre ville tombent sur vous — pas sur vos concurrents.",
  },
  {
    title: "Des demandes qui rentrent chaque semaine.",
    description:
      "Le formulaire de votre site remonte les demandes directement dans WhatsApp. Vous répondez en un clic. Chaque visiteur intéressé devient un client potentiel — même à 22h ou le dimanche.",
  },
  {
    title: "Vous concentrez votre énergie sur votre métier.",
    description:
      "Plus besoin de courir après les clients. Plus besoin d'expliquer votre activité à chaque conversation. Votre site travaille pour vous — pendant que vous faites ce que vous savez faire de mieux.",
  },
] as const;

// TODO: replace with approved /get-web partner proof. This temporary selection
// preserves the shared layout and does not attribute Website, Workflow, WhatsApp,
// bot, or automation services to these partners.
const webPartners: readonly PartnerLogo[] = [
  { name: "Puma", src: "/images/partners/puma.svg" },
  { name: "Adidas", src: "/images/partners/adidas.svg" },
  {
    name: "Clinique Chifa Tasnime",
    src: "/images/partners/clinic-chifa.svg",
  },
  { name: "Menara Mall", src: "/images/partners/menaramall.svg" },
  { name: "Planète Montessori", src: "/images/partners/pmis.svg" },
];

export default function GetWebPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white text-[#1D0D3B] selection:bg-[#632BC5] selection:text-white">
      <LandingHeader />

      <main>
        <LandingHero
          headline={campaign.headline}
          description={campaign.introduction}
          subdescription={campaign.introductionSubdescription}
        />

        <LandingVideoBlock
          eyebrow="COMMENT ÇA MARCHE"
          heading={campaign.videoHeading}
          description={campaign.videoDescription}
          video={{
            // TODO: replace with the approved /get-web Masterclass video and poster.
            src: "/videos/WKG3JrKuuXHmdKCS9p58DUa42A4.mp4",
            poster: "/images/ZLfjupIzIYXJw7hzRvT4aWylANA.png",
            title:
              "Aperçu temporaire de la future Masterclass Site web / Workflow / WhatsApp",
          }}
          ctaLabel={campaign.ctaLabel}
          ctaHref={campaign.ctaHref}
        />

        <TrustBanner
          partners={webPartners}
          headlineLines={["Partenaires à confirmer"]}
          variant="landing"
        />

        <LandingComparison
          eyebrow="CE QUI CHANGE"
          heading={campaign.comparisonHeading}
          description={campaign.comparisonDescription}
          problemsTitle="Vous vous reconnaissez ?"
          problemsDescription="Voici ce que vit un entrepreneur qui n'est pas en ligne — ou qui a un site qui ne travaille pas pour lui."
          problems={problems}
          benefitsTitle="Voici ce qui change dès que votre site est en ligne."
          benefitsDescription="Pas une promesse en l'air. Le quotidien de nos clients depuis qu'on a lancé leur site."
          benefits={benefits}
        />

        <CtaBand
          heading={campaign.midCtaHeading}
          headingSize="display"
          description={campaign.midCtaDescription}
          stats={clientStats}
          ctaLabel={campaign.ctaLabel}
          ctaHref={campaign.ctaHref}
          density="compact"
        />

        <LandingVideoTestimonials />

        <LandingWhatsAppCta
          heading={campaign.finalCtaHeading}
          description={campaign.finalCtaDescription}
          ctaLabel={campaign.finalCtaLabel}
          ctaHref={campaign.ctaHref}
        />
      </main>

      <LandingLegal
        // TODO: replace with approved /get-web disclaimer and legal destinations.
        disclaimer="Texte légal temporaire : le disclaimer, les mentions de campagne et les précisions liées à l’offre Site web / Workflow / WhatsApp doivent être fournis avant publication."
        links={[
          { label: "Mentions légales à confirmer", href: "#" },
          { label: "Confidentialité à confirmer", href: "#" },
        ]}
      />
    </div>
  );
}
