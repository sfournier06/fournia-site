// Mode APERÇU INTERNE : `APERCU=1 npm run build` (ou `APERCU=1 npx astro dev`).
// Affiche les logos, les noms de clients et les emplacements de témoignages AVANT les consentements,
// pour que Simon voie le rendu final en local. Netlify ne définit jamais APERCU : en production,
// seules les entrées avec un consentement écrit daté s'affichent. Ne jamais mettre APERCU dans netlify.toml.
export const APERCU = process.env.APERCU === '1';
