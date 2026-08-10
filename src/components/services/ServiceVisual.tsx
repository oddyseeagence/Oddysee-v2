import {
  ArrowUpRight,
  Bookmark,
  Check,
  Heart,
  MapPin,
  MessageCircle,
  Search,
  Send,
  Smartphone,
  TrendingUp,
} from "lucide-react";

import type { ServiceDefinition, ServiceVisualKind } from "@/types/services";

interface ServiceVisualProps {
  service: Pick<ServiceDefinition, "icon" | "title" | "visual">;
}

const blobClassNames: Record<ServiceVisualKind, string> = {
  applications: "-right-[16%] -top-[20%] rotate-12",
  social: "-bottom-[24%] -left-[18%] -rotate-12",
  ads: "-right-[18%] -top-[18%] rotate-45",
  seo: "-bottom-[28%] -right-[12%] -rotate-12",
  website: "-left-[20%] -top-[20%] rotate-12",
};

function OrganicBlob({ kind }: { kind: ServiceVisualKind }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 420 420"
      className={`absolute h-[78%] w-[78%] text-primary/20 ${blobClassNames[kind]}`}
    >
      <path
        d="M352.9 66.8c47.7 42.4 71.2 115.2 59.5 180.7-11.8 65.5-58.8 123.6-120.3 151.4-61.5 27.8-137.6 25.3-197.2-9.4C35.3 354.8-7.8 288 1.2 226.2 10.3 164.4 71.4 107.6 135.4 69 199.5 30.3 305.2 24.5 352.9 66.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WindowBar({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-primary/10 px-4 py-3">
      <span className="size-2 rounded-full bg-primary/25" />
      <span className="size-2 rounded-full bg-primary/40" />
      <span className="size-2 rounded-full bg-primary/70" />
      <span className="ml-2 truncate rounded-full bg-primary/5 px-3 py-1 text-[9px] font-medium text-foreground/45">
        {label}
      </span>
    </div>
  );
}

function ApplicationsVisual({ Icon }: { Icon: ServiceDefinition["icon"] }) {
  return (
    <div className="relative z-10 flex h-full items-center">
      <div className="w-[84%] overflow-hidden rounded-2xl border border-primary/10 bg-background/95 shadow-xl shadow-primary/10">
        <WindowBar label="workspace.oddysee" />
        <div className="grid min-h-[220px] grid-cols-[28%_1fr] p-3 sm:min-h-[280px] sm:p-4">
          <div className="rounded-xl bg-primary p-3 text-white">
            <Icon className="size-5" strokeWidth={1.7} />
            <div className="mt-8 space-y-2">
              <span className="block h-1.5 w-full rounded-full bg-white/65" />
              <span className="block h-1.5 w-3/4 rounded-full bg-white/35" />
              <span className="block h-1.5 w-5/6 rounded-full bg-white/35" />
            </div>
          </div>

          <div className="p-3 sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-primary">
                  Tableau de bord
                </p>
                <p className="mt-1 text-xs font-semibold text-foreground sm:text-sm">
                  Votre produit, simplement
                </p>
              </div>
              <span className="grid size-8 place-items-center rounded-full bg-primary/10 text-primary">
                <TrendingUp className="size-4" />
              </span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3">
              <div className="rounded-xl bg-primary/8 p-3">
                <span className="block h-2 w-1/2 rounded-full bg-primary/25" />
                <span className="mt-4 block h-6 w-2/3 rounded-lg bg-primary/70" />
              </div>
              <div className="rounded-xl border border-primary/10 p-3">
                <span className="block h-2 w-2/3 rounded-full bg-primary/20" />
                <span className="mt-4 block h-6 w-1/2 rounded-lg bg-accent/70" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[6%] right-[2%] w-[29%] rounded-[24px] border-[5px] border-foreground bg-background p-2 shadow-2xl shadow-primary/20 sm:border-[7px] sm:p-3">
        <div className="mx-auto mb-3 h-1 w-1/3 rounded-full bg-foreground/25" />
        <div className="grid aspect-[9/15] content-between rounded-[16px] bg-primary/10 p-2.5 sm:p-3">
          <Smartphone className="size-5 text-primary" strokeWidth={1.6} />
          <div className="space-y-2">
            <span className="block h-2 w-full rounded-full bg-primary/25" />
            <span className="block h-2 w-3/4 rounded-full bg-primary/15" />
            <span className="mt-3 block h-7 rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialVisual({ Icon }: { Icon: ServiceDefinition["icon"] }) {
  return (
    <div className="relative z-10 h-full">
      <article className="absolute left-[7%] top-[10%] w-[56%] -rotate-6 rounded-2xl border border-primary/10 bg-background p-3 opacity-70 shadow-lg shadow-primary/10 sm:p-4">
        <div className="flex items-center gap-2">
          <span className="size-8 rounded-full bg-primary/20" />
          <div className="flex-1 space-y-1.5">
            <span className="block h-2 w-2/3 rounded-full bg-foreground/20" />
            <span className="block h-1.5 w-1/3 rounded-full bg-foreground/10" />
          </div>
        </div>
        <div className="mt-3 aspect-[1.5/1] rounded-xl bg-primary/15" />
      </article>

      <article className="absolute bottom-[8%] right-[6%] w-[62%] rotate-6 rounded-2xl border border-primary/10 bg-background p-3 opacity-80 shadow-lg shadow-primary/10 sm:p-4">
        <div className="flex items-center gap-2">
          <span className="size-8 rounded-full bg-accent/35" />
          <span className="h-2 w-1/2 rounded-full bg-foreground/15" />
        </div>
        <div className="mt-3 aspect-[1.55/1] rounded-xl bg-accent/20" />
      </article>

      <article className="absolute left-1/2 top-1/2 w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-primary/15 bg-background p-4 shadow-2xl shadow-primary/15 sm:p-5">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-primary text-white">
            <Icon className="size-5" strokeWidth={1.7} />
          </span>
          <div className="flex-1">
            <p className="text-xs font-semibold text-foreground">Oddysee Social</p>
            <p className="mt-1 text-[9px] text-foreground/45">Stratégie éditoriale</p>
          </div>
          <Bookmark className="size-4 text-primary" strokeWidth={1.6} />
        </div>
        <div className="mt-4 grid aspect-[1.45/1] place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/35">
          <span className="grid size-14 place-items-center rounded-full bg-background/80 text-primary shadow-lg">
            <ArrowUpRight className="size-6" strokeWidth={1.5} />
          </span>
        </div>
        <div className="mt-4 flex items-center gap-4 text-primary">
          <Heart className="size-4" strokeWidth={1.7} />
          <MessageCircle className="size-4" strokeWidth={1.7} />
          <Send className="size-4" strokeWidth={1.7} />
        </div>
      </article>
    </div>
  );
}

const chartBarClassNames = [
  "h-[34%]",
  "h-[55%]",
  "h-[44%]",
  "h-[72%]",
  "h-[64%]",
  "h-[88%]",
  "h-full",
];

function AdsVisual({ Icon }: { Icon: ServiceDefinition["icon"] }) {
  return (
    <div className="relative z-10 flex h-full items-center justify-center">
      <div className="w-[88%] overflow-hidden rounded-2xl border border-primary/10 bg-background shadow-2xl shadow-primary/15">
        <WindowBar label="campagnes.oddysee" />
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-primary text-white">
                <Icon className="size-5" strokeWidth={1.7} />
              </span>
              <div>
                <p className="text-xs font-semibold text-foreground sm:text-sm">Campagnes actives</p>
                <p className="mt-1 text-[9px] text-foreground/45">Meta + Google Ads</p>
              </div>
            </div>
            <span className="rounded-full bg-primary/10 px-3 py-1.5 text-[9px] font-semibold text-primary">
              +34,8 %
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-primary/8 p-3 sm:p-4">
              <p className="text-[9px] text-foreground/45">Conversions</p>
              <p className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">1 248</p>
            </div>
            <div className="rounded-xl border border-primary/10 p-3 sm:p-4">
              <p className="text-[9px] text-foreground/45">Coût / résultat</p>
              <p className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">8,42 €</p>
            </div>
          </div>

          <div className="mt-5 flex h-24 items-end gap-2 rounded-xl bg-primary/5 px-3 pb-3 pt-5 sm:h-28 sm:gap-3">
            {chartBarClassNames.map((className, index) => (
              <span
                key={className}
                className={`flex-1 rounded-t-full ${className} ${
                  index >= 5 ? "bg-primary" : "bg-primary/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SeoVisual({ Icon }: { Icon: ServiceDefinition["icon"] }) {
  return (
    <div className="relative z-10 flex h-full items-center justify-center">
      <div className="w-[88%] rounded-2xl border border-primary/10 bg-background p-4 shadow-2xl shadow-primary/15 sm:p-6">
        <div className="flex items-center gap-3 rounded-full border border-primary/15 bg-background px-4 py-3 shadow-sm">
          <Search className="size-4 text-primary" strokeWidth={1.7} />
          <span className="flex-1 truncate text-[10px] text-foreground/55 sm:text-xs">
            agence digitale Marrakech
          </span>
          <span className="grid size-7 place-items-center rounded-full bg-primary text-white">
            <ArrowUpRight className="size-3.5" />
          </span>
        </div>

        <div className="mt-5 space-y-3">
          {["Oddysee — Agence digitale", "Stratégie digitale sur mesure", "Création et croissance"].map(
            (label, index) => (
              <article
                key={label}
                className={`rounded-xl border p-3.5 sm:p-4 ${
                  index === 0
                    ? "border-primary/30 bg-primary/8 shadow-lg shadow-primary/10"
                    : "border-primary/8 bg-background"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full text-[10px] font-semibold ${
                      index === 0 ? "bg-primary text-white" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[10px] font-semibold text-foreground sm:text-xs">{label}</p>
                    <span className="mt-2 block h-1.5 w-4/5 rounded-full bg-foreground/10" />
                  </div>
                  {index === 0 ? <Icon className="size-4 text-primary" strokeWidth={1.7} /> : null}
                </div>
              </article>
            ),
          )}
        </div>

        <div className="mt-4 flex items-center gap-2 text-[9px] font-medium text-primary">
          <MapPin className="size-3.5" strokeWidth={1.7} />
          Visible dans la recherche locale
        </div>
      </div>
    </div>
  );
}

function WebsiteVisual({ Icon }: { Icon: ServiceDefinition["icon"] }) {
  return (
    <div className="relative z-10 flex h-full items-center justify-center">
      <div className="w-[92%] overflow-hidden rounded-2xl border border-primary/10 bg-background shadow-2xl shadow-primary/15">
        <WindowBar label="votre-site.fr" />
        <div className="p-3 sm:p-5">
          <div className="grid grid-cols-[1.15fr_0.85fr] gap-3 rounded-xl bg-primary px-4 py-5 text-white sm:px-6 sm:py-7">
            <div>
              <span className="block h-2 w-1/3 rounded-full bg-white/50" />
              <span className="mt-3 block h-4 w-full rounded-full bg-white/90" />
              <span className="mt-2 block h-4 w-4/5 rounded-full bg-white/75" />
              <span className="mt-5 block h-7 w-1/2 rounded-full bg-background" />
            </div>
            <div className="grid place-items-center rounded-xl bg-white/15">
              <Icon className="size-10 sm:size-14" strokeWidth={1.25} />
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
            {["Vitrine", "E-commerce", "Sur mesure"].map((label, index) => (
              <div key={label} className="rounded-xl border border-primary/10 p-2.5 sm:p-3">
                <span
                  className={`grid size-7 place-items-center rounded-lg ${
                    index === 1 ? "bg-accent/35 text-primary" : "bg-primary/10 text-primary"
                  }`}
                >
                  {index === 2 ? <Check className="size-3.5" /> : <span className="size-2 rounded-full bg-current" />}
                </span>
                <p className="mt-3 truncate text-[8px] font-semibold text-foreground sm:text-[10px]">{label}</p>
                <span className="mt-2 block h-1.5 w-3/4 rounded-full bg-foreground/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServiceVisual({ service }: ServiceVisualProps) {
  const Icon = service.icon;

  return (
    <div
      aria-hidden="true"
      className="relative aspect-[1.08/1] min-h-[340px] overflow-hidden rounded-3xl border border-primary/10 bg-primary/5 p-4 shadow-xl shadow-primary/10 transition-transform duration-300 hover:-translate-y-1 sm:min-h-[430px] sm:p-7"
    >
      <OrganicBlob kind={service.visual} />
      {service.visual === "applications" ? <ApplicationsVisual Icon={Icon} /> : null}
      {service.visual === "social" ? <SocialVisual Icon={Icon} /> : null}
      {service.visual === "ads" ? <AdsVisual Icon={Icon} /> : null}
      {service.visual === "seo" ? <SeoVisual Icon={Icon} /> : null}
      {service.visual === "website" ? <WebsiteVisual Icon={Icon} /> : null}
    </div>
  );
}

