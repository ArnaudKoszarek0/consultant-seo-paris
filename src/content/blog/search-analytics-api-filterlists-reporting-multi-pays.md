---
title: "Search Analytics API : regrouper les pays sans fausser le reporting"
description: "Google ajoute filterLists à la Search Analytics API. Comment regrouper pays et appareils sans masquer les écarts ni calculer un CTR régional faux."
date: "2026-11-16"
tags: ["seo", "actualite"]
---

Le 16 novembre 2026, Google ajoute le filtrage **multi-pays et multi-appareils** à la Search Analytics API. Le champ `filterLists` permet de sélectionner plusieurs pays ou types d'appareils dans une même requête. L'annonce couvre aussi les recherches de marque et la recherche multimodale. Ici, je retiens un changement moins spectaculaire : automatiser un reporting régional sans recoller des extractions pays par pays. [Annonce officielle Google](https://developers.google.com/search/blog/2026/11/search-analytics-api-update).

Mon avis : le gain mérite qu'on adapte les connecteurs. À condition de ne pas transformer un raccourci technique en raccourci d'analyse.

## Un groupe de pays n'est pas un marché homogène

Prenons un cas fictif. Une entreprise suit l'Allemagne, l'Autriche et la Suisse, sur mobile et ordinateur. Son connecteur actuel lance une extraction par combinaison : **3 pays × 2 appareils = 6 requêtes** pour une période donnée.

Pour ce périmètre, la nouvelle sélection peut tenir dans un appel. Cela ne signifie pas que toute l'extraction d'un gros site tiendra dans une seule réponse : Google conserve ses limites de restitution et sa pagination. [Référence de l'API](https://developers.google.com/webmaster-tools/v1/searchanalytics/query).

Je conserverais malgré tout le détail par pays et appareil dans le stockage. Pourquoi ? Parce qu'une hausse allemande peut compenser une baisse suisse. Le total régional sera rassurant, le responsable du marché suisse beaucoup moins.

Le bon compromis, dans cet exemple : une collecte regroupée, puis deux lectures. Une synthèse pour la direction commerciale et une ventilation pour les personnes qui doivent comprendre où intervenir.

## Bien placer filterLists, sans inventer de logique

La documentation place `filterLists` dans `dimensionFilterGroups`. Chaque liste porte une dimension, `country` ou `device`, et plusieurs `expressions`. Une valeur correspondant à l'une des expressions satisfait la liste. Google interdit de filtrer simultanément la même dimension dans `filters` et `filterLists`. [Structure documentée](https://developers.google.com/webmaster-tools/v1/searchanalytics/query).

Ce détail mérite un test avant déploiement. Je vérifierais le JSON réellement envoyé par le connecteur, pas seulement les cases cochées dans son interface. Un ancien filtre pays peut rester actif pendant qu'une nouvelle liste est ajoutée.

Je séparerais aussi clairement deux choix dans la configuration : **le périmètre sélectionné** et le niveau de détail demandé. Filtrer plusieurs pays ne remplace pas une décision explicite sur la manière dont on veut lire leurs performances.

## Le piège des moyennes : un exemple à 10 000 impressions

Voici un second exemple fictif, indépendant de toute mesure client. Un pays produit 100 clics pour 1 000 impressions. Un autre produit 180 clics pour 9 000 impressions.

Leurs CTR respectifs sont de 10 % et 2 %. Faire la moyenne des deux donne 6 %. Pourtant, le groupe totalise 280 clics pour 10 000 impressions : **son CTR est de 2,8 %**.

L'écart vient uniquement du calcul. Pas d'une évolution de Google.

Dans mon cahier de recette, j'imposerais donc une règle simple : additionner les clics et les impressions avant de recalculer le CTR du groupe. Je refuserais un indicateur régional construit par moyenne simple des taux nationaux. Un tableau de bord plus rapide à produire n'a aucun intérêt s'il conduit à une mauvaise décision budgétaire.

## Ma recette avant de remplacer le connecteur

Je proposerais une comparaison sur **deux périodes de 28 jours**, avec exactement les mêmes pays, appareils et paramètres d'agrégation. Ce sont mes paramètres de test, pas une recommandation officielle de Google.

Première passe : conserver l'ancien export et produire le nouveau à côté. Deuxième passe : comparer les clics, impressions et jours présents. Troisième passe : examiner chaque différence avant de basculer le reporting envoyé au client.

Pour cet essai, je choisirais les données finalisées. L'API distingue celles-ci des données récentes encore susceptibles d'évoluer via `dataState`. [Paramètres de fraîcheur](https://developers.google.com/webmaster-tools/v1/searchanalytics/query).

Enfin, je versionnerais la composition des groupes. Si l'équipe ajoute demain un pays au périmètre commercial, le rapport doit le signaler. Sinon, on risque de célébrer une croissance qui correspond simplement à un changement de sélection.

**Automatiser la collecte, oui. Effacer le contexte, non.** Le ticket à ouvrir aujourd'hui est précis : tester `filterLists` sur un groupe de marchés, conserver la ventilation et vérifier les calculs avant de remplacer l'existant.
