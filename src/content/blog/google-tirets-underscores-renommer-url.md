---
title: "Tirets ou underscores : faut-il vraiment renommer vos URL ?"
description: "Google précise ses conseils sur les séparateurs d’URL. Faut-il remplacer les underscores existants ? Arbitrage SEO, coûts et recette de migration."
date: "2026-10-25"
tags: ["seo", "actualite"]
---

# Tirets ou traits de soulignement : faut-il vraiment renommer vos URL ?

Le 23 octobre 2026, Google a annoncé une clarification de sa documentation sur les séparateurs de mots dans les URL. Le journal officiel rattache cette modification à sa série vidéo « The Non-Canonical Cabinet ». Pas à une mise à jour de classement. Ce dimanche 25 octobre, voilà le sujet à retenir : une recommandation de nommage ne justifie pas automatiquement une migration. [Source : journal Search Central](https://developers.google.com/search/updates).

Je préfère poser la question budgétaire tout de suite. Remplacer des milliers de caractères dans des adresses déjà exploitées, pour obtenir quel bénéfice mesurable ? Sans réponse, je ne signerais pas le chantier.

## Ce que Google précise sur le tiret

Google recommande le tiret `-` plutôt que le trait de soulignement `_` pour séparer les mots. Son explication est historique : le trait de soulignement sert souvent à réunir les éléments d'un même concept, par exemple dans un nom de fonction comme `format_date`. Le tiret signale plus clairement une frontière entre les mots. [Source : documentation sur les URL](https://developers.google.com/search/docs/crawling-indexing/url-structure).

Pour une nouvelle page, je choisirais donc `/chaussures-running/` plutôt que `/chaussures_running/`. C'est une convention facile à définir dans un cahier des charges. La documentation ne fournit aucun pourcentage de trafic supplémentaire associé à ce changement. **Ne transformons pas une préférence de syntaxe en promesse commerciale.** [Source : recommandation Google](https://developers.google.com/search/docs/crawling-indexing/url-structure#use-hyphens-to-separate-words).

## Une adresse existante n'est pas un brouillon

Changer `/chaussures_running/` en `/chaussures-running/`, c'est modifier l'adresse d'une ressource. Google inclut explicitement les changements de chemin dans ses consignes de migration. Le travail implique une correspondance entre anciennes et nouvelles URL, des liens internes actualisés et des signaux cohérents. [Source : guide des migrations](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

Mon arbitrage serait différent selon le cas. Sur un site neuf, j'impose la convention avant publication. Sur une boutique ancienne dont les pages fonctionnent, je demande d'abord une justification autre que « Google préfère les tirets ». Lors d'une refonte déjà nécessaire, j'examine le changement dans le périmètre global, sans l'ajouter par réflexe.

Prenons un exemple fictif : **8 000 fiches produit**, dont 6 000 avec des traits de soulignement. Une normalisation intégrale créerait 6 000 correspondances à gérer. Si la recette révèle seulement 1 % de destinations incorrectes, cela représente 60 fiches à corriger. Ce calcul illustre un risque de production, pas une statistique observée sur les sites français.

## Le piège du remplacement automatique

Je refuserais une règle qui remplace aveuglément chaque trait de soulignement dans toute l'adresse. Il faut distinguer le texte du slug, les identifiants métier et les paramètres attendus par l'application. Une équipe doit pouvoir expliquer exactement ce que sa transformation modifie.

Voici la recette que je demanderais au développeur : tester les pages commerciales prioritaires, les références contenant des caractères particuliers, les anciennes adresses déjà redirigées et les routes utilisées par des intégrations. Mon échantillon de départ serait de 50 URL, puis un contrôle automatique de toutes les correspondances avant mise en ligne. Cinquante est un choix de méthode, pas un seuil Google.

Pour un déplacement définitif, Google recommande une redirection permanente côté serveur, avec un code 301 ou 308. Une redirection JavaScript n'est pas son premier choix. [Source : redirections et Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects).

## Le bon ticket SEO tient sur une page

Avant de valider, je demanderais quatre éléments : le motif commercial du changement, la liste des adresses concernées, le résultat des tests et le responsable du suivi. Une capture montrant une URL plus jolie ne répond à aucune de ces questions.

Google prévient aussi que les positions peuvent fluctuer pendant une migration et que le traitement prend parfois plusieurs semaines, voire davantage. Ce n'est pas une raison pour interdire les changements d'adresse. C'est une raison pour les planifier. [Source : bonnes pratiques de migration](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes#best-practices).

Ma décision pour lundi : appliquer les tirets aux nouvelles pages, documenter la convention et conserver les anciennes adresses tant qu'aucun problème réel ne justifie leur remplacement. Si une migration est déjà engagée, intégrer ce point à sa recette. Sinon, fermer le ticket « remplacer tous les traits de soulignement » et consacrer le budget à un défaut démontré.
