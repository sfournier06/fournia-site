# Guide de déploiement, fournia.net + blog GEO (Netlify)

But : mettre le site Astro en ligne sur fournia.net avec déploiement automatique. Chaque changement
poussé sur GitHub se publie tout seul via Netlify. Fini le drag-and-drop. Ton formulaire Netlify Forms
continue de fonctionner.

Légende : [SIMON] = tu le fais, [CLAUDE] = je le fais pour toi.

---

## Étape 0, prérequis (déjà faits) [x]
- [x] Site Astro bâti, build vert (`C:\Users\Sifourn\fournia-site`).
- [x] Vrai design de fournia.net porté en page d'accueil + lien Blog.
- [x] Premier post GEO en place avec JSON-LD.
- [x] git initialisé, commits faits.
- [x] Hébergeur choisi : Netlify (git auto-deploy), le formulaire reste branché.

## Étape 1, créer le repo GitHub public [CLAUDE ou SIMON]
Option A (je le fais) : je crée le repo public `fournia-site` avec ton `gh.exe` portable (sfournier06)
et je pousse le code.
Option B (toi) :
```
cd C:\Users\Sifourn\fournia-site
git branch -M main
git remote add origin https://github.com/sfournier06/fournia-site.git
git push -u origin main
```
(Crée d'abord le repo vide `fournia-site` en Public sur github.com, sans README.)

## Étape 2, créer un site Netlify depuis le repo [SIMON, ~5 min]
1. app.netlify.com -> "Add new site" -> "Import an existing project" -> GitHub -> `fournia-site`.
2. Réglages de build (Netlify détecte Astro, vérifie quand même) :
   - Build command : `npm run build`
   - Publish directory : `dist`
3. "Deploy site". Netlify build et te donne une URL de test (ex. `random-name.netlify.app`).
4. Vérifie sur cette URL : l'accueil, `/blog`, et un post. Ne touche PAS encore au domaine fournia.net.

## Étape 3, vérifier le formulaire [SIMON]
1. Sur l'URL de test, soumets le formulaire de contact une fois.
2. Dans Netlify -> ton site -> "Forms" : tu dois voir la soumission "appel-decouverte".
3. Configure les notifications de formulaire (Netlify -> Forms -> Settings -> notifications par courriel
   vers s.fournier@fournia.net) pour être averti des nouveaux leads.

## Étape 4, basculer le domaine fournia.net [SIMON, le seul moment sensible]
Ton domaine pointe présentement vers ton ancien site Netlify (drag-and-drop). Quand le nouveau site
git est validé (étapes 2-3 OK) :
1. Netlify -> nouveau site -> "Domain management" -> "Add a domain" -> `fournia.net`.
2. Netlify va te demander de retirer le domaine de l'ancien site (ou de le réassigner). Suis
   l'assistant ; comme le domaine est déjà géré par Netlify, c'est une réassignation, pas un changement
   de DNS chez ton registrar.
3. Vérifie `https://fournia.net` (accueil) et `https://fournia.net/blog`.
4. Une fois confirmé : tu peux supprimer l'ancien site Netlify drag-and-drop.

## Étape 5, valider le GEO [CLAUDE + SIMON]
1. Coller l'URL d'un post dans https://validator.schema.org -> confirmer Article + FAQPage sans erreur.
2. Vérifier que `fournia.net/robots.txt`, `fournia.net/llms.txt`, `fournia.net/sitemap-index.xml`
   répondent.
3. Soumettre le sitemap dans Google Search Console (aide l'indexation, donc la visibilité IA).

## Étape 6, brancher les images [SIMON]
Ajouter `KIE_API_KEY` dans un `.env` (pour le skill image-generator-nano-banana) pour générer une
image hero par post automatiquement.

## Étape 7, automatiser la publication [session Cadence, plus tard]
Brancher le déclencheur (routine cloud) qui fait tourner `geo-content-team` 2-3 fois/semaine. Le skill
génère, QA, pousse sur GitHub, Netlify déploie. Zéro intervention.

---

## Flux une fois en ligne
```
geo-content-team (génère + QA) -> git push (fournia-site) -> Netlify build -> fournia.net/blog
```
Tu n'interviens que si un build casse (le skill tente de se réparer seul d'abord) ou pour valider la
stratégie de contenu.

## Note sur le rythme
Netlify gratuit = ~20 deploys/mois (nouveau modèle de crédits) ou plus si compte legacy. À 2-3
posts/semaine (~12/mois), tu restes dans le gratuit. Si un jour tu veux poster chaque jour, on
regroupe les posts par deploy ou on revoit l'hébergeur.
