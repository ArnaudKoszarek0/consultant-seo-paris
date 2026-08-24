---
title: "Merchant Center impose 500 × 500 pixels : l'audit image à lancer"
description: "Dès janvier 2027, Google Merchant Center refusera les images produit sous 500 × 500 pixels. Méthode d'audit et cible recommandée."
date: "2026-08-24"
tags: ["seo", "actualite"]
---

Google durcit enfin un point que beaucoup de catalogues e-commerce traitent encore comme un détail : la définition des images produit. À partir du 31 janvier 2027, les visuels transmis à Merchant Center devront mesurer au moins **500 × 500 pixels**.

Le délai paraît confortable. Il ne l'est pas si votre catalogue compte 20 000 références, plusieurs langues et des images héritées de fournisseurs. Attendre janvier pour ouvrir le dossier serait une erreur.

## 500 × 500 pixels : le minimum, pas la cible

Google a ajouté la nouvelle exigence dans sa documentation officielle sur l'attribut `image_link`. Une image inférieure à 500 × 500 pixels déclenchera un avertissement " Image trop petite " ou " Image trop petite en raison de changements de règles à venir " dans Merchant Center.

La date d'application est précise : 31 janvier 2027. Mais Google recommande déjà des fichiers d'au moins 1 500 × 1 500 pixels pour obtenir de bonnes performances dans l'ensemble des formats de fiches.

Il faut comprendre la nuance. Un carré de 500 pixels permettra de franchir le contrôle technique. Il ne donnera pas forcément une image nette dans Shopping, les fiches gratuites, les surfaces mobiles ou les réponses commerciales enrichies. Se mettre juste au minimum revient à préparer la prochaine dette technique.

Les autres plafonds restent importants : 64 mégapixels au maximum et un fichier de 16 Mo au plus. Les formats acceptés incluent JPEG, WebP, PNG, GIF, BMP et TIFF.

## Pourquoi cette règle concerne aussi le SEO

Merchant Center n'est plus un simple outil publicitaire. Ses données alimentent les fiches produit gratuites et plusieurs surfaces de recherche commerciale. Une image refusée peut donc réduire la visibilité organique d'une référence, même sans campagne Google Ads.

Le visuel intervient également dans le clic. Sur une requête transactionnelle, l'utilisateur compare d'abord une photo, un prix et une disponibilité. Une page produit techniquement parfaite ne compense pas une miniature floue ou mal cadrée.

Je vois encore des audits SEO qui vérifient les balises `title`, les canonicals et le JSON-LD, puis ignorent le fichier image réellement envoyé dans le flux. C'est incohérent. **Le flux Merchant Center, le HTML et les données structurées doivent décrire le même produit, avec la même variante et le même état de stock.**

## L'audit à lancer maintenant

La première étape consiste à exporter toutes les valeurs `image_link` et `additional_image_link`, puis à contrôler automatiquement quatre éléments : code HTTP, format MIME, poids et dimensions réelles. Ne vous fiez pas à l'extension du fichier. Un PNG servi avec une URL `.jpg` peut générer une erreur de type d'image.

Classez ensuite le catalogue en trois groupes :

- moins de 500 pixels, donc non conforme en 2027 ;
- de 500 à 1 499 pixels, conforme mais sous la recommandation ;
- 1 500 pixels ou plus, sous réserve du poids et de la qualité visuelle.

Le premier groupe doit être remplacé. Le deuxième doit être priorisé selon le chiffre d'affaires, les impressions et le stock. Inutile de refaire immédiatement 30 000 photos si 800 produits concentrent 75 % des ventes.

Vérifiez aussi l'accès de Googlebot et Googlebot-Image. Une image de 2 000 pixels bloquée par le robots.txt, un CDN ou un WAF reste inutilisable. Google indique qu'une nouvelle URL d'image est généralement réévaluée sous 24 à 72 heures. À l'inverse, remplacer le fichier en conservant exactement la même URL peut demander jusqu'à **six semaines** avant détection.

## Ne redimensionnez pas artificiellement les mauvais visuels

Agrandir une photo de 300 × 300 pixels vers 1 500 × 1 500 ne crée aucun détail. Cela fabrique un gros fichier flou. La bonne réponse est de repartir du master, de demander une source HD au fournisseur ou de refaire la prise de vue.

L'image principale doit montrer le produit complet, sans bordure, prix, appel à l'action ni filigrane promotionnel. Chaque variante doit afficher la bonne couleur ou la bonne matière. Pour les images générées ou modifiées par IA, Google exige aussi la conservation des métadonnées IPTC décrivant leur origine synthétique.

Mon avis est simple : **visez 1 500 × 1 500 pixels dès maintenant**, avec une compression WebP ou JPEG correctement réglée et une URL stable. Le seuil de 500 pixels évitera un refus. La qualité du visuel, elle, gagnera le clic.
