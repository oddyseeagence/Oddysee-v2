import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ArrowUpRightIcon } from "@/components/icons";
import { featuredArticle, latestArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog | Oddysee",
  description:
    "Analyses, idées et conseils Oddysee sur le design, la stratégie digitale et la croissance des marques.",
};

export default function BlogPage() {
  return (
    <>
      <Header darkLogo />

      <main className="bg-white text-[#1D0D3B]">
        <section
          id="hero"
          className="mx-auto max-w-[1320px] px-4 pb-20 pt-40 md:px-8 md:pb-28 md:pt-48 lg:px-10 lg:pb-36 lg:pt-52"
        >
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.62fr] lg:gap-20">
            <h1 className="font-heading text-[clamp(72px,12vw,180px)] font-medium leading-[0.76] tracking-[-0.075em]">
              Blog.
            </h1>
            <p className="max-w-[520px] text-[clamp(20px,2vw,30px)] font-medium leading-[1.12] tracking-[-0.035em] text-[#1D0D3B]/70">
              Des analyses concrètes pour comprendre le digital,
              l’acquisition et les leviers qui accélèrent votre croissance.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1320px] px-4 md:px-8 lg:px-10">
          <Link
            href={`/blog/${featuredArticle.slug}`}
            aria-label={`Lire l’article ${featuredArticle.title}`}
            className="group block border-y border-[#1D0D3B]/15 py-5 outline-none focus-visible:ring-2 focus-visible:ring-[#632BC5] md:py-8"
          >
            <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
              <ProjectVisual
                src={featuredArticle.image}
                alt={featuredArticle.title}
                priority
                sizes="(min-width: 1024px) 65vw, 100vw"
                className="aspect-[16/10] rounded-[20px] bg-[#ece9f2]"
                imageClassName="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />

              <div className="flex flex-col justify-between py-1 md:py-4">
                <div>
                  <div className="flex items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.12em] text-[#1D0D3B]/45">
                    <span>{featuredArticle.category}</span>
                    <span>{featuredArticle.date}</span>
                  </div>
                  <h2 className="mt-8 text-[clamp(36px,4vw,62px)] font-medium leading-[0.96] tracking-[-0.055em]">
                    {featuredArticle.title}
                  </h2>
                  <p className="mt-7 text-base leading-7 text-[#1D0D3B]/60">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-[#1D0D3B]/15 pt-5 text-sm font-medium">
                  <span>{featuredArticle.readTime} de lecture</span>
                  <span className="flex size-11 items-center justify-center rounded-full bg-[#632BC5] text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                    <ArrowUpRightIcon className="size-5" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        <section className="mx-auto max-w-[1320px] px-4 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40">
          <div className="mb-14 flex items-end justify-between gap-8 border-b border-[#1D0D3B]/15 pb-7">
            <h2 className="text-[clamp(42px,5vw,76px)] font-medium leading-[0.9] tracking-[-0.055em]">
              Dernières idées.
            </h2>
            <p className="hidden text-sm text-[#1D0D3B]/45 sm:block">
              {latestArticles.length} articles
            </p>
          </div>

          <div className="grid gap-x-5 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                aria-label={`Lire l’article ${article.title}`}
                className="group block outline-none focus-visible:rounded-[18px] focus-visible:ring-2 focus-visible:ring-[#632BC5] focus-visible:ring-offset-4"
              >
                <ProjectVisual
                  src={article.image}
                  alt={article.title}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="aspect-[4/3] bg-[#ece9f2]"
                  imageClassName="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
                <div className="mt-5 flex items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.1em] text-[#1D0D3B]/45">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="mt-4 text-[clamp(25px,2.2vw,34px)] font-medium leading-[1.02] tracking-[-0.045em]">
                  {article.title}
                </h3>
                <p className="mt-4 text-[15px] leading-6 text-[#1D0D3B]/60">
                  {article.excerpt}
                </p>
                <p className="mt-5 text-xs text-[#1D0D3B]/40">{article.date}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1320px] px-4 pb-24 md:px-8 md:pb-32 lg:px-10 lg:pb-40">
          <div className="grid overflow-hidden rounded-[24px] bg-[#1D0D3B] px-7 py-12 text-white md:grid-cols-2 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                Newsletter
              </p>
              <h2 className="mt-5 max-w-[560px] text-[clamp(42px,5vw,76px)] font-medium leading-[0.92] tracking-[-0.055em]">
                Des idées concrètes pour accélérer votre croissance.
              </h2>
            </div>
            <div className="mt-10 flex flex-col justify-end md:mt-0 md:pl-12">
              <p className="max-w-[470px] text-base leading-7 text-white/60">
                Recevez nos analyses sur le digital, l’acquisition et la
                croissance. Des conseils concrets, directement par email.
              </p>
              <form className="mt-8 flex max-w-[520px] gap-3 border-b border-white/30 pb-3">
                <label htmlFor="blog-email" className="sr-only">
                  Votre adresse e-mail
                </label>
                <input
                  id="blog-email"
                  type="email"
                  placeholder="votre@email.com"
                  className="min-w-0 flex-1 bg-transparent py-3 text-base text-white outline-none placeholder:text-white/35"
                />
                <button
                  type="submit"
                  className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#632BC5] transition hover:bg-[#7b43dc]"
                  aria-label="S’inscrire à la newsletter"
                >
                  <ArrowUpRightIcon className="size-5" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
