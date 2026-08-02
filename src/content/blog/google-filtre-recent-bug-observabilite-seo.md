---
title: "Le filtre Récent de Google a cassé : votre SEO temps réel n'a aucun filet de sécurité"
description: "Le filtre Récent de Google Search et Google News a cessé de fonctionner. Ce bug révèle pourquoi le SEO temps réel doit s'appuyer sur les logs et des contrôles croisés."
date: "2026-08-02"
tags: ["seo", "actualite"]
---

# Le filtre "Récent" de Google a cassé : votre SEO temps réel n'a aucun filet de sécurité

Le 1er août 2026, le filtre **"Récent" de Google Search et Google News** a cessé de respecter la période demandée. Une recherche limitée à la dernière heure remontait des contenus plus anciens. Le problème touchait le mobile comme le desktop. Google a confirmé l'incident, puis déployé un correctif le 2 août.

Ce bug n'a duré que quelques heures. Il révèle pourtant un problème beaucoup moins temporaire : pour les éditeurs, les médias et les marques qui travaillent l'actualité chaude, Google reste à la fois le canal de diffusion et l'outil de contrôle. Quand son filtre casse, une partie de l'observabilité disparaît avec lui.

## Ce qui s'est réellement passé

Le dysfonctionnement concernait au moins quatre contextes : Search sur ordinateur, Search sur mobile, l'onglet Google News sur ordinateur et Google News sur mobile. Les options comme "Dernière heure" étaient sélectionnables, mais le moteur ne respectait plus la contrainte temporelle.

Le bug a été signalé sur Reddit, X et LinkedIn. Rajan Patel, vice-président de Google Search, a indiqué le 1er août que les équipes travaillaient dessus. Le lendemain, il a annoncé que le correctif était en production. Pendant l'incident, le tri "Pertinence", puis "Trier par date" dans Google News restait utilisable comme solution de secours.

Il faut être précis : il ne s'agissait pas d'une panne d'indexation annoncée. Rien ne prouve que Googlebot avait cessé de découvrir les nouveaux contenus. C'est l'interface de filtrage qui renvoyait une vision fausse de la fraîcheur des résultats.

Cette nuance compte. Confondre un bug d'affichage avec un problème de crawl peut conduire à modifier un site qui fonctionne parfaitement.

## Le mauvais réflexe : republier et demander une indexation

Face à une actualité absente du filtre horaire, beaucoup d'équipes relancent la machine : changement de date, modification du titre, nouvelle soumission dans Search Console, voire duplication de l'article sous une autre URL.

C'est exactement ce qu'il ne fallait pas faire.

Une republication artificielle brouille les signaux de fraîcheur. Une deuxième URL crée un problème de canonicalisation. Et le bouton de demande d'indexation ne répare pas une interface Google défaillante. Il ajoute seulement du bruit à un diagnostic déjà mauvais.

Ma règle est simple : **ne jamais corriger le site avant d'avoir isolé la couche en panne**.

## Comment contrôler la fraîcheur sans dépendre du filtre Google

Un dispositif sérieux repose sur plusieurs preuves indépendantes :

1. Les logs serveur confirment le passage de Googlebot sur l'URL et donnent l'heure exacte du crawl.
2. Le sitemap XML doit exposer un `lastmod` honnête, modifié seulement quand le contenu change réellement.
3. Search Console permet de vérifier l'état d'indexation, mais ses rapports ne sont pas conçus pour piloter une rédaction minute par minute.
4. Une requête `site:` peut fournir un indice, jamais une preuve exhaustive.
5. Pour Google News, le tri par date constituait ici le meilleur contournement connu.

Pour un média, j'ajouterais un tableau interne très basique : heure de publication, premier crawl Googlebot, première impression Search Console, première visite organique. Quatre horodatages suffisent pour distinguer un retard de crawl, un retard d'indexation et un simple problème de restitution dans la SERP.

## Ce bug doit changer votre procédure, pas votre stratégie

L'incident est résolu. Inutile d'en tirer une théorie sur une mise à jour algorithmique ou une pénalité contre les contenus récents. En revanche, il faut en tirer une leçon opérationnelle.

**Un filtre Google n'est pas un outil de monitoring.** C'est une interface utilisateur, sans garantie de disponibilité ni historique exploitable. Une rédaction qui dépend d'un seul test manuel pour savoir si ses articles circulent travaille à l'aveugle.

Le SEO temps réel exige des logs, des horodatages et des contrôles croisés. C'est moins spectaculaire qu'un nouveau plugin d'indexation. C'est aussi beaucoup plus fiable.
