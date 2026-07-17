---
title: "Google-GeminiNotebook : le nouveau user-agent à suivre avant août 2026"
description: "Google renomme le fetcher NotebookLM en Google-GeminiNotebook. Voici quoi modifier dans vos logs, WAF et règles de contrôle avant août 2026."
date: "2026-07-17"
tags: ["seo", "actualite"]
---

Google a renommé NotebookLM en Gemini Notebook le 16 juillet 2026. Le lendemain, sa documentation technique a suivi : le user-agent `Google-NotebookLM` devient **`Google-GeminiNotebook`**.

Le changement paraît minuscule. Il ne l'est pas si votre CDN, votre WAF ou vos analyses de logs reposent sur une liste de robots écrite en dur. Google maintiendra l'ancien nom jusqu'en **août 2026** pour faciliter la transition. Après, une règle restée figée pourra classer le nouveau fetcher comme inconnu, le bloquer ou l'effacer de vos rapports.

## Ce robot n'est pas Googlebot

La distinction est importante. `Google-GeminiNotebook` n'explore pas le Web pour classer des pages dans Search. C'est un **fetcher déclenché par un utilisateur**. Il demande une URL lorsque quelqu'un l'ajoute comme source dans Gemini Notebook.

Google indique que plus de **30 millions de personnes** et **600 000 organisations** utilisent déjà le produit. Une visite de ce fetcher signifie donc qu'un humain a voulu exploiter votre page dans un travail de recherche, une synthèse ou une analyse. C'est un signal d'usage intéressant. Ce n'est ni une impression SEO, ni une citation garantie, ni un facteur de classement.

Ne mélangez surtout pas ses requêtes avec celles de Googlebot dans un tableau de crawl. Vous fausseriez le volume exploré, la répartition par gabarit et l'analyse du budget de crawl.

## Pourquoi robots.txt ne suffit pas

La [documentation officielle des fetchers Google](https://developers.google.com/crawling/docs/crawlers-fetchers/google-user-triggered-fetchers) précise que les outils déclenchés par un utilisateur **ignorent généralement les règles du fichier robots.txt**. La logique est différente d'un crawl automatique : un utilisateur a demandé l'accès à une URL précise.

C'est le point opérationnel à retenir. Ajouter ceci ne constitue pas une méthode fiable de blocage :

```txt
User-agent: Google-GeminiNotebook
Disallow: /
```

Si vous ne voulez pas que ce service récupère une ressource, le contrôle doit se faire au niveau HTTP, applicatif ou réseau. Attention toutefois aux effets de bord. Une règle trop large peut bloquer des utilisateurs légitimes, sans améliorer votre indexation Google puisque ce fetcher n'est pas Googlebot.

Mon avis est simple : **ne bloquez pas par réflexe un accès que vous n'avez pas encore mesuré**. Commencez par l'identifier proprement.

## Les trois corrections à faire dans vos outils

Première correction : cherchez `Google-NotebookLM` dans les configurations du CDN, du WAF, de l'antibot, du SIEM et des scripts d'analyse de logs. Ajoutez `Google-GeminiNotebook` partout où l'ancien token était reconnu. Gardez les deux jusqu'à la fin de la période de transition.

Deuxième correction : ne comparez pas la chaîne complète du user-agent. Google publie actuellement une version mobile basée sur Chrome 138 et une version desktop basée sur Chrome 137. Ces numéros évolueront. La règle doit chercher le token stable **`Google-GeminiNotebook`**, pas une ligne entière copiée depuis la documentation.

Troisième correction : créez une catégorie séparée, par exemple `google_user_triggered_fetcher`. Vous pourrez alors suivre les URL demandées, les codes HTTP, le volume, les pays de sortie et les gabarits concernés sans polluer le reporting SEO classique.

Une requête `200` montre que la ressource a été servie. Une série de `403` révèle souvent une règle antibot devenue obsolète. Des `429` indiquent plutôt une limitation de débit. Quant aux `5xx`, ils signalent un problème serveur qu'il faut traiter, quel que soit le robot.

## Ne faites pas confiance au seul nom déclaré

N'importe quel client HTTP peut écrire `Google-GeminiNotebook` dans son en-tête. **Le user-agent n'est pas une preuve d'identité.** Pour une liste blanche sensible, Google recommande de vérifier aussi l'adresse IP et le DNS inverse, ou de comparer l'IP avec ses fichiers officiels de plages dédiées aux fetchers déclenchés par les utilisateurs.

Évitez donc la règle paresseuse « si le nom contient Google, autoriser ». Elle ouvre une porte inutile. À l'inverse, une liste statique d'IP copiée une fois puis oubliée finira par casser.

## Ce que ce changement dit du SEO en 2026

Gemini Notebook doit bientôt être intégré directement à **AI Mode dans Google Search**. Cela ne transforme pas son fetcher en robot d'indexation. Mais la frontière entre recherche, lecture de sources et travail assisté se resserre.

Le bon réflexe n'est pas d'inventer une optimisation pour `Google-GeminiNotebook`. Il faut rendre les pages accessibles, rapides, compréhensibles et observables, puis distinguer chaque client dans les logs.

Avant août 2026, vérifiez vos règles. C'est une petite migration technique, avec un risque très concret : **bloquer ou mal mesurer un nouveau canal parce qu'une chaîne de caractères a changé**.
