---
layout: default
title: FAQ
lang: en
---

## Does an unlockable bootloader degrade the security of my device?

**Not at all.** As long as you don't intentionally turn on the OEM unlock option and connect your phone to a computer for bootloader unlock (a procedure that will always wipe your data), your phone stays in the original locked state, which is entirely secure.

In fact, an unlockable bootloader helps with your security and privacy, as it allows cybersecurity researchers to inspect the preinstalled firmware for potential malware an unconsented telemetry.

## Does the EU RED Act (2014/53/EU) mandate the devices to be locked down? 

A lot of people cite the Article 3(3)(i) of the RED Act as the reason why OEMs have to lock down the bootloader permanently. But this is **entirely inaccurate**. The Article states:

> radio equipment supports certain features in order to ensure that software can only be loaded into the radio equipment where the compliance of the combination of the radio equipment and software has been demonstrated.

In the context of a smart mobile device, the "radio equipment" refers to the [baseband precessor](https://en.wikipedia.org/wiki/Baseband_processor). This Article effectively requires cryptographical measurements to ensured only authentic **baseband firmware** signed by the chip manufacturer can be loaded — which are universally implied for years without relying on the OEM lock at all.

The true intention of the act is to make sure devices do not interfere with public emergency frequencies, cellular networks, or aircraft communications.

In fact, the EU regulators explicitly foresaw that greedy manufacturers might try to use this directive as a weapon to lock down their devices and kill competition. To prevent this, they wrote Recital 19 directly into the directive:

> Verification by radio equipment of the compliance of its combination with software should not be abused in order to prevent its use with software provided by independent parties. The availability to public authorities, manufacturers and users of information on the compliance of intended combinations of radio equipment and software should contribute to facilitate competition. In order to achieve those objectives, the power to adopt acts in accordance with Article 290 TFEU should be delegated to the Commission in respect of the specification of categories or classes of radio equipment for which manufacturers have to provide information on the compliance of intended combinations of radio equipment and software with the essential requirements set out in this Directive.

## Does some Chinese regulations mandate the lockdown?

There are currently no existing Chinese law or regulation that mandates a permanently locked down bootloader. While there were people referring to [this regulation](https://www.gov.cn/zhengce/zhengceku/2022-12/15/content_5732079.htm) as the reason of the Xiaomi bootloader lockdown, this claim is likely untrue.

While that regulation requires "technical measurements to prevent supply chain attacks", it does not require the devices to be permanently locked down after they reach the hands of the end user. Furthermore, OnePlus is still selling devices in China with unlockable bootloader, that disproves the existence of any law or regulation of this kind.

So the manufacturers are not forced to lock down your device. They choose to do so for their own benefit.
