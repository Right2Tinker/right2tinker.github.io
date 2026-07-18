---
layout: default
title: FAQ
lang: es
---

## Desbloquear el bootloader, ¿vuelve mi teléfono menos seguro?

**Para nada.** Mientras no actives la opción de desbloqueo OEM y conectes el teléfono a un ordenador para desbloquear el bootloader (un proceso que borra todos tus datos), tu teléfono se queda en su estado bloqueado de fábrica — tan seguro como el primer día.

De hecho, un bootloader desbloqueable *mejora* tu seguridad y privacidad: permite a los investigadores de ciberseguridad inspeccionar el firmware preinstalado en busca de malware o telemetría no consentida.

## ¿La directiva europea RED (2014/53/UE) exige el bloqueo?

Mucha gente cita el artículo 3(3)(i) de la directiva RED como justificación. Pero es **totalmente falso**. Esto es lo que dice el texto original:

> radio equipment supports certain features in order to ensure that software can only be loaded into the radio equipment where the compliance of the combination of the radio equipment and software has been demonstrated.

> _Traducción_ : los equipos radioeléctricos deberán admitir ciertas funciones para garantizar que el software solo pueda cargarse en el equipo radioeléctrico cuando se haya demostrado la conformidad de la combinación del equipo radioeléctrico y el software.

El «equipo radioeléctrico» aquí se refiere al [procesador de banda base](https://en.wikipedia.org/wiki/Baseband_processor) (el módem), no al teléfono entero. Este artículo exige que el firmware de la parte radio esté firmado criptográficamente — una medida implementada universalmente desde hace años, que no tiene nada que ver con el bloqueo OEM ni con la capacidad del usuario de flashear un sistema.

El verdadero propósito de esta directiva es evitar que los dispositivos interfieran con frecuencias de emergencia, redes móviles o comunicaciones aeronáuticas. No impedir que los usuarios instalen el sistema que quieran.

De hecho, los reguladores europeos ya anticiparon que algunos fabricantes usarían esta directiva como excusa para bloquear dispositivos y matar la competencia. Por eso incluyeron el Considerando 19:

> Verification by radio equipment of the compliance of its combination with software should not be abused in order to prevent its use with software provided by independent parties. The availability to public authorities, manufacturers and users of information on the compliance of intended combinations of radio equipment and software should contribute to facilitate competition. In order to achieve those objectives, the power to adopt acts in accordance with Article 290 TFEU should be delegated to the Commission in respect of the specification of categories or classes of radio equipment for which manufacturers have to provide information on the compliance of intended combinations of radio equipment and software with the essential requirements set out in this Directive.

> _Traducción_ : la verificación por parte del equipo radioeléctrico de la conformidad de su combinación con el software no debe ser utilizada de forma abusiva para impedir su uso con software proporcionado por terceros independientes. La disponibilidad para las autoridades públicas, los fabricantes y los usuarios de información sobre la conformidad de las combinaciones previstas de equipo radioeléctrico y software debe contribuir a facilitar la competencia.

En cristiano: no puedes usar la directiva RED para impedir que la gente instale otros sistemas.

## ¿Y la regulación china? ¿Exige el bloqueo?

**No.** No existe ninguna ley o regulación china que exija el bloqueo permanente del bootloader. Algunos mencionan [este texto de 2022](https://www.gov.cn/zhengce/zhengceku/2022-12/15/content_5732079.htm) del Ministerio de Industria y Tecnología de la Información, pero es una interpretación abusiva. Ese texto habla de medidas técnicas para prevenir ataques a la cadena de suministro — no tiene nada que ver con bloquear los dispositivos una vez que están en manos de los consumidores.

Si existiera una ley así, OnePlus no podría vender en China dispositivos con el bootloader desbloqueable. Y los vende.

Los fabricantes no están obligados a bloquear tus dispositivos. Lo hacen porque les conviene.
