// Avis Google à afficher sur /temoignages/. VIDE tant qu'il n'y a pas d'avis réels.
//
// Règle : copier l'avis mot pour mot depuis Google (jamais reformulé, jamais inventé), avec son lien.
// Pas de balisage schema « Review » sur ces avis : Google ne l'accepte pas pour ses propres avis
// (avis « auto-promotionnels »), et le risque est une pénalité manuelle.
//
// Format : { auteur: 'Prénom N.', note: 5, texte: '...', date: '2026-12-01', lien: 'https://g.co/...' }
export const AVIS = [];

// Lien vers la fiche Google de FournIA, si elle existe un jour (vide = bouton masqué).
export const LIEN_FICHE_GOOGLE = '';
