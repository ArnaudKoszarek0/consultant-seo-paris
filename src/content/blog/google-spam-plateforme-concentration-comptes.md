---
title: "Spam SEO : surveillez les comptes qui créent vos URL"
description: "Google actualise son guide antispam. Comment détecter les comptes qui concentrent les créations d’URL publiques, sans sanctionner les usages légitimes."
date: "2026-10-29"
tags: ["seo", "actualite"]
---

Le 26 octobre 2026, Google a actualisé son guide contre le spam généré par les utilisateurs. Au 29 octobre, c’est la dernière modification affichée dans le [journal officiel Search Central](https://developers.google.com/search/updates). Un point mérite davantage d’attention que les habituelles discussions sur les balises : **qui fabrique les URL publiques de votre plateforme ?**

Google recommande désormais explicitement de surveiller les cas où quelques utilisateurs produisent une grande partie des URL indexables. Le [guide de prévention](https://developers.google.com/search/docs/monitor-debug/prevent-abuse#monitor-your-service-for-abuse) vise aussi les services de pages partagées, de contenus générés et d’applications web. Mon angle est simple : ajouter un contrôle par compte créateur, plutôt que regarder uniquement le volume global de pages.

## Le compteur global masque la concentration

Prenons un exemple fictif. Une plateforme publie habituellement 1 000 nouvelles pages par semaine. Cette semaine, elle en publie 1 100. Hausse apparente : **10 %**. Rien de spectaculaire.

Mais supposons que 3 comptes récemment inscrits aient produit 800 de ces pages. Ils représentent alors **72,7 % des nouvelles URL**. Les 300 autres viennent des utilisateurs habituels. La moyenne générale rassure ; la répartition raconte une autre histoire.

Ce calcul ne prouve pas une attaque. Un client peut importer un catalogue légitime. Il donne une raison précise d’examiner ces comptes avant de célébrer une hausse de production.

Je préfère cette alerte à un tableau de bord qui affiche seulement une courbe verte.

## Mesurer la création avant les impressions

Google demande de suivre la création des pages publiques et les anomalies d’indexation, puis de chercher dans Search Console les impressions ou requêtes étrangères à l’activité du service. C’est décrit dans sa [section consacrée à la surveillance des abus](https://developers.google.com/search/docs/monitor-debug/prevent-abuse#monitor-your-service-for-abuse). La recommandation porte sur la prévention, pas sur un nouveau score de classement.

Pour l’appliquer, je construirais un export quotidien avec les champs suivants : identifiant du compte, ancienneté, URL créée, date de publication, visibilité publique et décision d’indexabilité côté application.

Je séparerais ensuite deux populations : les pages que le produit autorise à être indexées, et celles dont la présence dans Google a été effectivement constatée. Dans mon tableau, une autorisation technique ne serait jamais présentée comme une indexation obtenue.

Le premier indicateur serait la part des créations attribuable aux cinq comptes les plus actifs. Le deuxième comparerait cette concentration à sa médiane sur 28 jours. Je garderais aussi le détail par fonctionnalité : profil public, document partagé, mini-site ou résultat d’outil.

## Une alerte ne doit pas devenir une sanction automatique

Voici une règle de départ que je proposerais pour une plateforme moyenne : déclencher une revue si cinq comptes récents produisent plus de 50 % des nouvelles pages publiques, avec au moins 100 créations sur la journée.

**Ces seuils sont une proposition de travail, pas des limites Google.** Il faut les ajuster au produit. Une place de marché avec import professionnel ne se comporte pas comme un forum de quartier.

Avant toute restriction, je demanderais au responsable de modération de lire vingt pages réparties entre les comptes signalés. Il vérifierait leur utilité, leur cohérence avec le service et l’existence éventuelle d’un import attendu. Je conserverais la décision et son motif pour corriger les faux positifs.

Google recommande lui-même une approbation manuelle pour certaines interactions suspectes dans son [guide antispam](https://developers.google.com/search/docs/monitor-debug/prevent-abuse#use-manual-approval-for-suspicious-user-interactions). Mon conseil : ne pas transformer une alerte statistique en suppression aveugle.

## Donner un propriétaire au problème

Le risque SEO existe : les [politiques officielles de Google](https://developers.google.com/search/docs/essentials/spam-policies) prévoient une baisse de visibilité, voire une absence des résultats, pour les sites qui les enfreignent. Cela ne permet pas d’attribuer automatiquement une baisse de trafic à trois comptes suspects.

Je confierais donc l’alerte à une personne nommée, avec une revue sous un jour ouvré et une procédure de suspension réversible des nouvelles publications. Le SEO fournirait les signaux de recherche ; l’équipe produit expliquerait comment les pages sont créées.

Pour commencer, je demanderais un seul livrable : la liste des vingt comptes ayant créé le plus d’URL publiques cette semaine, avec cinq exemples chacun. Avant de commander cent nouveaux contenus, regardez qui publie déjà sous votre domaine.
