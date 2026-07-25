---
title: "Robots.txt : une règle Googlebot peut annuler vos blocages génériques"
description: "Googlebot ignore le groupe générique de robots.txt lorsqu'un bloc spécifique existe. Voici comment éviter l'indexation du spam de recherche interne."
date: "2026-07-25"
tags: ["seo", "actualite"]
---

# Robots.txt : une règle Googlebot peut annuler vos blocages génériques

Une boutique Shopify a vu Google indexer des pages de recherche interne remplies de spam alors que `/search` était bloqué dans `robots.txt`. Le fichier semblait correct. Il ne l'était pas.

John Mueller a identifié le piège : le site déclarait un groupe `User-agent: Googlebot`, puis un autre groupe `User-agent: *` contenant davantage de règles. Or Googlebot ne cumule pas les deux. Il retient **le groupe le plus spécifique** et ignore le groupe générique.

Ce détail n'est pas nouveau dans le protocole. Mais l'incident, rapporté le 25 juillet 2026, montre qu'il continue de casser des stratégies d'indexation sur des sites réels.

## Pourquoi une règle pourtant présente ne s'applique pas

Prenons ce fichier :

```txt
User-agent: Googlebot
Allow: /

User-agent: *
Disallow: /search
Disallow: /cart
```

Un humain lit souvent ceci comme une addition : Googlebot peut crawler le site, sauf `/search` et `/cart`. **Google ne le lit pas ainsi.** Le groupe Googlebot est plus précis que le groupe `*`. Il gagne donc seul. Les deux `Disallow` du second groupe ne concernent pas Googlebot.

La [documentation officielle de Google](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec) est nette : un seul groupe est sélectionné pour un crawler donné. Plusieurs groupes portant exactement le même user-agent peuvent être fusionnés. En revanche, un groupe spécifique et le groupe global ne le sont pas. L'ordre des blocs ne change rien.

La correction consiste soit à recopier les règles dans le bloc Googlebot, soit à regrouper plusieurs robots avant une liste commune :

```txt
User-agent: Googlebot
User-agent: Bingbot
Disallow: /search
Disallow: /cart
```

C'est basique. C'est aussi le genre d'erreur que les générateurs de `robots.txt`, les applications Shopify et les ajouts successifs de plugins rendent presque invisible.

## Robots.txt ne désindexe pas une URL

Deuxième confusion dans cette affaire : bloquer le crawl ne signifie pas bloquer l'indexation. Google l'écrit noir sur blanc. Une URL interdite par `robots.txt` peut encore apparaître dans les résultats si le moteur la découvre par des liens, sans titre ni extrait exploité depuis la page.

Pour retirer des pages de recherche interne, il faut généralement envoyer une directive **`noindex`** dans le HTML ou l'en-tête HTTP. Et pour que Google voie ce `noindex`, il doit pouvoir crawler l'URL. Mettre simultanément `Disallow: /search` et `noindex` peut donc produire l'effet inverse de celui recherché : Google ne consulte plus la page et ne lit jamais la consigne de désindexation.

Sur Shopify, une condition dans `theme.liquid` peut ajouter le `noindex` au template de recherche. Sur WordPress, les principaux plugins SEO le font souvent par défaut. Cela ne dispense pas de vérifier le HTML réellement servi.

## Le vrai risque : le spam de recherche interne

Le mécanisme est simple. Un spammeur lance une recherche contenant un nom de domaine, un produit douteux ou une requête commerciale. Le moteur interne génère alors une URL et une page reprenant ces termes. Si cette page est crawlable, indexable et liée quelque part, votre domaine héberge malgré lui du contenu parasite.

Une attaque peut produire **des milliers d'URL** avec des paramètres différents. Le coût n'est pas seulement visuel. Googlebot gaspille du crawl, Search Console se remplit de pages inutiles et la qualité globale du corpus se dégrade.

Je contrôlerais quatre points :

1. La présence de plusieurs groupes `User-agent` visant Googlebot.
2. Le code HTTP et le HTML des pages `/search` avec et sans résultat.
3. La présence effective de `noindex` dans la réponse initiale.
4. Les logs serveur, pour mesurer les variantes déjà demandées par Googlebot.

Après correction, les anciennes URL doivent renvoyer selon le cas un `noindex`, une **404** ou une **410**. Une redirection massive vers une catégorie générique est une mauvaise rustine : elle transforme des URL parasites en signaux ambigus.

## Mon avis

Le fichier `robots.txt` fait rarement gagner des positions. En revanche, une mauvaise règle peut laisser Google crawler exactement ce que vous vouliez fermer.

La leçon du jour est simple : **ne relisez pas un robots.txt comme un texte, testez-le comme une configuration**. Vérifiez quel groupe s'applique réellement à Googlebot, puis séparez clairement contrôle du crawl et contrôle de l'indexation. En SEO technique, une astérisque mal comprise suffit parfois à ouvrir plusieurs milliers de portes.
