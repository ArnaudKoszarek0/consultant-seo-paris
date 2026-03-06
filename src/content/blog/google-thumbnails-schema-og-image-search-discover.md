---
title: "Google change les règles des vignettes : schema.org et og:image pèsent dans Search et Discover"
description: "Google confirme que schema.org et og:image influencent la sélection des thumbnails dans Search et Discover. Voici comment en profiter."
date: "2026-03-06"
tags: ["seo", "schema", "google discover", "og:image", "structured data"]
---

Google vient de mettre à jour sa documentation sur la sélection des vignettes dans Search et Discover. Et cette fois, c'est du concret.

Depuis le 2 mars 2026, Google confirme officiellement qu'il utilise **deux sources** pour choisir vos thumbnails : le **balisage schema.org** et la balise **og:image**. Ça parait évident dit comme ça. Sauf que jusqu'ici, la documentation restait floue sur le poids respectif de chacun.

## Pourquoi c'est important maintenant

Les vignettes, c'est votre premier contact avec l'utilisateur dans les SERP. Sur **Google Discover**, c'est encore plus vrai : une mauvaise image et votre CTR plonge de **30 à 50%** selon les tests que j'ai pu observer chez mes clients.

Le problème, c'est que beaucoup de sites laissent Google choisir tout seul. Et Google choisit mal. Il prend parfois un logo, un picto décoratif, ou pire, une image de sidebar qui n'a rien à voir avec le contenu.

## Les trois méthodes documentées par Google

Google liste désormais trois façons de lui indiquer votre image préférée.

**1. La propriété `primaryImageOfPage` en schema.org**

C'est la plus explicite. Vous l'ajoutez sur votre entité WebPage avec une URL ou un ImageObject. Google comprend immédiatement quelle image représente votre page.

**2. Les propriétés `mainEntity` ou `mainEntityOfPage`**

Si votre page décrit un produit, une recette, un article, vous attachez une image directement à l'entité principale. Google fait le lien entre le contenu et le visuel.

**3. La balise og:image**

La plus répandue. Celle que tout le monde connait pour les réseaux sociaux. Google confirme qu'il la prend en compte aussi pour Search et Discover. Point important : en cas de conflit entre plusieurs og:image, c'est la **première dans le code source** qui l'emporte.

## Les specs techniques à respecter

Google a aussi précisé les exigences minimales. Et elles ne sont pas négociables si vous visez Discover :

- **1200 pixels minimum** en largeur
- Au moins **300 000 pixels** au total (donc pas de vignettes 200x150)
- Ratio **16:9** recommandé pour Discover
- Pas de logos, pas de texte incrusté, pas de ratios extrêmes
- Directive `max-image-preview:large` dans vos meta robots

Sur ce dernier point, j'ai vu des sites perdre **100% de leur trafic Discover** simplement parce que leur plugin de sécurité ajoutait un `max-image-preview:none` par défaut. Vérifiez vos headers.

## Ce que ça change concrètement pour votre SEO

D'abord, arrêtez de considérer og:image comme un truc "pour Facebook". C'est un signal Google à part entière maintenant.

Ensuite, si vous avez du **structured data** sur vos pages (et vous devriez), ajoutez `primaryImageOfPage`. C'est trois lignes de JSON-LD et ça donne un contrôle total sur votre vignette.

Mon conseil : faites un audit rapide de vos 50 pages les plus visitées. Ouvrez le **Rich Results Test** de Google, vérifiez que votre image principale est bien détectée. Sur les pages où Google affiche le mauvais visuel, ajoutez le balisage manquant.

Pour les sites WordPress, les plugins comme Yoast ou Rank Math gèrent og:image automatiquement. Mais ils ne gèrent pas `primaryImageOfPage`. Il faut l'ajouter manuellement dans votre template JSON-LD ou via un snippet custom.

## Le vrai sujet derrière cette mise à jour

Google ne fait pas ça par gentillesse. Discover est un produit publicitaire. Des vignettes de qualité augmentent l'engagement, ce qui augmente le temps passé, ce qui augmente les revenus pub.

En donnant aux éditeurs plus de contrôle, Google s'assure que le flux Discover reste visuellement attractif. C'est un deal gagnant-gagnant, mais ne vous y trompez pas : si vos images ne passent pas la barre des **1200px en 16:9**, vous êtes simplement exclu du jeu.

Cette mise à jour s'inscrit dans la lignée du schema.org V29.4 sorti en décembre 2025, qui a renforcé le pont entre données structurées et Open Graph. La tendance est claire : Google veut que vous soyez explicite sur vos contenus. Moins il doit deviner, mieux c'est pour tout le monde.
