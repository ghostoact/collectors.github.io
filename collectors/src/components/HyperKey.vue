<template>
  <div>
    <div class="item-list">
      <PropItem v-for="hk in hyperKey" v-bind:item="hk" :key="hk.id" />
    </div>
  </div>
</template>

<script>
import PropItem from "@/components/PropItem";
export default {
  name: "HyperKey",
  components: {
    PropItem,
  },
  data() {
    return {
      hyperKey: [
        {
          id: "EX-1", //唯一ID
          type: "U", //U 奥特曼  M 怪兽  O 其它
          tag: ["限定"], //标签：限定 DX SG食玩 GP扭蛋
          name: "奥特曼55周年", //名称
          tag: 0, //关联奥特曼或怪兽实体数组
        },
        {
          id: "EX-2",
          type: "U",
          tag: ["限定"],
          name: "特利迦与泽塔",
          tag: [82, 81],
          pic: "EX-2.jpg",
        },
        {
          id: "U-01",
          type: "U",
          tag: ["DX"],
          name: "特利迦奥特曼 复合型",
          tag: [82],
        },
        {
          id: "U-02",
          type: "U",
          tag: ["DX"],
          name: "特利迦奥特曼 强力型",
          tag: [83],
        },
        {
          id: "U-03",
          type: "U",
          tag: ["DX"],
          name: "特利迦奥特曼 空中型",
          tag: [84],
        },
        {
          id: "U-04",
          type: "U",
          tag: ["DX"],
          name: "泽塔奥特曼 原始形态",
          tag: [81],
        },
        {
          id: "U-10",
          type: "U",
          tag: ["DX"],
          name: "迪迦奥特曼 复合型",
          tag: [20],
        },
        {
          id: "U-11",
          type: "U",
          tag: ["DX"],
          name: "迪迦奥特曼 强力型",
          tag: [21],
        },
        {
          id: "U-12",
          type: "U",
          tag: ["DX"],
          name: "迪迦奥特曼 空中型",
          tag: [22],
        },
        {
          id: "U-13",
          type: "U",
          tag: ["DX"],
          name: "闪耀迪迦",
          tag: [],
        },
        {
          id: "M-01",
          type: "M",
          tag: ["SG"],
          name: "哥莫拉",
          tag: null,
        },
        {
          id: "M-02",
          type: "M",
          tag: ["SG"],
          name: "艾雷王",
          tag: null,
        },
        {
          id: "M-10",
          type: "M",
          tag: ["SG"],
          name: "石化魔兽 贾戈尔贡",
          tag: null,
        },
        {
          id: "M-12",
          type: "M",
          tag: ["SG"],
          name: "特空机2号 乌英达姆",
          tag: null,
        },
        {
          id: "M-14",
          type: "M",
          tag: ["SG"],
          name: "特空机4号 奥特人造机甲赛罗",
          tag: null,
        },
        {
          id: "M-15",
          type: "M",
          tag: ["SG"],
          name: "巴尔坦星人",
          tag: null,
        },
        {
          id: "M-17",
          type: "M",
          tag: ["SG"],
          name: "超古代龙 美尔巴",
          tag: null,
        },
        {
          id: "M-18",
          type: "M",
          tag: ["SG"],
          name: "基里艾洛德人",
          tag: null,
        },
        {
          id: "M-24",
          type: "M",
          tag: ["SG"],
          name: "光热怪兽奇拉",
          tag: null,
        },
        {
          id: "M-27",
          type: "M",
          tag: ["SG"],
          name: "黑暗的支配者 邪神加坦杰厄",
          tag: null,
        },
        {
          id: "M-28",
          type: "M",
          tag: ["SG"],
          name: "爱憎战士 卡蜜拉",
          tag: null,
        },
        {
          id: "M-29",
          type: "M",
          tag: ["SG"],
          name: "刚力战士 达拉姆",
          tag: null,
        },
        {
          id: "M-30",
          type: "M",
          tag: ["SG"],
          name: "俊敏战士 希特拉",
          tag: null,
        },
        {
          id: "M-31",
          type: "M",
          tag: ["SG"],
          name: "伽古拉斯·伽古拉",
          tag: null,
        }
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>