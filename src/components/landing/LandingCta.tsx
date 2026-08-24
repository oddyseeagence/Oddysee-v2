import { ArrowUpRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface LandingCtaProps {
  label: string;
  href: string;
  className?: string;
}

export function LandingCta({ label, href, className }: LandingCtaProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#632BC5] px-8 py-4 text-center text-sm font-bold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#632BC5] focus-visible:ring-offset-4 sm:w-fit",
        className,
      )}
    >
      {label}
      <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
