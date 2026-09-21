---
title: "Lighthouse 13.5 audite la découverte des services par les agents IA"
description: "Lighthouse 13.5 ajoute un audit ARD pour les agents IA. Ce qu'il vérifie, ses limites et les sites qui doivent réellement agir."
date: "2026-09-21"
tags: ["seo", "actualite"]
---

Lighthouse 13.5 ajoute un audit Agentic Resource Discovery, ou ARD. Le nom paraît obscur. Le changement, lui, mérite l'attention des responsables SEO techniques : Google commence à auditer la manière dont un site expose ses services aux agents IA.

Attention au raccourci. **ARD n'est pas un nouveau facteur de classement Google.** L'audit appartient à la catégorie expérimentale « Agentic Browsing » de Lighthouse, pas à la catégorie SEO. Aucune documentation officielle ne relie ce contrôle aux positions dans Search, aux AI Overviews ou à AI Mode.

Cela ne le rend pas inutile. Cela montre simplement où se déplace une partie du Web : après l'indexation des pages, les machines cherchent désormais des services qu'elles peuvent identifier et appeler.

## Ce que Lighthouse 13.5 vérifie vraiment

L'audit cherche un catalogue ARD décrivant les ressources proposées par une organisation : outils MCP, agents A2A, compétences ou services appelables. Lighthouse examine trois mécanismes de découverte :

- une directive `Agentmap` dans `robots.txt` ;
- une balise `<link>` avec la relation `ai-catalog` ;
- un en-tête HTTP `Link` utilisant cette même relation.

En l'absence de pointeur, Lighthouse tente l'URL `/.well-known/ai-catalog.json`. Si aucun fichier n'est trouvé, le résultat est « Not Applicable », pas un échec. Si le catalogue existe mais ne respecte pas le schéma attendu, l'audit échoue.

La version 13.5 doit arriver dans les DevTools de Chrome 156, puis dans PageSpeed Insights sous environ deux semaines. La catégorie Agentic Browsing n'attribue d'ailleurs pas une note sur 100. Elle affiche un ratio de contrôles réussis, car les standards restent mouvants.

## Le problème : l'audit est déjà en retard sur la spécification

C'est le point technique le plus intéressant. La spécification ARD v0.91, datée du 26 août 2026, privilégie désormais `/.well-known/ard.json`. L'ancien fichier `ai-catalog.json` reste optionnel pour assurer une compatibilité, mais un outil moderne doit d'abord chercher `ard.json`.

Or Lighthouse 13.5 continue de rechercher l'ancien nom. Il ne contrôle pas non plus, à ce stade, la découverte via JSON-LD ou DNS prévue par la spécification.

Conséquence concrète : un site correctement configuré selon ARD v0.91 peut obtenir « Not Applicable » dans Lighthouse. Ce résultat ne prouve donc rien. Il signifie seulement que Lighthouse n'a pas trouvé le catalogue aux emplacements qu'il connaît.

C'est un bon rappel méthodologique. Un outil d'audit n'est jamais la norme. Il n'en implémente qu'une version, avec ses retards et ses angles morts.

## ARD, llms.txt et WebMCP ne servent pas au même usage

Ces trois notions sont souvent mélangées alors qu'elles répondent à des problèmes différents.

llms.txt résume des contenus et propose des chemins de lecture aux modèles. Son utilité réelle pour la visibilité reste débattue, et Google Search n'en fait pas un signal SEO.

WebMCP permet à une page d'exposer des actions structurées lorsqu'un agent se trouve déjà dessus, par exemple lancer une recherche interne ou remplir un formulaire.

ARD intervient en amont. Il sert à faire découvrir les ressources et services d'une organisation. En simplifiant : llms.txt décrit, ARD référence, WebMCP permet d'agir.

## Faut-il déployer un fichier ARD maintenant ?

Pour un blog, un site vitrine ou un e-commerce classique sans service appelable, **non**. Ajouter un fichier parce que Lighthouse affiche une nouvelle ligne revient à collectionner les badges techniques. Cela ne produit ni trafic, ni indexation, ni conversion.

Pour une plateforme SaaS, une API, une place de marché ou un site proposant déjà des outils MCP, la réponse change. Un test contrôlé devient pertinent. Je recommande alors quatre règles :

1. publier `/.well-known/ard.json` selon la spécification v0.91 ;
2. conserver temporairement `ai-catalog.json` pour la compatibilité avec Lighthouse 13.5 ;
3. ne déclarer que des services réels, documentés et protégés ;
4. surveiller les requêtes serveur plutôt que de conclure à partir du seul rapport Lighthouse.

Le vrai risque n'est pas de rater une hypothétique prime SEO. C'est d'exposer trop tôt des points d'entrée mal authentifiés, sans quotas ni journalisation.

## Mon avis

Lighthouse ne vient pas d'inventer le « SEO pour agents ». Il vient de rendre visible un chantier technique encore instable. **Ne transformez pas une expérimentation de découverte en nouvelle religion SEO.**

En revanche, gardez ARD dans votre radar. Quand les agents passeront de la lecture à l'exécution, la capacité à décrire proprement ses services comptera. Pas pour gagner trois places sur Google, mais pour rester accessible dans un Web où les utilisateurs délégueront de plus en plus d'actions à des machines.
