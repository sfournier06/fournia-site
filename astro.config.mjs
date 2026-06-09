import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site officiel FournIA. Le `site` sert au sitemap, aux URLs canoniques et au JSON-LD.
export default defineConfig({
  site: 'https://fournia.net',
  integrations: [sitemap()],
});
