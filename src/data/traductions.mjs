// Correspondance des pages françaises et anglaises du site (même page, autre langue).
// Une seule source : le bouton FR | EN, les balises hreflang et le plan du site la lisent toutes.
// Clé = chemin français, valeur = chemin anglais. Toujours avec la barre oblique finale.
export const PAGES_FR_EN = {
  '/': '/en/',
  '/diagnostic/': '/en/diagnostic/',
  '/a-propos/': '/en/about/',
  '/temoignages/': '/en/testimonials/',
  '/avis/': '/en/reviews/',
  '/confidentialite/': '/en/privacy/',
  '/sms-conditions/': '/en/sms-terms/',
  '/automatisation-entreprise/': '/en/custom-systems/',
  '/accompagnement-intelligence-artificielle/': '/en/ai-support/',
  '/formation-ia-entreprise/': '/en/ai-training/',
  '/ia-petite-entreprise-montreal/': '/en/small-business-ai-montreal/',
  '/consultant-ia-rive-nord/': '/en/ai-consultant-north-shore/',
  '/secteurs/': '/en/industries/',
  '/secteurs/thermopompes-climatisation/': '/en/industries/heat-pumps-hvac/',
  '/secteurs/evenementiel/': '/en/industries/events/',
  '/secteurs/traiteurs/': '/en/industries/caterers/',
  '/secteurs/conseillers-financiers/': '/en/industries/financial-advisors/',
  '/secteurs/services-en-ligne/': '/en/industries/online-services/',
  '/secteurs/centres-de-tutorat/': '/en/industries/tutoring-centres/',
  '/secteurs/renovation-construction/': '/en/industries/renovation-construction/',
  '/secteurs/courtiers-immobiliers/': '/en/industries/real-estate-brokers/',
  '/secteurs/cliniques-esthetique/': '/en/industries/aesthetic-clinics/',
  '/secteurs/cabinets-comptables/': '/en/industries/accounting-firms/',
  '/secteurs/agences-marketing/': '/en/industries/marketing-agencies/',
  '/secteurs/formation-employes/': '/en/industries/employee-training/',
  '/offre/appel-manque/': '/en/offer/missed-calls/',
  '/offre/methode-avant-outil/': '/en/offer/method-before-tools/',
  '/offre/relances-oubliees/': '/en/offer/forgotten-follow-ups/',
  '/offre/securite-loi25/': '/en/offer/law-25-security/',
  '/offre/soumission-qui-traine/': '/en/offer/stalled-quotes/',
  '/blog/': '/en/blog/',
  '/blog/agent-ia-pme-definition-exemples-2026/': '/en/blog/what-is-an-ai-agent-small-business-2026/',
  '/blog/choisir-consultant-ia-pme-quebec-2026/': '/en/blog/choosing-ai-consultant-quebec-2026/',
  '/blog/consultant-ia-rive-nord-montreal-2026/': '/en/blog/ai-consultant-north-shore-montreal-2026/',
  '/blog/cout-automatisation-ia-pme-quebec-2026/': '/en/blog/ai-automation-cost-quebec-2026/',
  '/blog/cout-consultant-ia-quebec-2026/': '/en/blog/ai-consultant-cost-quebec-2026/',
  '/blog/former-employes-ia-pme-quebec-2026/': '/en/blog/training-employees-ai-quebec-2026/',
  '/blog/loi-25-ia-entreprise-quebec-conformite-2026/': '/en/blog/law-25-ai-compliance-quebec-2026/',
  '/blog/n8n-cest-quoi-automatisation-pme-quebec-2026/': '/en/blog/what-is-n8n-small-business-quebec-2026/',
  '/blog/par-ou-commencer-ia-pme-quebec-2026/': '/en/blog/where-to-start-ai-small-business-quebec-2026/',
  '/blog/roi-ia-pme-quebec-2026/': '/en/blog/ai-roi-small-business-quebec-2026/',
  '/blog/taches-automatiser-premier-ia-pme-quebec-2026/': '/en/blog/tasks-to-automate-first-ai-2026/',
};

export const PAGES_EN_FR = Object.fromEntries(Object.entries(PAGES_FR_EN).map(([fr, en]) => [en, fr]));

const finSlash = (p) => (p.endsWith('/') ? p : `${p}/`);

// Chemin de la même page dans l'autre langue, ou null si elle n'existe pas.
export function autreLangue(chemin) {
  const p = finSlash(chemin);
  return PAGES_FR_EN[p] ?? PAGES_EN_FR[p] ?? null;
}

// Chemin anglais d'un lien interne français (pour traduire les liens dans les contenus).
export const enAnglais = (cheminFr) => PAGES_FR_EN[finSlash(cheminFr)] ?? cheminFr;
