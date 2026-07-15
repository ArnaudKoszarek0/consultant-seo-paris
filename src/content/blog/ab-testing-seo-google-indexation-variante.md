---
title: "A/B testing et SEO : Google peut indexer la mauvaise variante"
description: "Un test A/B peut modifier l'indexation Google si ses variantes diffèrent fortement. Voici les règles techniques pour tester sans perdre le contrôle SEO."
date: "2026-07-15"
tags: ["seo", "actualite"]
---

# A/B testing et SEO : Google peut indexer la mauvaise variante

Un test A/B ne touche pas seulement votre taux de conversion. Quand les variantes modifient fortement le contenu ou la structure HTML, **Google peut indexer l'une ou l'autre**. John Mueller vient de le rappeler publiquement. Ce n'est pas une pénalité. C'est un problème de contrôle.

Le sujet est concret. Un grand marketplace envisageait de maintenir un groupe témoin de 10 % pendant 6 à 12 mois, sur des dizaines de millions de pages explorées. La question posée à Google était simple : que devient l'indexation si Googlebot reçoit, au fil de ses passages, deux versions réellement différentes ?

La réponse mérite mieux qu'un vague « cela dépend ».

## Google indexe ce qu'il voit au moment du crawl

John Mueller explique que, selon le dispositif, une version ou l'autre peut servir à l'indexation. Si les différences portent sur la couleur d'un bouton, son emplacement ou le libellé d'un appel à l'action, l'effet SEO sera généralement nul. Mais si une variante change le texte principal, les titres, les liens internes ou toute la structure de la page, **la différence peut apparaître dans les résultats de recherche**.

Google ne sanctionne pas un site parce que son contenu varie. Des millions de pages changent selon la session, le stock, le pays ou la personnalisation. En revanche, le moteur traite le contenu effectivement récupéré. Une page peut donc être comprise à partir de la variante B aujourd'hui, puis de la variante A lors d'un prochain passage.

Le risque réel n'est pas forcément la désindexation. C'est une indexation instable, difficile à expliquer et encore plus difficile à mesurer.

## Le piège des refontes testées comme un bouton

Beaucoup d'équipes mettent dans le même panier deux expériences qui n'ont rien à voir.

Tester « Ajouter au panier » contre « Acheter maintenant » reste un test de conversion local. Tester une fiche produit courte contre une page complète, avec description, FAQ, avis, maillage et données structurées différents, devient aussi **un test SEO involontaire**.

Même problème lors d'une refonte. Si 50 % des visiteurs reçoivent un nouveau HTML et 50 % l'ancien pendant plusieurs mois, Googlebot peut alterner entre deux représentations du même document. Vos rapports deviennent alors trompeurs : variation de position, title différent, liens internes découverts puis perdus, contenu enrichi visible de façon intermittente.

Et Googlebot ne se comporte pas comme un utilisateur classique. Il ne gère généralement pas les cookies. Si votre outil d'expérimentation dépend d'un cookie, le moteur verra surtout la version servie aux navigateurs qui les refusent. **Il faut donc tester cette version précisément**, pas seulement le parcours d'un visiteur déjà identifié.

## Les quatre règles techniques à respecter

Google publie des consignes assez nettes.

**1. Ne servez pas une version spéciale à Googlebot.** Montrer une page au moteur et une autre aux humains relève du cloaking. Un test n'autorise pas à contourner les règles antispam.

**2. Si les variantes utilisent plusieurs URL, placez une canonical vers l'URL originale.** Google recommande `rel="canonical"`, pas `noindex`. Le but est de regrouper les variantes, pas de faire disparaître une partie du test de l'index.

**3. Utilisez une redirection 302, pas une 301.** La 302 indique un déplacement temporaire. La 301 suggère que l'URL de test doit remplacer durablement l'originale. Ce n'est pas le message recherché.

**4. Arrêtez le test dès que le résultat est exploitable.** Google ne fixe pas une durée universelle. Le volume de trafic et le taux de conversion déterminent le temps nécessaire. Mais conserver artificiellement une expérience pendant 6 ou 12 mois augmente l'incertitude. Google précise même qu'un test maintenu inutilement longtemps peut être interprété comme une tentative de tromper le moteur.

## Ce que je recommande avant de lancer le test

Classez chaque expérience selon son risque SEO. Un changement purement visuel peut partir sans usine à gaz. Une modification du H1, du contenu principal, des liens internes, des données structurées, du prix affiché ou du rendu serveur doit passer par une revue SEO.

Ensuite, journalisez la variante réellement servie à Googlebot dans les logs. Vérifiez le HTML initial, la canonical, le code HTTP et les liens internes. Comparez les URL testées dans Search Console, mais ne lui demandez pas d'expliquer une alternance que votre propre système ne trace pas.

Mon avis est simple : **l'A/B testing n'est pas dangereux pour le SEO quand l'expérience est temporaire, cohérente et observable**. Il le devient quand une refonte entière est traitée comme un changement de couleur, puis laissée tourner pendant des mois sans savoir quelle version Google indexe.
