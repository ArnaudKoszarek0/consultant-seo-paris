---
title: "Search Console API : multi-pays et piège du CTR régional"
description: "Les filtres multi-pays arrivent dans la Search Analytics API. Comment migrer vos reportings sans fausser le CTR ni changer le périmètre en silence."
date: "2026-11-17"
tags: ["seo", "actualite"]
---

Le 16 novembre 2026, Google a annoncé l'arrivée des filtres multi-pays et multi-appareils dans la **Search Analytics API**. Ces possibilités existaient déjà dans l'interface Search Console. Elles deviennent accessibles aux outils de reporting automatisés, via le champ `filterLists`. L'[annonce officielle](https://developers.google.com/search/blog/2026/11/search-analytics-api-update) présente cette évolution avec deux autres nouveautés, sur la marque et la recherche multimodale.

Je retiens ici un problème moins spectaculaire : comment suivre un groupe de marchés sans fabriquer une moyenne trompeuse ? Pour un responsable acquisition, c'est souvent plus utile qu'un nouveau graphique.

## Un groupe de pays devient un périmètre explicite

Google indique qu'une seule requête peut désormais sélectionner plusieurs pays et plusieurs appareils. Le bénéfice annoncé : moins d'assemblages entre extractions séparées. C'est une simplification de collecte, pas une promesse de progression SEO. [Source : Google Search Central](https://developers.google.com/search/blog/2026/11/search-analytics-api-update).

Prenons un cas fictif : votre direction suit la France, la Belgique et la Suisse, sur mobile et ordinateur. Je nommerais ce segment « FRA-BEL-CHE, hors tablette », plutôt que « francophonie ». Le second intitulé suggère une langue ; notre sélection ne décrit que des pays et des appareils.

Cette précision paraît administrative. Elle évite surtout qu'une équipe compare deux chiffres différents en pensant parler du même marché.

## Le piège : confondre sélection et ventilation

Selon la [référence technique de l'API](https://developers.google.com/webmaster-tools/v1/searchanalytics/query), `filterLists` accepte les dimensions `country` et `device`. Chaque liste retient les valeurs exactes indiquées dans `expressions`. Les pays utilisent des codes à trois lettres ; les appareils acceptent `DESKTOP`, `MOBILE` et `TABLET`.

Attention : on ne peut pas filtrer la même dimension simultanément dans `filters` et `filterLists`. Il faut donc adapter les anciens connecteurs, pas simplement ajouter un champ à leur requête existante. Cette restriction figure dans la [documentation du nouveau filtre](https://developers.google.com/webmaster-tools/v1/searchanalytics/query).

Autre distinction : `dimensions` définit le regroupement des lignes retournées. Sans dimension, les valeurs sont réunies sur une seule ligne. L'API ne garantit pas non plus de restituer toutes les lignes détaillées disponibles. Ces deux limites sont précisées dans la [référence Search Analytics](https://developers.google.com/webmaster-tools/v1/searchanalytics/query).

Ma recommandation : conserver **deux lectures séparées**, le total du périmètre pour le pilotage et sa ventilation pour comprendre les mouvements. Un total régional seul me paraît insuffisant pour décider quel marché mérite un audit.

## Pourquoi votre CTR régional peut mentir

Voici un exemple calculé, pas une étude de marché.

Un premier pays génère 1 000 clics pour 10 000 impressions : son CTR atteint 10 %. Un deuxième produit 100 clics pour 10 000 impressions : 1 %. Le troisième apporte 90 clics pour 1 000 impressions : 9 %.

La moyenne simple des trois taux donne 6,67 %. Pourtant, sur ce même périmètre, le rapport entre les totaux est de **1 190 clics pour 21 000 impressions, soit 5,67 %**. Un point d'écart, créé uniquement par le calcul.

Je refuserais donc un tableau de bord qui moyenne les CTR nationaux sans expliquer sa méthode. Si l'objectif est le taux global, on divise les clics totaux par les impressions totales. Et on garde les taux par pays pour l'analyse, sans les mélanger avec cet indicateur consolidé.

## Une recette de contrôle avant de remplacer le connecteur

Pour cette migration, je propose un contrôle sur **28 jours terminés**. C'est mon protocole, pas une exigence de Google.

D'abord, écrire le périmètre : propriété, dates, pays retenus, appareils exclus, type de recherche et regroupement. Ensuite, exécuter l'ancienne collecte et la nouvelle sur exactement cette définition. Archiver les requêtes et leurs réponses, plutôt qu'une capture du graphique final.

Je comparerais les clics et les impressions avant de toucher aux ratios. En cas d'écart, je vérifierais les filtres réellement envoyés et la granularité des résultats. Pas question d'expliquer une différence technique par une variation du marché.

Dernier contrôle : reprendre une décision concrète du reporting précédent. Le marché belge semblait-il décrocher sur mobile ? Peut-on retrouver le même constat avec la nouvelle extraction ? Si le tableau ne permet plus de répondre, la simplification a été poussée trop loin.

**Mon avis : adoptez le filtre, mais versionnez le périmètre.** Une liste de pays modifiée en silence peut rendre une courbe séduisante et sa comparaison inutile. Le livrable attendu n'est pas une requête plus courte. C'est un chiffre dont vous pouvez défendre la définition devant votre direction.
