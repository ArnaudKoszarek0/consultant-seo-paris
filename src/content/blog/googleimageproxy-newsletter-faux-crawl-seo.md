---
title: "GoogleImageProxy : vos newsletters faussent-elles le suivi du crawl SEO ?"
description: "Google documente GoogleImageProxy le 23 novembre 2026. Comment séparer les images des emails du crawl Search pour éviter un faux diagnostic SEO."
date: "2026-11-23"
tags: ["seo", "actualite"]
---

Le **23 novembre 2026**, Google a ajouté douze clients existants à sa documentation de crawl. Parmi eux, GoogleImageProxy mérite une lecture attentive pour les équipes qui suivent leurs visites Google dans les logs. Aucun nouveau robot n'a été lancé : Google documente des clients déjà actifs, souvent rencontrés sur les serveurs. C'est précisé dans son [journal officiel des changements](https://developers.google.com/crawling/docs/changelog).

Mon angle est simple : **une image chargée depuis un email ne doit pas devenir une visite SEO dans votre reporting**. Avant de commenter une hausse du crawl, regardez ce que vous comptez.

## GoogleImageProxy ne vient pas consulter votre fiche produit

Selon la [fiche officielle Google Image Proxy](https://developers.google.com/crawling/docs/crawlers-fetchers/google-user-triggered-fetchers#google-image-proxy), ce service récupère des images externes intégrées aux emails et aux documents lorsqu'un utilisateur les ouvre. Gmail fait partie des exemples cités. L'identifiant à repérer dans le User-Agent est `GoogleImageProxy`.

Le même visuel peut donc servir dans une fiche produit et dans une newsletter. J'en tire une conséquence pratique : son téléchargement par ce proxy ne constitue pas une preuve que Google Search a exploré la fiche. Je le sortirais du compteur utilisé pour mesurer cette exploration.

Attention aussi à la mesure email. L'[aide Gmail](https://support.google.com/mail/answer/145919?hl=fr) explique que les images sont analysées pour la sécurité et que leur chargement ne permet pas aux expéditeurs de lire les cookies du navigateur. Elle précise qu'un expéditeur peut parfois savoir si son email a été ouvert. Je n'utiliserais donc pas les seules requêtes image pour reconstruire un parcours utilisateur.

## Le mauvais dénominateur raconte une fausse croissance

Prenons un **exemple fictif**, pas une statistique de Google.

Un tableau de bord compte 10 000 requêtes contenant le mot « Google » lundi, puis 16 000 mardi. L'équipe présente une progression de 60 %. Mardi, une newsletter a justement été envoyée.

Après classement des requêtes, imaginons que les 6 000 appels supplémentaires correspondent tous à GoogleImageProxy. Le volume total a bien augmenté. Mais le compteur d'exploration Search que l'on voulait suivre n'a pas bougé.

Dans ce scénario, je refuse le commentaire « Google s'intéresse davantage au catalogue ». Il confond deux usages d'une infrastructure. Et il peut déclencher un mauvais arbitrage : accélérer la publication de fiches alors que le changement observé vient d'une campagne email.

Je conserverais les deux courbes. Celle des images email intéresse l'exploitation et le marketing. Celle de l'exploration Search répond à une autre question. Les fusionner ne les rend pas plus utiles.

## La correction que je demanderais au responsable du reporting

Je commencerais par **sept jours de logs**, avec une journée d'envoi de newsletter et une journée sans campagne. C'est mon périmètre de contrôle proposé, pas une exigence Google.

Pour chaque requête candidate, je garderais l'heure, le chemin demandé, le statut HTTP, le User-Agent et l'adresse IP. Ensuite, je créerais une catégorie distincte « images email et documents », sans supprimer les données brutes. Il faut pouvoir revenir au détail quand une règle de classement se révèle mauvaise.

L'identification demande une précaution : Google rappelle qu'un User-Agent peut être usurpé. Sa [procédure de vérification des requêtes](https://developers.google.com/crawling/docs/crawlers-fetchers/verify-google-requests) propose le contrôle des plages IP publiées ou une vérification DNS inverse puis directe. Je séparerais donc les clients déclarés des clients vérifiés.

Pour la recette, je prendrais vingt lignes classées dans cette nouvelle catégorie et vérifierais manuellement les ressources demandées. Puis je recalculerais l'ancien indicateur sur la même période. Livrable attendu : un écart expliqué, avec des exemples consultables. Pas seulement une nouvelle couleur dans le graphique.

## Ne bloquez pas un proxy pour embellir vos chiffres

La [documentation des fetchers déclenchés par les utilisateurs](https://developers.google.com/crawling/docs/crawlers-fetchers/google-user-triggered-fetchers) indique qu'ils ignorent généralement les règles robots.txt. Ce fonctionnement est distinct du crawl automatique classique.

Ma recommandation reste de corriger le classement avant d'envisager une restriction d'accès. Dans cette recette, je ne toucherais ni au pare-feu ni aux images des newsletters. Je modifierais uniquement le traitement des logs, puis je comparerais les résultats avant et après.

**Un bon indicateur doit avoir un périmètre explicite.** Appelez votre compteur « requêtes de clients Google » s'il mélange leurs usages. Réservez « exploration Search » à ce que votre méthode permet réellement d'identifier. Cette différence tient dans un libellé, mais elle change la décision prise derrière.
