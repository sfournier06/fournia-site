// Systèmes livrés par FournIA, affichés en carrousel par secteur. Composant : src/components/Realisations.astro.
//
// Règle : seulement des faits vérifiés, décrits par secteur, sans nom de client ni chiffre de résultat.
// `court` = version d'une ligne (accueil).
// `secteur_en`, `titre_en`, `systeme_en`, `court_en` = version anglaise (accueil /en/). Les champs
// qui viennent du client (temoignage, resultat) ne se traduisent jamais.
//
// Tout ce qui identifie le client ne s'affiche QUE si `consentement.date` est rempli (preuve écrite
// gardée dans le registre des preuves) : `client`, `logo`, `photo`, `resultat`, `temoignage`, `video`.
// Sans consentement, le composant montre la carte anonyme, même si ces champs sont remplis.
//
// - logo : chemin dans public/clients/ (SVG ou WebP, fond transparent), ex. '/clients/nom.svg'
// - photo : chemin dans public/clients/ (WebP ~800x600)
// - temoignage : { texte, auteur, role } tiré mot pour mot d'un message écrit du client
// - image : photo de secteur NON identifiante (public/secteurs/), affichée même sans consentement
//   quand il n'y a pas de logo à montrer.
// - video : lien public vers le témoignage vidéo (Instagram, YouTube)
// - statut : 'livre' (seuls les systèmes livrés sont affichés)
// - resultat_carte : ce que le système a changé pour cette entreprise, en une phrase, sans nom du client.
//   Affiché sur toutes les cartes (non identifiant). Seulement des faits vérifiés : aucun chiffre inventé.
// - avis : nom de l'auteur de l'avis Google lié à ce système (src/data/avis.mjs). Pas affiché dans les cartes.
//
// Mandats faits en sous-traitance (marque blanche) : le contrat de l'agence décide. Pour Élan,
// seule la description anonyme est permise : jamais de nom ni de logo sans l'accord écrit d'Élan
// ET du client final.

const vide = { client: null, logo: null, photo: null, resultat: null, temoignage: null, video: null, consentement: null };

// Accord écrit à obtenir pour chaque client nommé ci-dessous avant la mise en ligne de son nom et logo.

export const REALISATIONS = [
  {
    secteur: 'Traiteur corporatif',
    titre: 'Les offres de service',
    systeme:
      "L'IA compose l'offre de service à la charte du traiteur à partir de la demande, le code calcule les prix selon sa grille, et une chargée de projet valide avant l'envoi.",
    court: "L'IA rédige l'offre, le code calcule les prix, une personne valide.",
    secteur_en: 'Corporate caterer',
    titre_en: 'Service proposals',
    systeme_en: "AI writes the service proposal in the caterer's branding from the request, code calculates the prices from its price list, and a project manager approves before it goes out.",
    court_en: 'AI writes the proposal, code calculates the prices, a person approves.',
    lien: '/secteurs/traiteurs/',
    statut: 'livre',
    resultat_carte: 'Les prix de chaque offre sortent exacts à la cent, vérifiés contre leurs vraies offres gagnées.',
    resultat_carte_en: "Every proposal's prices come out exact to the cent, checked against their real winning proposals.",
    ...vide,
    client: 'AvecPlaisirs',
    logo: '/clients/avecplaisirs.webp',
  },
  {
    secteur: 'Location de chalets',
    titre: 'Les contrats de plusieurs provinces, dans une seule chaîne',
    systeme:
      "Les automatisations qui préparent les contrats et les dossiers ont été refaites pour gérer plusieurs provinces : le bon gabarit de contrat part selon la province du chalet.",
    court: 'Le bon contrat part selon la province, dans une seule chaîne.',
    secteur_en: 'Chalet rentals',
    titre_en: 'Contracts for several provinces, in a single workflow',
    systeme_en: "The automations that prepare contracts and files were rebuilt to handle several provinces: the right contract template goes out based on the chalet's province.",
    court_en: 'The right contract goes out based on the province, in a single workflow.',
    lien: null,
    statut: 'livre',
    resultat_carte: 'Un seul système pour toutes les provinces : le bon contrat part tout seul.',
    resultat_carte_en: 'One system for every province: the right contract goes out on its own.',
    ...vide,
    image: '/secteurs/chalet.webp',
  },
  {
    secteur: "Fabricant de kiosques d'exposition",
    titre: 'Les relevés de cartes de crédit, classés dans Excel',
    systeme:
      "Les relevés de cartes corporatives sont lus, chaque dépense est classée, et une personne révise le tableau avant que tout s'écrive dans le classeur comptable.",
    court: 'Chaque dépense lue et classée, une personne révise avant Excel.',
    secteur_en: 'Trade show booth manufacturer',
    titre_en: 'Credit card statements, sorted into Excel',
    systeme_en: 'Corporate card statements are read, each expense is categorized, and a person reviews the table before everything is written to the accounting workbook.',
    court_en: 'Each expense read and categorized, a person reviews before Excel.',
    lien: null,
    statut: 'livre',
    resultat_carte: "Fini la saisie à la main : chaque transaction est lue, il ne reste qu'à réviser.",
    resultat_carte_en: "No more manual entry: every transaction is read, all that's left is to review.",
    ...vide,
    client: 'Pubsphere',
    logo: '/clients/pubsphere.webp',
    avis: 'Stéphane Bernier',
    consentement: { date: '2026-11-17', preuve: "Accord du client confirmé par Simon le 2026-11-17 (garder la trace écrite au registre des preuves)" },
  },
  {
    secteur: 'Traiteur corporatif',
    titre: 'Les plans de production de la cuisine',
    systeme:
      "À partir des commandes de la journée, l'outil produit les documents de la cuisine : plan de production par cellule, fiches cuisine, plan d'emballage et feuille de route des livreurs.",
    court: 'Les commandes deviennent les documents de la cuisine, sans rien retaper.',
    secteur_en: 'Corporate caterer',
    titre_en: 'Kitchen production plans',
    systeme_en: "From the day's orders, the tool produces the kitchen documents: production plan by station, kitchen sheets, packing plan and the drivers' route sheet.",
    court_en: "The day's orders become the kitchen documents, with nothing retyped.",
    lien: '/secteurs/traiteurs/',
    statut: 'livre',
    resultat_carte: "Les 6 documents de production d'une journée sortent d'un clic. Plus rien à retaper.",
    resultat_carte_en: "A day's 6 production documents come out in one click. Nothing left to retype.",
    ...vide,
    client: 'AvecPlaisirs',
    logo: '/clients/avecplaisirs.webp',
    image: '/images/secteurs/traiteurs.webp',
  },
  {
    secteur: 'Conseillère en sécurité financière',
    titre: 'Les suivis clients par texto',
    systeme:
      'Chaque client reçoit son suivi au bon moment. Les réponses sont gérées et les rendez-vous se prennent sans aller-retour.',
    court: 'Chaque client reçoit son suivi au bon moment, les réponses sont gérées.',
    secteur_en: 'Financial security advisor',
    titre_en: 'Client follow-ups by text',
    systeme_en: 'Each client gets their follow-up at the right time. Replies are handled and appointments are booked without back-and-forth.',
    court_en: 'Each client gets their follow-up at the right time, replies are handled.',
    lien: '/secteurs/conseillers-financiers/',
    statut: 'livre',
    resultat_carte: 'Ses 100 clients suivis automatiquement par texto, sans écrire un seul message.',
    resultat_carte_en: 'Her 100 clients followed up automatically by text, without writing a single message.',
    ...vide,
    client: 'Karyann Turcotte',
    photo: '/clients/karyann-turcotte.webp',
    image: '/secteurs/conseillere.webp',
    avis: 'Karyann Turcotte',
    consentement: { date: '2026-11-17', preuve: "Accord du client confirmé par Simon le 2026-11-17 (garder la trace écrite au registre des preuves)" },
  },
  {
    secteur: "Centre d'aide académique",
    titre: 'La réponse aux nouvelles demandes',
    systeme:
      'Le système répond aux nouvelles demandes en quelques minutes et propose des plages selon les disponibilités réelles.',
    court: 'Réponse en quelques minutes, avec des plages selon les vraies disponibilités.',
    secteur_en: 'Academic support centre',
    titre_en: 'Replying to new requests',
    systeme_en: 'The system replies to new requests within minutes and suggests times based on real availability.',
    court_en: 'A reply within minutes, with times based on real availability.',
    lien: '/secteurs/centres-de-tutorat/',
    statut: 'livre',
    resultat_carte: 'Chaque parent reçoit une réponse en quelques minutes, avec de vraies plages libres.',
    resultat_carte_en: 'Every parent gets a reply within minutes, with real open time slots.',
    ...vide,
    client: 'Arbour Aide Académique',
    logo: '/clients/arbour.webp',
    consentement: { date: '2026-11-17', preuve: "Accord du client confirmé par Simon le 2026-11-17 (garder la trace écrite au registre des preuves)" },
  },
  {
    secteur: 'Traiteur corporatif',
    titre: 'Les achats chez les fournisseurs',
    systeme:
      "Le système compare les prix des fournisseurs pour chaque produit, en tenant compte des ristournes, des minimums de commande et des jours de livraison, et prépare la réquisition. Le chef garde la décision.",
    court: 'Prix comparés entre fournisseurs, ristournes et minimums compris.',
    secteur_en: 'Corporate caterer',
    titre_en: 'Purchasing from suppliers',
    systeme_en: 'The system compares supplier prices for each product, taking rebates, minimum orders and delivery days into account, and prepares the requisition. The chef keeps the final say.',
    court_en: 'Prices compared across suppliers, rebates and minimums included.',
    lien: '/secteurs/traiteurs/',
    statut: 'livre',
    resultat_carte: 'Chaque achat comparé entre les fournisseurs, ristournes et minimums de commande compris.',
    resultat_carte_en: 'Every purchase compared across suppliers, rebates and minimum orders included.',
    ...vide,
    client: 'AvecPlaisirs',
    logo: '/clients/avecplaisirs.webp',
    image: '/images/secteurs/traiteurs.webp',
  },
  {
    secteur: 'Formation numérique pour aînés',
    titre: 'Un agent de prospection complet',
    systeme:
      "Un agent qui va chercher des contrats à la place du fondateur : il cible les organisations, écrit chaque approche, fait les suivis et tient le CRM à jour. Le fondateur approuve chaque envoi.",
    court: "L'agent cible, écrit, relance et tient le CRM à jour. Le fondateur approuve.",
    secteur_en: 'Digital skills training for seniors',
    titre_en: 'A complete outreach agent',
    systeme_en: 'An agent that goes after contracts for the founder: it targets organizations, writes every approach, follows up and keeps the CRM up to date. The founder approves each message.',
    court_en: 'The agent targets, writes, follows up and keeps the CRM current. The founder approves.',
    lien: null,
    statut: 'livre',
    resultat_carte: "L'agent va chercher des contrats à sa place : il cible, écrit et relance. Le fondateur n'a qu'à approuver.",
    resultat_carte_en: 'The agent goes after contracts for him: it targets, writes and follows up. The founder just approves.',
    ...vide,
    client: 'SeniorTech',
    logo: '/clients/seniortech.webp',
    avis: 'Freddy Aubuchon',
    consentement: { date: '2026-11-17', preuve: "Accord du client confirmé par Simon le 2026-11-17 (garder la trace écrite au registre des preuves)" },
  },
];

// Retirés de l'affichage le 2026-11-17 (décision de Simon) : mandat en cours ou à confirmer.
// On les remet dans REALISATIONS quand c'est livré et confirmé par le client. Non affichés.
export const EN_ATTENTE = [
  {
    secteur: 'Location de sonorisation',
    titre: 'Les demandes reçues partout, au même endroit',
    systeme:
      "Les demandes qui arrivent par plusieurs canaux sont réunies en un seul endroit. Après chaque événement, le client reçoit un sondage de satisfaction et une demande d'avis Google.",
    court: 'Toutes les demandes au même endroit, puis un sondage après chaque événement.',
    secteur_en: 'Sound equipment rental',
    titre_en: 'Requests from everywhere, in one place',
    systeme_en: 'Requests that come in through several channels are brought together in one place. After each event, the client gets a satisfaction survey and a request for a Google review.',
    court_en: 'All requests in one place, then a survey after every event.',
    lien: '/secteurs/evenementiel/',
    statut: 'livre',
    ...vide,
    client: "Location Son'OR",
    logo: '/clients/sonor.webp',
  },
  {
    secteur: 'Conseillère en sécurité financière',
    titre: 'Les anciens prospects relancés, les clients suivis',
    systeme:
      "Le CRM est monté à partir de son calendrier, les anciens prospects sont relancés par texto et chaque client reçoit son suivi. Elle reprend la conversation quand quelqu'un répond.",
    court: 'Anciens prospects relancés, clients suivis, elle reprend la conversation.',
    secteur_en: 'Financial security advisor',
    titre_en: 'Old leads re-engaged, clients followed up',
    systeme_en: 'The CRM is built from her calendar, old leads are re-engaged by text and each client gets their follow-up. She takes over the conversation when someone replies.',
    court_en: 'Old leads re-engaged, clients followed up, she takes over the conversation.',
    lien: '/secteurs/conseillers-financiers/',
    statut: 'en-cours',
    ...vide,
    client: 'Ana Stirbu',
    logo: '/clients/ana-stirbu.webp',
  },
];
