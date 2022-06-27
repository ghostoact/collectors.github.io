<template>
  <div>
    <div class="item-list">
      <characterItem
        v-for="ultra in baseList"
        v-bind:character="ultra"
        @click.native="getInfoById(ultra.id)"
        :key="ultra.id"
      />
    </div>
    <div
      class="detail-box"
      @click.self="closeDetail"
      v-if="isOpen && nowUltra.info != null"
    >
      <div class="detail-warp">
        <div class="close-layer" @click="closeDetail">
          <i class="iconfont icon-fanhuicopy"></i>
        </div>
        <div class="detail-info">
          <div class="detail-left">
            <img
              :src="'./static/img/ultraman/full/' + nowUltra.info.id + '.png'"
            />
          </div>
          <div class="detail-right">
            <div class="detail-title">{{ nowUltra.info.name.zh }}</div>
            <div class="detail-table">
              <div class="detail-tr">
                <div class="detail-td">身高</div>
                <div class="detail-td">{{ nowUltra.info.height }}</div>
              </div>
              <div class="detail-tr">
                <div class="detail-td">体重</div>
                <div class="detail-td">{{ nowUltra.info.weight }}</div>
              </div>
              <div class="detail-tr">
                <div class="detail-td">最大飞行速度</div>
                <div class="detail-td">{{ nowUltra.info.maxSpeed }}</div>
              </div>
              <div class="detail-tr">
                <div class="detail-td">出生地</div>
                <div class="detail-td">{{ nowUltra.info.birthPlace }}</div>
              </div>
              <div class="detail-tr">
                <div class="detail-td">登场年份</div>
                <div class="detail-td">{{ nowUltra.info.first }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="box-list" v-if="nowUltra.form.length != 0">
          <p class="box-title">型态</p>
          <characterItem
            v-for="ultra in nowUltra.form"
            v-bind:character="ultra"
            @click.native="getInfoById(ultra.id)"
            :key="ultra.id"
          />
        </div>
        <div class="box-list" v-if="nowUltra.fusion.length != 0">
          <p class="box-title">融合</p>
          <characterItem
            v-for="ultra in nowUltra.fusion"
            v-bind:character="ultra"
            @click.native="getInfoById(ultra.id)"
            :key="ultra.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 1.奥特曼列表 √
// 2.奥特曼形态列表+相关融合列表 √
// 3.周边列表 √
// 4.形态对应相关周边,例如泽塔勋章和特利迦钥匙
// 5.组合测试，选择不同的奥特曼，得出形态
// 6.本地保存当前收集信息 √
// 7.收集完成进度 √
// 8.收集常见报价，分析最低、平均和最高价 √
// 9.设置导入导出，包含收藏信息等
// 10.比价工具，可对比不同店铺相同商品的价格优惠程度，帮助决定最低价购买 √

// 类型分别有：基础 base、形态 form、融合 fusion
// 形态 form 有 formId
// 融合 fusion 有数组 fusionArr
// ultraman 数组的下标与id是对应的，不可错误

// 难题：
// 捷德：捷德的常见默认形态是融合形态，而这个融合形态没法在默认形态里展示
// 1.展示列表（常态） √
// 2.同一奥特曼形态可以互相查看 √
// 3.部分道具融合条件比较快宽松，例如罗索奥特曼默认形态

import CharacterItem from "@/components/CharacterItem";
export default {
  name: "Index",
  components: {
    CharacterItem,
  },
  data() {
    return {
      ultraman: [
        {
          id: 0,
          classic: true,
          type: "base",
          name: {
            zh: "奥特曼",
            jp: "ウルトラマン",
            en: "Ultraman",
          },
          first: 1966,
          height: 40, //米
          weight: 35000, //吨
          maxSpeed: 5, //马赫
          birthPlace: "M78星云·光之国",
        },
        {
          id: 1,
          classic: true,
          type: "base",
          name: {
            zh: "佐菲",
            jp: "ゾフィー",
            en: "Zoffy",
          },
          first: 1967,
          height: 45, //米
          weight: 45000, //吨
          maxSpeed: 10, //马赫
          birthPlace: "M78星云·光之国",
        },
        {
          id: 2,
          classic: true,
          type: "base",
          name: {
            zh: "奥特赛文",
            jp: "ウルトラセブン",
            en: "UltraSeven",
          },
          first: 1967,
          height: 40, //米
          weight: 35000, //吨
          maxSpeed: 7, //马赫
          birthPlace: "M78星云·光之国",
        },
        {
          id: 3,
          classic: true,
          type: "base",
          name: {
            zh: "杰克奥特曼",
            jp: "ウルトラマンジャック",
            en: "Ultraman Jack",
          },
          first: 1971,
          height: 40, //米
          weight: 35000, //吨
          maxSpeed: 5, //马赫
          birthPlace: "M78星云·光之国",
        },
        {
          id: 4,
          classic: true,
          type: "base",
          name: {
            zh: "艾斯奥特曼",
            jp: "ウルトラマンエース",
            en: "Ultraman Ace",
          },
          first: 1972,
          height: 40, //米
          weight: 45000, //吨
          maxSpeed: 20, //马赫
          birthPlace: "M78星云·光之国",
        },
        {
          id: 5,
          classic: true,
          type: "base",
          name: {
            zh: "奥特之父",
            jp: "ウルトラの父",
            en: "Father of Ultra",
          },
          first: 1972,
          height: 45, //米
          weight: 50000, //吨
          maxSpeed: 15, //马赫
          birthPlace: "M78星云·光之国",
        },
        {
          id: 6,
          classic: true,
          type: "base",
          name: {
            zh: "泰罗奥特曼",
            jp: "ウルトラマンタロウ",
            en: "Ultraman Taro",
          },
          first: 1973,
          height: 53, //米
          weight: 55000, //吨
          maxSpeed: 20, //马赫
          birthPlace: "M78星云·光之国",
        },
        {
          id: 7,
          classic: true,
          type: "base",
          name: {
            zh: "奥特之母",
            jp: "ウルトラの母",
            en: "Mother of Ultra",
          },
          first: 1973,
          height: 40, //米
          weight: 32000, //吨
          maxSpeed: 10, //马赫
          birthPlace: "M78星云·光之国",
        },
        {
          id: 8,
          classic: true,
          type: "base",
          name: {
            zh: "雷欧奥特曼",
            jp: "ウルトラマンレオ",
            en: "Ultraman Leo",
          },
          first: 1974,
          height: 52, //米
          weight: 48000, //吨
          maxSpeed: 7, //马赫
          birthPlace: "狮子座·L77星球",
        },
        {
          id: 9,
          classic: true,
          type: "base",
          name: {
            zh: "阿斯特拉",
            jp: "アストラ",
            en: "Astra",
          },
          first: 1974,
          height: 50, //米
          weight: 49000, //吨
          maxSpeed: 20, //马赫
          birthPlace: "狮子座·L77星球",
        },
        {
          id: 10,
          classic: true,
          type: "base",
          name: {
            zh: "奥特之王",
            jp: "ウルトラマンキング",
            en: "Ultraman King",
          },
          first: 1974,
          height: 58, //米
          weight: 56000, //吨
          maxSpeed: 20, //马赫
          birthPlace: "不明",
        },
        {
          id: 11,
          classic: true,
          type: "base",
          name: {
            zh: "乔尼亚斯奥特曼",
            jp: "ウルトラマンジョーニアス",
            en: "Ultraman Joneus",
          },
          first: 1979,
          height: 70, //米
          weight: 50000, //吨
          maxSpeed: 8, //马赫
          birthPlace: "U40",
        },
        {
          id: 12,
          classic: true,
          type: "base",
          name: {
            zh: "爱迪奥特曼",
            jp: "ウルトラマン80",
            en: "Ultraman 80",
          },
          first: 1980,
          height: 50, //米
          weight: 44000, //吨
          maxSpeed: 9, //马赫
          birthPlace: "M78星云·光之国",
        },
        {
          id: 13,
          classic: true,
          type: "base",
          name: {
            zh: "尤莉安奥特曼",
            jp: "ユリアン",
            en: "Yullian",
          },
          first: 1981,
          height: 47, //米
          weight: 36000, //吨
          maxSpeed: 7.7, //马赫
          birthPlace: "M78星云·光之国",
        },
        {
          id: 14,
          classic: true,
          type: "base",
          name: {
            zh: "史考特奥特曼",
            jp: "ウルトラマンスコット",
            en: "Ultraman Scott",
          },
          first: 1989,
          height: 82, //米
          weight: 64000, //吨
          maxSpeed: 24, //马赫
          birthPlace: "M78星云·阿尔塔拉行星",
        },
        {
          id: 15,
          classic: true,
          type: "base",
          name: {
            zh: "察克奥特曼",
            jp: "ウルトラマンチャック",
            en: "Ultraman Chuck",
          },
          first: 1989,
          height: 79, //米
          weight: 68000, //吨
          maxSpeed: 24, //马赫
          birthPlace: "M78星云·阿尔塔拉行星",
        },
        {
          id: 16,
          classic: true,
          type: "base",
          name: {
            zh: "贝斯奥特曼",
            jp: "ウルトラウーマンベス",
            en: "Ultrawoman Beth",
          },
          first: 1989,
          height: 76, //米
          weight: 54000, //吨
          maxSpeed: 24, //马赫
          birthPlace: "M78星云·阿尔塔拉行星",
        },
        {
          id: 17,
          classic: true,
          type: "base",
          name: {
            zh: "葛雷奥特曼",
            jp: "ウルトラマンG（グレート）",
            en: "Ultraman Great",
          },
          first: 1990,
          height: 60, //米
          weight: 58000, //吨
          maxSpeed: 26, //马赫
          birthPlace: "M78星云·光之国",
        },
        {
          id: 18,
          classic: true,
          type: "base",
          name: {
            zh: "帕瓦特奥特曼",
            jp: "ウルトラマンパワード",
            en: "Ultraman Powered",
          },
          first: 1993,
          height: 55, //米
          weight: 58000, //吨
          maxSpeed: 27, //马赫
          birthPlace: "M78星云·光之国",
        },
        {
          id: 19,
          classic: true,
          type: "base",
          name: {
            zh: "哉阿斯奥特曼",
            jp: "ウルトラマンゼアス",
            en: "Ultraman Zearth",
          },
          first: 1996,
          height: 60, //米
          weight: 54540, //吨
          maxSpeed: 19.9, //马赫
          birthPlace: "Z95星云",
        },
        {
          id: 20,
          classic: true,
          type: "base",
          formId: 20,
          name: {
            zh: "迪迦奥特曼 复合型",
            jp: "ウルトラマンティガ",
            en: "Ultraman Tiga",
          },
          first: 1996,
          height: 53, //米
          weight: 44000, //吨
          maxSpeed: 5, //马赫
          birthPlace: "不明",
        },
        {
          id: 21,
          type: "form",
          formId: 20,
          name: {
            zh: "迪迦奥特曼 强力型",
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
            zh: "迪迦奥特曼 空中型",
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
            zh: "迪迦奥特曼 龙卷型",
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
            zh: "迪迦奥特曼 爆裂型",
            jp: "ウルトラマンティガ",
            en: "Tiga Blast",
          },
          first: 2000,
        },
        {
          id: 27,
          classic: true,
          type: "base",
          formId: 27,
          name: {
            zh: "戴拿奥特曼 闪亮型",
            jp: "ウルトラマンダイナ",
            en: "Ultraman Dyna Flash Type",
          },
          first: 1997,
          height: 55, //米
          weight: 45000, //吨
          maxSpeed: 8, //马赫
          birthPlace: "不明",
        },
        {
          id: 28,
          type: "form",
          formId: 27,
          name: {
            zh: "戴拿奥特曼 强壮型",
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
            zh: "戴拿奥特曼 奇迹型",
            jp: "ウルトラマンダイナ",
            en: "Ultraman Dyna Miracle Type",
          },
          first: 1997,
        },
        {
          id: 30,
          classic: true,
          type: "base",
          formId: 30,
          name: {
            zh: "盖亚奥特曼 V2",
            jp: "ウルトラマンガイア",
            en: "Ultraman Gaia Version 2",
          },
          first: 1998,
          height: 50, //米
          weight: 42000, //吨
          maxSpeed: 20, //马赫
          birthPlace: "地球",
        },
        {
          id: 31,
          type: "form",
          formId: 30,
          name: {
            zh: "盖亚奥特曼",
            jp: "ウルトラマンガイア",
            en: "Ultraman Gaia",
          },
          first: 1998,
        },
        {
          id: 32,
          type: "form",
          formId: 30,
          name: {
            zh: "盖亚奥特曼 至高型",
            jp: "ウルトラマンガイア",
            en: "Ultraman Gaia Supreme Version",
          },
          first: 1998,
        },
        {
          id: 33,
          classic: true,
          type: "base",
          formId: 33,
          name: {
            zh: "阿古茹奥特曼 V2",
            jp: "ウルトラマンアグル",
            en: "Ultraman Agul Version 2",
          },
          first: 1998,
          height: 52, //米
          weight: 46000, //吨
          maxSpeed: 23, //马赫
          birthPlace: "地球",
        },
        {
          id: 34,
          type: "form",
          formId: 33,
          name: {
            zh: "阿古茹奥特曼",
            jp: "ウルトラマンアグル",
            en: "Ultraman Agul",
          },
          first: 1998,
        },
        {
          id: 35,
          classic: true,
          type: "base",
          name: {
            zh: "纳伊斯奥特曼",
            jp: "ウルトラマンナイス",
            en: "ULTRAMAN NICE",
          },
          first: 1999,
          height: 39, //米
          weight: 39000, //吨
          maxSpeed: 3.9, //马赫
          birthPlace: "M78星云·TOY1号星球",
        },
        {
          id: 36,
          classic: true,
          type: "base",
          name: {
            zh: "奈欧斯奥特曼",
            jp: "ウルトラマンネオス",
            en: "ULTRAMAN NEOS",
          },
          first: 1995,
          height: 58, //米
          weight: 59000, //吨
          maxSpeed: 30, //马赫
          birthPlace: "M78星云·光之国",
        },
        {
          id: 37,
          classic: true,
          type: "base",
          name: {
            zh: "赛文21奥特曼",
            jp: "ウルトラセブン·21",
            en: "ULTRASEVEN21",
          },
          first: 1995,
          height: 56, //米
          weight: 57000, //吨
          maxSpeed: 26, //马赫
          birthPlace: "M78星云·光之国",
        },
        {
          id: 38,
          classic: true,
          type: "base",
          formId: 38,
          name: {
            zh: "高斯奥特曼 月神模式",
            jp: "ウルトラマンコスモス",
            en: "Ultraman Cosmos",
          },
          first: 2001,
          height: 47, //米
          weight: 42000, //吨
          maxSpeed: 7, //马赫
          birthPlace: "不明",
        },
        {
          id: 39,
          type: "form",
          formId: 38,
          name: {
            zh: "高斯奥特曼 日冕模式",
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
            zh: "高斯奥特曼 日蚀模式",
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
            zh: "高斯奥特曼 宇宙日冕模式",
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
            zh: "高斯奥特曼 未来模式",
            jp: "ウルトラマンコスモス",
            en: "Ultraman Cosmos",
          },
          first: 2001,
        },
        {
          id: 43,
          classic: true,
          type: "base",
          formId: 43,
          name: {
            zh: "杰斯提斯奥特曼 标准模式",
            jp: "ウルトラマンジャスティス",
            en: "UItraman Justice",
          },
          first: 2002,
          height: 46, //米
          weight: 41000, //吨
          maxSpeed: 13, //马赫
          birthPlace: "不明",
        },
        {
          id: 44,
          type: "form",
          formId: 43,
          name: {
            zh: "杰斯提斯奥特曼 粉碎模式",
            jp: "ウルトラマンジャスティス",
            en: "UItraman Justice",
          },
          first: 2002,
        },
        {
          id: 45,
          classic: true,
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
          classic: true,
          type: "base",
          formId: 46,
          name: {
            zh: "奈克赛斯奥特曼",
            jp: "ウルトラマンネクサス",
            en: "Ultraman Nexus",
          },
          first: 2004,
          height: 49, //米
          weight: 40000, //吨
          maxSpeed: 3, //马赫
          birthPlace: "不明",
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
            zh: "奈克赛斯奥特曼 青年形态",
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
            zh: "奈克赛斯奥特曼 蓝色青年形态",
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
          classic: true,
          type: "base",
          name: {
            zh: "麦克斯奥特曼",
            jp: "ウルトラマンマックス",
            en: "Ultraman Max",
          },
          first: 2005,
          height: 48, //米
          weight: 37000, //吨
          maxSpeed: 9.99, //马赫
          birthPlace: "M78星云·光之国",
        },
        {
          id: 53,
          classic: true,
          type: "base",
          name: {
            zh: "杰诺奥特曼",
            jp: "ウルトラマンゼノン",
            en: "Ultraman Xenon",
          },
          first: 2005,
          height: 47, //米
          weight: 36000, //吨
          maxSpeed: 7.7, //马赫
          birthPlace: "M78星云·光之国",
        },
        {
          id: 54,
          classic: true,
          type: "base",
          formId: 54,
          name: {
            zh: "梦比优斯奥特曼",
            jp: "ウルトラマンメビウス",
            en: "Ultraman Mebius",
          },
          first: 2006,
          height: 49, //米
          weight: 35000, //吨
          maxSpeed: 10, //马赫
          birthPlace: "M78星云·光之国",
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
          classic: true,
          type: "base",
          name: {
            zh: "希卡利奥特曼",
            jp: "ウルトラマンヒカリ",
            en: "UItraman Hikari",
          },
          first: 2006,
          height: 50, //米
          weight: 35000, //吨
          maxSpeed: 10, //马赫
          birthPlace: "M78星云·光之国",
        },
        {
          id: 59,
          classic: true,
          type: "base",
          name: {
            zh: "奥特赛文X",
            jp: "ウルトラセブン X",
            en: "Ultra Seven X",
          },
          first: 2007,
        },
        {
          id: 60,
          classic: true,
          type: "base",
          formId: 60,
          name: {
            zh: "贝利亚奥特曼",
            jp: "ウルトラマンベリアル",
            en: "Ultraman Belial",
          },
          first: 2009,
          height: 55, //米
          weight: 60000, //吨
          maxSpeed: null, //马赫
          birthPlace: "M78星云·光之国",
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
          classic: true,
          type: "base",
          formId: 62,
          name: {
            zh: "赛罗奥特曼",
            jp: "ウルトラマンゼロ",
            en: "Ultraman Zero",
          },
          first: 2009,
          height: 49, //米
          weight: 35000, //吨
          maxSpeed: 7, //马赫
          birthPlace: "M78星云·光之国",
        },
        {
          id: 63,
          type: "form",
          formId: 62,
          name: {
            zh: "究极赛罗",
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
            zh: "光辉赛罗",
            jp: "シャイニングウルトラマンゼロ",
            en: "Shining Ultraman Zero",
          },
          first: 2009,
        },
        {
          id: 65,
          classic: true,
          type: "base",
          name: {
            zh: "银河奥特曼",
            jp: "ウルトラマンギンガ",
            en: "Ultraman Ginga",
          },
          first: 2013,
          height: "无限", //米
          weight: "无限", //吨
          maxSpeed: null, //马赫
          birthPlace: "未来",
        },
        {
          id: 66,
          classic: true,
          type: "base",
          formId: 66,
          name: {
            zh: "维克特利奥特曼",
            jp: "ウルトラマンビクトリー",
            en: "Ultraman Victory",
          },
          first: 2014,
          height: "无限", //米
          weight: "无限", //吨
          maxSpeed: null, //马赫
          birthPlace: null,
        },
        {
          id: 67,
          classic: true,
          type: "base",
          formId: 67,
          name: {
            zh: "艾克斯奥特曼",
            jp: "ウルトラマンX",
            en: "Ultraman X",
          },
          first: 2015,
          height: 45, //米
          weight: 35000, //吨
          maxSpeed: null, //马赫
          birthPlace: null,
        },
        {
          id: 68,
          classic: true,
          type: "base",
          formId: 68,
          name: {
            zh: "欧布奥特曼 原生形态",
            jp: "オーブオリジン",
            en: "Ultraman Orb Origin",
          },
          first: 2016,
          height: 50, //米
          weight: 50000, //吨
          maxSpeed: null, //马赫
          birthPlace: "行星O-50",
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
        {
          id: 70,
          classic: true,
          type: "base",
          name: {
            zh: "利布特奥特曼",
            jp: "ウルトラマンリブット",
            en: "Ultraman Ribut",
          },
          first: 2014,
          height: 40, //米
          weight: 40000, //吨
          maxSpeed: 9, //马赫
          birthPlace: "M78星云·光之国",
        },
        {
          id: 71,
          classic: true,
          type: "fusion",
          formId: 71,
          fusionArr: [71, 0, 60],
          name: {
            zh: "捷德奥特曼 原始形态",
            jp: "ウルトラマンジード",
            en: "Ultraman Geed Primitive",
          },
          first: 2017,
        },
        {
          id: 72,
          classic: true,
          type: "fusion",
          fusionArr: [72, 6],
          name: {
            zh: "罗索奥特曼 烈火形态",
            jp: "ウルトラマンロッソ",
            en: "Ultraman Rosso",
          },
          first: 2018,
          height: 52, //米
          weight: 45000, //吨
          maxSpeed: null, //马赫
          birthPlace: null,
        },
        {
          id: 73,
          classic: true,
          type: "fusion",
          fusionArr: [73, 65],
          name: {
            zh: "布鲁奥特曼 跃水形态",
            jp: "ウルトラマンブル",
            en: "Ultraman Blu",
          },
          first: 2018,
          height: 51, //米
          weight: 43000, //吨
          maxSpeed: null, //马赫
          birthPlace: null,
        },
        {
          id: 74,
          classic: true,
          type: "base",
          name: {
            zh: "格丽乔奥特曼",
            jp: "ウルトラウーマングリージョ",
            en: "Ultrawoman Grigio",
          },
          first: 2019,
          height: 43, //米
          weight: 30000, //吨
          maxSpeed: null, //马赫
          birthPlace: null,
        },
        {
          id: 75,
          classic: true,
          type: "base",
          formId: 75,
          name: {
            zh: "托雷基亚奥特曼",
            jp: "ウルトラマントレギア",
            en: "Ultraman Tregear",
          },
          first: 2019,
          height: 50, //米
          weight: 37000, //吨
          maxSpeed: 9.9, //马赫
          birthPlace: "M78星云·光之国",
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
          classic: true,
          type: "base",
          formId: 77,
          name: {
            zh: "泰迦奥特曼",
            jp: "ウルトラマンタイガ",
            en: "Ultraman Taiga",
          },
          first: 2019,
          height: 50, //米
          weight: 55000, //吨
          maxSpeed: 15, //马赫
          birthPlace: "M78星云·光之国",
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
          classic: true,
          type: "base",
          name: {
            zh: "泰塔斯奥特曼",
            jp: "ウルトラマンタイタス",
            en: "Ultraman Titas",
          },
          first: 2019,
          height: 55, //米
          weight: 50000, //吨
          maxSpeed: 7, //马赫
          birthPlace: "U-40",
        },
        {
          id: 80,
          classic: true,
          type: "base",
          name: {
            zh: "风马奥特曼",
            jp: "ウルトラマンフーマ",
            en: "Ultraman Fuma",
          },
          first: 2019,
          height: 48, //米
          weight: 25000, //吨
          maxSpeed: 15, //马赫
          birthPlace: "O-50行星·战士之巅",
        },
        {
          id: 81,
          classic: true,
          type: "base",
          name: {
            zh: "泽塔奥特曼",
            jp: "ウルトラマンゼット",
            en: "Ultraman Z",
          },
          first: 2020,
          height: 52, //米
          weight: 33000, //吨
          maxSpeed: null, //马赫
          birthPlace: null,
        },
        {
          id: 82,
          classic: true,
          type: "base",
          formId: 82,
          name: {
            zh: "特利迦奥特曼 复合型",
            jp: "ウルトラマントリガー",
            en: "Ultraman Trigger",
          },
          first: 2021,
          height: 53, //米
          weight: 44000, //吨
          maxSpeed: 5, //马赫
          birthPlace: "不明",
        },
        {
          id: 83,
          type: "form",
          formId: 82,
          name: {
            zh: "特利迦奥特曼 强力型",
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
            zh: "特利迦奥特曼 空中型",
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
            zh: "赛罗奥特曼 强壮日冕型",
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
            zh: "赛罗奥特曼 月神奇迹型",
            jp: "ルナミラクルゼロ",
            en: "Luna-Miracle Zero",
          },
          first: 2012,
        },
        {
          id: 88,
          type: "fusion",
          fusionArr: [62, 65, 68, 66, 67],
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
            zh: "究极赛罗 闪耀形态",
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
          height: "无限", //米
          weight: "无限", //吨
          maxSpeed: null, //马赫
          birthPlace: null,
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
          type: "form",
          formId: 71,
          name: {
            zh: "捷德奥特曼 原初形态",
            jp: "ウルトラマンジード",
            en: "Original Form",
          },
          first: 2017,
          height: 51, //米
          weight: null, //吨
          maxSpeed: 9, //马赫
          birthPlace: null,
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
          fusionArr: [71, 65, 67, 68],
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
          type: "fusion",
          fusionArr: [60],
          name: {
            zh: "极恶 贝利亚",
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
          type: "form",
          formId: 33,
          name: {
            zh: "阿古茹奥特曼 至高型",
            jp: "ウルトラマンアグル",
            en: "Ultraman Agul Supreme Version",
          },
          first: 2021,
          height: null,
          weight: null,
          maxSpeed: "",
          birthPlace: "",
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
          height: 58, //米
          weight: 45000, //吨
          maxSpeed: "无法测量", //马赫
          birthPlace: "无",
        },
        {
          id: 127,
          type: "fusion",
          fusionArr: [38, 43],
          name: {
            zh: "雷杰多奥特曼",
            jp: "ウルトラマンレジェンド",
            en: "Ultraman Legend",
          },
          first: 2003,
          height: 50, //米
          weight: 50000, //吨
          maxSpeed: 35, //马赫
          birthPlace: "无",
        },
        {
          id: 128,
          classic: true,
          type: "base",
          name: {
            zh: "雷古洛思奥特曼",
            jp: "ウルトラマンレグロス",
            en: "Ultraman Regulos",
          },
          first: 2021,
          height: 52, //米
          weight: 47000, //吨
          maxSpeed: "", //马赫
          birthPlace: "",
        },
        {
          id: 129,
          type: "form",
          formId: 82,
          name: {
            zh: "闪耀 特利迦 永恒",
            jp: "グリッタートリガーエタニティ",
            en: "Glitter Trigger Eternity",
          },
          first: 2021,
          height: 53, //米
          weight: 44000, //吨
          maxSpeed: "", //马赫
          birthPlace: "",
        },
        {
          id: 130,
          type: "form",
          formId: 82,
          name: {
            zh: "黑暗特利迦",
            jp: "トリガーダーク",
            en: "Trigger Dark",
          },
          first: 2021,
          height: 53, //米
          weight: 44000, //吨
          maxSpeed: "", //马赫
          birthPlace: "",
        },
        {
          id: 131,
          type: "form",
          formId: 82,
          name: {
            zh: "真理特利迦",
            jp: "トリガートゥルース",
            en: "Trigger Truth",
          },
          first: 2021,
          height: 53, //米
          weight: 44000, //吨
          maxSpeed: "", //马赫
          birthPlace: "",
        },
        {
          id: 132,
          type: "form",
          formId: 82,
          name: {
            zh: "邪恶特利迦",
            jp: "イーヴィルトリガー",
            en: "Evil Trigger",
          },
          first: 2022,
          height: 54, //米
          weight: 44000, //吨
          maxSpeed: "", //马赫
          birthPlace: "",
        },
        {
          id: 133,
          type: "form",
          formId: 20,
          name: {
            zh: "邪恶迪迦",
            jp: "イーヴィルティガ",
            en: "Evil Tiga",
          },
          first: 1996,
          height: 54, //米
          weight: 44000, //吨
          maxSpeed: "", //马赫
          birthPlace: "",
        },
        {
          id: 134,
          classic: true,
          type: "base",
          formId: 134,
          name: {
            zh: "德凯奥特曼 闪亮型",
            jp: "ウルトラマンデッカー　フラッシュタイプ",
            en: "Ultraman Decker",
          },
          first: 2022,
          height: 55, //米
          weight: 45000, //吨
          maxSpeed: "", //马赫
          birthPlace: "",
        },
        {
          id: 135,
          type: "form",
          formId: 134,
          name: {
            zh: "德凯奥特曼 强壮型",
            jp: "ウルトラマンデッカー　ストロングタイプ",
            en: "Ultraman Decker",
          },
          first: 2022,
          height: 55, //米
          weight: 45000, //吨
          maxSpeed: "", //马赫
          birthPlace: "",
        },
        {
          id: 136,
          type: "form",
          formId: 134,
          name: {
            zh: "德凯奥特曼 奇迹型",
            jp: "ウルトラマンデッカー　ミラクルタイプ",
            en: "Ultraman Decker",
          },
          first: 2022,
          height: 55, //米
          weight: 45000, //吨
          maxSpeed: "", //马赫
          birthPlace: "",
        },
      ], //奥特曼数据
      baseList: null, //基础形态列表
      nowId: null, //当前ID
      nowUltra: {
        info: null, //基础信息
        form: null, //形态列表
        fusion: null, //融合列表
      },
      isOpen: false,
    };
  },
  created() {
    this.baseList = this.getClassicList().reverse();
    // reverse() 倒序方法
  },
  methods: {
    // 根据id获得该奥特曼的信息
    // 应用：获取迪迦的数据
    getUltraInfo(id) {
      return this.ultraman[id];
    },
    // 获取经典列表
    getClassicList() {
      let arr = [];
      this.ultraman.forEach((item, index, array) => {
        if (item.classic == true) {
          arr.push(item);
        }
      });
      return arr;
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
          this.ultraman.forEach((item, index, array) => {
            if (item.type == "base") {
              arr.push(item);
            }
          });
          break;
        case "form":
          this.ultraman.forEach((item, index, array) => {
            if (
              (item.type == "base" &&
                item.formId != undefined &&
                item.id == this.getUltraInfo(id).formId) ||
              (item.type != "base" &&
                item.formId != undefined &&
                item.formId == this.getUltraInfo(id).formId)
            ) {
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
        default:
          arr = this.ultraman;
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
      this.isOpen = true;
      document.documentElement.classList.add("isOpen");
    },
    // 关闭详情
    closeDetail() {
      this.isOpen = false;
      document.documentElement.classList.remove("isOpen");
    },
  },
};
</script>
<style scoped>
.detail-box {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999999;
  background-color: rgb(89 89 89 / 53%);
  -webkit-filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
  -webkit-backdrop-filter: saturate(180%) blur(8px);
  backdrop-filter: saturate(180%) blur(8px);
}
.box-list {
  overflow: hidden;
  margin-bottom: 20px;
}
.detail-warp {
  width: 925px;
  margin: 15px auto;
  background-color: #ffffffc7;
  border-radius: 6px;
  padding: 40px 20px;
  overflow-y: auto;
  max-height: calc(100% - 80px - 110px);
  min-height: 470px;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 8px;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%) scale(0.7);
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0;
  visibility: hidden;
}
.isOpen .detail-warp {
  visibility: visible;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
.detail-warp::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

@media (max-width: 1024px) {
  .detail-warp {
    width: calc(100% - 6px);
    margin: 0;
  }
}
/* 滚动条底色 */

::-webkit-scrollbar-track {
  background-color: #f8faff;
  border-radius: 20px;
}

/* 滚动条颜色 */

::-webkit-scrollbar-thumb {
  background-color: #d9d9d9;
  border-radius: 20px;
}

::-webkit-scrollbar {
  width: 4px;
  height: 8px;
  background-color: #d9d9d9;
  opacity: 0;
  border-radius: 20px;
}
.box-title {
  color: #272727;
  margin-bottom: 5px;
}
.detail-info {
  overflow: hidden;
}
.detail-left,
.detail-right {
  height: 400px;
  float: left;
}
.detail-left {
  width: 45%;
  text-align: center;
}
.detail-left img {
  max-width: 100%;
  max-height: 100%;
  display: inline-block;
}
.detail-right {
  width: 45%;
}
.detail-tr {
  height: 50px;
  line-height: 50px;
  margin-bottom: 5px;
  position: relative;
  background: rgba(255, 255, 255, 0.29);
}
.detail-tr::before {
  content: "";
  width: 0;
  height: 0;
  display: block;
  left: 0;
  top: 0;
  margin: 0 0 0 -50px;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  position: absolute;
  border-left: 50px solid transparent;
  border-bottom: 50px solid rgba(255, 255, 255, 0.29);
}
.detail-tr::after {
  content: "";
  width: 0;
  height: 0;
  display: block;
  right: 0;
  top: 0;
  margin: 0 -50px 0 0;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  position: absolute;
  border-right: 50px solid transparent;
  border-top: 50px solid rgba(255, 255, 255, 0.29);
}
.detail-td {
  height: 100%;
  float: left;
  box-sizing: border-box;
  padding-left: 18px;
  font-size: 16px;
}
.detail-tr .detail-td:first-child {
  width: 45%;
  font-weight: 600;
  /* background-color: #ffffffbf; */
}
.detail-tr .detail-td:last-child {
  width: 55%;
  /* background-color: #fffffffa; */
}
.detail-title {
  font-size: 24px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 14px;
  color: #2e2e2e;
  font-weight: 600;
}
@media (max-width: 1024px) {
  .detail-title {
    font-size: 18px;
  }
  .detail-tr {
    height: 25px;
    line-height: 25px;
  }
  .detail-tr::before {
    margin: 0 0 0 -25px;
    border-left: 25px solid transparent;
    border-bottom: 25px solid rgba(255, 255, 255, 0.29);
  }
  .detail-tr::after {
    margin: 0 -25px 0 0;
    border-right: 25px solid transparent;
    border-top: 25px solid rgba(255, 255, 255, 0.29);
  }
  .detail-td {
    font-size: 12px;
  }
  .detail-tr .detail-td:first-child {
    width: 65%;
  }
  .detail-tr .detail-td:last-child {
    width: 35%;
  }
  .detail-left,
  .detail-right {
    max-height: 350px;
    height: auto;
  }
  .detail-left {
    width: 45%;
  }
  .detail-right {
    margin-left: 10%;
    width: 40%;
  }
}
</style>
