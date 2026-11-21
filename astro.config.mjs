import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { autreLangue } from './src/data/traductions.mjs';

const SITE = 'https://fournia.net';

// Site officiel FournIA. Le `site` sert au sitemap, aux URLs canoniques et au JSON-LD.
// Plan du site bilingue : chaque page déclare sa jumelle dans l'autre langue (table src/data/traductions.mjs).
export default defineConfig({
  site: SITE,
  // Vitesse (2026-11-20) : le CSS de chaque page est mis directement dans le HTML (aucune feuille qui bloque
  // l'affichage). Le CSS du site est petit (moins de 10 Ko par page).
  build: { inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      // pages privées ou internes : jamais dans le plan du site
      filter: (page) => !/\/(avis|reviews)\/$/.test(page) && !/\/accompagnement-complet\/$/.test(page),
      serialize(item) {
        const chemin = item.url.replace(SITE, '');
        const autre = autreLangue(chemin);
        if (autre) {
          const en = chemin.startsWith('/en/');
          const fr = en ? autre : chemin;
          const enChemin = en ? chemin : autre;
          item.links = [
            { lang: 'fr-CA', url: `${SITE}${fr}` },
            { lang: 'en-CA', url: `${SITE}${enChemin}` },
          ];
        }
        return item;
      },
    }),
  ],
});
