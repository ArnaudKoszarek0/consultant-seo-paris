---
title: "Microsoft-Decision-1 : trier un audit SEO sans automatiser les erreurs"
description: "Microsoft lance un modèle de décision. Voici comment tester le tri des anomalies SEO, mesurer les erreurs et garder la validation humaine."
date: "2026-10-12"
tags: ["seo", "actualite"]
---

Le 9 octobre 2026, Microsoft a présenté **Microsoft-Decision-1**, un modèle conçu pour choisir entre des options définies plutôt que rédiger des réponses. Son annonce décrit une comparaison sur 36 benchmarks et près de 150 000 questions. Ce sont des résultats publiés par le fournisseur, pas une validation de ses performances sur vos données SEO. [Source : annonce Microsoft](https://commandline.microsoft.com/microsoft-decision-1-model-foundry/).

Pourquoi en parler dans la veille SEO du 12 octobre ? Parce que je vois une application plus intéressante que produire un énième texte automatique : **trier les anomalies d’un audit avant de mobiliser un développeur**. C’est une proposition de méthode, pas l’annonce d’un nouveau facteur de classement.

## Un modèle qui choisit, sans rédiger son raisonnement

La documentation Microsoft distingue trois types de questions : une condition binaire, un choix parmi plusieurs options et une note sur une échelle. Le modèle renvoie des résultats structurés avec des probabilités, mais pas de justification rédigée. [Source : documentation technique](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/use-foundry-models-microsoft-decision).

Cette limite m’intéresse autant que la promesse. Dans un audit, je ne veux pas qu’une IA invente une explication convaincante autour d’un statut HTTP. Je veux pouvoir comparer sa décision aux éléments observés.

L’annonce indique une disponibilité dans Microsoft Foundry et via OpenRouter. Cela ne constitue pas une recommandation d’achat : je demanderais un essai sur des entrées représentatives avant toute intégration. [Source : disponibilité annoncée](https://commandline.microsoft.com/microsoft-decision-1-model-foundry/).

Mon interprétation : avant de parler d’automatisation SEO, construisons un test que l’outil peut réellement rater.

## Le bon périmètre : orienter un ticket, pas modifier le site

Voici le protocole que je proposerais pour un premier essai. Prenez **200 anomalies déjà arbitrées** par votre équipe. Réservez-en 100 pour définir les catégories et gardez les 100 autres pour l’évaluation finale, sans ajuster les consignes après avoir regardé leurs réponses.

Pour chaque cas, préparez un dossier court : URL, type de page, statut HTTP observé, date du contrôle, comportement attendu et importance commerciale connue. Ajoutez les preuves utiles. Pas un export brut de 40 colonnes dont personne n’a défini le sens.

Demandez ensuite une seule orientation : équipe technique, équipe éditoriale, contrôle manuel ou aucune intervention justifiée par les éléments fournis. Je prévoirais expressément une catégorie « informations insuffisantes ».

Exemple fictif : une ancienne page de campagne renvoie 404 et le dossier précise que l’offre est définitivement terminée. Autre dossier : une catégorie commerciale active renvoie 404 depuis une livraison technique. Même code, décisions potentiellement différentes. C’est cette distinction que je voudrais tester, sans laisser le modèle déduire une intention métier absente des données.

## Une probabilité élevée ne vaut pas autorisation

Microsoft recommande de calibrer les seuils selon le coût des faux positifs et des faux négatifs, avec une possibilité d’abstention. La documentation demande aussi de tester la sensibilité à l’ordre des options. [Source : bonnes pratiques Microsoft](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/use-foundry-models-microsoft-decision#best-practices).

Appliquons cette prudence au SEO. Je refuserais qu’un score, même élevé, déclenche seul une suppression de page, une redirection ou un changement de directive d’indexation. Pour ce premier essai, le système remplit une file de tickets. Un humain valide les corrections.

Je mesurerais séparément les mauvaises orientations et les urgences manquées. Avec un scénario fictif de 90 décisions correctes sur 100, une précision globale de 90 % semble acceptable. Mais si les 10 erreurs concernent toutes des pages commerciales indisponibles, le système échoue à la mission qui lui a été confiée.

**Le taux moyen masque le coût des erreurs.** Mon tableau de contrôle inclurait donc la catégorie attendue, la réponse obtenue, le niveau de confiance, la gravité de l’écart et le temps de vérification humaine.

## Ce que je demanderais avant de payer

Le 12 octobre, Microsoft a publié un exemple de priorisation d’incident séparant les faits décrits des questions posées au modèle. Cette séparation est documentée ; son intérêt pour le triage SEO reste à démontrer sur notre propre jeu d’essai. [Source : exemple Microsoft](https://techcommunity.microsoft.com/blog/educatordeveloperblog/not-every-decision-needs-an-llm-getting-started-with-microsoft-decision-1/4563468).

Je comparerais le résultat à une solution beaucoup moins séduisante : quelques règles explicites et un tableau de suivi. Même échantillon, mêmes catégories, même contrôle humain.

Si le modèle n’améliore ni le temps de traitement ni la détection des dossiers importants, je ne l’intègre pas. Une brique IA supplémentaire n’est pas un progrès en soi. Pour cet usage, je veux moins de tickets mal orientés, pas davantage de commentaires automatiques.
