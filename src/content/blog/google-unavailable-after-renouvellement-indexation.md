---
title: "unavailable_after : le piège SEO des annonces renouvelées"
description: "Google doit recrawler une page pour voir une date unavailable_after repoussée. Voici pourquoi les annonces renouvelées risquent une désindexation prématurée."
date: "2026-08-01"
tags: ["seo", "actualite"]
---

La balise unavailable_after peut désindexer vos annonces renouvelées trop tôt

Google vient de rappeler une limite assez gênante de la directive **unavailable_after**. Si vous repoussez la date d'expiration d'une page, Google ne prendra connaissance de cette nouvelle date qu'au prochain crawl. Or rien ne garantit que ce crawl aura lieu avant l'échéance précédente.

Pour un site de petites annonces, d'emploi, d'événementiel ou de location, ce détail n'en est pas un. Une annonce renouvelée par son propriétaire peut rester en ligne tout en disparaissant des résultats Google.

## Ce que fait réellement unavailable_after

La directive se place dans une balise meta robots ou dans un en-tête HTTP X-Robots-Tag. Elle indique à Google de ne plus afficher l'URL après une date donnée.

```html
<meta name="robots" content="unavailable_after: 2026-08-15T23:59:59-04:00">
```

Google accepte notamment les formats **RFC 822, RFC 850 et ISO 8601**. Une date invalide est simplement ignorée. Après l'échéance, Google précise aussi que la fréquence de crawl de l'URL diminue considérablement.

C'est là que le mécanisme devient piégeux. Gary Illyes a expliqué que cette directive agit sur la sélection dans l'index. Pour voir une date modifiée, Googlebot doit toutefois télécharger la page à nouveau. Google utilise rarement une requête HTTP HEAD pour ce contrôle rapide.

Autrement dit, modifier la base de données ne suffit pas. Google doit repasser.

## Le cas concret qui pose problème

La question adressée à Google concernait un site conservant environ **5 000 URL indexées**, avec **10 000 nouvelles annonces par mois**. La plupart restent actives entre **24 et 72 heures**. Les utilisateurs peuvent ensuite les renouveler.

Imaginons une annonce initialement programmée pour expirer le 4 août. Le propriétaire la prolonge jusqu'au 11 août. Votre HTML affiche immédiatement la nouvelle date, mais Googlebot ne revient que le 6 août. Entre le 4 et le 6, Google peut avoir retiré l'URL de ses résultats sur la base de l'ancienne instruction.

Gary Illyes pense que repousser la date devrait fonctionner, mais il a aussi reconnu ne pas avoir de réponse documentée sur ce scénario. **Un pressentiment de Googler n'est pas une garantie technique.** Je ne construirais pas un système d'indexation à grande échelle dessus.

## unavailable_after ne gère pas votre crawl budget

L'erreur consiste à utiliser cette directive comme un outil de pilotage du crawl. Ce n'est pas sa fonction principale. Elle donne un signal de retrait à une date précise. Elle ne garantit ni un dernier passage avant expiration, ni un nouveau passage après renouvellement.

Elle convient aux contenus dont la fin est réellement définitive :

- une offre promotionnelle non reconduite ;
- une page d'événement sans valeur après une date ;
- un communiqué soumis à un embargo temporel ;
- un contenu sous licence avec échéance ferme.

Pour une annonce renouvelable, la logique est différente. La date d'expiration reste instable. Vous transformez alors le crawl de Google en condition métier, sans maîtriser son calendrier.

## Ma recommandation pour les contenus courts

Je préfère une gestion simple et observable.

**Tant que l'annonce est active**, laissez-la indexable avec un code HTTP 200, une canonical vers elle-même et une date de modification exacte dans le sitemap. Lors d'un renouvellement, actualisez le contenu visible, la date métier et le `lastmod`. N'utilisez pas unavailable_after si l'échéance peut bouger.

**Quand l'annonce expire définitivement**, choisissez selon sa valeur. Une URL sans équivalent peut répondre en 410. Une annonce remplacée par une catégorie pertinente peut recevoir une 301, mais seulement si la destination répond réellement à la même intention. Une page expirée encore utile peut rester en 200 avec son statut clairement affiché et des alternatives proches.

Surveillez ensuite trois sources : les logs Googlebot, le rapport d'indexation de Search Console et un échantillon quotidien d'URL renouvelées. Avec **10 000 annonces mensuelles**, contrôler 30 à 50 URL par jour donne déjà un signal opérationnel exploitable.

La conclusion est nette : **unavailable_after est une date de sortie, pas un système de renouvellement**. Si votre contenu peut revenir à la vie, ne demandez pas à Google de l'enterrer automatiquement.
