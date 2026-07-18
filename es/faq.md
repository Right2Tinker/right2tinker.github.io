---
layout: default
title: Preguntas Frecuentes
lang: es
---

## ¿Un bootloader desbloqueable degrada la seguridad de mi dispositivo?

**En absoluto.** Siempre que no actives intencionalmente la opción de desbloqueo OEM y conectes tu teléfono a una computadora para desbloquear el bootloader (un procedimiento que siempre borrará tus datos), tu teléfono permanece en el estado bloqueado original, que es completamente seguro.

De hecho, un bootloader desbloqueable ayuda a tu seguridad y privacidad, ya que permite a los investigadores de ciberseguridad inspeccionar el firmware preinstalado en busca de posibles malware y telemetría no consentida.

## ¿La Directiva RED de la UE (2014/53/UE) exige que los dispositivos estén bloqueados?

Muchas personas citan el Artículo 3(3)(i) de la Directiva RED como la razón por la cual los OEM tienen que bloquear el bootloader permanentemente. Pero esto es **totalmente incorrecto**. El Artículo establece:

> el equipo de radio admite ciertas funciones para garantizar que el software solo pueda cargarse en el equipo de radio cuando se haya demostrado la conformidad de la combinación del equipo de radio y el software.

En el contexto de un dispositivo móvil inteligente, el "equipo de radio" se refiere al [procesador de banda base](https://en.wikipedia.org/wiki/Baseband_processor). Este Artículo efectivamente requiere mediciones criptográficas para garantizar que solo se pueda cargar el **firmware de banda base** auténtico firmado por el fabricante del chip — lo cual se ha implementado universalmente durante años sin depender del bloqueo del OEM.

La verdadera intención de la directiva es asegurar que los dispositivos no interfieran con las frecuencias públicas de emergencia, las redes celulares o las comunicaciones aeronáuticas.

De hecho, los reguladores de la UE previeron explícitamente que los fabricantes codiciosos podrían intentar usar esta directiva como un arma para bloquear sus dispositivos y eliminar la competencia. Para evitar esto, escribieron el Considerando 19 directamente en la directiva:

> La verificación por parte del equipo de radio de la conformidad de su combinación con el software no debe ser utilizada de manera abusiva para impedir su uso con software proporcionado por partes independientes. La disponibilidad para las autoridades públicas, los fabricantes y los usuarios de información sobre la conformidad de las combinaciones previstas de equipo de radio y software debe contribuir a facilitar la competencia. Para lograr esos objetivos, debe delegarse en la Comisión la facultad de adoptar actos de conformidad con el Artículo 290 del TFUE respecto de la especificación de categorías o clases de equipo de radio para las cuales los fabricantes deben proporcionar información sobre la conformidad de las combinaciones previstas de equipo de radio y software con los requisitos esenciales establecidos en la presente Directiva.

## ¿Alguna regulación china exige el bloqueo?

Actualmente no existen leyes o regulaciones chinas que exijan un bootloader bloqueado permanentemente. Si bien hubo personas que se referían a [esta regulación](https://www.gov.cn/zhengce/zhengceku/2022-12/15/content_5732079.htm) como la razón del bloqueo del bootloader de Xiaomi, esta afirmación es probablemente falsa.

Si bien esa regulación requiere "medidas técnicas para prevenir ataques a la cadena de suministro", no exige que los dispositivos estén bloqueados permanentemente después de llegar a las manos del usuario final. Además, OnePlus todavía vende dispositivos en China con un bootloader desbloqueable, lo que refuta la existencia de cualquier ley o regulación de este tipo.

Por lo tanto, los fabricantes no están obligados a bloquear tu dispositivo. Eligen hacerlo para su propio beneficio.
