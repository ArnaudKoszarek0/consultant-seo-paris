---
title: "GA4 filtre désormais les hostnames autorisés : fiabilisez vos données SEO"
description: "GA4 ajoute les filtres Include sur les noms d’hôte. Voici comment nettoyer les données SEO sans supprimer par erreur des événements légitimes."
date: "2026-09-22"
tags: ["seo", "actualite"]
---

Google Analytics vient d'ajouter les filtres **Include** sur les noms d'hôte. La nouveauté paraît secondaire. Elle corrige pourtant un vrai défaut de GA4 : jusqu'ici, il fallait exclure les domaines indésirables un par un. Désormais, on peut définir la liste des seuls domaines autorisés à envoyer des événements dans une propriété.

Ce n'est pas une fonction SEO au sens du classement. Google ne positionnera pas mieux un site parce que son filtre GA4 est propre. En revanche, **un diagnostic SEO construit sur des données polluées reste un mauvais diagnostic**. Et cela arrive plus souvent qu'on ne le croit.

## Une liste blanche au lieu d'une chasse au spam

Google avait lancé les filtres de noms d'hôte le 11 juin 2026, mais uniquement en mode Exclude. Le 21 septembre, GA4 a ajouté le mode Include. Le principe est simple : au lieu de bloquer `spam.example`, puis un autre domaine demain, on autorise seulement `www.monsite.fr`, `shop.monsite.fr` et les autres hôtes légitimes.

Cette logique de liste blanche est plus saine. Un identifiant de mesure GA4 peut être repris ailleurs, volontairement ou non. Des environnements de test peuvent aussi continuer à envoyer des événements vers la propriété de production. Résultat : sessions fantômes, conversions artificielles, pages inexistantes et sources d'acquisition incohérentes.

Avec Include, toute donnée issue d'un nom d'hôte absent de la liste est écartée. Les événements sans hostname sont également bloqués. Google indique qu'un nom d'hôte vide signale généralement un trafic anormal ou du spam.

## Deux exceptions à comprendre avant d'activer le filtre

Première exception : les événements envoyés par **Measurement Protocol** ne passent pas par ce filtre. Google a choisi de les laisser entrer. Si votre CRM, votre serveur ou une plateforme de paiement envoie des conversions côté serveur, il faut donc les contrôler séparément. Le filtre hostname ne constitue pas un pare-feu universel.

Deuxième point, plus important : un filtre actif agit uniquement sur les nouvelles données, mais son effet est définitif. Les événements refusés ne seront disponibles ni dans GA4, ni dans BigQuery. Il n'existe pas de bouton pour reconstruire ce qui n'a jamais été traité.

Google permet de créer jusqu'à **10 filtres de données par propriété**. Il faut disposer au minimum du rôle Éditeur. Et l'application d'un filtre peut demander entre **24 et 36 heures**.

## Pourquoi les consultants SEO doivent s'en occuper

GA4 sert à arbitrer des décisions SEO : quelles pages attirent des visiteurs utiles, quels contenus convertissent, quelles landing pages doivent être consolidées, quels canaux assistent une vente. Si la propriété reçoit des événements depuis une préproduction, un clone ou un domaine parasite, les conclusions deviennent fragiles.

Le piège classique consiste à regarder uniquement le trafic organique. Or un événement pollué peut embarquer une URL, une source, une campagne ou une conversion. Il peut gonfler les sessions sans affecter Search Console, puis faire croire à un écart inexplicable entre clics Google et visites GA4.

**Search Console et GA4 ne mesurent pas la même chose**, donc leurs chiffres ne seront jamais identiques. Mais avant d'invoquer le consentement, les bloqueurs ou le modèle d'attribution, vérifiez les noms d'hôte réellement collectés.

## La méthode propre en quatre étapes

1. Listez dans GA4 tous les hostnames reçus sur les 30 à 90 derniers jours.
2. Identifiez les domaines de production, sous-domaines, tunnels de paiement et environnements qui doivent réellement alimenter la propriété.
3. Créez le filtre Include en état **Testing**, jamais directement en Active.
4. Attendez 24 à 36 heures, puis contrôlez la dimension « Test data filter name » dans une exploration libre avant l'activation.

Si plusieurs marques ou domaines légitimes partagent une propriété, documentez la liste avant de toucher au filtre. Un oubli peut supprimer une partie des données commerciales futures. Pour une simple analyse temporaire, utilisez plutôt un filtre de rapport, qui ne détruit rien.

## Mon avis

Cette nouveauté ne fera pas gagner une position sur Google. Elle fera mieux : elle évitera de prendre des décisions avec des chiffres faux.

Les équipes passent beaucoup de temps à discuter de modèles d'attribution sophistiqués, puis laissent une propriété accepter des événements de n'importe quel hostname. C'est incohérent. **La qualité de la mesure commence par contrôler qui a le droit d'écrire dans GA4.** Activez la liste blanche, mais seulement après un test réel et une vérification des flux serveur.
