---
title: "Search Console échoue à relire certains robots.txt"
description: "Le bouton de recrawl robots.txt échoue sur certaines propriétés. Diagnostic, cache de 24 heures et vérifications utiles côté serveur."
date: "2026-07-27"
tags: ["seo", "actualite"]
---

Search Console échoue à relire certains robots.txt : ne pilotez pas le crawl au bouton

Le rapport robots.txt de Google Search Console rencontre ce 27 juillet un problème intermittent. Plusieurs propriétaires voient la demande de nouvelle exploration échouer avec le message **« Re-crawl request failed »**, suivi d'une erreur inconnue. Le dysfonctionnement touche plusieurs propriétés chez certains utilisateurs, mais pas tous les sites.

John Mueller a d'abord indiqué que la fonction marchait sur son site. Il a ensuite reproduit l'erreur sur d'autres propriétés et annoncé qu'il allait examiner le sujet. À ce stade, Google n'a communiqué ni périmètre précis ni délai de correction.

Ce n'est pas une catastrophe SEO. C'est en revanche un bon rappel : le bouton n'est pas un mécanisme de déploiement.

## Ce que fait réellement la demande de nouvelle exploration

Le rapport robots.txt liste les fichiers détectés sur les **20 principaux hôtes** d'une propriété de domaine. Il affiche la dernière récupération, la taille du fichier et les éventuelles erreurs de syntaxe. Son historique conserve les versions différentes observées pendant 30 jours.

La commande « Request a recrawl » sert aux situations urgentes : correction d'une erreur de récupération ou déblocage d'URL importantes. Google précise lui-même qu'elle n'est généralement pas nécessaire, car ses robots reviennent régulièrement lire le fichier.

Surtout, cette commande ne garantit pas l'exploration immédiate des URL nouvellement autorisées. Elle demande seulement à Google de relire robots.txt. Il reste ensuite à Googlebot à planifier le crawl des pages concernées.

Confondre ces deux étapes conduit à de mauvais diagnostics. Le fichier peut être à jour chez Google alors que les pages restent peu explorées. À l'inverse, Search Console peut afficher une ancienne date pendant que votre serveur livre déjà la bonne version aux robots.

## Le cache robots.txt peut durer 24 heures

Google indique mettre généralement robots.txt en cache pendant **24 heures au maximum**. Cette durée peut augmenter si l'actualisation échoue, notamment en cas de timeout ou de réponse 5xx. Elle peut aussi varier selon l'en-tête HTTP `Cache-Control: max-age`.

Le comportement en cas d'erreur serveur mérite d'être connu. Pendant les 12 premières heures d'un problème 5xx, Google suspend le crawl du site tout en retentant de récupérer robots.txt. Ensuite, il peut utiliser la dernière version valide pendant 30 jours. Un fichier critique servi en 503 n'est donc pas un détail technique.

Autre point souvent oublié : robots.txt dépend du **protocole, de l'hôte et du port**. Le fichier de `https://example.com` ne gouverne pas automatiquement `https://www.example.com`, un sous-domaine d'images ou une origine HTTP. Le rapport Search Console peut afficher jusqu'à deux origines pour chacun des 20 hôtes principaux. Vérifiez la bonne ligne avant de conclure à un retard.

## Que faire pendant l'incident

Ne cliquez pas vingt fois sur le bouton. Cela n'apporte aucune preuve supplémentaire.

Commencez par tester directement l'URL concernée :

1. Vérifiez que `/robots.txt` répond en **HTTP 200** sur la bonne origine.
2. Contrôlez le contenu réellement livré avec `curl`, sans vous fier au cache du navigateur.
3. Vérifiez l'encodage UTF-8, la taille inférieure à **500 Kio** et les règles `Allow` ou `Disallow`.
4. Consultez les logs serveur pour confirmer les passages de Googlebot sur le fichier.
5. Contrôlez une URL stratégique avec l'inspection en direct de Search Console.

Si la modification ouvre une section importante, surveillez ensuite les requêtes Googlebot vers ces pages et leur retour dans les rapports d'indexation. Le succès du recrawl robots.txt n'est pas le KPI final. **Le vrai signal est la reprise du crawl utile**, puis l'indexation lorsque la page la mérite.

## Mon avis : une fonction d'urgence ne doit jamais devenir une dépendance

Une mise en production SEO correcte doit fonctionner même si Search Console est indisponible pendant 24 heures. Le fichier doit répondre proprement, les règles doivent être testées avant déploiement et les logs doivent permettre de vérifier ce que Google reçoit.

Pour une migration ou la réouverture massive d'un répertoire, prévoyez aussi un sitemap XML propre, un maillage interne accessible et des réponses HTTP stables. Le bouton peut accélérer la prise en compte. Il ne compense ni une architecture faible ni un serveur instable.

L'incident du jour semble limité à l'interface ou au traitement des demandes sur certaines propriétés. Tant que Google n'en dit pas davantage, inutile d'inventer une panne générale de crawl. Vérifiez le fichier en production, documentez l'heure du changement et laissez Googlebot refaire son cycle. En SEO technique, **une preuve serveur vaut mieux qu'un bouton vert**.
