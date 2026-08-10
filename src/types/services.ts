import type { LucideIcon } from "lucide-react";

export type ServiceVisualKind =
  | "applications"
  | "social"
  | "ads"
  | "seo"
  | "website";

export interface ServiceDefinition {
  id: string;
  title: string;
  headingBefore: string;
  highlight: string;
  headingAfter?: string;
  description: string;
  ctaHref: string;
  visual: ServiceVisualKind;
  icon: LucideIcon;
}

