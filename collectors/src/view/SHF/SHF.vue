<template>
  <div class="item-list" :class="collectStatus ? 'collect-status' : ''">
    <floatLayer
      :show="layerShow"
      :item="nowDetail"
      :urlType="3"
      @parentEvent="hideDetail"
    />
    <div class="ctrl-panel">
      <div
        class="switch-box"
        :class="collectFilter ? 'active' : ''"
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
      <!-- <tagBar :tags="tags" @parentEvent="getDataByTag" /> -->
    </div>
    <propItem
      v-for="hk in nowList"
      v-bind:item="hk"
      :class="getCollect(hk.id) ? 'collect' : ''"
      :urlType="3"
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
  name: "SHF",
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
      ],
      nowList: null, //展示列表
      nowDetail: null,
      layerShow: false,
      collectStatus: false, //标记模式
      collectFilter: false, //过滤已拥有的
      collectList: [], //收藏列表
      shfiguarts: [
        {
          id: "F-1", //唯一ID
          type: "U", //U 奥特曼  M 怪兽  O 其它
          tag: null, //标签
          name: "奥特曼", //名称
          link: [0], //关联奥特曼或怪兽实体数组
          color: null, //自定义颜色
          way: null, //获取途径
        },
        {
          id: "F-2",
          type: "U",
          tag: null,
          name: "奧特曼 50周年纪念版",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-3",
          type: "M",
          tag: null,
          name: "巴尔坦星人",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-4",
          type: "M",
          tag: null,
          name: "宇宙恐龙杰顿",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-5",
          type: "U",
          tag: null,
          name: "佐菲",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-6",
          type: "U",
          tag: null,
          name: "奥特曼（A型）",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-7",
          type: "U",
          tag: null,
          name: "赛文奥特曼",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-8",
          type: "M",
          tag: null,
          name: "巴尔坦星人 分身体",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-9",
          type: "M",
          tag: null,
          name: "梅特龙星人",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-10",
          type: "M",
          tag: null,
          name: "美菲拉斯星人",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-11",
          type: "M",
          tag: null,
          name: "金古桥",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-12",
          type: "M",
          tag: null,
          name: "哥莫拉",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-13",
          type: "U",
          tag: null,
          name: "欧布奥特曼 欧布起源&原生之初",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-14",
          type: "U",
          tag: null,
          name: "欧布奥特曼 原生之初",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-15",
          type: "M",
          tag: null,
          name: "三面怪人达达",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-16",
          type: "U",
          tag: null,
          name: "欧布奥特曼 重光形态",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-17",
          type: "M",
          tag: null,
          name: "无限魔人伽古拉斯.伽古拉",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-18",
          type: "U",
          tag: null,
          name: "捷德奥特曼 原始形态",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-19",
          type: "M",
          tag: null,
          name: "嘎次星人",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-20",
          type: "U",
          tag: null,
          name: "杰克奥特曼",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-21",
          type: "U",
          tag: null,
          name: "扎拉布星人",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-22",
          type: "U",
          tag: null,
          name: "欧布奥特曼 暗耀形态",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-23",
          type: "U",
          tag: null,
          name: "双尾怪",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-24",
          type: "U",
          tag: null,
          name: "极恶贝利亚",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-25",
          type: "U",
          tag: null,
          name: "捷德奥特曼 尊皇形态",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-26",
          type: "U",
          tag: null,
          name: "庞墩",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-27",
          type: "U",
          tag: null,
          name: "磁力怪兽安东拉",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-28",
          type: "U",
          tag: null,
          name: "艾克斯奥特曼&哥莫拉装甲",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-29",
          type: "U",
          tag: null,
          name: "暗黑欧布奥特曼",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-30",
          type: "U",
          tag: null,
          name: "赛罗奥特曼 超越形态",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-31",
          type: "U",
          tag: null,
          name: "古墩",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-32",
          type: "U",
          tag: null,
          name: "罗索奥特曼 烈火形态",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-33",
          type: "U",
          tag: null,
          name: "布鲁奥特曼 跃水形态",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-34",
          type: "U",
          tag: null,
          name: "罗索奥特曼 旋风形态",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-35",
          type: "U",
          tag: null,
          name: "布鲁奥特曼 大地形态",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-36",
          type: "U",
          tag: null,
          name: "赛罗奥特曼",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-37",
          type: "U",
          tag: null,
          name: "贝利亚奥特曼",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-38",
          type: "U",
          tag: null,
          name: "罗索奥特曼 大地形态",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-39",
          type: "U",
          tag: null,
          name: "布鲁奥特曼 旋风形态",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-40",
          type: "U",
          tag: null,
          name: "罗布奥特曼",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-41",
          type: "U",
          tag: null,
          name: "维克特利奥特曼",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-42",
          type: "U",
          tag: null,
          name: "布莱克王",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-43",
          type: "U",
          tag: null,
          name: "捷德奥特曼 豪勇形态",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-44",
          type: "U",
          tag: null,
          name: "捷德奥特曼 原始形态 会场限定版",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-45",
          type: "U",
          tag: null,
          name: "无幻魔人伽古拉斯.伽古拉 会场限定版",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-46",
          type: "U",
          tag: null,
          name: "银河奥特曼",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-47",
          type: "U",
          tag: null,
          name: "泰罗奥特曼",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-48",
          type: "U",
          tag: null,
          name: "泰迦奥特曼",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-49",
          type: "U",
          tag: null,
          name: "强壮日冕＆月神奇迹形态 赛罗奥特曼",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-50",
          type: "U",
          tag: null,
          name: "黑暗捷德奥特曼",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-51",
          type: "U",
          tag: null,
          name: "黑暗艾克斯奥特曼＆哥莫拉装甲",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-52",
          type: "U",
          tag: null,
          name: "托雷基亚奥特曼",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-53",
          type: "U",
          tag: null,
          name: "泰迦奥特曼 三重斯特利姆形态",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-54",
          type: "U",
          tag: null,
          name: "奥特曼[BEST SELECTION]",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-55",
          type: "U",
          tag: null,
          name: "艾斯奥特曼",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-56",
          type: "U",
          tag: null,
          name: "捷德奥特曼 究极最终形态",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-57",
          type: "U",
          tag: null,
          name: "泰塔斯奥特曼",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-58",
          type: "U",
          tag: null,
          name: "赛罗奥特曼 闪耀形态",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-59",
          type: "U",
          tag: null,
          name: "泽塔奥特曼 阿尔法装甲",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-60",
          type: "U",
          tag: null,
          name: "捷德奥特曼 原始形态(NEW GENERATION版)",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-61",
          type: "U",
          tag: null,
          name: "银河奥特曼(斯特利姆形态)",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-62",
          type: "U",
          tag: null,
          name: "赛罗奥特曼(银河闪耀无限形态)",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-63",
          type: "U",
          tag: null,
          name: "赛罗奥特曼 十周年特别配色ver.",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-64",
          type: "U",
          tag: null,
          name: "风马奥特曼",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-65",
          type: "U",
          tag: null,
          name: "特空机1号赛文加",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-66",
          type: "U",
          tag: null,
          name: "泰迦奥特曼 Special Clear Color Ver.",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-67",
          type: "U",
          tag: null,
          name: "杰顿 一兆度火球ver.",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-68",
          type: "U",
          tag: null,
          name: "伽古拉斯.伽古拉（新生代版）",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-69",
          type: "U",
          tag: null,
          name: "新·奥特曼",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-70",
          type: "U",
          tag: null,
          name: "捷德奥特曼 银河初升形态",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-71",
          type: "U",
          tag: null,
          name: "泽塔奥特曼 伽玛未来形态",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-72",
          type: "U",
          tag: null,
          name: "泽塔奥特曼 原生形态",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-73",
          type: "U",
          tag: null,
          name: "雷欧奥特曼",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-74",
          type: "U",
          tag: null,
          name: "奥特曼 55周年纪念Ver.",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-75",
          type: "U",
          tag: null,
          name: "特利迦奥特曼 复合形态",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-76",
          type: "U",
          tag: null,
          name: "终极赛罗 闪耀型",
          link: [82],
          color: null,
          way: null,
        },
        {
          id: "F-77",
          type: "U",
          tag: null,
          name: "迪迦奥特曼 复合型",
          link: [82],
          color: null,
          way: null,
        }
      ],
    };
  },
  methods: {
    getDataByTag(tag) {
      if (tag == "ALL") {
        this.nowList = this.shfiguarts;
      } else {
        this.nowList = this.getListByTag(tag);
      }
    },
    // 根据tag标签获取数据
    getListByTag(tag) {
      let arr = [];
      this.shfiguarts.forEach((item, index, array) => {
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
        this.$Tools.$setStroage("shf", this.collectList); //保存最新数据
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
        this.$Tools.$getStroage("shf") != null
          ? this.$Tools.$getStroage("shf")
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
      this.tags[0].count = this.shfiguarts.length;
      this.tags[0].own = this.collectList.length;
      this.shfiguarts.forEach((item, index, array) => {
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
    this.nowList = this.shfiguarts;
    this.getCollectData();
    this.getCollectProgress();
  },
};
</script>

<style scoped></style>
