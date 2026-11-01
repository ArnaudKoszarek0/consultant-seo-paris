---
title: "Lighthouse 13.6 : une recette SEO sur 12 URL, pas sur l’accueil"
description: "Lighthouse 13.6 audite plusieurs URL en une commande. Une méthode sur 12 pages pour valider une livraison sans confondre score et expérience réelle."
date: "2026-11-01"
tags: ["seo", "actualite"]
---

Le **27 octobre 2026**, Google a publié Lighthouse 13.6.0. Une nouveauté mérite mieux qu'une ligne dans un changelog : l'outil en ligne de commande accepte désormais plusieurs URL dans une même exécution. Pour un responsable SEO, l'intérêt est simple. Arrêter de valider une refonte à partir du seul score de la page d'accueil.

Dans cette veille du 1er novembre, je retiens cet angle opérationnel : constituer un échantillon de pages, le conserver et le rejouer avant chaque livraison. Pas collectionner des captures vertes.

## Plusieurs URL, une seule commande

La [note officielle de Lighthouse 13.6.0](https://github.com/GoogleChrome/lighthouse/releases/tag/v13.6.0) décrit deux entrées possibles : plusieurs adresses passées directement à la commande, ou un fichier fourni avec `--url-file`. Les audits s'exécutent **séquentiellement**. Ce n'est donc pas un lancement massif en parallèle.

L'option `--fail-fast` permet d'interrompre le lot au premier échec. Les noms de rapports incluent maintenant le chemin de la page, afin de limiter les collisions entre plusieurs URL d'un même domaine. Voilà une amélioration qui parle aux équipes techniques : moins de plomberie autour de l'outil, davantage de temps pour examiner les résultats.

Google annonce aussi une arrivée prévue dans PageSpeed Insights sous une semaine. Au 1er novembre, cette prévision ne prouve pas que chaque test en ligne utilise déjà cette version. **Vérifiez la version du rapport**, pas seulement sa date.

## Mon échantillon : douze pages, pas douze copies

Je propose de commencer avec **12 URL**. C'est un choix de méthode, pas une prescription de Google : une page d'accueil, trois catégories, quatre produits, deux articles, une page de service et une page de contact. Adaptez cette répartition au site réel.

Je retiendrais volontairement un produit avec beaucoup de variantes, un article chargé en médias et une catégorie longue. Tester uniquement les pages les plus légères reviendrait à choisir les questions avant l'examen.

Pour chaque URL, mon fichier de suivi contiendrait le gabarit, le responsable technique et le parcours commercial associé. Je conserverais aussi une justification : trafic organique important, composant nouveau, formulaire sensible ou incident déjà rencontré.

Ce petit inventaire oblige à répondre à une question souvent esquivée : **quelles pages avons-nous réellement validées ?** Une moyenne globale ne me suffit pas pour autoriser une livraison.

## Un lot terminé n'est pas une recette réussie

Je prévoirais deux modes d'exécution. Pendant le développement, arrêter au premier échec peut accélérer le diagnostic. Avant une mise en production, je préfère obtenir le bilan complet des douze pages, puis distinguer les audits réalisés des tentatives échouées.

Exemple fictif : dix rapports corrects et deux pages impossibles à charger. Le bilan n'est pas « dix pages validées ». C'est « deux parcours restent sans preuve ». Je refuserais que ces absences disparaissent du compte rendu.

Pour une première recette, je lancerais trois passages par URL, soit **36 mesures**, dans un environnement contrôlé. Je conserverais les résultats individuels et la médiane. Ce protocole est ma proposition pour éviter de décider sur une mesure isolée, pas une garantie statistique universelle.

## Ne changez pas l'instrument au milieu de la comparaison

La même version modifie la simulation Lantern et sa modélisation réseau, selon le [changelog officiel](https://github.com/GoogleChrome/lighthouse/releases/tag/v13.6.0). J'en tire une précaution : une différence entre deux rapports peut nécessiter une vérification de l'outil avant d'accuser le code livré.

Ma règle serait stricte : même version de Lighthouse, même navigateur, mêmes paramètres et même machine pour comparer deux versions du site. Lors d'une montée de version de l'outil, je referais d'abord la référence sur le site inchangé. Sinon, le comparatif mélange deux expériences.

## Le résultat attendu : une décision traçable

Google définit les [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals) comme des mesures de l'expérience réelle : chargement, réactivité et stabilité visuelle. Une campagne de tests de laboratoire ne constitue donc pas, à elle seule, une preuve d'amélioration vécue par les visiteurs.

Je demanderais au développeur un livrable court : les douze URL, les versions utilisées, les écarts observés et les corrections proposées. Puis je confronterais cette recette aux données terrain disponibles.

**Mon avis :** l'audit multi-URL vaut surtout par la discipline qu'il rend plus facile. Pour la prochaine livraison, choisissez vos douze pages avant de regarder les scores. Vous saurez enfin ce que votre feu vert couvre. Et ce qu'il ne couvre pas.
