<template>
  <div class="item-list" :class="collectStatus ? 'collect-status' : ''">
    <floatLayer
      :show="layerShow"
      :item="nowDetail"
      :urlType="2"
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
      <tagBar v-bind:tags="tags" @parentEvent="getDataByTag" />
    </div>
    <propItem
      v-for="hk in nowList"
      v-bind:item="hk"
      :class="getCollect(hk.id) ? 'collect' : ''"
      :urlType="2"
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
  name: "Sofubi",
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
          name: "S",
          title: "奥特曼",
          count: 0,
          own: 0
        },
        {
          name: "EX",
          title: "奥特限定",
          count: 0,
          own: 0
        },
        {
          name: "K",
          title: "怪兽",
          count: 0,
          own: 0
        },
        {
          name: "EX-K",
          title: "怪兽限定",
          count: 0,
          own: 0
        },
        {
          name: "DX",
          title: "DX",
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
      sofubi: [
        {
          id: "S-01", //唯一ID
          type: "U", //U 奥特曼  M 怪兽  O 其它
          tag: ["S"], //标签：S 奥特曼 EX 奥特限定  K 怪兽 EX-K 限定怪兽
          name: "奥特曼", //名称
          link: [0], //关联奥特曼或怪兽实体数组
          color: "#F44336",
          pic: "S-01.jpg" //自定义颜色
        },
        {
          id: "S-02",
          type: "U",
          tag: ["S"],
          name: "赛文奥特曼",
          link: [2],
          color: "#F44336",
          pic: "S-02.jpg"
        },
        {
          id: "S-03",
          type: "U",
          tag: ["S"],
          name: "佐菲",
          link: [1],
          color: "#F44336",
          pic: "S-03.jpg"
        },
        {
          id: "S-04",
          type: "U",
          tag: ["S"],
          name: "杰克奥特曼",
          link: [3],
          color: "#F44336",
          pic: "S-04.jpg"
        },
        {
          id: "S-05",
          type: "U",
          tag: ["S"],
          name: "艾斯奥特曼",
          link: [4],
          color: "#F44336",
          pic: "S-05.jpg"
        },
        {
          id: "S-06",
          type: "U",
          tag: ["S"],
          name: "泰罗奥特曼",
          link: [6],
          color: "#F44336",
          pic: "S-06.jpg"
        },
        {
          id: "S-07",
          type: "U",
          tag: ["S"],
          name: "雷欧奥特曼",
          link: [8],
          color: "#F44336",
          pic: "S-07.jpg"
        },
        {
          id: "S-08",
          type: "U",
          tag: ["S"],
          name: "迪迦奥特曼 复合型",
          link: [20],
          color: "#F44336",
          pic: "S-08.jpg"
        },
        {
          id: "S-09",
          type: "U",
          tag: ["S"],
          name: "盖亚奥特曼 V2",
          link: [30],
          color: "#F44336",
          pic: "S-09.jpg"
        },
        {
          id: "S-10",
          type: "U",
          tag: ["S"],
          name: "阿古茹奥特曼 V2",
          link: [33],
          color: "#F44336",
          pic: "S-10.jpg"
        },
        {
          id: "S-11",
          type: "U",
          tag: ["S"],
          name: "银河奥特曼",
          link: [65],
          color: "#F44336",
          pic: "S-11.jpg"
        },
        {
          id: "S-12",
          type: "U",
          tag: ["S"],
          name: "钢铁杀手",
          link: null,
          color: "#F44336",
          pic: "S-12.jpg"
        },
        {
          id: "S-13",
          type: "U",
          tag: ["S"],
          name: "阿斯特拉",
          link: [9],
          color: "#F44336",
          pic: "S-13.jpg"
        },
        {
          id: "S-14",
          type: "U",
          tag: ["S"],
          name: "戴拿奥特曼 闪亮型",
          link: [27],
          color: "#F44336",
          pic: "S-14.jpg"
        },
        {
          id: "S-15",
          type: "U",
          tag: ["S"],
          name: "爱迪奥特曼",
          link: [12],
          color: "#F44336",
          pic: "S-15.jpg"
        },
        {
          id: "S-16",
          type: "U",
          tag: ["S"],
          name: "高斯奥特曼 月神模式",
          link: [38],
          color: "#F44336",
          pic: "S-16.jpg"
        },
        {
          id: "S-17",
          type: "U",
          tag: ["S"],
          name: "奈克赛斯奥特曼",
          link: [46],
          color: "#F44336",
          pic: "S-17.jpg"
        },
        {
          id: "S-18",
          type: "U",
          tag: ["S"],
          name: "麦克斯奥特曼",
          link: [52],
          color: "#F44336",
          pic: "S-18.jpg"
        },
        {
          id: "S-19",
          type: "U",
          tag: ["S"],
          name: "梦比优斯奥特曼",
          link: [54],
          color: "#F44336",
          pic: "S-19.jpg"
        },
        {
          id: "S-20",
          type: "U",
          tag: ["S"],
          name: "希卡利奥特曼",
          link: [58],
          color: "#F44336",
          pic: "S-20.jpg"
        },
        {
          id: "S-21",
          type: "U",
          tag: ["S"],
          name: "赛罗奥特曼",
          link: [62],
          color: "#F44336",
          pic: "S-21.jpg"
        },
        {
          id: "S-22",
          type: "U",
          tag: ["S"],
          name: "纳伊斯奥特曼",
          link: [35],
          color: "#F44336",
          pic: "S-22.jpg"
        },
        {
          id: "S-23",
          type: "U",
          tag: ["S"],
          name: "奥特之父",
          link: [5],
          color: "#F44336",
          pic: "S-23.jpg"
        },
        {
          id: "S-24",
          type: "U",
          tag: ["S"],
          name: "奥特之王",
          link: [10],
          color: "#F44336",
          pic: "S-24.jpg"
        },
        {
          id: "S-25",
          type: "U",
          tag: ["S"],
          name: "赛迦奥特曼",
          link: [126],
          color: "#F44336",
          pic: "S-25.jpg"
        },
        {
          id: "S-26",
          type: "U",
          tag: ["S"],
          name: "黑暗迪迦",
          link: [24],
          color: "#F44336",
          pic: "S-26.jpg"
        },
        {
          id: "S-27",
          type: "U",
          tag: ["S"],
          name: "黑暗奥特曼",
          link: [0],
          color: "#F44336",
          pic: "S-27.jpg"
        },
        {
          id: "S-28",
          type: "U",
          tag: ["S"],
          name: "维克特利奥特曼",
          link: [66],
          color: "#F44336",
          pic: "S-28.jpg"
        },
        {
          id: "S-29",
          type: "U",
          tag: ["S"],
          name: "银河斯特利姆奥特曼",
          link: [90],
          color: "#F44336",
          pic: "S-29.jpg"
        },
        {
          id: "S-30",
          type: "U",
          tag: ["S"],
          name: "银河维克特利奥特曼",
          link: [92],
          color: "#F44336",
          pic: "S-30.jpg"
        },
        {
          id: "S-31",
          type: "U",
          tag: ["S"],
          name: "赛罗奥特曼 闪耀形态",
          link: [64],
          color: "#F44336",
          pic: "S-31.jpg"
        },
        {
          id: "S-32",
          type: "U",
          tag: ["S"],
          name: "奈克赛斯奥特曼 青年形态",
          link: [49],
          color: "#F44336",
          pic: "S-32.jpg"
        },
        {
          id: "S-33",
          type: "U",
          tag: ["S"],
          name: "高斯奥特曼 日蚀模式",
          link: [40],
          color: "#F44336",
          pic: "S-33.jpg"
        },
        {
          id: "S-34",
          type: "U",
          tag: ["S"],
          name: "维克特利奥特曼 骑士形态",
          link: [91],
          color: "#F44336",
          pic: "S-34.jpg"
        },
        {
          id: "S-35",
          type: "U",
          tag: ["S"],
          name: "艾克斯奥特曼",
          link: [67],
          color: "#F44336",
          pic: "S-35.jpg"
        },
        {
          id: "S-36",
          type: "U",
          tag: ["S"],
          name: "超越艾克斯",
          link: [93],
          color: "#F44336",
          pic: "S-36.jpg"
        },
        {
          id: "S-37",
          type: "U",
          tag: ["S"],
          name: "火焰骑士",
          link: null,
          color: "#F44336",
          pic: "S-37.jpg"
        },
        {
          id: "S-38",
          type: "U",
          tag: ["S"],
          name: "镜子骑士",
          link: null,
          color: "#F44336",
          pic: "S-38.jpg"
        },
        {
          id: "S-39",
          type: "U",
          tag: ["S"],
          name: "钢铁九号",
          link: null,
          color: "#F44336",
          pic: "S-39.jpg"
        },
        {
          id: "S-40",
          type: "U",
          tag: ["S"],
          name: "欧布奥特曼 煌闪形态",
          link: [100],
          color: "#F44336",
          pic: "S-40.jpg"
        },
        {
          id: "S-41",
          type: "U",
          tag: ["S"],
          name: "欧布奥特曼 智勇形态",
          link: [101],
          color: "#F44336",
          pic: "S-41.jpg"
        },
        {
          id: "S-42",
          type: "U",
          tag: ["S"],
          name: "捷德奥特曼",
          link: [103],
          color: "#F44336",
          pic: "S-42.jpg"
        },
        {
          id: "S-43",
          type: "U",
          tag: ["S"],
          name: "捷德奥特曼 刚燃形态",
          link: [104],
          color: "#F44336",
          pic: "S-43.jpg"
        },
        {
          id: "S-44",
          type: "U",
          tag: ["S"],
          name: "捷德奥特曼 机敏形态",
          link: [105],
          color: "#F44336",
          pic: "S-44.jpg"
        },
        {
          id: "S-45",
          type: "U",
          tag: ["S"],
          name: "赛罗奥特曼 无限形态",
          link: [88],
          color: "#F44336",
          pic: "S-45.jpg"
        },
        {
          id: "S-46",
          type: "U",
          tag: ["S"],
          name: "捷德奥特曼 豪勇形态",
          link: [106],
          color: "#F44336",
          pic: "S-46.jpg"
        },
        {
          id: "S-47",
          type: "U",
          tag: ["S"],
          name: "捷德奥特曼 尊皇形态",
          link: [107],
          color: "#F44336",
          pic: "S-47.jpg"
        },
        {
          id: "S-48",
          type: "U",
          tag: ["S"],
          name: "捷德奥特曼 终极形态",
          link: [108],
          color: "#F44336",
          pic: "S-48.jpg"
        },
        {
          id: "S-49",
          type: "U",
          tag: ["S"],
          name: "欧布奥特曼 重光形态",
          link: [96],
          color: "#F44336",
          pic: "S-49.jpg"
        },
        {
          id: "S-50",
          type: "U",
          tag: ["S"],
          name: "欧布奥特曼 暴炎形态",
          link: [97],
          color: "#F44336",
          pic: "S-50.jpg"
        },
        {
          id: "S-51",
          type: "U",
          tag: ["S"],
          name: "欧布奥特曼 疾风形态",
          link: [98],
          color: "#F44336",
          pic: "S-51.jpg"
        },
        {
          id: "S-52",
          type: "U",
          tag: ["S"],
          name: "欧布奥特曼 暗耀形态",
          link: [99],
          color: "#F44336",
          pic: "S-52.jpg"
        },
        {
          id: "S-53",
          type: "U",
          tag: ["S"],
          name: "欧布奥特曼 原生形态",
          link: [68],
          color: "#F44336",
          pic: "S-53.jpg"
        },
        {
          id: "S-54",
          type: "U",
          tag: ["S"],
          name: "罗索奥特曼",
          link: [72],
          color: "#F44336",
          pic: "S-54.jpg"
        },
        {
          id: "S-55",
          type: "U",
          tag: ["S"],
          name: "布鲁奥特曼",
          link: [73],
          color: "#F44336",
          pic: "S-55.jpg"
        },
        {
          id: "S-56",
          type: "U",
          tag: ["S"],
          name: "罗索奥特曼 跃水形态",
          link: [110],
          color: "#F44336",
          pic: "S-56.jpg"
        },
        {
          id: "S-57",
          type: "U",
          tag: ["S"],
          name: "布鲁奥特曼 烈火形态",
          link: [113],
          color: "#F44336",
          pic: "S-57.jpg"
        },
        {
          id: "S-58",
          type: "U",
          tag: ["S"],
          name: "罗索奥特曼 旋风形态",
          link: [111],
          color: "#F44336",
          pic: "S-58.jpg"
        },
        {
          id: "S-59",
          type: "U",
          tag: ["S"],
          name: "布鲁奥特曼 旋风形态",
          link: [114],
          color: "#F44336",
          pic: "S-59.jpg"
        },
        {
          id: "S-60",
          type: "U",
          tag: ["S"],
          name: "罗索奥特曼 大地形态",
          link: [112],
          color: "#F44336",
          pic: "S-60.jpg"
        },
        {
          id: "S-61",
          type: "U",
          tag: ["S"],
          name: "布鲁奥特曼 大地形态",
          link: [115],
          color: "#F44336",
          pic: "S-61.jpg"
        },
        {
          id: "S-62",
          type: "U",
          tag: ["S"],
          name: "罗布奥特曼",
          link: [116],
          color: "#F44336",
          pic: "S-62.jpg"
        },
        {
          id: "S-63",
          type: "U",
          tag: ["S"],
          name: "格丽乔奥特曼",
          link: [74],
          color: "#F44336",
          pic: "S-63.jpg"
        },
        {
          id: "S-64",
          type: "U",
          tag: ["S"],
          name: "格罗布奥特曼",
          link: [117],
          color: "#F44336",
          pic: "S-64.jpg"
        },
        {
          id: "S-65",
          type: "U",
          tag: ["S"],
          name: "泰迦奥特曼",
          link: [77],
          color: "#F44336",
          pic: "S-65.jpg"
        },
        {
          id: "S-66",
          type: "U",
          tag: ["S"],
          name: "泰塔斯奥特曼",
          link: [79],
          color: "#F44336",
          pic: "S-66.jpg"
        },
        {
          id: "S-67",
          type: "U",
          tag: ["S"],
          name: "风马奥特曼",
          link: [80],
          color: "#F44336",
          pic: "S-67.jpg"
        },
        {
          id: "S-68",
          type: "U",
          tag: ["S"],
          name: "泰迦奥特曼光子地球形态",
          link: [78],
          color: "#F44336",
          pic: "S-68.jpg"
        },
        {
          id: "S-69",
          type: "U",
          tag: ["S"],
          name: "泰迦奥特曼 三重斯特利姆形态",
          link: [118],
          color: "#F44336",
          pic: "S-69.jpg"
        },
        {
          id: "S-70",
          type: "U",
          tag: ["S"],
          name: "令迦奥特曼",
          link: [124],
          color: "#F44336",
          pic: "S-70.jpg"
        },
        {
          id: "S-71",
          type: "U",
          tag: ["S"],
          name: "奥特之母",
          link: [7],
          color: "#F44336",
          pic: "S-71.jpg"
        },
        {
          id: "S-72",
          type: "U",
          tag: ["S"],
          name: "诺亚奥特曼",
          link: [51],
          color: "#F44336",
          pic: "S-72.jpg"
        },
        {
          id: "S-73",
          type: "U",
          tag: ["S"],
          name: "贝利亚奥特曼 早期形态",
          link: [61],
          color: "#F44336",
          pic: "S-73.jpg"
        },
        {
          id: "S-74",
          type: "U",
          tag: ["S"],
          name: "泽塔奥特曼",
          link: [81],
          color: "#F44336",
          pic: "S-74.jpg"
        },
        {
          id: "S-75",
          type: "U",
          tag: ["S"],
          name: "泽塔奥特曼 阿尔法装甲",
          link: [119],
          color: "#F44336",
          pic: "S-75.jpg"
        },
        {
          id: "S-76",
          type: "U",
          tag: ["S"],
          name: "泽塔奥特曼 贝塔冲击",
          link: [120],
          color: "#F44336",
          pic: "S-76.jpg"
        },
        {
          id: "S-77",
          type: "U",
          tag: ["S"],
          name: "捷德奥特曼 银河初升",
          link: [109],
          color: "#F44336",
          pic: "S-77.jpg"
        },
        {
          id: "S-78",
          type: "U",
          tag: ["S"],
          name: "泽塔奥特曼 伽马未来",
          link: [121],
          color: "#F44336",
          pic: "S-78.jpg"
        },
        {
          id: "S-79",
          type: "U",
          tag: ["S"],
          name: "泽塔奥特曼 德尔塔天爪",
          link: [122],
          color: "#F44336",
          pic: "S-79.jpg"
        },
        {
          id: "S-80",
          type: "U",
          tag: ["S"],
          name: "特利迦奥特曼 复合型",
          link: [82],
          color: "#F44336",
          pic: "S-80.jpg"
        },
        {
          id: "S-81",
          type: "U",
          tag: ["S"],
          name: "特利迦奥特曼 强力型",
          link: [83],
          color: "#F44336",
          pic: "S-81.jpg"
        },
        {
          id: "S-82",
          type: "U",
          tag: ["S"],
          name: "特利迦奥特曼 空中型",
          link: [84],
          color: "#F44336",
          pic: "S-82.jpg"
        },
        {
          id: "EX-01",
          type: "U",
          tag: ["EX"],
          name: "赛罗奥特曼 强壮日冕型",
          link: [86],
          color: "#F44336",
          pic: "EX-01.jpg"
        },
        {
          id: "EX-02",
          type: "U",
          tag: ["EX"],
          name: "究极赛罗",
          link: [63],
          color: "#F44336",
          pic: "EX-02.jpg"
        },
        {
          id: "EX-03",
          type: "U",
          tag: ["EX"],
          name: "赛罗奥特曼 月神奇迹型",
          link: [87],
          color: "#F44336",
          pic: "EX-03.jpg"
        },
        {
          id: "EX-04",
          type: "U",
          tag: ["EX"],
          name: "利布特奥特曼",
          link: [70],
          color: "#F44336",
          pic: "EX-04.jpg"
        },
        {
          id: "EX-05",
          type: "U",
          tag: ["EX"],
          name: "葛雷奥特曼",
          link: [17],
          color: "#F44336",
          pic: "EX-05.jpg"
        },
        {
          id: "EX-06",
          type: "U",
          tag: ["EX"],
          name: "乔尼亚斯奥特曼",
          link: [11],
          color: "#F44336",
          pic: "EX-06.jpg"
        },
        {
          id: "EX-07",
          type: "U",
          tag: ["EX"],
          name: "帕瓦特奥特曼",
          link: [18],
          color: "#F44336",
          pic: "EX-07.jpg"
        },
        {
          id: "EX-08",
          type: "U",
          tag: ["EX"],
          name: "迪迦奥特曼 复合型",
          link: [20],
          color: "#F44336",
          pic: "EX-08.jpg"
        },
        {
          id: "EX-09",
          type: "U",
          tag: ["EX"],
          name: "迪迦奥特曼 强力型",
          link: [21],
          color: "#F44336",
          pic: "EX-09.jpg"
        },
        {
          id: "EX-10",
          type: "U",
          tag: ["EX"],
          name: "迪迦奥特曼 空中型",
          link: [22],
          color: "#F44336",
          pic: "EX-10.jpg"
        },
        {
          id: "EX-11",
          type: "U",
          tag: ["EX"],
          name: "泽塔奥特曼",
          link: [81],
          color: "#F44336",
          pic: "EX-11.jpg"
        },
        {
          id: "EX-12",
          type: "U",
          tag: ["EX"],
          name: "特空机1号 赛文加",
          link: null,
          color: "#F44336",
          pic: "EX-12.jpg"
        },
        {
          id: "K-01",
          type: "M",
          tag: ["K"],
          name: "宇宙忍者 巴尔坦星人",
          link: null,
          color: "#F44336",
          pic: "K-01.jpg"
        },
        {
          id: "K-02",
          type: "M",
          tag: ["K"],
          name: "古代怪兽 哥莫拉",
          link: null,
          color: "#F44336",
          pic: "K-02.jpg"
        },
        {
          id: "K-03",
          type: "M",
          tag: ["K"],
          name: "宇宙恐龙 杰顿",
          link: null,
          color: "#F44336",
          pic: "K-03.jpg"
        },
        {
          id: "K-04",
          type: "M",
          tag: ["K"],
          name: "扎拉加斯第一代",
          link: null,
          color: "#F44336",
          pic: "K-04.jpg"
        },
        {
          id: "K-05",
          type: "M",
          tag: ["K"],
          name: "宇宙怪兽 艾雷王",
          link: null,
          color: "#F44336",
          pic: "K-05.jpg"
        },
        {
          id: "K-06",
          type: "M",
          tag: ["K"],
          name: "戈德拉星人",
          link: null,
          color: "#F44336",
          pic: "K-06.jpg"
        },
        {
          id: "K-07",
          type: "M",
          tag: ["K"],
          name: "宇宙机器人 金古桥",
          link: null,
          color: "#F44336",
          pic: "K-07.jpg"
        },
        {
          id: "K-08",
          type: "M",
          tag: ["K"],
          name: "保镖怪兽 布莱克王",
          link: null,
          color: "#F44336",
          pic: "K-08.jpg"
        },
        {
          id: "K-09",
          type: "M",
          tag: ["K"],
          name: "凯姆尔人",
          link: null,
          color: "#F44336",
          pic: "K-09.jpg"
        },
        {
          id: "K-10",
          type: "M",
          tag: ["K"],
          name: "双头怪兽 庞敦王",
          link: null,
          color: "#F44336",
          pic: "K-10.jpg"
        },
        {
          id: "K-11",
          type: "M",
          tag: ["K"],
          name: "海底原人 拉贡",
          link: null,
          color: "#F44336",
          pic: "K-11.jpg"
        },
        {
          id: "K-12",
          type: "M",
          tag: ["K"],
          name: "闪电达兰比尔",
          link: null,
          color: "#F44336",
          pic: "K-12.jpg"
        },
        {
          id: "K-13",
          type: "M",
          tag: ["K"],
          name: "磁力怪兽 安东拉",
          link: null,
          color: "#F44336",
          pic: "K-13.jpg"
        },
        {
          id: "K-14",
          type: "M",
          tag: ["K"],
          name: "骷髅怪兽 雷德王",
          link: null,
          color: "#F44336",
          pic: "K-14.jpg"
        },
        {
          id: "K-15",
          type: "M",
          tag: ["K"],
          name: "二次元怪兽 加巴顿B",
          link: null,
          color: "#F44336",
          pic: "K-15.jpg"
        },
        {
          id: "K-16",
          type: "M",
          tag: ["K"],
          name: "龙卷风怪兽 西格拉斯",
          link: null,
          color: "#F44336",
          pic: "K-16.jpg"
        },
        {
          id: "K-17",
          type: "M",
          tag: ["K"],
          name: "宇宙大怪兽 贝蒙斯坦",
          link: null,
          color: "#F44336",
          pic: "K-17.jpg"
        },
        {
          id: "K-18",
          type: "M",
          tag: ["K"],
          name: "超兽 巴拉巴",
          link: null,
          color: "#F44336",
          pic: "K-18.jpg"
        },
        {
          id: "K-19",
          type: "M",
          tag: ["K"],
          name: "克拉勃王",
          link: null,
          color: "#F44336",
          pic: "K-19.jpg"
        },
        {
          id: "K-20",
          type: "M",
          tag: ["K"],
          name: "独角超兽 巴克西姆",
          link: null,
          color: "#F44336",
          pic: "K-20.jpg"
        },
        {
          id: "K-21",
          type: "M",
          tag: ["K"],
          name: "蛾超兽 多拉格利",
          link: null,
          color: "#F44336",
          pic: "K-21.jpg"
        },
        {
          id: "K-22",
          type: "M",
          tag: ["K"],
          name: "莫奇隆",
          link: null,
          color: "#F44336",
          pic: "K-22.jpg"
        },
        {
          id: "K-23",
          type: "M",
          tag: ["K"],
          name: "马格马星人",
          link: null,
          color: "#F44336",
          pic: "K-23.jpg"
        },
        {
          id: "K-24",
          type: "M",
          tag: ["K"],
          name: "莎尔曼多拉",
          link: null,
          color: "#F44336",
          pic: "K-24.jpg"
        },
        {
          id: "K-25",
          type: "M",
          tag: ["K"],
          name: "超古代怪兽 哥尔赞",
          link: null,
          color: "#F44336",
          pic: "K-25.jpg"
        },
        {
          id: "K-26",
          type: "M",
          tag: ["K"],
          name: "黑暗扎基",
          link: null,
          color: "#F44336",
          pic: "K-26.jpg"
        },
        {
          id: "K-27",
          type: "M",
          tag: ["K"],
          name: "宇宙三面魔像 伽休莱因",
          link: null,
          color: "#F44336",
          pic: "K-27.jpg"
        },
        {
          id: "K-28",
          type: "M",
          tag: ["K"],
          name: "异次元宇宙人 伊卡尔斯星人",
          link: null,
          color: "#F44336",
          pic: "K-28.jpg"
        },
        {
          id: "K-29",
          type: "M",
          tag: ["K"],
          name: "分身宇宙人 嘎次星人",
          link: null,
          color: "#F44336",
          pic: "K-29.jpg"
        },
        {
          id: "K-30",
          type: "M",
          tag: ["K"],
          name: "雪女怪兽 斯诺格",
          link: null,
          color: "#F44336",
          pic: "K-30.jpg"
        },
        {
          id: "K-31",
          type: "M",
          tag: ["K"],
          name: "液汁超兽 汉扎基兰",
          link: null,
          color: "#F44336",
          pic: "K-31.jpg"
        },
        {
          id: "K-32",
          type: "M",
          tag: ["K"],
          name: "异次元人 亚波人",
          link: null,
          color: "#F44336",
          pic: "K-32.jpg"
        },
        {
          id: "K-33",
          type: "M",
          tag: ["K"],
          name: "宇宙海人 巴尔吉星人",
          link: null,
          color: "#F44336",
          pic: "K-33.jpg"
        },
        {
          id: "K-34",
          type: "M",
          tag: ["K"],
          name: "宇宙大怪兽 阿斯托罗姆斯",
          link: null,
          color: "#F44336",
          pic: "K-34.jpg"
        },
        {
          id: "K-35",
          type: "M",
          tag: ["K"],
          name: "希尔巴贡",
          link: null,
          color: "#F44336",
          pic: "K-35.jpg"
        },
        {
          id: "K-36",
          type: "M",
          tag: ["K"],
          name: "奇兽眼Q",
          link: null,
          color: "#F44336",
          pic: "K-36.jpg"
        },
        {
          id: "K-37",
          type: "M",
          tag: ["K"],
          name: "冷冻怪兽 拉格拉斯",
          link: null,
          color: "#F44336",
          pic: "K-37.jpg"
        },
        {
          id: "K-38",
          type: "M",
          tag: ["K"],
          name: "佐亚穆鲁奇",
          link: null,
          color: "#F44336",
          pic: "K-38.jpg"
        },
        {
          id: "K-39",
          type: "M",
          tag: ["K"],
          name: "罗贝拉格",
          link: null,
          color: "#F44336",
          pic: "K-39.jpg"
        },
        {
          id: "K-40",
          type: "M",
          tag: ["K"],
          name: "黑暗宇宙大皇帝 安培拉星人",
          link: null,
          color: "#F44336",
          pic: "K-40.jpg"
        },
        {
          id: "K-41",
          type: "M",
          tag: ["K"],
          name: "宇宙剑豪 扎姆夏",
          link: null,
          color: "#F44336",
          pic: "K-41.jpg"
        },
        {
          id: "K-42",
          type: "M",
          tag: ["K"],
          name: "火焰哥尔赞",
          link: null,
          color: "#F44336",
          pic: "K-42.jpg"
        },
        {
          id: "K-43",
          type: "M",
          tag: ["K"],
          name: "贝利亚奥特曼",
          link: [60],
          color: "#F44336",
          pic: "K-43.jpg"
        },
        {
          id: "K-44",
          type: "M",
          tag: ["K"],
          name: "宇宙恐龙 海帕杰顿",
          link: null,
          color: "#F44336",
          pic: "K-44.jpg"
        },
        {
          id: "K-45",
          type: "M",
          tag: ["K"],
          name: "伽鲁贝洛斯",
          link: null,
          color: "#F44336",
          pic: "K-45.jpg"
        },
        {
          id: "K-46",
          type: "M",
          tag: ["K"],
          name: "暗杀宇宙人 纳克尔星人",
          link: null,
          color: "#F44336",
          pic: "K-46.jpg"
        },
        {
          id: "K-47",
          type: "M",
          tag: ["K"],
          name: "硬币怪兽 卡尼贡",
          link: null,
          color: "#F44336",
          pic: "K-47.jpg"
        },
        {
          id: "K-48",
          type: "M",
          tag: ["K"],
          name: "米拉库尔星人",
          link: null,
          color: "#F44336",
          pic: "K-48.jpg"
        },
        {
          id: "K-49",
          type: "M",
          tag: ["K"],
          name: "宇宙恶灵 阿库马尼亚星人",
          link: null,
          color: "#F44336",
          pic: "K-49.jpg"
        },
        {
          id: "K-50",
          type: "M",
          tag: ["K"],
          name: "彗星怪兽 多拉考",
          link: null,
          color: "#F44336",
          pic: "K-50.jpg"
        },
        {
          id: "K-51",
          type: "M",
          tag: ["K"],
          name: "地底怪兽 泰莱斯通",
          link: null,
          color: "#F44336",
          pic: "K-51.jpg"
        },
        {
          id: "K-52",
          type: "M",
          tag: ["K"],
          name: "邪恶迪迦",
          link: null,
          color: "#F44336",
          pic: "K-52.jpg"
        },
        {
          id: "K-53",
          type: "M",
          tag: ["K"],
          name: "宇宙战斗兽 超戈布",
          link: null,
          color: "#F44336",
          pic: "K-53.jpg"
        },
        {
          id: "K-54",
          type: "M",
          tag: ["K"],
          name: "新巴尔坦星人",
          link: null,
          color: "#F44336",
          pic: "K-54.jpg"
        },
        {
          id: "K-55",
          type: "M",
          tag: ["K"],
          name: "米克拉斯",
          link: null,
          color: "#F44336",
          pic: "K-55.jpg"
        },
        {
          id: "K-56",
          type: "M",
          tag: ["K"],
          name: "黑暗路基艾尔",
          link: null,
          color: "#F44336",
          pic: "K-56.jpg"
        },
        {
          id: "K-57",
          type: "M",
          tag: ["K"],
          name: "EX雷德王",
          link: null,
          color: "#F44336",
          pic: "K-57.jpg"
        },
        {
          id: "K-58",
          type: "M",
          tag: ["K"],
          name: "导弹超兽 贝劳克恩",
          link: null,
          color: "#F44336",
          pic: "K-58.jpg"
        },
        {
          id: "K-59",
          type: "M",
          tag: ["K"],
          name: "双尾怪",
          link: null,
          color: "#F44336",
          pic: "K-59.jpg"
        },
        {
          id: "K-60",
          type: "M",
          tag: ["K"],
          name: "古敦",
          link: null,
          color: "#F44336",
          pic: "K-60.jpg"
        },
        {
          id: "K-61",
          type: "M",
          tag: ["K"],
          name: "萨德拉",
          link: null,
          color: "#F44336",
          pic: "K-61.jpg"
        },
        {
          id: "K-62",
          type: "M",
          tag: ["K"],
          name: "超古代龙 美尔巴",
          link: null,
          color: "#F44336",
          pic: "K-62.jpg"
        },
        {
          id: "K-63",
          type: "M",
          tag: ["K"],
          name: "雷丘巴斯",
          link: null,
          color: "#F44336",
          pic: "K-63.jpg"
        },
        {
          id: "K-64",
          type: "M",
          tag: ["K"],
          name: "恐龙坦克",
          link: null,
          color: "#F44336",
          pic: "K-64.jpg"
        },
        {
          id: "K-65",
          type: "M",
          tag: ["K"],
          name: "宇宙怪兽 百慕拉",
          link: null,
          color: "#F44336",
          pic: "K-65.jpg"
        },
        {
          id: "K-66",
          type: "M",
          tag: ["K"],
          name: "谢帕顿",
          link: null,
          color: "#F44336",
          pic: "K-66.jpg"
        },
        {
          id: "K-67",
          type: "M",
          tag: ["K"],
          name: "无双铁神 英普莱扎",
          link: null,
          color: "#F44336",
          pic: "K-67.jpg"
        },
        {
          id: "K-68",
          type: "M",
          tag: ["K"],
          name: "幻觉宇宙人 梅特龙星人",
          link: null,
          color: "#F44336",
          pic: "K-68.jpg"
        },
        {
          id: "K-69",
          type: "M",
          tag: ["K"],
          name: "火山怪鸟 巴顿",
          link: null,
          color: "#F44336",
          pic: "K-69.jpg"
        },
        {
          id: "K-70",
          type: "M",
          tag: ["K"],
          name: "金古桥特装版",
          link: null,
          color: "#F44336",
          pic: "K-70.jpg"
        },
        {
          id: "K-71",
          type: "M",
          tag: ["K"],
          name: "大蚁超兽 阿里蓬塔",
          link: null,
          color: "#F44336",
          pic: "K-71.jpg"
        },
        {
          id: "K-72",
          type: "M",
          tag: ["K"],
          name: "维克特利杀手",
          link: null,
          color: "#F44336",
          pic: "K-72.jpg"
        },
        {
          id: "K-73",
          type: "M",
          tag: ["K"],
          name: "宙达",
          link: null,
          color: "#F44336",
          pic: "K-73.jpg"
        },
        {
          id: "K-74",
          type: "M",
          tag: ["K"],
          name: "熔铁怪兽 迪玛迦",
          link: null,
          color: "#F44336",
          pic: "K-74.jpg"
        },
        {
          id: "K-75",
          type: "M",
          tag: ["K"],
          name: "机械怪兽 机械哥莫拉",
          link: null,
          color: "#F44336",
          pic: "K-75.jpg"
        },
        {
          id: "K-76",
          type: "M",
          tag: ["K"],
          name: "电子哥莫拉",
          link: null,
          color: "#F44336",
          pic: "K-76.jpg"
        },
        {
          id: "K-77",
          type: "M",
          tag: ["K"],
          name: "皮古蒙",
          link: null,
          color: "#F44336",
          pic: "K-77.jpg"
        },
        {
          id: "K-78",
          type: "M",
          tag: ["K"],
          name: "帝国机兵 雷吉内德",
          link: null,
          color: "#F44336",
          pic: "K-78.jpg"
        },
        {
          id: "K-79",
          type: "M",
          tag: ["K"],
          name: "黑暗洛普斯赛罗",
          link: null,
          color: "#F44336",
          pic: "K-79.jpg"
        },
        {
          id: "K-80",
          type: "M",
          tag: ["K"],
          name: "阿斯特隆",
          link: null,
          color: "#F44336",
          pic: "K-80.jpg"
        },
        {
          id: "K-81",
          type: "M",
          tag: ["K"],
          name: "暴君怪兽 泰兰特",
          link: null,
          color: "#F44336",
          pic: "K-81.jpg"
        },
        {
          id: "K-82",
          type: "M",
          tag: ["K"],
          name: "桑德里阿斯",
          link: null,
          color: "#F44336",
          pic: "K-82.jpg"
        },
        {
          id: "K-83",
          type: "M",
          tag: ["K"],
          name: "三面怪人 达达",
          link: null,
          color: "#F44336",
          pic: "K-83.jpg"
        },
        {
          id: "K-84",
          type: "M",
          tag: ["K"],
          name: "基耶龙星兽",
          link: null,
          color: "#F44336",
          pic: "K-84.jpg"
        },
        {
          id: "K-85",
          type: "M",
          tag: ["K"],
          name: "古维拉",
          link: null,
          color: "#F44336",
          pic: "K-85.jpg"
        },
        {
          id: "K-86",
          type: "M",
          tag: ["K"],
          name: "加拉特隆MK-2",
          link: null,
          color: "#F44336",
          pic: "K-86.jpg"
        },
        {
          id: "K-87",
          type: "M",
          tag: ["K"],
          name: "伽古拉斯·伽古拉",
          link: null,
          color: "#F44336",
          pic: "K-87.jpg"
        },
        {
          id: "K-88",
          type: "M",
          tag: ["K"],
          name: "海帕杰顿死镰",
          link: null,
          color: "#F44336",
          pic: "K-88.jpg"
        },
        {
          id: "K-89",
          type: "M",
          tag: ["K"],
          name: "大魔王兽 玛伽大蛇",
          link: null,
          color: "#F44336",
          pic: "K-89.jpg"
        },
        {
          id: "K-90",
          type: "M",
          tag: ["K"],
          name: "圆盘生物 诺瓦",
          link: null,
          color: "#F44336",
          pic: "K-90.jpg"
        },
        {
          id: "K-91",
          type: "M",
          tag: ["K"],
          name: "火炎骨兽 格尔吉欧波恩",
          link: null,
          color: "#F44336",
          pic: "K-91.jpg"
        },
        {
          id: "K-92",
          type: "M",
          tag: ["K"],
          name: "石化魔兽 贾戈尔贡",
          link: null,
          color: "#F44336",
          pic: "K-92.jpg"
        },
        {
          id: "K-93",
          type: "M",
          tag: ["K"],
          name: "猛禽怪兽 古厄巴萨",
          link: null,
          color: "#F44336",
          pic: "K-93.jpg"
        },
        {
          id: "K-94",
          type: "M",
          tag: ["K"],
          name: "超级黑之王暗黑欧布奥特曼",
          link: null,
          color: "#F44336",
          pic: "K-94.jpg"
        },
        {
          id: "K-95",
          type: "M",
          tag: ["K"],
          name: "豪烈暴兽 霍洛波罗兹",
          link: null,
          color: "#F44336",
          pic: "K-95.jpg"
        },
        {
          id: "K-96",
          type: "M",
          tag: ["K"],
          name: "爆击骨兽 格尔吉欧王",
          link: null,
          color: "#F44336",
          pic: "K-96.jpg"
        },
        {
          id: "K-97",
          type: "M",
          tag: ["K"],
          name: "布斯卡",
          link: null,
          color: "#F44336",
          pic: "K-97.jpg"
        },
        {
          id: "K-98",
          type: "M",
          tag: ["K"],
          name: "超铠装兽 格鲁吉欧女王",
          link: null,
          color: "#F44336",
          pic: "K-98.jpg"
        },
        {
          id: "K-99",
          type: "M",
          tag: ["K"],
          name: "超合体怪兽 古兰德王",
          link: null,
          color: "#F44336",
          pic: "K-99.jpg"
        },
        {
          id: "K-100",
          type: "M",
          tag: ["K"],
          name: "次元凶兽 剃刀迪玛伽",
          link: null,
          color: "#F44336",
          pic: "K-100.jpg"
        },
        {
          id: "K-101",
          type: "M",
          tag: ["K"],
          name: "托雷基亚奥特曼",
          link: [75],
          color: "#F44336",
          pic: "K-101.jpg"
        },
        {
          id: "K-102",
          type: "M",
          tag: ["K"],
          name: "超合体怪兽 法伊布王",
          link: null,
          color: "#F44336",
          pic: "K-102.jpg"
        },
        {
          id: "K-103",
          type: "M",
          tag: ["K"],
          name: "赛格古",
          link: null,
          color: "#F44336",
          pic: "K-103.jpg"
        },
        {
          id: "K-104",
          type: "M",
          tag: ["K"],
          name: "虚空怪兽 格利扎 最终形态",
          link: null,
          color: "#F44336",
          pic: "K-104.jpg"
        },
        {
          id: "K-105",
          type: "M",
          tag: ["K"],
          name: "文明裁决者 加拉特隆",
          link: null,
          color: "#F44336",
          pic: "K-105.jpg"
        },
        {
          id: "K-106",
          type: "M",
          tag: ["K"],
          name: "极恶贝利亚",
          link: null,
          color: "#F44336",
          pic: "K-106.jpg"
        },
        {
          id: "K-107",
          type: "M",
          tag: ["K"],
          name: "赫尔贝洛斯",
          link: null,
          color: "#F44336",
          pic: "K-107.jpg"
        },
        {
          id: "K-108",
          type: "M",
          tag: ["K"],
          name: "赛古梅戈尔",
          link: null,
          color: "#F44336",
          pic: "K-108.jpg"
        },
        {
          id: "K-109",
          type: "M",
          tag: ["K"],
          name: "暗夜毒牙",
          link: null,
          color: "#F44336",
          pic: "K-109.jpg"
        },
        {
          id: "K-110",
          type: "M",
          tag: ["K"],
          name: "奇玛伊拉",
          link: null,
          color: "#F44336",
          pic: "K-110.jpg"
        },
        {
          id: "K-111",
          type: "M",
          tag: ["K"],
          name: "机械迪洛斯",
          link: null,
          color: "#F44336",
          pic: "K-111.jpg"
        },
        {
          id: "K-112",
          type: "M",
          tag: ["K"],
          name: "骷髅哥莫拉",
          link: null,
          color: "#F44336",
          pic: "K-112.jpg"
        },
        {
          id: "K-113",
          type: "M",
          tag: ["K"],
          name: "爆雷闪电",
          link: null,
          color: "#F44336",
          pic: "K-113.jpg"
        },
        {
          id: "K-114",
          type: "M",
          tag: ["K"],
          name: "基斯特隆",
          link: null,
          color: "#F44336",
          pic: "K-114.jpg"
        },
        {
          id: "K-115",
          type: "M",
          tag: ["K"],
          name: "特贡",
          link: null,
          color: "#F44336",
          pic: "K-115.jpg"
        },
        {
          id: "K-116",
          type: "M",
          tag: ["K"],
          name: "格里姆特",
          link: null,
          color: "#F44336",
          pic: "K-116.jpg"
        },
        {
          id: "K-117",
          type: "M",
          tag: ["K"],
          name: "百体兽",
          link: null,
          color: "#F44336",
          pic: "K-117.jpg"
        },
        {
          id: "K-118",
          type: "M",
          tag: ["K"],
          name: "恺撒贝利亚",
          link: null,
          color: "#F44336",
          pic: "K-118.jpg"
        },
        {
          id: "K-119",
          type: "M",
          tag: ["K"],
          name: "终极贝利亚",
          link: null,
          color: "#F44336",
          pic: "K-119.jpg"
        },
        {
          id: "K-120",
          type: "M",
          tag: ["K"],
          name: "奇美拉柏洛斯",
          link: null,
          color: "#F44336",
          pic: "K-120.jpg"
        },
        {
          id: "K-121",
          type: "M",
          tag: ["K"],
          name: "赛文加",
          link: null,
          color: "#F44336",
          pic: "K-121.jpg"
        },
        {
          id: "K-122",
          type: "M",
          tag: ["K"],
          name: "凶暴宇宙鮫",
          link: null,
          color: "#F44336",
          pic: "K-122.jpg"
        },
        {
          id: "K-123",
          type: "M",
          tag: ["K"],
          name: "内隆嘎",
          link: null,
          color: "#F44336",
          pic: "K-123.jpg"
        },
        {
          id: "K-124",
          type: "M",
          tag: ["K"],
          name: "乌英达姆",
          link: null,
          color: "#F44336",
          pic: "K-124.jpg"
        },
        {
          id: "K-125",
          type: "M",
          tag: ["K"],
          name: "芝庞顿",
          link: null,
          color: "#F44336",
          pic: "K-125.jpg"
        },
        {
          id: "K-126",
          type: "M",
          tag: ["K"],
          name: "吉尔巴里斯",
          link: null,
          color: "#F44336",
          pic: "K-126.jpg"
        },
        {
          id: "K-127",
          type: "M",
          tag: ["K"],
          name: "闪电杀手",
          link: null,
          color: "#F44336",
          pic: "K-127.jpg"
        },
        {
          id: "K-128",
          type: "M",
          tag: ["K"],
          name: "佩丹杰顿",
          link: null,
          color: "#F44336",
          pic: "K-128.jpg"
        },
        {
          id: "K-129",
          type: "M",
          tag: ["K"],
          name: "帕罗萨星人",
          link: null,
          color: "#F44336",
          pic: "K-129.jpg"
        },
        {
          id: "K-130",
          type: "M",
          tag: ["K"],
          name: "布鲁顿",
          link: null,
          color: "#F44336",
          pic: "K-130.jpg"
        },
        {
          id: "K-131",
          type: "M",
          tag: ["K"],
          name: "格理扎",
          link: null,
          color: "#F44336",
          pic: "K-131.jpg"
        },
        {
          id: "K-132",
          type: "M",
          tag: ["K"],
          name: "M1号",
          link: null,
          color: "#F44336",
          pic: "K-132.jpg"
        },
        {
          id: "K-133",
          type: "M",
          tag: ["K"],
          name: "奥特人造机甲赛罗",
          link: null,
          color: "#F44336",
          pic: "K-133.jpg"
        },
        {
          id: "K-134",
          type: "M",
          tag: ["K"],
          name: "歼灭机甲兽 德斯特鲁多斯",
          link: null,
          color: "#F44336",
          pic: "K-134.jpg"
        },
        {
          id: "K-135",
          type: "M",
          tag: ["K"],
          name: "基里艾洛德人",
          link: null,
          color: "#F44336",
          pic: "K-135.jpg"
        },
        {
          id: "K-136",
          type: "M",
          tag: ["K"],
          name: "超合成兽人 吉尔加诺德",
          link: null,
          color: "#F44336",
          pic: "K-136.jpg"
        },
        {
          id: "K-137",
          type: "M",
          tag: ["K"],
          name: "电脑魔神 戴斯法萨",
          link: null,
          color: "#F44336",
          pic: "K-137.jpg"
        },
        {
          id: "K-138",
          type: "M",
          tag: ["K"],
          name: "哥美斯S",
          link: null,
          color: "#F44336",
          pic: "K-138.jpg"
        },
        {
          id: "K-139",
          type: "M",
          tag: ["K"],
          name: "基路伯",
          link: null,
          color: "#F44336",
          pic: "K-139.jpg"
        },
        {
          id: "K-140",
          type: "M",
          tag: ["K"],
          name: "盖迪",
          link: null,
          color: "#F44336",
          pic: "K-140.jpg"
        },
        {
          id: "K-141",
          type: "M",
          tag: ["K"],
          name: "宇宙有翼骨兽 盖朗达",
          link: null,
          color: "#F44336",
          pic: "K-141.jpg"
        },
        {
          id: "K-142",
          type: "M",
          tag: ["K"],
          name: "超古代先兵怪兽 佐加",
          link: null,
          color: "#F44336",
          pic: "K-142.jpg"
        },
        {
          id: "K-143",
          type: "M",
          tag: ["K"],
          name: "爱憎战士 卡蜜拉",
          link: null,
          color: "#F44336",
          pic: "K-143.jpg"
        },
        {
          id: "K-144",
          type: "M",
          tag: ["K"],
          name: "刚力战士 达拉姆",
          link: null,
          color: "#F44336",
          pic: "K-144.jpg"
        },
        {
          id: "K-145",
          type: "M",
          tag: ["K"],
          name: "俊敏战士 希特拉",
          link: null,
          color: "#F44336",
          pic: "K-145.jpg"
        },
        {
          id: "K-146",
          type: "M",
          tag: ["K"],
          name: "妖丽战士 卡尔蜜拉",
          link: null,
          color: "#F44336",
          pic: "K-146.jpg"
        },
        {
          id: "K-147",
          type: "M",
          tag: ["K"],
          name: "哥尔巴",
          link: null,
          color: "#F44336",
          pic: "K-147.jpg"
        },
        {
          id: "K-148",
          type: "M",
          tag: ["K"],
          name: "刚力斗士 达贡",
          link: null,
          color: "#F44336",
          pic: "K-148.jpg"
        },
        {
          id: "K-149",
          type: "M",
          tag: ["K"],
          name: "美特隆星人 玛露鲁",
          link: null,
          color: "#F44336",
          pic: "K-149.jpg"
        },
        {
          id: "K-150",
          type: "M",
          tag: ["K"],
          name: "俊敏策士 希特拉姆",
          link: null,
          color: "#F44336",
          pic: "K-150.jpg"
        },
        {
          id: "K-151",
          type: "M",
          tag: ["K"],
          name: "加佐特",
          link: null,
          color: "#F44336",
          pic: "K-151.jpg"
        },
        {
          id: "K-152",
          type: "M",
          tag: ["K"],
          name: "欧克古维拉",
          link: null,
          color: "#F44336",
          pic: "K-152.jpg"
        },
        {
          id: "K-153",
          type: "M",
          tag: ["K"],
          name: "破坏黑暗暴龙 死亡德拉戈",
          link: null,
          color: "#F44336",
          pic: "K-153.jpg"
        },
        {
          id: "K-154",
          type: "M",
          tag: ["K"],
          name: "行星破坏神 撒旦迪洛斯",
          link: null,
          color: "#F44336",
          pic: "K-154.jpg"
        },
        {
          id: "K-155",
          type: "M",
          tag: ["K"],
          name: "特空机3号 金古桥军械库定制",
          link: null,
          color: "#F44336",
          pic: "K-155.jpg"
        },
        {
          id: "K-156",
          type: "M",
          tag: ["K"],
          name: "帕瓦特达达",
          link: null,
          color: "#F44336",
          pic: "K-156.jpg"
        },
        {
          id: "EX-K-01",
          type: "M",
          tag: ["EX-K"],
          name: "佩盖萨星人 佩嘉",
          link: null,
          color: "#F44336",
          pic: "EX-K-01.jpg"
        },
        {
          id: "EX-K-02",
          type: "M",
          tag: ["EX-K"],
          name: "黑暗艾克斯奥特曼",
          link: null,
          color: "#F44336",
          pic: "EX-K-02.jpg"
        },
        {
          id: "EX-K-03",
          type: "M",
          tag: ["EX-K"],
          name: "黑暗捷德奥特曼",
          link: null,
          color: "#F44336",
          pic: "EX-K-03.jpg"
        },
        {
          id: "EX-K-04",
          type: "M",
          tag: ["EX-K"],
          name: "托雷基亚奥特曼 早期形态",
          link: [76],
          color: "#F44336",
          pic: "EX-K-04.jpg"
        },
        {
          id: "D-01",
          type: "M",
          tag: ["DX"],
          name: "超怪兽 超级古兰德王",
          link: null,
          color: "#F44336",
          pic: "D-01.jpg"
        },
        {
          id: "D-02",
          type: "M",
          tag: ["DX"],
          name: "暴君怪兽 泰兰特",
          link: null,
          color: "#F44336",
          pic: "D-02.jpg"
        },
        {
          id: "D-03",
          type: "M",
          tag: ["DX"],
          name: "根源破灭天使 佐格",
          link: null,
          color: "#F44336",
          pic: "D-03.jpg"
        },
        {
          id: "D-04",
          type: "M",
          tag: ["DX"],
          name: "切布尔星人 战斗装甲",
          link: null,
          color: "#F44336",
          pic: "D-04.jpg"
        },
        {
          id: "D-05",
          type: "M",
          tag: ["DX"],
          name: "超合体怪兽 法伊布王",
          link: null,
          color: "#F44336",
          pic: "D-05.jpg"
        },
        {
          id: "D-06",
          type: "M",
          tag: ["DX"],
          name: "艾塔尔加",
          link: null,
          color: "#F44336",
          pic: "D-06.jpg"
        },
        {
          id: "D-07",
          type: "M",
          tag: ["DX"],
          name: "怨灵超级古兰特王",
          link: null,
          color: "#F44336",
          pic: "D-07.jpg"
        },
        {
          id: "D-08",
          type: "M",
          tag: ["DX"],
          name: "电弧贝利亚",
          link: null,
          color: "#F44336",
          pic: "D-08.jpg"
        },
        {
          id: "D-09",
          type: "M",
          tag: ["DX"],
          name: "维克特路基艾尔",
          link: null,
          color: "#F44336",
          pic: "D-09.jpg"
        },
        {
          id: "D-10",
          type: "M",
          tag: ["DX"],
          name: "石化魔兽 贾戈尔贡",
          link: null,
          color: "#F44336",
          pic: "D-10.jpg"
        },
        {
          id: "D-11",
          type: "M",
          tag: ["DX"],
          name: "熔铁怪兽 迪玛迦",
          link: null,
          color: "#F44336",
          pic: "D-11.jpg"
        },
        {
          id: "D-12",
          type: "M",
          tag: ["DX"],
          name: "格利扎",
          link: null,
          color: "#F44336",
          pic: "D-12.jpg"
        },
        {
          id: "D-13",
          type: "M",
          tag: ["DX"],
          name: "格古火焰哥尔赞",
          link: null,
          color: "#F44336",
          pic: "D-13.jpg"
        },
        {
          id: "D-14",
          type: "M",
          tag: ["DX"],
          name: "格古安东拉",
          link: null,
          color: "#F44336",
          pic: "D-14.jpg"
        },
        {
          id: "D-15",
          type: "M",
          tag: ["DX"],
          name: "赛格古",
          link: null,
          color: "#F44336",
          pic: "D-15.jpg"
        },
        {
          id: "D-16",
          type: "M",
          tag: ["DX"],
          name: "玛伽古兰特王",
          link: null,
          color: "#F44336",
          pic: "D-16.jpg"
        },
        {
          id: "D-17",
          type: "M",
          tag: ["DX"],
          name: "玛伽贾巴",
          link: null,
          color: "#F44336",
          pic: "D-17.jpg"
        },
        {
          id: "D-18",
          type: "M",
          tag: ["DX"],
          name: "玛伽庞敦",
          link: null,
          color: "#F44336",
          pic: "D-18.jpg"
        },
        {
          id: "D-19",
          type: "M",
          tag: ["DX"],
          name: "风之魔王兽 玛伽巴萨",
          link: null,
          color: "#F44336",
          pic: "D-19.jpg"
        },
        {
          id: "D-20",
          type: "M",
          tag: ["DX"],
          name: "玛伽大蛇",
          link: null,
          color: "#F44336",
          pic: "D-20.jpg"
        },
        {
          id: "D-21",
          type: "M",
          tag: ["DX"],
          name: "文明裁决者 加拉特隆",
          link: null,
          color: "#F44336",
          pic: "D-21.jpg"
        },
        {
          id: "D-22",
          type: "M",
          tag: ["DX"],
          name: "合体魔王兽 杰庞顿",
          link: null,
          color: "#F44336",
          pic: "D-22.jpg"
        },
        {
          id: "D-23",
          type: "M",
          tag: ["DX"],
          name: "玛伽八岐大蛇",
          link: null,
          color: "#F44336",
          pic: "D-23.jpg"
        },
        {
          id: "D-24",
          type: "M",
          tag: ["DX"],
          name: "迦比亚星人 萨迪斯",
          link: null,
          color: "#F44336",
          pic: "D-24.jpg"
        },
        {
          id: "D-25",
          type: "M",
          tag: ["DX"],
          name: "戴亚博里古",
          link: null,
          color: "#F44336",
          pic: "D-25.jpg"
        },
        {
          id: "D-26",
          type: "M",
          tag: ["DX"],
          name: "百体怪兽 贝琉多拉",
          link: null,
          color: "#F44336",
          pic: "D-26.jpg"
        },
        {
          id: "D-27",
          type: "M",
          tag: ["DX"],
          name: "亡灵魔导士 雷伯特斯",
          link: null,
          color: "#F44336",
          pic: "D-27.jpg"
        },
        {
          id: "D-28",
          type: "M",
          tag: ["DX"],
          name: "斯卡鲁哥莫拉",
          link: null,
          color: "#F44336",
          pic: "D-28.jpg"
        },
        {
          id: "D-29",
          type: "M",
          tag: ["DX"],
          name: "闪电杀手",
          link: null,
          color: "#F44336",
          pic: "D-29.jpg"
        },
        {
          id: "D-30",
          type: "M",
          tag: ["DX"],
          name: "佩丹尼姆杰顿",
          link: null,
          color: "#F44336",
          pic: "D-30.jpg"
        },
        {
          id: "D-31",
          type: "M",
          tag: ["DX"],
          name: "时空破坏神 赛刚",
          link: null,
          color: "#F44336",
          pic: "D-31.jpg"
        },
        {
          id: "D-32",
          type: "M",
          tag: ["DX"],
          name: "奇美拉柏洛斯",
          link: null,
          color: "#F44336",
          pic: "D-32.jpg"
        },
        {
          id: "D-33",
          type: "M",
          tag: ["DX"],
          name: "极恶贝利亚",
          link: null,
          color: "#F44336",
          pic: "D-33.jpg"
        },
        {
          id: "D-34",
          type: "M",
          tag: ["DX"],
          name: "加拉特隆王",
          link: null,
          color: "#F44336",
          pic: "D-34.jpg"
        },
        {
          id: "D-35",
          type: "M",
          tag: ["DX"],
          name: "吉尔巴利斯",
          link: null,
          color: "#F44336",
          pic: "D-35.jpg"
        },
        {
          id: "D-36",
          type: "M",
          tag: ["DX"],
          name: "鲁格赛特",
          link: null,
          color: "#F44336",
          pic: "D-36.jpg"
        },
        {
          id: "D-37",
          type: "M",
          tag: ["DX"],
          name: "黑蜧",
          link: null,
          color: "#F44336",
          pic: "D-37.jpg"
        },
        {
          id: "D-38",
          type: "M",
          tag: ["DX"],
          name: "邪神加坦杰厄",
          link: null,
          color: "#F44336",
          pic: "D-38.jpg"
        },
        {
          id: "D-39",
          type: "M",
          tag: ["DX"],
          name: "莫奈拉女王",
          link: null,
          color: "#F44336",
          pic: "D-39.jpg"
        },
        {
          id: "D-40",
          type: "M",
          tag: ["DX"],
          name: "佐格（第二形态）",
          link: null,
          color: "#F44336",
          pic: "D-40.jpg"
        },
        {
          id: "D-41",
          type: "M",
          tag: ["DX"],
          name: "最强合体兽 玛斯王",
          link: null,
          color: "#F44336",
          pic: "D-41.jpg"
        }
      ]
    };
  },
  methods: {
    getDataByTag(tag) {
      if (tag == "ALL") {
        this.nowList = this.sofubi;
      } else {
        this.nowList = this.getListByTag(tag);
      }
    },
    // 根据tag标签获取数据
    getListByTag(tag) {
      let arr = [];
      this.sofubi.forEach((item, index, array) => {
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
        this.$Tools.$setStroage("sofubi", this.collectList); //保存最新数据
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
        this.$Tools.$getStroage("sofubi") != null
          ? this.$Tools.$getStroage("sofubi")
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
      this.tags[0].count = this.sofubi.length;
      this.tags[0].own = this.collectList.length;
      this.sofubi.forEach((item, index, array) => {
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
    this.nowList = this.sofubi.reverse();
    this.getCollectData();
    this.getCollectProgress();
  }
};
</script>

<style scoped></style>
