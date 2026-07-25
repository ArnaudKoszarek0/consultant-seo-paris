---
title: "Avis incités : Google durcit les données structurées Review"
description: "Google interdit explicitement les avis faux ou incités non déclarés dans les données structurées Review. Voici l'audit SEO à mener."
date: "2026-07-25"
tags: [\"seo\", \"actualite\"]
---

Google vient d'ajouter une phrase très claire à sa documentation sur les données structurées d'avis : **n'intégrez pas d'avis faux ou incités sans transparence**, ni dans la page, ni dans le balisage. Ce n'est pas une révolution algorithmique. C'est un avertissement opérationnel pour les e-commerçants, comparateurs et éditeurs qui veulent conserver leurs étoiles dans les résultats.

## Ce que Google interdit désormais noir sur blanc

La nouvelle consigne vise deux cas précis :

- l'avis qui ne repose pas sur une expérience réelle du produit ou du service ;
- l'avis obtenu contre un avantage, sans mention visible de cette contrepartie.

L'avantage peut être de l'argent, une remise, un bon d'achat ou un produit gratuit. **Le problème n'est donc pas automatiquement l'incitation. Le problème est l'incitation cachée.** Une marque peut organiser un test produit. Elle doit simplement indiquer clairement que l'auteur a reçu le produit ou une compensation.

Google demande aussi que cette règle soit respectée dans le contenu visible et dans le JSON-LD. Copier une note propre dans `aggregateRating` alors que les avis affichés racontent autre chose n'est pas une optimisation. C'est une incohérence vérifiable.

## Pourquoi les étoiles sont un actif SEO fragile

Le balisage `Review` ou `AggregateRating` peut faire apparaître une note, des étoiles et un nombre d'avis dans un résultat enrichi. Ces éléments attirent l'œil, mais ils ne sont jamais garantis. Un code techniquement valide ne suffit pas.

Google accepte les extraits d'avis sur plusieurs familles de contenus : produits, recettes, logiciels, films, livres, cours et événements, entre autres. Pour une note agrégée, les propriétés de base restent simples : `ratingValue`, `ratingCount` ou `reviewCount`, avec une échelle cohérente, souvent de **1 à 5**.

La tentation est connue. On filtre les avis faibles, on importe uniquement les meilleurs, puis on affiche une moyenne flatteuse. À court terme, les étoiles peuvent rester. À moyen terme, le site risque surtout de perdre son éligibilité aux résultats enrichis. Et si les pratiques touchent aussi les fiches Google Business Profile ou les plateformes marchandes, le problème dépasse vite le simple balisage.

## L'audit à faire maintenant

Je conseille un contrôle en quatre étapes.

**1. Reconstituer la provenance des avis.** Pour chaque source, notez qui collecte, comment l'identité est vérifiée et quelle contrepartie a été proposée. Un export sans historique n'est pas une preuve suffisante.

**2. Vérifier la transparence visible.** La mention « produit offert », « collaboration commerciale » ou équivalent doit être lisible près de l'avis. La cacher dans des conditions générales de 8 000 mots ne répond pas à l'esprit de la règle.

**3. Comparer la page au JSON-LD.** Le nombre d'avis, la moyenne et l'objet évalué doivent correspondre. Si la page annonce 126 avis et que le balisage en revendique 184, corrigez la donnée. Même chose si plusieurs variantes produit sont mélangées dans une seule note.

**4. Tester puis surveiller.** Utilisez le test des résultats enrichis, inspectez quelques URL dans Search Console et suivez le rapport d'améliorations. Attention : un test vert confirme la syntaxe, pas l'authenticité des avis.

## Ce qu'il ne faut surtout pas faire

Ne supprimez pas tous les avis incités par réflexe. **Ajoutez d'abord une divulgation claire** quand l'expérience est réelle et documentée. En revanche, retirez les témoignages inventés, les avis achetés sans test réel et les notes créées par l'équipe interne.

Ne marquez pas non plus une note d'entreprise auto-publiée comme si elle venait d'un tiers indépendant. Google exclut déjà les avis auto-référentiels pour `LocalBusiness` et `Organization` dans plusieurs contextes. Cette nouvelle précision complète une logique ancienne : le balisage doit décrire une preuve présente sur la page, pas fabriquer cette preuve.

## Mon avis

Google ne publie pas ce type d'ajout pour meubler sa documentation. S'il nomme explicitement les avis faux et les récompenses non déclarées, c'est que l'abus est assez fréquent pour mériter un contrôle plus net.

La bonne réponse n'est pas de chercher une nouvelle astuce JSON-LD. Elle consiste à tenir un registre propre des avis, des campagnes d'échantillonnage et des compensations. **La conformité éditoriale devient une composante du SEO technique.** Les étoiles ne valent rien si personne ne peut expliquer d'où vient la note.

Sources : [documentation Google sur les extraits d'avis](https://developers.google.com/search/docs/appearance/structured-data/review-snippet) et [annonce relevée par Search Engine Land](https://searchengineland.com/google-says-dont-include-fake-or-undisclosed-incentivized-reviews-in-review-snippet-structured-data-483456).
