"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
}

const FEATURED_POST: BlogPost & { date: string } = {
  slug: "experiences-digitales-2027",
  category: "Tendances Modernes",
  date: "7 juil. 2026",
  title: "Tendances du Design UI Moderne",
  excerpt:
    "L'expérience utilisateur évoluera avec l'IA, la personnalisation, l'accessibilité et des interactions plus intelligentes sur toutes les plateformes numériques.",
  image: "/images/PTrOdXdJAOGMtfCb7ccLalR0o.png",
};

const SMALL_POSTS: BlogPost[] = [
  {
    slug: "mobile-first-experience-first",
    category: "Mobile d'Abord",
    title: "Stratégie de Design Mobile First",
    excerpt:
      "Concevez d'abord pour les petits écrans, en garantissant des mises en page réactives, de meilleures performances et des expériences fluides sur tous les appareils.",
    image: "/images/AJqFBTpotUc0ji5w7bB9Y4dQ7hM.png",
  },
  {
    slug: "site-clair-convertit-mieux",
    category: "Pratiques UX",
    title: "Guide des Bonnes Pratiques UI Essentielles",
    excerpt:
      "Apprenez les principes clés d'utilisabilité et les stratégies centrées sur l'utilisateur pour créer des interfaces numériques intuitives et efficaces.",
    image: "/images/4bk7BRxDDKxeAdxLYsjHmyTbc2Q.png",
  },
  {
    slug: "ia-direction-creative",
    category: "Design du Futur",
    title: "Orientations Futures du Design UI",
    excerpt:
      "Le design UI évoluera avec l'IA, l'interaction vocale, les expériences immersives et des interfaces utilisateur plus personnalisées et adaptatives.",
    image: "/images/vunfas145xHTrOUHKMUMLF8dwrc.png",
  },
];

function FeaturedPostCard() {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal={isRevealed ? "visible" : "hidden"}
      className="scroll-reveal"
    >
      <Link
        href={`/blog/${FEATURED_POST.slug}`}
        aria-label={`Lire l’article ${FEATURED_POST.title}`}
        className="group block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#632BC5] focus-visible:ring-offset-4"
      >
        <div className="rounded-2xl overflow-hidden aspect-[16/10]">
          <Image
            src={FEATURED_POST.image}
            alt={FEATURED_POST.title}
            width={800}
            height={500}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
        <div className="flex justify-between text-sm text-[rgba(29,13,59,0.6)] mt-4">
          <span>{FEATURED_POST.category}</span>
          <span>{FEATURED_POST.date}</span>
        </div>
        <h3 className="font-heading text-2xl md:text-[28px] text-[#1D0D3B] mt-3">
          {FEATURED_POST.title}
        </h3>
        <p className="font-sans text-base text-[rgba(29,13,59,0.7)] mt-2">
          {FEATURED_POST.excerpt}
        </p>
      </Link>
    </div>
  );
}

function SmallPostCard({ post, index }: { post: BlogPost; index: number }) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal={isRevealed ? "visible" : "hidden"}
      className="scroll-reveal"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Lire l’article ${post.title}`}
        className="group flex items-start gap-5 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#632BC5] focus-visible:ring-offset-4"
      >
        <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-xl overflow-hidden shrink-0">
          <Image
            src={post.image}
            alt={post.title}
            width={240}
            height={240}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
        <div>
          <span className="font-sans text-sm text-[rgba(29,13,59,0.6)]">
            {post.category}
          </span>
          <h4 className="font-heading text-xl md:text-[22px] text-[#1D0D3B] mt-1">
            {post.title}
          </h4>
          <p className="font-sans text-sm md:text-[15px] text-[rgba(29,13,59,0.7)] mt-1">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </div>
  );
}

export function Blog() {
  const { ref: headerRef, isRevealed: isHeaderRevealed } =
    useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1320px] px-4 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-x-6">
          <div
            ref={headerRef}
            data-reveal={isHeaderRevealed ? "visible" : "hidden"}
            className="scroll-reveal col-start-1 row-start-1"
          >
            <h2 className="font-heading text-4xl text-[#1D0D3B] md:text-5xl">
              Explore Latest Thoughts
            </h2>
          </div>
          <Link
            href="/blog"
            data-reveal={isHeaderRevealed ? "visible" : "hidden"}
            className="scroll-reveal col-start-1 row-start-3 mt-12 w-fit justify-self-center rounded-full bg-[#632BC5] px-8 py-4 font-bold text-[#FFFFFF] transition hover:bg-[#4f20a5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#632BC5] focus-visible:ring-offset-4 md:col-start-2 md:row-start-1 md:mt-0 md:justify-self-auto"
          >
            Explore More
          </Link>

          <div className="col-start-1 row-start-2 mt-16 grid grid-cols-1 gap-12 md:col-span-2 lg:grid-cols-2">
            <FeaturedPostCard />

            <div className="flex flex-col gap-10">
              {SMALL_POSTS.map((post, index) => (
                <SmallPostCard
                  key={post.title}
                  post={post}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
