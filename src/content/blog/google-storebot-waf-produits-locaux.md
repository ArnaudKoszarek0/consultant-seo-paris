---
title: "Google StoreBot bloqué : vos produits locaux peuvent disparaître en 48 heures"
description: "Google précise comment diagnostiquer les blocages de StoreBot par les WAF et protections antibot, avec un délai de réactivation de 12 à 48 heures."
date: "2026-07-17"
tags: ["seo", "actualite", "e-commerce"]
---

Google a mis à jour le 17 juillet 2026 sa documentation sur **Google StoreBot**, le robot qui contrôle les pages de produits disponibles en magasin. Le point le plus utile est enfin chiffré : après correction d'un blocage, il faut généralement **12 à 48 heures** pour que les produits soient de nouveau approuvés et réapparaissent dans les annonces produits en magasin.

Ce n'est pas un sujet de position moyenne. C'est plus brutal. Si StoreBot ne peut pas charger la page, Google ne peut pas vérifier le prix, le stock ou le retrait. La fiche locale peut alors être refusée, même si votre flux Merchant Center est parfaitement rempli.

## StoreBot n'est pas simplement Googlebot

Beaucoup d'équipes ont sécurisé leur site avec une règle apparemment logique : autoriser Googlebot et bloquer les autres robots. Le problème est que Google utilise plusieurs crawlers pour ses différents services. **StoreBot, Googlebot et Googlebot-Image ne sont pas interchangeables.**

Une liste blanche limitée au robot de Search peut donc laisser les pages organiques accessibles tout en coupant le contrôle des produits locaux. Le site continue à être indexé. Search Console paraît normale. Pourtant, Merchant Center remonte des erreurs d'accès et les offres en magasin cessent d'être diffusées.

C'est précisément le genre de panne qui fait perdre du chiffre d'affaires sans faire chuter les positions classiques.

## Les blocages viennent souvent du WAF, pas du robots.txt

La [documentation officielle de Google](https://support.google.com/merchants/answer/13484511?hl=fr) cite plusieurs causes. Le `robots.txt` reste à contrôler, bien sûr. Mais les erreurs modernes viennent souvent d'une couche moins visible : CDN, pare-feu applicatif, protection antibot ou règle de sécurité maison.

Google mentionne cinq points à vérifier :

- le filtrage par **user-agent** ;
- les listes blanches d'adresses IP ;
- le blocage au niveau du pare-feu ;
- le **fingerprinting** du navigateur ;
- les pages trop lentes ou instables.

Le fingerprinting mérite une vraie attention. Certains outils ne bloquent pas une chaîne de user-agent. Ils calculent une empreinte à partir de l'IP, des en-têtes HTTP, du comportement JavaScript et de la vitesse d'exploration. StoreBot peut alors être classé comme trafic automatisé suspect, même si aucune règle ne le nomme explicitement.

Même piège avec les IP. Google déconseille une liste statique, car StoreBot peut utiliser des adresses différentes de Googlebot. La méthode propre consiste à vérifier l'origine par **DNS inverse puis DNS direct**, conformément à la procédure Google, pas à copier une liste trouvée dans un forum.

## Le bon diagnostic tient dans les logs

Quand Merchant Center signale une page inaccessible, je ne commence pas par modifier le flux. Je prends une URL refusée et je reconstruis son parcours technique.

Il faut vérifier le code HTTP renvoyé à StoreBot, les redirections, le temps de réponse, les challenges JavaScript, les réponses `403`, `429` et `503`, puis la règle WAF qui s'est déclenchée. Un test depuis votre navigateur ne prouve rien. Votre IP, vos cookies et votre exécution JavaScript ne ressemblent pas à ceux d'un crawler.

Les journaux du CDN et du serveur doivent permettre de répondre à trois questions : **StoreBot est-il arrivé, quelle réponse a-t-il reçue, et quelle couche l'a produite ?** Sans cela, on corrige au hasard.

Je recommande aussi de tester le parcours d'achat. Google précise que StoreBot doit pouvoir accéder à la page produit en magasin et au processus de paiement. Autoriser la fiche mais bloquer l'étape suivante ne règle donc pas complètement le problème.

## Ne promettez pas un retour immédiat

Une fois l'accès restauré, Google reteste continuellement les pages. Le délai annoncé est de **12 à 48 heures**. Il sert à vérifier que la disponibilité est durable avant de réactiver les produits concernés.

Ce délai doit entrer dans le suivi d'incident. Notez l'heure du correctif, surveillez les nouveaux passages de StoreBot dans les logs et contrôlez le statut Merchant Center à H+12, H+24 puis H+48. Ne changez pas cinq règles pendant cette fenêtre, sinon vous ne saurez jamais laquelle a résolu le blocage.

Mon avis est simple : **un WAF qui bloque vos propres canaux d'acquisition n'est pas bien configuré, même s'il affiche zéro alerte de sécurité**. En e-commerce local, l'audit SEO ne s'arrête plus au HTML et au flux produit. Il doit inclure la chaîne CDN, antibot, serveur et paiement. Sinon, votre stock existe, votre page existe, mais Google ne peut pas le constater.
