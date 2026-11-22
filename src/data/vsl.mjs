// Le VSL de la landing /accompagnement-complet/. UN SEUL endroit à remplir après le montage.
// VSL_SRC vide = la page se publie SANS bloc vidéo (aucune promesse de vidéo, aucun « à venir ») ;
// dès qu'il est rempli, le lecteur, sa vignette et la phrase « Regarde d'abord… » reviennent tout seuls.
export const VSL_SRC = '';
// Boucle muette de 3 à 5 s pour la vignette (plan « L'OUTIL DORT » du tournage). Facultatif.
export const VSL_APERCU_SRC = '';
// Durée affichée sur la vignette : la remplacer par la durée exacte du montage (ex. '4 min 41').
export const VSL_DUREE = 'moins de 5 min';
// Le lecteur s'affiche même sans fichier (décision de Simon, 2026-11-21) : un clic affiche « La vidéo arrive bientôt ».
// Mettre false pour retirer le bloc tant que VSL_SRC est vide.
export const AFFICHER_SANS_VIDEO = true;
export const VSL_PRET = Boolean(VSL_SRC) || AFFICHER_SANS_VIDEO;
