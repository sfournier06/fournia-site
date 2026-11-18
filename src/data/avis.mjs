// Avis Google affichés à l'accueil (composant Preuves) et sur /temoignages/.
//
// Règle : copier l'avis mot pour mot depuis Google (jamais reformulé, jamais inventé, coquilles comprises).
// Pas de balisage schema « Review » sur ces avis : Google ne l'accepte pas pour ses propres avis
// (avis « auto-promotionnels »), et le risque est une pénalité manuelle.
//
// Format : { auteur, note, texte, date (approx. selon Google), lien }
// Source : fiche Google de FournIA, lue par l'API Google Places le 2026-11-17 (5 avis, texte original en français).
const FICHE = 'https://www.google.com/maps/place/?q=place_id:ChIJsdQghSzNcYYRYtKfR1rBPgc';

export const TOUS_AVIS = [
  {
    auteur: 'Thomas Arbour',
    note: 5,
    texte: "Je recommande Simon et l’équipe de FournIA sans hésiter! Ils ont automatisé la messagerie de mon entreprise, et ça a fait une vraie différence au quotidien. Les suivis avec les clients se font maintenant beaucoup plus rapidement, et on sauve énormément de temps sur les tâches répétitives. Simon a pris le temps de bien comprendre notre fonctionnement, il a été très disponible, et il a livré une solution efficace et adaptée à nos besoins. Un service professionnel et humain. Merci, Simon!",
    date: '2026-11-16',
    lien: FICHE,
    systeme: 'La réponse aux nouvelles demandes', systeme_en: 'Replying to new requests',
    secteur: "Centre d'aide académique", secteur_en: 'Academic support centre',
  },
  {
    auteur: 'Freddy Aubuchon',
    note: 5,
    texte: "Simon est un jeune génie. Il trouve des solutions pour tous. Je le recommande à 100%. I'l m'a construit une solution pour ma compagnie qui m'a sauvé énormément de temps et de maux de têtes.",
    date: '2026-11-14',
    lien: FICHE,
    systeme: 'Un agent de prospection complet', systeme_en: 'A complete outreach agent',
    secteur: 'Formation numérique pour aînés', secteur_en: 'Digital training for seniors',
  },
  {
    auteur: 'Karyann Turcotte',
    note: 5,
    texte: "J’ai adoré mon expérience avec Simon! Il était vraiment à l’écoute de mes besoins et est arrivé avec plusieurs idées pour améliorer les pratiques de mon entreprise ! Je le recommande à tous !",
    date: '2026-08-20',
    lien: FICHE,
    systeme: 'Les suivis clients par texto', systeme_en: 'Client follow-ups by text message',
    secteur: 'Conseillère en sécurité financière', secteur_en: 'Financial security advisor',
  },
  {
    auteur: 'Alexandre Mercier',
    note: 5,
    texte: 'Simon est excellent, il sait très bien détecter les besoins!',
    date: '2026-08-05',
    lien: FICHE,
    // Partenaire (agence), pas un client final : on ne nomme jamais le mandat livré pour lui.
    systeme: 'Partenaire de livraison', systeme_en: 'Delivery partner',
    secteur: "Agence d'automatisation", secteur_en: 'Automation agency',
  },
  {
    // Écrit par Stéphane Bernier (Pubsphere, client) selon Simon (2026-11-18), mais publié sur Google depuis le
    // compte de Charles-Alexandre Bernier, partenaire d'affaires de FournIA. Sur Google, le nom affiché est donc
    // celui de Charles-Alexandre : la carte le dit en clair (champ `note`) pour qu'un visiteur qui compare avec
    // Google ne croie pas à un faux avis. Simon ne lui redemande pas de le republier (décision du 2026-11-18) :
    // la mention reste. Si Google retire l'avis, le retirer d'ici aussi.
    auteur: 'Stéphane Bernier',
    note: 5,
    texte: "malade, j’ai adoré mon expérience. Ma vie a changé.",
    date: '2026-11-17',
    lien: FICHE,
    systeme: 'Les relevés de cartes de crédit, classés dans Excel', systeme_en: 'Credit card statements, sorted into Excel',
    secteur: "Fabricant de kiosques d'exposition", secteur_en: 'Trade show booth maker',
    mention: 'Publié sur Google depuis le compte de Charles-Alexandre Bernier',
    mention_en: 'Posted on Google from the account of Charles-Alexandre Bernier',
  },
];

// Seuls les avis publiables sortent du fichier (la note moyenne et le compte en dépendent).
export const AVIS = TOUS_AVIS.filter((a) => a.publier !== false);

// Lien vers la fiche Google de FournIA (bouton « Voir tous les avis »).
export const LIEN_FICHE_GOOGLE = FICHE;

// Lien direct pour laisser un avis (ouvre la fenêtre des étoiles).
export const LIEN_LAISSER_AVIS = 'https://g.page/r/CWLSn0dawT4HEAI/review';
