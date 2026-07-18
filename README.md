# The Right to Tinker Initiative

An initiative to reclaim the true ownership and the freedom to tinker of our smart digital devices.

## The Problem: Your Phone Is No Longer Yours

You may already know that Apple’s mobile ecosystem is heavily locked down — you can only install apps from the App Store, and you can only run iOS on your device. Android was once different. It was loved by those who wanted to truly *own* their devices, thanks to its openness and the freedom to tinker.

But that era is ending.

To understand what has happened, we first need to explain the [**OEM lock**](https://source.android.com/docs/core/architecture/bootloader/locking_unlocking) (or “bootloader lock”) — a critical security component on Android phones. When a device is locked, it prevents anyone from altering the preinstalled operating system. This protects users from malware. All modern Android phones are shipped in this locked state.

But this also means that users who *want* to modify their own phones are blocked by this very mechanism.

Historically, manufacturers provided official ways for users to **unlock** their devices — at their own risk — so they could regain full control. But in recent years, one manufacturer after another has quietly removed these options. Today, most devices on the market are locked down forever.

In 2025, the situation worsened significantly. Samsung removed the OEM Unlocking toggle from Developer Options in One UI 8. Xiaomi has also made OEM-unlocking practically impossible. Even worse, Google has planned to heavily restrict the freedom to sideload third apps. Only a strong public protest — the [**Keep Android Open**](https://keepandroidopen.org/) movement — pushed back against these plans.

The timeline of these lockdown events, as well as the current state of the freedom to tinker in the Android world, are well documented by the [**Bootloader Unlock Wall of Shame**](https://github.com/zenfyrdev/bootloader-unlock-wall-of-shame) project.

When your device is permanently locked, **you no longer truly own the device you lawfully possess**.

## Why Do Manufacturers Lock You Out of Your Own Device?

When questioned, manufacturers offer several justifications. Let us examine each.

### “It is mandated by laws and regulations.”

OEMs, as well as some Android development community members, often point to several local laws and regulations for the bootloader lockdown. However, these are **nothing more than convenient scapegoats** and there are currently **no known law or regulation around the world** that requires a phone to be locked down forever. Please refer to our [FAQ](/faq) for more details.

### “It discourages thieves.”

Manufacturers often explain that a locked down bootloader allows them to implement anti-theft mechanisms that cannot be easily cracked.

But bootloaders are already **locked by default**, and without it being unlocked already, an anti-theft mechanism can easily **block a theft from unlocking the bootloader** altogether. Furthermore, even with current lockdowns, stolen devices can still be disassembled and sold for parts. This argument does not hold.

### “It prevents attackers from planting malware.”

Manufacturers also argue that an unlockable bootloader can allow attackers to plant malware deep into the firmware that are hard to detect.

But this would require **physical access** to your device, bypassing potential proof-of-ownership requirements to unlock the bootloader, which is a procedure that will **wipe your data** (as mandated by the existing security scheme) — something you would immediately notice. For the vast majority of users, this threat model is fictional. Also, hardware-backed security features (e.g. the [TEE](https://en.wikipedia.org/wiki/Trusted_execution_environment)) already make such attacks detectable — you will see a warning screen every time you restart your phone, and device attestation tools will report anomalies.

### “It reduces customer support costs.”

The tinkering community is demonstrably small. Manufacturers already have the legal right to void warranties upon unlock. This excuse is a smokescreen.


## What Is Really Happening

### 1. Remote Performance Degradation

Some manufacturers have built systems that allow them to remotely [**control how your phone performs**](https://www.bilibili.com/video/BV1rUhXzEEde) (NOTE: This link points to a Chinese video platform. Automatically generated captions with English translation is available.) — often negatively — long after you have bought it.

Users have documented how certain devices suddenly become slower over time — not because of hardware aging, but because of cloud-controlled policies that deliberately throttle performance. A phone that ran smoothly at purchase can become noticeably sluggish within a year, as manufacturers remotely adjust CPU frequencies and scheduling. The system that enables this — sometimes called “cloud control” — overrides your device’s own scheduling with higher priority, allowing the manufacturer to dictate performance from afar.

### 2. Artificial Feature Restrictions

Manufacturers often deliberately delay or withhold the rollout of new software features to older devices — even though those devices are technically fully compatible and require no additional porting.

It has happened repeatedly that a manufacturer claim a feature is incompatible with a certain older device, only for the tinkering community to discover that the feature works perfectly well once certain artificial restrictions are bypassed.

### 3. Malware Hidden in Firmware

In 2025, cybersecurity researchers discovered [**Keenadu**](https://www.kaspersky.com/about/press-releases/kaspersky-discovers-keenadu-a-multifaceted-android-malware-that-can-come-preinstalled-on-new-devices) — a backdoor preinstalled directly into device firmware during the manufacturing stage. The malicious code is injected into `libandroid_runtime.so` — a core library of the Android system — allowing it to enter the address space of *every* app running on the device. Its functionality is virtually unlimited, as its malicious modules are downloaded dynamically and can be updated remotely.

Similarly, the [**Triada**](https://www.kaspersky.com/blog/trojan-in-fake-smartphones/53331/) trojan has evolved to embed malicious components directly into system partitions, infecting the Zygote process — the parent of all Android applications. Once infected, every app on the device is compromised. Attackers can modify cryptocurrency wallet addresses, steal login credentials, intercept messages, and more.

While it is important to note that such high-profile malware are unlikely to be intentionally embedded by the manufacturers and are more likely examples of [supply chain attack](https://en.wikipedia.org/wiki/Supply_chain_attack), it will be nearly impossible for the cybersecurity researchers to detect and analyze them if the bootloader is locked down permanently.

These are not hypothetical threats. They are real-world evidence that firmware-level malware exists and thrives in locked-down environments where users cannot audit what runs on their devices.

### The Core Problem

When the system is locked and opaque, the manufacturer holds absolute power. They can degrade your device remotely, and force a **planned obsolescence**. They can restrict its capabilities. They can collect data without your knowledge. And you have no way to verify or stop it.

**The locked bootloader is not protecting you from attackers — it is protecting the manufacturer from you.**


## Our Proposal: The Right to Tinker

We define the **Right to Tinker** as follows:

> **Anyone who lawfully and fully possesses a smart mobile device must be eligible to disarm all enabled-by-default lockdown mechanisms and restore full control of their device.**

This means:

- **Full read and write access** to every bit on the device’s internal storage intended for general-purpose programming.
- **The ability to boot any operating system** — whether the original Android, a custom ROM like LineageOS, or any other system the user chooses.

The implementation should mirror the PC industry: you buy the hardware, you own the hardware, you control the software that runs on it.

### Additional Demands

**1. Mandatory Recovery Mechanism:**
Manufacturers must not void warranty solely because a user exercises full device control — unless they can prove that a specific malfunction is a direct result of the user’s operations. Furthermore, manufacturers must provide accessible tools or services for restoring a device to the factory system image.

**2. Breaking the Monopoly of Device Attestation:**
Critical digital infrastructure — banking apps, messaging services, government portals — increasingly require a “trusted device environment.” In practice, the only accepted proofs are provided by two US companies: Apple and Google (through Play Integrity API on Android).

This creates a de facto exclusion for any device not running Google’s proprietary software. As the Volla consortium aptly describes it, this leads to a “security paradox” — “the check of trustworthiness is carried out by precisely that entity whose ecosystem is to be avoided at the same time”.

### What This Would Achieve

- **For the average user:** The assurance that their device is not being secretly degraded or surveilled, because the system is auditable.
- **For the tinkerer:** The freedom to customize, repair, and extend the life of their device.
- **For cybersecurity researchers:** The ability to find vulnerabilities and hold manufacturers accountable.
- **For the environment:** Extended device lifespans through community-supported software updates.
- **For digital sovereignty:** Reduced dependence on a handful of US corporations for core infrastructure.


## Join the Movement

The Right to Tinker is not a niche hobbyist concern. It is a fundamental digital right that affects every smartphone user. When manufacturers lock down our devices, they are not protecting us — they are protecting their ability to control us.

The tinkering community has always been the vanguard of digital freedom. We were there when PCs were locked down. We were there when routers were locked down. We are here now, as smartphones — the most personal computers we own — are being locked down tighter than ever.

**The time for action is now.**

Every day we wait, another manufacturer tightens the screws. Another policy is implemented. Another feature is gated. Another device is degraded.

But the opposite is also true: every day we act, we build momentum. We gain allies. We make noise. We become harder to ignore.

---

**Join the discussion.**

- [GitHub Repository](https://github.com/Right2Tinker/right2tinker.github.io) of this site
- [Discord server](https://discord.gg/pbKDpjuCx6)
- [Telegram group](https://t.me/right2tinker)
- [Reddit `r/right2tinker`](https://www.reddit.com/r/right2tinker)
- [XDA megathread](https://xdaforums.com)

And we need your voice to let the world know that the Right to Tinker matters — post on social media with our hashtags `#R2T`, `#Right2Tinker` and `#RightToTinker`.

**Let’s fight for a free, transparent, auditable, and trustworthy mobile ecosystem.**
