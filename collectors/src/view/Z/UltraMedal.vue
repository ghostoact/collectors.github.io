<template>
  <div class="item-list" :class="collectStatus ? 'collect-status' : ''">
    <floatLayer
      :show="layerShow"
      :item="nowDetail"
      :fusion="nowFusion"
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
      :gridNum="4"
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
          name: "EX01",
          title: "EX01",
          count: 0,
          own: 0
        },
        {
          name: "EX02",
          title: "EX02",
          count: 0,
          own: 0
        },
        {
          name: "EX03",
          title: "EX03",
          count: 0,
          own: 0
        },
        {
          name: "EX04",
          title: "EX04",
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
        },
        {
          name: "GP02",
          title: "GP02",
          count: 0,
          own: 0
        },
        {
          name: "GP03",
          title: "GP03",
          count: 0,
          own: 0
        },
        {
          name: "GP04",
          title: "GP04",
          count: 0,
          own: 0
        },
        {
          name: "GPEX",
          title: "GPEX",
          count: 0,
          own: 0
        },
        {
          name: "SP",
          title: "SP",
          count: 0,
          own: 0
        },
        {
          name: "PF",
          title: "披风",
          count: 0,
          own: 0
        },
        {
          name: "PB",
          title: "PB",
          count: 0,
          own: 0
        },
        {
          name: "TPC",
          title: "国代",
          count: 0,
          own: 0
        }
      ],
      nowList: null, //展示列表
      nowDetail: null,
      nowFusion: null,
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
          pic: "M-001.jpg"
        },
        {
          id: "M-002",
          type: "U",
          tag: ["DX"],
          name: "奥特赛文",
          link: [2],
          pic: "M-002.jpg"
        },
        {
          id: "M-003",
          type: "U",
          tag: ["DX"],
          name: "雷欧奥特曼",
          link: [8],
          pic: "M-003.jpg"
        },
        {
          id: "M-004",
          type: "U",
          tag: ["DX"],
          name: "奥特曼",
          link: [0],
          pic: "M-004.jpg"
        },
        {
          id: "M-005",
          type: "U",
          tag: ["DX"],
          name: "艾斯奥特曼",
          link: [4],
          pic: "M-005.jpg"
        },
        {
          id: "M-006",
          type: "U",
          tag: ["DX"],
          name: "泰罗奥特曼",
          link: [6],
          pic: "M-006.jpg"
        },
        {
          id: "M-007",
          type: "U",
          tag: ["DX"],
          name: "迪迦奥特曼",
          link: [20],
          pic: "M-007.jpg"
        },
        {
          id: "M-008",
          type: "U",
          tag: ["DX"],
          name: "戴拿奥特曼",
          link: [27],
          pic: "M-008.jpg"
        },
        {
          id: "M-009",
          type: "U",
          tag: ["DX"],
          name: "盖亚奥特曼",
          link: [30],
          pic: "M-009.jpg"
        },
        {
          id: "M-010",
          type: "U",
          tag: ["DX"],
          name: "赛罗奥特曼 无限形态",
          link: [88],
          color: "#de9104",
          pic: "M-010.jpg"
        },
        {
          id: "M-011",
          type: "U",
          tag: ["DX"],
          name: "捷德奥特曼",
          link: [103],
          color: "#de9104",
          pic: "M-011.jpg"
        },
        {
          id: "M-012",
          type: "U",
          tag: ["DX"],
          name: "极恶 贝利亚",
          link: [123],
          color: "#de9104",
          pic: "M-012.jpg"
        },
        {
          id: "M-013",
          type: "U",
          tag: ["DX"],
          name: "佐菲",
          link: [1],
          pic: "M-013.jpg"
        },
        {
          id: "M-014",
          type: "U",
          tag: ["DX"],
          name: "杰克奥特曼",
          link: [3],
          pic: "M-014.jpg"
        },
        {
          id: "M-015",
          type: "U",
          tag: ["DX"],
          name: "奥特之父",
          link: [5],
          pic: "M-015.jpg"
        },
        {
          id: "M-016",
          type: "U",
          tag: ["DX"],
          name: "高斯奥特曼 月神模式",
          link: [38],
          pic: "M-016.jpg"
        },
        {
          id: "M-017",
          type: "U",
          tag: ["DX"],
          name: "奈克赛斯奥特曼",
          link: [46],
          pic: "M-017.jpg"
        },
        {
          id: "M-018",
          type: "U",
          tag: ["DX"],
          name: "梦比优斯奥特曼",
          link: [54],
          pic: "M-018.jpg"
        },
        {
          id: "M-019",
          type: "U",
          tag: ["DX"],
          name: "银河奥特曼",
          link: [65],
          pic: "M-019.jpg"
        },
        {
          id: "M-020",
          type: "U",
          tag: ["DX"],
          name: "艾克斯奥特曼",
          link: [67],
          pic: "M-020.jpg"
        },
        {
          id: "M-021",
          type: "U",
          tag: ["DX"],
          name: "欧布奥特曼",
          link: [68],
          pic: "M-021.jpg"
        },
        {
          id: "M-022",
          type: "U",
          tag: ["EX01"],
          name: "赛罗奥特曼 光辉赛罗",
          link: [64],
          pic: "M-022.jpg"
        },
        {
          id: "M-023",
          type: "U",
          tag: ["EX01"],
          name: "火焰骑士",
          link: null,
          pic: "M-023.jpg"
        },
        {
          id: "M-024",
          type: "U",
          tag: ["EX01"],
          name: "镜子骑士",
          link: null,
          pic: "M-024.jpg"
        },
        {
          id: "M-025",
          type: "U",
          tag: ["EX01"],
          name: "钢铁九号",
          link: null,
          pic: "M-025.jpg"
        },
        {
          id: "M-026",
          type: "U",
          tag: ["EX01"],
          name: "钢铁杀手",
          link: null,
          pic: "M-026.jpg"
        },
        {
          id: "M-027",
          type: "U",
          tag: ["EX01"],
          name: "捷德奥特曼",
          link: [103],
          pic: "M-027.jpg"
        },
        {
          id: "M-028",
          type: "U",
          tag: ["EX02"],
          name: "银河斯特利姆奥特曼",
          link: [90],
          pic: "M-028.jpg"
        },
        {
          id: "M-029",
          type: "U",
          tag: ["EX02"],
          name: "维克特利奥特曼 骑士形态",
          link: [91],
          pic: "M-029.jpg"
        },
        {
          id: "M-030",
          type: "U",
          tag: ["EX02"],
          name: "超越艾克斯",
          link: [93],
          pic: "M-030.jpg"
        },
        {
          id: "M-031",
          type: "U",
          tag: ["EX02"],
          name: "捷德奥特曼 尊皇形态",
          link: [107],
          pic: "M-031.jpg"
        },
        {
          id: "M-032",
          type: "U",
          tag: ["EX02"],
          name: "罗布奥特曼",
          link: [116],
          pic: "M-032.jpg"
        },
        {
          id: "M-033",
          type: "U",
          tag: ["EX02"],
          name: "泰迦奥特曼 三重斯特利姆",
          link: [118],
          pic: "M-033.jpg"
        },
        {
          id: "M-034",
          type: "U",
          tag: ["EX03"],
          name: "银河维克特利奥特曼",
          link: [92],
          color: "#173dc3",
          pic: "M-034.jpg"
        },
        {
          id: "M-035",
          type: "U",
          tag: ["EX03"],
          name: "艾克斯奥特曼 贝塔火花装甲",
          link: [94],
          color: "#173dc3",
          pic: "M-035.jpg"
        },
        {
          id: "M-036",
          type: "U",
          tag: ["EX03"],
          name: "欧布奥特曼 三重形态",
          link: [102],
          color: "#173dc3",
          pic: "M-036.jpg"
        },
        {
          id: "M-037",
          type: "U",
          tag: ["EX03"],
          name: "捷德奥特曼 终极形态",
          link: [108],
          color: "#173dc3",
          pic: "M-037.jpg"
        },
        {
          id: "M-038",
          type: "U",
          tag: ["EX03"],
          name: "格罗布奥特曼",
          link: [117],
          color: "#173dc3",
          pic: "M-038.jpg"
        },
        {
          id: "M-039",
          type: "U",
          tag: ["EX03"],
          name: "令迦奥特曼",
          link: [124],
          color: "#173dc3",
          pic: "M-039.jpg"
        },
        {
          id: "M-040",
          type: "U",
          tag: ["EX04"],
          name: "奥特六兄弟",
          link: [0, 1, 2, 3, 4, 6],
          color: "#8a939c",
          pic: "M-040.jpg"
        },
        {
          id: "M-041",
          type: "U",
          tag: ["EX04"],
          name: "爱迪奥特曼",
          link: [12],
          pic: "M-041.jpg"
        },
        {
          id: "M-042",
          type: "U",
          tag: ["EX04"],
          name: "杰斯提斯奥特曼 标准模式",
          link: [43],
          pic: "M-042.jpg"
        },
        {
          id: "M-043",
          type: "U",
          tag: ["EX04"],
          name: "希卡利奥特曼",
          link: [58],
          pic: "M-043.jpg"
        },
        {
          id: "M-044",
          type: "U",
          tag: ["EX04"],
          name: "赛罗奥特曼 月神奇迹型",
          link: [87],
          pic: "M-044.jpg"
        },
        {
          id: "M-045",
          type: "U",
          tag: ["EX04"],
          name: "利布特奥特曼",
          link: [70],
          pic: "M-045.jpg"
        },
        {
          id: "M-046",
          type: "U",
          tag: ["GP01"],
          name: "奥特赛文 闪耀型",
          link: [2],
          pic: "M-046.jpg"
        },
        {
          id: "M-047",
          type: "U",
          tag: ["GP02"],
          name: "奥特曼 闪耀型",
          link: [0],
          pic: "M-047.jpg"
        },
        {
          id: "M-048",
          type: "U",
          tag: ["GP01"],
          name: "葛雷奥特曼",
          link: [17],
          pic: "M-048.jpg"
        },
        {
          id: "M-049",
          type: "U",
          tag: ["GP01"],
          name: "赛罗奥特曼 强壮日冕型",
          link: [86],
          pic: "M-049.jpg"
        },
        {
          id: "M-050",
          type: "U",
          tag: ["GP01"],
          name: "阿古茹奥特曼",
          link: [33],
          pic: "M-050.jpg"
        },
        {
          id: "M-051",
          type: "U",
          tag: ["GP01"],
          name: "乔尼亚斯奥特曼",
          link: [11],
          pic: "M-051.jpg"
        },
        {
          id: "M-052",
          type: "M",
          tag: ["GP02"],
          name: "内隆嘎",
          link: null,
          pic: "M-052.jpg"
        },
        {
          id: "M-053",
          type: "M",
          tag: ["GP02"],
          name: "盖内伽古",
          link: null,
          pic: "M-053.jpg"
        },
        {
          id: "M-054",
          type: "M",
          tag: ["GP02"],
          name: "吉拉斯",
          link: null,
          pic: "M-054.jpg"
        },
        {
          id: "M-055",
          type: "U",
          tag: ["GP02"],
          name: "奈克斯特奥特曼 蓝色青年形态",
          link: [50],
          pic: "M-055.jpg"
        },
        {
          id: "M-056",
          type: "U",
          tag: ["GP02"],
          name: "戴拿奥特曼 奇迹型",
          link: [29],
          pic: "M-056.jpg"
        },
        {
          id: "M-057",
          type: "U",
          tag: ["GP03"],
          name: "闪耀迪迦",
          link: [23],
          pic: "M-057.jpg"
        },
        {
          id: "M-058",
          type: "U",
          tag: ["GP03"],
          name: "帕瓦特奥特曼",
          link: [18],
          pic: "M-058.jpg"
        },
        {
          id: "M-059",
          type: "U",
          tag: ["GP03"],
          name: "奥特之王",
          link: [10],
          pic: "M-059.jpg"
        },
        {
          id: "M-060",
          type: "M",
          tag: ["GP03"],
          name: "伽古拉斯·伽古拉",
          link: null,
          pic: "M-060.jpg"
        },
        {
          id: "M-061",
          type: "M",
          tag: ["GP03"],
          name: "金古桥",
          link: null,
          pic: "M-061.jpg"
        },
        {
          id: "M-062",
          type: "U",
          tag: ["GP04"],
          name: "哉阿斯奥特曼",
          link: [19],
          pic: "M-062.jpg"
        },
        {
          id: "M-063",
          type: "U",
          tag: ["GP04"],
          name: "纳伊斯奥特曼",
          link: [35],
          pic: "M-063.jpg"
        },
        {
          id: "M-064",
          type: "U",
          tag: ["GP04"],
          name: "格丽乔奥特曼",
          link: [74],
          pic: "M-064.jpg"
        },
        {
          id: "M-065",
          type: "M",
          tag: ["GP04"],
          name: "特空机1号 赛文加",
          link: null,
          pic: "M-065.jpg"
        },
        {
          id: "M-066",
          type: "M",
          tag: ["GP04"],
          name: "特空机2号 乌英达姆",
          link: null,
          pic: "M-066.jpg"
        },
        {
          id: "M-067",
          type: "M",
          tag: ["GP04"],
          name: "特空机3号 金古桥军械库定制",
          link: null,
          pic: "M-067.jpg"
        },
        {
          id: "M-068",
          type: "M",
          tag: ["GP04"],
          name: "特空机4号 奥特人造机甲赛罗",
          link: null,
          pic: "M-068.jpg"
        },
        {
          id: "M-069",
          type: "M",
          tag: ["GP04"],
          name: "歼灭机甲兽德斯特鲁多斯",
          link: null,
          pic: "M-069.jpg"
        },
        {
          id: "M-070",
          type: "M",
          tag: ["GP04"],
          name: "虚空怪兽 格利扎",
          link: null,
          pic: "M-070.jpg"
        },
        {
          id: "M-071",
          type: "U",
          tag: ["SG01"],
          name: "究极赛罗",
          link: [63],
          pic: "M-071.jpg"
        },
        {
          id: "M-072",
          type: "U",
          tag: ["SG01"],
          name: "欧布奥特曼 重光形态",
          link: [96],
          pic: "M-072.jpg"
        },
        {
          id: "M-073",
          type: "U",
          tag: ["SG01"],
          name: "维克特利奥特曼",
          link: [66],
          pic: "M-073.jpg"
        },
        {
          id: "M-074",
          type: "U",
          tag: ["SG01"],
          name: "麦克斯奥特曼",
          link: [52],
          pic: "M-074.jpg"
        },
        {
          id: "M-075",
          type: "U",
          tag: ["SG01"],
          name: "泰迦奥特曼",
          link: [77],
          pic: "M-075.jpg"
        },
        {
          id: "M-076",
          type: "U",
          tag: ["SG01"],
          name: "泰塔斯奥特曼",
          link: [79],
          pic: "M-076.jpg"
        },
        {
          id: "M-077",
          type: "U",
          tag: ["SG01"],
          name: "风马奥特曼",
          link: [80],
          pic: "M-077.jpg"
        },
        {
          id: "M-078",
          type: "U",
          tag: ["SG01"],
          name: "奈克斯特奥特曼 青年形态",
          link: [49],
          pic: "M-078.jpg"
        },
        {
          id: "M-079",
          type: "M",
          tag: ["SG02"],
          name: "艾雷王",
          link: null,
          pic: "M-079.jpg"
        },
        {
          id: "M-080",
          type: "M",
          tag: ["SG02"],
          name: "艾斯杀手",
          link: null,
          pic: "M-080.jpg"
        },
        {
          id: "M-081",
          type: "M",
          tag: ["SG02"],
          name: "霍洛波罗兹",
          link: null,
          pic: "M-081.jpg"
        },
        {
          id: "M-082",
          type: "M",
          tag: ["SG02"],
          name: "吉尔巴里斯",
          link: null,
          pic: "M-082.jpg"
        },
        {
          id: "M-083",
          type: "M",
          tag: ["SG02"],
          name: "加拉特隆MK2",
          link: null,
          pic: "M-083.jpg"
        },
        {
          id: "M-084",
          type: "U",
          tag: ["XD"],
          name: "赛罗与捷德",
          link: [62, 103],
          color: "#de9104",
          way: "泽塔升华器套装附赠特典",
          pic: "M-084.jpg"
        },
        {
          id: "M-085",
          type: "U",
          tag: ["XD"],
          name: "戴拿奥特曼 强壮型",
          link: [28],
          way: "奥特曼联名童装附赠",
          pic: "M-085.jpg"
        },
        {
          id: "M-086",
          type: "U",
          tag: ["XD"],
          name: "高斯奥特曼 日冕模式",
          link: [39],
          way: "奥特曼联名童装附赠",
          pic: "M-086.jpg"
        },
        {
          id: "M-087",
          type: "U",
          tag: ["XD"],
          name: "初代光线",
          link: [0],
          way: "活动限定",
          pic: "M-087.jpg"
        },
        {
          id: "M-088",
          type: "U",
          tag: ["XD"],
          name: "泽塔奥特曼 阿尔法装甲",
          link: [81, 62, 2, 8],
          way: "泽塔奥特曼阿尔法装甲限定软胶附赠",
          pic: "M-088.jpg"
        },
        {
          id: "M-089",
          type: "U",
          tag: ["XD"],
          name: "泽塔奥特曼 伽马未来",
          link: [81, 20, 27, 30],
          way: "泽塔奥特曼伽马未来限定软胶附赠",
          pic: "M-089.jpg"
        },
        {
          id: "M-090",
          type: "U",
          tag: ["XD"],
          name: "泽塔奥特曼 德尔塔天爪",
          link: [81, 71, 88, 123],
          color: "#8a939c",
          way: "泽塔奥特曼德尔塔天爪限定软胶附赠",
          pic: "M-090.jpg"
        },
        {
          id: "M-091",
          type: "U",
          tag: ["XD"],
          name: "十周年赛罗",
          link: [62],
          way: "M78商店赛罗限定软胶附赠",
          pic: "M-091.jpg"
        },
        {
          id: "M-092",
          type: "U",
          tag: ["XD"],
          name: "泽塔奥特曼 德尔塔天爪圣诞版",
          link: [122],
          color: "#027e42",
          way: "2020年M78商店圣诞节赠送",
          pic: "M-092.jpg"
        },
        {
          id: "M-093",
          type: "U",
          tag: ["XD"],
          name: "罗索奥特曼",
          link: [72],
          way: "奥特曼联名童装附赠",
          pic: "M-093.jpg"
        },
        {
          id: "M-094",
          type: "U",
          tag: ["XD"],
          name: "布鲁奥特曼",
          link: [73],
          way: "奥特曼联名童装附赠",
          pic: "M-094.jpg"
        },
        {
          id: "M-095",
          type: "U",
          tag: ["SP"],
          name: "泽塔奥特曼",
          link: [81],
          color: "#d8111a",
          pic: "M-095.jpg"
        },
        {
          id: "M-096",
          type: "U",
          tag: ["SP"],
          name: "银河奥特曼",
          link: [65],
          color: "#d8111a",
          pic: "M-096.jpg"
        },
        {
          id: "M-097",
          type: "U",
          tag: ["SP"],
          name: "维克特利奥特曼",
          link: [66],
          color: "#d8111a",
          pic: "M-097.jpg"
        },
        {
          id: "M-098",
          type: "U",
          tag: ["SP"],
          name: "艾克斯奥特曼",
          link: [67],
          color: "#d8111a",
          pic: "M-098.jpg"
        },
        {
          id: "M-099",
          type: "U",
          tag: ["SP"],
          name: "捷德奥特曼",
          link: [68],
          color: "#d8111a",
          pic: "M-099.jpg"
        },
        {
          id: "M-100",
          type: "U",
          tag: ["SP"],
          name: "欧布奥特曼",
          link: [103],
          color: "#d8111a",
          pic: "M-100.jpg"
        },
        {
          id: "M-101",
          type: "U",
          tag: ["SP"],
          name: "罗索奥特曼",
          link: [72],
          color: "#d8111a",
          pic: "M-101.jpg"
        },
        {
          id: "M-102",
          type: "U",
          tag: ["SP"],
          name: "布鲁奥特曼",
          link: [73],
          color: "#d8111a",
          pic: "M-102.jpg"
        },
        {
          id: "M-103",
          type: "U",
          tag: ["SP"],
          name: "泰迦奥特曼",
          link: [77],
          color: "#d8111a",
          pic: "M-103.jpg"
        },
        {
          id: "M-104",
          type: "U",
          tag: ["PF"],
          name: "赛罗奥特曼",
          link: [62],
          color: "#5dbc9c",
          pic: "M-104.jpg"
        },
        {
          id: "M-105",
          type: "U",
          tag: ["PF"],
          name: "奥特曼",
          link: [0],
          color: "#5dbc9c",
          pic: "M-105.jpg"
        },
        {
          id: "M-106",
          type: "U",
          tag: ["PF"],
          name: "佐菲",
          link: [1],
          color: "#5dbc9c",
          pic: "M-106.jpg"
        },
        {
          id: "M-107",
          type: "U",
          tag: ["PF"],
          name: "奥特赛文",
          link: [2],
          color: "#5dbc9c",
          pic: "M-107.jpg"
        },
        {
          id: "M-108",
          type: "U",
          tag: ["PF"],
          name: "杰克奥特曼",
          link: [3],
          color: "#5dbc9c",
          pic: "M-108.jpg"
        },
        {
          id: "M-109",
          type: "U",
          tag: ["PF"],
          name: "艾斯奥特曼",
          link: [4],
          color: "#5dbc9c",
          pic: "M-109.jpg"
        },
        {
          id: "M-110",
          type: "U",
          tag: ["PF"],
          name: "泰罗奥特曼",
          link: [6],
          color: "#5dbc9c",
          pic: "M-110.jpg"
        },
        {
          id: "M-111",
          type: "U",
          tag: ["GPEX"],
          name: "奥特之母",
          link: [7],
          pic: "M-111.jpg"
        },
        {
          id: "M-112",
          type: "U",
          tag: ["GPEX"],
          name: "尤莉安奥特曼",
          link: [13],
          pic: "M-112.jpg"
        },
        {
          id: "M-113",
          type: "U",
          tag: ["GPEX"],
          name: "索拉",
          link: null,
          pic: "M-113.jpg"
        },
        {
          id: "M-114",
          type: "U",
          tag: ["GPEX"],
          name: "博伊奥特曼",
          link: [45],
          pic: "M-114.jpg"
        },
        {
          id: "M-115",
          type: "U",
          tag: ["GPEX"],
          name: "察克奥特曼",
          link: [15],
          pic: "M-115.jpg"
        },
        {
          id: "M-116",
          type: "U",
          tag: ["GPEX"],
          name: "史考特奥特曼",
          link: [14],
          pic: "M-116.jpg"
        },
        {
          id: "M-117",
          type: "U",
          tag: ["GPEX"],
          name: "贝斯奥特曼",
          link: [16],
          pic: "M-117.jpg"
        },
        {
          id: "M-118",
          type: "U",
          tag: ["GPEX"],
          name: "杰诺奥特曼",
          link: [53],
          pic: "M-118.jpg"
        },
        {
          id: "M-119",
          type: "U",
          tag: ["GPEX"],
          name: "赛文21奥特曼",
          link: [37],
          pic: "M-119.jpg"
        },
        {
          id: "M-120",
          type: "U",
          tag: ["GPEX"],
          name: "奈欧斯奥特曼",
          link: [36],
          pic: "M-120.jpg"
        },
        {
          id: "M-121",
          type: "U",
          tag: ["GPEX"],
          name: "奈克斯特奥特曼",
          link: [48],
          pic: "M-121.jpg"
        },
        {
          id: "M-122",
          type: "U",
          tag: ["GPEX"],
          name: "诺亚奥特曼",
          link: [51],
          pic: "M-122.jpg"
        },
        {
          id: "M-123",
          type: "U",
          tag: ["PB"],
          name: "泽塔奥特曼 阿尔法装甲",
          link: [119],
          pic: "M-123.jpg"
        },
        {
          id: "M-124",
          type: "U",
          tag: ["PB"],
          name: "泽塔奥特曼 贝塔冲击",
          link: [120],
          pic: "M-124.jpg"
        },
        {
          id: "M-125",
          type: "U",
          tag: ["PB"],
          name: "泽塔奥特曼 伽马未来",
          link: [121],
          pic: "M-125.jpg"
        },
        {
          id: "M-126",
          type: "U",
          tag: ["PB"],
          name: "泽塔奥特曼 德尔塔天爪",
          link: [122],
          color: "#de9104",
          pic: "M-126.jpg"
        },
        {
          id: "M-127",
          type: "O",
          tag: ["PB"],
          name: "武器1",
          link: null,
          pic: "M-127.jpg"
        },
        {
          id: "M-128",
          type: "O",
          tag: ["PB"],
          name: "武器2",
          link: null,
          pic: "M-127.jpg"
        },
        {
          id: "M-129",
          type: "O",
          tag: ["PB"],
          name: "武器3",
          link: null,
          pic: "M-127.jpg"
        },
        {
          id: "M-130",
          type: "M",
          tag: ["PB"],
          name: "杰顿",
          link: null,
          pic: "M-130.jpg"
        },
        {
          id: "M-131",
          type: "M",
          tag: ["PB"],
          name: "庞敦",
          link: null,
          pic: "M-131.jpg"
        },
        {
          id: "M-132",
          type: "M",
          tag: ["PB"],
          name: "玛伽大蛇",
          link: null,
          pic: "M-132.jpg"
        },
        {
          id: "M-133",
          type: "M",
          tag: ["PB"],
          name: "超古代怪兽 哥尔赞",
          link: null,
          pic: "M-133.jpg"
        },
        {
          id: "M-134",
          type: "M",
          tag: ["PB"],
          name: "超古代龙 美尔巴",
          link: null,
          pic: "M-134.jpg"
        },
        {
          id: "M-135",
          type: "M",
          tag: ["PB"],
          name: "宇宙战斗兽 超戈布",
          link: null,
          pic: "M-135.jpg"
        },
        {
          id: "M-136",
          type: "M",
          tag: ["PB"],
          name: "宇宙海兽 雷丘巴斯",
          link: null,
          pic: "M-136.jpg"
        },
        {
          id: "M-137",
          type: "M",
          tag: ["PB"],
          name: "奇兽眼Q",
          link: null,
          pic: "M-137.jpg"
        },
        {
          id: "M-138",
          type: "U",
          tag: ["DX"],
          name: "贝利亚奥特曼",
          link: [60],
          pic: "M-138.jpg"
        },
        {
          id: "M-139",
          type: "M",
          tag: ["DX"],
          name: "宇古代怪兽 哥莫拉",
          link: null,
          pic: "M-139.jpg"
        },
        {
          id: "M-140",
          type: "M",
          tag: ["DX"],
          name: "骷髅怪兽 雷德王",
          link: null,
          pic: "M-140.jpg"
        },
        {
          id: "M-141",
          type: "U",
          tag: ["DX"],
          name: "特利迦奥特曼 复合型",
          link: [82],
          way: "DX奥特勋章分析图鉴附赠",
          pic: "M-141.jpg"
        },
        {
          id: "M-142",
          type: "M",
          tag: ["TPC"],
          name: "加拉特隆",
          link: [82],
          way: "第二弹推广勋章",
          pic: "M-142.jpg"
        },
        {
          id: "M-143",
          type: "U",
          tag: ["TPC"],
          name: "新生代英雄勋章",
          link: [82],
          way: "奥特基地专属勋章",
          pic: "M-143.jpg"
        },
        {
          id: "M-144",
          type: "U",
          tag: ["TPC"],
          name: "赛迦",
          link: [82],
          way: "第三弹推广勋章",
          pic: "M-144.jpg"
        },
        {
          id: "M-145",
          type: "U",
          tag: ["TPC"],
          name: "泰莱斯通",
          link: [82],
          way: "第四弹推广勋章",
          pic: "M-145.jpg"
        },
        {
          id: "M-146",
          type: "U",
          tag: ["TPC"],
          name: "梦比优斯 炽热勇气",
          link: [82],
          way: "奥特勋章第三弹",
          pic: "M-146.jpg"
        },
        {
          id: "M-147",
          type: "U",
          tag: ["TPC"],
          name: "诺亚奥特曼",
          link: [82],
          way: "奥特基地专属勋章",
          pic: "M-147.jpg"
        }
      ],
      fusionList: [
        {
          id: "M-123",
          name: "泽塔奥特曼 阿尔法装甲",
          fusionArr: ["M-001", "M-002", "M-003"]
        },
        {
          id: "M-124",
          name: "泽塔奥特曼 贝塔冲击",
          fusionArr: ["M-004", "M-005", "M-006"]
        },
        {
          id: "M-125",
          name: "泽塔奥特曼 伽马未来",
          fusionArr: ["M-007", "M-008", "M-009"]
        },
        {
          id: "M-126",
          name: "泽塔奥特曼 德尔塔天爪",
          fusionArr: ["M-010", "M-011", "M-012"]
        },
        {
          id: "",
          name: "西格玛爆破",
          fusionArr: ["M-018", "M-007", "M-013"]
        },
        {
          id: "",
          name: "谢语",
          fusionArr: ["M-088", "M-089", "M-090"]
        },
        {
          id: "",
          name: "梦比优斯 无限",
          fusionArr: ["M-018", "M-040"]
        },
        {
          id: "",
          name: "盖亚奥特曼 至高型",
          fusionArr: ["M-009", "M-050"]
        },
        {
          id: "",
          name: "雷杰多奥特曼",
          fusionArr: ["M-016", "M-042"]
        },
        {
          id: "M-144",
          name: "赛迦",
          fusionArr: ["M-001", "M-008", "M-016"]
        },
        {
          id: "M-044",
          name: "赛罗奥特曼 月神奇迹型",
          fusionArr: ["M-001", "M-056", "M-016"]
        },
        {
          id: "M-049",
          name: "赛罗奥特曼 强壮日冕型",
          fusionArr: ["M-001", "M-085", "M-086"]
        },
        {
          id: "",
          name: "黑暗赛罗",
          fusionArr: ["M-001", "M-138"]
        },
        {
          id: "",
          name: "赛罗奥特曼 格兰剑刃",
          fusionArr: ["M-004", "M-002", "M-005"]
        },
        {
          id: "",
          name: "赛罗奥特曼 特别联组",
          fusionArr: ["M-001", "M-001", "M-001"]
        },
        {
          id: "M-028",
          name: "银河斯特利姆奥特曼",
          fusionArr: ["M-096", "M-006"]
        },
        {
          id: "M-034",
          name: "银河维克特利奥特曼",
          fusionArr: ["M-096", "M-073"]
        },
        {
          id: "",
          name: "维克特利奥特曼 艾雷王扫尾",
          fusionArr: ["M-073", "M-079"]
        },
        {
          id: "",
          name: "维克特利奥特曼 EX雷德王重拳",
          fusionArr: ["M-073", "EX雷德王"]
        },
        {
          id: "",
          name: "维克特利奥特曼 古墩鞭击",
          fusionArr: ["M-073", "古墩"]
        },
        {
          id: "M-029",
          name: "维克特利奥特曼 骑士形态",
          fusionArr: ["M-073", "M-043"]
        },
        {
          id: "",
          name: "艾克斯奥特曼 哥莫拉装甲",
          fusionArr: ["M-020", "电子哥莫拉"]
        },
        {
          id: "",
          name: "终极赛罗武装艾克斯",
          fusionArr: ["M-020", "M-071"]
        },
        {
          id: "",
          name: "艾克斯奥特曼 贝塔火花装甲",
          fusionArr: ["M-004", "M-020", "M-007"]
        },
        {
          id: "M-072",
          name: "欧布奥特曼 重光形态",
          fusionArr: ["M-004", "M-021", "M-007"]
        },
        {
          id: "",
          name: "欧布奥特曼 暴炎形态",
          fusionArr: ["M-018", "M-021", "M-006"]
        },
        {
          id: "",
          name: "欧布奥特曼 疾风形态",
          fusionArr: ["M-014", "M-021", "M-001"]
        },
        {
          id: "",
          name: "欧布奥特曼 暗耀形态",
          fusionArr: ["M-013", "M-021", "M-138"]
        },
        {
          id: "",
          name: "欧布奥特曼 煌闪形态",
          fusionArr: ["M-019", "M-021", "M-020"]
        },
        {
          id: "",
          name: "欧布奥特曼 智勇形态",
          fusionArr: ["M-002", "M-021", "M-001"]
        },
        {
          id: "",
          name: "欧布奥特曼 闪斩形态",
          fusionArr: ["M-002", "M-021", "M-005"]
        },
        {
          id: "",
          name: "欧布奥特曼 慈愈形态",
          fusionArr: ["M-016", "M-021", "M-020"]
        },
        {
          id: "",
          name: "欧布奥特曼 荣光形态",
          fusionArr: ["M-043", "M-021", "M-013"]
        },
        {
          id: "",
          name: "欧布奥特曼 豪腕形态",
          fusionArr: ["M-009", "M-021", "M-073"]
        },
        {
          id: "",
          name: "欧布奥特曼 疾辉形态",
          fusionArr: ["迪迦奥特曼 空中型", "M-021", "M-074"]
        },
        {
          id: "",
          name: "欧布奥特曼 光耀形态",
          fusionArr: ["M-007", "M-021", "M-008"]
        },
        {
          id: "",
          name: "欧布奥特曼 斗拳形态",
          fusionArr: ["M-003", "M-021", "M-001"]
        },
        {
          id: "",
          name: "欧布奥特曼 暗雷形态",
          fusionArr: ["M-138", "M-021", "M-008"]
        },
        {
          id: "",
          name: "欧布奥特曼 光刃形态",
          fusionArr: ["M-050", "M-021", "M-043"]
        },
        {
          id: "",
          name: "欧布奥特曼 光魂形态",
          fusionArr: ["M-004", "M-021", "M-078"]
        },
        {
          id: "",
          name: "欧布奥特曼 刚力形态",
          fusionArr: ["迪迦奥特曼 强力型", "M-021", "M-085"]
        },
        {
          id: "",
          name: "欧布奥特曼 光岚形态",
          fusionArr: ["M-138", "M-021", "M-050"]
        },
        {
          id: "",
          name: "欧布奥特曼 虹刃形态",
          fusionArr: ["M-018", "M-021", "M-019"]
        },
        {
          id: "",
          name: "欧布奥特曼 强猛形态",
          fusionArr: ["M-006", "M-021", "M-074"]
        },
        {
          id: "",
          name: "捷德奥特曼 原始形态",
          fusionArr: ["M-004", "M-027", "M-138"]
        },
        {
          id: "",
          name: "捷德奥特曼 刚燃形态",
          fusionArr: ["M-002", "M-027", "M-003"]
        },
        {
          id: "",
          name: "捷德奥特曼 机敏形态",
          fusionArr: ["M-043", "M-027", "M-016"]
        },
        {
          id: "",
          name: "捷德奥特曼 豪勇形态",
          fusionArr: ["M-001", "M-027", "M-015"]
        },
        {
          id: "",
          name: "捷德奥特曼 尊皇形态",
          fusionArr: ["M-138", "M-027", "M-059"]
        },
        {
          id: "",
          name: "捷德奥特曼 银河初升",
          fusionArr: ["M-019", "M-020", "M-021"]
        },
        {
          id: "",
          name: "捷德奥特曼 神辉形态",
          fusionArr: ["M-004", "M-027", "M-022"]
        },
        {
          id: "",
          name: "捷德奥特曼 飞刃形态",
          fusionArr: ["M-138", "M-027", "欧布奥特曼 智勇形态"]
        },
        {
          id: "",
          name: "捷德奥特曼 无尽形态",
          fusionArr: ["M-007", "M-027", "M-044"]
        },
        {
          id: "",
          name: "捷德奥特曼 勇战形态",
          fusionArr: ["M-018", "M-027", "M-072"]
        },
        {
          id: "",
          name: "捷德奥特曼 领航形态",
          fusionArr: ["M-013", "M-027", "M-018"]
        },
        {
          id: "",
          name: "捷德奥特曼 斗魂形态",
          fusionArr: ["M-003", "M-027", "阿斯特拉奥特曼"]
        },
        {
          id: "",
          name: "捷德奥特曼 勇进形态",
          fusionArr: ["M-008", "M-027", "M-016"]
        },
        {
          id: "",
          name: "捷德奥特曼 光骑形态",
          fusionArr: ["M-009", "M-027", "M-043"]
        },
        {
          id: "",
          name: "捷德奥特曼 豪力形态",
          fusionArr: ["M-015", "M-027", "M-138"]
        },
        {
          id: "",
          name: "捷德奥特曼 超越形态",
          fusionArr: ["M-071", "M-027", "M-078"]
        },
        {
          id: "",
          name: "捷德奥特曼 光之十字",
          fusionArr: ["M-108", "M-016", "M-017"]
        },
        {
          id: "M-093",
          name: "罗索奥特曼 烈火形态",
          fusionArr: ["M-093", "M-006"]
        },
        {
          id: "",
          name: "布鲁奥特曼 烈火形态",
          fusionArr: ["M-094", "M-006"]
        },
        {
          id: "",
          name: "罗索奥特曼 跃水形态",
          fusionArr: ["M-093", "M-019"]
        },
        {
          id: "M-094",
          name: "布鲁奥特曼 跃水形态",
          fusionArr: ["M-094", "M-019"]
        },
        {
          id: "",
          name: "布鲁奥特曼 烈火形态",
          fusionArr: ["M-094", "M-006"]
        },
        {
          id: "",
          name: "罗索奥特曼 疾风形态",
          fusionArr: ["M-093", "M-007"]
        },
        {
          id: "",
          name: "布鲁奥特曼 疾风形态",
          fusionArr: ["M-094", "M-007"]
        },
        {
          id: "",
          name: "罗索奥特曼 大地形态",
          fusionArr: ["M-093", "M-073"]
        },
        {
          id: "",
          name: "布鲁奥特曼 大地形态",
          fusionArr: ["M-094", "M-073"]
        },
        {
          id: "M-032",
          name: "罗布奥特曼",
          fusionArr: ["M-093", "M-094"]
        },
        {
          id: "M-038",
          name: "格罗布奥特曼",
          fusionArr: ["M-093", "M-094", "M-064"]
        },
        {
          id: "M-033",
          name: "泰迦奥特曼 三重斯特利姆",
          fusionArr: ["M-075", "M-076", "M-077"]
        },
        {
          id: "",
          name: "卷领泰莱斯通",
          fusionArr: ["M-145", "M-054"]
        },
        {
          id: "",
          name: "三帝王",
          fusionArr: ["M-133", "M-134", "M-135"]
        },
        {
          id: "",
          name: "五帝王",
          fusionArr: ["三帝王", "M-137", "M-136"]
        },
        {
          id: "",
          name: "杰庞顿",
          fusionArr: ["M-130", "M-131", "M-132"]
        },
        {
          id: "",
          name: "斯卡鲁哥莫拉",
          fusionArr: ["M-139", "M-138", "M-140"]
        },
        {
          id: "",
          name: "雷霆杀手",
          fusionArr: ["M-079", "M-138", "M-080"]
        },
        {
          id: "",
          name: "佩丹尼姆杰顿",
          fusionArr: ["M-130", "M-138", "M-061"]
        },
        {
          id: "",
          name: "寄生破灭兽麦茨波罗兹",
          fusionArr: ["M-081", "M-082", "M-083"]
        },
        {
          id: "",
          name: "加拉特隆王",
          fusionArr: ["M-061", "M-138", "M-142"]
        },
        {
          id: "",
          name: "奇美拉柏洛斯",
          fusionArr: ["五帝王", "M-138", "佐格二形态"]
        },
        {
          id: "",
          name: "贝蒙杰多",
          fusionArr: ["贝蒙斯坦", "M-138", "M-130"]
        },
        {
          id: "M-012",
          name: "极恶 贝利亚",
          fusionArr: ["安培拉星人", "M-138", "黑暗路基艾尔"]
        },
        {
          id: "",
          name: "强壮哥莫拉兰特",
          fusionArr: ["M-139", "M-138", "泰兰特"]
        },
        {
          id: "",
          name: "燃烧百慕斯特拉",
          fusionArr: ["百慕拉", "M-138", "阿斯特隆"]
        },
        {
          id: "",
          name: "玛伽兽化贝利亚",
          fusionArr: ["电弧贝利亚", "M-138", "M-132"]
        },
      ]
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
        this.nowFusion = this.getFusion(item.id);
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
      this.tags[0].count = this.ultramedal.length;
      this.tags[0].own = this.collectList.length;
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
    // 获取单个数据
    getInfo(id) {
      let it = {};
      this.ultramedal.forEach((item, index, array) => {
        if (item.id == id) {
          it = item;
        }
      });
      return it;
    },
    // 可合成
    getFusion(id) {
      let arra = [];
      this.fusionList.forEach((item, index, array) => {
        if (item.fusionArr.indexOf(id) != -1) {
          let group = [];
          item.fusionArr.forEach((ite, ind, arr) => {
            group.push(this.getInfo(ite));
          });
          arra.push(group);
        }
      });
      return arra;
    },
    // 被合成
    getFusionSub(id) {
      let arra = [];
      this.fusionList.forEach((item, index, array) => {
        if (item.id == id) {
          let group = [];
          item.fusionArr.forEach((ite, ind, arr) => {
            group.push(this.getInfo(ite));
          });
          arra.push(group);
        }
      });
      return arra;
    }
  },
  created() {
    this.nowList = this.ultramedal;
    this.getCollectData();
    this.getCollectProgress();
  }
};
</script>

<style scoped></style>
