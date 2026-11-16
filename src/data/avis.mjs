// Avis Google affichés à l'accueil (composant Preuves) et sur /temoignages/.
//
// Règle : copier l'avis mot pour mot depuis Google (jamais reformulé, jamais inventé, coquilles comprises).
// Pas de balisage schema « Review » sur ces avis : Google ne l'accepte pas pour ses propres avis
// (avis « auto-promotionnels »), et le risque est une pénalité manuelle.
//
// Format : { auteur, note, texte, date (approx. selon Google), lien }
// Source : fiche Google de FournIA, captures fournies par Simon le 2026-11-16 (texte original en français).
const FICHE = 'https://www.google.com/maps/place/?q=place_id:ChIJsdQghSzNcYYRYtKfR1rBPgc';

export const AVIS = [
  {
    auteur: 'Freddy Aubuchon',
    note: 5,
    texte: "Simon est un jeune génie. Il trouve des solutions pour tous. Je le recommande à 100%. I'l m'a construit une solution pour ma compagnie qui m'a sauvé énormément de temps et de maux de têtes.",
    date: '2026-11-15',
    lien: FICHE,
  },
  {
    auteur: 'Karyann Turcotte',
    note: 5,
    texte: "J'ai adoré mon expérience avec Simon! Il était vraiment à l'écoute de mes besoins et est arrivé avec plusieurs idées pour améliorer les pratiques de mon entreprise ! Je le recommande à tous !",
    date: '2026-09',
    lien: FICHE,
  },
  {
    auteur: 'Alexandre Mercier',
    note: 5,
    texte: 'Simon est excellent, il sait très bien détecter les besoins!',
    date: '2026-08',
    lien: FICHE,
  },
];

// Lien vers la fiche Google de FournIA (bouton « Voir tous les avis »).
export const LIEN_FICHE_GOOGLE = FICHE;

// Lien direct pour laisser un avis (ouvre la fenêtre des étoiles).
export const LIEN_LAISSER_AVIS = 'https://g.page/r/CWLSn0dawT4HEAI/review';
