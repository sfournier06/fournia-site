// Témoignages clients. Le tableau est VIDE tant qu'aucun client n'a donné son accord par écrit.
// Composant : src/components/Temoignages.astro. Tableau vide = la section n'apparaît nulle part.
//
// Règle : un témoignage n'entre ici qu'avec un consentement écrit du client (courriel ou document
// signé) qui autorise la citation, le nom et l'entreprise tels qu'affichés. Jamais de citation
// reformulée, jamais de note ou de chiffre que le client n'a pas écrit lui-même.
//
// Format d'une entrée :
// {
//   citation: "Le texte exact, tel qu'approuvé par le client.",
//   nom: 'Prénom Nom',
//   role: 'Titre',                       // optionnel
//   entreprise: "Nom de l'entreprise",   // optionnel
//   consentement: { date: '2026-12-01', preuve: 'Courriel du 1er décembre 2026, archivé' },
// }
// Une entrée sans consentement.date n'est jamais affichée.

export const TEMOIGNAGES = [];
