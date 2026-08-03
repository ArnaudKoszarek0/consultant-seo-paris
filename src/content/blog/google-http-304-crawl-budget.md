---
title: "Google recommande le HTTP 304 : le réglage serveur qui économise votre crawl"
description: "Google recommande le statut HTTP 304 pour économiser les ressources de crawl. Voici comment le tester et éviter les ETag instables."
date: "2026-08-03"
tags: ["seo", "actualite"]
---

# Google recommande le HTTP 304 : le réglage serveur qui économise votre crawl

Google vient de mettre à jour sa documentation sur le **crawl budget** avec une recommandation très concrète : renvoyer un statut HTTP `304 Not Modified` quand une page n'a pas changé depuis le dernier passage du robot.

Ce n'est pas une astuce pour gagner trois positions. Le 304 n'améliore ni le contenu ni l'autorité d'une page. Il évite simplement de retransmettre inutilement le même HTML. Sur un gros site, cette économie peut libérer de la capacité serveur et rendre le crawl plus efficace.

## Un 304 n'est pas une redirection

Le code 304 appartient à la famille des statuts 3xx, mais il ne redirige vers aucune autre URL. Il répond à une requête conditionnelle.

Lors d'un premier passage, le serveur renvoie normalement la page en `200 OK`, avec un validateur comme `ETag` ou `Last-Modified`. Au passage suivant, le crawler peut envoyer `If-None-Match` ou `If-Modified-Since`. Si la ressource est identique, le serveur répond `304`, sans renvoyer le corps du document. Google peut réutiliser sa copie en cache.

La différence est simple :

- `200 OK` : en-têtes et contenu complet sont transférés ;
- `304 Not Modified` : les en-têtes utiles sont renvoyés, mais **pas le HTML complet**.

Prenons une page de 250 Ko visitée 20 000 fois sans modification. La retransmission complète représente environ **5 Go** de données. Le 304 ne supprime pas toutes les requêtes, mais il évite l'essentiel de ce transfert. Sur un catalogue de plusieurs millions d'URL, le calcul devient vite moins anecdotique.

## Google précise aussi que ses crawlers partagent la même capacité

L'autre ajout important concerne la limite de capacité du site. Google explique désormais que ses différents crawlers ont chacun leur propre demande, mais qu'ils partagent une **capacité de crawl commune** pour un même hôte.

Googlebot, Googlebot-Image, AdsBot ou les crawlers Shopping ne travaillent donc pas dans des enveloppes totalement étanches. Une forte demande de l'un peut réduire la capacité disponible pour les autres. Cela renforce l'intérêt de ne pas servir 500 Ko de HTML identique à chaque contrôle.

Attention toutefois à ne pas transformer ce conseil en obsession universelle. Google destine son guide aux sites de plus d'**un million de pages** dont le contenu change régulièrement, aux sites de plus de **10 000 pages** mises à jour chaque jour, ou aux domaines ayant beaucoup d'URL « Détectée, actuellement non indexée ». Pour un site vitrine de 80 pages correctement exploré, le chantier sera rarement prioritaire.

## Comment vérifier si votre serveur gère correctement le 304

Le test se fait en deux temps. Commencez par récupérer les en-têtes :

```bash
curl -I https://www.exemple.fr/page/
```

Cherchez `ETag` ou `Last-Modified`. Rejouez ensuite une requête conditionnelle avec la valeur reçue :

```bash
curl -I -H 'If-None-Match: "valeur-etag"' https://www.exemple.fr/page/
```

Si la page n'a pas changé, le résultat attendu est `HTTP/2 304`. Avec `Last-Modified`, utilisez plutôt l'en-tête `If-Modified-Since`.

Ne testez pas uniquement la page d'accueil. Échantillonnez les catégories, fiches produits, articles, pages paginées et ressources statiques. Vérifiez aussi qu'un vrai changement de contenu invalide bien le cache et produit un nouveau `200`. Un 304 servi sur une page modifiée est pire qu'un transfert inutile : il maintient une version périmée.

## Le piège des ETag instables

Un `ETag` généré différemment à chaque requête ne sert à rien. Même problème si deux serveurs derrière un répartiteur calculent des valeurs incompatibles. Le robot reçoit alors systématiquement un `200`, alors que le contenu n'a pas bougé.

Sur un CMS, je contrôlerais également les pages personnalisées, les cookies et l'en-tête `Vary`. Le cache ne doit jamais faire confondre deux versions réellement différentes. Et je regarderais les logs serveur : proportion de 200 et 304 pour les crawlers Google, poids transféré, temps de réponse et fréquence par type d'URL.

## Ce qu'il faut retenir

Le HTTP 304 n'est pas un nouveau facteur de classement. C'est de la **discipline d'infrastructure**. Google rappelle ici une règle saine : ne mobilisez pas du processeur, de la bande passante et du temps de crawl pour renvoyer un document strictement identique.

Avant d'acheter plus de serveur ou de réclamer davantage de crawl, commencez par vérifier vos URL inutiles, vos erreurs 5xx, vos temps de réponse, vos sitemaps et votre cache HTTP. Le 304 vient dans cette chaîne. Bien configuré, il ne fait pas de miracle. Il évite juste de gaspiller des ressources, ce qui est déjà beaucoup.
