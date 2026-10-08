---
title: "Google précise Retry-After : ralentir le crawl sans prolonger la panne"
description: "Google clarifie Retry-After le 6 octobre 2026. Codes 503 et 429, portée sur le nom d’hôte et contrôles SEO pour une intervention temporaire."
date: "2026-10-08"
tags: ["seo", "actualite"]
---

Le **6 octobre 2026**, Google a ajouté des exemples de `Retry-After` à sa documentation sur la réduction du crawl. Le journal officiel précise que cet en-tête était déjà pris en charge. L'actualité de cette veille du 8 octobre est donc une clarification documentaire, pas un nouveau signal de classement. [Source : journal des changements Google](https://developers.google.com/crawling/docs/changelog).

Mon angle est simple : comment utiliser cette consigne pendant une panne sans transformer une intervention technique en problème d'indexation ? Un serveur saturé appelle une réponse temporaire. Pas un blocage oublié pendant trois semaines.

## Retry-After : une indication, pas un rendez-vous

La [RFC 9110, section 10.2.3](https://www.rfc-editor.org/rfc/rfc9110.html#name-retry-after), définit deux formats : un nombre de secondes ou une date HTTP. Exemple de réponse pour une indisponibilité temporaire :

```http
HTTP/1.1 503 Service Unavailable
Retry-After: 600
```

Ici, le serveur demande d'attendre **600 secondes, soit 10 minutes**. Ce nombre est un exemple de configuration, pas une valeur recommandée par Google. La norme exprime un délai d'attente ; elle ne garantit pas une visite à la seconde où il expire. [Source : RFC 9110](https://www.rfc-editor.org/rfc/rfc9110.html#name-retry-after).

Je préfère cette notation relative pendant un incident court. Elle évite à l'équipe de calculer une heure UTC en pleine intervention. Pour une maintenance planifiée, une date absolue peut être plus facile à coordonner, à condition de contrôler sa valeur avant activation.

## Le ralentissement peut dépasser les pages en erreur

Google indique qu'un nombre significatif de réponses `500`, `503` ou `429` entraîne une réduction du crawl sur **tout le nom d'hôte**, y compris ses URL encore accessibles. Le rythme remonte automatiquement lorsque les erreurs diminuent. L'en-tête `Retry-After` peut accompagner les réponses `503` et `429`. [Source : réduction du crawl Google](https://developers.google.com/crawling/docs/crawlers-fetchers/reduce-crawl-rate).

Prenons un scénario fictif : une boutique et son magazine partagent `www.exemple.fr`. L'équipe protège les fiches produit surchargées, mais attend toujours une découverte rapide des nouveaux articles. Je lui demanderais de surveiller les deux ensembles. Contrôler uniquement les URL qui renvoient une erreur donnerait une vision incomplète de l'intervention.

C'est précisément pour cela que je refuse les règles permanentes bricolées au niveau du pare-feu sans responsable identifié. Qui les retire ? Sur quel critère ? À quelle heure vérifie-t-on le retour à la normale ? Ces questions doivent précéder la mise en production.

## Un à deux jours n'est pas une garantie SEO

La documentation déconseille de prolonger cette méthode au-delà de **1 à 2 jours**. Des erreurs observées plusieurs jours sur une même URL peuvent conduire à sa sortie de l'index. Ce délai n'est donc ni une franchise sans risque, ni une promesse de désindexation à la quarante-neuvième heure. [Source : avertissement Google](https://developers.google.com/crawling/docs/crawlers-fetchers/reduce-crawl-rate).

Autre mauvaise idée : remplacer la surcharge par un `403` pour faire taire le robot. Google déconseille les codes `401` et `403` pour limiter le crawl. Le `429` fait exception parmi les erreurs `4xx` : Google le traite comme un signal de surcharge serveur. [Source : traitement des codes HTTP](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes).

Mon conseil : préparer la sortie de crise au même moment que son déclenchement. Une intervention sans condition de désactivation est une dette technique avec une échéance inconnue.

## Le contrôle que je demanderais à l'équipe technique

Je proposerais une fiche d'incident courte, avec cinq vérifications :

1. **Mesurer avant d'agir.** Conserver le volume de requêtes, les temps de réponse et la proportion d'erreurs avant activation. Sans point de départ, difficile de juger le résultat.
2. Tester une URL concernée depuis l'extérieur. Vérifier le statut HTTP et l'en-tête réellement reçus, pas seulement la configuration enregistrée sur le serveur.
3. Désigner une personne responsable du retrait de la règle. Fixer une première revue après 30 minutes, comme consigne interne, jamais comme seuil Google.
4. Contrôler aussi quelques pages normalement accessibles du même hôte. Comparer leur exploration avant, pendant et après l'incident.
5. Après rétablissement, vérifier le retour des réponses attendues et poursuivre la surveillance des journaux. Ne pas fermer le ticket sur le seul redémarrage du service.

Je ne vendrais pas `Retry-After` comme une optimisation du référencement. Je l'inscrirais dans la procédure de maintenance, à côté du plan de retour arrière et des contacts d'astreinte. Son intérêt est de gérer une indisponibilité proprement. Le travail SEO consiste aussi à empêcher qu'une mesure d'urgence devienne le fonctionnement habituel du site.
