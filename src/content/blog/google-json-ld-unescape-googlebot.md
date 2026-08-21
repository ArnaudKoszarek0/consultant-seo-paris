---
title: "Google durcit l'extraction JSON-LD : auditez vos données structurées"
description: "Googlebot ne corrige plus le JSON-LD doublement échappé. Voici le risque SEO concret et la méthode d'audit à appliquer."
date: "2026-08-21"
tags: ["seo", "actualite"]
---

Google vient de durcir un détail technique qui peut faire disparaître vos résultats enrichis sans toucher à vos positions. Depuis le 21 août 2026, l'extraction JSON-LD de Googlebot n'applique plus qu'**un seul passage de décodage HTML**. Les données structurées doublement échappées ne seront plus corrigées gentiment par le parseur.

Ce changement paraît minuscule. Il ne l'est pas pour les sites e-commerce, les recettes, les avis, les événements ou les fiches locales qui génèrent leur balisage côté serveur.

## Ce que Google a réellement changé

Google utilise les blocs `<script type="application/ld+json">` pour lire des informations comme le prix, la disponibilité, la note moyenne, les ingrédients ou l'identité d'une organisation.

Jusqu'ici, son extracteur pouvait dérouler certaines entités HTML doublement échappées. Un générateur envoyait par exemple une valeur contenant `&amp;` ou `&#10004;`, puis une seconde couche d'encodage intervenait dans le template. Google arrivait parfois à reconstruire la valeur attendue.

C'est terminé. Google explique vouloir aligner son parseur sur JSON et les standards associés. Gary Illyes renvoie précisément vers la section 7 de la RFC 8259, celle qui définit l'échappement des chaînes JSON.

La règle devient simple : dans un bloc JSON-LD, encodez du JSON. Pas du HTML déguisé en JSON.

Pour une esperluette, utilisez directement `&` lorsque la chaîne JSON le permet, ou l'échappement Unicode `\u0026`. Pour les guillemets internes, utilisez `\"`. Pour une barre oblique inversée, utilisez `\\`. Les entités HTML ne sont pas une stratégie d'échappement JSON.

## Le vrai risque SEO

Ce changement n'est pas annoncé comme un facteur de classement. Inutile d'inventer une pénalité algorithmique. Le risque est plus concret : Google peut mal extraire ou ignorer une propriété structurée. Votre page reste indexable, mais son éligibilité à certains résultats enrichis peut se dégrader.

Sur un catalogue de 50 000 produits, une erreur placée dans un composant partagé peut contaminer 50 000 blocs `Product`. Même problème avec un plugin d'avis, un thème ou une couche de cache qui réencode la sortie après sa génération.

Les symptômes à surveiller sont clairs :

- baisse des impressions associées aux résultats enrichis ;
- nouvelles erreurs ou propriétés invalides dans Search Console ;
- prix, stock ou notes qui ne correspondent plus à la page ;
- différence entre le JSON-LD du code source et celui produit par l'application avant rendu.

Mon avis est net : ne corrigez pas les chaînes une par une. Cherchez la couche qui encode deux fois. Sinon, vous allez empiler un troisième bricolage sur les deux premiers.

## Comment auditer sans perdre une semaine

Commencez par récupérer le HTML réellement servi à Googlebot. Ne vous contentez pas de l'objet JSON présent dans votre base ou affiché dans votre console JavaScript. Le défaut peut être ajouté par Twig, Blade, React, un plugin WordPress, un CDN ou un système d'injection de tags.

Extrayez ensuite chaque bloc `application/ld+json` et passez-le dans un parseur JSON strict. Un simple `JSON.parse()` ou `jq` suffit pour vérifier la syntaxe. Recherchez aussi les séquences `&amp;`, `&quot;`, `&#` et leurs versions réencodées. Leur présence n'est pas toujours une erreur, mais elle mérite une inspection immédiate.

Puis comparez trois niveaux :

1. la donnée métier d'origine ;
2. le JSON-LD généré par l'application ;
3. le HTML final reçu par le navigateur ou le robot.

Cette comparaison localise l'étape fautive. C'est beaucoup plus utile que de relancer dix fois le test de résultats enrichis.

Enfin, testez plusieurs gabarits. Une page produit propre ne prouve rien sur les variantes, les promotions, les noms contenant `&`, les caractères Unicode ou les avis avec guillemets. Il faut des cas limites dans les tests automatisés.

## La leçon à retenir

Google retire ici une tolérance, pas une fonctionnalité. C'est sain. Un parseur permissif masque les défauts jusqu'au jour où il cesse de les masquer.

Le travail à faire aujourd'hui tient en trois actions : **valider le JSON-LD strictement**, contrôler l'échappement sur le HTML final et ajouter des tests de non-régression sur les caractères spéciaux. Si votre balisage dépendait de la capacité de Google à réparer votre code, ce n'était pas une compatibilité. C'était une dette technique.
