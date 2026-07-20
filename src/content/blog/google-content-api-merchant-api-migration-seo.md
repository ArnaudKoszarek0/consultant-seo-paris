---
title: "Content API Shopping : la migration Merchant API devient urgente"
description: "Le Content API for Shopping s'arrête le 18 août 2026. Voici les risques SEO e-commerce et le plan de migration vers Merchant API."
date: "2026-07-20"
tags: ["seo", "actualite"]
---

Le **Content API for Shopping s'arrête le 18 août 2026**. Google vient d'ouvrir un formulaire pour demander un délai supplémentaire. Les retardataires peuvent solliciter une extension jusqu'au 15 octobre ou au 31 décembre 2026.

Ce n'est pas une petite mise à jour technique réservée aux développeurs. Une migration ratée peut dégrader l'alimentation de Merchant Center, les annonces Shopping et les fiches produit gratuites. Autrement dit, elle peut couper une partie de votre visibilité e-commerce, payante comme organique.

## Le 18 août n'est pas une date indicative

Google remplace le Content API for Shopping par le **Merchant API**. Sans migration terminée ni extension accordée, Google annonce une « dégradation du service ». La formule est diplomatique. Dans les faits, les appels de votre intégration peuvent cesser de fonctionner correctement.

Les conséquences possibles sont très concrètes :

- prix ou stocks qui ne remontent plus ;
- nouveaux produits absents de Merchant Center ;
- promotions non actualisées ;
- erreurs de synchronisation invisibles pendant plusieurs heures ;
- perte d'éligibilité dans Shopping et les fiches gratuites.

Pour un catalogue de 50 produits, une vérification manuelle reste possible. Pour 50 000 références, non. Le flux produit est un composant de production. Il doit être surveillé comme une API de paiement ou un système de réservation.

## Merchant API n'est pas un simple changement d'URL

Le nouvel endpoint prend la forme `merchantapi.googleapis.com/{SUB_API}/{VERSION}/{RESOURCE_NAME}:{METHOD}`. Mais remplacer un domaine dans le code ne suffit pas.

La structure des ressources change. Merchant API utilise un champ `name` qui embarque le compte parent et l'identifiant du produit. Les prix sont transmis en micros via `amountMicros`, avec la devise dans `currencyCode`. La méthode `customBatch` n'est plus prise en charge. Les traitements en lot doivent donc être repensés, parallélisés ou exécutés de manière asynchrone.

Il y a aussi de vrais gains. La pagination passe de **250 à 1 000 lignes par appel**. L'API gère plusieurs sources de données, dont les flux supplémentaires, stocks locaux, promotions, avis produits et avis marchands. Elle permet également des mises à jour partielles avec `products.patch`, sans renvoyer tous les champs du produit.

Mon avis est simple : **demander une extension sans lancer la migration serait une erreur**. Le délai sert à sécuriser la bascule, pas à reporter le problème jusqu'à Noël.

## Pourquoi c'est aussi un sujet SEO

Merchant Center ne sert plus seulement à Google Ads. Ses données alimentent les fiches gratuites, les résultats produit, les surfaces locales et certaines réponses commerciales de Google. Un prix divergent, une disponibilité périmée ou une URL produit mal synchronisée peut faire disparaître une offre sans que la page soit désindexée.

C'est précisément ce qui rend l'incident difficile à diagnostiquer. Le site répond en 200. La page reste dans Search Console. Pourtant, la visibilité commerciale baisse parce que **la donnée marchande n'est plus fiable**.

Le SEO e-commerce doit donc contrôler trois couches :

1. la page produit et ses données structurées `Product` ;
2. le flux ou l'API Merchant Center ;
3. la cohérence réelle entre prix, stock, livraison et politique de retour.

Si ces trois couches se contredisent, Google choisira rarement de vous faire confiance.

## Le plan de migration que je recommande

Commencez par identifier tous les appels au Content API, pas seulement l'envoi des produits. Vérifiez les stocks locaux, promotions, rapports, statuts de compte et suppressions de références. Associez ensuite le projet Google Cloud au compte Merchant Center avec l'enregistrement développeur prévu par Google.

Faites tourner les deux API en parallèle sur un échantillon représentatif : produits simples, variantes, promotions, ruptures de stock et articles vendus en magasin. Comparez les réponses, les erreurs et les données visibles dans Merchant Center.

Ajoutez enfin des alertes sur quatre indicateurs : taux d'erreur API, nombre de produits actifs, fraîcheur du stock et volume de refus. Une migration n'est terminée que lorsque ces métriques restent stables plusieurs jours.

Si vous ne pouvez pas tenir le 18 août, demandez l'extension maintenant avec vos identifiants de projets Google Cloud et une justification précise. Puis fixez une date interne plus proche. **Le 31 décembre est un filet de sécurité, pas un planning.**
