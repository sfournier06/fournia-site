// Systèmes livrés par FournIA, affichés en carrousel par secteur. Composant : src/components/Realisations.astro.
//
// Règle : seulement des faits vérifiés, décrits par secteur, sans nom de client ni chiffre de résultat.
// `court` = version d'une ligne (accueil).
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
// - statut : 'livre' ou 'en-cours'
//
// Mandats faits en sous-traitance (marque blanche) : le contrat de l'agence décide. Pour Élan,
// seule la description anonyme est permise : jamais de nom ni de logo sans l'accord écrit d'Élan
// ET du client final.

const vide = { client: null, logo: null, photo: null, resultat: null, temoignage: null, video: null, consentement: null };

// Accord écrit à obtenir pour chaque client nommé ci-dessous avant la mise en ligne de son nom et logo.

export const REALISATIONS = [
  {
    secteur: 'Traiteur corporatif',
    titre: 'Les offres de service et les plans de production',
    systeme:
      "L'IA compose l'offre à la charte du traiteur, le code calcule les prix selon sa grille, et une personne valide avant l'envoi. Un second outil produit les plans de production à partir des commandes.",
    court: "L'IA rédige l'offre, le code calcule les prix, une personne valide.",
    lien: '/secteurs/traiteurs/',
    statut: 'livre',
    ...vide,
    client: 'AvecPlaisirs',
    logo: '/clients/avecplaisirs.webp',
  },
  {
    secteur: 'Location de sonorisation',
    titre: 'Les demandes reçues partout, au même endroit',
    systeme:
      "Les demandes qui arrivent par plusieurs canaux sont réunies en un seul endroit. Après chaque événement, le client reçoit un sondage de satisfaction et une demande d'avis Google.",
    court: 'Toutes les demandes au même endroit, puis un sondage après chaque événement.',
    lien: '/secteurs/evenementiel/',
    statut: 'livre',
    ...vide,
    client: "Location Son'OR",
    logo: '/clients/sonor.webp',
  },
  {
    secteur: 'Location de chalets',
    titre: 'Les contrats de plusieurs provinces, dans une seule chaîne',
    systeme:
      "Les automatisations qui préparent les contrats et les dossiers ont été refaites pour gérer plusieurs provinces : le bon gabarit de contrat part selon la province du chalet.",
    court: 'Le bon contrat part selon la province, dans une seule chaîne.',
    lien: null,
    statut: 'livre',
    ...vide,
    image: '/secteurs/chalet.webp',
  },
  {
    secteur: "Fabricant de kiosques d'exposition",
    titre: 'Les relevés de cartes de crédit, classés dans Excel',
    systeme:
      "Les relevés de cartes corporatives sont lus, chaque dépense est classée, et une personne révise le tableau avant que tout s'écrive dans le classeur comptable.",
    court: 'Chaque dépense lue et classée, une personne révise avant Excel.',
    lien: null,
    statut: 'livre',
    ...vide,
    client: 'Pubsphere',
    logo: '/clients/pubsphere.webp',
  },
  {
    secteur: 'Conseillère en sécurité financière',
    titre: 'Les suivis clients par texto',
    systeme:
      'Chaque client reçoit son suivi au bon moment. Les réponses sont gérées et les rendez-vous se prennent sans aller-retour.',
    court: 'Chaque client reçoit son suivi au bon moment, les réponses sont gérées.',
    lien: '/secteurs/conseillers-financiers/',
    statut: 'livre',
    ...vide,
    client: 'Karyann Turcotte',
    // Remplacer par la photo de Karyann (avec son accord) dès qu'elle l'envoie.
    image: '/secteurs/conseillere.webp',
  },
  {
    secteur: 'Conseillère en sécurité financière',
    titre: 'Les anciens prospects relancés, les clients suivis',
    systeme:
      "Le CRM est monté à partir de son calendrier, les anciens prospects sont relancés par texto et chaque client reçoit son suivi. Elle reprend la conversation quand quelqu'un répond.",
    court: 'Anciens prospects relancés, clients suivis, elle reprend la conversation.',
    lien: '/secteurs/conseillers-financiers/',
    statut: 'en-cours',
    ...vide,
    client: 'Ana Stirbu',
    logo: '/clients/ana-stirbu.webp',
  },
  {
    secteur: "Centre d'aide académique",
    titre: 'La réponse aux nouvelles demandes',
    systeme:
      'Le système répond aux nouvelles demandes en quelques minutes et propose des plages selon les disponibilités réelles.',
    court: 'Réponse en quelques minutes, avec des plages selon les vraies disponibilités.',
    lien: '/secteurs/centres-de-tutorat/',
    statut: 'livre',
    ...vide,
    client: 'Arbour Aide Académique',
    logo: '/clients/arbour.webp',
  },
  {
    secteur: 'Formation numérique pour aînés',
    titre: "Le CRM et les suivis d'un fondateur seul",
    systeme:
      "Un CRM tenu à jour en tout temps et des messages de suivi préparés par l'IA. Le fondateur approuve chaque envoi avant qu'il parte.",
    court: "CRM à jour, suivis préparés par l'IA, le fondateur approuve.",
    lien: null,
    statut: 'en-cours',
    ...vide,
    client: 'SeniorTech',
    logo: '/clients/seniortech.webp',
  },
];
