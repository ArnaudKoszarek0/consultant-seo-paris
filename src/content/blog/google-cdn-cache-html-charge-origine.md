---
title: "Migration CDN : vérifiez le cache HTML avant de célébrer la vitesse"
description: "Google alerte sur la charge d'origine après une migration CDN. Distinguez cache froid et HTML non cacheable avec une recette SEO sur 30 URL."
date: "2026-11-11"
tags: ["seo", "actualite"]
---

Le **11 novembre 2026**, Google publie un avertissement sur les migrations vers un CDN : un réseau plus rapide peut augmenter la pression sur le serveur d’origine lorsque ses caches sont encore vides. Mon angle aujourd’hui : **vérifier le cache des pages HTML**, pas seulement la vitesse de la page d’accueil. [Annonce Google Search Central](https://developers.google.com/search/blog/2026/11/crawling-cdn).

## Le piège du serveur rapide devant un serveur fragile

Google explique que des réponses rapides et stables peuvent relever progressivement la capacité d’exploration, si la demande existe. Mais une première requête vers une URL absente du cache repart à l’origine. Les visiteurs se concentrent souvent sur quelques pages populaires ; les robots explorent un inventaire beaucoup plus large. Le serveur applicatif reste alors le goulet d’étranglement. Ce mécanisme n’est ni systématique ni instantané. [Explication officielle](https://developers.google.com/search/blog/2026/11/crawling-cdn).

Je déconseille donc de valider une migration avec trois chargements de la homepage. Pour ma recette, je veux voir comment se comportent les catégories profondes, les fiches peu consultées et les pages éditoriales anciennes. C’est là que je chercherais une différence entre une démonstration rapide et un déploiement réellement maîtrisé.

## Un exemple chiffré, pas une promesse de performance

Prenons un **scénario fictif** simplifié, sans cache intermédiaire ni revalidation. Avant migration, 40 requêtes HTML par seconde atteignent l’application. Après bascule, le trafic entrant passe à 120. Avec 80 % de réponses servies directement depuis le cache, il reste 24 requêtes par seconde pour l’origine : 120 × 20 %.

Avec seulement 20 % de succès du cache, ce nombre monte à 96. C’est **2,4 fois la charge initiale**, malgré la présence du CDN. Ces chiffres illustrent un calcul, pas une mesure publiée par Google ni une prévision pour votre site.

Ma conclusion opérationnelle : demander le débit réellement reçu par l’application, et non accepter un taux global flatteur sans connaître les ressources qui le composent.

## Distinguer un cache froid d’un HTML jamais conservé

Chez Cloudflare, `CF-Cache-Status: HIT` indique une ressource trouvée en cache. `MISS` correspond à une réponse éligible mais absente au moment de la demande, servie depuis l’origine. `DYNAMIC` désigne un contenu non considéré comme éligible ; `BYPASS` peut signaler qu’une réponse finalement non cacheable a contourné le cache. Ces situations ne demandent pas le même diagnostic. [Documentation Cloudflare](https://developers.cloudflare.com/cache/concepts/cache-responses/).

Je propose de relever ces statuts séparément pour le HTML et les ressources statiques. Puis de refaire exactement les mêmes demandes, sans ajouter un paramètre aléatoire à chaque passage. Si les pages publiques restent systématiquement hors cache, je demanderais une revue des règles et des en-têtes avant tout préchauffage massif.

Attention au raccourci inverse : je ne recommande pas de rendre toutes les réponses cacheables. Dans mon plan de contrôle, les comptes clients, paniers et pages personnalisées restent un lot distinct, à valider avec les développeurs.

## Une recette sur 30 URL avant de généraliser

Voici le protocole que je retiendrais pour une boutique de taille intermédiaire. Les volumes sont mes choix de travail, pas des seuils Google.

Je sélectionnerais **30 URL** : 10 catégories, 10 produits de longue traîne et 10 contenus éditoriaux. Pour chaque adresse, le relevé comprendrait le code HTTP, le statut du cache, le temps de réponse et une vérification du contenu retourné.

Je ferais deux passages à débit limité depuis le même point de mesure. Pendant ce temps, l’administrateur suivrait les requêtes arrivant à l’origine, les erreurs et la saturation des processus applicatifs. Je conserverais les résultats URL par URL, plutôt qu’une moyenne qui efface les cas difficiles.

Avant la bascule, je demanderais aussi un responsable nommé, une plage de surveillance et des critères d’arrêt adaptés à la capacité mesurée du serveur. Aucun seuil universel inventé. Le compte rendu doit permettre de décider : poursuivre, corriger une règle ou revenir à la configuration précédente.

## Ne pas confondre exploration et résultat SEO

La documentation Google rappelle qu’une page explorée n’est pas nécessairement indexée : elle doit encore être évaluée et consolidée. Davantage de crawl ne constitue donc pas, à lui seul, un résultat SEO. [Guide officiel du budget d’exploration](https://developers.google.com/crawling/docs/crawl-budget).

Mon critère de livraison reste modeste et vérifiable : les pages prévues sont accessibles, les réponses sont correctes et l’origine tient la charge. Avant de célébrer un CDN plus rapide, je veux cette preuve.
