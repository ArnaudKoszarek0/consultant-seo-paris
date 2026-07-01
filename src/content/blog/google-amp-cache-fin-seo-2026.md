---
title: "AMP en 2026 : Google coupe le cordon du cache, pas le sujet SEO"
description: "Google met à jour sa documentation AMP : fin du modèle cache comme béquille, retour à la responsabilité technique côté éditeur."
date: "2026-07-01"
tags: ["seo", "actualite"]
---

# AMP en 2026 : Google coupe le cordon du cache, pas le sujet SEO

Le 1er juillet 2026, Google a mis à jour sa documentation AMP. Pas une note cosmétique. Google Search renvoie désormais les utilisateurs directement vers les pages AMP hébergées chez l'éditeur, au lieu de passer par l'AMP Viewer, de l'AMP Cache et des signed exchanges.

La phrase importante est simple : AMP continuera à se classer comme n'importe quelle autre page web.

Dit autrement : AMP n'est pas pénalisé. AMP n'est pas favorisé. AMP redevient juste une URL à gérer proprement.

## Ce que Google change vraiment

Pendant des années, AMP a été un montage hybride. L'éditeur publiait une page, mais Google pouvait servir une version en cache, avec une URL Google, un viewer Google, et parfois des configurations techniques que personne n'avait envie de maintenir. C'était rapide, oui. Mais c'était aussi une couche de complexité.

La mise à jour de juillet 2026 retire des références devenues obsolètes dans la documentation officielle : AMP Viewer, AMP Cache, signed exchange. Google indique que les utilisateurs seront envoyés directement vers l'hôte AMP du publisher.

On sort d'un modèle où Google servait une copie optimisée de votre contenu. On revient vers un modèle plus classique : votre serveur, votre URL, votre responsabilité.

Et c'est là que le sujet devient SEO.

## Le cache Google ne vous protège plus de votre dette technique

Pendant longtemps, AMP a servi de béquille. Certains sites avaient une version desktop médiocre, une version mobile lourde, puis une version AMP propre uniquement parce que le framework imposait des limites. Résultat : la page AMP sauvait les meubles.

Ce confort disparaît progressivement.

Si Google renvoie plus directement vers votre propre hôte AMP, alors la performance réelle de votre infrastructure reprend du poids opérationnel. Pas forcément comme signal isolé de ranking. Mais comme condition de crawl, d'expérience, de conversion et de stabilité.

Les seuils restent connus : LCP sous 2,5 secondes, INP sous 200 ms, CLS sous 0,1, mesurés au 75e percentile dans CrUX. Ce ne sont pas des trophées Lighthouse. Ce sont des garde-fous. Si votre page AMP est rapide dans un test local mais lente pour les vrais utilisateurs, vous avez un problème.

## Faut-il supprimer AMP ? Non. Pas automatiquement.

La mauvaise réaction serait de lire cette actualité et de désinstaller AMP dans la foulée.

Mauvais réflexe.

AMP peut encore être utile si votre stack principale est lourde, si votre site média repose sur un historique éditorial complexe, ou si vous avez une base d'URLs AMP déjà indexée, maillée et stable. On ne casse pas une architecture qui fonctionne pour le plaisir de faire moderne.

Mais il faut arrêter de traiter AMP comme une assurance SEO.

La bonne question n'est pas : "AMP est-il encore bon pour Google ?"

La bonne question est : "Ai-je encore besoin d'une version AMP séparée pour fournir une page rapide, lisible et maintenable ?"

Si la réponse est oui, gardez AMP. Si la réponse est non, planifiez une sortie propre.

## Le plan d'audit en 5 points

Premier point : vérifiez vos canonicals. Une page AMP doit pointer vers la version canonique correcte. La version canonique doit déclarer l'alternate AMP si vous conservez le couple. Pas d'ambiguïté.

Deuxième point : contrôlez les redirections. Si vous migrez hors AMP, chaque URL AMP doit avoir une destination logique. Pas une redirection massive vers la home. Pas un 404 paresseux.

Troisième point : comparez les performances réelles. Pas seulement PageSpeed Insights. Regardez CrUX, logs serveur, temps de réponse, poids HTML, dépendances JS, images. Un bon SSR moderne peut remplacer AMP. Un WordPress bricolé avec 38 plugins, non.

Quatrième point : surveillez Search Console. Pages indexées, pages exclues, canonical choisie par Google, clics mobile, Discover si vous êtes média. Une migration AMP ratée ne crie pas toujours le premier jour. Elle fuit lentement.

Cinquième point : gardez une logique éditoriale. AMP ou pas AMP, Google n'a pas changé son obsession : contenu utile, source claire, page accessible, entité identifiable, expérience correcte.

## Mon avis

AMP a été une réponse brutale à un web mobile trop lent. En 2015, ça se défendait. En 2026, le web a d'autres outils : SSR, edge rendering, images modernes, HTTP/3, frameworks plus sobres quand ils sont bien utilisés.

Mais le fond reste le même. Google ne récompense pas une technologie par principe. Il récompense un résultat utilisable.

La fin progressive du modèle AMP Cache rappelle une chose simple : le SEO technique n'est pas une collection de badges Google. C'est la capacité à livrer une page propre, rapide, compréhensible et contrôlable.

Si AMP vous aide à faire ça, gardez-le.

S'il sert juste à masquer une dette technique, il est temps de regarder le problème en face.
