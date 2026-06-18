---
title: "Migration de domaine : Google demande maintenant de traiter tous les variants"
description: "Google renforce ses consignes de migration de domaine : Search Console doit couvrir les variants www, non-www et sous-domaines pour éviter les pertes SEO."
date: "2026-06-18"
tags: ["seo", "actualite"]
---

# Migration de domaine : Google demande maintenant de traiter tous les variants

Google vient de mettre à jour sa documentation sur les migrations de domaine. Le changement paraît discret. Faux.

Lors d'un changement de domaine, Google recommande désormais de soumettre une demande de changement d'adresse dans Search Console pour tous les variants de l'ancien domaine : domaine nu, www, sous-domaines, versions non utilisées, versions historiques. Exemple simple : si `example.com` migre vers `new-example.net`, il ne suffit plus de déclarer `example.com`. Il faut aussi traiter `www.example.com`, `en.example.com`, et les autres variants vérifiés.

C'est une précision technique. Mais elle dit une chose claire : une migration SEO ne se pilote pas avec l'URL visible dans le navigateur. Elle se pilote avec toutes les entrées que Google peut encore explorer, associer ou interpréter.

## Ce que Google demande concrètement

La documentation mise à jour impose trois réflexes :

1. Vérifier dans Search Console toutes les variantes de l'ancien domaine.
2. Soumettre une demande de changement d'adresse pour chaque variant concerné.
3. Ne pas oublier les sous-domaines, même s'ils ne sont pas activement utilisés.

Le Change of Address Tool reste réservé aux migrations de domaine. Il ne faut pas l'utiliser pour un passage HTTP vers HTTPS, un changement de structure d'URL, un passage www vers non-www, ou un simple changement d'hébergeur sans modification des URLs.

Dit autrement : si vous passez de `ancien-site.fr` à `nouveau-site.fr`, l'outil est pertinent. Si vous passez de `/blog/article` à `/guide/article`, ce n'est pas le bon outil.

## Pourquoi cette précision compte

Parce que les sites réels sont rarement propres.

Un site de 10 ans a souvent accumulé des restes : sous-domaines oubliés, anciennes versions www, environnements de préproduction indexés, liens externes vers des variantes mortes, redirections partielles, domaines secondaires branchés pendant une refonte.

Google ne regarde pas votre architecture idéale. Il regarde ce qui existe, ce qui répond, ce qui redirige, ce qui reçoit des liens, et ce qui a déjà été crawlé.

Si un ancien sous-domaine reçoit encore des backlinks et n'est pas intégré proprement dans la migration, Google peut continuer à le traiter comme un signal séparé. Résultat : transfert d'autorité incomplet, signaux dispersés, découverte plus lente du nouveau domaine, baisse temporaire plus forte que prévu.

Ce n'est pas magique. C'est mécanique.

## Le vrai risque : croire qu'une 301 suffit

La redirection 301 reste indispensable. Mais elle ne suffit pas toujours.

Une migration propre repose sur plusieurs couches :

- redirections 301 page à page,
- cohérence des canonicals,
- sitemap XML à jour,
- liens internes modifiés vers le nouveau domaine,
- propriétés Search Console vérifiées,
- demandes de changement d'adresse soumises,
- logs serveur surveillés,
- monitoring des erreurs 404 et 5xx,
- suivi des clics et impressions par répertoire.

La 301 est le tuyau. Search Console est le signal administratif. Les logs montrent ce que Googlebot fait vraiment. Si vous ne regardez qu'un seul de ces éléments, vous pilotez à moitié.

## Ce que je ferais avant une migration

Avant de migrer, je liste tous les variants possibles :

- `domain.com`,
- `www.domain.com`,
- `http://`,
- `https://`,
- sous-domaines actifs,
- sous-domaines historiques,
- domaines alias,
- anciennes langues,
- anciennes préproductions,
- versions avec paramètres encore liées.

Ensuite je croise trois sources : Search Console, logs serveur, backlinks. Pas une seule. Trois.

Pourquoi ? Parce que Search Console ne voit pas tout. Les outils de backlinks ne voient pas tout. Les logs ne disent rien sur l'historique externe. Le croisement réduit l'angle mort.

Sur les gros sites, je recommande un tableau de migration avec quatre colonnes simples : ancien host, nouveau host, statut Search Console, statut redirection. C'est basique. C'est justement pour ça que ça marche.

## L'impact SEO attendu

Une migration peut provoquer une baisse temporaire. C'est normal. Mais une migration mal déclarée peut transformer une baisse de quelques semaines en problème de plusieurs mois.

Le point important est là : Google ne dit pas seulement "faites des redirections". Google dit maintenant, plus explicitement, "migrez tous les variants". C'est une différence de méthode.

Pour un petit site vitrine, ce sera souvent rapide. Pour un e-commerce, un média, un SaaS international ou un vieux domaine qui a vécu plusieurs refontes, c'est un vrai chantier technique.

## Mon avis

Cette mise à jour ne révolutionne pas le SEO. Elle rappelle une vérité que beaucoup oublient : **une migration est un audit d'héritage**.

On ne migre pas seulement un site actuel. On migre aussi ses erreurs passées, ses liens externes, ses sous-domaines oubliés, ses choix techniques bancals, et parfois dix ans de bricolage.

La bonne approche est simple : inventorier, vérifier, rediriger, déclarer, surveiller. Dans cet ordre. Pas l'inverse.

Ce n'est pas le sujet SEO le plus sexy. Mais c'est le genre de détail qui coûte cher quand il est ignoré.
