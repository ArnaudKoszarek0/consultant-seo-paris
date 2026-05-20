---
title: "Google ajoute hasAdultConsideration : vrai sujet SEO e-commerce"
description: "Google recommande hasAdultConsideration pour les données structurées produit. Un détail technique, mais important pour les sites e-commerce concernés par les produits adultes."
date: "2026-05-20"
tags: ["seo", "actualite"]
---

# Google ajoute `hasAdultConsideration` : petit champ Schema.org, vrai sujet SEO e-commerce

Google vient d'ajouter officiellement la propriété `hasAdultConsideration` dans sa documentation Merchant listing et Product variant. Ce n'est pas une Core Update. C'est un détail technique qui évite des problèmes réels : produits mal compris, restrictions mal appliquées, flux Merchant Center incohérent, visibilité Shopping instable.

La propriété sert à signaler qu'un produit est destiné aux adultes. Google précise que cela aligne les données structurées de Search avec l'attribut `adult` de Merchant Center. La valeur supportée côté Google est `https://schema.org/SexualContentConsideration`.

Dit simplement : si vous vendez des produits concernés par la politique adulte de Google, vous devez le déclarer proprement, aussi dans le HTML.

## Ce que Google change concrètement

Avant, le signal existait surtout dans les flux Merchant Center. Maintenant, Google recommande aussi ce marquage dans les données structurées produit visibles par Search.

Deux types sont concernés :

- Merchant listing, pour les résultats produits enrichis dans Google Search ;
- Product variant, pour les variantes produit comme taille, couleur, modèle ou déclinaison.

Google indique que les produits adultes peuvent rester éligibles aux annonces Shopping et aux listings gratuits, mais avec des restrictions selon l'âge et le pays. Le but n'est donc pas de cacher ces produits. Le but est de permettre à Google d'appliquer les règles correctement.

C'est important. Beaucoup de marchands confondent conformité et perte de visibilité. En SEO e-commerce, l'absence de signal clair coûte souvent plus cher que le signal lui-même.

## Pourquoi c'est un sujet SEO, pas seulement Merchant Center

Le SEO e-commerce en 2026 n'est plus seulement une affaire de title, H1 et maillage interne. Google recoupe HTML, données structurées, flux produit, prix, images, avis, entités et restrictions légales.

Quand le flux Merchant dit une chose et que la page produit ne dit rien, Google doit arbitrer. Et quand Google arbitre, le marchand perd du contrôle.

`hasAdultConsideration` réduit cette zone floue.

Exemple simple : une boutique vend des produits de lingerie, des cosmétiques intimes ou des accessoires réservés aux adultes. Tous les produits ne sont pas forcément adultes au sens strict de Google. Certains le sont. D'autres non. Si le flux Merchant est précis mais que le balisage Schema.org reste générique, l'audit devient bancal.

Côté SEO, cela touche quatre points :

1. La cohérence des signaux produit entre la page, le flux et Merchant Center.
2. La conformité géographique, car les restrictions varient selon les pays.
3. La qualité des données structurées, qui devient un vrai actif technique.
4. La stabilité des impressions produit, surtout sur les requêtes transactionnelles.

Ce n'est pas un levier magique. Personne ne va gagner 30 % de trafic parce qu'il ajoute une propriété JSON-LD. En revanche, un site mal balisé peut se retrouver avec des produits filtrés, mal classés ou moins bien compris.

## Qui doit agir maintenant ?

Pas tout le monde. C'est là qu'il faut rester cartésien.

Les sites classiques de prêt-à-porter, décoration, bricolage ou alimentaire n'ont aucune raison d'ajouter ce champ partout. Ce serait même une mauvaise idée. Une donnée structurée inutile est du bruit.

Les sites concernés sont ceux qui vendent des produits liés à :

- contenu sexuel ou nudité ;
- accessoires pour adultes ;
- produits destinés à améliorer l'activité sexuelle ;
- certaines catégories de lingerie explicite ;
- produits soumis à restriction d'âge selon les marchés.

Pour ces sites, je recommande un audit en 3 étapes.

D'abord, comparer les catégories produits avec la politique adulte de Google Merchant Center. Pas avec l'intuition du dirigeant. Avec la documentation.

Ensuite, vérifier le flux Merchant. L'attribut `adult` doit être présent uniquement sur les produits concernés. Pas au niveau du site entier par facilité.

Enfin, aligner le JSON-LD produit. Sur les pages concernées, ajouter `hasAdultConsideration` avec la valeur supportée par Google. Sur les variantes, le signal doit suivre la déclinaison.

## Le vrai message derrière cette mise à jour

Google continue de déplacer le SEO vers la **gouvernance de données**. Les vieux audits qui regardent seulement les balises visibles sont incomplets.

Une fiche produit moderne doit être lisible par un humain, mais aussi par Search, Merchant Center, Shopping, l'IA, les filtres pays et les filtres âge. Chaque incohérence devient un risque.

Mon avis est simple : les données structurées ne servent plus seulement à obtenir un rich result. Elles servent à éviter que Google interprète votre catalogue à votre place.

C'est moins sexy qu'une stratégie de contenu. C'est plus proche de la plomberie. Mais en e-commerce, la plomberie fait souvent la différence entre un catalogue exploitable et un catalogue fragile.

Si votre site vend des produits sensibles, ce champ mérite une place dans votre backlog technique. Pas dans six mois. Maintenant.
