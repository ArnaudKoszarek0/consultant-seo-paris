---
title: "Search Console révèle les requêtes AI Mode conversationnelles"
description: "Des requêtes comme « oui » apparaissent dans Search Console. Voici comment repérer les conversations AI Mode sans inventer un KPI."
date: "2026-08-06"
tags: ["seo", "actualite"]
---

Google Search Console vient de révéler un angle mort assez gênant de ses propres rapports IA. Les requêtes issues d'AI Mode peuvent apparaître dans le rapport Performance classique, alors que le rapport dédié à l'IA générative ne donne aucune requête.

Oui, vous avez bien lu. **Le rapport général montre parfois ce que le rapport spécialisé masque.**

## Des requêtes comme « oui » ou « oui, le prix » dans Search Console

Le 6 août 2026, plusieurs SEO ont signalé des requêtes inhabituelles dans Search Console : « yes », « yes go on » ou encore « yes, pricing ». Ce ne sont pas des mots-clés classiques. Ce sont vraisemblablement des réponses de suivi formulées dans AI Mode.

John Mueller a rappelé le fonctionnement officiel : lorsqu'un utilisateur pose une question complémentaire dans AI Mode, Google la considère comme **une nouvelle requête**. Les impressions, la position et les clics générés par la nouvelle réponse sont donc attribués à cette requête.

Voilà pourquoi un simple « oui » peut remonter dans le rapport Performance. L'utilisateur ne tape pas nécessairement ce mot dans la barre de recherche traditionnelle. Il poursuit une conversation déjà engagée avec Google.

Attention toutefois : **ce signal n'est pas une preuve absolue**. Une requête très courte ou très longue peut provenir d'une recherche classique. Search Console ne fournit aucun filtre « AI Mode » dans le tableau des requêtes. On travaille donc avec un faisceau d'indices, pas avec une attribution certaine.

## Le paradoxe du rapport IA générative

Google a lancé ses rapports de performance IA générative le 3 juin 2026, d'abord auprès d'un sous-ensemble de sites. Ils couvrent AI Overviews, AI Mode et certaines fonctions génératives de Discover.

Ces rapports donnent cinq lectures utiles : les impressions, les pages visibles, les pays, les appareils pour Search et les dates. La granularité temporelle descend jusqu'à l'heure. En revanche, **la dimension requête manque**. Les clics ne sont pas non plus présentés comme dans le rapport Performance standard.

Dans le même temps, Google confirme que les données IA restent intégrées aux chiffres globaux de Search Console. Résultat : le rapport spécialisé isole mieux la visibilité IA, mais le rapport général conserve davantage de contexte sémantique.

C'est bancal. Pour piloter une stratégie éditoriale, connaître la page citée sans connaître la question posée limite fortement l'analyse.

## Comment isoler les requêtes probablement issues d'AI Mode

La méthode la plus sérieuse consiste à exporter les requêtes du rapport Performance, puis à construire un segment exploratoire. Je recommande quatre filtres :

1. **Requêtes très courtes et conversationnelles** : « oui », « pourquoi », « continue », « et le prix ».
2. **Requêtes anormalement longues** : phrases complètes, contexte détaillé, pronoms et demandes comparatives.
3. **Apparition récente** : comparaison des 28 derniers jours avec les 28 jours précédents.
4. **Association page-requête cohérente** : la page affichée doit logiquement répondre à une étape secondaire de la conversation.

Il faut ensuite comparer ce segment avec les dates et les pages du rapport IA générative. Si les deux séries progressent ensemble, l'hypothèse devient plus solide. Pas certaine, mais exploitable.

Évitez en revanche de créer un KPI nommé « trafic AI Mode » à partir de cette seule méthode. Appelez-le plutôt **requêtes conversationnelles probables**. La nuance protège votre reporting et évite de vendre une précision que Google ne donne pas.

## Ce que cela change pour le contenu SEO

Ces requêtes de suivi montrent que la recherche ne s'arrête plus à une intention principale. Une page peut être mobilisée au troisième ou au quatrième échange, sur une objection, un tarif, une limite ou une comparaison.

Il faut donc écrire des contenus capables de répondre aux étapes secondaires : conditions, délais, coûts, alternatives, exceptions et preuves. Pas en ajoutant 25 FAQ artificielles. En structurant la page autour des vraies décisions de l'utilisateur.

Mon avis est simple : **le mot-clé reste utile, mais il ne suffit plus à décrire le parcours de recherche**. Search Console commence à laisser apparaître les traces de conversations qu'elle ne sait pas encore expliquer proprement.

Pour l'instant, il faut les traiter comme des indices. Les analyser, les rapprocher des pages citées et documenter les hypothèses. C'est moins confortable qu'un filtre officiel. C'est aussi beaucoup plus honnête.
