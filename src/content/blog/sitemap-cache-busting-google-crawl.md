---
title: "Sitemap cache-busting : pourquoi ?v=timestamp ne force pas Google à crawler"
description: "Ajouter un timestamp aux URL de sitemap ne force pas Google à crawler. Voici pourquoi cette astuce brouille les signaux et comment utiliser lastmod correctement."
date: "2026-09-05"
tags: ["seo", "actualite"]
---

# Sitemap cache-busting : pourquoi `?v=timestamp` ne force pas Google à crawler

Une nouvelle astuce circule dans les audits techniques : ajouter chaque jour un paramètre du type `?v=timestamp` aux URL des sitemaps enfants. L'objectif serait de présenter une adresse neuve à Google afin de provoquer un nouveau téléchargement, puis d'accélérer le crawl des pages.

Sur le papier, le raisonnement paraît malin. En pratique, il détourne une technique de cache web et brouille un signal qui doit rester simple. **John Mueller vient de qualifier cette méthode de mauvaise idée.** Il a raison.

## Le cache-busting fonctionne, mais pas pour tout

Le cache-busting est normal sur un fichier CSS, JavaScript ou une image. Une URL comme `app.js?v=42` indique au navigateur qu'il doit récupérer une nouvelle version au lieu de réutiliser une copie en cache. Le fichier change, son identifiant de version aussi.

Un sitemap n'est pas une ressource d'interface. C'est un document de découverte qui fournit au moteur une liste d'URL canoniques et leur date réelle de modification. Son adresse doit rester stable :

`https://example.com/sitemap-produits.xml`

La remplacer quotidiennement par `sitemap-produits.xml?v=1788566400`, puis par une autre variante le lendemain, ne rend pas les pages plus importantes. Cela crée une succession artificielle d'URL pour un même fichier.

Mueller résume le problème ainsi : vous signalez que l'URL canonique d'un contenu change sans arrêt. Ce n'est bon ni pour les moteurs ni pour votre suivi technique.

## Télécharger le sitemap ne force pas le crawl des pages

C'est l'erreur centrale. Le téléchargement d'un sitemap et l'exploration des URL qu'il contient sont deux décisions différentes.

Google peut récupérer le XML, constater que 50 000 URL sont identiques à celles de la veille, puis ne pas les revisiter. La limite standard d'un sitemap est de **50 000 URL ou 50 Mo non compressés**. Sur un gros site, réclamer chaque jour le rechargement de dizaines de sitemaps inchangés consomme des requêtes sans démontrer la moindre valeur éditoriale.

Un sitemap n'est pas un bouton « indexer maintenant ». Il aide Google à découvrir et prioriser. Le moteur conserve sa propre logique selon l'historique de modification, la qualité des pages, le maillage interne, les réponses HTTP et la capacité du serveur.

Changer le timestamp du conteneur ne change pas la valeur de son contenu.

## `lastmod` existe précisément pour ce besoin

Le protocole prévoit déjà l'élément `<lastmod>`. Il faut y inscrire la date de dernière modification significative de chaque URL, au format W3C, par exemple `2026-09-05` ou avec une heure complète.

Le mot important est « significative ». Modifier une date de copyright ou régénérer le HTML à l'identique ne justifie pas forcément une nouvelle date. Si toutes les URL affichent le jour courant à chaque génération, Google peut finir par ignorer le signal.

La bonne méthode est sobre :

- conserver des URL de sitemap stables ;
- mettre à jour `<lastmod>` lorsque le contenu principal change ;
- segmenter les sitemaps par type d'URL ou rythme de publication ;
- renvoyer des codes HTTP cohérents, notamment `200` ou `304` ;
- vérifier dans les logs ce que Googlebot télécharge réellement.

Pour un catalogue, séparez les produits actifs, les catégories et les contenus éditoriaux. Vous pourrez mesurer le crawl de chaque groupe au lieu de créer du bruit avec un paramètre quotidien.

## Ce qu'il faut auditer maintenant

Recherchez `?v=`, `?t=`, `timestamp` ou une date dynamique dans les balises `<loc>` de votre index de sitemaps. Vérifiez aussi la configuration du CMS, du CDN et du générateur XML. Cette mécanique peut avoir été ajoutée par une agence, un plugin ou un développement interne sans apparaître dans l'administration.

Comparez ensuite trois données sur 14 à 30 jours : les téléchargements de sitemaps dans les logs, les visites Googlebot sur les URL importantes et les changements d'indexation dans Search Console. Si le XML est repris quotidiennement mais que les pages ne le sont pas, le prétendu gain est réfuté par vos propres données.

Retirez alors le paramètre rotatif et gardez une adresse permanente. Pas besoin de redirection exotique. Servez simplement le sitemap à son URL propre, soumettez cette URL dans Search Console et surveillez les logs.

## Mon avis : ce hack maquille le vrai problème

Quand une page n'est pas crawlée, la cause est rarement l'absence d'un timestamp dans l'URL du sitemap. Elle se trouve plus souvent dans un **maillage interne faible**, un stock massif de pages similaires, des temps de réponse médiocres ou un contenu jugé peu prioritaire.

Le cache-busting donne l'impression d'agir vite. C'est séduisant, parce qu'il évite de regarder l'architecture et la qualité du corpus. Mais un signal artificiellement rafraîchi ne transforme pas une URL secondaire en page utile.

Gardez vos sitemaps stables, vos dates honnêtes et vos logs exploitables. En SEO technique, la conformité au protocole est moins spectaculaire qu'une astuce virale. Elle fonctionne aussi beaucoup mieux.
