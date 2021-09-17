<template>
  <div class="item-list" :class="{ 'collect-status': collectStatus }">
    <floatLayer
      :show="layerShow"
      :item="nowDetail"
      :urlType="0"
      @parentEvent="hideDetail"
    />
    <div class="ctrl-panel">
      <div
        class="switch-box"
        :class="{ active: collectFilter }"
        @click="getCollectFilter"
      >
        <div class="switch-label">过滤已拥有的</div>
        <div class="switch-btn"></div>
      </div>
      <div
        class="btn"
        v-text="collectStatus ? '退出标记模式' : '标记我已拥有的'"
        @click="collectToggle"
      ></div>
      <tagBar :tags="tags" @parentEvent="getDataByTag" />
    </div>
    <propItem
      v-for="hk in nowList"
      v-bind:item="hk"
      :class="{ collect: getCollect(hk.id) }"
      :urlType="0"
      :showPic="true"
      :key="hk.id"
      :defaultColor="'#5420ae'"
      :barColor="hk.color"
      @click.native="showDetail(hk)"
      v-show="collectFilter == false || !getCollect(hk.id)"
    />
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
    FloatLayer
  },
  data() {
    return {
      tags: [
        {
          name: "ALL",
          title: "全部",
          count: 0,
          own: 0
        },
        {
          name: "XD",
          title: "限定",
          count: 0,
          own: 0
        },
        {
          name: "DX",
          title: "DX",
          count: 0,
          own: 0
        },
        {
          name: "SG01",
          title: "SG01",
          count: 0,
          own: 0
        },
        {
          name: "SG02",
          title: "SG02",
          count: 0,
          own: 0
        },
        {
          name: "GP01",
          title: "GP01",
          count: 0,
          own: 0
        }
      ],
      nowList: null, //展示列表
      nowDetail: null,
      layerShow: false,
      collectStatus: false, //标记模式
      collectFilter: false, //过滤已拥有的
      collectList: [], //收藏列表
      hyperKey: [
        {
          id: "EX-1", //唯一ID
          type: "U", //U 奥特曼  M 怪兽  O 其它
          tag: ["XD"], //标签：XD限定 DX SG食玩 GP扭蛋
          name: "奥特曼55周年", //名称
          link: [0], //关联奥特曼或怪兽实体数组
          color: "#F44336", //自定义颜色
          way: "奥特曼M78商店限定", //获取途径
          code: [2, 3, 4, 0] //唯一识别码
        },
        {
          id: "EX-2",
          type: "U",
          tag: ["XD"],
          name: "特利迦与泽塔",
          link: [82, 81],
          color: "#e29623",
          way: "变身器套装附赠中国限定特典",
          code: [4, 6, 5, 0]
        },
        {
          id: "EX-3",
          type: "U",
          tag: ["XD"],
          name: "特利迦与赛罗",
          link: [82, 81],
          color: "#59b04d",
          way: "奥特曼联名童装附赠",
          code: [6, 1, 3, 0]
        },
        {
          id: "U-01",
          type: "U",
          tag: ["DX"],
          name: "特利迦奥特曼 复合型",
          link: [82],
          color: "#ad3ec3",
          way: "",
          code: [1, 2, 3, 0]
        },
        {
          id: "U-02",
          type: "U",
          tag: ["DX"],
          name: "特利迦奥特曼 强力型",
          link: [83],
          color: "#f13342",
          way: "",
          code: [1, 2, 5, 0]
        },
        {
          id: "U-03",
          type: "U",
          tag: ["DX"],
          name: "特利迦奥特曼 空中型",
          link: [84],
          color: "#406cec",
          way: "",
          code: [1, 2, 4, 0]
        },
        {
          id: "U-04",
          type: "U",
          tag: ["DX"],
          name: "泽塔奥特曼 原始形态",
          link: [81],
          color: "#35b9e7",
          way: ""
        },
        {
          id: "U-05",
          type: "U",
          tag: ["DX"],
          name: "泽塔奥特曼 阿尔法装甲",
          link: [119],
          color: "#406cec",
          way: ""
        },
        {
          id: "U-06",
          type: "U",
          tag: ["DX"],
          name: "泽塔奥特曼 贝塔冲击",
          link: [120],
          color: "#f13342",
          way: ""
        },
        {
          id: "U-07",
          type: "U",
          tag: ["DX"],
          name: "泽塔奥特曼 伽马未来",
          link: [121],
          color: "#ad3ec3",
          way: ""
        },
        {
          id: "U-08",
          type: "U",
          tag: ["DX"],
          name: "泽塔奥特曼 德尔塔天爪",
          link: [122],
          color: "#e29623",
          way: ""
        },
        {
          id: "U-10",
          type: "U",
          tag: ["DX"],
          name: "迪迦奥特曼 复合型",
          link: [20],
          color: "#ad3ec3",
          way: "",
          code: [2, 1, 3, 0]
        },
        {
          id: "U-11",
          type: "U",
          tag: ["DX"],
          name: "迪迦奥特曼 强力型",
          link: [21],
          color: "#f13342",
          way: ""
        },
        {
          id: "U-12",
          type: "U",
          tag: ["DX"],
          name: "迪迦奥特曼 空中型",
          link: [22],
          color: "#406cec",
          way: ""
        },
        {
          id: "U-13",
          type: "U",
          tag: ["DX"],
          name: "闪耀迪迦",
          link: [23],
          color: "#e4b51f",
          way: ""
        },
        {
          id: "U-16",
          type: "U",
          tag: ["XD"],
          name: "高斯奥特曼 月神模式",
          link: [38],
          color: "#50b0eb",
          way: "奥特曼联名童装附赠"
        },
        {
          id: "U-17",
          type: "U",
          tag: ["DX"],
          name: "利布特奥特曼",
          link: [70],
          way: ""
        },
        {
          id: "M-01",
          type: "M",
          tag: ["SG01"],
          name: "古代怪兽 哥莫拉",
          link: null,
          way: "",
          code: [3, 5, 4, 0],
          property: "Shockwave"
        },
        {
          id: "M-02",
          type: "M",
          tag: ["SG01"],
          name: "宇宙怪兽 艾雷王",
          link: null,
          way: "",
          code: [3, 5, 6, 0],
          property: "Thunder"
        },
        {
          id: "M-03",
          type: "M",
          tag: ["GP01"],
          name: "宇宙恐龙 杰顿",
          link: null,
          way: "",
          code: [3, 4, 2, 0],
          property: "Fireball"
        },
        {
          id: "M-03-2",
          type: "M",
          tag: ["GP01"],
          name: "宇宙恐龙 杰顿二世",
          link: null,
          way: "",
          code: [3, 4, 2, 0],
          property: "Fireball"
        },
        {
          id: "M-04",
          type: "M",
          tag: ["GP01"],
          name: "蛤蜊怪兽 加玛库基拉",
          link: null,
          way: "",
          code: [3, 4, 1, 0],
          property: "Splash"
        },
        {
          id: "M-07",
          type: "M",
          tag: ["XD"],
          name: "宇宙龙那斯",
          link: null,
          way: "DX纳斯第斯蒂斯号附赠限定钥匙",
          code: null,
          property: ""
        },
        {
          id: "M-10",
          type: "M",
          tag: ["SG02"],
          name: "石化魔兽 贾戈尔贡",
          link: null,
          way: "",
          code: [3, 4, 6, 0],
          property: "Gargorgon"
        },
        {
          id: "M-11",
          type: "M",
          tag: ["GP01"],
          name: "特空机1号 赛文加",
          link: null,
          way: "",
          code: [5, 3, 2, 0],
          property: "Iron Fist"
        },
        {
          id: "M-11-2",
          type: "M",
          tag: ["XD"],
          name: "特空机1号 赛文加 超硬芯回旋铁拳",
          link: null,
          way: "杂志赠送",
          code: [5, 3, 2, 0],
          property: "Drill Knuckle"
        },
        {
          id: "M-12",
          type: "M",
          tag: ["SG01"],
          name: "特空机2号 乌英达姆",
          link: null,
          way: "",
          code: [5, 3, 6, 0],
          property: "Fire Fist"
        },
        {
          id: "M-13",
          type: "M",
          tag: ["GP01"],
          name: "特空机3号 金古桥军械库定制",
          link: null,
          way: "",
          code: [5, 4, 1, 0],
          property: "Pedanium"
        },
        {
          id: "M-14",
          type: "M",
          tag: ["XD"],
          name: "特空机4号 奥特人造机甲赛罗",
          link: null,
          way: "奥特曼联名童装附赠", //获取途径
          code: [5, 4, 2, 0],
          property: "D4"
        },
        {
          id: "M-15",
          type: "M",
          tag: ["SG01"],
          name: "宇宙忍者 巴尔坦星人",
          link: null,
          way: "",
          code: [3, 6, 1, 0],
          property: "Frozen"
        },
        {
          id: "M-16",
          type: "M",
          tag: ["GP01"],
          name: "超古代怪兽 哥尔赞",
          link: null,
          way: "",
          code: [5, 2, 3, 0],
          property: "Ultrasonic"
        },
        {
          id: "M-17",
          type: "M",
          tag: ["SG01"],
          name: "超古代龙 美尔巴",
          link: null,
          way: "",
          code: [5, 2, 4, 0],
          property: "Sonic Boom"
        },
        {
          id: "M-18",
          type: "M",
          tag: ["SG01"],
          name: "基里艾洛德人",
          link: null,
          way: "",
          code: [4, 1, 2, 0],
          property: "Fire"
        },
        {
          id: "M-19",
          type: "M",
          tag: ["GP01"],
          name: "邪恶迪迦",
          link: null,
          way: "",
          code: [5, 6, 4, 0],
          property: "Shadow"
        },
        {
          id: "M-20",
          type: "M",
          tag: ["XD"],
          name: "贝利亚奥特曼",
          link: [60],
          way: "講談社MOOK特利迦专刊附赠",
          code: [5, 6, 3, 0],
          property: "Deathcium"
        },
        {
          id: "M-24",
          type: "M",
          tag: ["SG02"],
          name: "光热怪兽 奇拉",
          link: null,
          way: "",
          code: [5, 2, 1, 0],
          property: "Flash"
        },
        {
          id: "M-25",
          type: "M",
          tag: ["SG02"],
          name: "凯姆尔人",
          link: null,
          way: "",
          code: [5, 1, 4, 0],
          property: "Dissolve"
        },
        {
          id: "M-27",
          type: "M",
          tag: ["SG02"],
          name: "黑暗的支配者 邪神加坦杰厄",
          link: null,
          way: "",
          code: [4, 1, 3, 0],
          property: "Darkness"
        },
        {
          id: "M-28",
          type: "M",
          tag: ["SG02"],
          name: "爱憎战士 卡蜜拉",
          link: null,
          way: "",
          code: [5, 4, 6, 0],
          property: "Whip"
        },
        {
          id: "M-29",
          type: "M",
          tag: ["SG02"],
          name: "刚力战士 达拉姆",
          link: null,
          way: "",
          code: [5, 6, 1, 0],
          property: "Flame"
        },
        {
          id: "M-30",
          type: "M",
          tag: ["SG02"],
          name: "俊敏战士 希特拉",
          link: null,
          way: "",
          code: [5, 6, 2, 0],
          property: "Gust"
        },
        {
          id: "M-31",
          type: "M",
          tag: ["SG02"],
          name: "伽古拉斯·伽古拉",
          link: null,
          way: "",
          code: [5, 4, 3, 0],
          property: "Slash"
        }
      ]
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
        this.getCollectProgress();
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
      return this.collectList.indexOf(id) != -1; //返回true为已标记
    },
    //过滤已拥有的
    getCollectFilter() {
      this.collectFilter = this.collectFilter ? false : true;
    },
    // 获取收藏进程
    // 表示有 !=-1
    getCollectProgress() {
      this.tags.forEach((i, num, arr) => {
        this.tags[num].count = 0;
        this.tags[num].own = 0;
      });
      this.tags[0].count = this.hyperKey.length;
      this.tags[0].own = this.collectList.length;
      this.hyperKey.forEach((item, index, array) => {
        this.tags.forEach((i, num, arr) => {
          //获得总数
          if (item.tag[0].indexOf(i.name) != -1) {
            this.tags[num].count = this.tags[num].count + 1;
          }
          //获得已拥有数
          if (
            this.collectList.indexOf(item.id) != -1 &&
            this.tags[num].name == item.tag[0]
          ) {
            this.tags[num].own = this.tags[num].own + 1;
          }
        });
      });
    }
  },
  created() {
    this.nowList = this.hyperKey;
    this.getCollectData();
    this.getCollectProgress();
  }
};
</script>

<style scoped></style>
