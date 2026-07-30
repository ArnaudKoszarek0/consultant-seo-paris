---
title: "Stock e-commerce incohérent : Google refuse de dire quelle donnée gagne"
description: "Page produit, Schema.org et flux Merchant Center affichent des stocks différents ? Google ne publie aucun ordre de priorité. Voici l'audit à mener."
date: "2026-07-30"
tags: ["seo", "actualite"]
---

# Stock e-commerce incohérent : Google refuse de dire quelle donnée gagne

Google vient de rappeler une règle que trop d'e-commerçants découvrent après un refus Merchant Center : quand la page, le balisage Schema.org et le flux produit indiquent des stocks différents, **Google ne publie aucun ordre de priorité**.

John Mueller a répondu le 29 juillet 2026 à un cas concret. La page visible annonçait un produit épuisé, tandis que le HTML serveur et les données structurées le déclaraient disponible. La question était simple : quelle source Google utilise-t-il pour les fiches gratuites ? Sa réponse l'est tout autant : corrigez le conflit au lieu d'essayer de comprendre quelle valeur gagnera.

C'est la bonne réponse. Un site e-commerce n'a pas trois stocks. Il a un stock, exposé par trois canaux qui doivent raconter la même chose.

## Trois sources, trois occasions de se tromper

Google peut rencontrer la disponibilité d'un produit dans :

- le contenu visible et le DOM rendu après JavaScript ;
- le HTML initial et le JSON-LD, notamment `Offer.availability` ;
- le flux envoyé à Merchant Center.

Ajoutons les données de prix, les dates de promotion et les variantes, et le risque explose. Un cache applicatif peut conserver « En stock » pendant 15 minutes. Le flux peut n'être régénéré que toutes les quatre heures. Le front React peut afficher la bonne information après un appel API, alors que le HTML livré à Google contient encore l'ancienne.

Sur un catalogue de **50 000 références**, un taux d'erreur de 1 % représente déjà 500 fiches contradictoires. Ce n'est plus une anomalie marginale. C'est un problème de gouvernance produit.

## Google ne promet aucune hiérarchie stable

La tentation classique consiste à lancer un test : modifier le JSON-LD, attendre le crawl, puis observer si Google préfère le flux ou la page. C'est une perte de temps.

Mueller précise que les sources peuvent recevoir des poids et des filtres différents, susceptibles de changer avec le temps. Une expérience concluante aujourd'hui ne constitue donc pas une règle technique pour demain. Google doit réconcilier des données reçues à des moments différents, depuis des systèmes différents. Lui envoyer des valeurs opposées revient à lui demander de choisir au hasard la version de votre commerce qu'il doit croire.

Le problème ne se limite pas au stock. La même incohérence existe lorsque `dateModified`, la date visible et le `lastmod` du sitemap divergent. Ou lorsque le prix affiché après connexion ne correspond ni au flux ni aux données structurées.

**Une donnée commerciale contradictoire est d'abord une donnée peu fiable.** Avant d'être un problème SEO, c'est un défaut d'architecture.

## L'audit à faire avant de toucher au balisage

Je commencerais par choisir 100 URL : meilleures ventes, produits épuisés, promotions, variantes et références récemment remises en stock. Pour chacune, il faut comparer automatiquement cinq états :

1. la réponse HTML brute ;
2. le DOM après exécution JavaScript ;
3. le JSON-LD ;
4. le flux Merchant Center ;
5. la donnée source dans le back-office ou l'API de stock.

Ensuite, mesurez l'écart et son âge. Une incohérence de 30 secondes pendant une vente rapide n'a pas la même gravité qu'un stock faux depuis deux jours. Mais elle doit rester bornée, documentée et surveillée.

Le bon correctif n'est pas d'ajouter une nouvelle rustine dans le template. Il faut définir **une source de vérité**, puis propager la même valeur vers le HTML, le JSON-LD et le flux. Si plusieurs équipes gèrent ces sorties, un contrôle automatique doit bloquer ou signaler les divergences.

Côté SEO, vérifiez aussi que `availability` utilise une valeur Schema.org valide, que chaque variante possède le bon identifiant et que le prix correspond à l'offre réellement achetable. Un validateur vert ne prouve rien si la page raconte autre chose.

## Mon avis : arrêtons le SEO de divination

Cette actualité est saine parce qu'elle ferme une fausse piste. Google ne donnera pas une table officielle disant « flux avant JSON-LD, JSON-LD avant contenu visible ». Même s'il la publiait, concevoir un site autour de cette priorité serait une mauvaise pratique.

Le travail sérieux consiste à réduire l'ambiguïté, pas à exploiter la façon dont le moteur la résout. Pour un e-commerce, la disponibilité, le prix et les dates sont des faits. Ils doivent être **exacts, synchronisés et vérifiables** partout.

Si vos données se contredisent, ne cherchez pas ce que Google croit. Cherchez pourquoi votre propre système n'est pas capable de répondre d'une seule voix.
