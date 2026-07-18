---
layout: default
title: FAQ
lang: ja
---

## BLU（ブートローダーアンロック）できるとセキュリティは下がるの？

**そんなことはまったくありません。** 自分からfastbootでアンロックしたり、メーカーの公式ツールで解除したりしない限り（その際データは消えます）、スマホは出荷時のロック状態のまま。セキュリティは何も変わりません。

むしろ、アンロック可能な状態のほうがプライバシーには有利です——セキュリティ研究者がメーカーのファームウェアに何が仕込まれているか調査できるからです。

## EUのRED指令って、BLU禁止の根拠になるの？

「RED指令がスマホのロックダウンを義務付けている」という説がよく流れていますが、実際の条文（Article 3(3)(i)）はこうです：

> radio equipment supports certain features in order to ensure that software can only be loaded into the radio equipment where the compliance of the combination of the radio equipment and software has been demonstrated.

> _訳_：無線機器は、その無線機器とソフトウェアの組み合わせの適合性が実証された場合にのみ、ソフトウェアを読み込めるようにするための特定の機能をサポートしなければならない。

ここでいう「無線機器」（radio equipment）は[ベースバンドプロセッサ](https://en.wikipedia.org/wiki/Baseband_processor)のことであって、スマホ本体のことではありません。つまりこの条文は「ベースバンドのファームウェアは署名検証をパスしたものだけが読み込めるようにしろ」と言っているだけで、ユーザーがスマホのOSを書き換えることとは**まったく無関係**です。ベースバンドの署名検証はとっくに業界標準として実装されており、BLロックとは関係なく機能しています。

REDの本来の目的は、スマホが緊急通信や航空無線に干渉するのを防ぐこと。メーカーが消費者を囲い込むための道具ではありません。

EU側もメーカーがREDを盾にすることを見越して、Recital 19でこう釘を刺しています：

> Verification by radio equipment of the compliance of its combination with software should not be abused in order to prevent its use with software provided by independent parties. The availability to public authorities, manufacturers and users of information on the compliance of intended combinations of radio equipment and software should contribute to facilitate competition. In order to achieve those objectives, the power to adopt acts in accordance with Article 290 TFEU should be delegated to the Commission in respect of the specification of categories or classes of radio equipment for which manufacturers have to provide information on the compliance of intended combinations of radio equipment and software with the essential requirements set out in this Directive.

> _訳_：無線機器とソフトウェアの組み合わせに係る適合性の検証を、独立した第三者が提供するソフトウェアの使用を妨げる目的で濫用してはならない。公的機関、製造業者、およびユーザーに対して、無線機器とソフトウェアの想定される組み合わせの適合性に関する情報が提供されることは、競争の促進に資するものとする。これらの目標を達成するため、製造業者が本指令の基本要件に適合する無線機器とソフトウェアの想定される組み合わせの適合性に関する情報を提供しなければならない無線機器のカテゴリーまたはクラスの指定に関しては、TFEU第290条に基づき、委員会に規則採択の権限を委任するものとする。

平たく言えば：REDを盾にサードパーティのOSを排除するのは禁止、ということです。

## 中国の規制がBLロックを義務付けてるって本当？

**そんな規制は存在しません。** [工信部（中国の省庁）が2022年に出した文書](https://www.gov.cn/zhengce/zhengceku/2022-12/15/content_5732079.htm)を根拠に挙げる人もいますが、これは拡大解釈です。あの文書はサプライチェーンへのバックドア混入を防ぐためのもので、消費者が購入後に自分で端末をアンロックする行為を制限するものではありません。

もし本当にそんな規制があるなら、OnePlusが中国でアンロック可能な端末を今も売り続けられるはずがありません。

つまり、メーカーがBLをロックするのは法律のせいではありません。自分たちの都合でやってるだけです。
