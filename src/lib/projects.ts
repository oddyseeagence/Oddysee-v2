export interface ProjectCaseStudy {
  slug: string;
  title: string;
  year: string;
  category: string;
  client: string;
  location: string;
  services: string[];
  description: string;
  introduction: string;
  challenge: string;
  solution: string;
  impact: string;
  image: string;
  gallery: string[];
}

export const projects: ProjectCaseStudy[] = [
  {
    slug: "busix",
    title: "Busix",
    year: "2024",
    category: "Expérience digitale",
    client: "Busix",
    location: "Casablanca, Maroc",
    services: ["Stratégie", "Direction artistique", "Web design"],
    description:
      "Une expérience digitale claire et structurée pour présenter l’expertise d’une marque avec impact.",
    introduction:
      "Busix avait besoin d’un univers capable de rendre une offre complexe immédiatement lisible. Nous avons construit une présence digitale précise, éditoriale et résolument contemporaine.",
    challenge:
      "Transformer une expertise dense en un récit simple, mémorable et facile à parcourir, sans perdre la personnalité ambitieuse de la marque.",
    solution:
      "Une direction visuelle monochrome, une hiérarchie typographique forte et un système de pages modulaires donnent à chaque idée l’espace nécessaire pour convaincre.",
    impact:
      "La nouvelle expérience positionne Busix comme un partenaire plus clair, plus premium et plus crédible, tout en facilitant la prise de contact.",
    image: "/images/m9iGbTvzSU0X8EmaayVuOMIRork.png",
    gallery: [
      "/images/PTrOdXdJAOGMtfCb7ccLalR0o.png",
      "/images/ZLfjupIzIYXJw7hzRvT4aWylANA.png",
      "/images/U6Npa7O4X2OlLqe9caPvFM1fQ.png",
    ],
  },
  {
    slug: "mindeasee",
    title: "MindEasee",
    year: "2024",
    category: "Identité de marque",
    client: "MindEasee",
    location: "Paris, France",
    services: ["Identité", "Design system", "Produit digital"],
    description:
      "Une identité apaisante et une interface pensée pour créer de la confiance dès le premier regard.",
    introduction:
      "MindEasee souhaitait rendre le bien-être mental plus accessible, avec une marque rassurante sans être clinique. Nous avons imaginé un langage doux, direct et humain.",
    challenge:
      "Créer un sentiment de sécurité immédiat tout en conservant l’énergie et la simplicité attendues d’un produit digital moderne.",
    solution:
      "Un système visuel minimal, des compositions généreuses et une expérience mobile fluide accompagnent l’utilisateur avec calme à chaque étape.",
    impact:
      "Une marque cohérente et accueillante qui renforce la confiance, améliore la compréhension du service et facilite l’adoption du produit.",
    image: "/images/TzNUKQ3nV4fZNTQVsrtY5HZdZQg.png",
    gallery: [
      "/images/PTrOdXdJAOGMtfCb7ccLalR0o.png",
      "/images/DeY32bDwEuzZ6HcYmlxZqgyMQ.png",
      "/images/ZLfjupIzIYXJw7hzRvT4aWylANA.png",
    ],
  },
  {
    slug: "lunex",
    title: "Lunex",
    year: "2024",
    category: "Produit mobile",
    client: "Lunex",
    location: "Montréal, Canada",
    services: ["UX/UI", "Prototype", "Design system"],
    description:
      "Un kit d’interface mobile conçu pour rendre chaque interaction rapide, fluide et intuitive.",
    introduction:
      "Lunex réunit de nombreux usages dans un même produit. Notre mission était de donner à cette richesse une interface évidente, cohérente et agréable au quotidien.",
    challenge:
      "Faire cohabiter des fonctionnalités multiples dans une expérience compacte, sans surcharge ni rupture entre les différents parcours.",
    solution:
      "Une architecture simplifiée, des composants flexibles et des micro-interactions ciblées rendent l’expérience plus rapide et naturellement familière.",
    impact:
      "Le nouveau système réduit la friction, accélère le développement de nouvelles fonctionnalités et installe une signature produit reconnaissable.",
    image: "/images/1JwMgKBC5NLItnIkj4lQUhGmN9k.png",
    gallery: [
      "/images/ZLfjupIzIYXJw7hzRvT4aWylANA.png",
      "/images/PTrOdXdJAOGMtfCb7ccLalR0o.png",
      "/images/U6Npa7O4X2OlLqe9caPvFM1fQ.png",
    ],
  },
  {
    slug: "zentro",
    title: "Zentro",
    year: "2025",
    category: "Site SaaS",
    client: "Zentro",
    location: "Londres, Royaume-Uni",
    services: ["Positionnement", "Web design", "Développement"],
    description:
      "Un site SaaS moderne qui simplifie le produit, renforce sa valeur et guide vers la conversion.",
    introduction:
      "Zentro avait un produit puissant, mais son histoire restait difficile à saisir. Nous avons transformé sa plateforme en une démonstration simple, visuelle et convaincante.",
    challenge:
      "Expliquer rapidement une solution technique et installer un niveau de confiance suffisant pour faire avancer des prospects exigeants.",
    solution:
      "Une narration progressive, des preuves produit au bon moment et une identité digitale nette structurent le parcours jusqu’à la conversion.",
    impact:
      "Le site clarifie la proposition de valeur, donne plus de poids au produit et crée un parcours commercial plus fluide et plus mesurable.",
    image: "/images/U6Npa7O4X2OlLqe9caPvFM1fQ.png",
    gallery: [
      "/images/PTrOdXdJAOGMtfCb7ccLalR0o.png",
      "/images/DeY32bDwEuzZ6HcYmlxZqgyMQ.png",
      "/images/ZLfjupIzIYXJw7hzRvT4aWylANA.png",
    ],
  },
  {
    slug: "vynex",
    title: "Vynex",
    year: "2025",
    category: "Plateforme data",
    client: "Vynex",
    location: "Berlin, Allemagne",
    services: ["Stratégie produit", "UX/UI", "Design system"],
    description:
      "Un tableau de bord modulaire qui transforme des données complexes en décisions lisibles.",
    introduction:
      "Vynex donne du sens à des flux de données exigeants. Nous avons conçu une plateforme où l’essentiel ressort immédiatement et où chaque détail reste accessible.",
    challenge:
      "Organiser une grande densité d’information sans ralentir l’utilisateur, tout en donnant au produit une identité singulière et premium.",
    solution:
      "Une grille modulaire, des contrastes précis et une bibliothèque de composants robuste rendent les décisions plus rapides sur tous les écrans.",
    impact:
      "La plateforme est plus facile à prendre en main, plus cohérente à faire évoluer et plus efficace pour les équipes qui l’utilisent chaque jour.",
    image: "/images/DeY32bDwEuzZ6HcYmlxZqgyMQ.png",
    gallery: [
      "/images/ZLfjupIzIYXJw7hzRvT4aWylANA.png",
      "/images/PTrOdXdJAOGMtfCb7ccLalR0o.png",
      "/images/U6Npa7O4X2OlLqe9caPvFM1fQ.png",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProjects(slug: string, count = 2) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  return Array.from({ length: count }, (_, offset) => {
    const index = (currentIndex + offset + 1) % projects.length;
    return projects[index];
  });
}
