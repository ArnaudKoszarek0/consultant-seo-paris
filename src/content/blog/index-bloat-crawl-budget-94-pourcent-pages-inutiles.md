---
title: "94% de vos pages ne servent à rien : le guide du crawl budget en 2026"
description: "Google ignore 94% des pages web. Index bloat, crawl budget, signaux de qualité : comment reprendre le contrôle de votre indexation."
date: "2026-03-18"
tags: ["seo", "seo technique", "indexation"]
---

94% de vos pages ne servent à rien. Google le sait, et il agit en conséquence.

En mars 2026, le constat est brutal : **94% des pages indexées sur le web ne génèrent aucun trafic Google**. Zéro clic. Zéro impression. Rien. Et le problème ne vient pas de votre contenu. Il vient de la façon dont Google choisit ce qu'il indexe.

## L'indexation sélective, le vrai filtre invisible

Google ne crawle plus tout. Il **choisit**. Son crawl budget, c'est le nombre d'URLs que Googlebot peut et veut explorer sur votre site. Et ce budget est limité.

La formule est simple : **Crawl Budget = min(Capacité du serveur, Demande de Google)**. Si votre serveur répond lentement, Google réduit la cadence. Si vos pages n'intéressent personne, Google baisse la priorité.

Concrètement, un site e-commerce avec 40 000 URLs indexables et 4 000 crawls par jour met **10 jours** pour faire un cycle complet. Pendant ce temps, vos nouvelles pages de produits attendent. Vos pages importantes sont noyées dans la masse.

## L'index bloat : le tueur silencieux de votre SEO

Le vrai problème porte un nom : **index bloat**. C'est quand Google indexe des milliers de pages inutiles qui diluent votre crawl budget.

Pages de filtres e-commerce avec toutes les combinaisons couleur/taille/matière. Pages de recherche interne. Paramètres d'URL dupliqués. Sessions utilisateurs. Chaque URL crawlée pour rien est une URL importante qui attend son tour.

John Mueller l'a confirmé : Google revisit les pages importantes en priorité et **met en file d'attente** les pages de faible valeur. Le problème, c'est que vos pages de filtres consomment du crawl sans jamais être indexées utilement. Elles volent des ressources à vos pages produits, vos guides d'achat, votre contenu à forte valeur ajoutée.

## Les signaux que Google utilise pour trier

En 2026, Google évalue chaque page sur plusieurs critères avant de décider si elle mérite d'être indexée :

**Unicité et valeur.** Les pages dupliquées ou à contenu mince sont crawlées mais pas indexées. Si votre page n'apporte rien de nouveau par rapport à ce qui existe déjà, elle reste au fond de la pile.

**Pertinence utilisateur.** Les produits à forte marge, les nouveautés et le contenu frais passent devant les pages éphémères ou les archives obsolètes.

**Signaux techniques.** Des dates lastmod précises, des codes 404/410 propres, pas de chaînes de redirections. Chaque signal technique mal configuré ralentit le processus.

**Popularité.** Les pages qui reçoivent des liens internes solides et du trafic direct sont recrawlées plus souvent. Le cercle vertueux fonctionne dans les deux sens.

## Comment récupérer votre crawl budget

La bonne nouvelle : c'est un problème technique avec des solutions concrètes. Voici les actions qui fonctionnent, dans l'ordre de priorité.

**1. Bloquer les pages inutiles via robots.txt.** Les filtres e-commerce combinés (`/shoes/*color=*size=`), la recherche interne, les pages de tri. Tout ce qui génère des milliers de variantes sans valeur unique doit être bloqué.

**2. Canonicaliser les doublons.** Chaque variante d'une page doit pointer vers une URL canonique unique. Pas de canonical auto-référent par défaut sur tout le site. Ciblez.

**3. Segmenter vos sitemaps.** Un sitemap pour les produits phares. Un pour les catégories. Un pour le blog. Google traite les sitemaps par ordre de priorité perçue. Facilitez-lui le travail.

**4. Accélérer votre serveur.** Un temps de réponse sous **500ms** permet à Googlebot de crawler **15% de pages en plus** par session. CDN, cache serveur, optimisation des requêtes SQL. Chaque milliseconde compte.

**5. Renforcer le maillage interne.** Les pages orphelines ne sont jamais découvertes rapidement. Reliez vos pages stratégiques depuis vos pages à fort PageRank. Le crawl suit les liens.

## Le test qui fait mal

Allez dans Google Search Console. Rapport "Pages". Regardez le ratio entre pages indexées et pages "Discovered - currently not indexed" ou "Crawled - currently not indexed". Si ce ratio dépasse 30%, vous avez un problème d'index bloat.

Autre test : exportez vos pages indexées et croisez avec vos données Analytics. Combien génèrent au moins une visite par mois ? Si la réponse est en dessous de 20%, vous gaspillez votre crawl budget.

## Ce que ça change pour votre stratégie SEO

Publier plus de contenu n'est plus une stratégie. **Publier mieux, et éliminer le superflu**, c'est la stratégie de 2026.

Google devient de plus en plus sélectif. Le Core Update de mars 2026 a renforcé cette tendance en privilégiant les contenus originaux et à forte valeur E-E-A-T. Les sites qui ont compris ça avant les autres gagnent. Les autres continuent d'alimenter une machine qui ignore 94% de ce qu'ils produisent.

La question n'est plus "combien de pages ai-je dans l'index ?" mais "combien de mes pages indexées travaillent vraiment pour moi ?". Si la réponse vous met mal à l'aise, il est temps d'agir.
