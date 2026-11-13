// Exemples de systèmes livrés par FournIA. Composant : src/components/Realisations.astro.
//
// Règle : seulement des faits déjà publiés sur le site (pages secteurs et /automatisation-entreprise/),
// décrits par secteur, sans nom de client ni chiffre de résultat. `court` = version d'une ligne (accueil).
//
// Pour transformer un exemple en vraie étude de cas plus tard, remplir les champs `client` et
// `resultat`, ET `consentement` (date + preuve écrite). Sans consentement.date, le composant
// n'affiche ni le nom du client ni le résultat, même s'ils sont remplis.

export const REALISATIONS = [
  {
    secteur: 'Un traiteur corporatif de Montréal',
    titre: 'Les offres de service et les plans de production',
    systeme:
      "L'IA compose l'offre à la charte du traiteur, le code calcule les prix selon sa grille, et une personne valide avant l'envoi. Un second outil produit les plans de production à partir des commandes.",
    court: "L'IA rédige l'offre, le code calcule les prix, une personne valide.",
    lien: '/secteurs/traiteurs/',
    client: null,
    resultat: null,
    consentement: null,
  },
  {
    secteur: 'Une entreprise de location de sonorisation, Montréal',
    titre: 'Les demandes reçues partout, au même endroit',
    systeme:
      "Les demandes qui arrivent par plusieurs canaux sont réunies en un seul endroit. Après chaque événement, le client reçoit un sondage de satisfaction et une demande d'avis Google.",
    court: 'Toutes les demandes au même endroit, puis un sondage après chaque événement.',
    lien: '/secteurs/evenementiel/',
    client: null,
    resultat: null,
    consentement: null,
  },
  {
    secteur: 'Une conseillère en sécurité financière',
    titre: 'Les suivis clients par texto',
    systeme:
      'Chaque client reçoit son suivi au bon moment. Les réponses sont gérées et les rendez-vous se prennent sans aller-retour.',
    court: 'Chaque client reçoit son suivi au bon moment, les réponses sont gérées.',
    lien: '/secteurs/conseillers-financiers/',
    client: null,
    resultat: null,
    consentement: null,
  },
  {
    secteur: "Un centre d'aide académique",
    titre: 'La réponse aux nouvelles demandes',
    systeme:
      'Le système répond aux nouvelles demandes en quelques minutes et propose des plages selon les disponibilités réelles.',
    court: 'Réponse en quelques minutes, avec des plages selon les vraies disponibilités.',
    lien: '/secteurs/centres-de-tutorat/',
    client: null,
    resultat: null,
    consentement: null,
  },
];
