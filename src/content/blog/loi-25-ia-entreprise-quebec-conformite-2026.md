---
title: "Comment respecter la Loi 25 quand on utilise l'IA dans son entreprise au Québec ?"
description: "La Loi 25 ne bloque pas l'IA. Voici 4 gestes concrets à poser avant de brancher un outil IA sur les données de vos clients au Québec."
slug: "loi-25-ia-entreprise-quebec-conformite-2026"
pubDate: 2026-07-09
updatedDate: 2026-07-09
author: "Simon Fournier"
publisher: "FournIA"
heroAlt: "Un bureau de PME québécoise avec un outil d'IA et un document de conformité, symbolisant la protection des données personnelles sous la Loi 25."
tags: ["Loi 25", "IA PME Québec", "conformité", "protection données"]
faq:
  - q: "La Loi 25 s'applique-t-elle aux PME, même petites ?"
    a: "Oui. La Loi 25 s'applique à toute entreprise qui exerce des activités au Québec et qui détient des renseignements personnels, sans seuil minimal de taille ou de revenus. Une PME d'une seule personne est visée au même titre qu'une grande entreprise."
  - q: "Quand ChatGPT ou Claude traitent des données de mes clients, est-ce un transfert hors Québec ?"
    a: "En général oui. Envoyer des renseignements personnels à un outil IA opéré par une entreprise étrangère (OpenAI, Anthropic) constitue une communication hors Québec au sens de l'article 17 de la Loi 25, même si des serveurs canadiens sont utilisés, car le CLOUD Act américain peut donner accès aux données. Il faut une évaluation des facteurs avant de le faire."
  - q: "Qu'est-ce qu'une EFVP et faut-il en faire une avant d'implanter un outil IA ?"
    a: "L'EFVP (évaluation des facteurs relatifs à la vie privée) est une analyse formelle des risques qu'un projet fait peser sur la vie privée. Elle est obligatoire pour tout projet d'acquisition, de développement ou de refonte d'un système qui présente des risques élevés, ce qui vise la plupart des déploiements IA touchant des données clients, mais pas tous."
  - q: "Comment anonymiser ou dépersonnaliser les données avant de les envoyer à un outil IA ?"
    a: "Anonymiser veut dire rendre les données impossibles à relier à une personne de façon irréversible. Dépersonnaliser veut dire retirer les identifiants directs (nom, courriel, téléphone) avant d'envoyer le reste à l'outil IA. Dépersonnaliser réduit le risque sans l'éliminer, car une réidentification reste parfois possible."
  - q: "Qui doit être désigné responsable de la protection des renseignements personnels ?"
    a: "Par défaut, c'est la personne ayant la plus haute autorité dans l'entreprise (souvent le propriétaire ou le PDG). Cette responsabilité peut être déléguée par écrit à un employé ou à un tiers, et le titre et les coordonnées du responsable doivent être publics."
  - q: "Quelles sanctions risque-t-on si on utilise l'IA sans respecter la Loi 25 ?"
    a: "La Loi 25 prévoit deux paliers distincts : des sanctions administratives pouvant atteindre 10 M$ ou 2 % du chiffre d'affaires mondial, et des sanctions pénales pouvant atteindre 25 M$ ou 4 % du chiffre d'affaires mondial. Ces montants sont des plafonds, pas des amendes automatiques."
---

Pour respecter la Loi 25 en utilisant l'IA dans votre entreprise au Québec, quatre gestes concrets sont à poser avant de brancher un outil IA sur les données de vos clients : désigner un responsable de la protection des renseignements personnels, réaliser une évaluation des facteurs relatifs à la vie privée (EFVP) quand le projet présente des risques élevés, encadrer le transfert de données hors Québec (article 17) et dépersonnaliser les données quand c'est possible. La Loi 25 ne bloque pas l'IA : elle oblige à la choisir et à la configurer autrement.

Ce point mérite d'être clair d'entrée de jeu. Un outil comme ChatGPT ou Claude ne « viole » pas automatiquement la Loi 25. Tout dépend de ce que vous lui envoyez, avec quel consentement, et de la façon dont le transfert de données est encadré. C'est votre usage qui est conforme ou non, pas l'outil en soi.

## Pourquoi la conformité IA est sous les projecteurs au Québec en 2026 ?

En mai 2026, la Commission d'accès à l'information (CAI) a publié les [conclusions de son enquête conjointe sur OpenAI](https://www.cai.gouv.qc.ca/actualites/resultats-enquete-conjointe-sur-openai-chatgpt) (l'entreprise derrière ChatGPT). L'enquête a conclu qu'OpenAI n'avait pas respecté la loi sur plusieurs points, dont une collecte excessive de renseignements et un consentement insuffisant.

Les médias québécois ont largement couvert le dossier. [Radio-Canada rapportait](https://ici.radio-canada.ca/nouvelle/2251896/chatgpt-openai-vie-privee-donnees-renseignements) qu'OpenAI avait commis des manquements aux lois canadiennes et québécoises sur la vie privée. Résultat : la conformité de l'IA est devenue une vraie question chez les décideurs de PME, pas juste un sujet d'avocat.

Ce dossier confirme une chose. La confiance technique (l'IA fonctionne, elle sauve du temps) ne suffit plus à décider. Le dernier blocage avant d'implanter, c'est souvent la confiance légale.

## La Loi 25 s'applique-t-elle vraiment à une petite PME ?

Oui. La Loi 25 s'applique à toute entreprise qui exerce des activités au Québec et qui détient des renseignements personnels, [sans seuil minimal](https://www.cai.gouv.qc.ca/protection-renseignements-personnels/information-entreprises-privees/champ-application-loi_entreprises) de taille, de revenus ou d'employés. Un travailleur autonome, une PME de trois personnes et une grande entreprise sont visés par les mêmes principes de base.

Un renseignement personnel, c'est toute information qui permet d'identifier une personne physique : nom, courriel, numéro de téléphone, adresse, historique d'achat lié à un client. Dès que vos données clients contiennent ce genre d'information, la Loi 25 encadre ce que vous en faites, y compris quand vous les donnez à traiter à un outil IA.

Autrement dit, « on est trop petits pour être concernés » n'est pas un argument valable au Québec. La taille ne change pas l'application de la loi, elle change seulement l'ampleur des mesures à mettre en place.

## Geste 1 : désigner un responsable de la protection des renseignements personnels

La Loi 25 exige que chaque entreprise désigne une personne responsable de la protection des renseignements personnels (RPRP). [Par défaut, c'est la personne ayant la plus haute autorité](https://www.cai.gouv.qc.ca/protection-renseignements-personnels/sujets-et-domaines-dinteret/principaux-changements-loi-25) dans l'entreprise, donc souvent le propriétaire ou le PDG dans une PME.

Cette responsabilité peut être déléguée par écrit à un employé ou à un tiers. Le titre et les coordonnées de ce responsable doivent être rendus publics, généralement sur le site web de l'entreprise.

Pour un projet IA, ce responsable est la personne qui tranche : est-ce qu'on envoie ces données à cet outil, avec quel encadrement ? C'est le premier geste parce qu'il n'y a personne pour prendre la décision de conformité s'il n'existe pas.

## Geste 2 : faire une EFVP quand le projet présente des risques élevés

Une EFVP (évaluation des facteurs relatifs à la vie privée) est une analyse formelle des risques qu'un projet fait peser sur la vie privée des personnes concernées. La Loi 25 la rend obligatoire pour tout projet d'acquisition, de développement ou de refonte d'un système d'information qui présente des risques élevés.

La plupart des déploiements IA qui touchent des données clients tombent dans cette catégorie, mais pas tous. Automatiser des réponses à des courriels contenant des renseignements clients présente des risques ; générer un texte marketing sans donnée personnelle, beaucoup moins.

La CAI publie un [guide officiel sur l'EFVP](https://www.cai.gouv.qc.ca/uploads/pdfs/CAI_GU_EFVP.pdf) qui détaille la démarche. Concrètement, une EFVP force à répondre à trois questions avant de builder : quelles données personnelles circulent, quels sont les risques, et quelles mesures les réduisent.

## Geste 3 : encadrer le transfert de données hors Québec (article 17)

L'article 17 de la Loi 25 encadre la communication de renseignements personnels à l'extérieur du Québec. Avant un tel transfert, l'entreprise doit évaluer si les données bénéficieront d'une protection adéquate, notamment au regard des lois du territoire de destination.

Envoyer des renseignements de clients à ChatGPT ou à Claude, c'est en général un transfert hors Québec, parce que ces outils sont opérés par des entreprises étrangères (OpenAI, Anthropic). Un piège fréquent : croire que des serveurs canadiens règlent la question. Ils ne la règlent pas automatiquement, car le CLOUD Act américain peut permettre aux autorités américaines d'accéder à des données détenues par ces entreprises, même stockées au Canada.

Ce que ça implique en pratique : ne pas présumer qu'un outil IA est conforme parce qu'il annonce des serveurs canadiens. L'évaluation de l'article 17 doit se faire pour chaque outil, avant de brancher des données personnelles dessus.

## Geste 4 : dépersonnaliser ou anonymiser les données avant de les envoyer

Le moyen le plus simple de réduire le risque est souvent de ne pas envoyer de renseignements personnels du tout. Dépersonnaliser veut dire retirer les identifiants directs (nom, courriel, numéro de téléphone, adresse) avant d'envoyer le reste du contenu à l'outil IA.

Anonymiser va plus loin : rendre les données impossibles à relier à une personne de façon irréversible, selon les critères reconnus. La distinction compte, car des données dépersonnalisées peuvent parfois être réidentifiées en les croisant avec d'autres sources, alors que des données réellement anonymisées ne sont plus des renseignements personnels au sens de la loi.

Pour beaucoup d'automatisations, dépersonnaliser suffit à changer le calcul de risque. Un agent IA qui rédige un suivi peut travailler sur un modèle sans le vrai nom du client, le nom étant réinséré localement après coup, hors de l'outil IA.

## Comment FournIA aborde la conformité Loi 25 dans un projet IA ?

Chez FournIA, chaque implantation d'agent IA ou d'automatisation commence par un checkpoint Loi 25, avant de builder quoi que ce soit. Le principe est simple : pas d'artefact de conformité, pas de build.

Ce checkpoint reprend les quatre gestes ci-dessus, appliqués au cas précis de l'entreprise : qui est le responsable, quelles données circulent, y a-t-il un transfert hors Québec, peut-on dépersonnaliser. Basée sur la Rive-Nord de Montréal, FournIA accompagne des PME québécoises, et la conformité locale fait partie du travail, pas d'une case cochée à la fin.

L'objectif n'est pas de ralentir l'adoption de l'IA. C'est de la rendre défendable, pour que le propriétaire de la PME puisse dormir tranquille après avoir branché un outil sur ses données clients.

## Quelles sanctions risque-t-on concrètement ?

La Loi 25 prévoit deux paliers distincts de sanctions, et il ne faut pas les mélanger. Le [palier des sanctions administratives](https://www.cai.gouv.qc.ca/protection-renseignements-personnels/sujets-et-domaines-dinteret/principaux-changements-loi-25) peut atteindre 10 M$ ou 2 % du chiffre d'affaires mondial de l'exercice précédent, selon le montant le plus élevé. Le [palier des sanctions pénales](https://www.cai.gouv.qc.ca/protection-renseignements-personnels/information-entreprises-privees/sanctions-entreprises-poursuites) peut atteindre 25 M$ ou 4 % de ce même chiffre d'affaires.

Ces montants sont des plafonds prévus par la loi, pas des amendes appliquées automatiquement à la première erreur. Le vrai enjeu pour une PME est souvent moins l'amende maximale que la perte de confiance des clients et le coût de réparation d'un incident.

## Par où commencer sans se noyer ?

Le premier réflexe utile n'est pas de tout arrêter, mais de cartographier. Faire la liste des outils IA déjà utilisés dans l'entreprise, et de ce qu'on leur envoie comme données. Cette liste révèle souvent des transferts de données personnelles que personne n'avait décidés consciemment.

Ensuite, désigner le responsable, puis appliquer les quatre gestes projet par projet. La conformité Loi 25 se construit outil par outil, pas en un grand chantier unique.

Ce texte donne des repères concrets, mais ce n'est pas un avis juridique. Pour les cas complexes (données sensibles, gros volumes, secteurs réglementés), consulter un avocat ou un expert en protection des renseignements personnels reste la bonne décision.

Si vous voulez brancher un outil IA sur vos données clients sans deviner, FournIA fait un audit qui inclut le volet Loi 25 avant toute implantation. Une conversation vaut mieux qu'un doute qui traîne.
