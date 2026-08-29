---
title: "Panne Google du 28 août : indexée, mais absente des résultats"
description: "Le 28 août 2026, Google a cessé de servir certains contenus frais pendant 80 minutes. Voici comment distinguer crawl, indexation et panne de serving."
date: "2026-08-29"
tags: ["seo", "actualite"]
---

Le 28 août 2026, Google a connu un incident discret mais instructif. Pendant environ **80 minutes**, des contenus très récents n'apparaissaient plus dans les résultats, y compris ceux du Wall Street Journal, du New York Times et de CNN.

Le problème aurait commencé vers 6 h 15, heure de New York, avant un retour progressif à la normale vers 7 h 35. Rien de spectaculaire sur le papier. Pourtant, cet épisode montre pourquoi un diagnostic d'indexation fondé sur un seul outil est bancal.

## Indexée ne veut pas dire servie dans les résultats

Le point le plus intéressant n'est pas la durée de la panne. C'est la contradiction observée pendant l'incident.

Pour certaines URL, l'outil d'inspection de Google Search Console indiquait que la page était **indexée**. Mais la même page restait introuvable dans Google, même avec une recherche très ciblée. En parallèle, le [Search Status Dashboard](https://status.search.google.com/) affichait un fonctionnement normal.

Cela suggère un problème de « serving », c'est-à-dire de mise à disposition des documents dans les résultats, plutôt qu'une panne complète du crawl ou de l'indexation. Google pouvait connaître la page sans parvenir à la servir correctement dans la SERP.

Cette distinction est fondamentale :

- le **crawl** correspond à la récupération de l'URL par Googlebot ;
- l'**indexation** correspond au traitement et au stockage du document ;
- le **serving** correspond à sa sélection et à son affichage pour une requête.

Ces trois couches communiquent, mais elles ne tombent pas forcément en panne ensemble.

## Le tableau de statut Google ne suffit pas

L'incident a été observé dès le 28 août par la communauté SEO, alors que le tableau officiel ne signalait rien. Ce n'est pas une preuve que Google cache ses problèmes. C'est surtout un rappel : **un tableau de statut n'est pas un outil de monitoring exhaustif**.

Google réserve généralement ses alertes publiques aux incidents confirmés et suffisamment larges. Un défaut court, partiel ou limité à certains centres de données peut rester invisible sur cette page.

Attendre un bandeau rouge officiel avant d'enquêter est donc une mauvaise méthode. À l'inverse, lancer une refonte technique parce qu'un article publié depuis 20 minutes n'apparaît pas encore est tout aussi mauvais.

## Comment diagnostiquer une disparition de contenu frais

Pour un média ou un site publiant plusieurs fois par jour, je recommande un contrôle en cinq étapes.

**1. Vérifier le code HTTP.** L'URL doit répondre en 200, sans redirection inattendue ni blocage intermittent du CDN.

**2. Lire les logs serveur.** Ils permettent de savoir si Googlebot a réellement demandé la page, à quelle heure et avec quel résultat. Search Console reste une interface différée.

**3. Contrôler l'inspection d'URL.** Si Google déclare la page indexée, mais qu'elle ne ressort sur aucune requête distinctive, la piste du serving devient crédible.

**4. Tester plusieurs domaines comparables.** Une panne qui touche simultanément plusieurs grands médias est probablement externe à votre CMS. Une seule URL absente sur votre site pointe plutôt vers votre propre architecture.

**5. Mesurer le retour à la normale.** Notez l'heure de première détection, puis celle de réapparition. Ici, la fenêtre observée était d'environ **1 h 20**. Sans chronologie, on transforme vite une anomalie temporaire en faux problème SEO durable.

## Ce qu'il ne fallait surtout pas faire

Il ne fallait ni changer les balises canonical, ni renvoyer le sitemap en boucle, ni demander l'indexation de centaines d'URL. Ces actions auraient ajouté du bruit sans réparer la couche défaillante.

Une URL fraîche peut manquer dans Google pour trois raisons très différentes : Google ne l'a pas découverte, il ne l'a pas retenue, ou il ne la sert temporairement pas. Le remède dépend du diagnostic.

Mon avis est simple : **l'observabilité SEO doit sortir de Search Console**. Les logs, les tests HTTP, un échantillon de requêtes et une chronologie précise valent mieux qu'une capture d'écran isolée. L'incident du 28 août a été bref. La leçon, elle, est durable.

Sources : [Search Engine Roundtable](https://www.seroundtable.com/google-search-indexing-issues-41972.html) et [Google Search Status Dashboard](https://status.search.google.com/).
