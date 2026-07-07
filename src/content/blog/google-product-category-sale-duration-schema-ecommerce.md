---
title: "Google Product.category et dates de promo : le balisage e-commerce se précise"
description: "Google ajoute Product.category et les dates de promotion au balisage Merchant Listing. Ce que les e-commerçants doivent corriger côté SEO technique."
date: "2026-07-07"
tags: ["seo", "actualite"]
---

# Google ajoute Product.category et les dates de promotion au balisage Merchant Listing : petit détail, gros signal e-commerce

Le 7 juillet 2026, Google a mis à jour sa documentation Merchant Listing. Deux ajouts : la propriété Product.category et une clarification sur les dates effectives des prix promotionnels via validFrom, validThrough et priceValidUntil.

Ce n'est pas une révolution. C'est mieux que ça : un signal propre pour les sites e-commerce qui veulent arrêter de laisser Google deviner leur catalogue.

Google aligne ici les données structurées Schema.org avec les attributs Merchant Center product_type, google_product_category et sale_price_effective_date. En clair, le flux produit et le balisage HTML doivent raconter la même histoire.

Et sur beaucoup de sites, ce n'est pas le cas.

## Product.category : une catégorie déclarée, pas seulement une page rangée dans un menu

Jusqu'ici, un produit pouvait être compris par Google via son titre, sa description, son fil d'Ariane, son URL, ses liens internes, son flux Merchant Center et son contexte de page. Maintenant, Google documente explicitement l'usage de Product.category pour les résultats marchands.

La propriété peut recevoir deux types d'information :

- une catégorie libre définie par le marchand, proche de product_type ;
- une catégorie standardisée, proche de google_product_category.

La nuance compte.

Une catégorie marchand décrit votre logique business : "Robes longues bohèmes", "Chaussures trail homme", "Canapés convertibles 3 places". Une catégorie Google rapproche le produit d'une taxonomie plus standard. Les deux peuvent cohabiter, mais elles ne servent pas exactement le même rôle.

Mon avis est simple : si vous avez un catalogue sérieux, **ne laissez pas uniquement le menu porter cette information**. Le menu change. Les URLs changent. Les facettes créent du bruit. Le balisage produit, lui, donne une déclaration directe dans la page.

Pour un site de 50 produits, l'impact sera discret. Pour un site de 50 000 références, c'est une autre histoire. La catégorisation devient un problème d'échelle, de crawl, de matching Shopping et de compréhension par les systèmes IA de Google.

## Les dates de promotion : le piège classique des prix barrés

Le deuxième ajout est encore plus opérationnel. Google clarifie comment déclarer la durée d'une promotion dans les données structurées Product.

Les propriétés concernées :

- validFrom : début de validité ;
- validThrough : fin de validité ;
- priceValidUntil : date limite de validité du prix.

Pourquoi c'est sensible ? Parce que les prix promo sont souvent gérés n'importe comment côté SEO.

Un prix barré reste affiché trop longtemps. Une promo est active dans le flux Merchant Center mais absente du HTML. Un template ajoute une date globale sur toutes les offres. Un cache garde une ancienne valeur pendant 24 heures. Résultat : Google reçoit des signaux contradictoires.

Et quand Google reçoit des signaux contradictoires, il choisit rarement ce qui arrange le marchand.

La mise à jour explique aussi où placer ces informations : sur le noeud **Offer** ou sur **PriceSpecification** selon la structure utilisée. Ce point technique paraît secondaire, mais il évite un problème fréquent : un JSON-LD valide syntaxiquement, mais ambigu sémantiquement.

Un balisage qui passe le test des résultats enrichis n'est pas automatiquement un bon balisage. Il peut être valide et mal foutu.

## Ce que je vérifierais dès maintenant

Pas besoin de lancer un chantier de six mois. Il faut comparer flux Merchant Center, HTML rendu, JSON-LD et données visibles utilisateur sur plusieurs types de pages : produit simple, variante, promo, rupture, prix membre.

Ensuite, mesurer les écarts : catégorie absente, prix promo sans date, date expirée, devise manquante, prix différent entre HTML et balisage. Chaque écart est une dette.

Enfin, corriger à la source. Si le JSON-LD est généré par un plugin, il ne doit pas inventer. Il doit lire les mêmes données que le front et que le flux marchand. Sinon vous créez trois vérités parallèles.

## Le vrai sujet : Google veut des catalogues plus lisibles par machine

Cette mise à jour confirme une tendance lourde : Google rapproche Search, Shopping, Merchant Center et ses expériences IA. Le produit n'est plus seulement une page indexée. C'est une entité commerciale structurée.

Les sites qui gagnent ne seront pas ceux qui ajoutent du JSON-LD à la va-vite. Ce seront ceux qui tiennent une base produit cohérente : catégorie, variante, prix, stock, promotion, image, marque, avis, livraison.

**Le SEO e-commerce devient moins littéraire et plus logistique.**

C'est moins glamour qu'un article "top 10 tendances SEO". Mais c'est là que se joue une partie du trafic rentable.

Ma recommandation : ajoutez Product.category si vos catégories sont propres, déclarez correctement les fenêtres de promotion, et surtout contrôlez la cohérence entre flux, page et balisage. Google ne demande pas de la magie. Il demande des données exactes, au bon endroit, au bon moment.
