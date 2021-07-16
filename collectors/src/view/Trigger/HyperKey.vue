<template>
  <div>
    <div class="item-list" :class="collectStatus ? 'collect-status' : ''">
      <floatLayer
        :show="layerShow"
        :item="nowDetail"
        :urlType="0"
        @parentEvent="hideDetail"
      />
      <div class="ctrl-panel">
        <div
          class="switch-box"
          :class="collectStatus ? 'active' : ''"
          @click="collectToggle"
        >
          <div class="switch-label">已拥有标记</div>
          <div class="switch-btn"></div>
        </div>
        <tagBar v-bind:tags="tags" @parentEvent="getDataByTag" />
      </div>
      <propItem
        v-for="hk in nowList"
        v-bind:item="hk"
        :class="getCollect(hk.id) ? 'collect' : ''"
        :urlType="0"
        :showPic="true"
        :key="hk.id"
        :defaultColor="'#5420ae'"
        :barColor="hk.color"
        @click.native="showDetail(hk)"
      />
    </div>
  </div>
</template>

<script>
import PropItem from "@/components/PropItem";
import TagBar from "@/components/TagBar";
import FloatLayer from "@/components/FloatLayer";
export default {
  name: "HyperKey",
  components: {
    PropItem,
    TagBar,
    FloatLayer,
  },
  data() {
    return {
      tags: [
        {
          name: "ALL",
          title: "全部",
        },
        {
          name: "XD",
          title: "限定",
        },
        {
          name: "DX",
          title: "DX",
        },
        {
          name: "SG01",
          title: "SG01",
        },
        {
          name: "SG02",
          title: "SG02",
        },
        {
          name: "GP01",
          title: "GP01",
        },
      ],
      nowList: null, //展示列表
      nowDetail: null,
      layerShow: false,
      collectStatus: false,
      collectList: [],
      hyperKey: [
        {
          id: "EX-1", //唯一ID
          type: "U", //U 奥特曼  M 怪兽  O 其它
          tag: ["XD"], //标签：XD限定 DX SG食玩 GP扭蛋
          name: "奥特曼55周年", //名称
          link: [0], //关联奥特曼或怪兽实体数组
          color: "#F44336", //自定义颜色
        },
        {
          id: "EX-2",
          type: "U",
          tag: ["XD"],
          name: "特利迦与泽塔",
          link: [82, 81],
          color: "#e29623",
        },
        {
          id: "U-01",
          type: "U",
          tag: ["DX"],
          name: "特利迦奥特曼 复合型",
          link: [82],
          color: "#ad3ec3",
        },
        {
          id: "U-02",
          type: "U",
          tag: ["DX"],
          name: "特利迦奥特曼 强力型",
          link: [83],
          color: "#f13342",
        },
        {
          id: "U-03",
          type: "U",
          tag: ["DX"],
          name: "特利迦奥特曼 空中型",
          link: [84],
          color: "#406cec",
        },
        {
          id: "U-04",
          type: "U",
          tag: ["DX"],
          name: "泽塔奥特曼 原始形态",
          link: [81],
          color: "#35b9e7",
        },
        {
          id: "U-10",
          type: "U",
          tag: ["DX"],
          name: "迪迦奥特曼 复合型",
          link: [20],
          color: "#ad3ec3",
        },
        {
          id: "U-11",
          type: "U",
          tag: ["DX"],
          name: "迪迦奥特曼 强力型",
          link: [21],
          color: "#f13342",
        },
        {
          id: "U-12",
          type: "U",
          tag: ["DX"],
          name: "迪迦奥特曼 空中型",
          link: [22],
          color: "#406cec",
        },
        {
          id: "U-13",
          type: "U",
          tag: ["DX"],
          name: "闪耀迪迦",
          link: [23],
          color: "#e4b51f",
        },
        {
          id: "M-01",
          type: "M",
          tag: ["SG01"],
          name: "古代怪兽 哥莫拉",
          link: null,
        },
        {
          id: "M-02",
          type: "M",
          tag: ["SG01"],
          name: "宇宙怪兽 艾雷王",
          link: null,
        },
        {
          id: "M-03",
          type: "M",
          tag: ["GP01"],
          name: "宇宙恐龙 杰顿",
          link: null,
        },
        {
          id: "M-03-2",
          type: "M",
          tag: ["GP01"],
          name: "宇宙恐龙 杰顿二世",
          link: null,
        },
        {
          id: "M-04",
          type: "M",
          tag: ["GP01"],
          name: "蛤蜊怪兽 加玛库基拉",
          link: null,
        },
        {
          id: "M-10",
          type: "M",
          tag: ["SG02"],
          name: "石化魔兽 贾戈尔贡",
          link: null,
        },
        {
          id: "M-11",
          type: "M",
          tag: ["GP01"],
          name: "特空机1号 赛文加",
          link: null,
        },
        {
          id: "M-12",
          type: "M",
          tag: ["SG01"],
          name: "特空机2号 乌英达姆",
          link: null,
        },
        {
          id: "M-13",
          type: "M",
          tag: ["GP01"],
          name: "特空机3号 金古桥军械库定制",
          link: null,
        },
        {
          id: "M-14",
          type: "M",
          tag: ["XD"],
          name: "特空机4号 奥特人造机甲赛罗",
          link: null,
        },
        {
          id: "M-15",
          type: "M",
          tag: ["SG01"],
          name: "宇宙忍者 巴尔坦星人",
          link: null,
        },
        {
          id: "M-16",
          type: "M",
          tag: ["GP01"],
          name: "超古代怪兽 哥尔赞",
          link: null,
        },
        {
          id: "M-17",
          type: "M",
          tag: ["SG01"],
          name: "超古代龙 美尔巴",
          link: null,
        },
        {
          id: "M-18",
          type: "M",
          tag: ["SG01"],
          name: "基里艾洛德人",
          link: null,
        },
        {
          id: "M-19",
          type: "M",
          tag: ["GP01"],
          name: "邪恶迪迦",
          link: null,
        },
        {
          id: "M-20",
          type: "M",
          tag: ["XD"],
          name: "贝利亚奥特曼",
          link: [60],
        },
        {
          id: "M-24",
          type: "M",
          tag: ["SG02"],
          name: "光热怪兽 奇拉",
          link: null,
        },
        {
          id: "M-25",
          type: "M",
          tag: ["SG02"],
          name: "凯姆尔人",
          link: null,
        },
        {
          id: "M-27",
          type: "M",
          tag: ["SG02"],
          name: "黑暗的支配者 邪神加坦杰厄",
          link: null,
        },
        {
          id: "M-28",
          type: "M",
          tag: ["SG02"],
          name: "爱憎战士 卡蜜拉",
          link: null,
        },
        {
          id: "M-29",
          type: "M",
          tag: ["SG02"],
          name: "刚力战士 达拉姆",
          link: null,
        },
        {
          id: "M-30",
          type: "M",
          tag: ["SG02"],
          name: "俊敏战士 希特拉",
          link: null,
        },
        {
          id: "M-31",
          type: "M",
          tag: ["SG02"],
          name: "伽古拉斯·伽古拉",
          link: null,
        },
      ],
    };
  },
  methods: {
    getDataByTag(tag) {
      if (tag == "ALL") {
        this.nowList = this.hyperKey;
      } else {
        this.nowList = this.getListByTag(tag);
      }
    },
    // 根据tag标签获取数据
    getListByTag(tag) {
      let arr = [];
      this.hyperKey.forEach((item, index, array) => {
        if (item.tag.indexOf(tag) != -1) {
          arr.push(item);
        }
      });
      return arr;
    },
    // 根据collectStatus状态,进行收藏模式与详情模式切换
    showDetail(item) {
      if (this.collectStatus) {
        // 收藏模式
        if (this.collectList.indexOf(item.id) == -1) {
          this.collectList.push(item.id); //新增项
        } else {
          this.collectList.splice(this.collectList.indexOf(item.id), 1); //删除项
        }
        this.$Tools.$setStroage("hyperKey", this.collectList); //保存最新数据
      } else {
        // 详情模式
        this.layerShow = true;
        this.nowDetail = item;
      }
    },
    // 隐藏详情
    hideDetail(visible) {
      this.layerShow = visible;
    },
    // 加载收藏数据
    getCollectData() {
      this.collectList =
        this.$Tools.$getStroage("hyperKey") != null
          ? this.$Tools.$getStroage("hyperKey")
          : [];
    },
    // 切换收藏状态
    collectToggle() {
      this.collectStatus = this.collectStatus ? false : true;
    },
    // 获取拥有状态
    getCollect(id) {
      return this.collectList.indexOf(id) != -1;
    },
  },
  created() {
    this.nowList = this.hyperKey;
    this.getCollectData();
  },
};
</script>

<style scoped>
.collect-status .prop-item {
  opacity: 0.6;
}
.collect-status .prop-item.collect {
  opacity: 1;
}
</style>
