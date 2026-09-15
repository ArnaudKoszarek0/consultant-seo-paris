---
title: "CrUX mesure enfin le poids réel des publicités"
description: "Google ajoute Ad Count, Ad Density et Ad Weight à CrUX. Voici comment auditer la pression publicitaire sans inventer un nouveau facteur SEO."
date: "2026-09-15"
tags: ["seo", "actualite"]
---

Google vient d'ajouter quatre métriques publicitaires au Chrome User Experience Report, plus connu sous le nom de CrUX. L'annonce est datée du 15 septembre 2026. Pour les sites éditoriaux financés par la publicité, ce n'est pas un détail technique. C'est enfin une façon de mesurer la pression publicitaire telle qu'elle est réellement vécue dans Chrome.

Jusqu'ici, les équipes SEO surveillaient surtout le LCP, l'INP et le CLS. Une page pouvait donc afficher des Web Vitals corrects tout en restant pénible à consulter : écran saturé de bannières, scripts publicitaires lourds, processeur mobilisé et contenu repoussé sous la ligne de flottaison. Les nouveaux indicateurs mettent des chiffres sur ce problème.

## Quatre métriques pour mesurer le poids réel des publicités

Chrome teste désormais quatre dimensions dans CrUX :

- Ad Count : nombre moyen de publicités visibles dans le viewport ;
- Ad Density : part moyenne de l'écran occupée par les publicités ;
- Ad Weight, Network Usage : volume de données publicitaires transférées, en octets ;
- Ad Weight, CPU Usage : temps processeur consommé par les publicités, en millisecondes.

La nuance importante tient au mot " réel ". CrUX repose sur des données agrégées provenant d'utilisateurs de Chrome ayant accepté la synchronisation de leur historique et le partage de statistiques d'usage. On ne mesure donc pas seulement une page dans un laboratoire propre, avec une connexion idéale et sans interaction. On observe ce qui arrive sur le terrain.

Ces données sont accessibles dans la CrUX API, la CrUX History API et dans CrUX Vis pour les sites affichant des publicités tierces. Google précise toutefois qu'elles restent expérimentales. Leur disponibilité doit augmenter pendant le mois à venir.

## Ce n'est pas un nouveau facteur de classement

Il faut éviter le raccourci habituel : nouvelle métrique Google ne signifie pas nouveau signal SEO.

Google indique explicitement que ces quatre mesures ne font pas partie des Core Web Vitals. Aucun seuil recommandé n'est publié. On ne peut donc pas affirmer qu'une densité publicitaire de 20 %, 30 % ou 40 % entraîne une baisse de position. Une telle conclusion serait inventée.

Cela ne rend pas les données inutiles. Une publicité lourde peut dégrader l'INP, retarder le LCP, provoquer des déplacements de mise en page et ralentir la navigation. Elle peut aussi réduire le nombre de pages vues, augmenter les sorties et faire baisser les revenus à long terme. Le lien avec le SEO est souvent indirect, mais l'impact économique est très concret.

Mon avis est simple : **le SEO ne doit pas servir à alimenter une page que la monétisation rend illisible**. Gagner 8 % de revenu par session n'a aucun intérêt si le retour des visiteurs, l'abonnement ou la profondeur de visite s'effondrent derrière.

## Comment auditer un site éditorial avec ces données

Commencez par segmenter les modèles de pages : article, catégorie, accueil, comparatif et page longue. Une moyenne globale masque les vrais problèmes. Les templates qui génèrent le plus de trafic organique doivent être examinés en priorité.

Comparez ensuite les quatre métriques publicitaires avec les données CrUX habituelles. Une hausse simultanée du poids CPU et de l'INP orientera l'analyse vers les scripts d'enchères, les rafraîchissements automatiques ou les créations trop lourdes. Une forte densité dans le viewport, associée à un LCP médiocre, peut signaler que le contenu principal arrive trop tard à l'écran.

Ajoutez enfin les données métier : revenu pour mille sessions, pages par session, taux d'abonnement et retour à 30 jours. Le bon arbitrage n'est pas " moins de publicité ". C'est **plus de revenu par unité de gêne créée**.

Pour agir, quatre leviers sont évidents : limiter les emplacements au-dessus de la ligne de flottaison, réserver les dimensions des blocs pour éviter les sauts, charger plus tard les formats hors écran et supprimer les partenaires publicitaires dont le coût CPU dépasse leur contribution au chiffre d'affaires.

## CrUX devient un outil de gouvernance éditoriale

Cette nouveauté dépasse la performance web. Elle donne aux équipes SEO, publicité et produit une base commune. Jusqu'ici, chacun défendait son tableau de bord. Le SEO parlait vitesse, l'adops parlait remplissage, la direction parlait revenu.

Avec **Ad Count, Ad Density et Ad Weight**, la discussion peut enfin porter sur le même objet : l'expérience réellement livrée à l'utilisateur. Google n'impose encore aucun seuil. Tant mieux. À chaque éditeur de définir ce qu'il accepte, puis de mesurer le coût réel de ses choix.

Sources : [annonce officielle de Chrome](https://developer.chrome.com/blog/crux-ad-metrics?hl=en) et [présentation des métriques par Search Engine Roundtable](https://www.seroundtable.com/google-ad-metrics-crux-42093.html).
