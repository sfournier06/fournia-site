# Branchement SEO de fournia.net (à faire par Simon, environ 40 min)

Préparé le 2026-10-17 sur la branche `seo-octobre-2026`. Tout le code est prêt : il ne reste que
les gestes qui exigent tes comptes. Suis l'ordre, chaque étape débloque la suivante.

---

## Étape 1 : mettre la branche en ligne (5 min, avec Claude) : FAIT le 2026-10-19
Dis à Claude « merge la branche SEO ». Il :
1. relance `npm run build && npm run seo:check` (0 erreur exigée) ;
2. merge `seo-octobre-2026` dans `main` et pousse (Netlify déploie seul) ;
3. vérifie en ligne que les 3 pages répondent 200 et que le fichier de clé IndexNow est servi.

Pages qui arrivent :
- https://fournia.net/automatisation-entreprise
- https://fournia.net/accompagnement-intelligence-artificielle
- https://fournia.net/consultant-ia-rive-nord

## Étape 2 : Google Search Console (10 min)

> **FAIT le 2026-10-19 (méthode fichier HTML)** : `public/google0bcb299dea7c9fbe.html` est en ligne.
> Ne jamais supprimer ce fichier, sinon la propriété perd sa vérification. Les étapes 1, 3 et 4 de
> cette section (balise) ne servent plus.
1. https://search.google.com/search-console, connecté avec `s.fournier@fournia.net`.
2. Ajouter une propriété, type **Préfixe d'URL** : `https://fournia.net`.
3. Méthode **Balise HTML**. Copier seulement la valeur de `content="..."`.
4. La coller dans `src/data/entite.mjs`, constante `GOOGLE_VERIFICATION` (ou la donner à Claude).
5. Claude pousse. Quand c'est en ligne, cliquer **Valider**.
6. Menu **Sitemaps** : soumettre `sitemap-index.xml`.
7. Menu **Inspection de l'URL** : demander l'indexation de l'accueil et des 3 pages de service.

## Étape 3 : Bing Webmaster Tools (5 min)
1. https://www.bing.com/webmasters, **Importer depuis Google Search Console**. Rien d'autre à coller.
2. Puis dire à Claude « envoie IndexNow » : il lance `npm run indexnow -- --envoyer`.
   Pourquoi Bing compte : ChatGPT Search et Copilot s'appuient en bonne partie sur son index.

## Étape 4 : relier tes profils au site (5 min)
Donner à Claude ces URL (il les met dans `SAME_AS` de `src/data/entite.mjs`) :
- ton LinkedIn ;
- l'Instagram FournIA ;
- le lien « Partager le profil » de ta fiche Google Business ;
- ta fiche hellodarwin (étape 5).

Et dans chacun de ces profils, mettre le lien `https://fournia.net`. Le lien doit aller dans les deux
sens : c'est ce qui fait reconnaître FournIA comme une entité par Google et par les IA.

**Fiche Google Business, à vérifier :** catégorie principale « Consultant en affaires » (ou
« Service de conseil en informatique »), zone de service : Blainville, Laval, Mirabel, Terrebonne,
Saint-Jérôme, Montréal. **Adresse masquée** (tu travailles de la maison). Site web :
`https://fournia.net/consultant-ia-rive-nord`.

## Étape 5 : hellodarwin (10 min)
C'est l'annuaire qui tient la première page sur « automatisation IA Laval » et « IA Laval ». Fiche
gratuite : https://hellodarwin.com, catégories **Automatisation par l'IA** et **Intelligence
artificielle**, ville **Laval** (+ Rive-Nord si offert).

Texte prêt à coller :

> **FournIA : automatisation d'entreprise et accompagnement en IA pour les PME**
>
> FournIA aide les PME du Québec à automatiser leurs tâches répétitives avec l'intelligence
> artificielle : relances clients, soumissions, commandes, transfert de données entre logiciels.
> On construit le système, on l'installe dans les outils que l'équipe utilise déjà, et on forme
> l'équipe. Chaque projet qui touche des renseignements personnels passe une vérification Loi 25.
> Basé à Blainville, rencontres en personne sur la Rive-Nord, à Laval et à Montréal.
>
> Services : audit IA, implantation d'automatisations et d'agents IA, formation IA d'équipe, suivi.
> Site : https://fournia.net

## Étape 6 : activer la routine du lundi (2 min, avec Claude)
Dire « active la routine SEO ». Spec : `fournia-aios/references/geo/routine-hebdo-seo.md`.
Prérequis : le repo AIOS poussé sur GitHub.

## Étape 7 : les deux leviers qui font vraiment monter (en continu)
- **Avis Google.** Demander un avis à chaque livraison (Stéphane, Thomas, Karyann, Emmanuel, Ana).
  C'est le premier signal du classement local.
- **Études de cas.** Avec l'accord écrit du client, une page par mandat livré. Ce sont les pages que
  les IA citent le plus, parce qu'elles prouvent.

---

## À quoi t'attendre (honnête)
- **Semaine 1** : les pages indexées, FournIA trouvable sur son nom.
- **4 à 8 semaines** : premières positions sur « consultant IA Rive-Nord », où personne ne se bat.
- **3 à 6 mois** : chances réelles sur « automatisation d'entreprise », la requête la plus disputée.
- Personne ne peut garantir la 1re place. On contrôle l'indexation, la qualité des pages, les liens
  et les avis. La routine mesure, et on ajuste.
