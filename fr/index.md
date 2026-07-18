---
layout: home
title: Accueil
lang: fr
---

<p><em>Note : Ce document a été traduit par une IA. Pour la version originale, veuillez consulter la <a href="/">version anglaise</a>.</em></p>

## Le problème : votre téléphone ne vous appartient plus

Vous savez peut-être déjà que l'écosystème mobile d'Apple est fortement verrouillé — vous ne pouvez installer des applications que depuis l'App Store, et vous ne pouvez exécuter qu'iOS sur votre appareil. Android était autrefois différent. Il était apprécié par ceux qui voulaient vraiment *posséder* leurs appareils, grâce à son ouverture et la liberté de modifier.

Mais cette époque touche à sa fin.

Pour comprendre ce qui s'est passé, nous devons d'abord expliquer le [**verrouillage OEM**](https://source.android.com/docs/core/architecture/bootloader/locking_unlocking) (ou « verrouillage du bootloader ») — un composant de sécurité critique sur les téléphones Android. Lorsqu'un appareil est verrouillé, il empêche quiconque de modifier le système d'exploitation préinstallé. Cela protège les utilisateurs contre les logiciels malveillants. Tous les téléphones Android modernes sont livrés dans cet état verrouillé.

Mais cela signifie aussi que les utilisateurs qui *souhaitent* modifier leur propre téléphone sont bloqués par ce même mécanisme.

Historiquement, les fabricants fournissaient des moyens officiels permettant aux utilisateurs de **déverrouiller** leurs appareils — à leurs propres risques — afin qu'ils puissent retrouver un contrôle total. Mais ces dernières années, un fabricant après l'autre a discrètement supprimé ces options. Aujourd'hui, la plupart des appareils sur le marché sont verrouillés à jamais.

En 2025, la situation s'est considérablement aggravée. Samsung a supprimé l'interrupteur de déverrouillage OEM des options développeur dans One UI 8. Xiaomi a désactivé ses anciens serveurs de déverrouillage et a limité les utilisateurs à un seul déverrouillage par an. Pire encore, Google a prévu de restreindre entièrement la liberté d'installer des applications en dehors du Play Store. Seule une forte protestation publique — le mouvement [**Keep Android Open**](https://keepandroidopen.org/) — a fait reculer ces projets.

La chronologie de ces événements de verrouillage, ainsi que l'état actuel de la liberté de modification dans le monde Android, sont bien documentés par le projet [**Bootloader Unlock Wall of Shame**](https://github.com/zenfyrdev/bootloader-unlock-wall-of-shame).

Lorsque votre appareil est définitivement verrouillé, **vous ne possédez plus vraiment l'appareil que vous détenez légalement**.

## Ce que les gens sont obligés de faire pour pouvoir modifier

Dans leur volonté farouche de reprendre le contrôle, les passionnés ont été poussés à des mesures extrêmes :

- Les utilisateurs de Xiaomi ont eu recours à [**récupérer physiquement leurs téléphones dans les centres de service**](https://www.reddit.com/r/PocoPhones/comments/1mak843/xiaomi_users_escape_service_centers_with/) lors de procédures de downgrade, espérant exploiter une fenêtre éphémère pour déverrouiller leurs appareils.
- Un acheteur britannique de Zenfone a [**poursuivi ASUS**](https://xdaforums.com/t/court-action-against-asus-false-promise-on-bootloader-unlock-tool.4657042/) après que la société a rompu sa promesse de fournir des outils de déverrouillage du bootloader. L'acheteur a gagné — recevant un remboursement complet de 770 £. ASUS avait promis ces outils, puis les a désactivés, et a même supprimé les discussions sur le déverrouillage du bootloader de ses forums.

C'est une tragédie que les gens doivent aller à de telles extrémités simplement pour modifier quelque chose qu'ils possèdent légalement.

Mais voici le point crucial : **le verrouillage OEM n'affecte pas seulement les « geeks ». Il constitue une menace majeure pour la sécurité, la vie privée et les droits des consommateurs pour *chaque utilisateur de smartphone*.**

## Pourquoi les fabricants vous verrouillent-ils hors de votre propre appareil ?

Lorsqu'on les interroge, les fabricants avancent plusieurs justifications. Examinons chacune d'elles.

### « C'est imposé par les lois et réglementations. »

Les OEM, ainsi que certains membres de la communauté de développement Android, évoquent souvent plusieurs lois et réglementations locales pour justifier le verrouillage du bootloader. Cependant, ce ne sont **rien de plus que des boucs émissaires pratiques** et il n'existe actuellement **aucune loi ou réglementation connue dans le monde** qui exige qu'un téléphone soit verrouillé à jamais. Veuillez vous référer à notre [FAQ](/faq) pour plus de détails.

### « Cela décourage les voleurs. »

Les fabricants expliquent souvent qu'un bootloader verrouillé leur permet de mettre en œuvre des mécanismes antivol qui ne peuvent pas être facilement contournés.

Mais les bootloaders sont déjà **verrouillés par défaut**, et sans qu'il soit déjà déverrouillé, un mécanisme antivol peut facilement **empêcher un voleur de déverrouiller le bootloader** complètement. De plus, même avec les verrouillages actuels, les appareils volés peuvent toujours être démontés et vendus pour pièces. Cet argument ne tient pas.

### « Cela empêche les attaquants d'installer des logiciels malveillants. »

Les fabricants affirment également qu'un bootloader déverrouillable peut permettre aux attaquants d'installer des logiciels malveillants profondément dans le firmware, difficiles à détecter.

Mais cela nécessiterait un **accès physique** à votre appareil, en contournant les éventuelles exigences de preuve de propriété pour déverrouiller le bootloader, une procédure qui **effacera vos données** (comme l'exige le schéma de sécurité existant) — ce que vous remarqueriez immédiatement. Pour la grande majorité des utilisateurs, ce modèle de menace est fictif. De plus, les fonctions de sécurité matérielles (par exemple le [TEE](https://en.wikipedia.org/wiki/Trusted_execution_environment)) rendent déjà ces attaques détectables — vous verrez un écran d'avertissement à chaque redémarrage de votre téléphone, et les outils d'attestation de l'appareil signaleront des anomalies.

### « Cela réduit les coûts de support client. »

La communauté des bidouilleurs est manifestement petite. Les fabricants ont déjà le droit légal d'annuler les garanties lors du déverrouillage. Cette excuse est un écran de fumée.

## Ce qui se passe réellement

### 1. Dégradation des performances à distance

Certains fabricants ont construit des systèmes qui leur permettent de [**contrôler à distance les performances de votre téléphone**](https://www.bilibili.com/video/BV1rUhXzEEde) (REMARQUE : Ce lien pointe vers une plateforme vidéo chinoise. Des sous-titres générés automatiquement avec traduction anglaise sont disponibles.) — souvent négativement — longtemps après que vous l'avez acheté.

Les utilisateurs ont documenté comment certains appareils deviennent soudainement plus lents avec le temps — non pas à cause du vieillissement matériel, mais à cause de politiques contrôlées dans le cloud qui limitent délibérément les performances. Un téléphone qui fonctionnait parfaitement lors de l'achat peut devenir sensiblement lent en un an, les fabricants ajustant à distance les fréquences du CPU et l'ordonnancement. Le système qui permet cela — parfois appelé « contrôle cloud » — remplace l'ordonnancement de votre appareil avec une priorité plus élevée, permettant au fabricant de dicter les performances à distance.

### 2. Restrictions artificielles de fonctionnalités

Les fabricants retardent ou refusent souvent délibérément le déploiement de nouvelles fonctionnalités logicielles sur les appareils plus anciens — même si ces appareils sont techniquement entièrement compatibles et ne nécessitent aucun portage supplémentaire.

Il est arrivé à plusieurs reprises qu'un fabricant prétende qu'une fonctionnalité est incompatible avec un certain appareil plus ancien, pour que la communauté des bidouilleurs découvre que la fonctionnalité fonctionne parfaitement une fois certaines restrictions artificielles contournées.

### 3. Logiciels malveillants cachés dans le firmware

En 2025, des chercheurs en cybersécurité ont découvert [**Keenadu**](https://www.kaspersky.com/about/press-releases/kaspersky-discovers-keenadu-a-multifaceted-android-malware-that-can-come-preinstalled-on-new-devices) — une porte dérobée préinstallée directement dans le firmware de l'appareil lors de la fabrication. Le code malveillant est injecté dans `libandroid_runtime.so` — une bibliothèque centrale du système Android — lui permettant d'entrer dans l'espace d'adressage de *toute* application exécutée sur l'appareil. Ses fonctionnalités sont virtuellement illimitées, car ses modules malveillants sont téléchargés dynamiquement et peuvent être mis à jour à distance.

De même, le cheval de Troie [**Triada**](https://www.kaspersky.com/blog/trojan-in-fake-smartphones/53331/) a évolué pour intégrer des composants malveillants directement dans les partitions système, infectant le processus Zygote — le parent de toutes les applications Android. Une fois infecté, chaque application sur l'appareil est compromise. Les attaquants peuvent modifier les adresses de portefeuille de cryptomonnaies, voler des identifiants de connexion, intercepter des messages, et plus encore.

Bien qu'il soit important de noter que ces logiciels malveillants très médiatisés sont probablement involontairement intégrés par les fabricants et sont plutôt des exemples de [chaîne d'approvisionnement](https://en.wikipedia.org/wiki/Supply_chain_attack) compromise, il sera presque impossible pour les chercheurs en cybersécurité de les détecter et de les analyser si le bootloader est verrouillé définitivement.

Ce ne sont pas des menaces hypothétiques. Ce sont des preuves concrètes que des logiciels malveillants au niveau du firmware existent et prospèrent dans des environnements verrouillés où les utilisateurs ne peuvent pas auditer ce qui s'exécute sur leurs appareils.

### Le problème fondamental

Lorsque le système est verrouillé et opaque, le fabricant détient un pouvoir absolu. Il peut dégrader votre appareil à distance et imposer une **obsolescence programmée**. Il peut restreindre ses capacités. Il peut collecter des données à votre insu. Et vous n'avez aucun moyen de le vérifier ou de l'arrêter.

**Le bootloader verrouillé ne vous protège pas des attaquants — il protège le fabricant de vous.**

## Notre proposition : le Right to Tinker

Nous définissons le **Right to Tinker** comme suit :

> **Toute personne qui possède légalement et pleinement un appareil mobile intelligent doit être éligible pour désactiver tous les mécanismes de verrouillage activés par défaut et restaurer le contrôle total de son appareil.**

Cela signifie :

- **Un accès complet en lecture et écriture** à chaque bit du stockage interne de l'appareil destiné à la programmation généraliste.
- **La capacité de démarrer n'importe quel système d'exploitation** — que ce soit l'Android d'origine, un ROM personnalisé comme LineageOS, ou tout autre système choisi par l'utilisateur.

La mise en œuvre devrait refléter l'industrie du PC : vous achetez le matériel, vous possédez le matériel, vous contrôlez le logiciel qui s'y exécute.

### Demandes supplémentaires

**1. Mécanisme de récupération obligatoire :**
Les fabricants ne doivent pas annuler la garantie uniquement parce qu'un utilisateur exerce un contrôle total sur l'appareil — à moins qu'ils ne puissent prouver qu'un dysfonctionnement spécifique est le résultat direct des opérations de l'utilisateur. De plus, les fabricants doivent fournir des outils ou services accessibles pour restaurer un appareil à l'image système d'usine.

**2. Briser le monopole de l'attestation des appareils :**
Les infrastructures numériques critiques — applications bancaires, services de messagerie, portails gouvernementaux — exigent de plus en plus un « environnement de confiance pour l'appareil ». En pratique, les seules preuves acceptées sont fournies par deux entreprises américaines : Apple et Google (via Play Integrity API sur Android).

Cela crée une exclusion de facto pour tout appareil n'exécutant pas le logiciel propriétaire de Google. Comme le consortium Volla le décrit pertinemment, cela conduit à un « paradoxe de sécurité » — « la vérification de la fiabilité est effectuée par précisément l'entité dont l'écosystème doit être évité en même temps ».

De manière encourageante, des travaux sont déjà en cours. Le projet **UnifiedAttestation**, dirigé par Volla Systeme avec des partenaires dont Murena, Iodé et Apostrophy, développe une alternative open-source à Play Integrity API sous licence Apache 2.0. Ce projet vise à créer un système d'attestation transparent et décentralisé que tout système d'exploitation (y compris les ROM personnalisés) peut implémenter. Nous soutenons et amplifions cet effort.

### Ce que cela apporterait

- **Pour l'utilisateur moyen :** L'assurance que son appareil n'est pas secrètement dégradé ou surveillé, car le système est vérifiable.
- **Pour le bidouilleur :** La liberté de personnaliser, réparer et prolonger la durée de vie de son appareil.
- **Pour les chercheurs en cybersécurité :** La capacité de trouver des vulnérabilités et de tenir les fabricants responsables.
- **Pour l'environnement :** Durée de vie prolongée des appareils grâce aux mises à jour logicielles soutenues par la communauté.
- **Pour la souveraineté numérique :** Dépendance réduite à l'égard d'une poignée d'entreprises américaines pour les infrastructures essentielles.

## Rejoignez le mouvement

Le Right to Tinker n'est pas une préoccupation de niche pour passionnés. C'est un droit numérique fondamental qui concerne chaque utilisateur de smartphone. Lorsque les fabricants verrouillent nos appareils, ils ne nous protègent pas — ils protègent leur capacité à nous contrôler.

La communauté des bidouilleurs a toujours été l'avant-garde de la liberté numérique. Nous étions là quand les PC étaient verrouillés. Nous étions là quand les routeurs étaient verrouillés. Nous sommes là maintenant, alors que les smartphones — les ordinateurs les plus personnels que nous possédons — sont verrouillés plus que jamais.

**Le moment d'agir est maintenant.**

Chaque jour que nous attendons, un autre fabricant resserre la vis. Une autre politique est mise en œuvre. Une autre fonctionnalité est restreinte. Un autre appareil est dégradé.

Mais l'inverse est également vrai : chaque jour où nous agissons, nous prenons de l'élan. Nous gagnons des alliés. Nous faisons du bruit. Nous devenons plus difficiles à ignorer.

---

**Rejoignez la discussion.**

- [Dépôt GitHub](https://github.com/Right2Tinker/right2tinker.github.io) de ce site
- [Serveur Discord](https://discord.gg/pbKDpjuCx6)
- [Groupe Telegram](https://t.me/right2tinker)
- [Reddit `r/right2tinker`](https://www.reddit.com/r/right2tinker)
- [Mégathread XDA](https://xdaforums.com)

Et nous avons besoin de votre voix pour faire savoir au monde que le Right to Tinker compte — publiez sur les réseaux sociaux avec nos hashtags `#R2T`, `#Right2Tinker` et `#RightToTinker`.

**Battons-nous pour un écosystème mobile libre, transparent, vérifiable et digne de confiance.**

---

*Ceci est un document vivant. À mesure que le mouvement grandit, que de nouvelles preuves émergent et que le paysage évolue, ces demandes et stratégies seront affinées. Le but n'est pas de produire un document parfait — le but est de lancer un mouvement.*
