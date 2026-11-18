// Photo du fondateur : UN SEUL endroit à changer.
//
// EMPLACEMENT PHOTO (à brancher après la séance du 15 novembre 2026) :
//   1. Déposer le portrait dans public/images/ (WebP, environ 800 x 1000 px, moins de 150 Ko).
//   2. Écrire son chemin ici, par exemple '/images/simon-fournier.webp'.
// Tant que la valeur est vide, le site affiche un bloc au monogramme FournIA à la place
// (composant src/components/Portrait.astro).
// Photos réelles de la séance du 17 novembre 2026 (originaux : ~/Downloads/IMG_3169, 3171, 3183, 3198).
export const PHOTO_SIMON = '/images/simon-fournier-portrait.webp';
// Photo de mise en situation (section « Comment ça marche ») : Simon au travail, 1200 x 900.
export const PHOTO_ATELIER = '/images/simon-fournier-travail.webp';
// Simon qui explique à une personne (formation) : carte Formation de l'accueil et page Formation, 1200 x 900.
export const PHOTO_FORMATION = '/images/simon-fournier-client.webp';

// Dimensions réelles du fichier déposé (évite le saut de mise en page).
export const PHOTO_SIMON_LARGEUR = 960;
export const PHOTO_SIMON_HAUTEUR = 1200;

export const PHOTO_SIMON_ALT = 'Simon Fournier, fondateur de FournIA';
