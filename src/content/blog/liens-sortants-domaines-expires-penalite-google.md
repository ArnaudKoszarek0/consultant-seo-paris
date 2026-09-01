---
title: "Liens sortants vers des domaines expirés : Google ne vous pénalise pas"
description: "Un ancien lien externe mène désormais vers un site douteux ? Google ne pénalise pas automatiquement votre domaine, mais un audit éditorial reste nécessaire."
date: "2026-09-01"
tags: ["seo", "actualite"]
---

Un lien externe posé il y a cinq ans peut aujourd'hui mener vers un casino douteux, une page de médicaments ou un domaine garni de publicité. Le propriétaire a changé. Le contenu aussi. Faut-il supprimer le lien en urgence pour éviter une sanction Google ? **Non, pas pour quelques liens anciens.**

John Mueller vient de le confirmer sur Reddit. À la question d'un éditeur dont un ancien partenaire avait laissé expirer son domaine, il répond simplement : Google ne pénalise pas le site qui avait créé ce lien à l'époque où la destination était légitime. Sa formule résume bien le problème : « the web is full of turmoil », le Web est plein de bouleversements.

## Un lien sortant obsolète n'est pas une faute SEO

Google sait qu'un éditeur ne contrôle pas la vie des domaines tiers. Une entreprise ferme. Un média supprime ses archives. Un nom de domaine expire puis change de mains. Exiger que chaque lien historique reste valide et fréquentable pendant vingt ans serait absurde.

Cette position n'est d'ailleurs pas nouvelle. Depuis **2016**, Google répète qu'il préfère ignorer le bruit accumulé autour des liens plutôt que sanctionner mécaniquement les sites. La précision du jour concerne ici les liens sortants : une poignée de destinations devenues douteuses après publication ne transforme pas votre site en spammeur.

Il faut distinguer deux situations.

1. Vous avez cité une source sérieuse qui a mal vieilli. Aucun signal de manipulation.
2. Vous ajoutez volontairement des liens vers des casinos, des contrefaçons ou des vendeurs de liens. Là, l'intention et le modèle éditorial sont différents.

Google n'a jamais dit que tous les liens sortants étaient sans conséquence. Ses règles visent toujours les **liens payants non qualifiés**, les échanges artificiels et les dispositifs conçus pour manipuler le classement. Le contexte compte davantage qu'une URL isolée.

## Ne confondez pas absence de pénalité et bonne maintenance

La réponse de Mueller ne donne pas une excuse pour laisser pourrir un site. Un lien mort ou détourné reste mauvais pour le lecteur. Il peut aussi dégrader la crédibilité d'un article, surtout dans la santé, la finance, le droit ou le voyage.

Un audit utile commence par les statuts HTTP :

- **404 ou 410** : la ressource n'existe plus ;
- **301 ou 302** : vérifier la destination finale, pas seulement la première URL ;
- **200** : contrôler le contenu, car un domaine recyclé répond souvent correctement ;
- **5xx** : recontrôler plus tard avant de modifier la page.

Le piège est évident : un crawler classique repère facilement un code 404, mais pas un domaine expiré qui sert désormais une page en **200**. Il faut donc croiser le crawl avec la date de publication, le type de source et, si possible, le titre de la page distante.

## La méthode raisonnable pour un site ancien

Je déconseille de lancer une purge globale sur 50 000 liens externes. Vous risquez de supprimer des références encore utiles et de passer des journées sur un problème sans impact mesurable.

Commencez par un échantillon de **100 URL sortantes** issues des contenus les plus consultés. Vérifiez ensuite les pages YMYL, les guides qui convertissent et les articles vieux de plus de trois ans. Pour chaque anomalie, choisissez entre quatre actions : remplacer la source, supprimer le lien, conserver la mention sans lien ou archiver la page devenue sans valeur.

N'ajoutez pas `nofollow` par réflexe. Cet attribut ne répare ni une source trompeuse ni une mauvaise expérience. Pour un lien commercial, utilisez `rel="sponsored"`. Pour un contenu déposé par un utilisateur, `rel="ugc"`. Pour une référence éditoriale normale, aucun qualificatif n'est nécessaire.

## Le vrai risque est éditorial, pas algorithmique

La partie la plus intéressante de la réponse de Google vient après le « non ». Mueller précise que si **la valeur de l'ensemble du site est devenue obsolète**, le problème dépasse quelques liens cassés. Voilà le bon diagnostic.

Un article de 2019 avec une source disparue peut rester pertinent après correction. Un site composé de centaines de guides datés, de chiffres périmés et de références abandonnées perd sa valeur, même sans pénalité formelle. Ce n'est pas une sanction mystérieuse. C'est un produit éditorial qui ne répond plus correctement à la requête.

Mon avis est simple : **ne paniquez pas pour un ancien lien détourné, mais corrigez-le quand vous le trouvez**. Google tolère le chaos normal du Web. Vos lecteurs, eux, jugent immédiatement la qualité de la destination que vous leur recommandez.

Source : [déclaration de John Mueller rapportée par Search Engine Roundtable](https://www.seroundtable.com/google-old-shady-links-41987.html), 1er septembre 2026.
