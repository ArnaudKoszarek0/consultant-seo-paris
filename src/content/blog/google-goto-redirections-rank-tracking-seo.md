---
title: "Google /goto : le suivi de positions entre dans une zone grise"
description: "Google déploie des redirections /goto dans ses résultats. Un changement anti-scraping potentiel qui fragilise les rank trackers et impose de croiser les données SEO."
date: "2026-08-26"
tags: [\"seo\", \"actualite\"]
---

Google est en train de modifier un détail très visible dans ses résultats : le lien affiché sous le curseur ne pointe plus toujours directement vers le site cible. Il peut passer par une URL intermédiaire du type `google.com/goto`, puis déclencher une redirection serveur.

Ce n'est pas encore une annonce officielle. C'est une observation documentée le 26 août 2026, après un test commencé en juillet. Mais le déploiement semble avoir changé d'échelle. Et pour les outils SEO qui collectent les SERP, ce petit détour peut devenir un gros problème.

## Ce que Google change dans les liens de résultats

Jusqu'ici, un résultat organique exposait généralement l'URL finale dans le lien HTML. Un robot pouvait donc lire la page de résultats, identifier les domaines classés et construire un suivi de positions.

Avec **Google `/goto`**, le lien contient une adresse de passage hébergée par Google. Le serveur reçoit la requête, puis renvoie vers la page réelle. Le fournisseur Nozzle indique observer ce mécanisme sur **presque 100 % des SERP collectées auprès de plusieurs fournisseurs d'IP résidentielles**.

Le point technique important est simple : ces liens ne seraient pas décodables localement. Pour connaître la destination, il faut les suivre un par un. Une SERP peut contenir des dizaines, voire des centaines de liens entre résultats organiques, images, modules et navigations. Le coût de collecte augmente donc brutalement.

Google n'a pas confirmé l'objectif. L'hypothèse anti-scraping est crédible, mais elle reste une hypothèse. Il faut éviter le raccourci habituel consistant à transformer une observation en vérité officielle.

## Pourquoi les rank trackers sont directement visés

Un outil de suivi de positions fonctionne à grande échelle. Il ne vérifie pas dix mots-clés une fois par mois. Il peut interroger des millions de couples requête, pays, appareil et langue.

S'il doit désormais exécuter chaque redirection `/goto`, trois effets apparaissent :

- **plus de requêtes réseau** pour reconstruire une seule SERP ;
- **plus de latence** et de ressources serveur ;
- **plus de points de blocage**, car Google peut contrôler séparément l'accès à la SERP et le suivi des redirections.

Le calcul économique change. Une collecte qui exigeait une requête et une analyse HTML peut en demander plusieurs dizaines. Les acteurs les plus solides absorberont une partie du surcoût. Les petits outils réduiront la fréquence, augmenteront leurs prix ou livreront des données plus partielles.

Ce mouvement prolonge la suppression du paramètre `num=100`, qui avait déjà compliqué la collecte profonde des positions. Google ne ferme pas nécessairement l'accès en une fois. Il ajoute de la friction, couche après couche.

## Ce que cela change pour un responsable SEO

Le classement réel de votre site ne change pas parce qu'un lien passe par `/goto`. **Ce n'est pas un signal de ranking.** Le danger se situe dans la mesure.

Si votre outil remonte soudain moins de résultats, davantage d'erreurs ou des positions instables, ne concluez pas immédiatement à une mise à jour algorithmique. Vérifiez d'abord :

1. le taux de réussite de collecte du fournisseur ;
2. la profondeur réellement observée, top 10, top 20 ou au-delà ;
3. la fréquence de rafraîchissement des données ;
4. la cohérence avec Search Console, les conversions et les logs serveur.

**Une position isolée n'est pas un KPI métier.** Une requête peut passer de 8 à 11 sans produire la moindre variation de chiffre d'affaires. À l'inverse, une baisse de clics sur un groupe de pages stratégiques mérite une analyse, même si le rank tracker affiche du vert.

## La bonne réponse : croiser les sources

Search Console reste imparfaite. Les données sont agrégées, certains détails manquent et les positions sont des moyennes. Mais elle mesure l'activité réelle liée à votre propriété. Les logs montrent le passage de Googlebot. L'analytics mesure les sessions et les conversions. Le suivi de positions apporte une vue externe utile.

Aucune source ne suffit seule.

Ma recommandation est donc nette : gardez votre rank tracker, mais exigez de la transparence sur sa collecte. Demandez-lui comment il traite `/goto`, quel pourcentage de SERP échoue et quelle profondeur demeure fiable. Ensuite, pilotez avec un tableau de bord qui rapproche **clics, pages, requêtes, conversions et revenus**.

Google contrôle la SERP, son interface et désormais une part croissante du chemin technique vers les sites. Les professionnels du SEO doivent arrêter de confondre une donnée facile à lire avec une donnée certaine. Le suivi de positions reste utile. En 2026, il n'est plus une vérité brute.
