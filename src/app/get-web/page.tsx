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
  eyebrow: "Contenu Site web / Workflow / WhatsApp à valider",
  headline: "Titre Site web / Workflow / WhatsApp à valider.",
  introduction:
    "Cette introduction temporaire réserve l’espace du message principal sans ajouter de fonctionnalité, de promesse ou de résultat non approuvé.",
  videoHeading:
    "La Masterclass Site web / Workflow / WhatsApp sera présentée ici.",
  videoDescription:
    "Le texte final précisera le contenu de la vidéo et guidera vers l’unique objectif de conversion approuvé pour cette campagne.",
  // TODO: replace with the approved /get-web CTA label and destination.
  ctaLabel: "Parler à Oddysee",
  ctaHref: "/contact",
  comparisonHeading: "Du besoin digital à une valeur à préciser.",
  comparisonDescription:
    "Les formulations ci-dessous servent uniquement à préserver la structure du futur message Site web / Workflow / WhatsApp.",
  midCtaHeading: "Une prochaine étape commune à définir.",
  midCtaDescription:
    "Le message de conversion intermédiaire sera remplacé après validation de l’offre et du parcours de campagne.",
  finalCtaHeading: "Échangeons sur votre projet digital.",
  finalCtaDescription:
    "Le texte final et la destination de conversion restent à confirmer.",
} as const;

// TODO: replace with approved /get-web problem statements.
const problems = [
  "Premier besoin Site web / Workflow / WhatsApp à documenter avec l’équipe campagne.",
  "Deuxième point de friction à préciser avant toute publication.",
  "Troisième difficulté utilisateur ou métier à confirmer.",
] as const;

// TODO: replace with approved /get-web value statements.
const benefits = [
  "Premier élément de valeur à formuler et valider.",
  "Deuxième bénéfice à compléter sans promesse non vérifiée.",
  "Troisième résultat attendu à confirmer avant publication.",
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
          eyebrow={campaign.eyebrow}
          headline={campaign.headline}
          description={campaign.introduction}
        />

        <LandingVideoBlock
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
          eyebrow="Problème / valeur"
          heading={campaign.comparisonHeading}
          description={campaign.comparisonDescription}
          problemsTitle="Points de friction"
          problems={problems}
          benefitsTitle="Valeur apportée"
          benefits={benefits}
        />

        <CtaBand
          heading={campaign.midCtaHeading}
          description={campaign.midCtaDescription}
          ctaLabel={campaign.ctaLabel}
          ctaHref={campaign.ctaHref}
          density="compact"
        />

        <LandingVideoTestimonials />

        <CtaBand
          heading={campaign.finalCtaHeading}
          description={campaign.finalCtaDescription}
          ctaLabel={campaign.ctaLabel}
          ctaHref={campaign.ctaHref}
          background="lavender"
          density="compact"
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
