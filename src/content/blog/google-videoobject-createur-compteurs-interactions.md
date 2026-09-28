---
title: "VideoObject : Google précise le créateur et les compteurs vidéo"
description: "Google documente creator et quatre interactions VideoObject. Comment vérifier les crédits et les compteurs vidéo sans promettre un gain de classement."
date: "2026-09-28"
tags: ["seo", "actualite"]
---

Dans la veille SEO du 28 septembre 2026, une modification mérite mieux qu'un copier-coller de balises. Le **24 septembre**, Google a complété sa documentation `VideoObject` : identification du créateur et précision des interactions prises en charge. La date figure dans le [journal officiel des modifications](https://developers.google.com/search/updates). Pas question de présenter cela comme un lancement algorithmique ce lundi.

Mon angle est simple : qui signe vos vidéos, et d'où viennent les chiffres que votre site transmet ? Avant d'ajouter des champs dans un plugin, il faut pouvoir répondre.

## Identifier le créateur, pas remplir une case

Google documente désormais `creator`, avec `author` également accepté. La valeur correspond à une personne ou une organisation ayant créé ou publié la vidéo. Un nom ou un nom alternatif doit être fourni ; une URL permet d'identifier l'entité. Ces détails figurent dans la [référence VideoObject](https://developers.google.com/search/docs/appearance/structured-data/video#video-object).

Je recommande de commencer par une décision éditoriale, pas technique. Pour une démonstration produite par votre entreprise, qui souhaitez-vous identifier : l'entreprise éditrice ou l'expert qui porte le contenu ? Documentez ce choix et appliquez-le sans inventer de crédit.

Prenons un cas fictif : une agence héberge **40 tutoriels**, réalisés par 3 consultants. Mon audit chercherait d'abord les vidéos attribuées par défaut au compte « admin ». Je demanderais ensuite une correspondance entre chaque vidéo, son crédit visible et la fiche du créateur. Une personne qui n'a participé à aucune production n'a rien à faire dans cette liste.

## Quatre interactions, quatre compteurs distincts

La documentation précise **4 types d'interactions** : `WatchAction` pour les visionnages, `LikeAction` pour les appréciations, `CommentAction` pour les commentaires et `ShareAction` pour les repartages. Le nombre associé passe par `userInteractionCount`, dans un objet `InteractionCounter`. [Source : propriétés interactionStatistic](https://developers.google.com/search/docs/appearance/structured-data/video#interaction-statistic).

Mon conseil : refusez le champ générique « engagement » si personne ne sait expliquer ce qu'il additionne. Une vue et un commentaire ne racontent pas la même chose.

Exemple volontairement fictif : une vidéo affiche 12 000 vues et 80 commentaires sur une plateforme, tandis que votre lecteur interne comptabilise 500 démarrages. Je ne publierais pas 12 580 « interactions » en guise de visionnages. Avant toute intégration, je fixerais le périmètre du compteur, sa source et sa fréquence de mise à jour.

Si la donnée manque, je préfère laisser le champ facultatif absent plutôt que remplir un zéro par défaut. **Inconnu ne veut pas dire zéro.** C'est une règle de gestion des données que je recommande, pas une nouvelle consigne Google.

## Une propriété documentée ne promet aucun classement

Le journal du 24 septembre annonce une clarification de prise en charge. Il ne fournit ni gain de position chiffré ni test démontrant qu'un compteur élevé améliore le classement. C'est la limite de cette annonce, telle qu'elle est [publiée par Google](https://developers.google.com/search/updates).

Par ailleurs, Google rappelle qu'un balisage conforme ne garantit pas l'affichage d'un résultat enrichi. Les informations doivent représenter le contenu de la page sans induire l'utilisateur en erreur. Voir les [consignes générales sur les données structurées](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

Je ne vendrais donc pas cette intervention comme un raccourci vers la première position. Je la vendrais comme une correction de données vérifiable. Moins spectaculaire. Beaucoup plus défendable face à un client.

## Mon contrôle avant déploiement

Pour un premier lot, je choisirais **10 pages vidéo** : des productions récentes, des anciennes et des contenus provenant de plusieurs lecteurs. Ce nombre est un point de départ pratique, pas une prescription officielle.

Sur chacune, je demanderais au développeur l'origine exacte de l'identité et des compteurs. Puis je comparerais le JSON-LD généré avec les informations présentées au visiteur. Dernier contrôle : simuler une indisponibilité de la source statistique. Le site conserve-t-il une valeur identifiée comme ancienne, omet-il le champ, ou fabrique-t-il silencieusement un chiffre ?

Google recommande de valider le balisage avec le Rich Results Test puis de tester quelques pages via l'inspection d'URL. Cette séquence est détaillée dans son [guide d'implémentation vidéo](https://developers.google.com/search/docs/appearance/structured-data/video#how-to-add-structured-data).

Le livrable que j'attendrais tient dans un tableau : vidéo, créateur, source des statistiques, dernière synchronisation, anomalie restante. Tant que ce tableau n'est pas fiable, ajouter du JSON-LD ne résout pas le problème. Cela l'exporte.
