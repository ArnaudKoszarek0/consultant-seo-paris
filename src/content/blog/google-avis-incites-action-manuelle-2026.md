---
title: "Google durcit les règles sur les avis incités"
description: "Google interdit explicitement les avis faux ou obtenus contre un avantage non divulgué. Voici les risques SEO et l'audit à mener."
date: "2026-07-27"
tags: ["seo", "actualite"]
---

Google durcit les règles sur les avis : une remise ne peut plus être cachée

Google a mis à jour, le 24 juillet 2026, sa documentation sur les extraits d'avis. Le changement tient en quelques lignes, mais il vise une pratique très répandue : obtenir un avis contre une remise, un bon d'achat ou un produit offert, puis présenter cet avis comme spontané.

La règle est désormais explicite. Google interdit les **avis faux** et les **avis incités dont l'avantage n'est pas divulgué clairement**. Et cette interdiction concerne à la fois le contenu visible sur la page et les données structurées `Review` ou `AggregateRating`.

Ce n'est donc pas une simple précision cosmétique sur Schema.org. Google rappelle qu'une violation peut conduire à une **action manuelle**, suivie d'une demande de réexamen après correction.

## Ce que Google interdit exactement

Deux situations sont citées dans la documentation officielle :

- un avis qui ne repose pas sur une expérience réelle du produit ou du service ;
- un avis rédigé en échange d'argent, d'une remise, d'un bon, d'un produit gratuit ou d'un autre avantage, sans mention claire et visible de cette contrepartie.

Le mot important est **visible**. Ajouter une discrète astérisque en bas de page ou une mention vague dans les conditions générales ne suffit pas. Si une personne a reçu le produit gratuitement, le lecteur doit le comprendre au moment où il lit son avis.

Autre rappel utile : le balisage ne doit pas raconter une histoire différente de la page. Une note de 4,8/5 injectée en JSON-LD mais absente du contenu visible reste une mauvaise mise en œuvre. Google demande que le texte des avis et la note associée soient accessibles aux utilisateurs sur l'URL balisée.

## Le risque ne se limite pas à la perte des étoiles

Beaucoup de sites considèrent les étoiles dans Google comme un bonus de CTR. C'est trop léger. La nouvelle formulation associe directement les règles d'éligibilité des extraits d'avis aux actions manuelles.

Une action manuelle n'est pas une baisse algorithmique floue. Elle apparaît dans Search Console. Selon son périmètre, elle peut retirer le résultat enrichi, toucher certaines pages ou dégrader plus largement la visibilité du site.

Mon avis est simple : **aucune étoile ne mérite ce risque**. Si votre système de collecte n'est pas propre, retirez temporairement le balisage avant de bricoler une conformité de façade.

## Les programmes de fidélité ne sont pas tous interdits

Google n'interdit pas d'offrir un avantage. Il interdit de masquer cet avantage et de publier des témoignages qui ne reposent pas sur une expérience réelle.

Une campagne du type « laissez un avis et recevez 10 % » devient donc dangereuse si la contrepartie n'est pas affichée à côté de l'avis. Elle l'est encore plus si seuls les clients satisfaits sont sollicités. Ce filtrage, souvent appelé *review gating*, produit une note artificiellement favorable.

À l'inverse, un test produit peut rester publiable si trois conditions sont réunies : le testeur a réellement utilisé le produit, la contrepartie est indiquée sans ambiguïté et l'avis conserve sa liberté éditoriale. La transparence ne transforme pas automatiquement un contenu médiocre en bon contenu, mais son absence crée désormais un risque documentaire évident.

## L'audit à faire cette semaine

Commencez par exporter toutes les pages contenant `Review` ou `AggregateRating`. Un crawl avec Screaming Frog, Sitebulb ou un script maison suffit. Contrôlez ensuite cinq points :

1. **L'avis existe réellement sur la page**, pas seulement dans le JSON-LD.
2. **L'auteur a vécu l'expérience** décrite.
3. **Toute contrepartie est divulguée** près du témoignage.
4. La note agrégée correspond aux avis affichés et n'est pas importée d'un autre site.
5. Les avis sur votre propre entreprise ne sont pas balisés comme s'ils provenaient d'un tiers indépendant.

Vérifiez aussi les emails automatisés. Les scénarios « donnez-nous 5 étoiles et obtenez un coupon » sont à supprimer. Demandez un retour honnête, positif ou négatif, avec la même formulation pour tous les clients.

Enfin, testez quelques URL dans le Rich Results Test, puis surveillez le rapport **Actions manuelles** de Search Console. Le test valide une syntaxe. Il ne valide ni l'authenticité de l'avis ni la transparence commerciale.

## La vraie leçon SEO

Google ne cherche pas seulement un JSON-LD correct. Il veut pouvoir relier une note à une expérience crédible, présentée honnêtement. Les sites qui ont traité les avis comme un stock de chiffres à pousser dans Schema.org ont maintenant une dette à rembourser.

L'audit technique prend une heure. L'audit des processus marketing demande davantage de courage. C'est pourtant le second qui évitera la sanction.
