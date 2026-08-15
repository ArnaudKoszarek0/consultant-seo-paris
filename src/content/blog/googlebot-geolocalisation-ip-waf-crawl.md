---
title: "Googlebot n'est pas toujours en Californie : corrigez vos règles WAF"
description: "Googlebot peut sortir de plusieurs datacenters malgré une IP déclarée à Mountain View. Voici comment vérifier ses requêtes sans casser le crawl."
date: "2026-08-15"
tags: ["seo", "actualite"]
---

Googlebot vient-il vraiment de Californie ? La réponse courte est non. Et cette précision, donnée cette semaine par Gary Illyes et John Mueller, devrait faire corriger quelques règles de pare-feu mal pensées.

Google associe souvent les adresses IP de ses robots à Mountain View. Mais cette localisation est déclarative. Elle ne prouve pas le point de sortie physique de la requête. Gary Illyes l'a expliqué clairement : une adresse attribuée à un cluster d'Atlanta peut sortir à Atlanta, même si ses informations administratives indiquent Mountain View.

Ce détail n'est pas cosmétique. Il concerne directement le crawl, les CDN, les WAF et les sites internationaux.

## Une adresse IP n'est pas une position GPS

Les bases de géolocalisation IP donnent une estimation. Elles utilisent le détenteur du bloc, les routes BGP et différentes observations réseau. Une même adresse peut aussi être annoncée via anycast depuis plusieurs endroits. Les adresses 1.1.1.1 ou 8.8.8.8 illustrent bien le problème : les placer sur une seule ville n'a pas vraiment de sens.

L'infrastructure de crawl de Google fonctionne à grande échelle. Sa documentation parle de milliers de machines réparties dans plusieurs datacenters. Google précise que ses robots sortent principalement depuis des adresses américaines, mais qu'ils peuvent utiliser d'autres pays, notamment lorsqu'un site bloque les requêtes venant des États-Unis.

Conclusion pratique : le pays affiché par MaxMind, Cloudflare ou votre hébergeur ne suffit pas à identifier Googlebot.

## Bloquer Googlebot par pays est une mauvaise idée

Je vois encore des configurations qui appliquent une règle simple : trafic US bloqué, donc Googlebot bloqué. Ou l'inverse : toute IP localisée aux États-Unis reçoit un passe-droit. Les deux raisonnements sont faux.

Dans le premier cas, vous pouvez réduire ou interrompre le crawl. Dans le second, vous ouvrez votre serveur à n'importe quel robot dont l'adresse est classée aux États-Unis. Le **`User-Agent: Googlebot` ne vaut pas davantage**. Il se copie en une ligne.

Une règle de sécurité ne doit jamais reposer uniquement sur le User-Agent ou la géolocalisation IP.

Google publie des plages CIDR distinctes pour trois familles : robots communs, robots spécialisés et fetchers déclenchés par un utilisateur. Les comportements ne sont pas identiques. Les robots communs respectent `robots.txt`. Certains fetchers déclenchés par un utilisateur peuvent l'ignorer, puisque l'accès résulte d'une action explicite dans un produit Google.

## La bonne méthode pour vérifier Googlebot

Pour un contrôle ponctuel, partez de l'IP observée dans les logs.

1. Faites une résolution DNS inverse.
2. Vérifiez que le nom obtenu se termine réellement par `googlebot.com`, `google.com` ou `googleusercontent.com`.
3. Faites ensuite une résolution DNS directe de ce nom.
4. Confirmez qu'elle renvoie exactement l'IP d'origine.

Cette double vérification évite qu'un tiers configure simplement un PTR trompeur. Pour un traitement automatisé, comparez l'adresse aux fichiers JSON de plages IP publiés par Google. Mettez ces listes en cache, actualisez-les proprement et journalisez la catégorie détectée.

Ne codez pas une liste en dur pour trois ans. Ce genre de bricolage finit toujours par casser un crawl au mauvais moment.

## Ce que je recommande dans un audit SEO technique

Commencez par croiser les logs serveur, les événements du WAF et les statistiques de crawl de Search Console. Cherchez les réponses 403, 429 et 5xx servies aux IP Google vérifiées. Contrôlez aussi les différences de réponse par pays, langue, cookie et en-tête HTTP.

Sur un site international, testez les URL importantes sans déduire la langue depuis l'IP du robot. Servez un HTML stable, utilisez des URL locales distinctes et déclarez `hreflang`. Une redirection géographique forcée peut envoyer Googlebot vers la mauvaise version ou masquer une partie du site.

Enfin, ne confondez pas optimisation et superstition. Le fait qu'un robot sorte d'Atlanta, de Mountain View ou d'un autre datacenter ne crée aucun bonus de classement local. Le vrai sujet est plus simple : Google doit pouvoir récupérer la bonne page, avec un statut 200, sans être bloqué par une règle de sécurité approximative.

L'actualité de cette semaine ne change donc pas l'algorithme. Elle rappelle quelque chose de plus utile : en SEO technique, **une adresse IP est une donnée réseau, pas une preuve géographique**.

Sources : [Search Engine Roundtable](https://www.seroundtable.com/google-crawlers-location-googlebot-41874.html) et [documentation officielle Google sur la vérification des robots](https://developers.google.com/crawling/docs/crawlers-fetchers/verify-google-requests).
