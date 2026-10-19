// Entité FournIA : la SEULE source de l'identité du site pour les moteurs (SEO + GEO).
// Accueil, pages de service et articles lisent tous ce fichier : une info change ici, partout.
//
// BRANCHEMENTS (à remplir par Simon, voir BRANCHEMENT-SEO.md) :
//   - GOOGLE_VERIFICATION : le `content` de la balise donnée par Google Search Console.
//   - BING_VERIFICATION : seulement si Bing ne passe pas par l'import Google.
//   - SAME_AS : les URL de profils officiels (LinkedIn, Instagram, fiche Google, hellodarwin).
// Tant qu'une valeur est vide, rien n'est émis : aucune balise vide ne part en production.

export const GOOGLE_VERIFICATION = '';
export const BING_VERIFICATION = '';

export const SAME_AS = [
  // 'https://www.linkedin.com/in/...',
  // 'https://www.instagram.com/...',
  // 'https://g.page/...',            // lien « Partager le profil » de la fiche Google
  // 'https://hellodarwin.com/fr/agences/...',
];

export const SITE = 'https://fournia.net';
export const CTA = 'https://calendly.com/s-fournier-fournia/discovery-call-fournia';

// Zone de service : Blainville comme ancrage, sans adresse civique (bureau à domicile, jamais publiée).
export const ZONES = [
  'Blainville', 'Laval', 'Mirabel', 'Terrebonne', 'Sainte-Thérèse', 'Boisbriand',
  'Saint-Jérôme', 'Rosemère', 'Montréal',
];

export const DESCRIPTION =
  "Automatisation d'entreprise et accompagnement en intelligence artificielle pour les PME du Québec : audit, implantation d'automatisations et d'agents IA, formation des équipes. Basée à Blainville, sur la Rive-Nord de Montréal. Vérification Loi 25 à chaque projet.";

const founder = {
  '@type': 'Person',
  '@id': `${SITE}/#simon-fournier`,
  name: 'Simon Fournier',
  jobTitle: 'Fondateur',
  worksFor: { '@id': `${SITE}/#fournia` },
};

// ProfessionalService (sous-type de LocalBusiness) : c'est ce type qui fait exister FournIA
// comme entreprise locale pour Google et pour les moteurs IA.
export const organisationLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE}/#fournia`,
  name: 'FournIA',
  url: `${SITE}/`,
  logo: `${SITE}/brand/fournia-icon-512.png`,
  image: `${SITE}/brand/fournia-lockup-horizontal-dark.png`,
  description: DESCRIPTION,
  email: 's.fournier@fournia.net',
  telephone: '+1-514-863-2973',
  founder,
  foundingDate: '2026-04',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Blainville',
    addressRegion: 'QC',
    addressCountry: 'CA',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Québec' },
    ...ZONES.map((name) => ({ '@type': 'City', name })),
  ],
  knowsLanguage: ['fr-CA', 'en'],
  knowsAbout: [
    "Automatisation d'entreprise",
    'Intelligence artificielle',
    'Agents IA',
    'Automatisation des processus',
    'Loi 25',
    'Formation en intelligence artificielle',
  ],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Automatisation d'entreprise", url: `${SITE}/automatisation-entreprise/` } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Accompagnement en intelligence artificielle', url: `${SITE}/accompagnement-intelligence-artificielle/` } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consultant en IA sur la Rive-Nord', url: `${SITE}/consultant-ia-rive-nord/` } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Formation IA en entreprise', url: `${SITE}/formation-ia-entreprise/` } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IA pour petite entreprise à Montréal', url: `${SITE}/ia-petite-entreprise-montreal/` } },
  ],
  ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
};

// Version courte pour `publisher` dans les articles (référence à l'entité complète).
export const publisherLd = {
  '@type': 'Organization',
  '@id': `${SITE}/#fournia`,
  name: 'FournIA',
  url: `${SITE}/`,
  logo: { '@type': 'ImageObject', url: `${SITE}/brand/fournia-icon-512.png` },
  ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
};

export const SERVICES = [
  { href: '/ia-petite-entreprise-montreal/', label: 'IA pour petite entreprise à Montréal' },
  { href: '/accompagnement-intelligence-artificielle/', label: 'Accompagnement en IA' },
  { href: '/formation-ia-entreprise/', label: 'Formation IA en entreprise' },
  { href: '/automatisation-entreprise/', label: "Automatisation d'entreprise" },
  { href: '/consultant-ia-rive-nord/', label: 'Consultant IA Rive-Nord' },
];
