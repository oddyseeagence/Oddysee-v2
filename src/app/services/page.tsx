import type { Metadata } from "next";

import { Header } from "@/components/Header";
import { ServicesShowcasePage } from "@/components/services/ServicesShowcasePage";

export const metadata: Metadata = {
  title: "Services | Oddysee",
  description:
    "Découvrez les services Oddysee : applications et logiciels, réseaux sociaux, publicité digitale, SEO et sites web.",
};

export default function ServicesPage() {
  return (
    <>
      <Header darkLogo />
      <ServicesShowcasePage />
    </>
  );
}
