export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: "identity" | "excellence" | "strategy";
}

export interface ServiceItem {
  index: string;
  title: string;
  description: string;
}

export interface ProjectCard {
  index: number;
  title: string;
  image: string;
  href?: string;
}

export interface ProcessStep {
  index: string;
  eyebrow: string;
  title: string;
}

export interface PricingPlan {
  name: string;
  duration: string;
  price: string;
  period?: string;
  description: string;
  featured?: boolean;
  features: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  category: string;
  date?: string;
  title: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FooterLinkColumn {
  title: string;
  links: NavLink[];
}
