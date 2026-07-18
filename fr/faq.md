---
layout: default
title: FAQ
lang: fr
---

## Un bootloader déverrouillable dégrade-t-il la sécurité de mon appareil ?

**Pas du tout.** Tant que vous n'activez pas intentionnellement l'option de déverrouillage OEM et que vous ne connectez pas votre téléphone à un ordinateur pour le déverrouillage du bootloader (une procédure qui effacera toujours vos données), votre téléphone reste dans l'état verrouillé d'origine, ce qui est totalement sécurisé.

En fait, un bootloader déverrouillable contribue à votre sécurité et à votre vie privée, car il permet aux chercheurs en cybersécurité d'inspecter le firmware préinstallé pour détecter d'éventuels logiciels malveillants et télémétries non consenties.

## La directive européenne RED (2014/53/UE) impose-t-elle le verrouillage des appareils ?

Beaucoup de personnes citent l'article 3(3)(i) de la directive RED comme la raison pour laquelle les OEM doivent verrouiller le bootloader définitivement. Mais c'est **totalement inexact**. L'article stipule :

> les équipements radioélectriques prennent en charge certaines fonctionnalités afin de garantir que les logiciels ne peuvent être chargés dans l'équipement radioélectrique que lorsque la conformité de la combinaison de l'équipement radioélectrique et du logiciel a été démontrée.

Dans le contexte d'un appareil mobile intelligent, l'« équipement radioélectrique » fait référence au [processeur de bande de base](https://en.wikipedia.org/wiki/Baseband_processor). Cet article exige en pratique des mesures cryptographiques pour garantir que seul le **firmware de bande de base** authentique signé par le fabricant de la puce puisse être chargé — ce qui est mis en œuvre universellement depuis des années sans dépendre du tout du verrouillage OEM.

La véritable intention de la directive est de s'assurer que les appareils n'interfèrent pas avec les fréquences d'urgence publiques, les réseaux cellulaires ou les communications aéronautiques.

En fait, les régulateurs européens ont explicitement prévu que des fabricants cupides pourraient essayer d'utiliser cette directive comme une arme pour verrouiller leurs appareils et tuer la concurrence. Pour éviter cela, ils ont inscrit le considérant 19 directement dans la directive :

> La vérification par l'équipement radioélectrique de la conformité de sa combinaison avec un logiciel ne devrait pas être détournée pour empêcher son utilisation avec des logiciels fournis par des tiers indépendants. La mise à disposition des autorités publiques, des fabricants et des utilisateurs d'informations sur la conformité des combinaisons prévues d'équipements radioélectriques et de logiciels devrait contribuer à faciliter la concurrence. Afin d'atteindre ces objectifs, le pouvoir d'adopter des actes conformément à l'article 290 du TFUE devrait être délégué à la Commission en ce qui concerne la spécification des catégories ou classes d'équipements radioélectriques pour lesquels les fabricants doivent fournir des informations sur la conformité des combinaisons prévues d'équipements radioélectriques et de logiciels avec les exigences essentielles énoncées dans la présente directive.

## Certaines réglementations chinoises imposent-elles le verrouillage ?

Il n'existe actuellement aucune loi ou réglementation chinoise qui impose un bootloader définitivement verrouillé. Bien que certaines personnes aient fait référence à [cette réglementation](https://www.gov.cn/zhengce/zhengceku/2022-12/15/content_5732079.htm) comme étant la raison du verrouillage du bootloader de Xiaomi, cette affirmation est probablement fausse.

Bien que cette réglementation exige des « mesures techniques pour prévenir les attaques sur la chaîne d'approvisionnement », elle n'exige pas que les appareils soient définitivement verrouillés après avoir atteint les mains de l'utilisateur final. De plus, OnePlus vend toujours des appareils en Chine avec un bootloader déverrouillable, ce qui infirme l'existence d'une quelconque loi ou réglementation de ce type.

Les fabricants ne sont donc pas obligés de verrouiller votre appareil. Ils choisissent de le faire pour leur propre bénéfice.
