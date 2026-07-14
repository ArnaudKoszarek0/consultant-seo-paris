---
title: "Google ferme son programme de suivi de colis : quel impact SEO ?"
description: "Google n'accepte plus de partenaires pour son module de suivi de colis. Analyse des conséquences SEO pour les transporteurs et e-commerçants."
date: "2026-07-14"
tags: ["seo", "actualite", "e-commerce"]
---

Google a modifié le 14 juillet 2026 sa documentation sur le suivi de colis dans Search. Le changement tient en une phrase : **le programme « Package Tracking Early Adopters » n'accepte plus de nouveaux partenaires**.

Ce n'est pas une mise à jour d'algorithme. Ce n'est pas non plus la disparition du suivi de colis dans Google. Les partenaires déjà intégrés peuvent toujours afficher un module de suivi directement dans les résultats. Mais pour les transporteurs et plateformes logistiques restés à la porte, l'accès direct vient de se fermer.

## Ce que Google proposait réellement

Le dispositif permet à un internaute de saisir un numéro de colis dans Google. Search interroge alors l'API du transporteur et affiche le statut sans obliger l'utilisateur à ouvrir le site de celui-ci.

L'intégration était disponible dans **tous les pays et toutes les langues couverts par Google Search**. Elle reposait sur une API privée, pas sur une balise Schema.org ajoutée à une page web. C'est une nuance importante : aucun développeur ne peut reproduire cette fonctionnalité avec trois lignes de JSON-LD.

Les contraintes techniques donnent aussi une idée du niveau exigé. Google demande une disponibilité presque totale, un temps de réponse moyen inférieur à **700 millisecondes** et un 95e percentile qui ne dépasse pas **1 000 millisecondes**. Si l'API devient trop lente, Google peut cesser d'afficher les informations.

Le seul champ strictement obligatoire est le statut actuel du colis, avec sa date, son heure et les éventuelles erreurs. Google recommande d'ajouter la date de livraison promise, les étapes du transport, l'URL de suivi, le numéro d'assistance ou encore la possibilité de reprogrammer la livraison. Les données personnelles et l'adresse du destinataire sont interdites.

## Pourquoi cette fermeture compte pour le SEO

Le sujet dépasse les transporteurs. Il montre comment Google transforme des requêtes transactionnelles en **services rendus dans la SERP**.

La requête « suivre mon colis » avait autrefois une destination logique : le site du transporteur. Avec ce module, Google récupère l'intention, appelle l'API et fournit la réponse. Le clic devient facultatif.

Pour les partenaires intégrés, le gain est ambigu. Leur service reste visible, mais une partie des visites disparaît. Pour les acteurs non admis, l'écart devient plus net : ils ne peuvent plus demander cette présence enrichie, tandis que les partenaires historiques conservent leur accès.

C'est un cas concret de fermeture d'écosystème. Google lance un programme anticipé, sélectionne quelques partenaires, puis arrête les candidatures sans annoncer de voie publique de remplacement. Techniquement, le service continue. Commercialement, le marché se fige.

## Ce qu'un transporteur doit faire maintenant

Il ne sert à rien de chercher une propriété structurée magique. **Le programme n'est plus ouvert** et la documentation ne fournit aucun formulaire alternatif.

Il reste pourtant du travail utile :

- rendre la page de suivi indexable et rapide ;
- créer une URL stable pour chaque interface de suivi, sans exposer de données personnelles ;
- afficher le statut principal dans le HTML initial ;
- conserver un title et un H1 explicites autour du suivi de colis ;
- documenter les délais, incidents, zones desservies et moyens de contact ;
- mesurer séparément les requêtes de marque liées au suivi dans Search Console.

Le point sur la vitesse mérite une attention particulière. Les seuils imposés par Google à l'API, **700 ms en moyenne et 1 seconde au 95e percentile**, ne sont pas des critères de classement annoncés. Ils donnent toutefois une référence opérationnelle sérieuse. Un service de suivi qui répond en quatre secondes est mauvais pour Google, mais surtout pour le client qui cherche son colis.

## Le vrai enseignement : posséder la relation client

Un e-commerçant ne doit pas laisser le transporteur et Google gérer seuls l'après-achat. La page de commande, les emails transactionnels, le compte client et les notifications doivent rester la source la plus claire.

Ajoutez un lien de suivi identifiable, une date de livraison compréhensible et un contact humain en cas de blocage. Mesurez les ouvertures et les retours sur le site. Ce trafic n'est pas spectaculaire, mais il protège la confiance, réduit les demandes au support et crée des occasions de réachat.

La mise à jour du 14 juillet ne bouleverse pas les positions organiques. Elle confirme quelque chose de plus structurel : **quand Google peut répondre lui-même à une requête, il finit souvent par le faire**. Le SEO ne consiste donc plus seulement à gagner une position. Il faut aussi décider quelles données partager et quelles relations garder chez soi.
