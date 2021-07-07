<template>
  <div>
    <div class="item-list">
      <div
        class="item-box"
        v-for="ultra in baseList"
        :key="ultra.id"
        @click="getInfoById(ultra.id)"
        :style="
          'background-image: url(./static/img/ultraman/thumb/' +
          ultra.id +
          '.png);'
        "
      >
        <div class="item-title">
          {{ ultra.name.zh }}
        </div>
      </div>
    </div>
    <div class="detail-box" v-if="nowUltra.info != null">
      <p>{{ nowUltra.info.name.zh }}</p>
      <div class="box-list">
        <div
          class="item-box"
          v-for="ultra in nowUltra.form"
          :key="ultra.id"
          :style="
            'background-image: url(./static/img/ultraman/thumb/' +
            ultra.id +
            '.png);'
          "
        >
         <div class="item-title">
          {{ ultra.name.zh }}
        </div>
        </div>
      </div>
      <div class="box-list">
        <div
          class="item-box"
          v-for="ultra in nowUltra.fusion"
          :key="ultra.id"
          :style="
            'background-image: url(./static/img/ultraman/thumb/' +
            ultra.id +
            '.png);'
          "
        >
         <div class="item-title">
          {{ ultra.name.zh }}
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 1.奥特曼列表 √
// 2.奥特曼形态列表+相关融合列表 √
// 3.周边列表
// 4.形态对应相关周边,例如泽塔勋章和特利迦钥匙
// 5.组合测试，选择不同的奥特曼，得出形态

// 类型分别有：基础 base、形态 form、融合 fusion
// 形态 form 有 baseId
// 融合 fusion 有数组 fusionArr
// ultraman 数组的下标与id是对应的，不可错误

// 难题：
// 欧布：涉及到欧布设定的基本形态切换问题，从最早的重光形态到欧布原生
// 捷德：类似欧布的基本形态问题，
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
            zh: "赛文奥特曼",
            jp: "ウルトラセブン",
            en: "UltraSeven",
          },
          first: 1967,
        },
        {
          id: 3,
          type: "base",
          name: {
            zh: "杰克奥特曼",
            jp: "ウルトラマンジャック",
            en: "Ultraman Jack",
          },
          first: 1971,
        },
        {
          id: 4,
          type: "base",
          name: {
            zh: "艾斯奥特曼",
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
            zh: "泰罗奥特曼",
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
            zh: "雷欧奥特曼",
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
            zh: "乔尼亚斯奥特曼",
            jp: "ウルトラマンジョーニアス",
            en: "Ultraman Joneus",
          },
          first: 1979,
        },
        {
          id: 12,
          type: "base",
          name: {
            zh: "爱迪奥特曼",
            jp: "ウルトラマン80",
            en: "Ultraman 80",
          },
          first: 1980,
        },
        {
          id: 13,
          type: "base",
          name: {
            zh: "尤莉安奥特曼",
            jp: "ユリアン",
            en: "Yullian",
          },
          first: 1981,
        },
        {
          id: 14,
          type: "base",
          name: {
            zh: "史考特奥特曼",
            jp: "ウルトラマンスコット",
            en: "Ultraman Scott",
          },
          first: 1987,
        },
        {
          id: 15,
          type: "base",
          name: {
            zh: "察克奥特曼",
            jp: "ウルトラマンチャック",
            en: "Ultraman Chuck",
          },
          first: 1987,
        },
        {
          id: 16,
          type: "base",
          name: {
            zh: "贝斯奥特曼",
            jp: "ウルトラウーマンベス",
            en: "Ultrawoman Beth",
          },
          first: 1989,
        },
        {
          id: 17,
          type: "base",
          name: {
            zh: "葛雷奥特曼",
            jp: "ウルトラマンG（グレート）",
            en: "Ultraman Great",
          },
          first: 1990,
        },
        {
          id: 18,
          type: "base",
          name: {
            zh: "帕瓦特奥特曼",
            jp: "ウルトラマンパワード",
            en: "Ultraman Powered",
          },
          first: 1993,
        },
        {
          id: 19,
          type: "base",
          name: {
            zh: "哉阿斯奥特曼",
            jp: "ウルトラマンゼアス",
            en: "Ultraman Zearth",
          },
          first: 1996,
        },
        {
          id: 20,
          type: "base",
          name: {
            zh: "迪迦奥特曼复合型",
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
            zh: "迪迦奥特曼强力型",
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
            zh: "迪迦奥特曼空中型",
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
            zh: "迪迦奥特曼龙卷型",
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
            zh: "迪迦奥特曼爆裂型",
            jp: "ウルトラマンティガ",
            en: "Tiga Blast",
          },
          first: 2000,
        },
        {
          id: 27,
          type: "base",
          name: {
            zh: "戴拿奥特曼闪亮型",
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
            zh: "戴拿奥特曼强壮型",
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
            zh: "戴拿奥特曼奇迹型",
            jp: "ウルトラマンダイナ",
            en: "Ultraman Dyna Miracle Type",
          },
          first: 1997,
        },
        {
          id: 30,
          type: "base",
          name: {
            zh: "盖亚奥特曼",
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
            zh: "盖亚奥特曼V2",
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
            zh: "盖亚奥特曼至高型",
            jp: "ウルトラマンガイア",
            en: "Ultraman Gaia Supreme Version",
          },
          first: 1998,
        },
        {
          id: 33,
          type: "base",
          name: {
            zh: "阿古茹奥特曼",
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
            zh: "阿古茹奥特曼V2",
            jp: "ウルトラマンアグル",
            en: "Ultraman Agul Version 2",
          },
          first: 1998,
        },
        {
          id: 35,
          type: "base",
          name: {
            zh: "纳伊斯奥特曼",
            jp: "ウルトラマンナイス",
            en: "ULTRAMAN NICE",
          },
          first: 1999,
        },
        {
          id: 36,
          type: "base",
          name: {
            zh: "奈欧斯奥特曼",
            jp: "ウルトラマンネオス",
            en: "ULTRAMAN NEOS",
          },
          first: 2000,
        },
        {
          id: 37,
          type: "base",
          name: {
            zh: "赛文21奥特曼",
            jp: "ウルトラセブン·21",
            en: "ULTRASEVEN21",
          },
          first: 2000,
        },
        {
          id: 38,
          type: "base",
          name: {
            zh: "高斯奥特曼月神模式",
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
            zh: "高斯奥特曼日冕模式",
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
            zh: "高斯奥特曼日蚀模式",
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
            zh: "高斯奥特曼宇宙日冕模式",
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
            zh: "高斯奥特曼宇宙未来模式",
            jp: "ウルトラマンコスモス",
            en: "Ultraman Cosmos",
          },
          first: 2001,
        },
        {
          id: 43,
          type: "base",
          name: {
            zh: "杰斯提斯奥特曼",
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
            zh: "杰斯提斯奥特曼强力形态",
            jp: "ウルトラマンジャスティス",
            en: "UItraman Justice",
          },
          first: 2002,
        },
        {
          id: 45,
          type: "base",
          name: {
            zh: "博伊奥特曼",
            jp: "ウルトラマンボーイ",
            en: "ULTRAMAN BOY",
          },
          first: 2003,
        },
        {
          id: 46,
          type: "base",
          name: {
            zh: "奈克赛斯奥特曼",
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
            zh: "奈克斯特奥特曼（幼年体）",
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
            zh: "奈克斯特奥特曼（青年体）",
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
            zh: "奈克斯特奥特曼青年形态",
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
            zh: "奈克斯特奥特曼蓝色青年形态",
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
            zh: "诺亚奥特曼",
            jp: "ウルトラマンノア",
            en: "Ultraman Noa",
          },
          first: 2005,
        },
        {
          id: 52,
          type: "base",
          name: {
            zh: "麦克斯奥特曼",
            jp: "ウルトラマンマックス",
            en: "Ultraman Max",
          },
          first: 2005,
        },
        {
          id: 53,
          type: "base",
          name: {
            zh: "杰诺奥特曼",
            jp: "ウルトラマンゼノン",
            en: "Ultraman Xenon",
          },
          first: 2005,
        },
        {
          id: 54,
          type: "base",
          name: {
            zh: "梦比优斯奥特曼",
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
            zh: "希卡利奥特曼",
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
            zh: "贝利亚奥特曼 早期形态",
            jp: "ウルトラマンベリアル アーリースタイル",
            en: "Ultraman Belial Early Style",
          },
          first: 2009,
        },
        {
          id: 62,
          type: "base",
          name: {
            zh: "赛罗奥特曼",
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
            zh: "赛罗奥特曼闪耀形态",
            jp: "シャイニングウルトラマンゼロ",
            en: "Shining Ultraman Zero",
          },
          first: 2009,
        },
        {
          id: 65,
          type: "base",
          name: {
            zh: "银河奥特曼",
            jp: "ウルトラマンギンガ",
            en: "Ultraman Ginga",
          },
          first: 2013,
        },
        {
          id: 66,
          type: "base",
          name: {
            zh: "维克特利奥特曼",
            jp: "ウルトラマンビクトリー",
            en: "Ultraman Victory",
          },
          first: 2014,
        },
        {
          id: 67,
          type: "base",
          name: {
            zh: "艾克斯奥特曼",
            jp: "ウルトラマンX",
            en: "Ultraman X",
          },
          first: 2015,
        },
        {
          id: 68,
          type: "base",
          name: {
            zh: "欧布奥特曼 原生形态",
            jp: "オーブオリジン",
            en: "Ultraman Orb Origin",
          },
          first: 2016,
        },
        {
          id: 69,
          type: "form",
          formId: 68,
          name: {
            zh: "欧布奥特曼 初始形态",
            jp: "オリジン・ザ・ファースト",
            en: "Origin The First",
          },
          first: 2016,
        },
        { id: 70 },
        {
          id: 71,
          type: "base",
          name: {
            zh: "捷德奥特曼 原初形态",
            jp: "ウルトラマンジード",
            en: "Original Form",
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
            zh: "泰迦奥特曼",
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
            zh: "泰迦奥特曼光子地球形态",
            jp: "フォトンアース",
            en: "Ultraman Taiga Photon-Earth",
          },
          first: 2019,
        },
        {
          id: 79,
          type: "base",
          name: {
            zh: "泰塔斯奥特曼",
            jp: "ウルトラマンタイタス",
            en: "Ultraman Titas",
          },
          first: 2019,
        },
        {
          id: 80,
          type: "base",
          name: {
            zh: "风马奥特曼",
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
        },
        {
          id: 85,
          type: "fusion",
          fusionArr: [54, 1, 0, 2, 3, 4, 6],
          name: {
            zh: "梦比优斯无限形态",
            jp: "メビウスインフィニティー",
            en: "Mebius Infinity",
          },
          first: 2006,
        },
        {
          id: 86,
          type: "fusion",
          fusionArr: [62, 27, 39],
          name: {
            zh: "赛罗奥特曼·强壮日冕型",
            jp: "ストロングコロナゼロ",
            en: "Strong Corona Zero",
          },
          first: 2012,
        },
        {
          id: 87,
          type: "fusion",
          fusionArr: [62, 27, 38],
          name: {
            zh: "赛罗奥特曼·月神奇迹型",
            jp: "ルナミラクルゼロ",
            en: "Luna-Miracle Zero",
          },
          first: 2012,
        },
        {
          id: 88,
          type: "fusion",
          fusionArr: [62, 65, 70, 66, 67],
          name: {
            zh: "赛罗奥特曼 无限形态",
            jp: "ゼロ ビヨンド",
            en: "Zero Beyond",
          },
          first: 2017,
        },
        {
          id: 89,
          type: "fusion",
          fusionArr: [62, 63, 64],
          name: {
            zh: "究极赛罗闪耀形态",
            jp: "ウルティメイトシャイニングゼロ",
            en: "Ultimate Shining Zero",
          },
          first: 2017,
        },
        {
          id: 90,
          type: "fusion",
          fusionArr: [65, 6],
          name: {
            zh: "银河斯特利姆奥特曼",
            jp: "ウルトラマンギンガストリウム",
            en: "Ultraman Ginga Strium",
          },
          first: 2014,
        },
        {
          id: 91,
          type: "form",
          formId: 66,
          name: {
            zh: "维克特利奥特曼 骑士形态",
            jp: "ウルトラマンビクトリーナイト",
            en: "Ultraman Victory Knight",
          },
          first: 2014,
        },
        {
          id: 92,
          type: "fusion",
          fusionArr: [65, 66],
          name: {
            zh: "银河维克特利奥特曼",
            jp: "ウルトラマンギンガビクトリー",
            en: "Ultraman Ginga Victory",
          },
          first: 2015,
        },
        {
          id: 93,
          type: "form",
          formId: 67,
          name: {
            zh: "超越艾克斯",
            jp: "エクシードX",
            en: "Exceed X",
          },
          first: 2015,
        },
        {
          id: 94,
          type: "fusion",
          fusionArr: [67, 0, 20],
          name: {
            zh: "艾克斯奥特曼 贝塔火花装甲",
            jp: "ベータスパークアーマー",
            en: "Beta Spark Armor",
          },
          first: 2015,
        },
        {
          id: 95,
          type: "fusion",
          fusionArr: [67, 63],
          name: {
            zh: "艾克斯奥特曼 究极赛罗装甲",
            jp: "ウルトラマンX",
            en: "Ultraman X",
          },
          first: 2015,
        },
        {
          id: 96,
          type: "fusion",
          fusionArr: [68, 0, 20],
          name: {
            zh: "欧布奥特曼 重光形态",
            jp: "スペシウムゼペリオン",
            en: "Spacium Zeperion",
          },
          first: 2016,
        },
        {
          id: 97,
          type: "fusion",
          fusionArr: [68, 6, 54],
          name: {
            zh: "欧布奥特曼 暴炎形态",
            jp: "バーンマイト",
            en: "Burnmite",
          },
          first: 2016,
        },
        {
          id: 98,
          type: "fusion",
          fusionArr: [68, 3, 62],
          name: {
            zh: "欧布奥特曼 疾风形态",
            jp: "ハリケーンスラッシュ",
            en: "Hurricane Slash",
          },
          first: 2016,
        },
        {
          id: 99,
          type: "fusion",
          fusionArr: [68, 1, 60],
          name: {
            zh: "欧布奥特曼 暗耀形态",
            jp: "サンダーブレスター",
            en: "Thunder Breastar",
          },
          first: 2016,
        },
        {
          id: 100,
          type: "fusion",
          fusionArr: [68, 65, 67],
          name: {
            zh: "欧布奥特曼 煌闪形态",
            jp: "ライトニングアタッカー",
            en: "Lighting Attacker",
          },
          first: 2016,
        },
        {
          id: 101,
          type: "fusion",
          fusionArr: [68, 2, 62],
          name: {
            zh: "欧布奥特曼 智勇形态",
            jp: "エメリウムスラッガー",
            en: "Emerium Slugger",
          },
          first: 2016,
        },
        {
          id: 102,
          type: "fusion",
          fusionArr: [68, 65, 66, 67],
          name: {
            zh: "欧布奥特曼 三重形态",
            jp: "オーブトリニティ",
            en: "Orb Trinity",
          },
          first: 2016,
        },
        {
          id: 103,
          type: "fusion",
          fusionArr: [71, 0, 60],
          name: {
            zh: "捷德奥特曼 原始形态",
            jp: "ウルトラマンジード",
            en: "Ultraman Geed Primitive",
          },
          first: 2017,
        },
        {
          id: 104,
          type: "fusion",
          fusionArr: [71, 2, 8],
          name: {
            zh: "捷德奥特曼 刚燃形态",
            jp: "ソリッドバーニング",
            en: "Solid Burning",
          },
          first: 2017,
        },
        {
          id: 105,
          type: "fusion",
          fusionArr: [71, 58, 38],
          name: {
            zh: "捷德奥特曼 机敏形态",
            jp: "アクロスマッシャー",
            en: "Acro Smasher",
          },
          first: 2017,
        },
        {
          id: 106,
          type: "fusion",
          fusionArr: [71, 62, 5],
          name: {
            zh: "捷德奥特曼 豪勇形态",
            jp: "マグニフィセント",
            en: "Magnificent",
          },
          first: 2017,
        },
        {
          id: 107,
          type: "fusion",
          fusionArr: [71, 60, 10],
          name: {
            zh: "捷德奥特曼 尊皇形态",
            jp: "ロイヤルメガマスター",
            en: "Royal Mega-Master",
          },
          first: 2017,
        },
        {
          id: 108,
          type: "form",
          formId: 71,
          name: {
            zh: "捷德奥特曼 终极形态",
            jp: "ウルティメイトファイナル",
            en: "Ultimate Final",
          },
          first: 2017,
        },
        {
          id: 109,
          type: "fusion",
          fusionArr: [71, 65, 67, 70],
          name: {
            zh: "捷德奥特曼 银河初升",
            jp: "ギャラクシーライジング",
            en: "Galaxy Rising",
          },
          first: 2020,
        },
        {
          id: 110,
          type: "fusion",
          fusionArr: [72, 65],
          name: {
            zh: "罗索奥特曼 跃水形态",
            jp: "アクア",
            en: "Aqua",
          },
          first: 2018,
        },
        {
          id: 111,
          type: "fusion",
          fusionArr: [72, 20],
          name: {
            zh: "罗索奥特曼 旋风形态",
            jp: "ウィンド",
            en: "Wind",
          },
          first: 2018,
        },
        {
          id: 112,
          type: "fusion",
          fusionArr: [72, 66],
          name: {
            zh: "罗索奥特曼 大地形态",
            jp: "グランド",
            en: "Ground",
          },
          first: 2018,
        },
        {
          id: 113,
          type: "fusion",
          fusionArr: [73, 6],
          name: {
            zh: "布鲁奥特曼 烈火形态",
            jp: "フレイム",
            en: "Flame",
          },
          first: 2018,
        },
        {
          id: 114,
          type: "fusion",
          fusionArr: [73, 20],
          name: {
            zh: "布鲁奥特曼 旋风形态",
            jp: "ウィンド",
            en: "Wind",
          },
          first: 2018,
        },
        {
          id: 115,
          type: "fusion",
          fusionArr: [73, 66],
          name: {
            zh: "布鲁奥特曼 大地形态",
            jp: "グランド",
            en: "Ground",
          },
          first: 2018,
        },
        {
          id: 116,
          type: "fusion",
          fusionArr: [72, 73],
          name: {
            zh: "罗布奥特曼",
            jp: "ウルトラマンルーブ",
            en: "Ultraman Ruebu",
          },
          first: 2018,
        },
        {
          id: 117,
          type: "fusion",
          fusionArr: [72, 73, 74],
          name: {
            zh: "格罗布奥特曼",
            jp: "ウルトラマングルーブ",
            en: "Ultraman Gruebe",
          },
          first: 2019,
        },
        {
          id: 118,
          type: "fusion",
          fusionArr: [77, 79, 80],
          name: {
            zh: "泰迦奥特曼 三重斯特利姆形态",
            jp: "トライストリウム",
            en: "Tri-Strium",
          },
          first: 2019,
        },
        {
          id: 119,
          type: "fusion",
          fusionArr: [81, 62, 2, 8],
          name: {
            zh: "泽塔奥特曼 阿尔法装甲",
            jp: "アルファエッジ",
            en: "Alpha Edge",
          },
          first: 2020,
        },
        {
          id: 120,
          type: "fusion",
          fusionArr: [81, 0, 4, 6],
          name: {
            zh: "泽塔奥特曼 贝塔冲击",
            jp: "ベータスマッシュ",
            en: "Beta Smash",
          },
          first: 2020,
        },
        {
          id: 121,
          type: "fusion",
          fusionArr: [81, 20, 27, 30],
          name: {
            zh: "泽塔奥特曼 伽马未来",
            jp: "ガンマフューチャー",
            en: "Gamma Future",
          },
          first: 2020,
        },
        {
          id: 122,
          type: "fusion",
          fusionArr: [81, 71, 88, 123],
          name: {
            zh: "泽塔奥特曼 德尔塔天爪",
            jp: "デルタライズクロー",
            en: "Delta Rise Claw",
          },
          first: 2020,
        },
        {
          id: 123,
          type: "form",
          formId: 60,
          name: {
            zh: "极恶贝利亚",
            jp: "ンベリアルアトロシアス",
            en: "Belial Atrocious",
          },
          first: 2017,
        },
        {
          id: 124,
          type: "fusion",
          fusionArr: [65, 66, 67, 68, 71, 72, 73, 74, 77, 79, 80],
          name: {
            zh: "令迦奥特曼",
            jp: "ウルトラマンレイガ",
            en: "Ultraman Reiga",
          },
          first: 2020,
        },
        {
          id: 125,
          type: "base",
          name: {
            zh: "利布特奥特曼",
            jp: "ウルトラマンリブット",
            en: "Ultraman Ribut",
          },
          first: 2014,
        },
        {
          id: 126,
          type: "fusion",
          fusionArr: [62, 27, 38],
          name: {
            zh: "赛迦奥特曼",
            jp: "ウルトラマンサーガ",
            en: "Ultraman Saga",
          },
          first: 2012,
        },
        {
          id: 127,
          type: "fusion",
          fusionArr: [38, 27],
          name: {
            zh: "雷杰多奥特曼",
            jp: "ウルトラマンレジェンド",
            en: "Ultraman Legend",
          },
          first: 2003,
        },
      ],
      baseList: null, //基础形态列表
      nowUltra: {
        info: null, //基础信息
        form: null, //形态列表
        fusion: null, //融合列表
      },
    };
  },
  created() {
    this.baseList = this.getUltraByType(null, "base");
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
      let arr = [];
      switch (type) {
        case "base":
        default:
          this.ultraman.forEach((item, index, array) => {
            if (item.type == "base") {
              arr.push(item);
            }
          });
          break;
        case "form":
          this.ultraman.forEach((item, index, array) => {
            if (item.type == "form" && item.formId == id) {
              arr.push(this.getUltraInfo(item.id));
            }
          });
          break;
        case "fusion":
          this.ultraman.forEach((item, index, array) => {
            if (item.type == "fusion" && item.fusionArr.indexOf(id) != -1) {
              arr.push(this.getUltraInfo(item.id));
            }
          });
          break;
      }
      return arr;
    },
    // 根据奥特曼的id获取基础信息，形态列表以及融合列表
    // 应用：查询迪迦的信息和形态和融合列表
    getInfoById(id) {
      this.nowUltra.info = this.getUltraInfo(id);
      this.nowUltra.form = this.getUltraByType(id, "form");
      this.nowUltra.fusion = this.getUltraByType(id, "fusion");
    },
  },
};
</script>
<style scoped>
.item-list {
  overflow: hidden;
  width: 70%;
  margin: 60px auto 0;
}
.item-box {
  width: 120px;
  height: 120px;
  float: left;
  background-color: #f8f8f8;
  margin: 0 5px 5px 0;
  background-size: cover;
  background-position: center;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.item-box:hover {
  opacity: 0.8;
}

.item-box .item-title {
  position: absolute;
  width: 100%;
  text-align: center;
  color: #fff;
  background-color: #1946ba;
  bottom: 0;
  font-size: 12px;
  padding: 4px;
  box-sizing: border-box;
}
.detail-box {
  overflow: hidden;
}
.box-list {
  overflow: hidden;
  margin-bottom: 20px;
}
</style>
