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
            zh: "迪迦·奥特曼",
            jp: "ウルトラマンティガ",
            en: "Ultraman Tiga",
          },
          first: 1996,
        },
        {
          id: 4,
          type: "form",
          formId: 3,
          name: {
            zh: "迪迦·奥特曼强力型",
            jp: "ウルトラマンティガ",
            en: "Ultraman Tiga",
          },
          first: 1996,
        },
        {
          id: 5,
          type: "base",
          name: {
            zh: "罗索·奥特曼",
            jp: "ウルトラマンロッソ",
            en: "Ultraman Rosso",
          },
          first: 2018,
        },
        {
          id: 6,
          type: "base",
          name: {
            zh: "布鲁·奥特曼",
            jp: "ウルトラマンブル",
            en: "Ultraman Blu",
          },
          first: 2018,
        },
        {
          id: 7,
          type: "base",
          name: {
            zh: "格丽乔·奥特曼",
            jp: "ウルトラウーマングリージョ",
            en: "Ultrawoman Grigio",
          },
          first: 2018,
        },
        {
          id: 8,
          type: "fusion",
          fusionArr: [5, 6],
          name: {
            zh: "罗布·奥特曼",
            jp: "ウルトラマンルーブ",
            en: "Ultraman Ruebe",
          },
          first: 2018,
        },
        {
          id: 9,
          type: "fusion",
          fusionArr: [5, 6, 7],
          name: {
            zh: "格罗布·奥特曼",
            jp: "ウルトラマングルーブ",
            en: "Ultraman Gruebe",
          },
          first: 2019,
        },
      ],
    };
  },
  created() {
    // console.log(this.getUltraInfo(8).name.zh);
    // console.log(this.getUltraType(8));
    this.getUltraByType(7, "fusion");
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
