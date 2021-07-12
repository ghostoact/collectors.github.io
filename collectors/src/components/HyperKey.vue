<template>
  <div>
    <div class="item-list">
      <tagBar v-bind:tags="tags" @parentEvent="getDataByTag" />
      <propItem
        v-for="hk in nowList"
        v-bind:item="hk"
        :urlType="0"
        :showPic="true"
        :key="hk.id"
        :defaultColor="'#5420ae'"
        :barColor="hk.color"
      />
    </div>
  </div>
</template>

<script>
import PropItem from "@/components/PropItem";
import TagBar from "@/components/TagBar";
export default {
  name: "HyperKey",
  components: {
    PropItem,
    TagBar
  },
  data() {
    return {
      tags: ["全部", "限定", "DX", "SG", "GP"],
      nowList: null, //展示列表
      hyperKey: [
        {
          id: "EX-1", //唯一ID
          type: "U", //U 奥特曼  M 怪兽  O 其它
          tag: ["限定"], //标签：限定 DX SG食玩 GP扭蛋
          name: "奥特曼55周年", //名称
          link: [0], //关联奥特曼或怪兽实体数组
          color: "#F44336" //自定义颜色
        },
        {
          id: "EX-2",
          type: "U",
          tag: ["限定"],
          name: "特利迦与泽塔",
          link: [82, 81],
          color: "#e29623"
        },
        {
          id: "U-01",
          type: "U",
          tag: ["DX"],
          name: "特利迦奥特曼 复合型",
          link: [82],
          color: "#ad3ec3"
        },
        {
          id: "U-02",
          type: "U",
          tag: ["DX"],
          name: "特利迦奥特曼 强力型",
          link: [83]
        },
        {
          id: "U-03",
          type: "U",
          tag: ["DX"],
          name: "特利迦奥特曼 空中型",
          link: [84]
        },
        {
          id: "U-04",
          type: "U",
          tag: ["DX"],
          name: "泽塔奥特曼 原始形态",
          link: [81]
        },
        {
          id: "U-10",
          type: "U",
          tag: ["DX"],
          name: "迪迦奥特曼 复合型",
          link: [20],
          color: "#ad3ec3"
        },
        {
          id: "U-11",
          type: "U",
          tag: ["DX"],
          name: "迪迦奥特曼 强力型",
          link: [21]
        },
        {
          id: "U-12",
          type: "U",
          tag: ["DX"],
          name: "迪迦奥特曼 空中型",
          link: [22]
        },
        {
          id: "U-13",
          type: "U",
          tag: ["DX"],
          name: "闪耀迪迦",
          link: []
        },
        {
          id: "M-01",
          type: "M",
          tag: ["SG"],
          name: "哥莫拉",
          link: null
        },
        {
          id: "M-02",
          type: "M",
          tag: ["SG"],
          name: "艾雷王",
          link: null
        },
        {
          id: "M-10",
          type: "M",
          tag: ["SG"],
          name: "石化魔兽 贾戈尔贡",
          link: null
        },
        {
          id: "M-12",
          type: "M",
          tag: ["SG"],
          name: "特空机2号 乌英达姆",
          link: null
        },
        {
          id: "M-14",
          type: "M",
          tag: ["限定"],
          name: "特空机4号 奥特人造机甲赛罗",
          link: null
        },
        {
          id: "M-15",
          type: "M",
          tag: ["SG"],
          name: "巴尔坦星人",
          link: null
        },
        {
          id: "M-17",
          type: "M",
          tag: ["SG"],
          name: "超古代龙 美尔巴",
          link: null
        },
        {
          id: "M-18",
          type: "M",
          tag: ["SG"],
          name: "基里艾洛德人",
          link: null
        },
        {
          id: "M-24",
          type: "M",
          tag: ["SG"],
          name: "光热怪兽奇拉",
          link: null
        },
        {
          id: "M-27",
          type: "M",
          tag: ["SG"],
          name: "黑暗的支配者 邪神加坦杰厄",
          link: null
        },
        {
          id: "M-28",
          type: "M",
          tag: ["SG"],
          name: "爱憎战士 卡蜜拉",
          link: null
        },
        {
          id: "M-29",
          type: "M",
          tag: ["SG"],
          name: "刚力战士 达拉姆",
          link: null
        },
        {
          id: "M-30",
          type: "M",
          tag: ["SG"],
          name: "俊敏战士 希特拉",
          link: null
        },
        {
          id: "M-31",
          type: "M",
          tag: ["SG"],
          name: "伽古拉斯·伽古拉",
          link: null
        }
      ]
    };
  },
  methods: {
    getDataByTag(tag) {
      if (tag == "全部") {
        this.nowList = this.hyperKey;
      } else {
        this.nowList = this.getListByTag(tag);
      }
    },
    getListByTag(tag) {
      let arr = [];
      this.hyperKey.forEach((item, index, array) => {
        if (item.tag.indexOf(tag) != -1) {
          arr.push(item);
        }
      });
      return arr;
    }
  },
  created() {
    this.nowList = this.hyperKey;
  }
};
</script>

<style scoped></style>
