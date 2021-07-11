<template>
  <div>
    <div class="item-list">
      <PropItem
        v-for="um in ultramedal"
        v-bind:item="um"
        :urlType="1"
        :key="um.id"
      />
    </div>
  </div>
</template>

<script>
import PropItem from "@/components/PropItem";
export default {
  name: "UltraMedal",
  components: {
    PropItem,
  },
  data() {
    return {
      ultramedal: [
        {
          id: "U-001", //唯一ID
          type: "U", //U 奥特曼  M 怪兽  O 其它
          tag: ["DX"], //标签：限定 DX EX扩展 SG食玩 GP扭蛋
          name: "赛罗奥特曼", //名称
          tag: [62], //关联奥特曼或怪兽实体数组
        },
        {
          id: "U-002",
          type: "U",
          tag: ["DX"],
          name: "赛文奥特曼",
          tag: [2],
        },
        {
          id: "U-003",
          type: "U",
          tag: ["DX"],
          name: "雷欧奥特曼",
          tag: [8],
        },
        {
          id: "U-004",
          type: "U",
          tag: ["DX"],
          name: "奥特曼",
          tag: [0],
        },
        {
          id: "U-005",
          type: "U",
          tag: ["DX"],
          name: "艾斯奥特曼",
          tag: [4],
        },
        {
          id: "U-006",
          type: "U",
          tag: ["DX"],
          name: "泰罗奥特曼",
          tag: [6],
        },
        {
          id: "U-007",
          type: "U",
          tag: ["DX"],
          name: "迪迦奥特曼",
          tag: [20],
        },
        {
          id: "U-008",
          type: "U",
          tag: ["DX"],
          name: "戴拿奥特曼",
          tag: [27],
        },
        {
          id: "U-009",
          type: "U",
          tag: ["DX"],
          name: "盖亚奥特曼",
          tag: [30],
        },
        {
          id: "U-010",
          type: "U",
          tag: ["DX"],
          name: "赛罗奥特曼 无限形态",
          tag: [88],
        },
        {
          id: "U-011",
          type: "U",
          tag: ["DX"],
          name: "捷德奥特曼",
          tag: [103],
        },
        {
          id: "U-012",
          type: "U",
          tag: ["DX"],
          name: "极恶 贝利亚",
          tag: [123],
        },
        {
          id: "U-013",
          type: "U",
          tag: ["DX"],
          name: "佐菲",
          tag: [1],
        },
        {
          id: "U-014",
          type: "U",
          tag: ["DX"],
          name: "杰克奥特曼",
          tag: [3],
        },
        {
          id: "U-015",
          type: "U",
          tag: ["DX"],
          name: "奥特之父",
          tag: [5],
        },
        {
          id: "U-016",
          type: "U",
          tag: ["DX"],
          name: "高斯奥特曼",
          tag: [38],
        },
        {
          id: "U-017",
          type: "U",
          tag: ["DX"],
          name: "奈克赛斯奥特曼",
          tag: [46],
        },
        {
          id: "U-018",
          type: "U",
          tag: ["DX"],
          name: "梦比优斯奥特曼",
          tag: [54],
        },
        {
          id: "U-019",
          type: "U",
          tag: ["DX"],
          name: "银河奥特曼",
          tag: [65],
        },
        {
          id: "U-020",
          type: "U",
          tag: ["DX"],
          name: "艾克斯奥特曼",
          tag: [67],
        },
        {
          id: "U-021",
          type: "U",
          tag: ["DX"],
          name: "欧布奥特曼",
          tag: [68],
        },
        {
          id: "U-022",
          type: "U",
          tag: ["EX"],
          name: "赛罗奥特曼 闪耀形态",
          tag: [64],
        },
        {
          id: "U-023",
          type: "U",
          tag: ["EX"],
          name: "火焰骑士",
          tag: null,
        },
        {
          id: "U-024",
          type: "U",
          tag: ["EX"],
          name: "镜子骑士",
          tag: null,
        },
        {
          id: "U-025",
          type: "U",
          tag: ["EX"],
          name: "钢铁九号",
          tag: null,
        },
        {
          id: "U-026",
          type: "U",
          tag: ["EX"],
          name: "钢铁杀手",
          tag: null,
        },
        {
          id: "U-027",
          type: "U",
          tag: ["EX"],
          name: "捷德奥特曼",
          tag: [103],
        },
        {
          id: "U-028",
          type: "U",
          tag: ["EX"],
          name: "银河斯特利姆奥特曼",
          tag: [90],
        },
        {
          id: "U-029",
          type: "U",
          tag: ["EX"],
          name: "维克特利奥特曼 骑士形态",
          tag: [91],
        },
        {
          id: "U-030",
          type: "U",
          tag: ["EX"],
          name: "超越艾克斯",
          tag: [93],
        },
        {
          id: "U-031",
          type: "U",
          tag: ["EX"],
          name: "捷德奥特曼 尊皇形态",
          tag: [107],
        },
        {
          id: "U-032",
          type: "U",
          tag: ["EX"],
          name: "罗布奥特曼",
          tag: [116],
        },
        {
          id: "U-033",
          type: "U",
          tag: ["EX"],
          name: "泰迦三重斯特利姆",
          tag: [118],
        },
        {
          id: "U-034",
          type: "U",
          tag: ["EX"],
          name: "银河维克特利奥特曼",
          tag: [92],
        },
        {
          id: "U-035",
          type: "U",
          tag: ["EX"],
          name: "艾克斯奥特曼 贝塔火花装甲",
          tag: [94],
        },
        {
          id: "U-036",
          type: "U",
          tag: ["EX"],
          name: "欧布奥特曼 三重形态",
          tag: [102],
        },
        {
          id: "U-037",
          type: "U",
          tag: ["EX"],
          name: "捷德奥特曼 终极形态",
          tag: [108],
        },
        {
          id: "U-038",
          type: "U",
          tag: ["EX"],
          name: "格罗布奥特曼",
          tag: [117],
        },
        {
          id: "U-039",
          type: "U",
          tag: ["EX"],
          name: "令迦奥特曼",
          tag: [124],
        },
        {
          id: "U-040",
          type: "U",
          tag: ["EX"],
          name: "奥特六兄弟",
          tag: [0, 1, 2, 3, 4, 6],
        },
        {
          id: "U-041",
          type: "U",
          tag: ["EX"],
          name: "爱迪奥特曼",
          tag: [12],
        },
        {
          id: "U-042",
          type: "U",
          tag: ["EX"],
          name: "杰斯提斯奥特曼 标准模式",
          tag: [43],
        },
        {
          id: "U-043",
          type: "U",
          tag: ["EX"],
          name: "希卡利奥特曼",
          tag: [58],
        },
        {
          id: "U-044",
          type: "U",
          tag: ["EX"],
          name: "赛罗奥特曼 月神奇迹型",
          tag: [87],
        },
        {
          id: "U-045",
          type: "U",
          tag: ["EX"],
          name: "利布特奥特曼",
          tag: [125],
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>