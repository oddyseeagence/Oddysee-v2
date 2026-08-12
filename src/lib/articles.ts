export interface Article {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  introduction: string;
  conclusionQuote?: string;
  sections: Array<{
    title: string;
    paragraphs: string[];
  }>;
}

export const articles: Article[] = [
  {
    slug: "experiences-digitales-2027",
    category: "Stratégie digitale",
    date: "7 août 2026",
    title: "Les systèmes digitaux qui accéléreront votre croissance en 2027.",
    excerpt:
      "Automatisation, intelligence artificielle et clarté d’exécution : les leviers qui aident déjà les entreprises à acquérir, convertir et fidéliser leurs clients mieux durablement.",
    image: "/images/PTrOdXdJAOGMtfCb7ccLalR0o.png",
    readTime: "8 min",
    introduction:
      "Les meilleurs systèmes digitaux ne cherchent plus seulement à être beaux. Ils structurent l’acquisition, fluidifient la conversion et donnent à chaque interaction un rôle vraiment utile clair.",
    conclusionQuote:
      "Une bonne stratégie n’interrompt pas. Elle guide avec évidence mieux.",
    sections: [
      {
        title: "La clarté devient un avantage.",
        paragraphs: [
          "Plus les offres se diversifient, plus leur présentation doit devenir lisible. Une hiérarchie claire, des messages précis et des parcours courts permettent aux prospects d’avancer plus vite vers l’action finale.",
          "Cette clarté n’est pas une simplification superficielle. Elle résulte d’un travail précis sur l’offre, les contenus, les priorités, les objections et le parcours du prospect entier.",
        ],
      },
      {
        title: "L’automatisation doit rester humaine.",
        paragraphs: [
          "L’automatisation crée le plus de valeur lorsqu’elle améliore discrètement le suivi, la réactivité et l’accompagnement. L’expérience doit sembler fluide, naturelle et rassurante au quotidien.",
          "Les marques qui réussiront utiliseront ces outils pour mieux qualifier leurs prospects, sans sacrifier proximité, crédibilité ni confiance client.",
        ],
      },
      {
        title: "Un parcours, plusieurs points.",
        paragraphs: [
          "Le site, les contenus et les outils de suivi ne peuvent plus fonctionner séparément. Un système cohérent doit relier chaque étape tout en conservant le même niveau de clarté partout.",
        ],
      },
    ],
  },
  {
    slug: "belle-marque-ne-suffit-plus",
    category: "Stratégie",
    date: "2 août 2026",
    title: "Pourquoi une belle marque ne suffit plus.",
    excerpt:
      "Une marque forte doit s’appuyer sur un système capable d’attirer, convaincre, convertir et fidéliser durablement.",
    image: "/images/AJqFBTpotUc0ji5w7bB9Y4dQ7hM.png",
    readTime: "6 min",
    introduction:
      "Une marque ne se résume pas à son image. Elle grandit quand chaque message, chaque campagne et chaque interaction renforcent la même promesse auprès du client potentiel.",
    conclusionQuote:
      "Une belle marque attire l’attention. Un système cohérent la convertit.",
    sections: [
      {
        title: "L’identité ouvre la conversation.",
        paragraphs: [
          "Une identité distinctive attire l’attention, mais elle doit immédiatement être soutenue par une offre claire et une expérience réellement convaincante.",
          "Lorsque l’image et la promesse racontent des histoires différentes, la confiance disparaît très rapidement.",
        ],
      },
      {
        title: "La cohérence crée la valeur.",
        paragraphs: [
          "Le site, les campagnes, les contenus et le suivi commercial doivent fonctionner comme les différentes expressions d’une même stratégie.",
          "Cette continuité rend votre marque plus facile à comprendre, à retenir et à choisir.",
        ],
      },
    ],
  },
  {
    slug: "mobile-first-experience-first",
    category: "UX / UI",
    date: "25 juillet 2026",
    title: "Concevoir mobile-first, penser conversion-first.",
    excerpt:
      "Le mobile impose de meilleurs choix : une hiérarchie claire, moins de friction et des parcours conçus pour convertir.",
    image: "/images/4bk7BRxDDKxeAdxLYsjHmyTbc2Q.png",
    readTime: "5 min",
    introduction:
      "Concevoir pour le mobile oblige à concentrer chaque écran sur l’essentiel. Cette discipline produit des parcours plus simples, plus rapides et efficaces.",
    conclusionQuote:
      "Une bonne expérience ne ralentit pas la décision. Elle l’accélère.",
    sections: [
      {
        title: "Guider vers l’action.",
        paragraphs: [
          "Chaque écran doit guider vers une action principale. En supprimant les distractions, le parcours devient plus fluide et la décision du prospect plus évidente.",
        ],
      },
      {
        title: "La performance soutient directement la conversion.",
        paragraphs: [
          "Une interface élégante qui charge lentement perd des opportunités. Vitesse, stabilité et lisibilité doivent être intégrées dès la conception pour préserver l’expérience et les résultats commerciaux.",
        ],
      },
    ],
  },
  {
    slug: "ia-direction-creative",
    category: "Innovation",
    date: "18 juillet 2026",
    title: "L’IA ne remplace pas une vraie stratégie.",
    excerpt:
      "Les outils évoluent vite. La stratégie, la compréhension client et la capacité à faire les choix restent essentielles.",
    image: "/images/vunfas145xHTrOUHKMUMLF8dwrc.png",
    readTime: "7 min",
    introduction:
      "L’IA accélère l’analyse et l’exécution, mais elle ne décide ni de votre positionnement ni de ce qui convaincra réellement vos clients. La stratégie reste un travail de choix.",
    conclusionQuote:
      "Une bonne technologie accélère l’action. La stratégie donne le sens.",
    sections: [
      {
        title: "Produire plus n’est pas performer mieux.",
        paragraphs: [
          "La multiplication des contenus rend la stratégie encore plus importante. Chaque action doit servir un objectif précis, pas seulement produire davantage sans direction.",
        ],
      },
      {
        title: "L’humain garde la direction.",
        paragraphs: [
          "La connaissance du marché et des clients reste essentielle pour transformer les outils en décisions réellement performantes.",
        ],
      },
    ],
  },
  {
    slug: "site-clair-convertit-mieux",
    category: "Conversion",
    date: "10 juillet 2026",
    title: "Un site clair transforme mieux vos visiteurs.",
    excerpt:
      "Comment transformer une offre complexe en un parcours simple qui conduit naturellement vos visiteurs vers la conversion.",
    image: "/images/U6Npa7O4X2OlLqe9caPvFM1fQ.png",
    readTime: "4 min",
    introduction:
      "La conversion commence par la clarté. Si un visiteur doit comprendre seul votre offre, chercher vos preuves ou deviner l’étape suivante, le parcours perd rapidement toute son efficacité.",
    conclusionQuote:
      "Un bon site ne complique pas la décision. Il l’accélère.",
    sections: [
      {
        title: "Une promesse avant les détails.",
        paragraphs: [
          "Vos visiteurs veulent d’abord comprendre la valeur que vous pouvez créer pour eux. Les caractéristiques deviennent réellement utiles une fois cette promesse clairement installée.",
        ],
      },
      {
        title: "Chaque section doit guider l’action.",
        paragraphs: [
          "Une page performante répond progressivement aux questions, apporte des preuves et réduit les hésitations jusqu’à rendre la prochaine action parfaitement naturelle.",
        ],
      },
    ],
  },
  {
    slug: "marque-reconnaissable",
    category: "Identité",
    date: "1 juillet 2026",
    title: "Créer une marque reconnaissable sans logo géant.",
    excerpt:
      "Une identité naît de codes cohérents, répétés partout pour devenir immédiatement reconnaissable et mémorable.",
    image: "/images/ZLfjupIzIYXJw7hzRvT4aWylANA.png",
    readTime: "6 min",
    introduction:
      "Une marque devient mémorable lorsque chaque détail renforce la même promesse. La cohérence permet d’être reconnue avant même le logo.",
    conclusionQuote:
      "Une marque forte devient reconnaissable bien au-delà de son logo.",
    sections: [
      {
        title: "Créer des codes distinctifs.",
        paragraphs: [
          "Typographie, couleurs, ton et mouvement forment un langage de marque. Utilisés avec constance, ils renforcent la reconnaissance et la crédibilité durablement.",
        ],
      },
      {
        title: "Répéter sans devenir prévisible.",
        paragraphs: [
          "Un système cohérent impose des règles pour rester reconnaissable, tout en gardant la liberté nécessaire pour surprendre encore.",
        ],
      },
    ],
  },
  {
    slug: "design-system-croissance",
    category: "Produit",
    date: "22 juin 2026",
    title: "Le design system comme moteur de croissance.",
    excerpt:
      "Un système cohérent accélère les équipes, réduit les frictions et renforce chaque expérience quand l’entreprise grandit.",
    image: "/images/DeY32bDwEuzZ6HcYmlxZqgyMQ.png",
    readTime: "8 min",
    introduction:
      "Un design system ne sert pas seulement à harmoniser l’interface. Il crée une base qui permet aux équipes de produire mieux, plus vite.",
    conclusionQuote:
      "Un système solide accélère la création sans sacrifier la cohérence.",
    sections: [
      {
        title: "Structurer avant d’accélérer.",
        paragraphs: [
          "Des règles claires alignent design, produit et développement pour réduire les hésitations et accélérer chaque nouvelle décision collective.",
        ],
      },
      {
        title: "Grandir sans perdre cohérence.",
        paragraphs: [
          "Un système évolue avec les besoins, documente les choix et protège la cohérence à mesure que les produits se multiplient.",
        ],
      },
    ],
  },
];

export const featuredArticle = articles[0];
export const latestArticles = articles.slice(1);

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug: string, count = 2) {
  const currentIndex = articles.findIndex((article) => article.slug === slug);

  return Array.from({ length: count }, (_, offset) => {
    const index = (currentIndex + offset + 1) % articles.length;
    return articles[index];
  });
}
