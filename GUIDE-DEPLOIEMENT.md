# Guide de déploiement, fournia.net + blog GEO

But : mettre le site Astro en ligne sur fournia.net avec déploiement automatique (chaque changement
poussé sur GitHub se publie tout seul via Cloudflare Pages). Une fois fait, tu ne touches plus à rien :
le skill `geo-content-team` pousse les posts et Cloudflare déploie.

Légende : [SIMON] = tu le fais, [CLAUDE] = je le fais pour toi.

---

## Étape 0, prérequis (déjà faits)
- [x] Site Astro bâti et qui build (`C:\Users\Sifourn\fournia-site`).
- [x] Premier post GEO en place, JSON-LD validé au build.
- [x] git initialisé, premier commit fait.

## Étape 1, porter ton design [SIMON puis CLAUDE]
1. [SIMON] Dépose ton `index.html` actuel (+ assets) dans `C:\Users\Sifourn\fournia-site\_import\`.
2. [SIMON] Dis-moi "c'est déposé".
3. [CLAUDE] Je convertis ton design en pages Astro (remplace l'accueil placeholder), je garde ton
   look, et je rebuild pour confirmer que tout passe.

## Étape 2, créer le repo GitHub public [CLAUDE ou SIMON]
Option A (je le fais) : je crée le repo public `fournia-site` avec ton `gh.exe` portable (compte
sfournier06) et je pousse.
Option B (toi) :
1. Sur github.com, "New repository", nom `fournia-site`, **Public**, sans README (le repo en a déjà un).
2. Dans un terminal :
   ```
   cd C:\Users\Sifourn\fournia-site
   git branch -M main
   git remote add origin https://github.com/sfournier06/fournia-site.git
   git push -u origin main
   ```

## Étape 3, connecter Cloudflare Pages [SIMON, ~5 min]
1. Crée un compte gratuit sur dash.cloudflare.com si pas déjà fait.
2. Workers & Pages -> Create -> Pages -> "Connect to Git" -> autorise GitHub -> choisis `fournia-site`.
3. Réglages de build :
   - Framework preset : **Astro**
   - Build command : `npm run build`
   - Build output directory : `dist`
4. "Save and Deploy". Cloudflare build et te donne une URL de test (ex. `fournia-site.pages.dev`).
   Vérifie que `…pages.dev/blog` montre le post.

## Étape 4, brancher le domaine fournia.net [SIMON, ~10 min + propagation DNS]
1. Dans le projet Cloudflare Pages -> "Custom domains" -> "Set up a domain" -> `fournia.net`.
2. Cloudflare te dit quoi mettre comme DNS. Deux cas :
   - Si tu transfères la gestion DNS à Cloudflare : suis l'assistant (change les nameservers chez ton
     registrar).
   - Sinon : ajoute l'enregistrement CNAME/A que Cloudflare indique chez ton registrar actuel.
3. Attends la propagation (souvent < 1 h, parfois jusqu'à 24 h). Vérifie `https://fournia.net/blog`.

IMPORTANT : ton site est présentement sur Netlify en drag-and-drop. En pointant fournia.net vers
Cloudflare, tu bascules d'hébergeur. Fais l'étape 1 (design porté) AVANT, sinon ton vrai site
disparaît derrière le placeholder. On vérifie ensemble avant de switcher le DNS.

## Étape 5, valider le GEO [CLAUDE + SIMON]
1. [CLAUDE/SIMON] Coller l'URL d'un post dans https://validator.schema.org -> confirmer Article +
   FAQPage sans erreur.
2. [SIMON] Vérifier que `fournia.net/robots.txt`, `fournia.net/llms.txt`,
   `fournia.net/sitemap-index.xml` répondent.
3. [SIMON] Soumettre le sitemap dans Google Search Console (aide l'indexation).

## Étape 6, brancher les images [SIMON]
Ajoute `KIE_API_KEY` dans un fichier `.env` (pour le skill image-generator-nano-banana). Ça permet de
générer une image hero par post automatiquement.

## Étape 7, automatiser la publication [session Cadence, plus tard]
Une fois 1 à 5 OK, on branche le déclencheur (routine cloud) qui fait tourner `geo-content-team` à
intervalle (2-3 posts/semaine au départ). Le skill génère, QA, pousse sur GitHub, Cloudflare déploie.
Zéro intervention.

---

## Récap du flux une fois en ligne
```
geo-content-team (génère + QA) -> git push (fournia-site) -> Cloudflare build -> fournia.net/blog
```
Tu n'interviens que si un build casse (le skill tente de se réparer seul d'abord) ou pour valider la
stratégie de contenu.
