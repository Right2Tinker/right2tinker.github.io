---
layout: home
title: Inicio
lang: es
---

<p><em>Nota: Este documento ha sido traducido por una IA. Para la versión original, consulte la <a href="/">versión en inglés</a>.</em></p>

## El Problema: Tu Teléfono Ya No Te Pertenece

Puede que ya sepas que el ecosistema móvil de Apple está fuertemente cerrado — solo puedes instalar aplicaciones desde la App Store, y solo puedes ejecutar iOS en tu dispositivo. Android alguna vez fue diferente. Era amado por aquellos que querían *poseer* verdaderamente sus dispositivos, gracias a su apertura y la libertad de experimentar.

Pero esa era está terminando.

Para entender lo que ha sucedido, primero debemos explicar el [**bloqueo del OEM**](https://source.android.com/docs/core/architecture/bootloader/locking_unlocking) (o "bloqueo del bootloader") — un componente de seguridad crítico en los teléfonos Android. Cuando un dispositivo está bloqueado, impide que alguien altere el sistema operativo preinstalado. Esto protege a los usuarios de malware. Todos los teléfonos Android modernos se envían en este estado bloqueado.

Pero esto también significa que los usuarios que *quieren* modificar sus propios teléfonos son bloqueados por este mismo mecanismo.

Históricamente, los fabricantes proporcionaban formas oficiales para que los usuarios **desbloquearan** sus dispositivos — bajo su propio riesgo — para que pudieran recuperar el control total. Pero en los últimos años, un fabricante tras otro ha eliminado silenciosamente estas opciones. Hoy en día, la mayoría de los dispositivos en el mercado están bloqueados para siempre.

En 2025, la situación empeoró significativamente. Samsung eliminó la opción de Desbloqueo OEM de las Opciones de Desarrollador en One UI 8. Xiaomi desmanteló sus servidores de desbloqueo heredados y limitó a los usuarios a desbloquear solo un dispositivo por año. Peor aún, Google ha planeado restringir por completo la libertad de instalar aplicaciones fuera de Play Store. Solo una fuerte protesta pública — el movimiento [**Keep Android Open**](https://keepandroidopen.org/) — frenó estos planes.

La cronología de estos eventos de bloqueo, así como el estado actual de la libertad de experimentar en el mundo Android, están bien documentados por el proyecto [**Bootloader Unlock Wall of Shame**](https://github.com/zenfyrdev/bootloader-unlock-wall-of-shame).

Cuando tu dispositivo está permanentemente bloqueado, **ya no posees verdaderamente el dispositivo que posees legalmente**.


## Lo Que La Gente Se Ve Obligada a Hacer Solo Para Experimentar

En su pura voluntad de recuperar el control, los entusiastas han sido llevados a medidas extremas:

- Usuarios de Xiaomi han recurrido a [**tomar físicamente sus teléfonos de los centros de servicio**](https://www.reddit.com/r/PocoPhones/comments/1mak843/xiaomi_users_escape_service_centers_with/) durante procedimientos de degradación, esperando aprovechar una ventana fugaz para desbloquear sus dispositivos.
- Un comprador británico de Zenfone [**demandó a ASUS**](https://xdaforums.com/t/court-action-against-asus-false-promise-on-bootloader-unlock-tool.4657042/) después de que la empresa incumpliera su promesa de proporcionar herramientas de desbloqueo del bootloader. El comprador ganó — recibiendo un reembolso completo de £770. ASUS había prometido estas herramientas, luego las deshabilitó, e incluso eliminó las discusiones sobre el desbloqueo del bootloader de sus foros.

Es una tragedia que las personas tengan que llegar a tales extremos simplemente para experimentar con algo que poseen legalmente.

Pero aquí está el punto crucial: **el bloqueo del OEM no afecta solo a los "geeks". Representa una gran amenaza para la seguridad, la privacidad y los derechos del consumidor para *cada usuario de teléfonos inteligentes*.**


## ¿Por Qué los Fabricantes Te Bloquean el Acceso a Tu Propio Dispositivo?

Cuando se les pregunta, los fabricantes ofrecen varias justificaciones. Examinemos cada una.

### "Está exigido por leyes y regulaciones."

Los OEM, así como algunos miembros de la comunidad de desarrollo de Android, a menudo señalan varias leyes y regulaciones locales para el bloqueo del bootloader. Sin embargo, estos son **nada más que chivos expiatorios convenientes** y actualmente **no existe ninguna ley o regulación conocida en el mundo** que requiera que un teléfono esté bloqueado para siempre. Consulte nuestra [FAQ](/faq) para más detalles.

### "Desalienta a los ladrones."

Los fabricantes a menudo explican que un bootloader bloqueado les permite implementar mecanismos antirrobo que no se pueden vulnerar fácilmente.

Pero los bootloaders ya están **bloqueados por defecto**, y sin que esté ya desbloqueado, un mecanismo antirrobo puede fácilmente **impedir que un ladrón desbloquee el bootloader** por completo. Además, incluso con los bloqueos actuales, los dispositivos robados aún pueden ser desmontados y vendidos por piezas. Este argumento no se sostiene.

### "Evita que los atacantes instalen malware."

Los fabricantes también argumentan que un bootloader desbloqueable puede permitir que los atacantes instalen malware profundamente en el firmware que es difícil de detectar.

Pero esto requeriría **acceso físico** a tu dispositivo, eludiendo los posibles requisitos de prueba de propiedad para desbloquear el bootloader, que es un procedimiento que **borrará tus datos** (según lo exige el esquema de seguridad existente) — algo que notarías de inmediato. Para la gran mayoría de los usuarios, este modelo de amenaza es ficticio. Además, las funciones de seguridad respaldadas por hardware (por ejemplo, el [TEE](https://en.wikipedia.org/wiki/Trusted_execution_environment)) ya hacen que tales ataques sean detectables — verás una pantalla de advertencia cada vez que reinicies tu teléfono, y las herramientas de atestación de dispositivos reportarán anomalías.

### "Reduce los costos de soporte al cliente."

La comunidad de experimentación es demostrablemente pequeña. Los fabricantes ya tienen el derecho legal de anular la garantía al desbloquear. Esta excusa es una cortina de humo.


## Lo Que Realmente Está Sucediendo

### 1. Degradación Remota del Rendimiento

Algunos fabricantes han construido sistemas que les permiten [**controlar remotamente el rendimiento de tu teléfono**](https://www.bilibili.com/video/BV1rUhXzEEde) (NOTA: Este enlace apunta a una plataforma de video china. Hay subtítulos generados automáticamente con traducción al inglés disponibles) — a menudo negativamente — mucho después de que lo hayas comprado.

Los usuarios han documentado cómo ciertos dispositivos se vuelven repentinamente más lentos con el tiempo — no por el envejecimiento del hardware, sino por políticas controladas en la nube que degradan deliberadamente el rendimiento. Un teléfono que funcionaba sin problemas en el momento de la compra puede volverse notablemente lento en un año, a medida que los fabricantes ajustan remotamente las frecuencias de la CPU y la planificación. El sistema que permite esto — a veces llamado "control en la nube" — anula la planificación propia del dispositivo con mayor prioridad, permitiendo al fabricante dictar el rendimiento desde lejos.

### 2. Restricciones Artificiales de Funciones

Los fabricantes a menudo retrasan o niegan deliberadamente la implementación de nuevas funciones de software en dispositivos más antiguos — incluso cuando esos dispositivos son técnicamente completamente compatibles y no requieren portabilidad adicional.

Ha sucedido repetidamente que un fabricante afirma que una función es incompatible con un dispositivo antiguo determinado, solo para que la comunidad de experimentación descubra que la función funciona perfectamente una vez que se eluden ciertas restricciones artificiales.

### 3. Malware Oculto en el Firmware

En 2025, investigadores de ciberseguridad descubrieron [**Keenadu**](https://www.kaspersky.com/about/press-releases/kaspersky-discovers-keenadu-a-multifaceted-android-malware-that-can-come-preinstalled-on-new-devices) — una puerta trasera preinstalada directamente en el firmware del dispositivo durante la etapa de fabricación. El código malicioso se inyecta en `libandroid_runtime.so` — una biblioteca central del sistema Android — permitiéndole entrar en el espacio de direcciones de *cada* aplicación que se ejecuta en el dispositivo. Su funcionalidad es virtualmente ilimitada, ya que sus módulos maliciosos se descargan dinámicamente y pueden actualizarse remotamente.

Del mismo modo, el troyano [**Triada**](https://www.kaspersky.com/blog/trojan-in-fake-smartphones/53331/) ha evolucionado para incrustar componentes maliciosos directamente en las particiones del sistema, infectando el proceso Zygote — el padre de todas las aplicaciones de Android. Una vez infectado, cada aplicación en el dispositivo se ve comprometida. Los atacantes pueden modificar direcciones de billeteras de criptomonedas, robar credenciales de inicio de sesión, interceptar mensajes y más.

Si bien es importante señalar que es poco probable que malware tan notorio sea incrustado intencionalmente por los fabricantes y son más probablemente ejemplos de un [ataque a la cadena de suministro](https://en.wikipedia.org/wiki/Supply_chain_attack), será casi imposible para los investigadores de ciberseguridad detectarlos y analizarlos si el bootloader está bloqueado permanentemente.

Estas no son amenazas hipotéticas. Son evidencia del mundo real de que el malware a nivel de firmware existe y prospera en entornos bloqueados donde los usuarios no pueden auditar lo que se ejecuta en sus dispositivos.

### El Problema Central

Cuando el sistema está bloqueado y es opaco, el fabricante tiene un poder absoluto. Pueden degradar tu dispositivo de forma remota y forzar una **obsolescencia programada**. Pueden restringir sus capacidades. Pueden recopilar datos sin tu conocimiento. Y no tienes forma de verificarlo o detenerlo.

**El bootloader bloqueado no te está protegiendo de los atacantes — está protegiendo al fabricante de ti.**


## Nuestra Propuesta: El Derecho a Experimentar (Right to Tinker)

Definimos el **Derecho a Experimentar (Right to Tinker)** de la siguiente manera:

> **Cualquier persona que posea legal y plenamente un dispositivo móvil inteligente debe ser elegible para desarmar todos los mecanismos de bloqueo habilitados por defecto y restaurar el control total de su dispositivo.**

Esto significa:

- **Acceso completo de lectura y escritura** a cada bit en el almacenamiento interno del dispositivo destinado a la programación de propósito general.
- **La capacidad de iniciar cualquier sistema operativo** — ya sea el Android original, un ROM personalizado como LineageOS, o cualquier otro sistema que el usuario elija.

La implementación debería reflejar la industria de las PC: compras el hardware, eres dueño del hardware, controlas el software que se ejecuta en él.

### Demandas Adicionales

**1. Mecanismo de Recuperación Obligatorio:**
Los fabricantes no deben anular la garantía únicamente porque un usuario ejerza el control total del dispositivo — a menos que puedan probar que un mal funcionamiento específico es un resultado directo de las operaciones del usuario. Además, los fabricantes deben proporcionar herramientas o servicios accesibles para restaurar un dispositivo a la imagen del sistema de fábrica.

**2. Rompiendo el Monopolio de la Atestación de Dispositivos:**
La infraestructura digital crítica — aplicaciones bancarias, servicios de mensajería, portales gubernamentales — requiere cada vez más un "entorno de dispositivo confiable". En la práctica, las únicas pruebas aceptadas son proporcionadas por dos empresas estadounidenses: Apple y Google (a través de Play Integrity API en Android).

Esto crea una exclusión de facto para cualquier dispositivo que no ejecute el software propietario de Google. Como el consorcio Volla lo describe acertadamente, esto lleva a una "paradoja de seguridad" — "la verificación de confiabilidad es realizada precisamente por esa entidad cuyo ecosistema se debe evitar al mismo tiempo".

Afortunadamente, ya se está trabajando en ello. El proyecto **UnifiedAttestation**, liderado por Volla Systeme con socios como Murena, Iodé y Apostrophy, está desarrollando una alternativa de código abierto a Play Integrity API bajo la licencia Apache 2.0. Este proyecto tiene como objetivo crear un sistema de atestación transparente y descentralizado que cualquier sistema operativo (incluyendo ROMs personalizados) pueda implementar. Apoyamos y amplificamos este esfuerzo.

### Lo Que Esto Lograría

- **Para el usuario promedio:** La seguridad de que su dispositivo no está siendo degradado o vigilado secretamente, porque el sistema es auditable.
- **Para el experimentador:** La libertad de personalizar, reparar y extender la vida útil de su dispositivo.
- **Para los investigadores de ciberseguridad:** La capacidad de encontrar vulnerabilidades y responsabilizar a los fabricantes.
- **Para el medio ambiente:** Mayor vida útil de los dispositivos a través de actualizaciones de software respaldadas por la comunidad.
- **Para la soberanía digital:** Reducción de la dependencia de un puñado de corporaciones estadounidenses para la infraestructura central.


## Únete al Movimiento

El Derecho a Experimentar no es una preocupación de aficionados de nicho. Es un derecho digital fundamental que afecta a cada usuario de teléfonos inteligentes. Cuando los fabricantes bloquean nuestros dispositivos, no nos están protegiendo — están protegiendo su capacidad de controlarnos.

La comunidad de experimentación siempre ha sido la vanguardia de la libertad digital. Estuvimos allí cuando las PC fueron bloqueadas. Estuvimos allí cuando los routers fueron bloqueados. Estamos aquí ahora, mientras los teléfonos inteligentes — las computadoras más personales que poseemos — están siendo bloqueados más que nunca.

**El momento de actuar es ahora.**

Cada día que esperamos, otro fabricante aprieta las tuercas. Se implementa otra política. Se restringe otra función. Se degrada otro dispositivo.

Pero lo contrario también es cierto: cada día que actuamos, acumulamos impulso. Ganamos aliados. Hacemos ruido. Nos volvemos más difíciles de ignorar.

---

**Únete a la discusión.**

- [Repositorio de GitHub](https://github.com/Right2Tinker/right2tinker.github.io) de este sitio
- [Servidor de Discord](https://discord.gg/pbKDpjuCx6)
- [Grupo de Telegram](https://t.me/right2tinker)
- [Reddit `r/right2tinker`](https://www.reddit.com/r/right2tinker)
- [Megahilo de XDA](https://xdaforums.com)

Y necesitamos tu voz para que el mundo sepa que el Derecho a Experimentar importa — publica en redes sociales con nuestros hashtags `#R2T`, `#Right2Tinker` y `#RightToTinker`.

**Luchenos por un ecosistema móvil libre, transparente, auditable y confiable.**

---

*Este es un documento vivo. A medida que el movimiento crezca, surjan nuevas evidencias y el panorama evolucione, estas demandas y estrategias se refinarán. El objetivo no es producir un documento perfecto — el objetivo es iniciar un movimiento.*
