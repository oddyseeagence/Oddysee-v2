import Image from "next/image";
import Link from "next/link";

export function LandingHeader() {
  return (
    <header className="border-b border-[#1D0D3B]/10 bg-white">
      <div className="about-container flex min-h-20 items-center md:min-h-24">
        <Link
          href="/"
          aria-label="Retour à l’accueil Oddysee"
          className="inline-flex rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#632BC5] focus-visible:ring-offset-4"
        >
          <Image
            src="/images/2Oddysee_Horizontal_White.svg"
            alt="Oddysee"
            width={192}
            height={73}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
