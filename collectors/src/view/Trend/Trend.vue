<template>
  <div class="item-list" :class="{ grid: ctrl.view == 1 }">
    <div class="ctrl-panel">
      <div class="switch-ctrl">
        <div class="switch-label">排序</div>
        <div
          class="switch-item"
          :class="{ active: ctrl.sort == 0 }"
          @click="getListBySort(0)"
        >
          默认
        </div>
        <div
          class="switch-item"
          :class="{ active: ctrl.sort == 1 }"
          @click="getListBySort(1)"
        >
          发售
        </div>
      </div>
      <div class="switch-ctrl right">
        <div class="switch-label">视图</div>
        <div
          class="switch-item"
          :class="{ active: ctrl.view == 0 }"
          @click="changeViewType(0)"
        >
          <i class="iconfont icon-list"></i>
        </div>
        <div
          class="switch-item"
          :class="{ active: ctrl.view == 1 }"
          @click="changeViewType(1)"
        >
          <i class="iconfont icon-jiugongge"></i>
        </div>
      </div>
    </div>
    <div class="model-toy" v-for="toy in nowList" :key="toy.title">
      <div class="toy-warp">
        <span
          class="sale-date"
          v-html="toy.saledate ? toy.saledate + ' 发售' : ''"
        ></span>
        <a
          class="website"
          v-show="toy.url != null"
          :href="toy.url"
          target="_blank"
          title="跳转到官网"
        >
          <i class="iconfont icon-wangye"></i>
        </a>
        <div class="trend-box">
          <div
            class="trend-left"
            v-lazy:background-image="'./static/img/item/trend/' + toy.pic"
          ></div>
          <div class="trend-right">
            <div class="trend-info">
              <p class="toy-title" :title="toy.name">{{ toy.name }}</p>
              <div class="price-box">
                <div class="price-item yen">
                  <p class="price-num">
                    <span
                      v-html="toy.yenprice != null ? toy.yenprice : '-'"
                    ></span>
                    <span class="unit" v-if="toy.yenprice != null">元</span>
                  </p>
                  <p class="price-name">发售参考价</p>
                </div>
                <div class="price-item min">
                  <p class="price-num">
                    <span
                      v-html="
                        arrMinNum(toy.pastprice) != 0
                          ? arrMinNum(toy.pastprice)
                          : '-'
                      "
                    ></span>
                    <span class="unit" v-if="arrMinNum(toy.pastprice) != 0"
                      >元</span
                    >
                  </p>
                  <p class="price-name">最低价</p>
                </div>
                <div class="price-item">
                  <p class="price-num">
                    <span
                      v-html="
                        getAverageNum(toy.pastprice) != 0
                          ? getAverageNum(toy.pastprice)
                          : '-'
                      "
                    ></span>
                    <span class="unit" v-if="getAverageNum(toy.pastprice) != 0"
                      >元</span
                    >
                  </p>
                  <p class="price-name">平均价</p>
                </div>
                <div class="price-item max">
                  <p class="price-num">
                    <span
                      v-html="
                        getMaxNum(toy.pastprice) != 0
                          ? getMaxNum(toy.pastprice)
                          : '-'
                      "
                    ></span>
                    <span class="unit" v-if="getMaxNum(toy.pastprice) != 0"
                      >元</span
                    >
                  </p>
                  <p class="price-name">最高价</p>
                </div>
              </div>
              <p class="toy-des">{{ toy.des }}</p>
            </div>
            <trendEcharts :xAxis="toy.pastprice"></trendEcharts>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 需要的信息：最低值、平均值、最高值、中位数
import TrendEcharts from "@/components/Echarts/TrendEcharts";
export default {
  name: "Trend",
  components: {
    TrendEcharts
  },
  data() {
    return {
      ctrl: {
        sort: 0,
        view: 0
      },
      nowList: null,
      modeltoy: [
        // {
        //   name: "",
        //   saledate: "",
        //   yenprice: null,
        //   pastprice: [0],
        //   des: "",
        //   url: "",
        //   pic: "def.jpg",
        //   saleDateSort: 99999999
        // },
        {
          name: "SHF特空机1号 宇宙赛文加",
          saledate: "2022.12",
          yenprice: 431,
          pastprice: [508, 498, 478],
          des: "",
          url: "https://tamashii.jp/item/14021/",
          pic: "6170664244.jpg",
          saleDateSort: 20221201
        },
        {
          name: "DYNACTION巨型新奥特曼40CM",
          saledate: "2021.9.18",
          yenprice: 1161,
          pastprice: [699, 1290, 1249, 1208, 1198, 1099],
          des: "",
          url: "https://tamashii.jp/item/13595/",
          pic: "9146883902.jpg",
          saleDateSort: 20210918
        },
        {
          name: "SHF格力乔奥特曼",
          saledate: "2022.9",
          yenprice: 363,
          pastprice: [450],
          des: "",
          url: "https://tamashii.jp/item/14006/",
          pic: "7590152850.jpg",
          saleDateSort: 20220901
        },
        {
          name: "SHF初代奥特曼真骨雕",
          saledate: "2022.7",
          yenprice: 391,
          pastprice: [530, 500, 580, 525],
          des: "",
          url: "https://tamashii.jp/item/13874/",
          pic: "9552016833.jpg",
          saleDateSort: 20220701
        },
        {
          name: "欧布奥特曼UR奥特卡牌SPECIAL SET",
          saledate: "2022.12",
          yenprice: 417,
          pastprice: [549, 450, 499, 489, 498, 508, 478, 475, 448],
          des: "含35张新规奥特卡牌",
          url: "https://p-bandai.jp/item/item-1000172276/",
          pic: "0682287033.jpg",
          saleDateSort: 20221201
        },
        {
          name: "德凯奥特曼卡片套装02",
          saledate: "2022.8.6",
          yenprice: 34,
          pastprice: [28, 25],
          des: "含6张卡片",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/12472/",
          pic: "1548161075.jpg",
          saleDateSort: 20220806
        },
        {
          name: "德凯奥特曼卡片套装01",
          saledate: "2022.7.9",
          yenprice: 34,
          pastprice: [28, 25],
          des: "含6张卡片",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/12469/",
          pic: "0638530477.jpg",
          saleDateSort: 20220709
        },
        {
          name: "德凯奥特曼 变身器豪华套装",
          saledate: "2022.7.9",
          yenprice: 475,
          pastprice: [440],
          des: "含变身器+收纳盒+11张卡片",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/12470/",
          pic: "1235082600.jpg",
          saleDateSort: 20220709
        },
        {
          name: "德凯奥特曼 卡片收纳盒",
          saledate: "2022.7.9",
          yenprice: 126,
          pastprice: [86, 99, 95],
          des: "含卡片收藏盒+3张卡片",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/12468/",
          pic: "2837545135.jpg",
          saleDateSort: 20220709
        },
        {
          name: "德凯奥特曼 变身器标准版",
          saledate: "2022.7.9",
          yenprice: 315,
          pastprice: [225, 217, 280, 249],
          des: "含变身器+2张卡片",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/12467/",
          pic: "1723730232.jpg",
          saleDateSort: 20220709
        },
        {
          name: "德凯奥特曼 闪亮型软胶·附赠特别版卡片",
          saledate: "2022.6.4",
          yenprice: 34,
          pastprice: [35, 31],
          des: "含德凯奥特曼 闪亮型软胶+特别版卡片",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/12466/",
          pic: "9982631301.jpg",
          saleDateSort: 20220604
        },
        {
          name: "PB盖亚&阿古茹奥特曼套装DX",
          saledate: "2022.9",
          yenprice: 225,
          pastprice: [279, 269, 259, 258, 249, 245, 235],
          des: "含PB版盖亚V2、阿古茹V2、阿古茹至高型",
          url: "https://p-bandai.jp/item/item-1000171224/",
          pic: "7871157012.jpg",
          saleDateSort: 20220901
        },
        {
          name: "PB特利迦黑暗三巨人纪念套装钥匙DX",
          saledate: "2022.8",
          yenprice: 228,
          pastprice: [268, 248, 242],
          des: "含PB版希特拉姆、卡尔蜜拉和达贡",
          url: "https://p-bandai.jp/item/item-1000169478/",
          pic: "9753094469.jpg",
          saleDateSort: 20220801
        },
        {
          name: "PB特利迦奥特曼纪念套装钥匙DX",
          saledate: "2022.8",
          yenprice: 380,
          pastprice: [439, 420, 399, 395],
          des: "含PB版光暗特利迦、闪耀特利迦、复合型、强力型和空中型",
          url: "https://p-bandai.jp/item/item-1000169439/",
          pic: "2323474899.jpg",
          saleDateSort: 20220801
        },
        {
          name: "SHF妖丽战士 卡尔蜜拉",
          saledate: "2022.8",
          yenprice: 394,
          pastprice: [458, 448, 428, 480, 430],
          des: "",
          url: "https://tamashii.jp/item/13910/",
          pic: "8790263940.jpg",
          saleDateSort: 20220801
        },
        {
          name: "SHF特利迦奥特曼 空中型",
          saledate: "2022.7",
          yenprice: 394,
          pastprice: [420, 430, 435, 449, 420, 440],
          des: "",
          url: "https://tamashii.jp/item/13891/",
          pic: "9083867813.jpg",
          saleDateSort: 20220701
        },
        {
          name: "PB特利迦·奥特兄弟钥匙套装",
          saledate: "2022.7",
          yenprice: 668,
          pastprice: [809, 800, 799, 789, 730],
          des: "共8款钥匙，含初代、佐菲、赛文、杰克、艾斯、泰罗、雷欧和艾迪",
          url: "https://p-bandai.jp/item/item-1000167638/",
          pic: "9236776245.jpg",
          saleDateSort: 20220701
        },
        {
          name: "SHF黑暗特利迦",
          saledate: "2022.6",
          yenprice: 416,
          pastprice: [485, 480, 465, 460, 450, 440, 430, 420, 410],
          des: "",
          url: "https://tamashii.jp/item/13890/",
          pic: "8542908695.jpg",
          saleDateSort: 20220601
        },
        {
          name: "特利迦新生代钥匙套装Vol.2",
          saledate: "2022.6",
          yenprice: 388,
          pastprice: [455, 449, 429, 410, 400, 399, 395, 390, 385],
          des: "含艾克斯、捷德、泰迦、泰塔斯、风马",
          url: "https://p-bandai.jp/item/item-1000167088/",
          pic: "6582630675.jpg",
          saleDateSort: 20220601
        },
        {
          name: "特利迦新生代钥匙套装Vol.1",
          saledate: "2022.6",
          yenprice: 388,
          pastprice: [455, 449, 429, 410, 400, 399, 395, 390, 385],
          des: "含银河、维克特利、欧布、罗索、布鲁",
          url: "https://p-bandai.jp/item/item-1000167087/",
          pic: "5501806536.jpg",
          saleDateSort: 20220601
        },
        {
          name: "SHF迪迦奥特曼强力型真骨雕",
          saledate: "2022.5",
          yenprice: 401,
          pastprice: [610, 480, 470, 498, 450, 518, 530, 548, 557, 627],
          des: "",
          url: "https://tamashii.jp/item/13821/",
          pic: "3937344485.jpg",
          saleDateSort: 20220501
        },
        {
          name: "SHF风马奥特曼 Special Clear Color Ver.",
          saledate: "2021.12",
          yenprice: 278,
          pastprice: [370, 355],
          des: "",
          url: "https://tamashii.jp/item/13872/",
          pic: "8414329854.jpg",
          saleDateSort: 20211201
        },
        {
          name: "SHF基里艾洛德人",
          saledate: "2022.5",
          yenprice: 372,
          pastprice: [460, 480, 440, 429, 410, 435, 415, 428],
          des: "",
          url: "https://tamashii.jp/item/13867/",
          pic: "7600487532.jpg",
          saleDateSort: 20220501
        },
        {
          name: "磁力怪兽 安东拉钥匙童装附赠",
          saledate: "2022.1",
          yenprice: 85,
          pastprice: [148, 130, 141],
          des: "童装+安东拉钥匙",
          url: "https://m-78.jp/news/post-6134",
          pic: "1372578717.jpg",
          saleDateSort: 20220101
        },
        {
          name: "SHF利布特奥特曼",
          saledate: "2022.4",
          yenprice: 340,
          pastprice: [318, 328, 288, 268],
          des: "",
          url: "https://tamashii.jp/item/13803/",
          pic: "0942972170.jpg",
          saleDateSort: 20220401
        },
        {
          name: "SHF泽塔奥特曼 贝塔冲击",
          saledate: "2022.4",
          yenprice: 404,
          pastprice: [
            440,
            458,
            478,
            488,
            485,
            455,
            475,
            450,
            470,
            465,
            420,
            460,
            480,
            390
          ],
          des: "",
          url: "https://tamashii.jp/item/13829/",
          pic: "8442580298.jpg",
          saleDateSort: 20220401
        },
        {
          name: "TDG迪迦25周年",
          saledate: "2021.11.20",
          yenprice: 93,
          pastprice: [130, 149, 150, 159],
          des: "",
          url:
            "https://www.m78-online.net/products/detail.php?product_id=12121&utm_source=tsuinfo&utm_campaign=20211118_25key&utm_medium=hp",
          pic: "3220640722.jpg",
          saleDateSort: 20211120
        },
        {
          name: "DX黑暗特利迦胜利神光棒PB",
          saledate: "2022.5",
          yenprice: 493,
          pastprice: [569, 579, 598, 578, 575, 509],
          des: "含黑暗特利迦神光棒+黑暗特利迦钥匙+2个怪兽钥匙",
          url: "https://p-bandai.jp/item/item-1000164539/",
          pic: "4749566994.jpg",
          saleDateSort: 20220501
        },
        {
          name: "DX特利迦远古青铜胜利神光棒",
          saledate: "2022.3",
          yenprice: 319,
          pastprice: [
            388,
            378,
            350,
            349,
            340,
            339,
            358,
            328,
            288,
            279,
            270,
            258,
            246
          ],
          des: "含特利迦远古胜利神光棒+原始钥匙",
          url: "https://p-bandai.jp/item/item-1000163882/",
          pic: "3341588337.jpg",
          saleDateSort: 20220301
        },
        {
          name: "特利迦可发声扭蛋GP01",
          saledate: "2022.1",
          yenprice: 232,
          pastprice: [496, 342, 380, 382, 362],
          des: "含戴拿+戴拿特别版+赛罗+赛罗特别版",
          url: "https://p-bandai.jp/item/item-1000162686/",
          pic: "4816999436.jpg",
          saleDateSort: 20220101
        },
        {
          name: "SHF泰迦奥特曼 彩虹三重斯特利姆形态",
          saledate: "2022.02",
          yenprice: 417,
          pastprice: [498, 528, 550, 520, 540],
          des: "",
          url: "https://tamashii.jp/item/13780/",
          pic: "9501525247.jpg",
          saleDateSort: 20220201
        },
        {
          name: "DX泽塔奥特曼奥特勋章图鉴",
          saledate: "2022.2",
          yenprice: 271,
          pastprice: [388, 390, 368, 305, 340, 300, 318, 279, 259, 241, 223],
          des: "含奥特勋章图鉴+特利迦奥特 复合型勋章",
          url: "https://p-bandai.jp/item/item-1000162972/",
          pic: "2820227126.jpg",
          saleDateSort: 20220201
        },
        {
          name: "DX纳斯第斯号基地",
          saledate: "2021.10.30",
          yenprice: 478,
          pastprice: [549, 349, 300, 309, 276, 259, 246, 176],
          des: "含DX纳斯第斯号+限定钥匙",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/12183/",
          pic: "1545467545.jpg",
          saleDateSort: 20211030
        },
        {
          name: "特利迦与赛罗童装限定钥匙",
          saledate: "2021.10",
          yenprice: null,
          pastprice: [180, 115, 105],
          des: "",
          url: "https://m-78.jp/news/post-6054",
          pic: "5163017078.jpg",
          saleDateSort: 20211001
        },
        {
          name: "SHF泽塔奥特曼 德尔塔天爪",
          saledate: "2022.1",
          yenprice: 420,
          pastprice: [485, 430, 425, 409, 415, 445, 460, 390, 380],
          des: "含泽塔奥特曼 德尔塔SHF+配件",
          url: "https://tamashii.jp/item/13765/",
          pic: "4049904576.jpg",
          saleDateSort: 20220101
        },
        {
          name: "泽塔奥特曼阿尔法、伽马、贝塔和德尔塔钥匙",
          saledate: "2022.2",
          yenprice: 323,
          pastprice: [
            349,
            350,
            398,
            388,
            368,
            359,
            349,
            335,
            330,
            329,
            320,
            315
          ],
          des: "含泽塔奥特曼阿尔法、伽马、贝塔和德尔塔共4款钥匙",
          url: "https://p-bandai.jp/item/item-1000162971/",
          pic: "6851391459.jpg",
          saleDateSort: 20220201
        },
        {
          name: "特利迦奥特曼闪耀之刃",
          saledate: "2021.10.09",
          yenprice: 242,
          pastprice: [168, 170, 185, 169, 165, 158, 142, 139, 136],
          des: "",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/12173/",
          pic: "3773402717.jpg",
          saleDateSort: 20211009
        },
        {
          name: "特利迦奥特曼永恒闪耀钥匙",
          saledate: "2021.10.09",
          yenprice: 63,
          pastprice: [99, 85, 60, 68, 58, 55],
          des: "",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/12175/",
          pic: "7700826964.jpg",
          saleDateSort: 20211009
        },
        {
          name: "利布特奥特曼钥匙",
          saledate: "2021.10.23",
          yenprice: 63,
          pastprice: [88, 58, 59, 55, 58, 60, 49, 35],
          des: "",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/12178/",
          pic: "5161201316.jpg",
          saleDateSort: 20211023
        },
        {
          name: "SHF特空机3号 金古桥军械库定制",
          saledate: "2022.3",
          yenprice: 505,
          pastprice: [555, 535, 589, 595, 580, 545, 530],
          des: "特空机3号 金古桥军械库定制*1",
          url: "https://tamashii.jp/item/13764/",
          pic: "0919064488.jpg",
          saleDateSort: 20220301
        },
        {
          name: "GUTS胜利飞燕1号&2号SHF配件",
          saledate: "2022.1",
          yenprice: 130,
          pastprice: [160, 140, 150, 159, 135, 190, 149, 178, 138, 155, 164],
          des: "含飞燕1号+飞燕2号",
          url: "https://tamashii.jp/item/13703/",
          pic: "7285354079.jpg",
          saleDateSort: 20220101
        },
        {
          name: "SHF超古代怪兽 哥尔赞",
          saledate: "2022.1",
          yenprice: 420,
          pastprice: [
            440,
            468,
            518,
            519,
            539,
            485,
            470,
            550,
            528,
            538,
            495,
            489,
            490,
            460,
            459,
            450,
            439
          ],
          des: "哥尔赞SHF*1",
          url: "https://tamashii.jp/item/13704/",
          pic: "0604167183.jpg",
          saleDateSort: 20220101
        },
        {
          name: "国代胜利飞燕号EX-J",
          saledate: "2022.4",
          yenprice: null,
          pastprice: [199, 110, 139, 120, 114],
          des: "胜利飞燕号EX-J*1",
          url: null,
          pic: "0475674147.jpg",
          saleDateSort: 20220401
        },
        {
          name: "国代黑暗迪迦神光棒",
          saledate: "2021.10",
          yenprice: null,
          pastprice: [139, 150, 119, 129, 120, 118, 108, 102],
          des: "黑暗迪迦神光棒*1",
          url: null,
          pic: "1519215941.jpg",
          saleDateSort: 20211001
        },
        {
          name: "特空机1号 赛文加 超硬芯回旋铁拳钥匙",
          saledate: "2021.9",
          yenprice: 94,
          pastprice: [178, 140, 180, 165, 160, 158],
          des: "包含特空机1号 赛文加 超硬芯回旋铁拳钥匙+杂志",
          url: "https://www.amazon.co.jp/dp/B09CRQHQ2J",
          pic: "1256933658.jpg",
          saleDateSort: 20210901
        },
        {
          name: "黑暗迪迦卡蜜尔变身器套装",
          saledate: "2022.3",
          yenprice: 940,
          pastprice: [
            985,
            1010,
            954,
            1070,
            970,
            1050,
            1150,
            1100,
            1020,
            874,
            865,
            850,
            846,
            838,
            825,
            798,
            794,
            771
          ],
          des: "黑暗迪迦神光棒+卡蜜尔变身器",
          url: "https://p-bandai.jp/item/item-1000162608/",
          pic: "6364924795.jpg",
          saleDateSort: 20220301
        },
        {
          name: "欧布奥特曼变身器UR",
          saledate: "2022.2",
          yenprice: 977,
          pastprice: [
            1049,
            1119,
            1108,
            1110,
            1050,
            1040,
            1108,
            1098,
            959,
            1030,
            1080,
            1099,
            1030,
            1130,
            988
          ],
          des: "欧布奥特曼变身器UR*1",
          url: "https://p-bandai.jp/item/item-1000162085/",
          pic: "0945140992.jpg",
          saleDateSort: 20220201
        },

        {
          name: "迪迦奥特曼变身器25周年UR",
          saledate: "2021.12",
          yenprice: 651,
          pastprice: [
            890,
            950,
            1200,
            825,
            749,
            850,
            858,
            815,
            825,
            800,
            840,
            1076,
            930,
            899,
            894,
            799,
            729,
            750,
            868,
            898,
            904,
            860,
            859,
            838,
            788,
            750,
            748,
            728,
            699
          ],
          des: "迪迦奥特曼变身器25周年UR*1",
          url: "https://p-bandai.jp/item/item-1000153643",
          pic: "9985374184.jpg",
          saleDateSort: 20211201
        },
        {
          name: "SHF迪迦奥特曼复合型真骨雕",
          saledate: "2021.7.31",
          yenprice: 390,
          pastprice: [
            639,
            850,
            718,
            999,
            660,
            820,
            670,
            668,
            758,
            688,
            658,
            638,
            628,
            618,
            619,
            550
          ],
          des: "迪迦奥特曼复合型SHF真骨雕*1",
          url: "https://ultra.tamashii.jp/shinkocchou/",
          pic: "4110236948.jpg",
          saleDateSort: 20210731
        },
        {
          name: "特利迦·高斯奥特曼 月神模式钥匙",
          saledate: "2021.12",
          yenprice: 322,
          pastprice: [450, 386, 354, 322],
          des: "高斯奥特曼 月神模式钥匙+童装(内裤、体恤最终价格不同)",
          url: "https://m-78.jp/news/post-6013",
          pic: "0613853457.jpg",
          saleDateSort: 20211201
        },
        {
          name: "SHF特利迦奥特曼 复合型",
          saledate: "2021.11.13",
          yenprice: 215,
          pastprice: [270, 250, 255, 249, 258, 215, 229],
          des: "",
          url: "https://tamashii.jp/item/13674/",
          pic: "2482221258.jpg",
          saleDateSort: 20211113
        },
        {
          name: "特利迦·胜利神光棒 豪华版",
          saledate: "2021.7.10",
          yenprice: 597,
          pastprice: [
            470,
            615,
            495,
            499,
            485,
            432,
            469,
            460,
            432,
            422,
            400,
            388,
            370
          ],
          des: "含胜利神光棒+复合型和强力型钥匙+腰带",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11947/",
          pic: "6001453401.jpg",
          saleDateSort: 20210710
        },
        {
          name: "特利迦·胜利神光棒 标准版", //名称
          saledate: "2021.7.10",
          yenprice: 357, //官方参考价
          pastprice: [
            354,
            279,
            336,
            386,
            424,
            289,
            285,
            299,
            450,
            275,
            329,
            300,
            290,
            288,
            286,
            280,
            295,
            238,
            239,
            221,
            235,
            219,
            208,
            198,
            193,
            191,
            189,
            176,
            160
          ], //历史出价
          des: "含胜利神光棒+特利迦复合型钥匙+中国限定钥匙",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11946/",
          pic: "6023439238.jpg",
          saleDateSort: 20210710
        },
        {
          name: "特利迦·多功能无人变形机 胜利猎鹰",
          saledate: "2021.7.10",
          yenprice: 142,
          pastprice: [
            169,
            152,
            142,
            127,
            139,
            130,
            127,
            108,
            106,
            99,
            98,
            95,
            89,
            85,
            79,
            69,
            63,
            59,
            51
          ],
          des: null,
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11997/",
          pic: "9216715703.jpg",
          saleDateSort: 20210710
        },
        {
          name: "特利迦·圆环之臂",
          saledate: "2021.7.24",
          yenprice: 258,
          pastprice: [
            269,
            179,
            299,
            189,
            220,
            190,
            198,
            256,
            180,
            149,
            145,
            143,
            137,
            135,
            131,
            129,
            122,
            116
          ],
          des: null,
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11950/",
          pic: "2444468603.jpg",
          saleDateSort: 20210724
        },
        {
          name: "特利迦·收纳腰带",
          saledate: "2021.7.10",
          yenprice: 175,
          pastprice: [179, 199, 99, 108, 89, 85, 79, 70],
          des: null,
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11943/",
          pic: "4566708603.jpg",
          saleDateSort: 20210710
        },
        {
          name: "特利迦·强力型钥匙",
          saledate: "2021.7.10",
          yenprice: 65,
          pastprice: [58, 89, 75, 68, 56, 60, 55, 50, 48, 42, 40, 38, 35, 32],
          des: null,
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11944/",
          pic: "6089584307.jpg",
          saleDateSort: 20210710
        },
        {
          name: "特利迦·空中型钥匙",
          saledate: "2021.7.24",
          yenprice: 65,
          pastprice: [60, 89, 75, 48, 42, 40, 39, 35],
          des: null,
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11949/",
          pic: "3911376470.jpg",
          saleDateSort: 20210724
        },
        {
          name: "特利迦·迪迦复合型钥匙",
          saledate: "2021.7.3",
          yenprice: 65,
          pastprice: [89, 68, 80, 75, 64, 60, 55, 52, 50, 48, 42, 40, 35, 32],
          des: null,
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11945/",
          pic: "3044902212.jpg",
          saleDateSort: 20210703
        },
        {
          name: "特利迦·迪迦钥匙套装",
          saledate: "2021.12",
          yenprice: 195,
          pastprice: [210, 215, 235, 255, 225, 258, 259, 230],
          des: "含迪迦强力型+迪迦空中型+闪耀迪迦",
          url: "https://p-bandai.jp/item/item-1000159699/",
          pic: "7463135507.jpg",
          saleDateSort: 20211201
        },
        {
          name: "特利迦·泽塔原生形态钥匙",
          saledate: "2021.9",
          yenprice: 65,
          pastprice: [75, 89, 64, 63, 62, 61, 60, 59, 49, 41, 38],
          des: null,
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/12055/",
          pic: "2230315171.jpg",
          saleDateSort: 20210901
        },
        {
          name: "特利迦·人造赛罗钥匙童装附赠",
          saledate: "2021.7.9",
          yenprice: 89,
          pastprice: [118, 110, 330, 158, 180, 147, 108, 128],
          des: "含童装内裤或体恤+人造赛罗钥匙",
          url: "https://m-78.jp/news/post-5952",
          pic: "4226628959.jpg",
          saleDateSort: 20210709
        },
        {
          name: "特利迦·初代奥特曼55周年纪念钥匙",
          saledate: "2021.7.10",
          yenprice: 97,
          pastprice: [
            145,
            149,
            185,
            155,
            170,
            162,
            169,
            155,
            175,
            180,
            165,
            188,
            165,
            193,
            190,
            179,
            160,
            125,
            130,
            134,
            120,
            260,
            210
          ],
          des: null,
          url: "https://m-78.jp/news/post-5907",
          pic: "9767919038.jpg",
          saleDateSort: 20210710
        },
        {
          name: "特利迦·贝利亚奥特曼钥匙",
          saledate: "2021.7.20",
          yenprice: 70,
          pastprice: [
            138,
            165,
            128,
            150,
            170,
            199,
            135,
            120,
            125,
            158,
            115,
            119,
            95,
            80
          ],
          des: "包含講談社MOOK特利迦专刊+贝利亚奥特曼钥匙",
          url: "https://bookclub.kodansha.co.jp/buy?item=0000352821",
          pic: "5339720991.jpg",
          saleDateSort: 20210720
        },
        {
          name: "特利迦·食玩第一弹套装SG01",
          saledate: "2021.7.19",
          yenprice: 114,
          pastprice: [139, 149, 150, 185, 130, 138, 90, 130, 140],
          des: "一套6款",
          url:
            "https://www.bandai.co.jp/candy/products/2021/4549660628194000.html",
          pic: "2321898692.jpg",
          saleDateSort: 20210719
        },
        {
          name: "特利迦·食玩第二弹套装SG02",
          saledate: "2021.10",
          yenprice: 152,
          pastprice: [168, 120, 205, 140],
          des: "一套8款，含隐藏款",
          url:
            "https://www.bandai.co.jp/candy/products/2021/4549660700234000.html",
          pic: "2931378532.jpg",
          saleDateSort: 20211001
        },
        {
          name: "特利迦·扭蛋第一弹套装GP01",
          saledate: "2021.7",
          yenprice: 119,
          pastprice: [
            250,
            280,
            288,
            310,
            215,
            175,
            178,
            262,
            188,
            180,
            159,
            148,
            135
          ],
          des: "一套7款，含隐藏款",
          url:
            "https://www.bandai.co.jp/catalog/item.php?jan_cd=4549660664239000",
          pic: "4042932634.jpg",
          saleDateSort: 20210701
        },
        {
          name: "特利迦·扭蛋第二弹套装GP02",
          saledate: "2021.10",
          yenprice: 153,
          pastprice: [240, 225, 235, 220, 248],
          des: "一套9款，含隐藏款",
          url: "",
          pic: "9809389683.jpg",
          saleDateSort: 20211001
        },
        {
          name: "DX特空机3号金古桥军械库定制发声变形",
          saledate: "2020.9.19",
          yenprice: 233,
          pastprice: [205, 179, 174, 160, 158, 157, 155],
          des: "",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11575/",
          pic: "6137193599.jpg",
          saleDateSort: 20200919
        },
        {
          name: "特空机2号乌英达姆+格纳库套装PB",
          saledate: "2021.10.13",
          yenprice: 297,
          pastprice: [380, 368, 359, 310, 279, 248, 245, 212, 195, 188, 169],
          des: "乌英达姆软件+格纳库",
          url: "https://p-bandai.jp/item/item-1000157343/",
          pic: "0188389793.jpg",
          saleDateSort: 20211013
        },
        {
          name: "DX特空机1号赛文加发声PB",
          saledate: "2021.4.22",
          yenprice: 558,
          pastprice: [655, 388, 368, 360, 339, 338, 329, 318],
          des: "",
          url: "https://p-bandai.jp/item/item-1000150984",
          pic: "4953195715.jpg",
          saleDateSort: 20210422
        },
        {
          name: "迪迦25周年胜利飞燕2号",
          saledate: "2021.2.27",
          yenprice: 226,
          pastprice: [224, 199, 170, 145, 110, 99],
          des: "",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11755/",
          pic: "9012643663.jpg",
          saleDateSort: 20210227
        },
        {
          name: "迪迦25周年胜利飞燕1号",
          saledate: "2021.2.27",
          yenprice: 226,
          pastprice: [214, 189, 170, 145, 110, 99],
          des: "",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11754/",
          pic: "4548201767.jpg",
          saleDateSort: 20210227
        },
        {
          name: "令人卡&赛罗和奥特六兄弟披风版",
          saledate: "2021.2.12",
          yenprice: 126,
          pastprice: [195, 178, 168, 160, 123, 99],
          des: "含令人卡+赛罗和奥特六兄弟披风版勋章",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11756/",
          pic: "4283482170.jpg",
          saleDateSort: 20210212
        },
        {
          name: "新生代奥特勋章",
          saledate: "2021.2.12",
          yenprice: 145,
          pastprice: [209, 178, 163, 140, 149, 148, 145, 168, 158, 130, 99],
          des: "含9枚奥特勋章",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11757/",
          pic: "9364578321.jpg",
          saleDateSort: 20210212
        },
        {
          name: "DX幻世魔剑台词版",
          saledate: "2021.8.18",
          yenprice: 351,
          pastprice: [458, 399, 388, 380, 390, 388, 365, 358, 345],
          des: "",
          url: "https://p-bandai.jp/item/item-1000154403/",
          pic: "1884598198.jpg",
          saleDateSort: 20210818
        },
        {
          name: "泽塔升华器PB纪念版",
          saledate: "2021.6.16",
          yenprice: 549,
          pastprice: [629, 699, 729, 780, 750, 708, 739, 725, 749, 747],
          des: "含泽塔升华器纪念版+三张认证卡+4枚奥特勋章",
          url: "https://p-bandai.jp/item/item-1000152765/",
          pic: "6152566804.jpg",
          saleDateSort: 20210616
        },
        {
          name: "迪迦奥特曼25周年最终圣战软胶套装",
          saledate: "2021.10.11",
          yenprice: 155,
          pastprice: [289, 230, 220, 200, 185, 179, 168, 122],
          des: "含三款迪迦软胶",
          url: "https://p-bandai.jp/item/item-1000155889/",
          pic: "0976180621.jpg",
          saleDateSort: 20211011
        },
        {
          name: "DX黑暗泽塔升华器",
          saledate: "2021.3.12",
          yenprice: 436,
          pastprice: [430, 435, 465, 499, 1038, 1068, 1288, 1058, 1150],
          des: "含黑暗泽塔升华器+伽古拉认证卡+8枚怪兽勋章",
          url: "https://p-bandai.jp/item/item-1000146933/",
          pic: "2481612558.jpg",
          saleDateSort: 20210312
        },
        {
          name: "迪迦奥特曼25周年软胶套装",
          saledate: "2021.01.16",
          yenprice: 137,
          pastprice: [198, 189, 183, 175, 173, 172, 170, 163, 119],
          des: "含三款迪迦软胶",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11745/",
          pic: "7230541311.jpg",
          saleDateSort: 20210116
        },
        {
          name: "SHF军械库特空机1号赛文加",
          saledate: "2021.6.24",
          yenprice: 434,
          pastprice: [600, 550, 545, 529, 510, 499],
          des: "",
          url: "https://p-bandai.jp/item/item-1000152173/",
          pic: "5092368925.jpg",
          saleDateSort: 20210624
        },
        {
          name: "SHF泽塔奥特曼 伽马未来",
          saledate: "2021.9",
          yenprice: 404,
          pastprice: [550, 430, 488, 490, 469, 445, 450, 470, 455, 435],
          des: "含泽塔奥特曼 伽马未来SHF+配件",
          url: "https://tamashii.jp/item/13616/",
          pic: "7349880577.jpg",
          saleDateSort: 20210901
        },
        {
          name: "SHF泽塔奥特曼 阿尔法装甲",
          saledate: "2020.12.19",
          yenprice: 217,
          pastprice: [279, 264],
          des: "含泽塔奥特曼 阿尔法装甲SHF+配件",
          url: "https://tamashii.jp/item/13328/",
          pic: "5944963397.jpg",
          saleDateSort: 20201219
        },
        {
          name: "SHF泽塔奥特曼 原生形态",
          saledate: "2021.9.18",
          yenprice: 280,
          pastprice: [289, 254, 240, 239, 227, 223],
          des: "含泽塔奥特曼 原生形态SHF+配件",
          url: "https://tamashii.jp/item/13596/",
          pic: "0654177742.jpg",
          saleDateSort: 20210918
        },
        {
          name: "SHF泰塔斯奥特曼",
          saledate: "2020.9",
          yenprice: 399,
          pastprice: [480, 2600, 2700, 2780, 2299, 2280, 2000],
          des: "",
          url: "https://tamashii.jp/item/13245/",
          pic: "5344829216.jpg",
          saleDateSort: 20200901
        }
      ]
    };
  },
  mounted: function() {
    const vm = this;
    vm.$nextTick(() => {});
  },
  methods: {
    // 获取数组最大值
    getMaxNum(arr) {
      return Math.max.apply(null, arr);
    },
    // 获取数组最小值
    arrMinNum(arr) {
      return Math.min.apply(null, arr);
    },
    // 获取数组平均值
    getAverageNum(arr) {
      let sum = eval(arr.join("+"));
      return Math.ceil(((sum / arr.length) * 100) / 100);
    },
    // 获取价格区间数据
    getPriceSection(arr) {
      let arrSort = arr.sort();
      let min = arrSort[0];
      let max = arrSort[arrSort.length - 1];
      let rt = {
        x: [],
        y: []
      };
      let sec = 30; //区间
      let minSec = Math.floor(min / sec); //最小区间值
      let maxSec = Math.ceil(max / sec); //最大区间值
      for (let i = minSec; i <= maxSec; i++) {
        let num = 0;
        arr.forEach((it, ind, a) => {
          if (it > i * sec && it < (i + 1) * sec) {
            num++;
          }
        });
        rt.x.push(i * sec + "~" + (i + 1) * sec); //区间段
        rt.y.push(num); //对应数值
      }
      return rt;
    },
    getListBySort(type) {
      switch (type) {
        case 0:
        default:
          this.nowList = this.modeltoy;
          this.ctrl.sort = 0;
          break;
        case 1:
          let temp = JSON.parse(JSON.stringify(this.modeltoy));
          this.nowList = temp.sort(this.sortBy("saleDateSort", false));
          this.ctrl.sort = 1;
          break;
      }
    },
    changeViewType(type) {
      this.ctrl.view = type;
      let temp = this.nowList;
      this.nowList = null;
      this.nowList = temp;
    },
    /**数组根据数组对象中的某个属性值进行排序的方法
     * 使用例子：newArray.sort(sortBy('number',false)) //表示根据number属性降序排列;若第二个参数不传递，默认表示升序排序
     * @param attr 排序的属性 如number属性
     * @param rev true表示升序排列，false降序排序
     * */
    sortBy(attr, rev) {
      //第二个参数没有传递 默认升序排列
      if (rev == undefined) {
        rev = 1;
      } else {
        rev = rev ? 1 : -1;
      }

      return function(a, b) {
        a = a[attr];
        b = b[attr];
        if (a < b) {
          return rev * -1;
        }
        if (a > b) {
          return rev * 1;
        }
        return 0;
      };
    }
  },
  created() {
    this.nowList = this.modeltoy;
  }
};
</script>

<style scoped>
.model-toy {
  width: 610px;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 10px 10px 0;
  float: left;
}
.toy-warp {
  position: relative;
  overflow: hidden;
  background-color: #003455c4;
  background-image: linear-gradient(-90deg, #08a1a1 0, #00366d 100%);
  /* -webkit-box-shadow: 0 2px 10px 3px rgba(0, 58, 124, 0.43);
  box-shadow: 0 2px 10px 3px rgba(0, 58, 124, 0.43);
  -webkit-filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
  -webkit-backdrop-filter: saturate(180%) blur(8px);
  backdrop-filter: saturate(180%) blur(8px); */
  width: 100%;
  height: 100%;
}

.grid .model-toy {
  width: 400px;
}
.grid .trend-left,
.grid .trend-right {
  float: unset;
  width: 100%;
}
.grid .trend-left {
  height: 400px;
  margin: 0;
  border-radius: 4px 4px 0 0;
}
.grid .trend-right {
  height: 130px;
  padding-left: 10px;
}
.grid .toy-title {
  padding: 10px 0 10px;
}
.grid .price-item {
  width: 95px;
}
.grid .sale-date {
  color: #08959b;
}
@media (max-width: 1024px) {
  .model-toy {
    width: calc(100% - 4px);
    margin: 0 auto 4px;
    float: unset;
  }
  .toy-warp {
    min-height: 115px;
  }
  .grid .model-toy {
    width: calc(100% - 10px);
    margin: 0 5px 10px;
    box-sizing: border-box;
  }
  .grid .trend-right {
    height: 100px;
  }
  .grid .price-item {
    width: 24%;
  }
}
.trend-left,
.trend-right {
  float: left;
  height: 100%;
}
.trend-left {
  width: 130px;
  height: 130px;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0 0 10px;
  background-color: #f8f8f8;
  background-position: center;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-size: contain;
  background-repeat: no-repeat;
}
.trend-left img {
  width: 100%;
  height: 100%;
}
.trend-right {
  position: relative;
  width: calc(100% - 130px - 10px);
  padding-left: 15px;
}
@media (max-width: 1024px) {
  .trend-left {
    width: 80px;
    height: 80px;
    margin: 20px 0 0 10px;
  }
  .trend-right {
    width: calc(100% - 80px - 10px);
    padding-left: 10px;
  }
}
.trend-info {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.trend-echarts {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  opacity: 0.4;
}
.toy-title {
  color: #fff;
  padding: 20px 0 10px;
  font-size: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.website {
  position: absolute;
  right: 0;
  bottom: 0;
  text-align: center;
  width: 30px;
  height: 30px;
  line-height: 30px;
  color: #ffffffa6;
  cursor: pointer;
  border-radius: 10px 0 0 0;
  z-index: 3;
}
.website:hover {
  color: #fff;
  background-color: #ffffff3b;
}
.sale-date {
  position: absolute;
  right: 10px;
  top: 5px;
  color: #ffffff8f;
  font-size: 14px;
  z-index: 2;
}
.price-item {
  width: 110px;
  display: inline-block;
}
.price-item.yen .price-num {
  color: #03a9f4;
}
.price-item.min .price-num {
  color: #00ff72;
}
.price-item.max .price-num {
  color: #efa500;
}
@media (max-width: 1024px) {
  .sale-date {
    font-size: 12px;
  }
  .price-item {
    width: 23%;
  }
}
.price-num {
  color: #fff25c;
  font-size: 26px;
  font-weight: 600;
}
.price-num .unit {
  font-size: 12px;
  color: #00b8d6;
}
.price-name {
  color: #00b8d6;
  font-size: 14px;
}
.toy-des {
  color: #ffffff73;
  padding-top: 10px;
  font-size: 12px;
}
@media (max-width: 1024px) {
  .toy-title {
    font-size: 14px;
    padding: 20px 0 4px;
  }
  .price-num {
    font-size: 16px;
  }
  .price-name {
    font-size: 12px;
  }
  .toy-des {
    color: #ffffff52;
    padding-top: 2px;
    padding-right: 40px;
  }
}
</style>
