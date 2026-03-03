---
title: "Googlebot ne lit que 2 Mo de votre HTML : ce que ça change pour votre SEO"
description: "Google a clarifié les limites de crawl de Googlebot : 2 Mo pour le HTML, 64 Mo pour les PDF. Voici comment auditer vos pages et éviter la troncature."
date: "2026-03-03"
tags: ["seo technique", "googlebot", "crawl"]
---

Google vient de clarifier un truc que beaucoup de SEO ignoraient. **Googlebot a une limite de taille par fichier.** 2 Mo pour le HTML et les fichiers texte. 64 Mo pour les PDF. Au-delà, il arrête de télécharger et indexe ce qu'il a récupéré. Le reste ? Poubelle.

Ce n'est pas un changement de comportement. C'est une mise à jour de la documentation officielle. Mais ça met en lumière un angle mort du SEO technique que presque personne n'audite.

## 2 Mo : la ligne rouge du HTML

Quand Googlebot crawle une page, il télécharge le HTML brut (non compressé). S'il dépasse **2 Mo**, il coupe. Tout ce qui se trouve après la coupure ne sera ni lu, ni indexé, ni pris en compte.

Ça veut dire quoi concrètement ?

Si votre contenu principal est en bas de page, vos **balises H2, vos liens internes, vos données structurées** risquent d'être invisibles pour Google. Le bot a déjà fermé la porte.

Pour la majorité des sites, pas de panique. Une page HTML standard pèse entre 50 et 200 Ko. On est loin du seuil. Mais certains cas sont problématiques.

## Qui est vraiment concerné ?

Les sites **e-commerce** avec des pages catégories qui affichent 200 produits inline, avec du JSON-LD pour chaque fiche, du CSS inline, du JavaScript embarqué. Là, on peut exploser les 2 Mo sans s'en rendre compte.

Les **CMS mal configurés** aussi. WordPress avec 15 plugins qui injectent chacun leur lot de scripts dans le `<head>`. Certains thèmes génèrent du HTML gonflé avec des classes CSS à rallonge et du balisage superflu.

Les **pages one-page** très longues. Landing pages avec 30 sections, animations, SVG inline, contenu dupliqué pour le responsive. Ça s'accumule vite.

Et un cas souvent oublié : les **tables de données volumineuses**. Des tableaux comparatifs avec des centaines de lignes, générés côté serveur. Le HTML résultant peut être massif.

## Chaque ressource est évaluée séparément

Point technique important : les fichiers CSS et JavaScript référencés dans votre HTML sont crawlés **individuellement**. Chacun d'eux a sa propre limite de 2 Mo. Si votre fichier CSS principal fait 3 Mo (oui, ça existe), Googlebot n'en lira que les deux premiers. Le rendu de la page sera incomplet, ce qui peut impacter l'indexation du contenu visible.

Les PDF, eux, bénéficient d'une limite plus généreuse : **64 Mo**. Suffisant pour la plupart des usages. Mais si vous publiez des rapports de 100 pages avec des images haute résolution intégrées, vérifiez.

## Comment auditer ça en 5 minutes

Première étape : vérifiez la taille de vos pages HTML. Pas la taille du fichier compressé (gzip), la taille **décompressée**. C'est celle qui compte pour Googlebot.

```bash
curl -s -o /dev/null -w '%{size_download}' https://votresite.com/page
```

Cette commande vous donne la taille en octets. Divisez par 1 048 576 pour avoir les Mo.

Deuxième étape : passez vos 50 pages les plus importantes dans Screaming Frog ou un crawler technique. Filtrez par taille HTML. Tout ce qui dépasse **1,5 Mo** mérite votre attention.

Troisième étape : regardez où se trouve votre contenu dans le DOM. Si votre structured data est en fin de `<body>`, et que votre page est lourde, déplacez-la dans le `<head>`.

## Ce que ça change pour votre stratégie

Rien de révolutionnaire. Mais c'est un rappel utile : le **SEO technique n'est pas optionnel**. On passe beaucoup de temps sur le contenu, les backlinks, l'autorité. On oublie que si le bot ne peut pas lire votre page, tout le reste ne sert à rien.

Mon conseil : intégrez un check de taille HTML dans vos audits réguliers. Comme vous vérifiez les erreurs 404 ou les balises title manquantes. C'est le même niveau d'hygiène technique.

Google ne vous pénalise pas pour une page lourde. Il ne la lit simplement pas en entier. C'est pire.
