---
title: "Core Web Vitals 2026 : WordPress dernier, Shopify surprend, Astro ne suffit pas"
description: "Le rapport HTTP Archive montre que le poids de page ne suffit pas à expliquer les Core Web Vitals. WordPress décroche, Shopify surprend, Astro confirme ses limites."
date: "2026-05-28"
tags: ["seo", "actualite"]
---

# Core Web Vitals 2026 : WordPress dernier, Shopify surprend, Astro ne suffit pas

Le dernier rapport HTTP Archive sur les Core Web Vitals par technologie remet une vieille idee a sa place : une page legere aide, mais elle ne garantit rien.

C'est genant pour beaucoup de consultants SEO, parce que le discours habituel est simple. Moins de poids, moins de JavaScript, meilleur score. En pratique, c'est plus sale. Plus technique. Et plus interessant.

Les donnees croisent Chrome UX Report, donc des mesures terrain issues d'utilisateurs Chrome, et HTTP Archive, qui observe les technologies, les poids de page et les audits Lighthouse. Ce n'est pas un test de laboratoire sur trois pages propres. C'est une photographie du web reel.

Le classement d'avril 2026 est net : Duda obtient environ **85 %** de sites avec de bons Core Web Vitals, Wix autour de 80 %, Shopify autour de 79 %, Astro autour de 67 %, Drupal autour de 64 %, Joomla autour de 58 %, et WordPress ferme la marche a environ **49 %**.

Oui, WordPress est dernier. Encore.

## Le poids de page n'explique pas tout

Sur le papier, Astro devrait ecraser tout le monde. Son poids median est autour de 1,65 Mo. Duda tourne autour de 1,87 Mo. WordPress monte vers 2,76 Mo. Shopify est beaucoup plus lourd, environ 3,77 Mo.

Si le SEO technique se resumait au poids de page, Shopify devrait etre mauvais. Or il est troisieme.

C'est la que le rapport devient utile. Les Core Web Vitals ne mesurent pas une morale technique. Ils mesurent une experience utilisateur : chargement, stabilite visuelle, reactivite. Une page peut etre lourde mais bien servie, bien cachee, bien stabilisee. Une page plus legere peut etre mal construite, bloquee par des scripts, instable au rendu ou lente a repondre.

Lighthouse n'est pas non plus la verite absolue. Les scores d'audit placent Astro a 68, Wix a 62, Duda a 54, Shopify a 47, WordPress a 44, Joomla a 43. Shopify a donc un mauvais score Lighthouse relatif, un poids eleve, mais de bons resultats terrain.

Traduction : regarder uniquement PageSpeed Insights pour piloter une strategie SEO, c'est piloter au tableau de bord sans regarder la route.

## Pourquoi Shopify s'en sort mieux que prevu

Shopify beneficie d'un point que beaucoup de sites WordPress n'ont pas : un environnement controle. CDN, hebergement, rendu, cache, themes, livraison des ressources. Tout n'est pas parfait, mais la plateforme impose un cadre.

En e-commerce, c'est loin d'etre anodin. Les pages produit embarquent souvent du tracking, des variantes, des images lourdes, des apps, du filtrage et de la personnalisation. Malgre cela, Shopify maintient une experience terrain correcte.

Ce n'est pas magique. C'est industriel.

A l'inverse, WordPress est un terrain libre. C'est sa force et son probleme. Un theme achete a 59 dollars, quinze plugins, deux builders, un script de chat, trois pixels publicitaires, des images non dimensionnees, et le site devient une usine a dette technique.

WordPress n'est pas mauvais par nature. Mais **WordPress sans gouvernance technique devient mauvais tres vite**.

## Astro : tres bon, mais attention au biais

Astro a un argument fort : peu de JavaScript envoye au navigateur, pages statiques, architecture propre. Pour un blog, un site editorial, une landing page ou une documentation, c'est souvent excellent.

Mais il faut eviter le raccourci : Astro est rapide, donc Astro est meilleur pour le SEO. Non.

Une partie de ses bons resultats vient probablement du type de sites qui l'utilisent. Beaucoup sont simples, recents, developpes par des profils techniques, avec peu de dette historique. Comparez cela a un WordPress de dix ans rempli de plugins marketing, et vous comparez aussi deux cultures de production.

Le framework compte. Mais le niveau d'exigence de l'equipe compte autant.

## Ce que je regarderais en audit SEO

Je ne commencerais pas par changer de CMS. C'est rarement le bon premier reflexe.

Je commencerais par quatre controles : CrUX par template, INP et scripts tiers, CLS reel, HTML initial. Pas seulement la home. Pas seulement le score mobile PageSpeed.

Ensuite seulement, je tranche : optimisation, refonte de theme, suppression de plugins, passage partiel en statique, ou migration.

## La conclusion pratique

Le SEO technique 2026 n'est plus une chasse aux scores verts. C'est une discipline d'architecture.

Duda prouve qu'un cadre ferme peut performer. Shopify prouve qu'un site lourd peut rester utilisable si la plateforme maitrise la complexite. Astro prouve que la sobriete technique aide. WordPress prouve qu'une liberte totale sans discipline finit souvent dans le mur.

Mon avis est simple : **ne vendez pas une migration comme une solution SEO si vous n'avez pas identifie la dette technique reelle**. Mais ne continuez pas non plus a maquiller un WordPress malade avec trois plugins de cache.

Les Core Web Vitals ne recompensent pas le CMS. Ils recompensent l'execution.
