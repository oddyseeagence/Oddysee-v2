import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ArrowUpRightIcon } from "@/components/icons";
import {
  articles,
  getArticle,
  getRelatedArticles,
} from "@/lib/articles";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) return {};

  return {
    title: `${article.title} | Oddysee`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  const relatedArticles = getRelatedArticles(article.slug);

  return (
    <>
      <Header darkLogo />

      <main className="bg-white text-[#1D0D3B]">
        <article>
          <header
            id="hero"
            className="mx-auto max-w-[1320px] px-4 pb-16 pt-40 md:px-8 md:pb-24 md:pt-48 lg:px-10 lg:pb-28 lg:pt-52"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1D0D3B]/50 transition hover:text-[#632BC5]"
            >
              <span aria-hidden="true">←</span>
              Retour au blog
            </Link>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.38fr] lg:items-end lg:gap-20">
              <h1 className="max-w-[960px] text-[clamp(52px,7.4vw,108px)] font-medium leading-[0.88] tracking-[-0.065em]">
                {article.title}
              </h1>
              <div className="border-t border-[#1D0D3B]/15 pt-5 text-sm">
                <p className="font-medium text-[#632BC5]">{article.category}</p>
                <div className="mt-5 flex justify-between gap-6 text-[#1D0D3B]/50">
                  <span>{article.date}</span>
                  <span>{article.readTime} de lecture</span>
                </div>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-[1320px] px-4 md:px-8 lg:px-10">
            <ProjectVisual
              src={article.image}
              alt={article.title}
              priority
              sizes="(min-width: 1320px) 1240px, 100vw"
              className="aspect-[16/9] rounded-[22px] bg-[#ece9f2]"
              imageClassName="object-cover"
            />
          </div>

          <div className="mx-auto max-w-[1320px] px-4 py-20 md:px-8 md:py-28 lg:px-10 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
              <aside className="lg:sticky lg:top-32 lg:self-start">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1D0D3B]/40">
                  En bref
                </p>
                <p className="mt-6 max-w-[390px] text-lg leading-7 text-[#1D0D3B]/65">
                  {article.excerpt}
                </p>
              </aside>

              <div className="max-w-[760px]">
                <p className="text-[clamp(26px,3vw,42px)] font-medium leading-[1.08] tracking-[-0.04em]">
                  {article.introduction}
                </p>

                <div className="mt-20 space-y-20 md:mt-28 md:space-y-28">
                  {article.sections.map((section, index) => (
                    <section key={section.title}>
                      <p className="text-xs font-semibold text-[#632BC5]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-4 text-[clamp(34px,4vw,58px)] font-medium leading-[0.98] tracking-[-0.05em]">
                        {section.title}
                      </h2>
                      <div className="mt-8 space-y-6 text-[17px] leading-8 text-[#1D0D3B]/65">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                <blockquote className="mt-24 border-l-2 border-[#632BC5] pl-7 text-[clamp(28px,3.5vw,48px)] font-medium leading-[1.05] tracking-[-0.045em] md:mt-32 md:pl-10">
                  {article.conclusionQuote ??
                    "Une bonne expérience ne demande pas d’attention. Elle la mérite."}
                </blockquote>
              </div>
            </div>
          </div>
        </article>

        <section className="border-t border-[#1D0D3B]/15 py-24 md:py-32">
          <div className="mx-auto max-w-[1320px] px-4 md:px-8 lg:px-10">
            <div className="flex items-end justify-between gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1D0D3B]/40">
                  Continuer la lecture
                </p>
                <h2 className="mt-4 text-[clamp(46px,6vw,88px)] font-medium leading-[0.88] tracking-[-0.06em]">
                  À lire ensuite.
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden items-center gap-2 rounded-full border border-[#1D0D3B]/25 px-5 py-3 text-sm font-medium transition hover:bg-[#1D0D3B] hover:text-white sm:flex"
              >
                Tous les articles
                <ArrowUpRightIcon className="size-4" />
              </Link>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group outline-none focus-visible:rounded-[18px] focus-visible:ring-2 focus-visible:ring-[#632BC5] focus-visible:ring-offset-4"
                >
                  <ProjectVisual
                    src={related.image}
                    alt={related.title}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="aspect-[4/3] bg-[#ece9f2]"
                    imageClassName="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <p className="mt-5 text-xs font-medium uppercase tracking-[0.1em] text-[#632BC5]">
                    {related.category}
                  </p>
                  <h3 className="mt-3 max-w-[560px] text-[clamp(26px,3vw,40px)] font-medium leading-[1] tracking-[-0.045em]">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
