---
title: "Schema.org publie ses statistiques d'usage : utile, mais pas pour copier la foule"
description: "Schema.org publie des statistiques mensuelles d'usage des types et propriétés. Un bon outil d'audit SEO, à condition de ne pas confondre popularité et performance."
date: "2026-06-10"
tags: ["seo", "actualite"]
---

# Schema.org publie ses statistiques d'usage : utile, mais pas pour copier la foule

Schema.org vient d'ajouter des statistiques d'usage publiques sur ses types et propriétés. Ce n'est pas une révolution SEO. C'est une donnée de terrain. Elle peut aider un audit, si on la lit correctement.

Le principe est simple. Sur chaque terme Schema.org, on peut voir une estimation de son adoption sur le web. Exemple cité par Search Engine Roundtable : le schéma `author` apparaît sur plus de 10 millions de domaines, alors que `Event` reste sous le million. Les données sont publiées avec Google, mises à jour chaque mois, disponibles en CSV et JSON sur GitHub.

La première réaction de beaucoup de référenceurs sera prévisible : regarder les schémas les plus utilisés, puis les ajouter partout. Mauvaise idée.

## Ce que mesure vraiment cette donnée

La statistique n'est pas un compteur de pages. Elle est agrégée au niveau domaine. Si un site utilise `Product` sur 8 000 fiches produits, il compte comme un seul domaine utilisant `Product`. C'est important, parce que cela évite de laisser Amazon, eBay ou un gros média écraser toute la lecture.

Les volumes ne sont pas exacts non plus. Schema.org fonctionne par tranches : moins de 1 000 domaines, 10 000 à 100 000, 100 000 à 1 million, etc. C'est volontaire. Les chiffres exacts bougent trop avec le crawl et les changements de template.

Dernier point : ces statistiques viennent de l'infrastructure de crawl publique de Google. Donc ce n'est pas "le web" au sens absolu. C'est le web vu par Google. Les sites bloqués par robots.txt ou mal crawlés n'entrent pas proprement dans la photo.

Dit autrement : c'est une carte de popularité, pas une vérité de ranking.

## Pourquoi c'est intéressant pour le SEO

Jusqu'ici, quand un consultant disait "ce type de balisage est courant" ou "cette propriété est marginale", il parlait souvent à partir d'expérience, d'outils privés ou de crawls limités. Maintenant, on a un point de référence public.

C'est utile pour trois choses.

D'abord, **prioriser**. Sur un site e-commerce, `Product`, `Offer`, `price`, `availability`, `AggregateRating` et `Brand` restent des bases logiques. Ce n'est pas une garantie de gain SEO, mais c'est un signal que l'écosystème sait la lire.

Ensuite, auditer les plugins. Beaucoup de plugins WordPress, Shopify ou Prestashop génèrent du JSON-LD automatiquement. Un plugin qui injecte 40 propriétés exotiques mais oublie `offers` ou `image` n'est pas avancé. Il est juste bruyant.

Enfin, défendre les choix techniques auprès d'un client ou d'une équipe dev. Dire "ce type est utilisé par plus de 10 millions de domaines" donne un argument plus concret.

## Le piège : croire que populaire veut dire performant

C'est là qu'il faut rester cartésien. Le balisage Schema.org n'est pas un bouton magique. Google a déjà retiré ou réduit plusieurs affichages enrichis au fil des années, dont les FAQ rich results. Et beaucoup de données structurées ne produisent aucun résultat visible dans la SERP.

Un schéma très utilisé peut être utile. Il peut aussi être utilisé partout parce qu'un plugin l'ajoute par défaut. Nuance.

À l'inverse, un schéma dans une tranche faible n'est pas forcément inutile. Schema.org le dit clairement : certains termes spécialisés, médicaux, juridiques ou gouvernementaux restent naturellement sous les 1 000 domaines, parce que le marché concerné est réduit. Pour un site très spécialisé, c'est parfois justement là que se trouve la précision sémantique.

Le bon réflexe n'est donc pas : "qu'est-ce que tout le monde utilise ?". Le bon réflexe est : **qu'est-ce qui décrit précisément mon contenu, mon offre, mon auteur, mon entité et mes preuves ?**

## Ma recommandation pratique

Je l'utiliserais comme un outil d'audit, pas comme une checklist aveugle.

Sur un site client, je commencerais par exporter les templates principaux : page produit, article, catégorie, page locale, auteur, événement, recette, service. Ensuite je vérifierais trois choses :

1. Les types Schema.org correspondent-ils vraiment au contenu affiché ?
2. Les propriétés essentielles sont-elles présentes dans le HTML initial ou le JSON-LD ?
3. Les données visibles par l'utilisateur correspondent-elles aux données structurées ?

Le troisième point est le plus sous-estimé. Si votre JSON-LD promet une note, un prix ou un auteur que l'utilisateur ne voit pas clairement, vous créez une dette de confiance.

Cette nouveauté Schema.org va aider les bons audits. Elle va aussi produire des recommandations paresseuses du type "ajoutez les 20 schémas les plus populaires". Il faudra trier.

Le SEO technique sérieux, en 2026, ce n'est pas empiler du balisage pour plaire à un validateur. C'est fournir à Google, aux moteurs IA et aux outils de recherche une représentation **exacte, stable et vérifiable** de ce que la page est réellement.

La donnée d'usage Schema.org est donc une bonne nouvelle. À condition de s'en servir comme un repère, pas comme une béquille.
