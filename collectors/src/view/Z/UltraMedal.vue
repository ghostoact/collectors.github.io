<template>
  <div class="item-list" :class="collectStatus ? 'collect-status' : ''">
    <floatLayer
      :show="layerShow"
      :item="nowDetail"
      :urlType="1"
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
      v-for="um in nowList"
      v-bind:item="um"
      :class="getCollect(um.id) ? 'collect' : ''"
      :urlType="1"
      :showPic="true"
      :key="um.id"
      :barColor="um.color"
      @click.native="showDetail(um)"
      v-show="collectFilter == false || !getCollect(um.id)"
    />
  </div>
</template>

<script>
import PropItem from "@/components/PropItem";
import TagBar from "@/components/TagBar";
import FloatLayer from "@/components/FloatLayer";
export default {
  name: "UltraMedal",
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
          name: "EX01",
          title: "EX01",
          count: 0,
          own: 0,
        },
        {
          name: "EX02",
          title: "EX02",
          count: 0,
          own: 0,
        },
        {
          name: "EX03",
          title: "EX03",
          count: 0,
          own: 0,
        },
        {
          name: "EX04",
          title: "EX04",
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
          name: "GP03",
          title: "GP03",
          count: 0,
          own: 0,
        },
        {
          name: "GP04",
          title: "GP04",
          count: 0,
          own: 0,
        },
        {
          name: "GPEX",
          title: "GPEX",
          count: 0,
          own: 0,
        },
        {
          name: "SP",
          title: "SP",
          count: 0,
          own: 0,
        },
        {
          name: "PF",
          title: "披风",
          count: 0,
          own: 0,
        },
        {
          name: "PB",
          title: "PB",
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
      ultramedal: [
        {
          id: "M-001", //唯一ID
          type: "U", //U 奥特曼  M 怪兽  O 其它
          tag: ["DX"], //标签：XD限定 DX EX扩展 SG食玩 GP扭蛋 SP特殊 PF披风
          name: "赛罗奥特曼", //名称
          link: [62], //关联奥特曼或怪兽实体数组
          // color: "#F44336", //自定义颜色
        },
        {
          id: "M-002",
          type: "U",
          tag: ["DX"],
          name: "赛文奥特曼",
          link: [2],
        },
        {
          id: "M-003",
          type: "U",
          tag: ["DX"],
          name: "雷欧奥特曼",
          link: [8],
        },
        {
          id: "M-004",
          type: "U",
          tag: ["DX"],
          name: "奥特曼",
          link: [0],
        },
        {
          id: "M-005",
          type: "U",
          tag: ["DX"],
          name: "艾斯奥特曼",
          link: [4],
        },
        {
          id: "M-006",
          type: "U",
          tag: ["DX"],
          name: "泰罗奥特曼",
          link: [6],
        },
        {
          id: "M-007",
          type: "U",
          tag: ["DX"],
          name: "迪迦奥特曼",
          link: [20],
        },
        {
          id: "M-008",
          type: "U",
          tag: ["DX"],
          name: "戴拿奥特曼",
          link: [27],
        },
        {
          id: "M-009",
          type: "U",
          tag: ["DX"],
          name: "盖亚奥特曼",
          link: [30],
        },
        {
          id: "M-010",
          type: "U",
          tag: ["DX"],
          name: "赛罗奥特曼 无限形态",
          link: [88],
          color: "#de9104",
        },
        {
          id: "M-011",
          type: "U",
          tag: ["DX"],
          name: "捷德奥特曼",
          link: [103],
          color: "#de9104",
        },
        {
          id: "M-012",
          type: "U",
          tag: ["DX"],
          name: "极恶 贝利亚",
          link: [123],
          color: "#de9104",
        },
        {
          id: "M-013",
          type: "U",
          tag: ["DX"],
          name: "佐菲",
          link: [1],
        },
        {
          id: "M-014",
          type: "U",
          tag: ["DX"],
          name: "杰克奥特曼",
          link: [3],
        },
        {
          id: "M-015",
          type: "U",
          tag: ["DX"],
          name: "奥特之父",
          link: [5],
        },
        {
          id: "M-016",
          type: "U",
          tag: ["DX"],
          name: "高斯奥特曼",
          link: [38],
        },
        {
          id: "M-017",
          type: "U",
          tag: ["DX"],
          name: "奈克赛斯奥特曼",
          link: [46],
        },
        {
          id: "M-018",
          type: "U",
          tag: ["DX"],
          name: "梦比优斯奥特曼",
          link: [54],
        },
        {
          id: "M-019",
          type: "U",
          tag: ["DX"],
          name: "银河奥特曼",
          link: [65],
        },
        {
          id: "M-020",
          type: "U",
          tag: ["DX"],
          name: "艾克斯奥特曼",
          link: [67],
        },
        {
          id: "M-021",
          type: "U",
          tag: ["DX"],
          name: "欧布奥特曼",
          link: [68],
        },
        {
          id: "M-022",
          type: "U",
          tag: ["EX01"],
          name: "赛罗奥特曼 闪耀形态",
          link: [64],
        },
        {
          id: "M-023",
          type: "U",
          tag: ["EX01"],
          name: "火焰骑士",
          link: null,
        },
        {
          id: "M-024",
          type: "U",
          tag: ["EX01"],
          name: "镜子骑士",
          link: null,
        },
        {
          id: "M-025",
          type: "U",
          tag: ["EX01"],
          name: "钢铁九号",
          link: null,
        },
        {
          id: "M-026",
          type: "U",
          tag: ["EX01"],
          name: "钢铁杀手",
          link: null,
        },
        {
          id: "M-027",
          type: "U",
          tag: ["EX01"],
          name: "捷德奥特曼",
          link: [103],
        },
        {
          id: "M-028",
          type: "U",
          tag: ["EX02"],
          name: "银河斯特利姆奥特曼",
          link: [90],
        },
        {
          id: "M-029",
          type: "U",
          tag: ["EX02"],
          name: "维克特利奥特曼 骑士形态",
          link: [91],
        },
        {
          id: "M-030",
          type: "U",
          tag: ["EX02"],
          name: "超越艾克斯",
          link: [93],
        },
        {
          id: "M-031",
          type: "U",
          tag: ["EX02"],
          name: "捷德奥特曼 尊皇形态",
          link: [107],
        },
        {
          id: "M-032",
          type: "U",
          tag: ["EX02"],
          name: "罗布奥特曼",
          link: [116],
        },
        {
          id: "M-033",
          type: "U",
          tag: ["EX02"],
          name: "泰迦三重斯特利姆",
          link: [118],
        },
        {
          id: "M-034",
          type: "U",
          tag: ["EX03"],
          name: "银河维克特利奥特曼",
          link: [92],
          color: "#173dc3",
        },
        {
          id: "M-035",
          type: "U",
          tag: ["EX03"],
          name: "艾克斯奥特曼 贝塔火花装甲",
          link: [94],
          color: "#173dc3",
        },
        {
          id: "M-036",
          type: "U",
          tag: ["EX03"],
          name: "欧布奥特曼 三重形态",
          link: [102],
          color: "#173dc3",
        },
        {
          id: "M-037",
          type: "U",
          tag: ["EX03"],
          name: "捷德奥特曼 终极形态",
          link: [108],
          color: "#173dc3",
        },
        {
          id: "M-038",
          type: "U",
          tag: ["EX03"],
          name: "格罗布奥特曼",
          link: [117],
          color: "#173dc3",
        },
        {
          id: "M-039",
          type: "U",
          tag: ["EX03"],
          name: "令迦奥特曼",
          link: [124],
          color: "#173dc3",
        },
        {
          id: "M-040",
          type: "U",
          tag: ["EX04"],
          name: "奥特六兄弟",
          link: [0, 1, 2, 3, 4, 6],
          color: "#8a939c",
        },
        {
          id: "M-041",
          type: "U",
          tag: ["EX04"],
          name: "爱迪奥特曼",
          link: [12],
        },
        {
          id: "M-042",
          type: "U",
          tag: ["EX04"],
          name: "杰斯提斯奥特曼 标准模式",
          link: [43],
        },
        {
          id: "M-043",
          type: "U",
          tag: ["EX04"],
          name: "希卡利奥特曼",
          link: [58],
        },
        {
          id: "M-044",
          type: "U",
          tag: ["EX04"],
          name: "赛罗奥特曼 月神奇迹型",
          link: [87],
        },
        {
          id: "M-045",
          type: "U",
          tag: ["EX04"],
          name: "利布特奥特曼",
          link: [70],
        },
        {
          id: "M-046",
          type: "U",
          tag: ["GP01"],
          name: "赛文奥特曼 闪耀型",
          link: [2],
        },
        {
          id: "M-047",
          type: "U",
          tag: ["GP02"],
          name: "奥特曼 闪耀型",
          link: [0],
        },
        {
          id: "M-048",
          type: "U",
          tag: ["GP01"],
          name: "葛雷奥特曼",
          link: [17],
        },
        {
          id: "M-049",
          type: "U",
          tag: ["GP01"],
          name: "赛罗奥特曼 强壮日冕型",
          link: [86],
        },
        {
          id: "M-050",
          type: "U",
          tag: ["GP01"],
          name: "阿古茹奥特曼",
          link: [33],
        },
        {
          id: "M-051",
          type: "U",
          tag: ["GP01"],
          name: "乔尼亚斯奥特曼",
          link: [11],
        },
        {
          id: "M-052",
          type: "M",
          tag: ["GP02"],
          name: "内隆嘎",
          link: null,
        },
        {
          id: "M-053",
          type: "M",
          tag: ["GP02"],
          name: "盖内伽古",
          link: null,
        },
        {
          id: "M-054",
          type: "M",
          tag: ["GP02"],
          name: "吉拉斯",
          link: null,
        },
        {
          id: "M-055",
          type: "U",
          tag: ["GP02"],
          name: "奈克斯特奥特曼 蓝色青年形态",
          link: [50],
        },
        {
          id: "M-056",
          type: "U",
          tag: ["GP02"],
          name: "戴拿奥特曼 奇迹型",
          link: [29],
        },
        {
          id: "M-057",
          type: "U",
          tag: ["GP03"],
          name: "闪耀迪迦",
          link: [23],
        },
        {
          id: "M-058",
          type: "U",
          tag: ["GP03"],
          name: "帕瓦特奥特曼",
          link: [18],
        },
        {
          id: "M-059",
          type: "U",
          tag: ["GP03"],
          name: "奥特之王",
          link: [10],
        },
        {
          id: "M-060",
          type: "M",
          tag: ["GP03"],
          name: "伽古拉斯·伽古拉",
          link: null,
        },
        {
          id: "M-061",
          type: "M",
          tag: ["GP03"],
          name: "金古桥",
          link: null,
        },
        {
          id: "M-062",
          type: "U",
          tag: ["GP04"],
          name: "哉阿斯奥特曼",
          link: [19],
        },
        {
          id: "M-063",
          type: "U",
          tag: ["GP04"],
          name: "纳伊斯奥特曼",
          link: [35],
        },
        {
          id: "M-064",
          type: "U",
          tag: ["GP04"],
          name: "格丽乔奥特曼",
          link: [74],
        },
        {
          id: "M-065",
          type: "M",
          tag: ["GP04"],
          name: "特空机1号 赛文加",
          link: null,
        },
        {
          id: "M-066",
          type: "M",
          tag: ["GP04"],
          name: "特空机2号 乌英达姆",
          link: null,
        },
        {
          id: "M-067",
          type: "M",
          tag: ["GP04"],
          name: "特空机3号 金古桥军械库定制",
          link: null,
        },
        {
          id: "M-068",
          type: "M",
          tag: ["GP04"],
          name: "特空机4号 奥特人造机甲赛罗",
          link: null,
        },
        {
          id: "M-069",
          type: "M",
          tag: ["GP04"],
          name: "歼灭机甲兽德斯特鲁多斯",
          link: null,
        },
        {
          id: "M-070",
          type: "M",
          tag: ["GP04"],
          name: "虚空怪兽格利扎",
          link: null,
        },
        {
          id: "M-071",
          type: "U",
          tag: ["SG01"],
          name: "究极赛罗",
          link: [63],
        },
        {
          id: "M-072",
          type: "U",
          tag: ["SG01"],
          name: "欧布奥特曼 重光形态",
          link: [96],
        },
        {
          id: "M-073",
          type: "U",
          tag: ["SG01"],
          name: "维克特利奥特曼",
          link: [66],
        },
        {
          id: "M-074",
          type: "U",
          tag: ["SG01"],
          name: "麦克斯奥特曼",
          link: [52],
        },
        {
          id: "M-075",
          type: "U",
          tag: ["SG01"],
          name: "泰迦奥特曼",
          link: [77],
        },
        {
          id: "M-076",
          type: "U",
          tag: ["SG01"],
          name: "泰塔斯奥特曼",
          link: [79],
        },
        {
          id: "M-077",
          type: "U",
          tag: ["SG01"],
          name: "风马奥特曼",
          link: [80],
        },
        {
          id: "M-078",
          type: "U",
          tag: ["SG01"],
          name: "奈克斯特奥特曼 青年形态",
          link: [49],
        },
        {
          id: "M-079",
          type: "M",
          tag: ["SG02"],
          name: "艾雷王",
          link: null,
        },
        {
          id: "M-080",
          type: "M",
          tag: ["SG02"],
          name: "艾斯杀手",
          link: null,
        },
        {
          id: "M-081",
          type: "M",
          tag: ["SG02"],
          name: "霍洛波罗兹",
          link: null,
        },
        {
          id: "M-082",
          type: "M",
          tag: ["SG02"],
          name: "吉尔巴里斯",
          link: null,
        },
        {
          id: "M-083",
          type: "M",
          tag: ["SG02"],
          name: "加拉特隆MK2",
          link: null,
        },
        {
          id: "M-084",
          type: "U",
          tag: ["XD"],
          name: "赛罗与捷德",
          link: [62, 103],
          color: "#de9104",
          way: "泽塔升华器套装附赠特典",
        },
        {
          id: "M-085",
          type: "U",
          tag: ["XD"],
          name: "戴拿奥特曼 强壮型",
          link: [28],
          way: "奥特曼联名童装附赠"
        },
        {
          id: "M-086",
          type: "U",
          tag: ["XD"],
          name: "高斯奥特曼 日冕模式",
          link: [39],
          way: "奥特曼联名童装附赠"
        },
        {
          id: "M-087",
          type: "U",
          tag: ["XD"],
          name: "初代光线",
          link: [0],
          way: "活动限定"
        },
        {
          id: "M-088",
          type: "U",
          tag: ["XD"],
          name: "泽塔奥特曼 阿尔法装甲",
          link: [81, 62, 2, 8],
          way:"泽塔奥特曼阿尔法装甲限定软胶附赠"
        },
        {
          id: "M-089",
          type: "U",
          tag: ["XD"],
          name: "泽塔奥特曼 伽马未来",
          link: [81, 20, 27, 30],
          way:"泽塔奥特曼伽马未来限定软胶附赠"
        },
        {
          id: "M-090",
          type: "U",
          tag: ["XD"],
          name: "泽塔奥特曼 德尔塔天爪",
          link: [81, 71, 88, 123],
          color: "#8a939c",
          way:"泽塔奥特曼德尔塔天爪限定软胶附赠"
        },
        {
          id: "M-091",
          type: "U",
          tag: ["XD"],
          name: "十周年赛罗",
          link: [62],
          way: "M78商店赛罗限定软胶附赠",
        },
        {
          id: "M-092",
          type: "U",
          tag: ["XD"],
          name: "泽塔奥特曼 德尔塔天爪圣诞版",
          link: [122],
          color: "#027e42",
          way:"2020年M78商店圣诞节赠送"
        },
        {
          id: "M-093",
          type: "U",
          tag: ["XD"],
          name: "罗索奥特曼",
          link: [72],
          way: "奥特曼联名童装附赠"
        },
        {
          id: "M-094",
          type: "U",
          tag: ["XD"],
          name: "布鲁奥特曼",
          link: [73],
          way: "奥特曼联名童装附赠"
        },
        {
          id: "M-095",
          type: "U",
          tag: ["SP"],
          name: "泽塔奥特曼",
          link: [81],
          color: "#d8111a",
        },
        {
          id: "M-096",
          type: "U",
          tag: ["SP"],
          name: "银河奥特曼",
          link: [65],
          color: "#d8111a",
        },
        {
          id: "M-097",
          type: "U",
          tag: ["SP"],
          name: "维克特利奥特曼",
          link: [66],
          color: "#d8111a",
        },
        {
          id: "M-098",
          type: "U",
          tag: ["SP"],
          name: "艾克斯奥特曼",
          link: [67],
          color: "#d8111a",
        },
        {
          id: "M-099",
          type: "U",
          tag: ["SP"],
          name: "欧布奥特曼",
          link: [68],
          color: "#d8111a",
        },
        {
          id: "M-100",
          type: "U",
          tag: ["SP"],
          name: "捷德奥特曼",
          link: [103],
          color: "#d8111a",
        },
        {
          id: "M-101",
          type: "U",
          tag: ["SP"],
          name: "罗索奥特曼",
          link: [72],
          color: "#d8111a",
        },
        {
          id: "M-102",
          type: "U",
          tag: ["SP"],
          name: "布鲁奥特曼",
          link: [73],
          color: "#d8111a",
        },
        {
          id: "M-103",
          type: "U",
          tag: ["SP"],
          name: "泰迦奥特曼",
          link: [77],
          color: "#d8111a",
        },
        {
          id: "M-104",
          type: "U",
          tag: ["PF"],
          name: "赛罗奥特曼",
          link: [62],
          color: "#5dbc9c",
        },
        {
          id: "M-105",
          type: "U",
          tag: ["PF"],
          name: "奥特曼",
          link: [0],
          color: "#5dbc9c",
        },
        {
          id: "M-106",
          type: "U",
          tag: ["PF"],
          name: "佐菲奥特曼",
          link: [1],
          color: "#5dbc9c",
        },
        {
          id: "M-107",
          type: "U",
          tag: ["PF"],
          name: "赛文奥特曼",
          link: [2],
          color: "#5dbc9c",
        },
        {
          id: "M-108",
          type: "U",
          tag: ["PF"],
          name: "杰克奥特曼",
          link: [3],
          color: "#5dbc9c",
        },
        {
          id: "M-109",
          type: "U",
          tag: ["PF"],
          name: "艾斯奥特曼",
          link: [4],
          color: "#5dbc9c",
        },
        {
          id: "M-110",
          type: "U",
          tag: ["PF"],
          name: "泰罗奥特曼",
          link: [6],
          color: "#5dbc9c",
        },
        {
          id: "M-111",
          type: "U",
          tag: ["GPEX"],
          name: "奥特之母",
          link: [7],
        },
        {
          id: "M-112",
          type: "U",
          tag: ["GPEX"],
          name: "尤莉安奥特曼",
          link: [13],
        },
        {
          id: "M-113",
          type: "U",
          tag: ["GPEX"],
          name: "索拉",
          link: null,
        },
        {
          id: "M-114",
          type: "U",
          tag: ["GPEX"],
          name: "博伊奥特曼",
          link: [45],
        },
        {
          id: "M-115",
          type: "U",
          tag: ["GPEX"],
          name: "察克奥特曼",
          link: [15],
        },
        {
          id: "M-116",
          type: "U",
          tag: ["GPEX"],
          name: "史考特奥特曼",
          link: [14],
        },
        {
          id: "M-117",
          type: "U",
          tag: ["GPEX"],
          name: "贝斯奥特曼",
          link: [16],
        },
        {
          id: "M-118",
          type: "U",
          tag: ["GPEX"],
          name: "杰诺奥特曼",
          link: [53],
        },
        {
          id: "M-119",
          type: "U",
          tag: ["GPEX"],
          name: "赛文21奥特曼",
          link: [37],
        },
        {
          id: "M-120",
          type: "U",
          tag: ["GPEX"],
          name: "奈欧斯奥特曼",
          link: [36],
        },
        {
          id: "M-121",
          type: "U",
          tag: ["GPEX"],
          name: "奈克斯特奥特曼",
          link: [48],
        },
        {
          id: "M-122",
          type: "U",
          tag: ["GPEX"],
          name: "诺亚奥特曼",
          link: [51],
        },
        {
          id: "M-123",
          type: "U",
          tag: ["PB"],
          name: "泽塔奥特曼 阿尔法装甲",
          link: [119],
        },
        {
          id: "M-124",
          type: "U",
          tag: ["PB"],
          name: "泽塔奥特曼 贝塔冲击",
          link: [120],
        },
        {
          id: "M-125",
          type: "U",
          tag: ["PB"],
          name: "泽塔奥特曼 伽马未来",
          link: [121],
        },
        {
          id: "M-126",
          type: "U",
          tag: ["PB"],
          name: "泽塔奥特曼 德尔塔天爪",
          link: [122],
          color: "#de9104",
        },
        {
          id: "M-127",
          type: "O",
          tag: ["PB"],
          name: "武器1",
          link: null,
        },
        {
          id: "M-128",
          type: "O",
          tag: ["PB"],
          name: "武器2",
          link: null,
        },
        {
          id: "M-129",
          type: "O",
          tag: ["PB"],
          name: "武器3",
          link: null,
        },
        {
          id: "M-130",
          type: "M",
          tag: ["PB"],
          name: "杰顿",
          link: null,
        },
        {
          id: "M-131",
          type: "M",
          tag: ["PB"],
          name: "庞顿",
          link: null,
        },
        {
          id: "M-132",
          type: "M",
          tag: ["PB"],
          name: "玛伽大蛇",
          link: null,
        },
        {
          id: "M-133",
          type: "M",
          tag: ["PB"],
          name: "超古代怪兽 哥尔赞",
          link: null,
        },
        {
          id: "M-134",
          type: "M",
          tag: ["PB"],
          name: "超古代龙 美尔巴",
          link: null,
        },
        {
          id: "M-135",
          type: "M",
          tag: ["PB"],
          name: "宇宙战斗兽 超戈布",
          link: null,
        },
        {
          id: "M-136",
          type: "M",
          tag: ["PB"],
          name: "宇宙海兽 雷丘巴斯",
          link: null,
        },
        {
          id: "M-137",
          type: "M",
          tag: ["PB"],
          name: "奇兽眼Q",
          link: null,
        },
        {
          id: "M-138",
          type: "U",
          tag: ["DX"],
          name: "贝利亚奥特曼",
          link: [60],
        },
        {
          id: "M-139",
          type: "M",
          tag: ["DX"],
          name: "宇古代怪兽 哥莫拉",
          link: null,
        },
        {
          id: "M-140",
          type: "M",
          tag: ["DX"],
          name: "骷髅怪兽 雷德王",
          link: null,
        },
      ],
    };
  },
  methods: {
    getDataByTag(tag) {
      if (tag == "ALL") {
        this.nowList = this.ultramedal;
      } else {
        this.nowList = this.getListByTag(tag);
      }
    },
    getListByTag(tag) {
      let arr = [];
      this.ultramedal.forEach((item, index, array) => {
        if (item.tag.indexOf(tag) != -1) {
          arr.push(item);
        }
      });
      return arr;
    },
    showDetail(item) {
      if (this.collectStatus) {
        // 收藏模式
        if (this.collectList.indexOf(item.id) == -1) {
          this.collectList.push(item.id); //新增项
        } else {
          this.collectList.splice(this.collectList.indexOf(item.id), 1); //删除项
        }
        this.$Tools.$setStroage("ultramedal", this.collectList); //保存最新数据
        this.getCollectProgress();
      } else {
        // 详情模式
        this.layerShow = true;
        this.nowDetail = item;
      }
    },
    hideDetail(visible) {
      this.layerShow = visible;
    },
    // 加载收藏数据
    getCollectData() {
      this.collectList =
        this.$Tools.$getStroage("ultramedal") != null
          ? this.$Tools.$getStroage("ultramedal")
          : [];
    },
    // 切换收藏状态
    collectToggle() {
      this.collectStatus = this.collectStatus ? false : true;
      console.log(this.collectStatus);
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
      this.ultramedal.forEach((item, index, array) => {
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
    this.nowList = this.ultramedal;
    this.getCollectData();
    this.getCollectProgress();
  },
};
</script>

<style scoped></style>
