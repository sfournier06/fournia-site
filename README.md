# fournia-site

Site officiel de FournIA (Astro), incluant le blog GEO à `fournia.net/blog`. Repo **public** (le
contenu est public par design pour être cité par les LLM). À ne pas confondre avec l'AIOS privé.

## Stack
- Astro 5 (générateur statique). Output HTML statique pur.
- `@astrojs/sitemap` (sitemap.xml automatique).
- JSON-LD statique généré au build : Article + FAQPage + Organization + BreadcrumbList.

## Structure
- `src/pages/index.astro` : accueil (PLACEHOLDER, à remplacer par le vrai design de fournia.net).
- `src/pages/blog/index.astro` : liste de tous les posts (bibliothèque publique profonde).
- `src/pages/blog/[...slug].astro` + `src/layouts/BlogPost.astro` : page d'article + JSON-LD.
- `src/content/blog/*.md` : les posts (un fichier par article). Générés par le skill `geo-content-team`.
- `src/content.config.ts` : schéma du frontmatter (dont le champ `faq`).
- `public/robots.txt` : autorise les bots de retrieval (OAI-SearchBot, PerplexityBot, etc.).
- `public/llms.txt` : contexte IA curé, régénéré à chaque publication.

## Commandes
```
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
npm run preview  # prévisualise dist/
```

## Déploiement (Cloudflare Pages, auto sur push)
1. Créer un repo GitHub public (ex. `fournia-site`) et y pousser ce dossier.
2. Cloudflare Pages : Connect to Git -> ce repo. Preset : Astro. Build : `npm run build`, output `dist`.
3. Custom domain : pointer `fournia.net` vers le projet Cloudflare Pages (DNS).
4. Chaque `git push` sur la branche principale = rebuild + deploy automatique.

## Publier un nouveau post (fait par le skill geo-content-team)
1. Le skill dépose `src/content/blog/<slug>.md` (frontmatter + corps + champ `faq`).
2. Régénère `public/llms.txt` (ajoute le post à la section Articles).
3. `git add . && git commit && git push` -> Cloudflare déploie.

## À faire avant la mise en ligne
- Remplacer l'accueil placeholder par le vrai design de fournia.net.
- Ajouter une vraie image hero par post (skill image-generator-nano-banana + champ `heroImage`).
- Valider le JSON-LD sur https://validator.schema.org après le premier deploy.
