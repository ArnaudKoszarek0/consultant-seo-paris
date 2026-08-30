---
title: "Rank Math accusé de créer un accès administrateur sans consentement"
description: "Rank Math 1.0.277 crée un mot de passe d'application WordPress via son assistant. Analyse du code, risques réels et méthode d'audit."
date: "2026-08-30"
tags: ["seo", "actualite"]
---

Rank Math, installé sur plus de **4 millions de sites WordPress**, est accusé d'avoir ajouté un accès distant administrateur sans consentement préalable clair. Le point litigieux se trouve dans la version 1.0.277, publiée fin août 2026. Il ne s'agit pas d'une vague rumeur sur X : le mécanisme est visible dans le code distribué par WordPress.org.

Je l'ai vérifié. Le plugin embarque un client nommé WAP qui peut créer un mot de passe d'application WordPress pour l'utilisateur connecté. Si cet utilisateur est administrateur, le jeton possède ses droits via l'API REST. Le credential est ensuite chiffré et transmis au service distant utilisé par l'assistant de support.

Le problème n'est donc pas l'existence d'un mot de passe d'application. C'est **le moment où il est créé, le niveau de droits hérité et la qualité du consentement**.

## Ce que fait réellement Rank Math 1.0.277

Dans `class-app-password-manager.php`, le code génère un credential portant un nom commençant par « WAP – ». Il révoque l'ancien jeton lié au produit avant d'en créer un nouveau, puis conserve son identifiant dans les métadonnées utilisateur.

Ce détail évite l'accumulation de mots de passe. Il ne répond pas à la question principale.

Le JavaScript de l'assistant lance en parallèle deux opérations : `initConsent()` et `bootSession()`. Or `bootSession()` appelle immédiatement l'authentification. Côté serveur, cette authentification peut provisionner le mot de passe d'application et l'intégrer au jeton transmis au service distant. Le formulaire d'acceptation des conditions bloque l'envoi d'un message dans le chat, mais **il ne bloque pas nécessairement la création initiale du credential**.

Autrement dit, l'interface demande un accord pour utiliser l'assistant après avoir commencé à préparer son accès. C'est techniquement défendable comme initialisation. C'est mauvais en matière de sécurité et de confiance.

## Ce n'est pas un mot de passe WordPress classique

Il faut être précis. Un mot de passe d'application ne permet pas de se connecter dans `wp-login.php`. Il sert à authentifier une application sur l'API REST ou XML-RPC. Il est stocké sous forme de hash, affiché une seule fois lors de sa création et peut être révoqué individuellement.

Mais il agit au nom de l'utilisateur auquel il est rattaché. Un credential associé à un administrateur peut donc lire, créer, modifier ou supprimer des ressources selon les routes accessibles et les permissions installées sur le site.

Dire « ce n'est pas le mot de passe principal » ne suffit pas. **Un accès API administrateur reste un accès administrateur.**

## Pourquoi le consentement pose problème

Les règles du répertoire WordPress indiquent qu'un plugin ne doit pas contacter un serveur externe sans consentement explicite et autorisé. Le parcours standard des mots de passe d'application prévoit aussi une autorisation identifiable, puis la remise du secret après validation.

Rank Math affiche bien des conditions d'utilisation dans son assistant. La critique porte sur la séquence : l'authentification démarre en parallèle de la vérification du consentement. La promesse affichée à l'utilisateur et l'action technique ne sont donc pas parfaitement alignées.

Je n'emploierais pas le mot « backdoor » sans décision d'un audit indépendant complet. Le code est présent dans l'extension publique, le credential est nommé et il est révocable. En revanche, parler d'un **accès distant insuffisamment consenti** me paraît factuel.

## Comment auditer votre site maintenant

Si Rank Math est installé, ne désactivez pas tout dans la panique. Vérifiez d'abord les faits.

1. Ouvrez **Utilisateurs > Profil > Mots de passe d'application** avec chaque compte administrateur susceptible d'avoir consulté l'aide Rank Math.
2. Recherchez les entrées dont le nom commence par « WAP – », notamment « WAP – Rank Math Support Agent ».
3. Notez la date, la dernière utilisation et l'adresse IP lorsqu'elles sont disponibles, puis révoquez tout credential non explicitement validé.
4. Contrôlez les comptes administrateurs, les sessions actives, les journaux REST et les modifications récentes de contenus ou d'extensions.
5. Vérifiez la version du plugin et les communications officielles avant toute réactivation de l'assistant.

Sur un parc de sites, automatisez l'inventaire avec WP-CLI et comparez-le à une liste d'intégrations autorisées. Un mot de passe d'application sans propriétaire métier, sans date d'expiration opérationnelle et sans ticket de validation doit être considéré comme une dette de sécurité.

## Mon avis

Un plugin SEO n'a pas besoin d'obtenir silencieusement les droits API d'un administrateur pour afficher une aide. S'il propose un agent capable d'agir sur le site, il doit expliquer ses permissions **avant** leur création, demander un opt-in séparé et permettre une révocation immédiate depuis son propre écran.

Le SEO technique commence par la maîtrise de son CMS. Un site mieux balisé mais administrable à distance sans consentement net n'est pas optimisé. Il est mal gouverné.

Sources : [Search Engine Journal, 30 août 2026](https://www.searchenginejournal.com/rank-math-wordpress-plugin-accused-of-secretly-taking-admin-access/587554/), [documentation WordPress sur les mots de passe d'application](https://developer.wordpress.org/advanced-administration/security/application-passwords/) et [règles officielles des extensions](https://developer.wordpress.org/plugins/wordpress-org/detailed-plugin-guidelines/).
