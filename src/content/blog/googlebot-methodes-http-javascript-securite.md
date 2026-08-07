---
title: "Googlebot envoie aussi des requêtes DELETE : ce qu'il faut auditer"
description: "Moins de 1,5 % des requêtes des crawlers Google utilisent HEAD, OPTIONS, PUT, PATCH ou DELETE. Voici quoi vérifier dans vos logs, votre WAF et vos API."
date: "2026-08-07"
tags: ["seo", "actualite"]
---

Googlebot ne se contente pas de demander des pages avec `GET`. Gary Illyes vient de rappeler que les robots de Google peuvent aussi envoyer des requêtes `HEAD`, `OPTIONS`, `PUT`, `PATCH` et même `DELETE`. Ces méthodes représentent **moins de 1,5 % des requêtes** émises par l'ensemble des crawlers Google.

Le chiffre est faible. Le sujet, lui, mérite l'attention des équipes techniques. Pas parce que Google aurait découvert une nouvelle méthode de classement. Parce que certains sites traitent encore toute requête inhabituelle comme une attaque, ou pire, l'exécutent sans garde-fou.

## Pourquoi Googlebot envoie autre chose que GET

L'explication donnée par Gary Illyes est simple : **du JavaScript déclenche ces requêtes pendant le rendu**. Google charge la page, exécute les scripts et reproduit une partie de ce qu'un navigateur ferait. Si une application appelle une API avec `OPTIONS`, `PATCH` ou `DELETE`, l'infrastructure de rendu peut suivre ce chemin.

Chaque méthode a pourtant un rôle différent :

- `GET` récupère une ressource ;
- `HEAD` récupère les en-têtes sans télécharger le corps ;
- `OPTIONS` vérifie les méthodes autorisées, notamment lors des échanges CORS ;
- `PUT` remplace généralement une ressource ;
- `PATCH` la modifie partiellement ;
- `DELETE` demande sa suppression.

Voir `Googlebot` associé à `DELETE` dans un journal serveur peut donc surprendre. Cela ne signifie pas que Google cherche à effacer votre catalogue. Cela signifie souvent qu'un script présent sur la page a initié l'appel.

## Le vrai problème est applicatif, pas SEO

Une route qui modifie des données ne doit jamais dépendre du seul verbe HTTP pour être protégée. Si un simple `DELETE /api/product/123` fonctionne sans authentification, sans contrôle d'autorisation et sans validation CSRF lorsque celle-ci s'applique, le problème est déjà grave. Googlebot ne fait que le révéler.

Même logique pour un endpoint `PATCH` qui ajoute un article au panier, modifie une préférence ou déclenche un workflow. Un crawler, un outil de monitoring ou un navigateur automatisé peut l'appeler. **Une requête de crawl ne doit produire aucun effet de bord métier.**

Je déconseille aussi de répondre `200 OK` partout pour calmer les outils. Une méthode non prise en charge doit recevoir un **`405 Method Not Allowed`**, idéalement avec un en-tête `Allow`. Une requête non authentifiée vers une action protégée doit être refusée proprement. Un endpoint inexistant reste un `404`.

## Faut-il autoriser toutes ces méthodes dans le WAF ?

Non. Le chiffre de 1,5 % n'est pas une consigne pour ouvrir `PUT`, `PATCH` et `DELETE` à Internet sans distinction.

Il faut raisonner par route :

1. Les pages publiques acceptent généralement `GET` et `HEAD`.
2. Les prérequêtes CORS légitimes nécessitent parfois `OPTIONS`.
3. Les méthodes d'écriture restent limitées aux API concernées.
4. Toute mutation exige authentification et autorisation côté serveur.
5. Le WAF doit journaliser les refus sans bloquer aveuglément tout le domaine.

Créer une règle globale du type « autoriser si User-Agent contient Googlebot » serait une erreur. **Un User-Agent se falsifie en une seconde.** Si une exception est réellement nécessaire, Google recommande de vérifier ses crawlers par DNS inversé puis direct, ou grâce aux plages IP publiées. Mais même un crawler authentifié ne doit pas obtenir le droit de modifier des données.

## L'audit à faire dans les logs

Commencez par mesurer les méthodes reçues sur sept à trente jours. Nginx permet par exemple d'agréger le champ `$request_method`. Ensuite, croisez méthode, URL, code HTTP, User-Agent et IP.

Cherchez quatre anomalies :

- des `PUT`, `PATCH` ou `DELETE` qui répondent en `2xx` sur des routes publiques ;
- des volumes élevés d'`OPTIONS`, souvent liés à une mauvaise configuration CORS ;
- des réponses `403` massives sur des ressources indispensables au rendu ;
- des appels déclenchés par vos propres scripts vers des endpoints inutiles ou obsolètes.

Testez enfin la page avec JavaScript activé, puis désactivé. Dans l'onglet Réseau du navigateur, filtrez par méthode. On trouve parfois en dix minutes un widget tiers qui bavarde avec cinq API ou une application React qui lance une mutation au chargement.

## Mon avis

Cette actualité ne justifie ni une refonte SEO ni une nouvelle ligne dans le reporting mensuel. Elle rappelle quelque chose de plus utile : **Googlebot est devenu un client web complexe**, capable d'exécuter les comportements que nous lui servons.

La bonne réponse n'est pas de bricoler une exception pour Google. Il faut corriger l'application, limiter les méthodes par endpoint et supprimer les effets de bord au chargement. C'est meilleur pour le crawl, pour les performances et surtout pour la sécurité.
