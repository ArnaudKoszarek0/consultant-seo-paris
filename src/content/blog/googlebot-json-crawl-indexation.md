---
title: "Googlebot ne parse pas le JSON : ce que cela change en SEO"
description: "Googlebot télécharge les fichiers JSON sans les parser. Voici comment distinguer crawl, indexation et validation dans un audit SEO technique."
date: "2026-08-25"
tags: [\"seo\", \"actualite\"]
---

Google vient de rappeler une distinction que beaucoup de développeurs et de consultants SEO mélangent encore : **Googlebot ne parse pas les fichiers JSON pendant le crawl**. Il les télécharge. Leur lecture intervient plus tard, dans les systèmes d'indexation ou dans le produit Google concerné.

Ce détail technique, confirmé le 25 août 2026 par Gary Illyes, n'est pas une querelle de vocabulaire. Il change la façon d'interpréter les logs serveur, de diagnostiquer un flux produit et de tester des données structurées.

## Crawl et indexation ne font pas le même travail

Le crawl sert d'abord à récupérer une ressource. Googlebot appelle une URL, reçoit un code HTTP, des en-têtes et un corps de réponse. À ce stade, il n'a pas besoin de comprendre chaque propriété d'un objet JSON.

Le parsing vient ensuite. Pour Google Search, c'est l'indexeur qui analyse le contenu téléchargé. Pour Merchant Center, Gary Illyes estime que l'infrastructure et le parseur sont probablement partagés, même s'il précise ne pas avoir travaillé dans cette équipe.

La chaîne réelle ressemble donc à ceci :

1. découverte de l'URL ;
2. requête HTTP ;
3. téléchargement du fichier ;
4. transmission au système concerné ;
5. parsing, validation et exploitation éventuelle.

Une requête Googlebot avec un statut 200 ne prouve donc pas que le JSON a été compris. Elle prouve seulement que Google a pu le récupérer.

## Ce que cela ne signifie pas

Non, Google n'abandonne pas le JSON-LD. Le balisage `Product`, `Article`, `Organization` ou `BreadcrumbList` reste exploitable lorsqu'il est intégré proprement dans une page HTML. Le crawler télécharge le document. L'indexeur extrait ensuite le bloc `<script type="application/ld+json">` et tente de l'interpréter.

Même logique pour un fichier JSON autonome. Il peut être récupéré sans devenir une page indexable ni produire le moindre résultat enrichi. Sa présence dans les logs ne suffit pas.

C'est là que naissent beaucoup de faux diagnostics. Un développeur voit Googlebot appeler `/api/products.json` et conclut que Google utilise les données. Un consultant constate un JSON valide dans le navigateur et suppose que le balisage fonctionne. Dans les deux cas, la conclusion va plus vite que la preuve.

## Les contrôles à faire sur un site

Premier contrôle : le serveur doit renvoyer un vrai code `200`, sans authentification, défi JavaScript ou blocage WAF. Un `403`, un `429` ou une redirection en boucle arrête le processus avant toute analyse.

Deuxième contrôle : le JSON doit être syntaxiquement valide. Une virgule finale, un guillemet mal échappé ou du HTML injecté dans la réponse peut faire échouer le parseur après un téléchargement pourtant réussi. Le navigateur est permissif. Un parseur automatisé l'est souvent moins.

Troisième contrôle : vérifiez le bon niveau de preuve. Les logs répondent à la question " Google a-t-il téléchargé la ressource ? ". Le test des résultats enrichis répond à " Google comprend-il les propriétés éligibles ? ". Search Console indique ensuite si ces données produisent des éléments détectés ou des erreurs à l'échelle du site.

Quatrième contrôle : surveillez la taille. La documentation Google indique une limite générale de 15 Mo pour son infrastructure de crawl, avec des seuils différents selon les produits et les formats. Elle cite notamment Googlebot, qui peut appliquer une limite plus basse, par exemple 2 Mo. Un export JSON obèse n'est pas une architecture SEO.

## Mon avis : arrêtons de parler de Googlebot comme d'un cerveau unique

Google Search est une chaîne de systèmes. Le crawler récupère. Le moteur de rendu exécute certains éléments. L'indexeur extrait et interprète. D'autres composants décident de l'éligibilité, du classement et de l'affichage.

Tout mettre sous l'étiquette " Googlebot " produit des audits flous. Et les audits flous donnent des recommandations inutiles : modifier le contenu alors que le WAF bloque le téléchargement, corriger le crawl alors que le JSON est invalide, ou attendre un rich result pour un type de donnée non pris en charge.

La bonne méthode est plus cartésienne : **identifier l'étape qui échoue, puis tester cette étape avec l'outil adapté**. Le rappel de Gary Illyes paraît minuscule. En SEO technique, c'est précisément ce genre de détail qui sépare une hypothèse d'un diagnostic.

Source : [Search Engine Roundtable, 25 août 2026](https://www.seroundtable.com/google-crawlers-dont-parse-json-41936.html) et [documentation officielle sur les crawlers Google](https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers).
