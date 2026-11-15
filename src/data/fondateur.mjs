// Photo du fondateur : UN SEUL endroit à changer.
//
// EMPLACEMENT PHOTO (à brancher après la séance du 15 novembre 2026) :
//   1. Déposer le portrait dans public/images/ (WebP, environ 800 x 1000 px, moins de 150 Ko).
//   2. Écrire son chemin ici, par exemple '/images/simon-fournier.webp'.
// Tant que la valeur est vide, le site affiche un bloc au monogramme FournIA à la place
// (composant src/components/Portrait.astro). Aucune photo de banque, aucun visage généré.
export const PHOTO_SIMON = '/images/simon-fournier.webp';

// Dimensions réelles du fichier déposé (évite le saut de mise en page).
export const PHOTO_SIMON_LARGEUR = 800;
export const PHOTO_SIMON_HAUTEUR = 1000;

export const PHOTO_SIMON_ALT = 'Simon Fournier, fondateur de FournIA';
