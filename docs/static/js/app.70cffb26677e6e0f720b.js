webpackJsonp([0],{"41jH":function(e,t){},"4T83":function(e,t){},"7xIN":function(e,t){},BuOL:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("7+uW"),n={name:"CharacterItem",props:{character:{type:Object}},data:function(){return{char:this.character,thumbUrl:"./static/img/ultraman/thumb/"}},methods:{}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:this.thumbUrl+this.char.id+".png",expression:" thumbUrl + char.id + '.png'",arg:"background-image"}],staticClass:"item-box"},[t("div",{staticClass:"item-title"},[this._v("\n    "+this._s(this.char.name.zh)+"\n  ")])])},staticRenderFns:[]};var l={name:"Index",components:{CharacterItem:i("VU/8")(n,r,!1,function(e){i("ss61")},"data-v-3f3568c3",null).exports},data:function(){return{ultraman:[{id:0,type:"base",name:{zh:"奥特曼",jp:"ウルトラマン",en:"Ultraman"},first:1966,height:40,weight:35e3,maxSpeed:5,birthPlace:"M78星云·光之国"},{id:1,type:"base",name:{zh:"佐菲",jp:"ゾフィー",en:"Zoffy"},first:1967,height:45,weight:45e3,maxSpeed:10,birthPlace:"M78星云·光之国"},{id:2,type:"base",name:{zh:"赛文奥特曼",jp:"ウルトラセブン",en:"UltraSeven"},first:1967,height:40,weight:35e3,maxSpeed:7,birthPlace:"M78星云·光之国"},{id:3,type:"base",name:{zh:"杰克奥特曼",jp:"ウルトラマンジャック",en:"Ultraman Jack"},first:1971,height:40,weight:35e3,maxSpeed:5,birthPlace:"M78星云·光之国"},{id:4,type:"base",name:{zh:"艾斯奥特曼",jp:"ウルトラマンエース",en:"Ultraman Ace"},first:1972,height:40,weight:45e3,maxSpeed:20,birthPlace:"M78星云·光之国"},{id:5,type:"base",name:{zh:"奥特之父",jp:"ウルトラの父",en:"Father of Ultra"},first:1972,height:45,weight:5e4,maxSpeed:15,birthPlace:"M78星云·光之国"},{id:6,type:"base",name:{zh:"泰罗奥特曼",jp:"ウルトラマンタロウ",en:"Ultraman Taro"},first:1973,height:53,weight:55e3,maxSpeed:20,birthPlace:"M78星云·光之国"},{id:7,type:"base",name:{zh:"奥特之母",jp:"ウルトラの母",en:"Mother of Ultra"},first:1973,height:40,weight:32e3,maxSpeed:10,birthPlace:"M78星云·光之国"},{id:8,type:"base",name:{zh:"雷欧奥特曼",jp:"ウルトラマンレオ",en:"Ultraman Leo"},first:1974,height:52,weight:48e3,maxSpeed:7,birthPlace:"狮子座·L77星球"},{id:9,type:"base",name:{zh:"阿斯特拉",jp:"アストラ",en:"Astra"},first:1974,height:50,weight:49e3,maxSpeed:20,birthPlace:"狮子座·L77星球"},{id:10,type:"base",name:{zh:"奥特之王",jp:"ウルトラマンキング",en:"Ultraman King"},first:1974,height:58,weight:56e3,maxSpeed:20,birthPlace:"不明"},{id:11,type:"base",name:{zh:"乔尼亚斯奥特曼",jp:"ウルトラマンジョーニアス",en:"Ultraman Joneus"},first:1979,height:70,weight:5e4,maxSpeed:8,birthPlace:"U40"},{id:12,type:"base",name:{zh:"爱迪奥特曼",jp:"ウルトラマン80",en:"Ultraman 80"},first:1980,height:50,weight:44e3,maxSpeed:9,birthPlace:"M78星云·光之国"},{id:13,type:"base",name:{zh:"尤莉安奥特曼",jp:"ユリアン",en:"Yullian"},first:1981,height:47,weight:36e3,maxSpeed:7.7,birthPlace:"M78星云·光之国"},{id:14,type:"base",name:{zh:"史考特奥特曼",jp:"ウルトラマンスコット",en:"Ultraman Scott"},first:1989,height:82,weight:64e3,maxSpeed:24,birthPlace:"M78星云·阿尔塔拉行星"},{id:15,type:"base",name:{zh:"察克奥特曼",jp:"ウルトラマンチャック",en:"Ultraman Chuck"},first:1989,height:79,weight:68e3,maxSpeed:24,birthPlace:"M78星云·阿尔塔拉行星"},{id:16,type:"base",name:{zh:"贝斯奥特曼",jp:"ウルトラウーマンベス",en:"Ultrawoman Beth"},first:1989,height:76,weight:54e3,maxSpeed:24,birthPlace:"M78星云·阿尔塔拉行星"},{id:17,type:"base",name:{zh:"葛雷奥特曼",jp:"ウルトラマンG（グレート）",en:"Ultraman Great"},first:1990,height:60,weight:58e3,maxSpeed:26,birthPlace:"M78星云·光之国"},{id:18,type:"base",name:{zh:"帕瓦特奥特曼",jp:"ウルトラマンパワード",en:"Ultraman Powered"},first:1993,height:55,weight:58e3,maxSpeed:27,birthPlace:"M78星云·光之国"},{id:19,type:"base",name:{zh:"哉阿斯奥特曼",jp:"ウルトラマンゼアス",en:"Ultraman Zearth"},first:1996,height:60,weight:54540,maxSpeed:19.9,birthPlace:"Z95星云"},{id:20,type:"base",name:{zh:"迪迦奥特曼 复合型",jp:"ウルトラマンティガ",en:"Ultraman Tiga"},first:1996,height:53,weight:44e3,maxSpeed:5,birthPlace:"不明"},{id:21,type:"form",formId:20,name:{zh:"迪迦奥特曼 强力型",jp:"ウルトラマンティガ",en:"Ultraman Tiga"},first:1996},{id:22,type:"form",formId:20,name:{zh:"迪迦奥特曼 空中型",jp:"ウルトラマンティガ",en:"Ultraman Tiga"},first:1996},{id:23,type:"form",formId:20,name:{zh:"闪耀迪迦",jp:"ウルトラマンティガ",en:"Glitter Tiga"},first:1996},{id:24,type:"form",formId:20,name:{zh:"黑暗迪迦",jp:"ウルトラマンティガ",en:"Tiga Dark"},first:2e3},{id:25,type:"form",formId:20,name:{zh:"迪迦奥特曼 龙卷型",jp:"ウルトラマンティガ",en:"Tiga Tornado"},first:2e3},{id:26,type:"form",formId:20,name:{zh:"迪迦奥特曼 爆裂型",jp:"ウルトラマンティガ",en:"Tiga Blast"},first:2e3},{id:27,type:"base",name:{zh:"戴拿奥特曼 闪亮型",jp:"ウルトラマンダイナ",en:"Ultraman Dyna Flash Type"},first:1997,height:55,weight:45e3,maxSpeed:8,birthPlace:"不明"},{id:28,type:"form",formId:27,name:{zh:"戴拿奥特曼 强壮型",jp:"ウルトラマンダイナ",en:"Ultraman Dyna Strong Type"},first:1997},{id:29,type:"form",formId:27,name:{zh:"戴拿奥特曼 奇迹型",jp:"ウルトラマンダイナ",en:"Ultraman Dyna Miracle Type"},first:1997},{id:30,type:"base",name:{zh:"盖亚奥特曼 V2",jp:"ウルトラマンガイア",en:"Ultraman Gaia Version 2"},first:1998,height:50,weight:42e3,maxSpeed:20,birthPlace:"地球"},{id:31,type:"form",formId:30,name:{zh:"盖亚奥特曼",jp:"ウルトラマンガイア",en:"Ultraman Gaia"},first:1998},{id:32,type:"form",formId:30,name:{zh:"盖亚奥特曼 至高型",jp:"ウルトラマンガイア",en:"Ultraman Gaia Supreme Version"},first:1998},{id:33,type:"base",name:{zh:"阿古茹奥特曼 V2",jp:"ウルトラマンアグル",en:"Ultraman Agul Version 2"},first:1998,height:52,weight:46e3,maxSpeed:23,birthPlace:"地球"},{id:34,type:"form",formId:33,name:{zh:"阿古茹奥特曼",jp:"ウルトラマンアグル",en:"Ultraman Agul"},first:1998},{id:35,type:"base",name:{zh:"纳伊斯奥特曼",jp:"ウルトラマンナイス",en:"ULTRAMAN NICE"},first:1999,height:39,weight:39e3,maxSpeed:3.9,birthPlace:"M78星云·TOY1号星球"},{id:36,type:"base",name:{zh:"奈欧斯奥特曼",jp:"ウルトラマンネオス",en:"ULTRAMAN NEOS"},first:1995,height:58,weight:59e3,maxSpeed:30,birthPlace:"M78星云·光之国"},{id:37,type:"base",name:{zh:"赛文21奥特曼",jp:"ウルトラセブン·21",en:"ULTRASEVEN21"},first:1995,height:56,weight:57e3,maxSpeed:26,birthPlace:"M78星云·光之国"},{id:38,type:"base",name:{zh:"高斯奥特曼 月神模式",jp:"ウルトラマンコスモス",en:"Ultraman Cosmos"},first:2001,height:47,weight:42e3,maxSpeed:7,birthPlace:"不明"},{id:39,type:"form",formId:38,name:{zh:"高斯奥特曼 日冕模式",jp:"ウルトラマンコスモス",en:"Ultraman Cosmos"},first:2001},{id:40,type:"form",formId:38,name:{zh:"高斯奥特曼 日蚀模式",jp:"ウルトラマンコスモス",en:"Ultraman Cosmos"},first:2001},{id:41,type:"form",formId:38,name:{zh:"高斯奥特曼 宇宙日冕模式",jp:"ウルトラマンコスモス",en:"Ultraman Cosmos"},first:2001},{id:42,type:"form",formId:38,name:{zh:"高斯奥特曼 未来模式",jp:"ウルトラマンコスモス",en:"Ultraman Cosmos"},first:2001},{id:43,type:"base",name:{zh:"杰斯提斯奥特曼 标准模式",jp:"ウルトラマンジャスティス",en:"UItraman Justice"},first:2002,height:46,weight:41e3,maxSpeed:13,birthPlace:"不明"},{id:44,type:"form",formId:43,name:{zh:"杰斯提斯奥特曼 粉碎模式",jp:"ウルトラマンジャスティス",en:"UItraman Justice"},first:2002},{id:45,type:"base",name:{zh:"博伊奥特曼",jp:"ウルトラマンボーイ",en:"ULTRAMAN BOY"},first:2003},{id:46,type:"base",name:{zh:"奈克赛斯奥特曼",jp:"ウルトラマンネクサス",en:"Ultraman Nexus"},first:2004,height:49,weight:4e4,maxSpeed:3,birthPlace:"不明"},{id:47,type:"form",formId:46,name:{zh:"奈克斯特奥特曼（幼年体）",jp:"ウルトラマン・ザ・ネクスト",en:"Ultraman The Next"},first:2004},{id:48,type:"form",formId:46,name:{zh:"奈克斯特奥特曼（青年体）",jp:"ウルトラマン・ザ・ネクスト",en:"Ultraman The Next"},first:2004},{id:49,type:"form",formId:46,name:{zh:"奈克赛斯奥特曼 青年形态",jp:"ウルトラマン・ザ・ネクスト",en:"Ultraman Nexus Junis"},first:2004},{id:50,type:"form",formId:46,name:{zh:"奈克赛斯奥特曼 蓝色青年形态",jp:"ウルトラマン・ザ・ネクスト",en:"Ultraman Nexus Junis Blue"},first:2004},{id:51,type:"form",formId:46,name:{zh:"诺亚奥特曼",jp:"ウルトラマンノア",en:"Ultraman Noa"},first:2005},{id:52,type:"base",name:{zh:"麦克斯奥特曼",jp:"ウルトラマンマックス",en:"Ultraman Max"},first:2005,height:48,weight:37e3,maxSpeed:9.99,birthPlace:"M78星云·光之国"},{id:53,type:"base",name:{zh:"杰诺奥特曼",jp:"ウルトラマンゼノン",en:"Ultraman Xenon"},first:2005,height:47,weight:36e3,maxSpeed:7.7,birthPlace:"M78星云·光之国"},{id:54,type:"base",name:{zh:"梦比优斯奥特曼",jp:"ウルトラマンメビウス",en:"Ultraman Mebius"},first:2006,height:49,weight:35e3,maxSpeed:10,birthPlace:"M78星云·光之国"},{id:55,type:"form",formId:54,name:{zh:"梦比优斯勇者",jp:"メビウスブレイブ",en:"Mebius Brave"},first:2006},{id:56,type:"form",formId:54,name:{zh:"梦比优斯燃烧勇者",jp:"メビウスバーニングブレイブ",en:"Mebius Burning Brave"},first:2006},{id:57,type:"form",formId:54,name:{zh:"梦比优斯凤凰勇者",jp:"メビウスフェニックスブレイブ",en:"Mebius Phoenix Brave"},first:2006},{id:58,type:"base",name:{zh:"希卡利奥特曼",jp:"ウルトラマンヒカリ",en:"UItraman Hikari"},first:2006,height:50,weight:35e3,maxSpeed:10,birthPlace:"M78星云·光之国"},{id:59,type:"base",name:{zh:"赛文奥特曼X",jp:"ウルトラセブン X",en:"Ultra Seven X"},first:2007},{id:60,type:"base",name:{zh:"贝利亚奥特曼",jp:"ウルトラマンベリアル",en:"Ultraman Belial"},first:2009,height:55,weight:6e4,maxSpeed:null,birthPlace:"M78星云·光之国"},{id:61,type:"form",formId:60,name:{zh:"贝利亚奥特曼 早期形态",jp:"ウルトラマンベリアル アーリースタイル",en:"Ultraman Belial Early Style"},first:2009},{id:62,type:"base",name:{zh:"赛罗奥特曼",jp:"ウルトラマンゼロ",en:"Ultraman Zero"},first:2009,height:49,weight:35e3,maxSpeed:7,birthPlace:"M78星云·光之国"},{id:63,type:"form",formId:62,name:{zh:"究极赛罗",jp:"ウルティメイトゼロ",en:"Ultimate Zero"},first:2009},{id:64,type:"form",formId:62,name:{zh:"赛罗奥特曼 闪耀形态",jp:"シャイニングウルトラマンゼロ",en:"Shining Ultraman Zero"},first:2009},{id:65,type:"base",name:{zh:"银河奥特曼",jp:"ウルトラマンギンガ",en:"Ultraman Ginga"},first:2013,height:"无限",weight:"无限",maxSpeed:null,birthPlace:"未来"},{id:66,type:"base",name:{zh:"维克特利奥特曼",jp:"ウルトラマンビクトリー",en:"Ultraman Victory"},first:2014,height:"无限",weight:"无限",maxSpeed:null,birthPlace:null},{id:67,type:"base",name:{zh:"艾克斯奥特曼",jp:"ウルトラマンX",en:"Ultraman X"},first:2015,height:45,weight:35e3,maxSpeed:null,birthPlace:null},{id:68,type:"base",name:{zh:"欧布奥特曼 原生形态",jp:"オーブオリジン",en:"Ultraman Orb Origin"},first:2016,height:50,weight:5e4,maxSpeed:null,birthPlace:"行星O-50"},{id:69,type:"form",formId:68,name:{zh:"欧布奥特曼 初始形态",jp:"オリジン・ザ・ファースト",en:"Origin The First"},first:2016},{id:70,type:"base",name:{zh:"利布特奥特曼",jp:"ウルトラマンリブット",en:"Ultraman Ribut"},first:2014,height:40,weight:4e4,maxSpeed:9,birthPlace:"M78星云·光之国"},{id:71,type:"base",name:{zh:"捷德奥特曼 原初形态",jp:"ウルトラマンジード",en:"Original Form"},first:2017,height:51,weight:null,maxSpeed:9,birthPlace:null},{id:72,type:"base",name:{zh:"罗索奥特曼",jp:"ウルトラマンロッソ",en:"Ultraman Rosso"},first:2018,height:52,weight:45e3,maxSpeed:null,birthPlace:null},{id:73,type:"base",name:{zh:"布鲁奥特曼",jp:"ウルトラマンブル",en:"Ultraman Blu"},first:2018,height:51,weight:43e3,maxSpeed:null,birthPlace:null},{id:74,type:"base",name:{zh:"格丽乔奥特曼",jp:"ウルトラウーマングリージョ",en:"Ultrawoman Grigio"},first:2019,height:43,weight:3e4,maxSpeed:null,birthPlace:null},{id:75,type:"base",name:{zh:"托雷基亚奥特曼",jp:"ウルトラマントレギア",en:"Ultraman Tregear"},first:2019,height:50,weight:37e3,maxSpeed:9.9,birthPlace:"M78星云·光之国"},{id:76,type:"form",formId:75,name:{zh:"托雷基亚奥特曼 早期形态",jp:"ウルトラマントレギア アーリースタイル",en:"Ultraman Tregear Early Style"},first:2019},{id:77,type:"base",name:{zh:"泰迦奥特曼",jp:"ウルトラマンタイガ",en:"Ultraman Taiga"},first:2019,height:50,weight:55e3,maxSpeed:15,birthPlace:"M78星云·光之国"},{id:78,type:"form",formId:77,name:{zh:"泰迦奥特曼光子地球形态",jp:"フォトンアース",en:"Ultraman Taiga Photon-Earth"},first:2019},{id:79,type:"base",name:{zh:"泰塔斯奥特曼",jp:"ウルトラマンタイタス",en:"Ultraman Titas"},first:2019,height:55,weight:5e4,maxSpeed:7,birthPlace:"U-40"},{id:80,type:"base",name:{zh:"风马奥特曼",jp:"ウルトラマンフーマ",en:"Ultraman Fuma"},first:2019,height:48,weight:25e3,maxSpeed:15,birthPlace:"O-50行星·战士之巅"},{id:81,type:"base",name:{zh:"泽塔奥特曼",jp:"ウルトラマンゼット",en:"Ultraman Z"},first:2020,height:52,weight:33e3,maxSpeed:null,birthPlace:null},{id:82,type:"base",name:{zh:"特利迦奥特曼复合型",jp:"ウルトラマントリガー",en:"Ultraman Trigger"},first:2021,height:53,weight:44e3,maxSpeed:5,birthPlace:"不明"},{id:83,type:"form",formId:82,name:{zh:"特利迦奥特曼强力型",jp:"ウルトラマントリガー",en:"Ultraman Trigger"},first:2021},{id:84,type:"form",formId:82,name:{zh:"特利迦奥特曼空中型",jp:"ウルトラマントリガー",en:"Ultraman Trigger"},first:2021},{id:85,type:"fusion",fusionArr:[54,1,0,2,3,4,6],name:{zh:"梦比优斯无限形态",jp:"メビウスインフィニティー",en:"Mebius Infinity"},first:2006},{id:86,type:"fusion",fusionArr:[62,27,39],name:{zh:"赛罗奥特曼 强壮日冕型",jp:"ストロングコロナゼロ",en:"Strong Corona Zero"},first:2012},{id:87,type:"fusion",fusionArr:[62,27,38],name:{zh:"赛罗奥特曼 月神奇迹型",jp:"ルナミラクルゼロ",en:"Luna-Miracle Zero"},first:2012},{id:88,type:"fusion",fusionArr:[62,65,68,66,67],name:{zh:"赛罗奥特曼 无限形态",jp:"ゼロ ビヨンド",en:"Zero Beyond"},first:2017},{id:89,type:"fusion",fusionArr:[62,63,64],name:{zh:"究极赛罗 闪耀形态",jp:"ウルティメイトシャイニングゼロ",en:"Ultimate Shining Zero"},first:2017},{id:90,type:"fusion",fusionArr:[65,6],name:{zh:"银河斯特利姆奥特曼",jp:"ウルトラマンギンガストリウム",en:"Ultraman Ginga Strium"},first:2014},{id:91,type:"form",formId:66,name:{zh:"维克特利奥特曼 骑士形态",jp:"ウルトラマンビクトリーナイト",en:"Ultraman Victory Knight"},first:2014},{id:92,type:"fusion",fusionArr:[65,66],name:{zh:"银河维克特利奥特曼",jp:"ウルトラマンギンガビクトリー",en:"Ultraman Ginga Victory"},first:2015,height:"无限",weight:"无限",maxSpeed:null,birthPlace:null},{id:93,type:"form",formId:67,name:{zh:"超越艾克斯",jp:"エクシードX",en:"Exceed X"},first:2015},{id:94,type:"fusion",fusionArr:[67,0,20],name:{zh:"艾克斯奥特曼 贝塔火花装甲",jp:"ベータスパークアーマー",en:"Beta Spark Armor"},first:2015},{id:95,type:"fusion",fusionArr:[67,63],name:{zh:"艾克斯奥特曼 究极赛罗装甲",jp:"ウルトラマンX",en:"Ultraman X"},first:2015},{id:96,type:"fusion",fusionArr:[68,0,20],name:{zh:"欧布奥特曼 重光形态",jp:"スペシウムゼペリオン",en:"Spacium Zeperion"},first:2016},{id:97,type:"fusion",fusionArr:[68,6,54],name:{zh:"欧布奥特曼 暴炎形态",jp:"バーンマイト",en:"Burnmite"},first:2016},{id:98,type:"fusion",fusionArr:[68,3,62],name:{zh:"欧布奥特曼 疾风形态",jp:"ハリケーンスラッシュ",en:"Hurricane Slash"},first:2016},{id:99,type:"fusion",fusionArr:[68,1,60],name:{zh:"欧布奥特曼 暗耀形态",jp:"サンダーブレスター",en:"Thunder Breastar"},first:2016},{id:100,type:"fusion",fusionArr:[68,65,67],name:{zh:"欧布奥特曼 煌闪形态",jp:"ライトニングアタッカー",en:"Lighting Attacker"},first:2016},{id:101,type:"fusion",fusionArr:[68,2,62],name:{zh:"欧布奥特曼 智勇形态",jp:"エメリウムスラッガー",en:"Emerium Slugger"},first:2016},{id:102,type:"fusion",fusionArr:[68,65,66,67],name:{zh:"欧布奥特曼 三重形态",jp:"オーブトリニティ",en:"Orb Trinity"},first:2016},{id:103,type:"fusion",fusionArr:[71,0,60],name:{zh:"捷德奥特曼 原始形态",jp:"ウルトラマンジード",en:"Ultraman Geed Primitive"},first:2017},{id:104,type:"fusion",fusionArr:[71,2,8],name:{zh:"捷德奥特曼 刚燃形态",jp:"ソリッドバーニング",en:"Solid Burning"},first:2017},{id:105,type:"fusion",fusionArr:[71,58,38],name:{zh:"捷德奥特曼 机敏形态",jp:"アクロスマッシャー",en:"Acro Smasher"},first:2017},{id:106,type:"fusion",fusionArr:[71,62,5],name:{zh:"捷德奥特曼 豪勇形态",jp:"マグニフィセント",en:"Magnificent"},first:2017},{id:107,type:"fusion",fusionArr:[71,60,10],name:{zh:"捷德奥特曼 尊皇形态",jp:"ロイヤルメガマスター",en:"Royal Mega-Master"},first:2017},{id:108,type:"form",formId:71,name:{zh:"捷德奥特曼 终极形态",jp:"ウルティメイトファイナル",en:"Ultimate Final"},first:2017},{id:109,type:"fusion",fusionArr:[71,65,67,70],name:{zh:"捷德奥特曼 银河初升",jp:"ギャラクシーライジング",en:"Galaxy Rising"},first:2020},{id:110,type:"fusion",fusionArr:[72,65],name:{zh:"罗索奥特曼 跃水形态",jp:"アクア",en:"Aqua"},first:2018},{id:111,type:"fusion",fusionArr:[72,20],name:{zh:"罗索奥特曼 旋风形态",jp:"ウィンド",en:"Wind"},first:2018},{id:112,type:"fusion",fusionArr:[72,66],name:{zh:"罗索奥特曼 大地形态",jp:"グランド",en:"Ground"},first:2018},{id:113,type:"fusion",fusionArr:[73,6],name:{zh:"布鲁奥特曼 烈火形态",jp:"フレイム",en:"Flame"},first:2018},{id:114,type:"fusion",fusionArr:[73,20],name:{zh:"布鲁奥特曼 旋风形态",jp:"ウィンド",en:"Wind"},first:2018},{id:115,type:"fusion",fusionArr:[73,66],name:{zh:"布鲁奥特曼 大地形态",jp:"グランド",en:"Ground"},first:2018},{id:116,type:"fusion",fusionArr:[72,73],name:{zh:"罗布奥特曼",jp:"ウルトラマンルーブ",en:"Ultraman Ruebu"},first:2018},{id:117,type:"fusion",fusionArr:[72,73,74],name:{zh:"格罗布奥特曼",jp:"ウルトラマングルーブ",en:"Ultraman Gruebe"},first:2019},{id:118,type:"fusion",fusionArr:[77,79,80],name:{zh:"泰迦奥特曼 三重斯特利姆形态",jp:"トライストリウム",en:"Tri-Strium"},first:2019},{id:119,type:"fusion",fusionArr:[81,62,2,8],name:{zh:"泽塔奥特曼 阿尔法装甲",jp:"アルファエッジ",en:"Alpha Edge"},first:2020},{id:120,type:"fusion",fusionArr:[81,0,4,6],name:{zh:"泽塔奥特曼 贝塔冲击",jp:"ベータスマッシュ",en:"Beta Smash"},first:2020},{id:121,type:"fusion",fusionArr:[81,20,27,30],name:{zh:"泽塔奥特曼 伽马未来",jp:"ガンマフューチャー",en:"Gamma Future"},first:2020},{id:122,type:"fusion",fusionArr:[81,71,88,123],name:{zh:"泽塔奥特曼 德尔塔天爪",jp:"デルタライズクロー",en:"Delta Rise Claw"},first:2020},{id:123,type:"form",formId:60,name:{zh:"极恶 贝利亚",jp:"ンベリアルアトロシアス",en:"Belial Atrocious"},first:2017},{id:124,type:"fusion",fusionArr:[65,66,67,68,71,72,73,74,77,79,80],name:{zh:"令迦奥特曼",jp:"ウルトラマンレイガ",en:"Ultraman Reiga"},first:2020},{id:125},{id:126,type:"fusion",fusionArr:[62,27,38],name:{zh:"赛迦奥特曼",jp:"ウルトラマンサーガ",en:"Ultraman Saga"},first:2012,height:58,weight:45e3,maxSpeed:"无法测量",birthPlace:"无"},{id:127,type:"fusion",fusionArr:[38,43],name:{zh:"雷杰多奥特曼",jp:"ウルトラマンレジェンド",en:"Ultraman Legend"},first:2003,height:50,weight:5e4,maxSpeed:35,birthPlace:"无"}],ultramedal:[],hyperkeys:[],sofubi:[],baseList:null,nowId:null,nowUltra:{info:null,form:null,fusion:null},isOpen:!1}},created:function(){this.baseList=this.getUltraByType(null,"base")},methods:{getUltraInfo:function(e){return this.ultraman[e]},getUltraType:function(e){var t="";switch(this.getUltraInfo(e).type){case"base":default:t="基础";break;case"form":t="形态";break;case"fusion":t="融合"}return t},getUltraByType:function(e,t){var i=this,a=[];switch(t){case"base":this.ultraman.forEach(function(e,t,i){"base"==e.type&&a.push(e)});break;case"form":this.ultraman.forEach(function(t,n,r){"form"==t.type&&t.formId==e&&a.push(i.getUltraInfo(t.id))});break;case"fusion":this.ultraman.forEach(function(t,n,r){"fusion"==t.type&&-1!=t.fusionArr.indexOf(e)&&a.push(i.getUltraInfo(t.id))});break;default:a=this.ultraman}return a},getInfoById:function(e){this.nowUltra.info=this.getUltraInfo(e),this.nowUltra.form=this.getUltraByType(e,"form"),this.nowUltra.fusion=this.getUltraByType(e,"fusion"),"base"==this.nowUltra.info.type&&(this.nowId=e),this.isOpen=!0,document.documentElement.classList.add("isOpen")},closeDetail:function(){this.isOpen=!1,document.documentElement.classList.remove("isOpen")}}},s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.isOpen?"isOpen":""},[i("div",{staticClass:"item-list"},e._l(e.baseList,function(t){return i("characterItem",{key:t.id,attrs:{character:t},nativeOn:{click:function(i){return e.getInfoById(t.id)}}})}),1),e._v(" "),null!=e.nowUltra.info?i("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],staticClass:"detail-box",on:{click:function(t){return t.target!==t.currentTarget?null:e.closeDetail.apply(null,arguments)}}},[i("div",{staticClass:"close-btn",on:{click:e.closeDetail}},[i("i",{staticClass:"iconfont icon-fanhuicopy"})]),e._v(" "),i("div",{staticClass:"detail-warp"},[i("div",{staticClass:"detail-info"},[i("div",{staticClass:"detail-left"},[i("img",{attrs:{src:"./static/img/ultraman/full/"+e.nowUltra.info.id+".png"}})]),e._v(" "),i("div",{staticClass:"detail-right"},[i("div",{staticClass:"detail-title"},[e._v(e._s(e.nowUltra.info.name.zh))]),e._v(" "),i("div",{staticClass:"detail-table"},[i("div",{staticClass:"detail-tr"},[i("div",{staticClass:"detail-td"},[e._v("身高")]),e._v(" "),i("div",{staticClass:"detail-td"},[e._v(e._s(e.nowUltra.info.height))])]),e._v(" "),i("div",{staticClass:"detail-tr"},[i("div",{staticClass:"detail-td"},[e._v("体重")]),e._v(" "),i("div",{staticClass:"detail-td"},[e._v(e._s(e.nowUltra.info.weight))])]),e._v(" "),i("div",{staticClass:"detail-tr"},[i("div",{staticClass:"detail-td"},[e._v("最大飞行速度")]),e._v(" "),i("div",{staticClass:"detail-td"},[e._v(e._s(e.nowUltra.info.maxSpeed))])]),e._v(" "),i("div",{staticClass:"detail-tr"},[i("div",{staticClass:"detail-td"},[e._v("出生地")]),e._v(" "),i("div",{staticClass:"detail-td"},[e._v(e._s(e.nowUltra.info.birthPlace))])]),e._v(" "),i("div",{staticClass:"detail-tr"},[i("div",{staticClass:"detail-td"},[e._v("登场年份")]),e._v(" "),i("div",{staticClass:"detail-td"},[e._v(e._s(e.nowUltra.info.first))])])])])]),e._v(" "),0!=e.nowUltra.form.length?i("div",{staticClass:"box-list"},[i("p",{staticClass:"box-title"},[e._v("型态")]),e._v(" "),e._l(e.nowUltra.form,function(t){return i("characterItem",{key:t.id,attrs:{character:t},nativeOn:{click:function(i){return e.getInfoById(t.id)}}})})],2):e._e(),e._v(" "),0!=e.nowUltra.fusion.length?i("div",{staticClass:"box-list"},[i("p",{staticClass:"box-title"},[e._v("融合")]),e._v(" "),e._l(e.nowUltra.fusion,function(t){return i("characterItem",{key:t.id,attrs:{character:t},nativeOn:{click:function(i){return e.getInfoById(t.id)}}})})],2):e._e()])]):e._e()])},staticRenderFns:[]};var m=i("VU/8")(l,s,!1,function(e){i("lHEU")},"data-v-2a299412",null).exports,p={name:"App",components:{Index:m},data:function(){return{menu:[{name:"奥特曼",url:"/"},{name:"特利迦·胜利超越之钥",url:"/HyperKey"},{name:"泽塔·奥特勋章",url:"/UltraMedal"}]}},methods:{initCNZZ:function(){var e=document.createElement("script");e.src="https://v1.cnzz.com/z_stat.php?id=1280107716&web_id=1280107716",e.language="JavaScript",e.id="cnzz",document.body.appendChild(e)},cnzzEvent:function(e,t,i,a,n){window._czc&&czc.push(["_trackEvent",e,t,i,a,n])}},mounted:function(){this.initCNZZ()},watch:{$route:function(){if(window._czc){var e=window.location,t=e.pathname+e.hash;window._czc.push(["_trackPageview",t,"/"])}}}},d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"menu-box"},e._l(e.menu,function(t,a){return i("router-link",{key:a,staticClass:"menu-item",attrs:{to:t.url}},[e._v(e._s(t.name))])}),1),e._v(" "),i("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")(p,d,!1,function(e){i("wU0J")},null,null).exports,h=(i("7xIN"),i("BuOL"),i("/ocq")),c={name:"PropItem",props:{item:{type:Object},urlType:{type:Number},showPic:{type:Boolean,default:!0},defaultColor:{type:String,default:"#c3370b"},barColor:{type:String,default:null}},data:function(){return{propitem:this.item,showpic:this.showPic,thumbUrl:["./static/img/item/trigger/hyperkey/","/static/img/item/z/ultramedal/"]}},methods:{},computed:{url:function(){return this.thumbUrl[this.urlType]},color:function(){return null!=this.barColor?this.barColor:this.defaultColor}}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:this.showpic?this.url+this.propitem.id+".jpg":"",expression:"showpic ? url + propitem.id + '.jpg':''",arg:"background-image"}],staticClass:"prop-item"},[t("div",{staticClass:"item-title",style:"background-color:"+this.color},[this._v("\n    "+this._s(this.propitem.name)+"\n  ")])])},staticRenderFns:[]};var f=i("VU/8")(c,u,!1,function(e){i("o1v3")},"data-v-ee19eb7c",null).exports,g={name:"TagBar",props:{tags:{type:Array}},data:function(){return{tagsData:this.tags,nowTag:"ALL"}},methods:{getDataByTag:function(e){this.nowTag=e,this.$emit("parentEvent",e)}}},y={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tags-bar"},e._l(e.tagsData,function(t){return i("div",{key:t.name,staticClass:"tag-item",class:e.nowTag==t.name?"active":"",on:{click:function(i){return e.getDataByTag(t.name)}}},[e._v("\n    "+e._s(t.title)+"\n  ")])}),0)},staticRenderFns:[]};var U=i("VU/8")(g,y,!1,function(e){i("41jH")},"data-v-af47e32e",null).exports,M={name:"FloatLayer",props:{item:{type:Object,default:{}},show:{type:Boolean},urlType:{type:Number},showPic:{type:Boolean,default:!0}},data:function(){return{showpic:this.showPic,thumbUrl:["./static/img/item/trigger/hyperkey/","/static/img/item/z/ultramedal/"]}},methods:{closeThis:function(){this.$emit("parentEvent",!1)}},computed:{url:function(){return this.thumbUrl[this.urlType]}}},k={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.show?i("div",{staticClass:"float-layer"},[i("div",{staticClass:"close-layer",on:{click:e.closeThis}},[i("i",{staticClass:"iconfont icon-fanhuicopy"})]),e._v(" "),i("div",{staticClass:"full-pic"},[i("img",{attrs:{src:e.showpic?e.url+e.item.id+".jpg":""}})]),e._v(" "),i("div",{staticClass:"detail-info"},[i("p",{staticClass:"b-title"},[e._v(e._s(e.item.name))]),e._v(" "),i("p",{staticClass:"tag-box"},e._l(e.item.tag,function(t){return i("span",{key:t,staticClass:"tag-item"},[e._v(e._s(t))])}),0)])]):e._e()},staticRenderFns:[]};var b=i("VU/8")(M,k,!1,function(e){i("4T83")},"data-v-318c2143",null).exports,P={name:"HyperKey",components:{PropItem:f,TagBar:U,FloatLayer:b},data:function(){return{tags:[{name:"ALL",title:"全部"},{name:"XD",title:"限定"},{name:"DX",title:"DX"},{name:"SG01",title:"SG01"},{name:"SG02",title:"SG02"},{name:"GP01",title:"GP01"}],nowList:null,nowDetail:null,layerShow:!1,hyperKey:[{id:"EX-1",type:"U",tag:["XD"],name:"奥特曼55周年",link:[0],color:"#F44336"},{id:"EX-2",type:"U",tag:["XD"],name:"特利迦与泽塔",link:[82,81],color:"#e29623"},{id:"U-01",type:"U",tag:["DX"],name:"特利迦奥特曼 复合型",link:[82],color:"#ad3ec3"},{id:"U-02",type:"U",tag:["DX"],name:"特利迦奥特曼 强力型",link:[83],color:"#f13342"},{id:"U-03",type:"U",tag:["DX"],name:"特利迦奥特曼 空中型",link:[84],color:"#406cec"},{id:"U-04",type:"U",tag:["DX"],name:"泽塔奥特曼 原始形态",link:[81],color:"#35b9e7"},{id:"U-10",type:"U",tag:["DX"],name:"迪迦奥特曼 复合型",link:[20],color:"#ad3ec3"},{id:"U-11",type:"U",tag:["DX"],name:"迪迦奥特曼 强力型",link:[21],color:"#f13342"},{id:"U-12",type:"U",tag:["DX"],name:"迪迦奥特曼 空中型",link:[22],color:"#406cec"},{id:"U-13",type:"U",tag:["DX"],name:"闪耀迪迦",link:[23],color:"#e4b51f"},{id:"M-01",type:"M",tag:["SG01"],name:"古代怪兽 哥莫拉",link:null},{id:"M-02",type:"M",tag:["SG01"],name:"宇宙怪兽 艾雷王",link:null},{id:"M-03",type:"M",tag:["GP01"],name:"宇宙恐龙 杰顿",link:null},{id:"M-03-2",type:"M",tag:["GP01"],name:"宇宙恐龙 杰顿二世",link:null},{id:"M-04",type:"M",tag:["GP01"],name:"蛤蜊怪兽 加玛库基拉",link:null},{id:"M-10",type:"M",tag:["SG02"],name:"石化魔兽 贾戈尔贡",link:null},{id:"M-11",type:"M",tag:["GP01"],name:"特空机1号 赛文加",link:null},{id:"M-12",type:"M",tag:["SG01"],name:"特空机2号 乌英达姆",link:null},{id:"M-13",type:"M",tag:["GP01"],name:"特空机3号 金古桥军械库定制",link:null},{id:"M-14",type:"M",tag:["XD"],name:"特空机4号 奥特人造机甲赛罗",link:null},{id:"M-15",type:"M",tag:["SG01"],name:"宇宙忍者 巴尔坦星人",link:null},{id:"M-16",type:"M",tag:["GP01"],name:"超古代怪兽 哥尔赞",link:null},{id:"M-17",type:"M",tag:["SG01"],name:"超古代龙 美尔巴",link:null},{id:"M-18",type:"M",tag:["SG01"],name:"基里艾洛德人",link:null},{id:"M-19",type:"M",tag:["GP01"],name:"邪恶迪迦",link:null},{id:"M-24",type:"M",tag:["SG02"],name:"光热怪兽 奇拉",link:null},{id:"M-25",type:"M",tag:["SG02"],name:"凯姆尔人",link:null},{id:"M-27",type:"M",tag:["SG02"],name:"黑暗的支配者 邪神加坦杰厄",link:null},{id:"M-28",type:"M",tag:["SG02"],name:"爱憎战士 卡蜜拉",link:null},{id:"M-29",type:"M",tag:["SG02"],name:"刚力战士 达拉姆",link:null},{id:"M-30",type:"M",tag:["SG02"],name:"俊敏战士 希特拉",link:null},{id:"M-31",type:"M",tag:["SG02"],name:"伽古拉斯·伽古拉",link:null}]}},methods:{getDataByTag:function(e){this.nowList="ALL"==e?this.hyperKey:this.getListByTag(e)},getListByTag:function(e){var t=[];return this.hyperKey.forEach(function(i,a,n){-1!=i.tag.indexOf(e)&&t.push(i)}),t},showDetail:function(e){this.layerShow=!0,this.nowDetail=e},hideDetail:function(e){this.layerShow=e},getGroupByTag:function(){}},created:function(){this.nowList=this.hyperKey,this.getGroupByTag()}},v={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"item-list"},[i("floatLayer",{attrs:{show:e.layerShow,item:e.nowDetail,urlType:0},on:{parentEvent:e.hideDetail}}),e._v(" "),i("tagBar",{attrs:{tags:e.tags},on:{parentEvent:e.getDataByTag}}),e._v(" "),e._l(e.nowList,function(t){return i("propItem",{key:t.id,attrs:{item:t,urlType:0,showPic:!0,defaultColor:"#5420ae",barColor:t.color},nativeOn:{click:function(i){return e.showDetail(t)}}})})],2)])},staticRenderFns:[]};var w=i("VU/8")(P,v,!1,function(e){i("wziK")},"data-v-4400c4ea",null).exports,z={name:"UltraMedal",components:{PropItem:f,TagBar:U,FloatLayer:b},data:function(){return{tags:[{name:"ALL",title:"全部"},{name:"XD",title:"限定"},{name:"DX",title:"DX"},{name:"EX01",title:"EX01"},{name:"EX02",title:"EX02"},{name:"EX03",title:"EX03"},{name:"EX04",title:"EX04"},{name:"SG01",title:"SG01"},{name:"SG02",title:"SG02"},{name:"GP01",title:"GP01"},{name:"GP02",title:"GP02"},{name:"GP03",title:"GP03"},{name:"GP04",title:"GP04"},{name:"GPEX",title:"GPEX"},{name:"SP",title:"SP"},{name:"PF",title:"披风"},{name:"PB",title:"PB"}],nowList:null,nowDetail:null,layerShow:!1,ultramedal:[{id:"M-001",type:"U",tag:["DX"],name:"赛罗奥特曼",link:[62]},{id:"M-002",type:"U",tag:["DX"],name:"赛文奥特曼",link:[2]},{id:"M-003",type:"U",tag:["DX"],name:"雷欧奥特曼",link:[8]},{id:"M-004",type:"U",tag:["DX"],name:"奥特曼",link:[0]},{id:"M-005",type:"U",tag:["DX"],name:"艾斯奥特曼",link:[4]},{id:"M-006",type:"U",tag:["DX"],name:"泰罗奥特曼",link:[6]},{id:"M-007",type:"U",tag:["DX"],name:"迪迦奥特曼",link:[20]},{id:"M-008",type:"U",tag:["DX"],name:"戴拿奥特曼",link:[27]},{id:"M-009",type:"U",tag:["DX"],name:"盖亚奥特曼",link:[30]},{id:"M-010",type:"U",tag:["DX"],name:"赛罗奥特曼 无限形态",link:[88],color:"#de9104"},{id:"M-011",type:"U",tag:["DX"],name:"捷德奥特曼",link:[103],color:"#de9104"},{id:"M-012",type:"U",tag:["DX"],name:"极恶 贝利亚",link:[123],color:"#de9104"},{id:"M-013",type:"U",tag:["DX"],name:"佐菲",link:[1]},{id:"M-014",type:"U",tag:["DX"],name:"杰克奥特曼",link:[3]},{id:"M-015",type:"U",tag:["DX"],name:"奥特之父",link:[5]},{id:"M-016",type:"U",tag:["DX"],name:"高斯奥特曼",link:[38]},{id:"M-017",type:"U",tag:["DX"],name:"奈克赛斯奥特曼",link:[46]},{id:"M-018",type:"U",tag:["DX"],name:"梦比优斯奥特曼",link:[54]},{id:"M-019",type:"U",tag:["DX"],name:"银河奥特曼",link:[65]},{id:"M-020",type:"U",tag:["DX"],name:"艾克斯奥特曼",link:[67]},{id:"M-021",type:"U",tag:["DX"],name:"欧布奥特曼",link:[68]},{id:"M-022",type:"U",tag:["EX01"],name:"赛罗奥特曼 闪耀形态",link:[64]},{id:"M-023",type:"U",tag:["EX01"],name:"火焰骑士",link:null},{id:"M-024",type:"U",tag:["EX01"],name:"镜子骑士",link:null},{id:"M-025",type:"U",tag:["EX01"],name:"钢铁九号",link:null},{id:"M-026",type:"U",tag:["EX01"],name:"钢铁杀手",link:null},{id:"M-027",type:"U",tag:["EX01"],name:"捷德奥特曼",link:[103]},{id:"M-028",type:"U",tag:["EX02"],name:"银河斯特利姆奥特曼",link:[90]},{id:"M-029",type:"U",tag:["EX02"],name:"维克特利奥特曼 骑士形态",link:[91]},{id:"M-030",type:"U",tag:["EX02"],name:"超越艾克斯",link:[93]},{id:"M-031",type:"U",tag:["EX02"],name:"捷德奥特曼 尊皇形态",link:[107]},{id:"M-032",type:"U",tag:["EX02"],name:"罗布奥特曼",link:[116]},{id:"M-033",type:"U",tag:["EX02"],name:"泰迦三重斯特利姆",link:[118]},{id:"M-034",type:"U",tag:["EX03"],name:"银河维克特利奥特曼",link:[92],color:"#173dc3"},{id:"M-035",type:"U",tag:["EX03"],name:"艾克斯奥特曼 贝塔火花装甲",link:[94],color:"#173dc3"},{id:"M-036",type:"U",tag:["EX03"],name:"欧布奥特曼 三重形态",link:[102],color:"#173dc3"},{id:"M-037",type:"U",tag:["EX03"],name:"捷德奥特曼 终极形态",link:[108],color:"#173dc3"},{id:"M-038",type:"U",tag:["EX03"],name:"格罗布奥特曼",link:[117],color:"#173dc3"},{id:"M-039",type:"U",tag:["EX03"],name:"令迦奥特曼",link:[124],color:"#173dc3"},{id:"M-040",type:"U",tag:["EX04"],name:"奥特六兄弟",link:[0,1,2,3,4,6],color:"#8a939c"},{id:"M-041",type:"U",tag:["EX04"],name:"爱迪奥特曼",link:[12]},{id:"M-042",type:"U",tag:["EX04"],name:"杰斯提斯奥特曼 标准模式",link:[43]},{id:"M-043",type:"U",tag:["EX04"],name:"希卡利奥特曼",link:[58]},{id:"M-044",type:"U",tag:["EX04"],name:"赛罗奥特曼 月神奇迹型",link:[87]},{id:"M-045",type:"U",tag:["EX04"],name:"利布特奥特曼",link:[70]},{id:"M-046",type:"U",tag:["GP01"],name:"赛文奥特曼 闪耀型",link:[2]},{id:"M-047",type:"U",tag:["GP02"],name:"奥特曼 闪耀型",link:[0]},{id:"M-048",type:"U",tag:["GP01"],name:"葛雷奥特曼",link:[17]},{id:"M-049",type:"U",tag:["GP01"],name:"赛罗奥特曼 强壮日冕型",link:[86]},{id:"M-050",type:"U",tag:["GP01"],name:"阿古茹奥特曼",link:[33]},{id:"M-051",type:"U",tag:["GP01"],name:"乔尼亚斯奥特曼",link:[11]},{id:"M-052",type:"M",tag:["GP02"],name:"内隆嘎",link:null},{id:"M-053",type:"M",tag:["GP02"],name:"盖内伽古",link:null},{id:"M-054",type:"M",tag:["GP02"],name:"吉拉斯",link:null},{id:"M-055",type:"U",tag:["GP02"],name:"奈克斯特奥特曼 蓝色青年形态",link:[50]},{id:"M-056",type:"U",tag:["GP02"],name:"戴拿奥特曼 奇迹型",link:[29]},{id:"M-057",type:"U",tag:["GP03"],name:"闪耀迪迦",link:[23]},{id:"M-058",type:"U",tag:["GP03"],name:"帕瓦特奥特曼",link:[18]},{id:"M-059",type:"U",tag:["GP03"],name:"奥特之王",link:[10]},{id:"M-060",type:"M",tag:["GP03"],name:"伽古拉斯·伽古拉",link:null},{id:"M-061",type:"M",tag:["GP03"],name:"金古桥",link:null},{id:"M-062",type:"U",tag:["GP04"],name:"哉阿斯奥特曼",link:[19]},{id:"M-063",type:"U",tag:["GP04"],name:"纳伊斯奥特曼",link:[35]},{id:"M-064",type:"U",tag:["GP04"],name:"格丽乔奥特曼",link:[74]},{id:"M-065",type:"M",tag:["GP04"],name:"特空机1号 赛文加",link:null},{id:"M-066",type:"M",tag:["GP04"],name:"特空机2号 乌英达姆",link:null},{id:"M-067",type:"M",tag:["GP04"],name:"特空机3号 金古桥军械库定制",link:null},{id:"M-068",type:"M",tag:["GP04"],name:"特空机4号 奥特人造机甲赛罗",link:null},{id:"M-069",type:"M",tag:["GP04"],name:"歼灭机甲兽德斯特鲁多斯",link:null},{id:"M-070",type:"M",tag:["GP04"],name:"虚空怪兽格利扎",link:null},{id:"M-071",type:"U",tag:["SG01"],name:"究极赛罗",link:[63]},{id:"M-072",type:"U",tag:["SG01"],name:"欧布奥特曼 重光形态",link:[96]},{id:"M-073",type:"U",tag:["SG01"],name:"维克特利奥特曼",link:[66]},{id:"M-074",type:"U",tag:["SG01"],name:"麦克斯奥特曼",link:[52]},{id:"M-075",type:"U",tag:["SG01"],name:"泰迦奥特曼",link:[77]},{id:"M-076",type:"U",tag:["SG01"],name:"泰塔斯奥特曼",link:[79]},{id:"M-077",type:"U",tag:["SG01"],name:"风马奥特曼",link:[80]},{id:"M-078",type:"U",tag:["SG01"],name:"奈克斯特奥特曼 青年形态",link:[49]},{id:"M-079",type:"M",tag:["SG02"],name:"艾雷王",link:null},{id:"M-080",type:"M",tag:["SG02"],name:"艾斯杀手",link:null},{id:"M-081",type:"M",tag:["SG02"],name:"霍洛波罗兹",link:null},{id:"M-082",type:"M",tag:["SG02"],name:"吉尔巴里斯",link:null},{id:"M-083",type:"M",tag:["SG02"],name:"加拉特隆MK2",link:null},{id:"M-084",type:"U",tag:["XD"],name:"赛罗与捷德",link:[62,103],color:"#de9104"},{id:"M-085",type:"U",tag:["XD"],name:"戴拿奥特曼 强壮型",link:[28]},{id:"M-086",type:"U",tag:["XD"],name:"高斯奥特曼 日冕模式",link:[39]},{id:"M-087",type:"U",tag:["XD"],name:"初代光线",link:[0]},{id:"M-088",type:"U",tag:["XD"],name:"泽塔奥特曼 阿尔法装甲",link:[81,62,2,8]},{id:"M-089",type:"U",tag:["XD"],name:"泽塔奥特曼 伽马未来",link:[81,20,27,30]},{id:"M-090",type:"U",tag:["XD"],name:"泽塔奥特曼 德尔塔天爪",link:[81,71,88,123],color:"#8a939c"},{id:"M-091",type:"U",tag:["XD"],name:"十周年赛罗",link:[62]},{id:"M-092",type:"U",tag:["XD"],name:"泽塔奥特曼 德尔塔天爪圣诞版",link:[122],color:"#027e42"},{id:"M-093",type:"U",tag:["XD"],name:"罗索奥特曼",link:[72]},{id:"M-094",type:"U",tag:["XD"],name:"布鲁奥特曼",link:[73]},{id:"M-095",type:"U",tag:["SP"],name:"泽塔奥特曼",link:[81],color:"#d8111a"},{id:"M-096",type:"U",tag:["SP"],name:"银河奥特曼",link:[65],color:"#d8111a"},{id:"M-097",type:"U",tag:["SP"],name:"维克特利奥特曼",link:[66],color:"#d8111a"},{id:"M-098",type:"U",tag:["SP"],name:"艾克斯奥特曼",link:[67],color:"#d8111a"},{id:"M-099",type:"U",tag:["SP"],name:"欧布奥特曼",link:[68],color:"#d8111a"},{id:"M-100",type:"U",tag:["SP"],name:"捷德奥特曼",link:[103],color:"#d8111a"},{id:"M-101",type:"U",tag:["SP"],name:"罗索奥特曼",link:[72],color:"#d8111a"},{id:"M-102",type:"U",tag:["SP"],name:"布鲁奥特曼",link:[73],color:"#d8111a"},{id:"M-103",type:"U",tag:["SP"],name:"泰迦奥特曼",link:[77],color:"#d8111a"},{id:"M-104",type:"U",tag:["PF"],name:"赛罗奥特曼",link:[62],color:"#5dbc9c"},{id:"M-105",type:"U",tag:["PF"],name:"奥特曼",link:[0],color:"#5dbc9c"},{id:"M-106",type:"U",tag:["PF"],name:"佐菲奥特曼",link:[1],color:"#5dbc9c"},{id:"M-107",type:"U",tag:["PF"],name:"赛文奥特曼",link:[2],color:"#5dbc9c"},{id:"M-108",type:"U",tag:["PF"],name:"杰克奥特曼",link:[3],color:"#5dbc9c"},{id:"M-109",type:"U",tag:["PF"],name:"艾斯奥特曼",link:[4],color:"#5dbc9c"},{id:"M-110",type:"U",tag:["PF"],name:"泰罗奥特曼",link:[6],color:"#5dbc9c"},{id:"M-111",type:"U",tag:["GPEX"],name:"奥特之母",link:[7]},{id:"M-112",type:"U",tag:["GPEX"],name:"尤莉安奥特曼",link:[13]},{id:"M-113",type:"U",tag:["GPEX"],name:"索拉",link:null},{id:"M-114",type:"U",tag:["GPEX"],name:"博伊奥特曼",link:[45]},{id:"M-115",type:"U",tag:["GPEX"],name:"察克奥特曼",link:[15]},{id:"M-116",type:"U",tag:["GPEX"],name:"史考特奥特曼",link:[14]},{id:"M-117",type:"U",tag:["GPEX"],name:"贝斯奥特曼",link:[16]},{id:"M-118",type:"U",tag:["GPEX"],name:"杰诺奥特曼",link:[53]},{id:"M-119",type:"U",tag:["GPEX"],name:"赛文21奥特曼",link:[37]},{id:"M-120",type:"U",tag:["GPEX"],name:"奈欧斯奥特曼",link:[36]},{id:"M-121",type:"U",tag:["GPEX"],name:"奈克斯特奥特曼",link:[48]},{id:"M-122",type:"U",tag:["GPEX"],name:"诺亚奥特曼",link:[51]},{id:"M-123",type:"U",tag:["PB"],name:"泽塔奥特曼 阿尔法装甲",link:[119]},{id:"M-124",type:"U",tag:["PB"],name:"泽塔奥特曼 贝塔冲击",link:[120]},{id:"M-125",type:"U",tag:["PB"],name:"泽塔奥特曼 伽马未来",link:[121]},{id:"M-126",type:"U",tag:["PB"],name:"泽塔奥特曼 德尔塔天爪",link:[122],color:"#de9104"},{id:"M-127",type:"O",tag:["PB"],name:"武器1",link:null},{id:"M-128",type:"O",tag:["PB"],name:"武器2",link:null},{id:"M-129",type:"O",tag:["PB"],name:"武器3",link:null},{id:"M-130",type:"M",tag:["PB"],name:"杰顿",link:null},{id:"M-131",type:"M",tag:["PB"],name:"庞顿",link:null},{id:"M-132",type:"M",tag:["PB"],name:"玛伽大蛇",link:null},{id:"M-133",type:"M",tag:["PB"],name:"超古代怪兽 哥尔赞",link:null},{id:"M-134",type:"M",tag:["PB"],name:"超古代龙 美尔巴",link:null},{id:"M-135",type:"M",tag:["PB"],name:"宇宙战斗兽 超戈布",link:null},{id:"M-136",type:"M",tag:["PB"],name:"宇宙海兽 雷丘巴斯",link:null},{id:"M-137",type:"M",tag:["PB"],name:"奇兽眼Q",link:null},{id:"M-138",type:"U",tag:["DX"],name:"贝利亚奥特曼",link:[60]},{id:"M-139",type:"M",tag:["DX"],name:"宇古代怪兽 哥莫拉",link:null},{id:"M-140",type:"M",tag:["DX"],name:"骷髅怪兽 雷德王",link:null}]}},methods:{getDataByTag:function(e){this.nowList="ALL"==e?this.ultramedal:this.getListByTag(e)},getListByTag:function(e){var t=[];return this.ultramedal.forEach(function(i,a,n){-1!=i.tag.indexOf(e)&&t.push(i)}),t},showDetail:function(e){this.layerShow=!0,this.nowDetail=e},hideDetail:function(e){this.layerShow=e}},created:function(){this.nowList=this.ultramedal}},j={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"item-list"},[i("floatLayer",{attrs:{show:e.layerShow,item:e.nowDetail,urlType:1},on:{parentEvent:e.hideDetail}}),e._v(" "),i("tagBar",{attrs:{tags:e.tags},on:{parentEvent:e.getDataByTag}}),e._v(" "),e._l(e.nowList,function(t){return i("propItem",{key:t.id,attrs:{item:t,urlType:1,showPic:!0,barColor:t.color},nativeOn:{click:function(i){return e.showDetail(t)}}})})],2)])},staticRenderFns:[]};var S=i("VU/8")(z,j,!1,function(e){i("Oysm")},"data-v-c3ea1edc",null).exports;a.a.use(h.a);var X=new h.a({routes:[{path:"/",name:"Index",component:m},{path:"/HyperKey",name:"HyperKey",component:w},{path:"/UltraMedal",name:"UltraMedal",component:S}]}),G=i("AXdl");a.a.config.productionTip=!1,a.a.use(G.a),a.a.use(G.a,{preLoad:1.3,error:"dist/error.png",loading:"./assets/svg/loading-spin.svg",attempt:1}),new a.a({el:"#app",router:X,components:{App:o},template:"<App/>"})},Oysm:function(e,t){},lHEU:function(e,t){},o1v3:function(e,t){},ss61:function(e,t){},wU0J:function(e,t){},wziK:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.70cffb26677e6e0f720b.js.map