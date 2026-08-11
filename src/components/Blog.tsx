"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  image: string;
}

const FEATURED_POST: BlogPost & { date: string } = {
  category: "Tendances Modernes",
  date: "7 juil. 2026",
  title: "Tendances du Design UI Moderne",
  excerpt:
    "L'expérience utilisateur évoluera avec l'IA, la personnalisation, l'accessibilité et des interactions plus intelligentes sur toutes les plateformes numériques.",
  image: "/images/PTrOdXdJAOGMtfCb7ccLalR0o.png",
};

const SMALL_POSTS: BlogPost[] = [
  {
    category: "Mobile d'Abord",
    title: "Stratégie de Design Mobile First",
    excerpt:
      "Concevez d'abord pour les petits écrans, en garantissant des mises en page réactives, de meilleures performances et des expériences fluides sur tous les appareils.",
    image: "/images/AJqFBTpotUc0ji5w7bB9Y4dQ7hM.png",
  },
  {
    category: "Pratiques UX",
    title: "Guide des Bonnes Pratiques UI Essentielles",
    excerpt:
      "Apprenez les principes clés d'utilisabilité et les stratégies centrées sur l'utilisateur pour créer des interfaces numériques intuitives et efficaces.",
    image: "/images/4bk7BRxDDKxeAdxLYsjHmyTbc2Q.png",
  },
  {
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
      className="scroll-reveal group"
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
    </div>
  );
}

function SmallPostCard({ post, index }: { post: BlogPost; index: number }) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal={isRevealed ? "visible" : "hidden"}
      className="scroll-reveal flex gap-5 items-start group"
      style={{ transitionDelay: `${index * 90}ms` }}
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
    </div>
  );
}

export function Blog() {
  const { ref: headerRef, isRevealed: isHeaderRevealed } =
    useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1320px] px-4 md:px-8 lg:px-10">
        <div
          ref={headerRef}
          data-reveal={isHeaderRevealed ? "visible" : "hidden"}
          className="scroll-reveal mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h2 className="font-heading text-4xl text-[#1D0D3B] md:text-5xl">
              Explore Latest Thoughts
            </h2>
          </div>
          <button
            type="button"
            className="w-fit rounded-full bg-[#632BC5] px-8 py-4 font-bold text-[#FFFFFF]"
          >
            Explore More
          </button>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
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
    </section>
  );
}
