"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon, XIcon } from "@/components/icons";

const navLinks = [
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Projets", href: "/projets" },
  { label: "Contact", href: "/contact" },
];

interface HeaderProps {
  variant?: "default" | "light" | "about";
  darkLogo?: boolean;
}

export function Header({ variant = "default", darkLogo = false }: HeaderProps) {
  const pathname = usePathname();
  const isLight = variant === "light";
  const isAbout = variant === "about";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  function isActiveLink(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function handleHomeClick(event: MouseEvent<HTMLAnchorElement>) {
    setMobileOpen(false);

    if (
      pathname !== "/" ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const hero = document.getElementById("hero");
    if (!hero) return;

    event.preventDefault();
    setHideNav(false);
    hero.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", "/#hero");
  }

  useEffect(() => {
    if (isAbout) return;

    const heroEl = document.getElementById("hero");
    let heroHeight = heroEl?.offsetHeight ?? window.innerHeight;

    function updateHeroHeight() {
      heroHeight = heroEl?.offsetHeight ?? window.innerHeight;
    }
    updateHeroHeight();

    let lastScrollY = window.scrollY;
    let ticking = false;

    function handleScroll() {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        setPastHero(currentScrollY >= heroHeight);

        if (currentScrollY < heroHeight) {
          setHideNav(false);
        } else if (currentScrollY > lastScrollY) {
          setHideNav(true);
        } else {
          setHideNav(false);
        }

        lastScrollY = currentScrollY;
        ticking = false;
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateHeroHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeroHeight);
    };
  }, [isAbout]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-4 z-50 md:top-6 transition-transform duration-300 ease-out",
        isAbout && "top-3 md:top-5",
        hideNav && "-translate-y-[150%]"
      )}
    >
      {/* Gradient blur scrim — softens whatever scrolls behind the navbar so it stays legible */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 -top-4 h-32 backdrop-blur-xl md:-top-6",
          isLight && "bg-white/20",
          isAbout && "-top-3 h-24 backdrop-blur-none md:-top-5",
          "[mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_100%)]",
          "[-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_100%)]"
        )}
      />

      <div
        className={cn(
          "relative mx-auto grid max-w-[1320px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 md:px-8 lg:px-10",
          isAbout && "about-container max-w-[1632px] px-0 md:px-0 lg:px-0",
          isLight &&
            "mx-4 max-w-[1220px] rounded-full border border-[#1D0D3B]/10 bg-white/80 px-4 py-2 shadow-[0_12px_40px_rgba(69,36,125,0.08)] backdrop-blur-xl md:mx-auto md:px-5 lg:px-6"
        )}
      >
        {/* Logo — standalone, left, aligned with the hero headline */}
        <Link
          href="/#hero"
          onClick={handleHomeClick}
          className="flex items-center justify-self-start"
        >
          <Image
            src={
              darkLogo
                ? "/images/2Oddysee_Horizontal_White.svg"
                : isAbout
                ? "/images/Oddysee_Horizontal_White-1.svg"
                : isLight || pastHero
                ? "/images/2Oddysee_Horizontal_White.svg"
                : "/images/Oddysee_Horizontal_White-1.svg"
            }
            alt="Oddysee"
            width={192}
            height={48}
            className={cn(
              "h-[46px] w-auto md:h-[52px]",
              isLight && "h-8 md:h-9",
              isAbout && "h-8 md:h-10"
            )}
            priority
          />
        </Link>

        {/* Desktop nav — the floating island, centered */}
        <nav
          className={cn(
            "hidden items-center gap-8 justify-self-center rounded-full bg-black/20 px-8 py-4 backdrop-blur-md",
            isAbout &&
              "gap-1 border border-white/10 bg-black/25 px-2 py-2 backdrop-blur-xl lg:flex",
            !isAbout && "md:flex",
            isLight && "bg-transparent px-4 py-2 backdrop-blur-none"
          )}
        >
          <Link
            href="/#hero"
            onClick={handleHomeClick}
            aria-current={pathname === "/" ? "page" : undefined}
            className={cn(
              "text-base leading-6 text-[#faf9ff] transition-colors duration-150 hover:text-[#a78fff]",
              isAbout &&
                "rounded-full px-7 py-2.5 text-sm leading-5 transition-colors duration-200 hover:bg-[#8966ff]/25 hover:text-white",
              isLight && "text-sm text-[#1D0D3B] hover:text-[#632BC5]",
              pathname === "/" && "text-[#a78fff]",
              pathname === "/" && isLight && "text-[#632BC5]"
            )}
          >
            Accueil
          </Link>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={isActiveLink(link.href) ? "page" : undefined}
              className={cn(
                "text-base leading-6 text-[#faf9ff] transition-colors duration-150 hover:text-[#a78fff]",
                isAbout &&
                  "rounded-full px-7 py-2.5 text-sm leading-5 transition-colors duration-200 hover:bg-[#8966ff]/25 hover:text-white",
                isAbout && link.href === "/a-propos" &&
                  "bg-white/12 text-[#c6b7ff]",
                isLight && "text-sm text-[#1D0D3B] hover:text-[#632BC5]",
                isActiveLink(link.href) && "text-[#a78fff]",
                isActiveLink(link.href) && isLight && "text-[#632BC5]"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Get Started button — standalone, right */}
        <div className="justify-self-end">
          {isLight ? (
            <Link
              href="/contact"
              aria-label="Démarrer un projet"
              className="hidden h-9 w-9 items-center justify-center rounded-full bg-[#632BC5] text-white transition hover:scale-105 hover:bg-[#4f20a5] md:flex"
            >
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          ) : isAbout ? (
            <Link
              href="/contact"
              className="hidden rounded-full bg-[#a88fff] px-8 py-3.5 text-sm font-semibold text-[#0a0a0a] transition-[background-color,color] duration-200 hover:bg-[#8966ff] hover:text-white lg:block"
            >
              Démarrer un projet
            </Link>
          ) : (
            <Link
              href="/contact"
              className="hidden rounded-full bg-[#632BC5] px-8 py-4 text-sm font-bold text-[#ffffff] backdrop-blur-md transition hover:brightness-110 md:block"
            >
              Commencer
            </Link>
          )}

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Basculer le menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/20 backdrop-blur-md",
              isAbout ? "lg:hidden" : "md:hidden",
              isAbout && "border border-white/15 bg-black/35",
              isLight && "bg-[#632BC5]"
            )}
          >
            {mobileOpen ? (
              <XIcon className="h-5 w-5 text-[#faf9ff]" />
            ) : (
              <span className="flex flex-col items-end gap-1.5">
                <span className="h-0.5 w-5 rounded-full bg-[#faf9ff]" />
                <span className="h-0.5 w-3.5 rounded-full bg-[#faf9ff]" />
                <span className="h-0.5 w-5 rounded-full bg-[#faf9ff]" />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={cn(
            "animate-in fade-in slide-in-from-top-2 mx-4 mt-3 rounded-3xl bg-black/40 backdrop-blur-md duration-200",
            isAbout ? "lg:hidden" : "md:hidden",
            isAbout && "border border-white/12 bg-[#0a0a0a]/95",
            isLight && "border border-[#1D0D3B]/10 bg-white/95 shadow-xl"
          )}
        >
          <div className="flex flex-col gap-6 px-8 py-8">
            <Link
              href="/#hero"
              onClick={handleHomeClick}
              aria-current={pathname === "/" ? "page" : undefined}
              className={cn(
                "text-base text-[#faf9ff] transition-colors duration-150 hover:text-[#a78fff]",
                isLight && "text-[#1D0D3B] hover:text-[#632BC5]",
                pathname === "/" && "text-[#a78fff]",
                pathname === "/" && isLight && "text-[#632BC5]"
              )}
            >
              Accueil
            </Link>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                aria-current={isActiveLink(link.href) ? "page" : undefined}
                className={cn(
                  "text-base text-[#faf9ff] transition-colors duration-150 hover:text-[#a78fff]",
                  isLight && "text-[#1D0D3B] hover:text-[#632BC5]",
                  isActiveLink(link.href) && "text-[#a78fff]",
                  isActiveLink(link.href) && isLight && "text-[#632BC5]"
                )}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full rounded-full bg-[#632BC5] px-8 py-4 text-center text-sm font-bold text-[#faf9ff] transition hover:brightness-110"
            >
              Commencer
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
