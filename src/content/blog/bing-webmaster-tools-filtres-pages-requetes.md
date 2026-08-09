---
title: "Bing Webmaster Tools prépare enfin le filtrage par page et par requête"
description: "Microsoft prépare des filtres natifs par page et requête dans Bing Webmaster Tools. Un changement utile pour diagnostiquer cannibalisation, pertes de clics et migrations."
date: "2026-08-09"
tags: ["seo", "actualite", "bing", "webmaster-tools"]
---

# Bing Webmaster Tools prépare enfin le filtrage par page et par requête

Le rapport de performance de Bing Webmaster Tools a un défaut assez pénible : il montre les requêtes et les pages, mais ne permet pas encore de les croiser proprement dans l'interface. Microsoft vient de confirmer qu'il travaillait sur ce point.

Le 31 juillet 2026, Lily Ray a demandé à Krishna Madhavan, responsable chez Microsoft, d'ajouter un filtrage des requêtes au niveau d'une page. Réponse publique : **« We will work on it »**. Pas de date, pas de maquette, pas de promesse de livraison au prochain sprint. Il faut donc rester précis : la fonction est annoncée, pas disponible.

C'est une petite actualité. Mais elle touche un vrai problème de diagnostic SEO.

## Le rapport Bing reste trop plat

Dans Bing Webmaster Tools, on peut consulter les impressions, les clics, le CTR, les positions, les requêtes et les pages. On peut aussi exporter les données. En revanche, l'interface ne propose pas le niveau d'analyse le plus utile : sélectionner une URL puis afficher uniquement les requêtes associées, ou partir d'une requête pour examiner les pages qui se concurrencent.

Google Search Console sait le faire depuis longtemps. On choisit une page, une requête, un pays, un appareil ou une apparence dans les résultats. Puis on ajoute un second filtre. Cette logique transforme une liste de chiffres en outil d'enquête.

Chez Bing, l'absence de filtre oblige aujourd'hui à télécharger les données et à les retraiter dans Excel, Google Sheets, Looker Studio ou un script. Pour un audit ponctuel, ce n'est pas dramatique. Pour le suivi quotidien de **50, 500 ou 5 000 URL**, c'est du temps perdu et un risque d'erreur supplémentaire.

## Trois diagnostics qui deviendront plus simples

Le premier cas est la **cannibalisation**. Une même requête peut faire apparaître plusieurs URL selon les jours. Sans croisement page-requête, on voit les éléments séparément mais on comprend mal leur relation. Avec un filtre natif, il sera plus facile d'identifier une page catégorie concurrencée par une fiche produit, un article ou une URL paramétrée.

Deuxième cas : la chute d'une page importante. Imaginons qu'une URL perde **35 % de clics en 28 jours**. Le total ne dit pas si le problème vient d'une requête principale, d'un groupe de requêtes ou d'une baisse générale. Le filtre permettra de comparer les expressions touchées, leur position et leur CTR sans reconstruire l'analyse hors de l'outil.

Troisième cas : la migration. Après une refonte, il faut vérifier que les nouvelles URL récupèrent bien les requêtes des anciennes. Une lecture page par page donne une réponse opérationnelle. Un tableau global, beaucoup moins.

## Bing redevient une source de données sérieuse

L'intérêt dépasse la part de marché classique de Bing. Son index alimente plusieurs expériences Microsoft, dont Copilot. Bing Webmaster Tools développe aussi des rapports liés aux citations et aux performances dans les réponses générées par IA.

Cela ne signifie pas que chaque donnée Bing représente le marché Google. Ce serait faux. Mais elle donne un **deuxième point d'observation**. Quand Search Console affiche un comportement et Bing un autre, l'écart peut révéler un problème de crawl, d'indexation, de compréhension sémantique ou simplement de composition des audiences.

Le bon réflexe n'est donc pas de remplacer Search Console. Il consiste à confronter les deux sources.

## Ce qu'il faut faire maintenant

Il n'y a rien à installer. Et surtout, aucune raison de vendre déjà un nouveau tableau de bord à un client.

En attendant la livraison, exportez les données Bing et conservez un modèle simple avec quatre colonnes de base : **date, requête, page et clics**. Ajoutez impressions, CTR et position si l'export les fournit au niveau nécessaire. Vous pourrez déjà repérer les changements d'URL et les pertes concentrées sur quelques requêtes.

Quand le filtre natif arrivera, testez quatre points : le croisement de plusieurs filtres, les expressions régulières, la comparaison de périodes et l'export du résultat filtré. Ce sont ces détails qui détermineront si la nouveauté remplace réellement un traitement externe.

Mon avis est simple : Microsoft corrige une lacune évidente, avec plusieurs années de retard sur Google. Mais c'est utile. Un outil SEO n'a pas besoin d'un bouton IA de plus. Il a besoin de permettre aux consultants de poser une question précise aux données et d'obtenir une réponse vérifiable.
