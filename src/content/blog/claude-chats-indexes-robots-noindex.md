---
title: "Claude indexé par Google : robots.txt n'est pas un bouclier de confidentialité"
description: "Des conversations Claude partagées ont été indexées. Comprendre pourquoi Disallow et noindex peuvent se contredire, et comment protéger les pages sensibles."
date: "2026-07-28"
tags: ["seo", "actualite"]
---

Claude indexé par Google : robots.txt n'est pas un bouclier de confidentialité

Des centaines de conversations Claude partagées ont été retrouvées dans Google et Bing ce week-end. Certaines contenaient des échanges médicaux, des documents internes, des noms et même des numéros de téléphone d'enfants. Les résultats ont depuis été retirés, mais l'incident montre une erreur technique classique : **confondre interdiction de crawl et interdiction d'indexation**.

Ce n'est pas un débat théorique. Toute plateforme qui génère des liens de partage, des factures, des espaces clients ou des documents temporaires peut exposer le même problème.

## Le conflit entre robots.txt et noindex

Le chemin `claude.ai/share/*` était bloqué dans le fichier robots.txt pour tous les robots. Les pages renvoyaient aussi un en-tête `X-Robots-Tag: none`, équivalent à `noindex, nofollow`.

Sur le papier, deux protections semblent meilleures qu'une. En réalité, elles se neutralisent.

Avec `Disallow: /share/`, Googlebot ne peut pas charger la page. Il ne lit donc jamais l'en-tête `X-Robots-Tag`. Si Google découvre l'URL depuis un lien externe, il peut l'ajouter à son index sans explorer son contenu. Le résultat apparaît alors parfois avec une URL et peu d'informations, mais il apparaît quand même.

Google documente ce comportement depuis des années : pour qu'une directive **noindex** fonctionne, le robot doit pouvoir accéder à la ressource et lire la directive. Bloquer simultanément l'accès dans robots.txt est une contradiction technique.

Le problème ne vient donc pas d'un moteur qui aurait ignoré une consigne. Il vient d'une consigne rendue illisible par une autre.

## Un lien difficile à deviner reste une page publique

Anthropic explique que les liens de partage ne sont pas devinables et qu'ils doivent être publiés quelque part pour être découverts. C'est exact, mais insuffisant.

Une URL longue n'est pas une authentification. Elle peut fuiter dans un email transféré, un forum, un outil de support, un historique partagé, un journal serveur ou une page publique. Dès qu'un crawler la trouve, la longueur du jeton ne protège plus rien.

La règle est simple : **si une page ne demande ni connexion ni autorisation, elle est publique**. Le mot « privé » dans l'interface ne change pas la réponse HTTP du serveur.

L'incident n'est d'ailleurs pas propre à Claude. Des conversations ChatGPT partagées ont été retirées des résultats en août 2025. Google avait déjà dû désindexer des transcriptions Bard en 2023. Trois cas en trois ans, avec le même fond : un lien de partage est traité comme un document web alors que l'utilisateur le perçoit comme un message privé.

## La bonne architecture pour exclure une page

Pour une page publique qui ne doit pas apparaître dans les moteurs, laissez le crawler y accéder et renvoyez :

`X-Robots-Tag: noindex, nofollow`

ou une balise meta robots équivalente dans le HTML. N'ajoutez pas de `Disallow` sur ce chemin tant que Google doit constater le noindex.

Pour une donnée réellement sensible, **noindex ne suffit pas**. Il faut une authentification, une autorisation vérifiée côté serveur et, idéalement, une expiration du lien. Une réponse `401` ou `403` est une barrière d'accès. Une balise SEO n'en est pas une.

Si des URL sont déjà indexées, procédez dans le bon ordre : rendez le noindex accessible, demandez une suppression temporaire dans Search Console si l'urgence le justifie, puis attendez le nouveau crawl. Pour un contenu supprimé, renvoyez `404` ou `410`. Bloquer immédiatement Googlebot dans robots.txt peut ralentir la prise en compte de la suppression.

## L'audit à faire aujourd'hui

Cherchez les répertoires qui produisent des liens partageables : `/share/`, `/public/`, `/download/`, `/invoice/`, `/preview/` ou `/document/`. Vérifiez ensuite quatre points :

1. La page répond-elle sans session authentifiée ?
2. L'URL apparaît-elle dans des liens internes ou externes ?
3. Googlebot peut-il lire la directive noindex ?
4. Le lien expire-t-il et peut-il être révoqué ?

Testez aussi les en-têtes avec une requête HTTP réelle. Une meta ajoutée en JavaScript ou un réglage affiché dans un back-office ne constitue pas une preuve.

Mon avis est net : **robots.txt gère le crawl, pas la confidentialité**. Utiliser ce fichier pour protéger des données sensibles revient à poser un panneau « ne pas entrer » devant une porte sans serrure. En SEO technique comme en sécurité, il faut distinguer visibilité et accès. Cette confusion vient encore d'exposer des conversations humaines. Elle était parfaitement évitable.
