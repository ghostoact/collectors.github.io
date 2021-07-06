<template>
  <div></div>
</template>

<script>
// 奥特曼列表
// 奥特曼形态列表+关联奥特曼
// 奥特曼合成
// 类型分别有：基础 base、形态 form、融合 fusion
// 形态 form 有 baseId
// 融合 fusion 有数组 fusionArr
export default {
  name: "FrameTest",
  data() {
    return {
      ultraman: [
        {
          id: 0,
          type: "base",
          name: {
            zh: "奥特曼",
            jp: "ウルトラマン",
            en: "ultraman",
          },
          first: 1966,
        },
        {
          id: 1,
          type: "base",
          name: {
            zh: "佐菲",
            jp: "ゾフィー",
            en: "Zoffy",
          },
          first: 1967,
        },
        {
          id: 2,
          type: "base",
          name: {
            zh: "赛文·奥特曼",
            jp: "ウルトラセブン",
            en: "UltraSeven",
          },
          first: 1967,
        },
        {
          id: 3,
          type: "base",
          name: {
            zh: "杰克·奥特曼",
            jp: "ウルトラマンジャック",
            en: "Ultraman Jack",
          },
          first: 1971,
        },
        {
          id: 4,
          type: "base",
          name: {
            zh: "艾斯·奥特曼",
            jp: "ウルトラマンエース",
            en: "Ultraman Ace",
          },
          first: 1972,
        },
        {
          id: 5,
          type: "base",
          name: {
            zh: "奥特之父",
            jp: "ウルトラの父",
            en: "Father of Ultra",
          },
          first: 1972,
        },
        {
          id: 6,
          type: "base",
          name: {
            zh: "奥特之父",
            jp: "ウルトラマンタロウ",
            en: "Ultraman Taro",
          },
          first: 1973,
        },
        {
          id: 7,
          type: "base",
          name: {
            zh: "奥特之母",
            jp: "ウルトラの母",
            en: "Mother of Ultra",
          },
          first: 1973,
        },
        {
          id: 8,
          type: "base",
          name: {
            zh: "雷欧·奥特曼",
            jp: "ウルトラマンレオ",
            en: "Ultraman Leo",
          },
          first: 1974,
        },
        {
          id: 9,
          type: "base",
          name: {
            zh: "阿斯特拉",
            jp: "アストラ",
            en: "Astra",
          },
          first: 1974,
        },
        {
          id: 10,
          type: "base",
          name: {
            zh: "奥特之王",
            jp: "ウルトラマンキング",
            en: "Ultraman King",
          },
          first: 1974,
        },
        {
          id: 11,
          type: "base",
          name: {
            zh: "乔尼亚斯·奥特曼",
            jp: "ウルトラマンジョーニアス",
            en: "Ultraman Joneus",
          },
          first: 1979,
        },
        {
          id: 12,
          type: "base",
          name: {
            zh: "爱迪·奥特曼",
            jp: "ウルトラマン80",
            en: "Ultraman 80",
          },
          first: 1980,
        },
        {
          id: 13,
          type: "base",
          name: {
            zh: "尤莉安·奥特曼",
            jp: "ユリアン",
            en: "Yullian",
          },
          first: 1981,
        },
        {
          id: 14,
          type: "base",
          name: {
            zh: "史考特·奥特曼",
            jp: "ウルトラマンスコット",
            en: "Ultraman Scott",
          },
          first: 1987,
        },
        {
          id: 15,
          type: "base",
          name: {
            zh: "察克·奥特曼",
            jp: "ウルトラマンチャック",
            en: "Ultraman Chuck",
          },
          first: 1987,
        },
        {
          id: 16,
          type: "base",
          name: {
            zh: "贝斯·奥特曼",
            jp: "ウルトラウーマンベス",
            en: "Ultrawoman Beth",
          },
          first: 1989,
        },
        {
          id: 17,
          type: "base",
          name: {
            zh: "葛雷·奥特曼",
            jp: "ウルトラマンG（グレート）",
            en: "Ultraman Great",
          },
          first: 1990,
        },
        {
          id: 18,
          type: "base",
          name: {
            zh: "帕瓦特·奥特曼",
            jp: "ウルトラマンパワード",
            en: "Ultraman Powered",
          },
          first: 1993,
        },
        {
          id: 19,
          type: "base",
          name: {
            zh: "哉阿斯·奥特曼",
            jp: "ウルトラマンゼアス",
            en: "Ultraman Zearth",
          },
          first: 1996,
        },
        {
          id: 20,
          type: "base",
          name: {
            zh: "迪迦·奥特曼复合型",
            jp: "ウルトラマンティガ",
            en: "Ultraman Tiga",
          },
          first: 1996,
        },
        {
          id: 21,
          type: "form",
          formId: 20,
          name: {
            zh: "迪迦·奥特曼强力型",
            jp: "ウルトラマンティガ",
            en: "Ultraman Tiga",
          },
          first: 1996,
        },
        {
          id: 22,
          type: "form",
          formId: 20,
          name: {
            zh: "迪迦·奥特曼空中型",
            jp: "ウルトラマンティガ",
            en: "Ultraman Tiga",
          },
          first: 1996,
        },
        {
          id: 23,
          type: "form",
          formId: 20,
          name: {
            zh: "闪耀迪迦",
            jp: "ウルトラマンティガ",
            en: "Glitter Tiga",
          },
          first: 1996,
        },
        {
          id: 24,
          type: "form",
          formId: 20,
          name: {
            zh: "黑暗迪迦",
            jp: "ウルトラマンティガ",
            en: "Tiga Dark",
          },
          first: 2000,
        },
        {
          id: 25,
          type: "form",
          formId: 20,
          name: {
            zh: "迪迦·奥特曼龙卷型",
            jp: "ウルトラマンティガ",
            en: "Tiga Tornado",
          },
          first: 2000,
        },
        {
          id: 26,
          type: "form",
          formId: 20,
          name: {
            zh: "迪迦·奥特曼爆裂型",
            jp: "ウルトラマンティガ",
            en: "Tiga Blast",
          },
          first: 2000,
        },
        {
          id: 27,
          type: "base",
          name: {
            zh: "戴拿·奥特曼闪亮型",
            jp: "ウルトラマンダイナ",
            en: "Ultraman Dyna Flash Type",
          },
          first: 1997,
        },
        {
          id: 28,
          type: "form",
          formId: 27,
          name: {
            zh: "戴拿·奥特曼强壮型",
            jp: "ウルトラマンダイナ",
            en: "Ultraman Dyna Strong Type",
          },
          first: 1997,
        },
        {
          id: 29,
          type: "form",
          formId: 27,
          name: {
            zh: "戴拿·奥特曼奇迹型",
            jp: "ウルトラマンダイナ",
            en: "Ultraman Dyna Miracle Type",
          },
          first: 1997,
        },
        {
          id: 30,
          type: "base",
          name: {
            zh: "盖亚·奥特曼",
            jp: "ウルトラマンガイア",
            en: "Ultraman Gaia",
          },
          first: 1998,
        },
        {
          id: 31,
          type: "form",
          formId: 30,
          name: {
            zh: "盖亚·奥特曼V2",
            jp: "ウルトラマンガイア",
            en: "Ultraman Gaia Version 2",
          },
          first: 1998,
        },
        {
          id: 32,
          type: "form",
          formId: 30,
          name: {
            zh: "盖亚·奥特曼至高型",
            jp: "ウルトラマンガイア",
            en: "Ultraman Gaia Supreme Version",
          },
          first: 1998,
        },
        {
          id: 33,
          type: "base",
          name: {
            zh: "阿古茹·奥特曼至高型",
            jp: "ウルトラマンアグル",
            en: "Ultraman Agul",
          },
          first: 1998,
        },
        {
          id: 34,
          type: "form",
          formId: 33,
          name: {
            zh: "阿古茹·奥特曼V2",
            jp: "ウルトラマンアグル",
            en: "Ultraman Agul Version 2",
          },
          first: 1998,
        },
        {
          id: 35,
          type: "base",
          name: {
            zh: "纳伊斯·奥特曼",
            jp: "ウルトラマンナイス",
            en: "ULTRAMAN NICE",
          },
          first: 1999,
        },
        {
          id: 36,
          type: "base",
          name: {
            zh: "奈欧斯·奥特曼",
            jp: "ウルトラマンネオス",
            en: "ULTRAMAN NEOS",
          },
          first: 2000,
        },
        {
          id: 37,
          type: "base",
          name: {
            zh: "赛文21·奥特曼",
            jp: "ウルトラセブン·21",
            en: "ULTRASEVEN21",
          },
          first: 2000,
        },
        {
          id: 38,
          type: "base",
          name: {
            zh: "高斯·奥特曼月神模式",
            jp: "ウルトラマンコスモス",
            en: "Ultraman Cosmos",
          },
          first: 2001,
        },
        {
          id: 39,
          type: "form",
          formId: 38,
          name: {
            zh: "高斯·奥特曼日冕模式",
            jp: "ウルトラマンコスモス",
            en: "Ultraman Cosmos",
          },
          first: 2001,
        },
        {
          id: 40,
          type: "form",
          formId: 38,
          name: {
            zh: "高斯·奥特曼日蚀模式",
            jp: "ウルトラマンコスモス",
            en: "Ultraman Cosmos",
          },
          first: 2001,
        },
        {
          id: 41,
          type: "form",
          formId: 38,
          name: {
            zh: "高斯·奥特曼宇宙日冕模式",
            jp: "ウルトラマンコスモス",
            en: "Ultraman Cosmos",
          },
          first: 2001,
        },
        {
          id: 42,
          type: "form",
          formId: 38,
          name: {
            zh: "高斯·奥特曼宇宙未来模式",
            jp: "ウルトラマンコスモス",
            en: "Ultraman Cosmos",
          },
          first: 2001,
        },
        {
          id: 43,
          type: "base",
          name: {
            zh: "杰斯提斯·奥特曼",
            jp: "ウルトラマンジャスティス",
            en: "UItraman Justice",
          },
          first: 2002,
        },
        {
          id: 44,
          type: "form",
          formId: 43,
          name: {
            zh: "杰斯提斯·奥特曼强力形态",
            jp: "ウルトラマンジャスティス",
            en: "UItraman Justice",
          },
          first: 2002,
        },
        {
          id: 45,
          type: "base",
          name: {
            zh: "博伊·奥特曼",
            jp: "ウルトラマンボーイ",
            en: "ULTRAMAN BOY",
          },
          first: 2003,
        },
        {
          id: 46,
          type: "base",
          name: {
            zh: "奈克赛斯·奥特曼",
            jp: "ウルトラマンネクサス",
            en: "Ultraman Nexus",
          },
          first: 2004,
        },
        {
          id: 47,
          type: "form",
          formId: 46,
          name: {
            zh: "奈克斯特·奥特曼（幼年体）",
            jp: "ウルトラマン・ザ・ネクスト",
            en: "Ultraman The Next",
          },
          first: 2004,
        },
        {
          id: 48,
          type: "form",
          formId: 46,
          name: {
            zh: "奈克斯特·奥特曼（青年体）",
            jp: "ウルトラマン・ザ・ネクスト",
            en: "Ultraman The Next",
          },
          first: 2004,
        },
        {
          id: 49,
          type: "form",
          formId: 46,
          name: {
            zh: "奈克斯特·奥特曼青年形态",
            jp: "ウルトラマン・ザ・ネクスト",
            en: "Ultraman Nexus Junis",
          },
          first: 2004,
        },
        {
          id: 50,
          type: "form",
          formId: 46,
          name: {
            zh: "奈克斯特·奥特曼蓝色青年形态",
            jp: "ウルトラマン・ザ・ネクスト",
            en: "Ultraman Nexus Junis Blue",
          },
          first: 2004,
        },
        {
          id: 51,
          type: "form",
          formId: 46,
          name: {
            zh: "诺亚·奥特曼",
            jp: "ウルトラマンノア",
            en: "Ultraman Noa",
          },
          first: 2005,
        },
        {
          id: 52,
          type: "base",
          name: {
            zh: "麦克斯·奥特曼",
            jp: "ウルトラマンマックス",
            en: "Ultraman Max",
          },
          first: 2005,
        },
        {
          id: 53,
          type: "base",
          name: {
            zh: "杰诺·奥特曼",
            jp: "ウルトラマンゼノン",
            en: "Ultraman Xenon",
          },
          first: 2005,
        },
        {
          id: 54,
          type: "base",
          name: {
            zh: "梦比优斯·奥特曼",
            jp: "ウルトラマンメビウス",
            en: "Ultraman Mebius",
          },
          first: 2006,
        },
        {
          id: 55,
          type: "form",
          formId: 54,
          name: {
            zh: "梦比优斯勇者",
            jp: "メビウスブレイブ",
            en: "Mebius Brave",
          },
          first: 2006,
        },
        {
          id: 56,
          type: "form",
          formId: 54,
          name: {
            zh: "梦比优斯燃烧勇者",
            jp: "メビウスバーニングブレイブ",
            en: "Mebius Burning Brave",
          },
          first: 2006,
        },
        {
          id: 57,
          type: "form",
          formId: 54,
          name: {
            zh: "梦比优斯凤凰勇者",
            jp: "メビウスフェニックスブレイブ",
            en: "Mebius Phoenix Brave",
          },
          first: 2006,
        },
        {
          id: 58,
          type: "base",
          name: {
            zh: "希卡利·奥特曼",
            jp: "ウルトラマンヒカリ",
            en: "UItraman Hikari",
          },
          first: 2006,
        },
        {
          id: 59,
          type: "base",
          name: {
            zh: "赛文奥特曼X",
            jp: "ウルトラセブン X",
            en: "Ultra Seven X",
          },
          first: 2007,
        },
        {
          id: 60,
          type: "base",
          name: {
            zh: "贝利亚奥特曼",
            jp: "ウルトラマンベリアル",
            en: "Ultraman Belial",
          },
          first: 2009,
        },
        {
          id: 61,
          type: "form",
          formId: 60,
          name: {
            zh: "贝利亚奥特曼早期形态",
            jp: "ウルトラマンベリアル アーリースタイル",
            en: "Ultraman Belial Early Style",
          },
          first: 2009,
        },
        {
          id: 62,
          type: "base",
          name: {
            zh: "赛罗·奥特曼",
            jp: "ウルトラマンゼロ",
            en: "Ultraman Zero",
          },
          first: 2009,
        },
        {
          id: 63,
          type: "form",
          formId: 62,
          name: {
            zh: "终极赛罗",
            jp: "ウルティメイトゼロ",
            en: "Ultimate Zero",
          },
          first: 2009,
        },
        {
          id: 64,
          type: "form",
          formId: 62,
          name: {
            zh: "赛罗·奥特曼闪耀形态",
            jp: "シャイニングウルトラマンゼロ",
            en: "Shining Ultraman Zero",
          },
          first: 2009,
        },
        {
          id: 65,
          type: "base",
          name: {
            zh: "银河·奥特曼",
            jp: "ウルトラマンギンガ",
            en: "Ultraman Ginga",
          },
          first: 2013,
        },
        {
          id: 66,
          type: "base",
          name: {
            zh: "维克特利·奥特曼",
            jp: "ウルトラマンビクトリー",
            en: "Ultraman Victory",
          },
          first: 2014,
        },
        {
          id: 67,
          type: "base",
          name: {
            zh: "艾克斯·奥特曼",
            jp: "ウルトラマンX",
            en: "Ultraman X",
          },
          first: 2015,
        },
        {
          id: 68,
          type: "base",
          name: {
            zh: "欧布·奥特曼",
            jp: "ウルトラマンオーブ",
            en: "Ultraman Orb",
          },
          first: 2016,
        },
        {
          id: 69,
          type: "form",
          formId: 68,
          name: {
            zh: "欧布初始",
            jp: "オリジン・ザ・ファースト",
            en: "Origin The First",
          },
          first: 2016,
        },
        {
          id: 70,
          type: "form",
          formId: 68,
          name: {
            zh: "欧布起源",
            jp: "オーブオリジン",
            en: "Orb Origin",
          },
          first: 2016,
        },
        {
          id: 71,
          type: "base",
          name: {
            zh: "捷德奥特曼",
            jp: "ウルトラマンジード",
            en: "Ultraman Geed",
          },
          first: 2017,
        },
        {
          id: 72,
          type: "base",
          name: {
            zh: "罗索奥特曼",
            jp: "ウルトラマンロッソ",
            en: "Ultraman Rosso",
          },
          first: 2018,
        },
        {
          id: 73,
          type: "base",
          name: {
            zh: "布鲁奥特曼",
            jp: "ウルトラマンブル",
            en: "Ultraman Blu",
          },
          first: 2018,
        },
        {
          id: 74,
          type: "base",
          name: {
            zh: "格丽乔奥特曼",
            jp: "ウルトラウーマングリージョ",
            en: "Ultrawoman Grigio",
          },
          first: 2019,
        },
        {
          id: 75,
          type: "base",
          name: {
            zh: "托雷基亚奥特曼",
            jp: "ウルトラマントレギア",
            en: "Ultraman Tregear",
          },
          first: 2019,
        },
        {
          id: 76,
          type: "form",
          formId: 75,
          name: {
            zh: "托雷基亚奥特曼 早期形态",
            jp: "ウルトラマントレギア アーリースタイル",
            en: "Ultraman Tregear Early Style",
          },
          first: 2019,
        },
        {
          id: 77,
          type: "base",
          name: {
            zh: "泰迦·奥特曼",
            jp: "ウルトラマンタイガ",
            en: "Ultraman Taiga",
          },
          first: 2019,
        },
        {
          id: 78,
          type: "form",
          formId: 77,
          name: {
            zh: "泰迦·奥特曼光子地球形态",
            jp: "フォトンアース",
            en: "Ultraman Taiga Photon-Earth",
          },
          first: 2019,
        },
        {
          id: 79,
          type: "base",
          name: {
            zh: "泰塔斯·奥特曼",
            jp: "ウルトラマンタイタス",
            en: "Ultraman Titas",
          },
          first: 2019,
        },
        {
          id: 80,
          type: "base",
          name: {
            zh: "风马·奥特曼",
            jp: "ウルトラマンフーマ",
            en: "Ultraman Fuma",
          },
          first: 2019,
        },
        {
          id: 81,
          type: "base",
          name: {
            zh: "泽塔奥特曼",
            jp: "ウルトラマンゼット",
            en: "Ultraman Z",
          },
          first: 2020,
        },
        {
          id: 82,
          type: "base",
          name: {
            zh: "特利迦奥特曼复合型",
            jp: "ウルトラマントリガー",
            en: "Ultraman Trigger",
          },
          first: 2021,
        },
        {
          id: 83,
          type: "form",
          formId: 82,
          name: {
            zh: "特利迦奥特曼强力型",
            jp: "ウルトラマントリガー",
            en: "Ultraman Trigger",
          },
          first: 2021,
        },
        {
          id: 84,
          type: "form",
          formId: 82,
          name: {
            zh: "特利迦奥特曼空中型",
            jp: "ウルトラマントリガー",
            en: "Ultraman Trigger",
          },
          first: 2021,
        }
      ],
    };
  },
  created() {
    // console.log(this.getUltraInfo(8).name.zh);
    // console.log(this.getUltraType(8));
    this.getUltraByType(82, "form");
  },
  methods: {
    // 根据id获得该奥特曼的信息
    // 应用：获取迪迦的数据
    getUltraInfo(id) {
      return this.ultraman[id];
    },
    // 根据id获得该奥特曼的所属类型
    // 应用：迪迦强力型属于形态还是融合？
    getUltraType(id) {
      let typeStr = "";
      switch (this.getUltraInfo(id).type) {
        case "base":
        default:
          typeStr = "基础";
          break;
        case "form":
          typeStr = "形态";
          break;
        case "fusion":
          typeStr = "融合";
          break;
      }
      return typeStr;
    },
    // 根据奥特曼的id和类型获取相关奥特曼列表
    // 应用：迪迦的形态有哪些？ 罗布的合成形态有哪些？
    getUltraByType(id, type) {
      switch (type) {
        case "base":
        default:
          // 无意义
          break;
        case "form":
          this.ultraman.forEach((item, index, array) => {
            if (item.type == "form" && item.formId == id) {
              console.log(this.getUltraInfo(item.id).name.zh);
            }
          });
          break;
        case "fusion":
          this.ultraman.forEach((item, index, array) => {
            if (item.type == "fusion" && item.fusionArr.indexOf(id) != -1) {
              console.log(this.getUltraInfo(item.id).name.zh);
            }
          });
          break;
      }
    },
  },
};
</script>

<style></style>
