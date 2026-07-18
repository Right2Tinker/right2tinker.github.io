---
layout: default
title: FAQ
lang: chs
---

## 能解锁BL的话，手机的安全性会降低吗？

**完全不会。** 你不去主动解BL（进fastboot点一下解锁、或者运行一下厂商的官方解锁工具，过程中数据会被清空），手机就永远处于出厂默认的锁定状态，该多安全就多安全。

甚至可以说，能解锁反而对你的隐私有好处——只有能解BL，安全研究人员才有机会检查厂商到底在固件里藏了什么东西。

## 欧盟RED法案是不是强制要求手机锁死BL？

很多人拿这个说事，但RED第3(3)(i)条的原文是：

> radio equipment supports certain features in order to ensure that software can only be loaded into the radio equipment where the compliance of the combination of the radio equipment and software has been demonstrated.

> _翻译_：无线电设备应确保只有经过合规性验证的软件组合才能被加载。

注意，"无线电设备"（radio equipment）在这里指的是[手机基带](https://en.wikipedia.org/wiki/Baseband_processor)，不是整个手机。这条规定的实际意思是基带固件得有签名验证以确保未经授权的固件不会被加载到基带里——这跟用户能不能刷系统半毛钱关系都没有，而且基带签名验证早就在用了，根本不需要靠BL锁来实现。

RED的真正目的是防止手机干扰应急通信频率和民航通信，不是帮你厂商锁消费者。

实际上欧盟也预料到了厂商会拿RED当幌子，所以在指令里专门写了Recital 19：

> Verification by radio equipment of the compliance of its combination with software should not be abused in order to prevent its use with software provided by independent parties. The availability to public authorities, manufacturers and users of information on the compliance of intended combinations of radio equipment and software should contribute to facilitate competition. In order to achieve those objectives, the power to adopt acts in accordance with Article 290 TFEU should be delegated to the Commission in respect of the specification of categories or classes of radio equipment for which manufacturers have to provide information on the compliance of intended combinations of radio equipment and software with the essential requirements set out in this Directive.

> _翻译_：不得滥用针对无线电设备与其软件组合符合性进行的验证，以防阻碍其与独立第三方提供的软件配合使用。向公共主管机关、制造商和用户提供关于无线电设备与软件预期组合符合性的信息，应有助于促进竞争。为实现上述目标，应根据《欧盟运行条约》（TFEU）第290条，授权欧盟委员会通过相关法案，具体规定哪些类别或种类的无线电设备要求制造商提供信息，以证明其无线电设备与软件的预期组合符合本指令规定的基本要求。

用人话讲就是：你不能用RED来阻止用户装别家的系统。

## 那中国有法律法规强制要求BL锁死吗？

**没有。** 网上确实有人拿[工信部2022年这个文件](https://www.gov.cn/zhengce/zhengceku/2022-12/15/content_5732079.htm)来说事，但这是过度解读。该文件说的是在供应链环节防止被植入后门，既没有也管不到消费者买到手机之后自己要解锁的行为。

如果真有这种规定，一加在中国卖的手机怎么可以解BL？

所以，厂商锁BL不是什么法律法规逼的。他们选择锁死，纯粹是为了自己的利益。
