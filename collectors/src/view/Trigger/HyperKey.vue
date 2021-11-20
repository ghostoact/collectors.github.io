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
    FloatLayer,
  },
  data() {
    return {
      tags: [
        {
          name: "ALL",
          title: "全部",
          count: 0,
          own: 0,
        },
        {
          name: "XD",
          title: "限定",
          count: 0,
          own: 0,
        },
        {
          name: "DX",
          title: "DX",
          count: 0,
          own: 0,
        },
        {
          name: "SG01",
          title: "SG01",
          count: 0,
          own: 0,
        },
        {
          name: "SG02",
          title: "SG02",
          count: 0,
          own: 0,
        },
        {
          name: "GP01",
          title: "GP01",
          count: 0,
          own: 0,
        },
        {
          name: "GP02",
          title: "GP02",
          count: 0,
          own: 0,
        },
        {
          name: "SGP01",
          title: "发声GP01",
          count: 0,
          own: 0,
        },
      ],
      nowList: null, //展示列表
      nowDetail: null,
      layerShow: false,
      collectStatus: false, //标记模式
      collectFilter: false, //过滤已拥有的
      collectList: [], //收藏列表
      hyperKey: [
        {
          id: "EX-0",
          type: "U",
          tag: ["XD"],
          name: "原始钥匙",
          selfSound: false,
          link: null,
          color: "#018dd1",
          way: "特利迦青铜变身器附带",
          code: null,
          pic: "EX-0.jpg",
        },
        {
          id: "EX-1", //唯一ID
          type: "U", //U 奥特曼  M 怪兽  O 其它
          tag: ["XD"], //标签：XD限定 DX SG食玩 GP扭蛋
          name: "奥特曼55周年", //名称
          selfSound: true, //发声模式 true 自我发声 false 海帕枪发声
          link: [0], //关联奥特曼或怪兽实体数组
          color: "#F44336", //自定义颜色
          way: "奥特曼M78商店限定", //获取途径
          code: [2, 3, 4, 0], //唯一识别码
          pic: "EX-1.jpg", //图片
        },
        {
          id: "EX-2",
          type: "U",
          tag: ["XD"],
          name: "特利迦与泽塔",
          selfSound: false,
          link: [82, 81],
          color: "#e29623",
          way: "变身器套装附赠中国限定特典",
          code: [4, 6, 5, 0],
          pic: "EX-2.jpg",
        },
        {
          id: "EX-3",
          type: "U",
          tag: ["XD"],
          name: "特利迦与赛罗",
          selfSound: false,
          link: [82, 81],
          color: "#59b04d",
          way: "奥特曼联名童装附赠",
          code: [6, 1, 3, 0],
          pic: "EX-3.jpg",
        },
        {
          id: "EX-4",
          type: "U",
          tag: ["XD"],
          name: "TDG迪迦25周年",
          selfSound: true,
          link: null,
          color: "#8a66b8",
          way: "奥特曼M78商店限定",
          code: [2, 1, 3, 0],
          pic: "EX-4.jpg",
        },
        {
          id: "U-01",
          type: "U",
          tag: ["DX"],
          name: "特利迦奥特曼 复合型",
          selfSound: true,
          link: [82],
          color: "#ad3ec3",
          code: [1, 2, 3, 0],
          property: "Zeperion",
          pic: "U-01.jpg",
        },
        {
          id: "U-02",
          type: "U",
          tag: ["DX"],
          name: "特利迦奥特曼 强力型",
          selfSound: true,
          link: [83],
          color: "#f13342",
          code: [1, 2, 5, 0],
          property: "Deracium",
          pic: "U-02.jpg",
        },
        {
          id: "U-03",
          type: "U",
          tag: ["DX"],
          name: "特利迦奥特曼 空中型",
          selfSound: true,
          link: [84],
          color: "#406cec",
          code: [1, 2, 4, 0],
          property: "Runboldt",
          pic: "U-03.jpg",
        },
        {
          id: "U-04",
          type: "U",
          tag: ["DX"],
          name: "泽塔奥特曼 原始形态",
          selfSound: true,
          link: [81],
          color: "#35b9e7",
          property: "Zestium",
          pic: "U-04.jpg",
        },
        {
          id: "U-05",
          type: "U",
          tag: ["DX"],
          name: "泽塔奥特曼 阿尔法装甲",
          selfSound: true,
          link: [119],
          color: "#406cec",
          property: "Alpha",
          pic: "U-05.jpg",
        },
        {
          id: "U-06",
          type: "U",
          tag: ["DX"],
          name: "泽塔奥特曼 贝塔冲击",
          selfSound: true,
          link: [120],
          color: "#f13342",
          property: "Beta",
          pic: "U-06.jpg",
        },
        {
          id: "U-07",
          type: "U",
          tag: ["DX"],
          name: "泽塔奥特曼 伽马未来",
          selfSound: true,
          link: [121],
          color: "#ad3ec3",
          property: "Gamma",
          pic: "U-07.jpg",
        },
        {
          id: "U-08",
          type: "U",
          tag: ["DX"],
          name: "泽塔奥特曼 德尔塔天爪",
          selfSound: true,
          link: [122],
          color: "#e29623",
          property: "Delta",
          pic: "U-08.jpg",
        },
        {
          id: "U-09",
          type: "U",
          tag: ["DX"],
          name: "利布特奥特曼",
          selfSound: true,
          link: [70],
          color: "#01aaab",
          code: [1, 6, 4, 0],
          property: "Galaxium",
          pic: "U-09.jpg",
        },
        {
          id: "U-10",
          type: "U",
          tag: ["DX"],
          name: "迪迦奥特曼 复合型",
          selfSound: true,
          link: [20],
          color: "#ad3ec3",
          code: [2, 1, 3, 0],
          property: "Zeperion",
          pic: "U-10.jpg",
        },
        {
          id: "U-11",
          type: "U",
          tag: ["DX"],
          name: "迪迦奥特曼 强力型",
          selfSound: true,
          link: [21],
          color: "#f13342",
          property: "Deracium",
          pic: "U-11.jpg",
        },
        {
          id: "U-12",
          type: "U",
          tag: ["DX"],
          name: "迪迦奥特曼 空中型",
          selfSound: true,
          link: [22],
          color: "#406cec",
          property: "Runboldt",
          pic: "U-12.jpg",
        },
        {
          id: "U-13",
          type: "U",
          tag: ["DX"],
          name: "闪耀迪迦",
          selfSound: true,
          link: [23],
          color: "#e4b51f",
          property: "Glitter",
          pic: "U-13.jpg",
        },
        {
          id: "U-14",
          type: "U",
          tag: ["SGP01"],
          name: "戴拿奥特曼",
          selfSound: true,
          link: [23],
          color: "#0266c8",
          pic: "U-14.jpg",
        },
        {
          id: "U-14-2",
          type: "U",
          tag: ["SGP01"],
          name: "戴拿奥特曼 特别版",
          selfSound: true,
          link: [23],
          color: "#0266c8",
          pic: "U-14-2.jpg",
        },
        {
          id: "U-15",
          type: "U",
          tag: ["SGP01"],
          name: "赛罗奥特曼",
          selfSound: true,
          link: [23],
          color: "#16227b",
          property: "Emerium",
          pic: "U-15.jpg",
        },
        {
          id: "U-15-2",
          type: "U",
          tag: ["SGP01"],
          name: "赛罗奥特曼 特别版",
          selfSound: true,
          link: [23],
          color: "#16227b",
          pic: "U-15-2.jpg",
        },
        {
          id: "U-16",
          type: "U",
          tag: ["XD"],
          name: "高斯奥特曼 月神模式",
          selfSound: true,
          link: [38],
          property: "Full Moon",
          color: "#50b0eb",
          way: "奥特曼联名童装附赠",
          pic: "U-16.jpg",
        },
        {
          id: "U-17",
          type: "U",
          tag: ["DX"],
          name: "特利迦奥特曼 闪耀型",
          selfSound: true,
          link: null,
          color: "#dd9d02",
          code: [1, 2, 6, 0],
          property: "Glitter Zeperion",
          pic: "U-17.jpg",
        },
        {
          id: "10-U",
          type: "U",
          tag: ["DX"],
          name: "黑暗特利迦奥特曼",
          selfSound: true,
          link: null,
          color: "#716e77",
          property: "Dark Zeperion",
          pic: "10-U.jpg",
        },
        {
          id: "M-01",
          type: "M",
          tag: ["SG01"],
          name: "古代怪兽 哥莫拉",
          selfSound: false,
          link: null,
          code: [3, 5, 4, 0],
          property: "Shockwave",
          pic: "M-01.jpg",
        },
        {
          id: "M-02",
          type: "M",
          tag: ["SG01"],
          name: "宇宙怪兽 艾雷王",
          selfSound: false,
          link: null,
          code: [3, 5, 6, 0],
          property: "Thunder",
          pic: "M-02.jpg",
        },
        {
          id: "M-03",
          type: "M",
          tag: ["GP01"],
          name: "宇宙恐龙 杰顿",
          selfSound: false,
          link: null,
          code: [3, 4, 2, 0],
          property: "Fireball",
          pic: "M-03.jpg",
        },
        {
          id: "M-03-2",
          type: "M",
          tag: ["GP01"],
          name: "宇宙恐龙 杰顿二世",
          selfSound: false,
          link: null,
          code: [3, 4, 2, 0],
          property: "Fireball",
          pic: "M-03-2.jpg",
        },
        {
          id: "M-04",
          type: "M",
          tag: ["GP01"],
          name: "蛤蜊怪兽 加玛库基拉",
          selfSound: false,
          link: null,
          code: [3, 4, 1, 0],
          property: "Splash",
          pic: "M-04.jpg",
        },
        {
          id: "M-05",
          type: "M",
          tag: ["GP02"],
          name: "变形怪兽 加佐特",
          selfSound: false,
          link: null,
          code: [5, 2, 6, 0],
          property: "Plasma",
          pic: "M-05.jpg",
        },
        {
          id: "M-06",
          type: "M",
          tag: ["GP02"],
          name: "奇兽眼Q",
          selfSound: false,
          link: null,
          code: [3, 6, 4, 0],
          property: "Vacuum",
          pic: "M-06.jpg",
        },
        {
          id: "M-06-2",
          type: "M",
          tag: ["GP02"],
          name: "奇兽眼Q 二代",
          selfSound: false,
          link: null,
          code: [3, 6, 4, 0],
          property: "Vacuum",
          pic: "M-06-2.jpg",
        },
        {
          id: "M-07",
          type: "M",
          tag: ["XD"],
          name: "宇宙龙那斯",
          selfSound: false,
          link: null,
          color: "#c45263",
          way: "DX纳斯第斯蒂斯号附赠限定钥匙",
          code: [3, 4, 5, 0],
          property: "Nursedessei",
          pic: "M-07.jpg",
        },
        {
          id: "M-08",
          type: "M",
          tag: ["DX"],
          name: "赫罗波罗斯",
          selfSound: true,
          link: null,
          way: "黑暗特利迦变身器套装",
          code: null,
          property: "Lightning",
          pic: "M-08.jpg",
        },
        {
          id: "M-09",
          type: "M",
          tag: ["DX"],
          name: "赛格古",
          selfSound: true,
          link: null,
          way: "黑暗特利迦变身器套装",
          code: null,
          property: "Impact",
          pic: "M-09.jpg",
        },
        {
          id: "M-10",
          type: "M",
          tag: ["SG02"],
          name: "石化魔兽 贾戈尔贡",
          selfSound: false,
          link: null,
          code: [3, 4, 6, 0],
          property: "Gargorgon",
          pic: "M-10.jpg",
        },
        {
          id: "M-11",
          type: "M",
          tag: ["GP01"],
          name: "特空机1号 赛文加",
          selfSound: false,
          link: null,
          code: [5, 3, 2, 0],
          property: "Iron Fist",
          pic: "M-11.jpg",
        },
        {
          id: "M-11-2",
          type: "M",
          tag: ["XD"],
          name: "特空机1号 赛文加 超硬芯回旋铁拳",
          selfSound: false,
          link: null,
          way: "杂志赠送",
          code: [5, 3, 4, 0],
          property: "Drill Knuckle",
          pic: "M-11-2.jpg",
        },
        {
          id: "M-12",
          type: "M",
          tag: ["SG01"],
          name: "特空机2号 乌英达姆",
          selfSound: false,
          link: null,
          code: [5, 3, 6, 0],
          property: "Fire Fist",
          pic: "M-12.jpg",
        },
        {
          id: "M-13",
          type: "M",
          tag: ["GP01"],
          name: "特空机3号 金古桥军械库定制",
          selfSound: false,
          link: null,
          code: [5, 4, 1, 0],
          property: "Pedanium",
          pic: "M-13.jpg",
        },
        {
          id: "M-14",
          type: "M",
          tag: ["XD"],
          name: "特空机4号 奥特人造机甲赛罗",
          selfSound: false,
          link: null,
          way: "奥特曼联名童装附赠", //获取途径
          code: [5, 4, 2, 0],
          property: "D4",
          pic: "M-14.jpg",
        },
        {
          id: "M-15",
          type: "M",
          tag: ["SG01"],
          name: "宇宙忍者 巴尔坦星人",
          selfSound: false,
          link: null,
          code: [3, 6, 1, 0],
          property: "Frozen",
          pic: "M-15.jpg",
        },
        {
          id: "M-16",
          type: "M",
          tag: ["GP01"],
          name: "超古代怪兽 哥尔赞",
          selfSound: false,
          link: null,
          code: [5, 2, 3, 0],
          property: "Ultrasonic",
          pic: "M-16.jpg",
        },
        {
          id: "M-17",
          type: "M",
          tag: ["SG01"],
          name: "超古代龙 美尔巴",
          selfSound: false,
          link: null,
          code: [5, 2, 4, 0],
          property: "Sonic Boom",
          pic: "M-17.jpg",
        },
        {
          id: "M-18",
          type: "M",
          tag: ["SG01"],
          name: "基里艾洛德人",
          selfSound: false,
          link: null,
          code: [4, 1, 2, 0],
          property: "Fire",
          pic: "M-18.jpg",
        },
        {
          id: "M-19",
          type: "M",
          tag: ["GP01"],
          name: "邪恶迪迦",
          selfSound: false,
          link: null,
          code: [5, 6, 4, 0],
          property: "Shadow",
          pic: "M-19.jpg",
        },
        {
          id: "M-20",
          type: "M",
          tag: ["XD"],
          name: "贝利亚奥特曼",
          selfSound: false,
          link: [60],
          way: "講談社MOOK特利迦专刊附赠",
          code: [5, 6, 3, 0],
          property: "Deathcium",
          pic: "M-20.jpg",
        },
        {
          id: "M-21",
          type: "M",
          tag: ["GP02"],
          name: "奥加古维拉",
          selfSound: false,
          link: null,
          code: [5, 1, 3, 0],
          property: "Drill",
          pic: "M-21.jpg",
        },
        {
          id: "M-22",
          type: "M",
          tag: ["GP02"],
          name: "古维拉",
          selfSound: false,
          link: null,
          code: [6, 4, 5, 0],
          property: "Drill",
          pic: "M-22.jpg",
        },
        {
          id: "M-23",
          type: "M",
          tag: ["GP02"],
          name: "达达 A",
          selfSound: false,
          link: null,
          code: [3, 6, 5, 0],
          property: "Shrink",
          pic: "M-23.jpg",
        },
        {
          id: "M-23-2",
          type: "M",
          tag: ["GP02"],
          name: "达达 B",
          selfSound: false,
          link: null,
          code: [3, 6, 5, 0],
          property: "Shrink",
          pic: "M-23-2.jpg",
        },
        {
          id: "M-23-3",
          type: "M",
          tag: ["GP02"],
          name: "达达 C",
          selfSound: false,
          link: null,
          code: [3, 6, 5, 0],
          property: "Shrink",
          pic: "M-23-3.jpg",
        },
        {
          id: "M-24",
          type: "M",
          tag: ["SG02"],
          name: "光热怪兽 奇拉",
          selfSound: false,
          link: null,
          code: [5, 2, 1, 0],
          property: "Flash",
          pic: "M-24.jpg",
        },
        {
          id: "M-25",
          type: "M",
          tag: ["SG02"],
          name: "凯姆尔人",
          selfSound: false,
          link: null,
          code: [5, 1, 4, 0],
          property: "Dissolve",
          pic: "M-25.jpg",
        },
        {
          id: "M-26",
          type: "M",
          tag: ["GP02"],
          name: "嘎地",
          selfSound: false,
          link: null,
          code: [5, 3, 1, 0],
          property: "Barrier",
          pic: "M-26.jpg",
        },
        {
          id: "M-27",
          type: "M",
          tag: ["SG02"],
          name: "黑暗的支配者 邪神加坦杰厄",
          selfSound: false,
          link: null,
          code: [4, 1, 3, 0],
          property: "Darkness",
          pic: "M-27.jpg",
        },
        {
          id: "M-28",
          type: "M",
          tag: ["SG02"],
          name: "爱憎战士 卡蜜拉",
          selfSound: false,
          link: null,
          code: [5, 4, 6, 0],
          property: "Whip",
          pic: "M-28.jpg",
        },
        {
          id: "M-29",
          type: "M",
          tag: ["SG02"],
          name: "刚力战士 达拉姆",
          selfSound: false,
          link: null,
          code: [5, 6, 1, 0],
          property: "Flame",
          pic: "M-29.jpg",
        },
        {
          id: "M-30",
          type: "M",
          tag: ["SG02"],
          name: "俊敏战士 希特拉",
          selfSound: false,
          link: null,
          code: [5, 6, 2, 0],
          property: "Gust",
          pic: "M-30.jpg",
        },
        {
          id: "M-31",
          type: "M",
          tag: ["SG02"],
          name: "伽古拉斯·伽古拉",
          selfSound: false,
          link: null,
          code: [5, 4, 3, 0],
          property: "Slash",
          pic: "M-31.jpg",
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
    },
  },
  created() {
    this.nowList = this.hyperKey;
    this.getCollectData();
    this.getCollectProgress();
  },
};
</script>

<style scoped></style>
