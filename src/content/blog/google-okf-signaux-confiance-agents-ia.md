---
title: "OKF v0.2 : Google formalise cinq signaux de confiance pour les contenus lus par les agents IA"
description: "Google publie OKF v0.2 avec cinq signaux de confiance. Ce que provenance, vérification, fraîcheur et attestation changent pour les contenus SEO."
date: "2026-07-29"
tags: ["seo", "actualite"]
---

# OKF v0.2 : Google formalise cinq signaux de confiance pour les contenus lus par les agents IA

Google Cloud vient de publier la version 0.2 de son **Open Knowledge Format**, ou OKF. Le nom ressemble à un énième standard technique. Le sujet est pourtant très concret : comment un agent IA peut-il savoir qu'une information est sourcée, validée, encore valable et calculée correctement ?

La réponse de Google tient en **cinq signaux de confiance**. Avant de crier au nouveau facteur de classement, soyons clairs : OKF n'est pas un balisage SEO pris en charge par Google Search. Rien ne prouve qu'il améliore une position ou une citation dans AI Mode. En revanche, il montre précisément comment Google pense la qualité d'une connaissance destinée aux machines.

## Cinq questions avant d'utiliser une information

Lancé en juin 2026, OKF repose sur une structure volontairement simple : des fichiers Markdown accompagnés de métadonnées YAML. La version 0.2 ajoute cinq familles de signaux.

1. **Provenance** : de quelles sources vient l'information ?
2. **Confiance** : qui l'a produite et qui l'a vérifiée ?
3. **Fraîcheur** : jusqu'à quelle date peut-on la considérer comme actuelle ?
4. **Cycle de vie** : le contenu est-il en brouillon, stable ou obsolète ?
5. **Attestation** : un chiffre a-t-il bien été calculé selon la méthode annoncée ?

Les champs associés sont explicites : `sources`, `generated`, `verified`, `stale_after` et `status`. Un nouveau type, `Attested Computation`, permet aussi de déclarer une méthode de calcul autorisée et de contrôler son exécution.

Le point intelligent est ailleurs. Google n'ajoute pas une note de crédibilité arbitraire sur 100. Le format conserve des faits : auteur, date de modification, nombre d'utilisations, vérificateur humain ou machine. C'est ensuite le système qui décide du niveau de confiance acceptable.

## Ce que les équipes SEO devraient en retenir

La plupart des sites ne vont pas publier des fichiers OKF demain. Ce n'est pas le sujet. La vraie leçon concerne la **gouvernance du contenu**.

Prenons une page qui annonce « 18 ans d'expérience », un tarif de 1 250 euros par jour et une étude mise à jour en 2026. D'où viennent ces données ? Qui les a contrôlées ? Quand faut-il les revoir ? Que se passe-t-il si le tarif change dans le CRM mais pas sur le site ?

Aujourd'hui, ces réponses sont souvent réparties entre une feuille Google Sheets, un CMS, des emails et la mémoire d'une personne. Un moteur classique peut encore classer la page. Un agent chargé de comparer dix prestataires doit, lui, arbitrer entre des informations contradictoires. **Une donnée sans origine ni date devient une donnée à risque.**

OKF v0.2 pose une règle saine : séparer la production de la vérification. Le champ `generated` indique qui a créé le contenu. Le champ `verified` indique qui l'a confirmé. Un texte produit par une machine et relu par un expert n'a donc pas le même statut qu'un texte généré puis publié automatiquement. Voilà une différence utile, mesurable et honnête.

## Un plan d'action sans surinterpréter l'annonce

Je ne recommande pas d'ajouter du YAML au hasard dans toutes les pages. Ce serait du théâtre technique. Je recommande plutôt quatre contrôles.

D'abord, inventorier les données décisives : prix, disponibilité, chiffres, dates, garanties, auteurs et méthodes. Ensuite, attribuer à chacune une **source canonique**. Puis définir un responsable de validation et une date d'expiration. Enfin, vérifier que le site, les données structurées, les flux et les documents commerciaux racontent la même chose.

Pour un e-commerce, cela signifie aligner prix et stock entre HTML, JSON-LD et Merchant Center. Pour un site éditorial, cela signifie dater les statistiques, citer la source primaire et signaler les contenus dépassés. Pour un cabinet de conseil, cela signifie distinguer une opinion, un retour terrain et une donnée vérifiée.

## Mon avis : le SEO entre dans l'ère de la preuve exploitable

Pendant des années, nous avons optimisé des pages pour qu'elles soient comprises. Désormais, elles doivent aussi pouvoir être **contrôlées**. La nuance est importante.

OKF v0.2 ne remplace ni Schema.org, ni le HTML, ni les bonnes pratiques éditoriales. Ce n'est pas un raccourci vers Google. C'est un signal de direction : les agents consommeront mieux une connaissance avec une origine, un responsable, une durée de validité et une méthode vérifiable.

Le SEO ne consiste donc plus seulement à publier la bonne réponse. Il faut pouvoir démontrer pourquoi cette réponse mérite d'être utilisée. Et sur ce terrain, beaucoup de sites ont encore une dette considérable.
