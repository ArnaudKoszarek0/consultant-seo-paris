---
title: "Search Console perd deux jours de crawl : bug de reporting ou panne SEO ?"
description: "Les 15 et 16 août manquent dans les statistiques de crawl Search Console. Voici comment distinguer un bug de reporting d'une vraie panne Googlebot."
date: "2026-08-22"
tags: ["seo", "actualite"]
---

Google Search Console perd deux jours de crawl : ne confondez pas bug de reporting et panne SEO

Les **15 et 16 août 2026 ont disparu du rapport Statistiques sur l'exploration de Google Search Console**. La courbe passe du 15 au 18 août, avec un vide au milieu. Plusieurs référenceurs l'ont signalé le 20 puis le 21 août. Au moment d'écrire ces lignes, Google n'a pas encore corrigé l'affichage.

Faut-il paniquer ? Non. Faut-il ignorer le sujet ? Non plus.

Ce bug rappelle une règle simple : **Search Console est un outil de reporting, pas le journal comptable de Googlebot**. Quand une donnée manque dans son interface, cela ne prouve pas que Google a cessé d'explorer votre site.

## Ce que l'on sait vraiment

Le problème touche le rapport accessible dans **Paramètres > Statistiques sur l'exploration**. Deux journées manquent. Ce rapport présente notamment :

- le nombre total de requêtes de crawl ;
- le volume téléchargé ;
- le temps de réponse moyen ;
- les codes HTTP rencontrés ;
- le type de fichier et le type de Googlebot ;
- l'état des hôtes, du DNS et du fichier robots.txt.

Google précise lui-même que ce rapport comptabilise la plupart des requêtes, mais que certaines peuvent ne pas apparaître. Les exemples d'URL ne sont pas exhaustifs non plus. Autrement dit, cet écran est une **vue agrégée et partielle**.

Ce n'est d'ailleurs pas le premier trou de données. Des incidents comparables ont été observés en novembre 2021, février 2022, mai 2022 et octobre 2025. Le scénario le plus probable reste donc un défaut de collecte ou d'affichage dans Search Console, pas un arrêt mondial de Googlebot pendant 48 heures.

## La mauvaise réaction : toucher au site

Modifier le robots.txt, renvoyer les sitemaps, changer les canonicals ou augmenter les ressources serveur sur la seule foi d'un graphique vide serait une faute méthodologique.

Un rapport défaillant n'est pas une preuve technique. Avant toute correction, il faut chercher un signal indépendant.

Commencez par les **logs d'accès du serveur ou du CDN**. Filtrez les requêtes des 15 et 16 août, puis vérifiez les user-agents Googlebot. Attention aux faux bots : validez si nécessaire les IP avec une résolution DNS directe puis inverse, selon la méthode documentée par Google.

Comparez ensuite quatre éléments :

1. le volume quotidien de requêtes Googlebot ;
2. la part des réponses 200, 3xx, 4xx et 5xx ;
3. le temps de réponse du serveur ;
4. les visites sur robots.txt et les sitemaps.

Si les logs montrent un crawl habituel, le diagnostic est terminé : **le bug est dans le tableau de bord**.

## Quand le vide devient un vrai problème

Il faut investiguer davantage si plusieurs signaux convergent. Par exemple, aucun passage vérifié de Googlebot dans les logs, des erreurs DNS, une hausse des 5xx, un robots.txt inaccessible, des URL importantes non explorées et une baisse progressive de l'indexation.

L'état de l'hôte dans Search Console mérite alors votre attention. Google indique qu'un taux d'échec important sur le DNS, la connexion serveur ou robots.txt peut réduire le crawl. Pour robots.txt, une indisponibilité persistante peut même ralentir ou suspendre certaines explorations.

Mais là encore, **on ne diagnostique jamais une panne avec une seule courbe**. On croise Search Console, logs serveur, monitoring d'uptime, CDN, données d'indexation et trafic organique.

## Ce que ce bug dit de votre pilotage SEO

Sur un petit site de moins de 1 000 pages, Google estime que ce niveau de détail est rarement nécessaire. Sur un catalogue, un média ou une plateforme avec des centaines de milliers d'URL, c'est différent. Le crawl devient une donnée d'exploitation.

Mon avis est net : une entreprise qui dépend fortement du SEO ne doit pas dépendre exclusivement de Search Console pour surveiller Googlebot. Conservez au moins **30 à 90 jours de logs exploitables**, créez des alertes sur les 5xx et suivez séparément les familles d'URL stratégiques.

Le trou des 15 et 16 août sera probablement réparé sans conséquence. La vraie question est ailleurs : si Search Console perd deux jours de données, êtes-vous capable de vérifier ce qui s'est réellement passé ? Si la réponse est non, votre problème n'est pas Google. C'est votre observabilité SEO.
