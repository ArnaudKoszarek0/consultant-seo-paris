---
title: "Indexing API Google : piloter les quotas sans promettre l'indexation"
description: "Google clarifie les quotas de son Indexing API le 16 octobre 2026. Gérer les notifications des offres d'emploi sans confondre réception et indexation."
date: "2026-10-16"
tags: ["seo", "actualite"]
---

Le **16 octobre 2026**, Google a actualisé la page des quotas de son Indexing API. Son journal précise qu'il s'agit de documenter les limites et le processus actuels, puis de retirer un formulaire obsolète. Pas d'annonce d'une nouvelle capacité d'indexation universelle. [Source : journal Search Central](https://developers.google.com/search/updates).

Pour un site de recrutement, cette clarification mérite un contrôle du connecteur. Mon angle est simple : **piloter les notifications comme une file de travail**, plutôt que vendre un bouton qui promet de forcer Google.

## Ce que les quotas permettent réellement

La documentation affiche **200 requêtes de publication par jour et par projet par défaut**, mises à jour et suppressions comprises. Elle indique aussi 180 lectures de métadonnées par minute et 380 requêtes par minute, tous endpoints confondus. Le compteur quotidien repart à minuit, heure du Pacifique. L'utilisation reste gratuite. [Source : quotas officiels](https://developers.google.com/search/apis/indexing-api/v3/quota-pricing).

Attention au raccourci : une modification de documentation ne prouve pas que ces valeurs viennent de changer. Je ne présenterais donc pas cette actualité comme une baisse de quota ou un durcissement algorithmique. Ce serait raconter davantage que ce que Google annonce.

Mon conseil : comparez les valeurs de votre console aux hypothèses du code. Cherchez les limites inscrites en dur, les horaires de remise à zéro et les alertes absentes. Une intégration doit fonctionner avec son quota réel, pas avec celui d'un tutoriel ancien.

## Réserver le connecteur aux bonnes pages

L'API concerne les pages comportant `JobPosting`, ou `BroadcastEvent` intégré dans `VideoObject`. Elle ne constitue donc pas une voie officiellement prévue pour soumettre tout un catalogue marchand ou tous les articles d'un blog. Google avertit aussi que le contournement des quotas, notamment par plusieurs comptes, peut entraîner une révocation d'accès. [Source : démarrage Indexing API](https://developers.google.com/search/apis/indexing-api/v3/quickstart).

Je commencerais l'audit par un export des URL réellement envoyées. Pas par la configuration affichée dans l'interface du plugin. Prenez un échantillon de **30 notifications**, ouvrez les pages et vérifiez leur nature. Ce nombre est une proposition de contrôle, pas un seuil Google.

Si le connecteur envoie des fiches sans rapport avec le périmètre autorisé, corrigez le ciblage avant de chercher à augmenter sa cadence.

## Un lot de 100 reste 100 notifications

Google permet de regrouper jusqu'à 100 appels dans une requête HTTP. Le quota reste compté à l'URL : dix notifications regroupées consomment dix requêtes, pas une. Le regroupement réduit les connexions, il ne multiplie pas le quota. [Source : fonctionnement des lots](https://developers.google.com/search/apis/indexing-api/v3/using-api#send-batch-indexing-requests).

Prenons un exemple fictif : un jobboard doit notifier 120 nouvelles offres et 50 suppressions. Cela représente 170 opérations. Avec un plafond quotidien de 200, il reste 30 opérations disponibles, avant toute autre consommation.

Je prévoirais une file persistante avec l'URL, le type d'événement, son horodatage et le résultat du dernier envoi. Je dédupliquerais les mises à jour identiques en attente. Pour les événements successifs concernant une même offre, je conserverais l'historique tout en calculant la notification encore pertinente.

Surtout, je donnerais aux suppressions une priorité explicite. À mon sens, laisser remonter une offre déjà fermée est un problème métier plus urgent que gagner quelques minutes sur une annonce nouvelle.

Avant une notification de retrait, Google demande toutefois une réponse `404` ou `410`, ou une directive `noindex` sur la page. Fermer une offre dans le back-office ne suffit pas à remplir cette condition. [Source : retrait d'URL](https://developers.google.com/search/apis/indexing-api/v3/using-api#remove-url).

## Arrêter de confondre accusé de réception et indexation

Une réponse **HTTP 200** signifie que Google a reçu une notification et peut tenter une réexploration. Elle ne prouve pas l'indexation. La lecture des métadonnées renseigne la réception des notifications, pas la date d'entrée ou de sortie de l'index. [Source : réponses et métadonnées de l'API](https://developers.google.com/search/apis/indexing-api/v3/using-api).

Je demanderais donc deux indicateurs séparés : le taux de notifications acceptées et le devenir des pages contrôlées. Un voyant vert sur le premier ne doit jamais colorer automatiquement le second.

Pour la recette, choisissez quelques offres nouvelles, modifiées et retirées. Consignez chaque étape observée. Si le prestataire ne montre que des réponses 200, demandez-lui une preuve complémentaire avant de conclure au succès SEO.

## Le ticket à ouvrir aujourd'hui

Je proposerais un ticket limité : vérifier le périmètre des URL, rapprocher la consommation du quota et tester le traitement d'un dépassement sans perdre les événements en attente. Livrable attendu : un journal lisible, une reprise maîtrisée et des statuts honnêtes.

Mon avis : **une bonne intégration sait attendre et expliquer son état**. Elle ne promet pas une indexation qu'elle ne contrôle pas. Cette clarification du 16 octobre fournit une excellente occasion de faire cette vérification, sans lancer une refonte inutile.
