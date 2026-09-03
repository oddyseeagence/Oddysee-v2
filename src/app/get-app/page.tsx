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

// TODO: replace with approved /get-app campaign metadata.
export const metadata: Metadata = {
  title: "Oddysee/App",
  description:
    "Présentation temporaire de la future campagne App / Web / Mobile Oddysee.",
};

// TODO: replace every placeholder below with approved /get-app campaign content.
const campaign = {
  eyebrow: "Contenu App / Web / Mobile à valider",
  headline: "Titre App / Web / Mobile à valider.",
  introduction:
    "Cette introduction temporaire réserve l’espace du message principal sans ajouter de promesse, de résultat ou de périmètre non approuvé.",
  videoHeading: "La Masterclass App / Web / Mobile sera présentée ici.",
  videoDescription:
    "Le texte final précisera le contenu de la vidéo et guidera vers l’unique objectif de conversion approuvé pour cette campagne.",
  // TODO: replace with the approved /get-app CTA label.
  ctaLabel: "Parler à Oddysee",
  ctaHref: "https://www.oddysee.fr/votre-solution",
  comparisonHeading: "Du besoin digital à une solution à préciser.",
  comparisonDescription:
    "Les formulations ci-dessous servent uniquement à préserver la structure du futur message App / Web / Mobile.",
  midCtaHeading: "Une prochaine étape commune à définir.",
  midCtaDescription:
    "Le message de conversion intermédiaire sera remplacé après validation de l’offre et du parcours de campagne.",
  finalCtaHeading: "Échangeons sur votre projet digital.",
  finalCtaDescription:
    "Le texte final et la destination de conversion restent à confirmer.",
} as const;

// TODO: replace with approved /get-app problem statements.
const problems = [
  "Premier besoin App / Web / Mobile à documenter avec l’équipe campagne.",
  "Deuxième point de friction à préciser avant toute publication.",
  "Troisième difficulté utilisateur ou métier à confirmer.",
] as const;

// TODO: replace with approved /get-app value statements.
const benefits = [
  "Premier élément de valeur à formuler et valider.",
  "Deuxième bénéfice à compléter sans promesse non vérifiée.",
  "Troisième résultat attendu à confirmer avant publication.",
] as const;

// TODO: replace with approved /get-app partner proof. This temporary selection
// preserves the shared layout and does not attribute App / Web / Mobile services.
const appPartners: readonly PartnerLogo[] = [
  { name: "Puma", src: "/images/partners/puma.svg" },
  { name: "Adidas", src: "/images/partners/adidas.svg" },
  {
    name: "Clinique Chifa Tasnime",
    src: "/images/partners/clinic-chifa.svg",
  },
  { name: "Menara Mall", src: "/images/partners/menaramall.svg" },
  { name: "Planète Montessori", src: "/images/partners/pmis.svg" },
];

export default function GetAppPage() {
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
            // TODO: replace with the approved /get-app Masterclass video and poster.
            src: "/videos/WKG3JrKuuXHmdKCS9p58DUa42A4.mp4",
            poster: "/images/ZLfjupIzIYXJw7hzRvT4aWylANA.png",
            title:
              "Aperçu temporaire de la future Masterclass App / Web / Mobile",
          }}
          ctaLabel={campaign.ctaLabel}
          ctaHref={campaign.ctaHref}
        />

        <TrustBanner
          partners={appPartners}
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
        links={[
          { label: "Mentions légales à confirmer", href: "#" },
          { label: "Confidentialité à confirmer", href: "#" },
        ]}
      />
    </div>
  );
}
