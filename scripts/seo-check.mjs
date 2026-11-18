// Vérificateur SEO de fournia.net. Roule sur le build (dist/) et échoue (code 1) au premier vrai
// problème. Usage : npm run build && npm run seo:check
// Vérifie chaque page HTML : title (10-65 car.), meta description (70-170), canonical, un seul h1,
// lang fr-CA (en-CA sous /en/), JSON-LD parsable, liens internes qui pointent vers une page existante,
// l'absence de tirets longs dans le texte visible (règle de voix FournIA), et le bilinguisme :
// chaque page a sa jumelle dans l'autre langue (hreflang fr-CA et en-CA), qui existe et pointe en retour.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const IGNORE = ['__forms.html', '404.html'];
const pages = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.html') && !IGNORE.includes(f) && !/^google[0-9a-f]+\.html$/.test(f)) pages.push(p);
  }
})(DIST);

const routeExists = (href) => {
  const clean = href.split('#')[0].split('?')[0].replace(/\/$/, '');
  if (clean === '') return true;
  return [join(DIST, clean, 'index.html'), join(DIST, clean + '.html'), join(DIST, clean)].some(existsSync);
};

let errors = 0, warns = 0;
const err = (p, m) => { errors++; console.log(`ERREUR  ${p}  ${m}`); };
const warn = (p, m) => { warns++; console.log(`avert.  ${p}  ${m}`); };

for (const file of pages) {
  const rel = '/' + relative(DIST, file).replace(/index\.html$/, '');
  const html = readFileSync(file, 'utf8');
  // les entités HTML (&#39; pour l'apostrophe) comptent pour 1 caractère, comme dans Google
  const dec = (t) => t.replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  const title = dec(html.match(/<title>([^<]*)<\/title>/)?.[1]?.trim() ?? '');
  const desc = dec(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  if (!title) err(rel, 'title manquant');
  else if (title.length < 10 || title.length > 65) warn(rel, `title ${title.length} car. (cible 10-65) : ${title}`);
  if (!desc) err(rel, 'meta description manquante');
  else if (desc.length < 70 || desc.length > 170) warn(rel, `description ${desc.length} car. (cible 70-170)`);
  if (!/<link rel="canonical"/.test(html)) err(rel, 'canonical manquant');
  const can = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  if (can && !can.endsWith('/')) err(rel, `canonical sans / final (Netlify redirige) : ${can}`);
  const langAttendue = rel.startsWith('/en/') ? 'en-CA' : 'fr-CA';
  if (!html.includes(`<html lang="${langAttendue}"`)) err(rel, `lang ${langAttendue} manquant`);
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) err(rel, `${h1} balises h1 (attendu 1)`);
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch { err(rel, 'JSON-LD invalide'); }
  }
  for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
    const h = m[1];
    if (h.startsWith('/_astro/') || h.startsWith('/brand/') || /\.(css|png|svg|jpg|webp|xml|txt)$/.test(h)) continue;
    if (!routeExists(h)) err(rel, `lien interne mort : ${h}`);
  }
  // bilinguisme : les deux balises hreflang, vers des pages qui existent et qui se répondent
  const hl = Object.fromEntries([...html.matchAll(/<link rel="alternate" hreflang="([a-zA-Z-]+)" href="https:\/\/fournia\.net([^"]*)"/g)].map((m) => [m[1], m[2]]));
  const estPrivee = /noindex/.test(html.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? '');
  if (!hl['fr-CA'] || !hl['en-CA']) { if (!estPrivee) err(rel, 'version dans l\'autre langue manquante (hreflang fr-CA / en-CA)'); }
  else {
    for (const [lg, h] of [['fr-CA', hl['fr-CA']], ['en-CA', hl['en-CA']]]) if (!routeExists(h)) err(rel, `hreflang ${lg} vers une page qui n'existe pas : ${h}`);
    const soi = rel.startsWith('/en/') ? hl['en-CA'] : hl['fr-CA'];
    if (soi !== rel) err(rel, `hreflang de la page elle-même incorrect : ${soi}`);
  }
  const visible = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ');
  if (/—|–/.test(visible)) warn(rel, 'tiret long ou demi-cadratin dans le texte visible');
}

console.log(`\n${pages.length} pages vérifiées, ${errors} erreur(s), ${warns} avertissement(s).`);
process.exit(errors ? 1 : 0);
