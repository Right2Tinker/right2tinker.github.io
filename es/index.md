---
layout: home
title: Inicio
lang: es
---

<p><em>Nota: Este documento ha sido traducido por una IA. Para la versión original, consulte la <a href="/">versión en inglés</a>.</em></p>

## El problema: tu teléfono ya no es tuyo

Seguro que sabes que el ecosistema de Apple está cerradísimo — solo puedes instalar apps desde la App Store, y solo puedes usar iOS. Android era diferente. Era el favorito de quienes querían *poseer* de verdad sus dispositivos, gracias a su apertura y la libertad de trastear.

Esa época se está acabando.

Para entender lo que ha pasado, primero hay que explicar el [**bloqueo OEM**](https://source.android.com/docs/core/architecture/bootloader/locking_unlocking) (o «bloqueo del bootloader») — un componente de seguridad clave en los Android. Cuando está bloqueado, impide que cualquiera modifique el sistema operativo preinstalado. Protege contra malware. Todos los Android modernos salen de fábrica bloqueados.

Pero también significa que los usuarios que *quieran* modificar su propio teléfono se topan con ese mismo mecanismo.

Antes, los fabricantes ofrecían formas oficiales de **desbloquear** el dispositivo — bajo responsabilidad del usuario — para recuperar el control total. Pero en los últimos años, uno tras otro, han ido eliminando estas opciones. Hoy, la mayoría de los dispositivos en el mercado están bloqueados para siempre.

En 2025 la cosa empeoró. Samsung eliminó la opción de desbloqueo OEM en One UI 8. Xiaomi lo ha vuelto prácticamente imposible. Google mismo planeaba restringir la instalación de apps fuera de la Play Store — solo una protesta masiva, el movimiento [**Keep Android Open**](https://keepandroidopen.org/), frenó sus planes.

La cronología de estos bloqueos y el estado actual de la libertad de trastear en el mundo Android están documentados por el proyecto [**Bootloader Unlock Wall of Shame**](https://github.com/zenfyrdev/bootloader-unlock-wall-of-shame).

Cuando tu dispositivo está bloqueado permanentemente, **ya no eres verdaderamente dueño de lo que legalmente te pertenece**.

## A qué extremos tiene que llegar la gente solo para trastear

Hay entusiastas forzados a medidas desesperadas por recuperar el control de lo que es suyo:

- Usuarios de Xiaomi han tenido que [**arrancar físicamente sus teléfonos de los centros de servicio**](https://www.reddit.com/r/PocoPhones/comments/1mak843/xiaomi_users_escape_service_centers_with/) durante un downgrade para aprovechar una ventana de desbloqueo.
- Un comprador británico de Zenfone [**demandó a ASUS**](https://xdaforums.com/t/court-action-against-asus-false-promise-on-bootloader-unlock-tool.4657042/) por incumplir su promesa de proporcionar herramientas de desbloqueo. Y ganó — le devolvieron las 770 £ enteras.

Es trágico que alguien tenga que llegar tan lejos solo para trastear con lo que es legalmente suyo.

Y aquí está lo clave: **el bloqueo OEM no afecta solo a los «geeks». Es una amenaza para la seguridad, la privacidad y los derechos del consumidor de *cada usuario de smartphone*.**

## Por qué los fabricantes te cierran la puerta de tu propio dispositivo

Los fabricantes tienen excusas. Veamos una por una.

### «Lo exigen las leyes. »

Los OEM y algunos miembros de la comunidad Android señalan varias leyes y regulaciones locales. Pero no son **más que chivos expiatorios**. No existe **ninguna ley conocida en el mundo** que exija que un teléfono esté bloqueado para siempre. Consulta nuestra [FAQ](/es/faq).

### «Disuade a los ladrones. »

Supuestamente, un bootloader bloqueado permite implementar mecanismos antirrobo inquebrantables.

Pero el bootloader ya viene **bloqueado de fábrica**. Sin desbloquearlo antes, un mecanismo antirrobo puede **impedir que un ladrón desbloquee el bootloader** sin problemas. Además, aunque esté bloqueado, un teléfono robado se puede desmontar y vender por piezas. Este argumento no se sostiene.

### «Evita que infecten el firmware. »

Un bootloader desbloqueable podría, según ellos, permitir a atacantes plantar malware en lo más profundo del firmware.

Pero esto requiere **acceso físico** al dispositivo, saltarse las pruebas de propiedad, y pasar por un procedimiento que **borra todos tus datos** — te darías cuenta al instante. Para la inmensa mayoría de los usuarios, este escenario es ciencia ficción. Las funciones de seguridad por hardware (como el [TEE](https://en.wikipedia.org/wiki/Trusted_execution_environment)) ya hacen detectables estos ataques — verás un aviso al reiniciar, y las herramientas de atestación reportarán anomalías.

### «Reduce los costes de soporte. »

La comunidad de trasteo es ínfima. Esta excusa es una cortina de humo.

## Lo que realmente está pasando

### 1. Degradación remota del rendimiento

Algunos fabricantes han montado sistemas para [**controlar el rendimiento de tu teléfono a distancia**](https://www.bilibili.com/video/BV1rUhXzEEde) (NOTA: el enlace es a una plataforma china; hay subtítulos en inglés disponibles) — a menudo para empeorarlo, mucho después de la compra.

Usuarios han documentado cómo ciertos dispositivos se vuelven más lentos de repente — no por el desgaste del hardware, sino por políticas en la nube que limitan el rendimiento deliberadamente. Un teléfono que iba fino se vuelve torpe en un año, porque el fabricante ajusta a distancia las frecuencias de la CPU y la planificación. Este sistema — a veces llamado «control en la nube» — pisotea la planificación local con mayor prioridad.

### 2. Restricciones artificiales de funciones

Los fabricantes retrasan o bloquean deliberadamente la llegada de nuevas funciones a los modelos antiguos — aunque sean técnicamente compatibles y no requieran ningún porte.

Pasa una y otra vez: el fabricante dice que una función es incompatible, y la comunidad descubre que funciona perfectamente una vez sorteadas las restricciones artificiales.

### 3. Malware oculto en el firmware

En 2025, investigadores descubrieron [**Keenadu**](https://www.kaspersky.com/about/press-releases/kaspersky-discovers-keenadu-a-multifaceted-android-malware-that-can-come-preinstalled-on-new-devices) — una puerta trasera preinstalada directamente en el firmware durante la fabricación. El código malicioso se inyecta en `libandroid_runtime.so`, una biblioteca central de Android, permitiéndole acceder al espacio de direcciones de *todas* las aplicaciones. Sus capacidades son casi ilimitadas: sus módulos se descargan dinámicamente y se actualizan a distancia.

Del mismo modo, el troyano [**Triada**](https://www.kaspersky.com/blog/trojan-in-fake-smartphones/53331/) se infiltra en las particiones del sistema e infecta el proceso Zygote — el padre de todas las aplicaciones Android. Una vez infectado, todo el dispositivo está comprometido: modificación de direcciones de carteras crypto, robo de credenciales, interceptación de mensajes…

Es probable que estos malwares sean resultado de [ataques a la cadena de suministro](https://en.wikipedia.org/wiki/Supply_chain_attack), no de la voluntad deliberada de los fabricantes. Pero si el bootloader está bloqueado permanentemente, los investigadores no pueden ni detectarlos ni analizarlos.

No son amenazas hipotéticas. Son pruebas reales de que el malware a nivel de firmware existe y prospera en entornos bloqueados, donde el usuario no puede auditar lo que se ejecuta en su dispositivo.

### El núcleo del problema

Cuando el sistema está bloqueado y es opaco, el fabricante tiene un poder absoluto. Puede degradar tu dispositivo a distancia, imponer una **obsolescencia programada**. Restringir sus capacidades. Recoger tus datos sin que lo sepas. Y tú no puedes ni verificarlo ni detenerlo.

**El bootloader bloqueado no te protege de los atacantes — protege al fabricante de ti.**

## Nuestra propuesta: el Right to Tinker

Definimos el **Right to Tinker** (derecho a trastear) así:

> **Toda persona que posea legal y plenamente un dispositivo móvil inteligente debe poder desactivar todos los mecanismos de bloqueo activados por defecto y recuperar el control total de su dispositivo.**

Esto implica:

- **Acceso completo de lectura y escritura** a cada bit del almacenamiento interno destinado a la programación de propósito general.
- **La capacidad de arrancar cualquier sistema operativo** — ya sea el Android original, un ROM personalizado como LineageOS, o cualquier otro.

El modelo a seguir es la industria del PC: compras el hardware, eres dueño del hardware, controlas el software que funciona en él.

### Exigencias adicionales

**1. Mecanismo de recuperación obligatorio:**
Los fabricantes no deben anular la garantía solo porque un usuario ejerza el control total de su dispositivo — a menos que demuestren que un fallo concreto se debe directamente a sus acciones. Además, deben proporcionar herramientas accesibles para restaurar el dispositivo al estado de fábrica.

**2. Romper el monopolio de la atestación:**
Las infraestructuras digitales críticas (apps bancarias, mensajería, portales gubernamentales) exigen cada vez más un «entorno de confianza». En la práctica, solo dos empresas estadounidenses proporcionan estas pruebas: Apple y Google (mediante Play Integrity API en Android).

Esto excluye de facto cualquier dispositivo que no ejecute software propietario de Google. Como dice acertadamente el consorcio Volla, esto crea una «paradoja de seguridad» — «la verificación de confianza la realiza precisamente la entidad cuyo ecosistema se pretende evitar».

Afortunadamente, ya hay alternativas en marcha. El proyecto [**UnifiedAttestation**](https://uattest.net/), liderado por Volla Systeme con Murena, Iodé y Apostrophy, desarrolla bajo licencia Apache 2.0 un sistema de atestación open-source, transparente y descentralizado, que cualquier sistema operativo (incluidos los ROM personalizados) puede implementar. Apoyamos y amplificamos este esfuerzo.

### Qué conseguiríamos

- **Para el usuario medio:** La certeza de que su dispositivo no está siendo degradado o vigilado en secreto, porque el sistema es auditable.
- **Para el trasteador:** La libertad de personalizar, reparar y alargar la vida de su dispositivo.
- **Para los investigadores de ciberseguridad:** La capacidad de encontrar vulnerabilidades y exigir responsabilidades a los fabricantes.
- **Para el medio ambiente:** Dispositivos que duran más gracias a las actualizaciones comunitarias.
- **Para la soberanía digital:** Menos dependencia de un puñado de gigantes estadounidenses para las infraestructuras esenciales.

## Únete al movimiento

El Right to Tinker no es una preocupación de nicho. Es un derecho digital fundamental que afecta a cada usuario de smartphone. Cuando los fabricantes bloquean nuestros dispositivos, no nos protegen — protegen su capacidad de controlarnos.

La comunidad del trasteo siempre ha sido la vanguardia de la libertad digital. Estuvimos allí cuando bloquearon los PC. Estuvimos allí cuando bloquearon los routers. Estamos aquí ahora, mientras los smartphones — los ordenadores más personales que poseemos — están siendo bloqueados como nunca.

**El momento de actuar es ahora.**

Cada día que esperamos, otro fabricante aprieta las tuercas. Otra política se implementa. Otra función se restringe. Otro dispositivo se degrada.

Pero lo contrario también es cierto: cada día que actuamos, ganamos impulso. Encontramos aliados. Hacemos ruido. Nos volvemos más difíciles de ignorar.

---

**Únete a la discusión.**

- [Repositorio de GitHub](https://github.com/Right2Tinker/right2tinker.github.io) de este sitio
- [Servidor de Discord](https://discord.gg/pbKDpjuCx6)
- [Grupo de Telegram](https://t.me/right2tinker)
- [Reddit `r/right2tinker`](https://www.reddit.com/r/right2tinker)
- [Megahilo de XDA](https://xdaforums.com/t/the-right-to-tinker-initiative-its-time-to-take-back-the-full-control-of-our-devices.4795402/)

Y necesitamos tu voz para que el mundo sepa que el Right to Tinker importa — publica en redes sociales con nuestros hashtags `#R2T`, `#Right2Tinker` y `#RightToTinker`.

**Luchemos por un ecosistema móvil libre, transparente, auditable y fiable.**

---

*Este es un documento vivo. A medida que el movimiento crezca, surjan nuevas pruebas y el panorama evolucione, estas demandas y estrategias se refinarán. El objetivo no es producir un documento perfecto — el objetivo es iniciar un movimiento.*
