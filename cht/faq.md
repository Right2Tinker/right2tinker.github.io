---
layout: default
title: FAQ
lang: cht
---

## 能解鎖BL的話，手機的安全性會降低嗎？

**完全不會。** 你不去主動解BL（進fastboot點一下解鎖、或者執行一下廠商的官方解鎖工具，過程中資料會被清空），手機就永遠處於出廠預設的鎖定狀態，該多安全就多安全。

甚至可以說，能解鎖反而對你的隱私有好處——只有能解BL，安全研究人員才有機會檢查廠商到底在韌體裡藏了什麼東西。

## 歐盟RED法案是不是強制要求手機鎖死BL？

很多人拿這個說事，但RED第3(3)(i)條的原文是：

> radio equipment supports certain features in order to ensure that software can only be loaded into the radio equipment where the compliance of the combination of the radio equipment and software has been demonstrated.

> _翻譯_：無線電設備應確保只有經過合規性驗證的軟體組合才能被載入。

注意，「無線電設備」（radio equipment）在這裡指的是[手機基帶](https://en.wikipedia.org/wiki/Baseband_processor)，不是整支手機。這條規定的實際意思是基帶韌體得有簽名驗證以確保未經授權的韌體不會被載入到基帶裡——這跟使用者能不能刷系統半毛錢關係都沒有，而且基帶簽名驗證早就在用了，根本不需要靠BL鎖來實現。

RED的真正目的是防止手機干擾應急通訊頻率和民航通訊，不是幫你廠商鎖消費者。

實際上歐盟也預料到了廠商會拿RED當幌子，所以在指令裡專門寫了Recital 19：

> Verification by radio equipment of the compliance of its combination with software should not be abused in order to prevent its use with software provided by independent parties. The availability to public authorities, manufacturers and users of information on the compliance of intended combinations of radio equipment and software should contribute to facilitate competition. In order to achieve those objectives, the power to adopt acts in accordance with Article 290 TFEU should be delegated to the Commission in respect of the specification of categories or classes of radio equipment for which manufacturers have to provide information on the compliance of intended combinations of radio equipment and software with the essential requirements set out in this Directive.

> _翻譯_：不得濫用對無線電設備與其軟體組合符合性進行的驗證，以防阻礙其與獨立第三方提供的軟體配合使用。向公共主管機關、製造商和使用者提供關於無線電設備與軟體預期組合符合性的資訊，應有助於促進競爭。為實現上述目標，應根據《歐盟運行條約》（TFEU）第290條，授權歐盟委員會通過相關法案，具體規定哪些類別或種類的無線電設備要求製造商提供資訊，以證明其無線電設備與軟體的預期組合符合本指令規定的基本要求。

用人話講就是：你不能用RED來阻止使用者裝別家的系統。

## 那中國有法律法規強制要求BL鎖死嗎？

**沒有。** 網上確實有人拿[工信部2022年這個文件](https://www.gov.cn/zhengce/zhengceku/2022-12/15/content_5732079.htm)來說事，但這是過度解讀。該文件說的是在供應鏈環節防止被植入後門，既沒有也管不到消費者買到手機之後自己要解鎖的行為。

如果真有這種規定，一加在中國賣的手機怎麼可以解BL？

所以，廠商鎖BL不是什麼法律法規逼的。他們選擇鎖死，純粹是為了自己的利益。
