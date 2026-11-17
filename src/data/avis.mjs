// Avis Google affichés à l'accueil (composant Preuves) et sur /temoignages/.
//
// Règle : copier l'avis mot pour mot depuis Google (jamais reformulé, jamais inventé, coquilles comprises).
// Pas de balisage schema « Review » sur ces avis : Google ne l'accepte pas pour ses propres avis
// (avis « auto-promotionnels »), et le risque est une pénalité manuelle.
//
// Format : { auteur, note, texte, date (approx. selon Google), lien }
// Source : fiche Google de FournIA, captures fournies par Simon le 2026-11-16 (texte original en français).
const FICHE = 'https://www.google.com/maps/place/?q=place_id:ChIJsdQghSzNcYYRYtKfR1rBPgc';

export const TOUS_AVIS = [
  {
    auteur: 'Freddy Aubuchon',
    note: 5,
    texte: "Simon est un jeune génie. Il trouve des solutions pour tous. Je le recommande à 100%. I'l m'a construit une solution pour ma compagnie qui m'a sauvé énormément de temps et de maux de têtes.",
    date: '2026-11-15',
    lien: FICHE,
    systeme: "Le CRM et les suivis d'un fondateur seul", systeme_en: 'A solo founder\'s CRM and follow-ups',
    secteur: 'Formation numérique pour aînés', secteur_en: 'Digital training for seniors',
  },
  {
    auteur: 'Karyann Turcotte',
    note: 5,
    texte: "J'ai adoré mon expérience avec Simon! Il était vraiment à l'écoute de mes besoins et est arrivé avec plusieurs idées pour améliorer les pratiques de mon entreprise ! Je le recommande à tous !",
    date: '2026-09',
    lien: FICHE,
    systeme: 'Les suivis clients par texto', systeme_en: 'Client follow-ups by text message',
    secteur: 'Conseillère en sécurité financière', secteur_en: 'Financial security advisor',
  },
  {
    auteur: 'Alexandre Mercier',
    note: 5,
    texte: 'Simon est excellent, il sait très bien détecter les besoins!',
    date: '2026-08',
    lien: FICHE,
    // Partenaire (agence), pas un client final : on ne nomme jamais le mandat livré pour lui.
    systeme: 'Partenaire de livraison', systeme_en: 'Delivery partner',
    secteur: "Agence d'automatisation", secteur_en: 'Automation agency',
  },
  // NON PUBLIÉ : avis de Stéphane Bernier (Pubsphere), mis en ligne le 2026-11-17 depuis le compte Google
  // de Charles-Alexandre Bernier, partenaire à commission de FournIA. Le nom public sur Google n'est pas celui
  // du client : l'afficher sous « Stéphane » serait faux, sous « Charles-Alexandre » ce serait un avis de
  // partenaire présenté comme un avis client. Il s'active quand Stéphane le republie de son propre compte.
  {
    publier: false,
    auteur: 'Stéphane Bernier',
    note: 5,
    texte: "malade, j'ai adoré mon expérience. Ma vie a changé.",
    date: '2026-11-17',
    lien: FICHE,
    systeme: 'Les relevés de cartes de crédit, classés dans Excel', systeme_en: 'Credit card statements, sorted into Excel',
    secteur: "Fabricant de kiosques d'exposition", secteur_en: 'Trade show booth maker',
  },
];

// Seuls les avis publiables sortent du fichier (la note moyenne et le compte en dépendent).
export const AVIS = TOUS_AVIS.filter((a) => a.publier !== false);

// Lien vers la fiche Google de FournIA (bouton « Voir tous les avis »).
export const LIEN_FICHE_GOOGLE = FICHE;

// Lien direct pour laisser un avis (ouvre la fenêtre des étoiles).
export const LIEN_LAISSER_AVIS = 'https://g.page/r/CWLSn0dawT4HEAI/review';
