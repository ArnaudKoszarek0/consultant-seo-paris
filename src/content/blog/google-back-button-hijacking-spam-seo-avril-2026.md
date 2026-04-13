---
title: "Google vise le back button hijacking : le spam UX devient enfin un vrai sujet SEO"
description: "Google ajoute le back button hijacking à ses politiques spam. Ce que cette annonce change pour les sites monétisés, les scripts tiers et le risque SEO avant le 15 juin 2026."
date: "2026-04-13"
tags: ["seo", "actualite"]
---

# Google vise le back button hijacking : le spam UX devient enfin un vrai sujet SEO

Le 13 avril 2026, Google a ajouté noir sur blanc une nouvelle violation dans ses politiques spam : le back button hijacking. Dit simplement, c'est le fait de casser le bouton retour du navigateur pour empêcher l'utilisateur de revenir proprement à la page précédente.

Sur le papier, ça ressemble à un sujet d'UX. En réalité, c'est un sujet **SEO**, **monétisation** et **risque manuel**. Et pour une fois, Google a raison d'être brutal.

## Le back button hijacking, c'est quoi exactement ?

Le principe est simple. Un internaute clique sur un résultat Google, arrive sur une page, puis veut repartir. Il appuie sur retour. Normalement, il doit revenir à la SERP ou à la page précédente.

Avec le back button hijacking, le site intercepte ce comportement. Il injecte une page dans l'historique, ouvre un faux écran intermédiaire, pousse une pub, redirige vers une autre URL, ou bloque carrément le retour.

C'est une pratique sale. Pas borderline. Sale.

Google l'intègre désormais explicitement dans la catégorie des malicious practices. Le moteur précise aussi le calendrier : publication de la règle aujourd'hui, application annoncée au **15 juin 2026**. En clair, les éditeurs ont environ **2 mois** pour nettoyer leur stack.

## Pourquoi cette annonce compte vraiment

Beaucoup de signaux SEO restent flous. Là, le message est limpide.

Premièrement, l'expérience utilisateur ne s'arrête pas au contenu. Si vous manipulez la navigation du navigateur, vous sortez du simple débat sur la qualité éditoriale. Vous entrez dans le champ du spam.

Deuxièmement, la responsabilité ne s'arrête pas à votre CMS. Google précise que le problème peut venir d'une lib publicitaire, d'un script tiers, d'un import JavaScript, ou d'une configuration externe. Traduction : le "ce n'est pas nous, c'est le partenaire" ne protégera personne.

Troisièmement, la sanction peut être double : action manuelle ou déclassement automatique. On ne parle plus d'un warning théorique.

## Ce que ça change pour les sites qui vivent de la pub

Soyons directs. Les premiers visés, ce sont les sites qui tirent trop fort sur l'optimisation publicitaire, les widgets de recommandation douteux et certains scripts d'affiliation qui bricolent l'historique navigateur.

Le problème, c'est que beaucoup d'éditeurs ne savent même pas qu'ils sont exposés. Ils ont empilé des tags pendant des années. Ad network A, script B, pop-under C, retargeting D. Au bout d'un moment, plus personne ne sait qui fait quoi.

C'est exactement le type de dette technique qui finit par devenir une dette SEO.

Et il faut le dire clairement : si votre modèle économique dépend d'un piège au clic retour, votre modèle est mauvais. Pas optimisé. Mauvais.

## Le vrai sujet, c'est l'audit du JavaScript tiers

L'intérêt de cette annonce n'est pas seulement la politique spam. C'est le rappel brutal d'un point que beaucoup de SEOs laissent aux équipes ads ou produit : **le JavaScript tiers fait partie du périmètre SEO**.

Si un script modifie `history.pushState`, `history.replaceState`, intercepte les événements de navigation ou déclenche des redirections au retour arrière, ce n'est pas juste un souci front. C'est un risque business.

En 2026, un audit SEO technique sérieux doit inclure au minimum :

- la cartographie des scripts tiers
- les librairies publicitaires actives sur mobile et desktop
- les comportements après clic depuis Google
- les séquences de navigation sur le bouton retour
- les écarts entre environnement de recette et production

Je le répète : testez le retour arrière comme un scénario SEO, pas comme un détail QA.

## Ce que je conseille de faire dès cette semaine

Pas dans un mois. Cette semaine.

1. **Lister tous les scripts tiers** chargés sur les templates SEO stratégiques.
2. Tester manuellement les pages d'entrée organiques sur mobile.
3. Vérifier l'historique navigateur après arrivée depuis Google, puis clic sur retour.
4. Couper tout script suspect avant même d'attendre une preuve parfaite.
5. Documenter les dépendances pub pour savoir quel partenaire introduit quel comportement.
6. Préparer un plan de repli si une régie ou un widget pose problème.

Si vous gérez un média, un comparateur, un site affiliation ou un portail monétisé, ce contrôle doit passer en priorité haute.

## Mon avis

Cette mise à jour est saine. Pas parce qu'elle vient de Google. Parce qu'elle cible enfin un angle trop longtemps toléré : la manipulation du parcours utilisateur après le clic.

On parle souvent de contenu IA, d'autorité, de maillage, de Core Web Vitals. Très bien. Mais il existe une autre ligne rouge : **ne pas piéger l'utilisateur**.

Retenez surtout ceci : à partir du **15 juin 2026**, Google pourra frapper sur un critère simple à comprendre et difficile à défendre. Quand une pratique est trompeuse, mesurable et peu défendable, elle finit rarement bien.

Les sites propres n'ont rien à craindre. Les autres ont deux mois.
