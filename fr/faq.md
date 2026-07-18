---
layout: default
title: FAQ
lang: fr
---

## Déverrouiller le bootloader, ça rend mon téléphone moins sécurisé ?

**Pas du tout.** Tant que tu ne vas pas dans les options développeur pour activer le déverrouillage OEM et que tu ne branches pas ton téléphone à un ordinateur pour déverrouiller le bootloader (une procédure qui efface toutes tes données), ton téléphone reste dans son état verrouillé d'usine — aussi sécurisé que le jour de l'achat.

En fait, un bootloader déverrouillable est un *atout* pour ta sécurité : il permet aux chercheurs en cybersécurité d'inspecter le firmware préinstallé pour y débusquer d'éventuels malwares ou mouchards.

## La directive européenne RED (2014/53/UE) impose-t-elle le verrouillage ?

Beaucoup de gens citent l'article 3(3)(i) de la directive RED comme justification. Mais c'est **totalement faux**. Voici ce que dit le texte original :

> radio equipment supports certain features in order to ensure that software can only be loaded into the radio equipment where the compliance of the combination of the radio equipment and software has been demonstrated.

> _Traduction_ : les équipements radioélectriques doivent prendre en charge certaines fonctionnalités garantissant que les logiciels ne peuvent être chargés que lorsque la conformité de la combinaison de l'équipement et du logiciel a été démontrée.

Le terme « équipement radioélectrique » désigne ici le [processeur de bande de base](https://en.wikipedia.org/wiki/Baseband_processor) (le modem), pas le smartphone dans son ensemble. Cet article exige que le firmware de la partie radio soit signé cryptographiquement — une mesure universellement appliquée depuis des années, qui n'a rien à voir avec le verrouillage OEM ni avec la capacité de l'utilisateur à flasher un OS.

Le vrai but de cette directive, c'est d'éviter que les appareils n'interfèrent avec les fréquences d'urgence, les réseaux mobiles ou les communications aéronautiques. Pas d'empêcher les utilisateurs d'installer l'OS de leur choix.

D'ailleurs, les régulateurs européens avaient anticipé que des fabricants utiliseraient cette directive comme prétexte pour verrouiller leurs appareils et étouffer la concurrence. C'est pourquoi ils ont ajouté le considérant 19 :

> Verification by radio equipment of the compliance of its combination with software should not be abused in order to prevent its use with software provided by independent parties. The availability to public authorities, manufacturers and users of information on the compliance of intended combinations of radio equipment and software should contribute to facilitate competition. In order to achieve those objectives, the power to adopt acts in accordance with Article 290 TFEU should be delegated to the Commission in respect of the specification of categories or classes of radio equipment for which manufacturers have to provide information on the compliance of intended combinations of radio equipment and software with the essential requirements set out in this Directive.

> _Traduction_ : la vérification par l'équipement radioélectrique de la conformité de sa combinaison avec un logiciel ne doit pas être détournée pour empêcher son utilisation avec des logiciels fournis par des tiers indépendants. La mise à disposition des autorités publiques, des fabricants et des utilisateurs d'informations sur la conformité des combinaisons prévues d'équipements radioélectriques et de logiciels doit contribuer à faciliter la concurrence.

En clair : la directive RED ne peut pas être utilisée pour t'empêcher d'installer un autre système.

## Et la réglementation chinoise, elle impose le verrouillage ?

**Non.** Il n'existe aucune loi ou réglementation chinoise qui exige le verrouillage permanent du bootloader. Certains citent [ce texte de 2022](https://www.gov.cn/zhengce/zhengceku/2022-12/15/content_5732079.htm) du ministère de l'Industrie et des Technologies de l'information, mais c'est une interprétation abusive. Ce texte parle de mesures techniques pour prévenir les attaques sur la chaîne d'approvisionnement — il n'a rien à voir avec le fait de verrouiller les appareils une fois qu'ils sont entre les mains des consommateurs.

Si une telle loi existait, OnePlus ne pourrait pas vendre en Chine des appareils au bootloader déverrouillable. Or, c'est le cas.

Les fabricants ne sont donc pas forcés de verrouiller vos appareils. Ils le font parce que ça les arrange.
