import type { Metadata } from "next";

import { CtaBand } from "@/components/CtaBand";
import { Testimonials, type Testimonial } from "@/components/Testimonials";
import {
  TrustBanner,
  type PartnerLogo,
} from "@/components/TrustBanner";
import { LandingComparison } from "@/components/landing/LandingComparison";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingLegal } from "@/components/landing/LandingLegal";
import { LandingVideoBlock } from "@/components/landing/LandingVideoBlock";

// TODO: replace with approved campaign metadata.
export const metadata: Metadata = {
  title: "Acquisition digitale | Oddysee",
  description:
    "Présentation temporaire de la future campagne d’acquisition Oddysee.",
};

// TODO: replace every placeholder below with approved campaign content.
const campaign = {
  eyebrow: "Contenu de campagne à valider",
  headline: "Titre de campagne à valider.",
  introduction:
    "Cette introduction temporaire réserve l’espace du message principal sans ajouter de promesse ou de résultat non approuvé.",
  videoHeading: "La Masterclass sera présentée ici.",
  videoDescription:
    "Le texte final expliquera ce que la vidéo apporte et guidera vers l’unique objectif de conversion de la campagne.",
  ctaLabel: "Parler à Oddysee",
  // TODO: replace with the approved conversion destination.
  ctaHref: "/contact",
  comparisonHeading: "Du point de friction à une solution plus claire.",
  comparisonDescription:
    "Les formulations ci-dessous sont des repères de mise en page et ne constituent pas des promesses commerciales approuvées.",
  midCtaHeading: "Une prochaine étape simple et clairement identifiée.",
  midCtaDescription:
    "Le message de conversion intermédiaire sera remplacé après validation de l’offre.",
  finalCtaHeading: "Échangeons sur votre projet.",
  finalCtaDescription:
    "Le texte final et la destination de conversion restent à confirmer.",
} as const;

// TODO: replace with approved problem and benefit statements.
const problems = [
  "Premier point de friction à fournir par l’équipe campagne.",
  "Deuxième problème client à préciser avant la mise en production.",
  "Troisième objection ou difficulté à documenter.",
] as const;

const benefits = [
  "Premier bénéfice à valider avec une formulation approuvée.",
  "Deuxième élément de valeur à compléter sans promesse non vérifiée.",
  "Troisième résultat attendu à confirmer avant publication.",
] as const;

// TODO: confirm or replace this temporary partner-logo selection.
const trafficPartners: readonly PartnerLogo[] = [
  { name: "Puma", src: "/images/partners/puma.svg" },
  { name: "Adidas", src: "/images/partners/adidas.svg" },
  {
    name: "Clinique Chifa Tasnime",
    src: "/images/partners/clinic-chifa.svg",
  },
  { name: "Menara Mall", src: "/images/partners/menaramall.svg" },
  { name: "Planète Montessori", src: "/images/partners/pmis.svg" },
];

// No testimonial content is invented while approved campaign reviews are missing.
const trafficTestimonials: readonly Testimonial[] = [];

export default function GetTrafficPage() {
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
            // TODO: replace with the approved Masterclass video and poster.
            src: "/videos/WKG3JrKuuXHmdKCS9p58DUa42A4.mp4",
            poster: "/images/ZLfjupIzIYXJw7hzRvT4aWylANA.png",
            title: "Aperçu temporaire de la future Masterclass Oddysee",
          }}
          ctaLabel={campaign.ctaLabel}
          ctaHref={campaign.ctaHref}
        />

        <TrustBanner
          partners={trafficPartners}
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

        <Testimonials
          heading="Retours clients à intégrer"
          testimonials={trafficTestimonials}
          emptyMessage="TODO : remplacer cet emplacement par les témoignages approuvés pour la campagne."
          density="compact"
        />

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
        // TODO: replace with approved disclaimer and legal destinations.
        disclaimer="Texte légal temporaire : le disclaimer, les mentions liées à la campagne et les éventuelles précisions publicitaires doivent être fournis avant publication."
        links={[
          { label: "Mentions légales à confirmer", href: "#" },
          { label: "Confidentialité à confirmer", href: "#" },
        ]}
      />
    </div>
  );
}
