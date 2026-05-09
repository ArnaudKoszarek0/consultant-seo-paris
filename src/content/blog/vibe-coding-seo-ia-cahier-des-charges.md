---
title: "Vibe coding et SEO : l'IA ne remplace pas le cahier des charges"
description: "Google rappelle que le vibe coding produit des sites vite, mais pas forcément des sites techniquement propres pour le SEO."
date: "2026-05-09"
tags: ["seo", "actualite"]
---

# Vibe coding et SEO : Google rappelle que l'IA ne lit pas dans vos intentions

John Mueller et Martin Splitt ont parlé de vibe coding dans un récent épisode de Search Off The Record. Le sujet est simple : peut-on créer un site avec une IA, presque uniquement en donnant des consignes en langage naturel ?

Réponse courte : oui.

Réponse SEO : pas sans savoir exactement quoi demander.

Mueller explique qu'un prompt du type "ajoute du SEO" donne souvent un résultat superficiel. Quelques balises, un peu de données structurées, une meta description, et l'outil considère que le travail est fait. C'est le même problème qu'avec un développeur qui ne connaît pas le search : sans cahier des charges précis, il fait des hypothèses.

Et en SEO technique, les hypothèses coûtent cher.

## Le SEO doit entrer dans le brief, pas dans la retouche

Le point le plus important de cette actualité n'est pas que l'IA sait coder. On le sait déjà. Le point utile, c'est que Mueller a obtenu de meilleurs résultats quand il précisait les contraintes SEO dès le départ.

Il cite des éléments très basiques : domaine, canonicals, sitemap, robots.txt, HTML propre, liens vérifiables, tests avant publication, fichiers JavaScript non bloqués.

Rien de glamour. Mais c'est là que se joue une partie du référencement.

Un site peut être beau et techniquement idiot. Il peut afficher une page correcte dans Chrome, tout en livrant un HTML pauvre, des liens peu crawlables, des routes inutiles, ou des contenus trop dépendants du JavaScript. Ces erreurs ne se voient pas dans une capture écran. Elles se voient dans les logs, Search Console, un crawl, ou un test de rendu.

Mon avis est clair : **un site généré par IA sans contraintes SEO explicites reste un prototype**.

Il peut servir à tester une idée. Il ne doit pas devenir un actif business sans audit.

## Le piège des sites propres en apparence

Mueller dit aussi qu'un site vibe coded n'est pas forcément reconnaissable. Le HTML peut sembler correct. Le rendu peut être propre. Les frameworks utilisés peuvent ressembler à ceux de n'importe quel projet moderne.

C'est justement dangereux.

Quand un site a l'air fini, les équipes arrêtent de vérifier. Or Google ne classe pas une intention, un design ou une promesse. Google traite des URLs, du contenu accessible, des liens, des signaux, des statuts HTTP, des performances et de la cohérence.

Si l'IA choisit seule l'architecture, elle peut partir sur un site statique, une app Next.js, un CMS, une base de données, un rendu client lourd. Toutes ces options peuvent être légitimes. Mais elles ne répondent pas aux mêmes contraintes.

Un site vitrine de 20 pages n'a pas les mêmes besoins qu'un catalogue e-commerce, un média, un annuaire ou un site international. Pagination, facettes, hreflang, duplication, profondeur de clic, maillage interne : rien de tout ça ne doit être laissé au hasard.

## Ce qu'il faut demander à l'IA avant de générer

Si vous utilisez Claude Code, Gemini CLI, Cursor ou un outil équivalent, ne commencez pas par "crée un site moderne". Commencez par une spécification.

Minimum SEO :

- contenu principal visible dans le HTML initial,
- title et H1 uniques,
- meta description éditable,
- canonical explicite,
- sitemap XML automatique,
- robots.txt volontaire,
- liens internes en HTML classique,
- statuts 200, 301, 404 propres,
- images dimensionnées avec alt utile,
- données structurées limitées à ce qui est réel,
- budget JavaScript contrôlé.

Ajoutez des tests. Une URL doit répondre en 200. Une page canonique ne doit pas pointer vers une erreur. Un sitemap ne doit pas contenir de noindex. Une navigation principale ne doit pas dépendre d'un clic JavaScript impossible à crawler.

C'est là que l'IA devient intéressante : comme exécutant rapide, pas comme directeur SEO autonome.

## La compétence ne disparaît pas. Elle se déplace.

Le vibe coding va accélérer la production de sites. Beaucoup. Mais il va aussi créer une dette SEO discrète chez les équipes qui confondent vitesse et qualité.

Le futur proche, ce n'est pas "plus besoin de SEO technique". C'est plutôt : savoir transformer une stratégie SEO en instructions exploitables par une IA de développement.

La règle tient en une phrase : **si vous ne spécifiez pas le SEO, l'IA ne le devinera pas**.

Et quand Google crawle votre site, il ne voit pas votre prompt. Il voit ce que vous avez réellement mis en ligne.
