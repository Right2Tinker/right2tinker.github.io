---
layout: home
title: Accueil
lang: fr
---

<p><em>Note : Ce document a été traduit par une IA. Pour la version originale, veuillez consulter la <a href="/">version anglaise</a>.</em></p>

## Le problème : ton téléphone ne t'appartient plus

Tu sais déjà qu'Apple verrouille son écosystème — impossible d'installer une app ailleurs que sur l'App Store, impossible de faire tourner autre chose qu'iOS. Android, c'était différent. C'était le paradis de ceux qui voulaient vraiment *posséder* leur appareil, grâce à son ouverture et à la liberté de bidouiller.

Cette époque touche à sa fin.

Pour comprendre ce qui s'est passé, il faut d'abord parler du [**verrouillage OEM**](https://source.android.com/docs/core/architecture/bootloader/locking_unlocking) (le « bootloader lock »). C'est un composant de sécurité essentiel sur les Android. Quand le bootloader est verrouillé, impossible de modifier le système d'exploitation préinstallé. Ça protège contre les logiciels malveillants. Tous les smartphones Android modernes sortent de l'usine dans cet état.

Mais ça signifie aussi que ceux qui *veulent* modifier leur propre téléphone sont bloqués par ce même mécanisme.

Avant, les fabricants offraient des moyens officiels de **déverrouiller** son appareil — à ses propres risques — pour en reprendre le contrôle. Mais depuis quelques années, un à un, ils suppriment ces options. Aujourd'hui, la plupart des appareils sur le marché sont verrouillés à vie.

En 2025, la situation a empiré. Samsung a supprimé l'option de déverrouillage OEM dans One UI 8. Xiaomi a rendu le déverrouillage pratiquement impossible. Google lui-même a failli interdire l'installation d'applications en dehors du Play Store — seule une mobilisation massive, le mouvement [**Keep Android Open**](https://keepandroidopen.org/), a fait reculer le géant.

La chronologie complète de ces verrouillages, ainsi que l'état actuel de la liberté de bidouiller dans le monde Android, est documentée par le projet [**Bootloader Unlock Wall of Shame**](https://github.com/zenfyrdev/bootloader-unlock-wall-of-shame).

Quand ton appareil est verrouillé pour toujours, **tu ne possèdes plus vraiment l'appareil que tu as pourtant acheté**.

## Ce que les gens sont obligés de faire, juste pour bidouiller

Des passionnés sont poussés à des extrémités absurdes pour simplement reprendre le contrôle de ce qui leur appartient :

- Des utilisateurs de Xiaomi en sont réduits à [**récupérer physiquement leur téléphone dans un centre de service**](https://www.reddit.com/r/PocoPhones/comments/1mak843/xiaomi_users_escape_service_centers_with/) pendant une procédure de downgrade, pour profiter d'une fenêtre de déverrouillage.
- Un acheteur britannique de Zenfone a [**poursuivi ASUS en justice**](https://xdaforums.com/t/court-action-against-asus-false-promise-on-bootloader-unlock-tool.4657042/) après que la société a renié sa promesse de fournir des outils de déverrouillage. Il a gagné — remboursement intégral de 770 £.

C'est une tragédie que des gens doivent en arriver là, simplement pour bidouiller ce qu'ils possèdent légalement.

Le point crucial : **ce verrouillage n'affecte pas que les « geeks ». C'est une menace pour la sécurité, la vie privée et les droits des consommateurs de *chaque utilisateur de smartphone*.**

## Pourquoi les fabricants te verrouillent-ils ton propre appareil ?

Les fabricants ont des excuses. Regardons-les une par une.

### « C'est la loi. »

Les OEM et certains membres de la communauté Android évoquent des lois et réglementations locales. Ce ne sont **rien de plus que des boucs émissaires**. Il n'existe **actuellement aucune loi connue dans le monde** qui exige qu'un téléphone soit verrouillé à vie. Voir notre [FAQ](/fr/faq).

### « Ça dissuade les voleurs. »

Soi-disant, un bootloader verrouillé permet de mettre en place des mécanismes anti-vol incassables.

Mais le bootloader est déjà **verrouillé par défaut**. Sans déverrouillage préalable, un mécanisme anti-vol peut facilement **empêcher un voleur de déverrouiller le bootloader**. Et même verrouillés, les appareils volés peuvent être démontés et vendus en pièces. Cet argument ne tient pas.

### « Ça empêche d'infecter le firmware. »

Un bootloader déverrouillable pourrait, dit-on, permettre à des attaquants de planter des malwares au plus profond du firmware.

Mais ça nécessite un **accès physique** à l'appareil, de contourner les preuves de propriété, et de passer par une procédure qui **efface toutes les données** (tu le remarquerais immédiatement). Pour la quasi-totalité des utilisateurs, ce scénario est de la science-fiction. Les fonctions de sécurité matérielles (comme le [TEE](https://en.wikipedia.org/wiki/Trusted_execution_environment)) rendent déjà ces attaques détectables — écran d'avertissement au redémarrage, outils d'attestation qui signalent les anomalies.

### « Ça réduit les coûts de support. »

La communauté des bidouilleurs est minuscule. Cet argument est un écran de fumée.

## Ce qui se passe vraiment

### 1. Dégradation des performances à distance

Certains fabricants ont mis en place des systèmes pour [**contrôler à distance les performances de ton téléphone**](https://www.bilibili.com/video/BV1rUhXzEEde) (NB : le lien pointe vers une plateforme chinoise ; des sous-titres anglais sont disponibles) — souvent pour les réduire, bien après l'achat.

Des utilisateurs ont documenté des ralentissements soudains — non pas à cause de l'usure du matériel, mais de politiques « cloud » qui brident délibérément les performances. Un téléphone fluide à l'achat devient lent en un an, parce que le fabricant ajuste à distance les fréquences du CPU et l'ordonnancement. Ce système — parfois appelé « cloud control » — écrase l'ordonnancement local avec une priorité plus élevée.

### 2. Restrictions artificielles de fonctionnalités

Les fabricants retardent ou bloquent volontairement l'arrivée de nouvelles fonctions sur les anciens appareils — même quand ces appareils sont techniquement compatibles et ne nécessitent aucun portage.

Ça arrive tout le temps : le fabricant prétend qu'une fonction est incompatible, et la communauté découvre qu'elle fonctionne parfaitement une fois les restrictions artificielles contournées.

### 3. Malwares cachés dans le firmware

En 2025, des chercheurs ont découvert [**Keenadu**](https://www.kaspersky.com/about/press-releases/kaspersky-discovers-keenadu-a-multifaceted-android-malware-that-can-come-preinstalled-on-new-devices) — une porte dérobée préinstallée directement dans le firmware en usine. Le code malveillant est injecté dans `libandroid_runtime.so`, une bibliothèque centrale d'Android, lui permettant d'accéder à l'espace d'adressage de *toutes* les applications. Ses capacités sont quasi illimitées : ses modules sont téléchargés dynamiquement et mis à jour à distance.

De même, le cheval de Troie [**Triada**](https://www.kaspersky.com/blog/trojan-in-fake-smartphones/53331/) s'immisce dans les partitions système et infecte le processus Zygote — le parent de toutes les applications Android. Une fois infecté, tout l'appareil est compromis : modification d'adresses de portefeuilles crypto, vol d'identifiants, interception de messages…

Ces malwares sont probablement le résultat d'[attaques de la chaîne d'approvisionnement](https://en.wikipedia.org/wiki/Supply_chain_attack), pas d'une volonté délibérée des fabricants. Mais si le bootloader est définitivement verrouillé, les chercheurs ne peuvent ni les détecter ni les analyser.

Ce ne sont pas des menaces hypothétiques. Ce sont des preuves bien réelles que les malwares au niveau firmware existent et prospèrent dans des environnements verrouillés, là où l'utilisateur ne peut pas auditer ce qui tourne sur son appareil.

### Le cœur du problème

Quand le système est verrouillé et opaque, le fabricant a un pouvoir absolu. Il peut dégrader ton appareil à distance, imposer une **obsolescence programmée**. Restreindre ses capacités. Collecter tes données à ton insu. Et toi, tu ne peux ni vérifier ni arrêter quoi que ce soit.

**Le bootloader verrouillé ne te protège pas des attaquants — il protège le fabricant de toi.**

## Notre proposition : le Right to Tinker

Nous définissons le **Right to Tinker** (droit de bidouiller) comme suit :

> **Toute personne qui possède légalement et pleinement un appareil mobile intelligent doit être en mesure de désactiver tous les mécanismes de verrouillage activés par défaut et de retrouver le contrôle total de son appareil.**

Cela implique :

- **Un accès complet en lecture et écriture** à chaque bit du stockage interne destiné à la programmation générale.
- **La possibilité de démarrer n'importe quel système d'exploitation** — que ce soit Android d'origine, un ROM personnalisé comme LineageOS, ou tout autre système.

L'industrie du PC nous sert de modèle : tu achètes le matériel, tu possèdes le matériel, tu contrôles le logiciel qui tourne dessus.

### Demandes supplémentaires

**1. Mécanisme de récupération obligatoire :**
Les fabricants ne doivent pas annuler la garantie simplement parce qu'un utilisateur exerce un contrôle total sur son appareil — sauf s'ils prouvent qu'un dysfonctionnement précis découle directement de ses actions. De plus, ils doivent fournir des outils accessibles pour restaurer l'appareil en état d'usine.

**2. Briser le monopole de l'attestation :**
Les infrastructures numériques critiques (apps bancaires, services de messagerie, portails gouvernementaux) exigent de plus en plus un « environnement de confiance ». En pratique, seules deux entreprises américaines fournissent ces preuves : Apple et Google (via Play Integrity API sur Android).

Cela exclut de facto tout appareil qui ne fait pas tourner les logiciels propriétaires de Google. Comme le dit justement le consortium Volla, c'est un « paradoxe de sécurité » — « la vérification de la fiabilité est effectuée par l'entité même dont on cherche à éviter l'écosystème ».

Heureusement, des alternatives existent. Le projet [**UnifiedAttestation**](https://uattest.net/), mené par Volla Systeme avec Murena, Iodé et Apostrophy, développe sous licence Apache 2.0 un système d'attestation open-source, transparent et décentralisé, que n'importe quel OS (y compris les ROM personnalisés) peut implémenter. Nous soutenons et amplifions cet effort.

### Ce que ça changerait

- **Pour l'utilisateur lambda :** La certitude que son appareil n'est ni dégradé ni surveillé en secret, parce que le système est vérifiable.
- **Pour le bidouilleur :** La liberté de personnaliser, réparer et prolonger la vie de son appareil.
- **Pour les chercheurs en cybersécurité :** La capacité de trouver des vulnérabilités et de tenir les fabricants responsables.
- **Pour l'environnement :** Des appareils qui durent plus longtemps grâce aux mises à jour communautaires.
- **Pour la souveraineté numérique :** Moins de dépendance envers une poignée de géants américains pour les infrastructures essentielles.

## Rejoins le mouvement

Le Right to Tinker n'est pas un sujet de niche. C'est un droit numérique fondamental qui concerne chaque utilisateur de smartphone. Quand les fabricants verrouillent nos appareils, ils ne nous protègent pas — ils protègent leur capacité à nous contrôler.

La communauté des bidouilleurs a toujours été l'avant-garde de la liberté numérique. On était là quand les PC étaient verrouillés. On était là quand les routeurs étaient verrouillés. On est là aujourd'hui, alors que les smartphones — les ordinateurs les plus personnels que nous possédons — sont verrouillés plus que jamais.

**Le moment d'agir, c'est maintenant.**

Chaque jour d'attente, un autre fabricant resserre l'étau. Une autre politique est adoptée. Une autre fonctionnalité est bloquée. Un autre appareil est dégradé.

Mais l'inverse est tout aussi vrai : chaque jour où nous agissons, nous gagnons en momentum. Nous trouvons des alliés. Nous faisons du bruit. Nous devenons plus difficiles à ignorer.

---

**Rejoins la discussion.**

- [Dépôt GitHub](https://github.com/Right2Tinker/right2tinker.github.io) de ce site
- [Serveur Discord](https://discord.gg/pbKDpjuCx6)
- [Groupe Telegram](https://t.me/right2tinker)
- [Reddit `r/right2tinker`](https://www.reddit.com/r/right2tinker)
- [Mégathread XDA](https://xdaforums.com/t/the-right-to-tinker-initiative-its-time-to-take-back-the-full-control-of-our-devices.4795402/)

Et nous avons besoin de ta voix pour que le monde sache que le Right to Tinker compte — poste sur les réseaux sociaux avec nos hashtags `#R2T`, `#Right2Tinker` et `#RightToTinker`.

**Battons-nous pour un écosystème mobile libre, transparent, vérifiable et digne de confiance.**

---

*Ceci est un document vivant. À mesure que le mouvement grandit, que de nouvelles preuves émergent et que le paysage évolue, ces demandes et stratégies seront affinées. Le but n'est pas de produire un document parfait — le but est de lancer un mouvement.*
