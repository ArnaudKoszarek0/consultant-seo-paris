---
title: "Google retire le validateur Book actions : quelle recette de flux ?"
description: "Le validateur des flux Book actions disparaît. Voici une méthode de contrôle des éditions et des liens, sans confondre retrait d’outil et fin du programme."
date: "2026-11-19"
tags: ["seo", "actualite"]
---

Le **Data Feed validation tool** de Google n'est plus disponible. La modification est datée du **18 novembre 2026** dans le [journal officiel de Search Central](https://developers.google.com/search/updates). Elle mérite l'attention des équipes qui gèrent des catalogues de livres : leur procédure de contrôle ne peut plus dépendre de cet outil.

L'actualité du 19 novembre n'est donc pas la disparition des livres dans Google. C'est la perte d'un contrôle technique externe. Mon avis : autant en profiter pour construire une vraie recette de flux, plutôt que chercher un autre bouton vert.

## Book actions : un périmètre précis

Google a remplacé la section consacrée au validateur par des vérifications d'erreurs courantes. Cela concerne la documentation **Book actions**, pas une annonce de fermeture de tous les outils de données structurées. Le [journal de modification](https://developers.google.com/search/updates) décrit exactement ce retrait.

Le dispositif reste réservé aux fournisseurs de livres intégrés au programme. Remplir le formulaire d'intérêt ne garantit pas l'admission. Ce point figure dans la [documentation Book actions](https://developers.google.com/search/docs/appearance/structured-data/book). Une petite librairie ne doit donc pas lancer un chantier de flux en supposant obtenir automatiquement ce traitement dans les résultats.

Pour les participants, Google demande désormais de contrôler notamment l'orthographe de `@type` et le contexte Schema.org des actions `ReadAction` et `BorrowAction`. C'est la [consigne officielle de vérification](https://developers.google.com/search/docs/appearance/structured-data/book#check-your-feed-for-common-errors). Je la considère comme un minimum, pas comme une recette complète.

## Mon protocole : bloquer les erreurs avant l'envoi

Je recommande de placer les contrôles dans le processus qui fabrique le catalogue. À chaque export, un rapport doit indiquer ce qui a changé et ce qui empêche sa livraison. Le développeur ne devrait pas découvrir un problème en ouvrant manuellement un fichier de plusieurs milliers de lignes.

Premier contrôle proposé : vérifier que le fichier se lit correctement, puis tester les champs attendus sur chaque enregistrement. Je séparerais les erreurs de syntaxe des incohérences métier. Un fichier illisible doit bloquer l'export ; une valeur commerciale suspecte doit déclencher une revue identifiable.

Deuxième contrôle : rapprocher chaque édition de la fiche réellement vendue. Dans votre recette, choisissez volontairement des cas qui se ressemblent : poche et grand format, traduction et édition originale, numérique et papier. Le test doit répondre à une question simple : **achète-t-on bien le livre annoncé ?**

Troisième contrôle : garder un historique des identifiants. Je demanderais une alerte lorsqu'un identifiant déjà connu change soudain de titre, de langue ou de format. À l'inverse, une correction de ponctuation ne devrait pas déclencher une crise. Les règles doivent aider l'équipe, pas lui envoyer cinquante faux problèmes par matin.

## Tester 30 parcours plutôt que contempler un fichier

Voici un échantillon de recette que je propose : **10 nouveautés, 10 titres du fonds et 10 cas sensibles**, dont des changements de disponibilité. Ces nombres sont un choix de méthode, pas un seuil fixé par Google.

Pour chaque cas, partez du lien contenu dans l'export et suivez le parcours jusqu'à la fiche. Notez la destination, l'édition affichée et la possibilité effective d'achat ou d'emprunt. Google demande lui-même de vérifier manuellement des liens profonds avant la revue du flux dans sa [procédure de soumission](https://developers.google.com/search/docs/appearance/structured-data/book#submit-your-feed-file-for-review).

Ajoutez ensuite vos propres scénarios de régression. Que se passe-t-il après une refonte du catalogue ? Après le retrait d'une édition ? Après un changement de domaine ? Je conserverais les résultats attendus dans des tests réexécutables. Une capture d'écran ancienne ne suffit pas à valider la livraison suivante.

Prenons un exemple fictif : sur 30 parcours testés, 3 conduisent à une autre édition. Cela représente **10 % de l'échantillon**. Ce n'est pas une estimation fiable de tout le catalogue, mais c'est déjà assez pour refuser sa livraison sans investigation.

## Le livrable utile : un rapport que quelqu'un traite

Je demanderais quatre informations par anomalie : l'identifiant concerné, le contrôle échoué, le responsable et la décision prise. Conservez aussi l'export précédent pour comparer les changements. Vous aurez une preuve exploitable quand le fournisseur du catalogue et l'équipe technique se renverront la responsabilité.

La suppression du validateur ne justifie ni panique SEO ni promesse de nouveaux classements. Elle justifie un ticket précis : **remplacer la dépendance à l'outil disparu par une recette documentée du flux Book actions**. Avec un propriétaire, des tests et une date de livraison. C'est moins spectaculaire qu'une annonce sur l'algorithme. C'est beaucoup plus facile à vérifier.
