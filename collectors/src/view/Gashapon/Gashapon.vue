<template>
  <div class="item-list">
    <div class="item-detail" v-if="show">
      <div class="close-layer" @click="closeThis">
        <i class="iconfont icon-fanhuicopy"></i>
      </div>
      <div class="gash-view">
        <img :src="'./static/img/item' + nowGashapon.pic" />
      </div>
      <div class="gash-info">
        <p>{{ nowGashapon.name }}</p>
      </div>
    </div>
    <div class="group-item" v-for="(group, index) in gashapons" :key="index">
      <div
        class="gashapon-item"
        v-for="gas in group"
        :key="gas.id"
        :class="'type-' + gas.type"
      >
        <div class="gas-panel">
          <div class="gas-box">
            <div
              class="gas-art"
              :style="
                'background-image: url(./static/img/item/gashapon/' +
                eggData[gas.series].art +
                ')'
              "
            ></div>
            <div class="ball-box">
              <div
                class="ball-item"
                :class="'b-' + index"
                v-for="(ball, index) in gas.stock"
                :key="index"
              >
                <div
                  class="ball-item-color"
                  :style="'background-color:' + getColorByNum(gas.series, ball)"
                ></div>
              </div>
            </div>
            <div class="gas-over" :class="{ show: gas.stock.length == 0 }">
              售馨
            </div>
          </div>
          <div class="gas-coin" :class="{ ok: gas.needCoin == gas.coin }">
            {{ gas.needCoin }}00
          </div>
          <div class="step-1" @click="actionByClick(gas, 1)"></div>
          <div
            class="step-2"
            @click="actionByClick(gas, 2)"
            :class="'rotate-' + gas.rotate"
          ></div>
          <div class="step-3">
            <div
              class="ball"
              @click="actionByClick(gas, 3)"
              :class="{ show: gas.export }"
            >
              <div
                class="ball-color"
                :style="'background-color:' + gas.color"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 1.扭蛋查看 √
// 2.扭蛋机提示信息展示
// 3.扭蛋收纳袋
// 4.扭蛋壳垃圾桶
// 5.还原万代扭蛋机外观细节
// 6.兑换代币和回收扭蛋机制
export default {
  name: "Gashapon",
  components: {},
  data() {
    return {
      myBag: {
        money: 0, //钱
        coin: 50, //拥有的
        stock: [], //我的包
      },
      show: false, //显示详情
      nowGashapon: {}, //当前详情页面的扭蛋信息
      gashapons: [
        [
          {
            id: "GAS-1", //扭蛋机ID
            type: "top", //扭蛋机类型top mid bot
            series: "TLJGP01", //扭蛋系列
            step: 1, //当前步骤 1投币 2扭动机器 3出货待取
            needCoin: 3, //扭一次需要的总币数
            coin: 0, //当前投币
            coinTotal: 0, //累计投币
            rotate: 0, //步骤2进程 0未扭动 1扭动一半 2扭动完成
            export: false, //出口数量 false没东西 true有
            color: null, //输出扭蛋颜色
            stock: [0, 1, 2, 3, 4, 5, 6, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6], //扭蛋内容
          },
          {
            id: "GAS-2",
            type: "mid",
            series: "TLJGP01",
            step: 1,
            needCoin: 3,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 1, 2, 4, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 1, 2, 2, 4, 5, 6],
          },
          {
            id: "GAS-3",
            type: "bot",
            series: "TLJGP01",
            step: 1,
            needCoin: 3,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 6, 0],
          },
        ],
        [
          {
            id: "GAS-4",
            type: "top",
            series: "TLJGP01",
            step: 1,
            needCoin: 3,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 1, 2, 3, 4, 5, 6, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6], //扭蛋内容
          },
          {
            id: "GAS-5",
            type: "mid",
            series: "TLJGP01",
            step: 1,
            needCoin: 3,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 1, 2, 4, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 1, 2, 2, 4, 5, 6],
          },
          {
            id: "GAS-6",
            type: "bot",
            series: "ZGP01",
            step: 1,
            needCoin: 3,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 4, 5, 6, 7, 7],
          },
        ],
        [
          {
            id: "GAS-7",
            type: "top",
            series: "ZGP02",
            step: 1,
            needCoin: 3,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 6, 7, 8],
          },
          {
            id: "GAS-8",
            type: "mid",
            series: "ZGP03",
            step: 1,
            needCoin: 3,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 3, 4, 5, 6, 7],
          },
          {
            id: "GAS-9",
            type: "bot",
            series: "ZGP04",
            step: 1,
            needCoin: 3,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 6, 7, 8, 8, 4, 6, 8],
          },
        ],
        [
          {
            id: "GAS-10",
            type: "top",
            series: "ZJYG13",
            step: 1,
            needCoin: 5,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 3],
          },
          {
            id: "GAS-11",
            type: "mid",
            series: "TLJCQWQ",
            step: 1,
            needCoin: 2,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4],
          },
          {
            id: "GAS-12",
            type: "bot",
            series: "ATM_08",
            step: 1,
            needCoin: 3,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7, 4, 5, 6, 7],
          },
        ],
        [
          {
            id: "GAS-13",
            type: "top",
            series: "GSBLH",
            step: 1,
            needCoin: 5,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 4, 5],
          },
          {
            id: "GAS-14",
            type: "mid",
            series: "JLBYSQ",
            step: 1,
            needCoin: 3,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 7, 8, 9, 10],
          },
          {
            id: "GAS-15",
            type: "bot",
            series: "CBQ",
            step: 1,
            needCoin: 3,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 3, 4],
          },
        ],
        [
          {
            id: "GAS-16",
            type: "top",
            series: "HG03",
            step: 1,
            needCoin: 4,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3],
          },
          {
            id: "GAS-17",
            type: "mid",
            series: "ATM_07",
            step: 1,
            needCoin: 3,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3],
          },
          {
            id: "GAS-18",
            type: "bot",
            series: "Z_MINI",
            step: 1,
            needCoin: 2,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1],
          },
        ],
        [
          {
            id: "GAS-19",
            type: "top",
            series: "ATM_06",
            step: 1,
            needCoin: 3,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 8],
          },
          {
            id: "GAS-20",
            type: "mid",
            series: "HG02",
            step: 1,
            needCoin: 4,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3],
          },
          {
            id: "GAS-21",
            type: "bot",
            series: "ATM_05",
            step: 1,
            needCoin: 3,
            coin: 0,
            coinTotal: 0,
            rotate: 0,
            export: false,
            color: null,
            stock: [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7, 4, 5, 6, 7],
          },
        ],
      ],
      eggData: {
        TLJGP01: {
          art: "TLJ_GP01.png",
          data: [
            {
              name: "宇宙恐龙 杰顿二世",
              color: "#754396c4",
              price: 0,
              pic: "/trigger/hyperkey/M-03-2.jpg",
            },
            {
              name: "宇宙恐龙 杰顿",
              color: "#b1701dd1",
              price: 0,
              pic: "/trigger/hyperkey/M-03.jpg",
            },
            {
              name: "蛤蜊怪兽 加玛库基拉",
              color: "#00cc2aa1",
              price: 0,
              pic: "/trigger/hyperkey/M-04.jpg",
            },
            {
              name: "特空机1号 赛文加",
              color: "#bbc4cfcf",
              price: 0,
              pic: "/trigger/hyperkey/M-11.jpg",
            },
            {
              name: "特空机3号 金古桥军械库定制",
              color: "#b5ab1ac4",
              price: 0,
              pic: "/trigger/hyperkey/M-13.jpg",
            },
            {
              name: "超古代怪兽 哥尔赞",
              color: "#3982abd1",
              price: 0,
              pic: "/trigger/hyperkey/M-16.jpg",
            },
            {
              name: "邪恶迪迦",
              color: "#c34820ab",
              price: 0,
              pic: "/trigger/hyperkey/M-19.jpg",
            },
          ],
        },
        ZGP01: {
          art: "Z_GP01.png",
          data: [
            {
              name: "赛文奥特曼 闪耀型",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-046.jpg",
            },
            {
              name: "雷欧奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-003.jpg",
            },
            {
              name: "赛文奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-002.jpg",
            },
            {
              name: "赛罗奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-001.jpg",
            },
            {
              name: "葛雷奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-048.jpg",
            },
            {
              name: "赛罗奥特曼 强壮日冕型",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-049.jpg",
            },
            {
              name: "阿古茹奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-050.jpg",
            },
            {
              name: "乔尼亚斯奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-051.jpg",
            },
          ],
        },
        ZGP02: {
          art: "Z_GP02.png",
          data: [
            {
              name: "奥特曼 闪耀型",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-047.jpg",
            },
            {
              name: "奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-004.jpg",
            },
            {
              name: "艾斯奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-005.jpg",
            },
            {
              name: "泰罗奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-006.jpg",
            },
            {
              name: "内隆嘎",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-052.jpg",
            },
            {
              name: "盖内伽古",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-053.jpg",
            },
            {
              name: "吉拉斯",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-054.jpg",
            },
            {
              name: "奈克斯特奥特曼 蓝色青年形态",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-055.jpg",
            },
            {
              name: "戴拿奥特曼 奇迹型",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-056.jpg",
            },
          ],
        },
        ZGP03: {
          art: "Z_GP03.png",
          data: [
            {
              name: "闪耀迪迦",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-057.jpg",
            },
            {
              name: "迪迦奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-007.jpg",
            },
            {
              name: "戴拿奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-008.jpg",
            },
            {
              name: "盖亚奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-009.jpg",
            },
            {
              name: "帕瓦特奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-058.jpg",
            },
            {
              name: "奥特之王",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-059.jpg",
            },
            {
              name: "伽古拉斯·伽古拉",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-060.jpg",
            },
            {
              name: "金古桥",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-061.jpg",
            },
          ],
        },
        ZGP04: {
          art: "Z_GP04.png",
          data: [
            {
              name: "格丽乔奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-064.jpg",
            },
            {
              name: "哉阿斯奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-062.jpg",
            },
            {
              name: "纳伊斯奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-063.jpg",
            },
            {
              name: "特空机1号 赛文加",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-065.jpg",
            },
            {
              name: "特空机2号 乌英达姆",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-066.jpg",
            },
            {
              name: "特空机3号 金古桥军械库定制",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-067.jpg",
            },
            {
              name: "特空机4号 奥特人造机甲赛罗",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-068.jpg",
            },
            {
              name: "歼灭机甲兽德斯特鲁多斯",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-069.jpg",
            },
            {
              name: "虚空怪兽 格利扎",
              color: "#c32020ab",
              price: 0,
              pic: "/z/ultramedal/M-070.jpg",
            },
          ],
        },
        ZJYG13: {
          art: "ZJYG_13.png",
          data: [
            {
              name: "雷欧奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ZJYG/13/6541543036.jpg",
            },
            {
              name: "希卡利奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ZJYG/13/0402718172.jpg",
            },
            {
              name: "房子A",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ZJYG/13/0212884785.jpg",
            },
            {
              name: "房子B",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ZJYG/13/0333824952.jpg",
            },
            {
              name: "房子C",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ZJYG/13/9957288641.jpg",
            },
          ],
        },
        TLJCQWQ: {
          art: "TLJ_CQWQ.png",
          data: [
            {
              name: "特利迦奥特曼 复合型",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/TLJ/CQWQ/5344043214.jpg",
            },
            {
              name: "特利迦奥特曼 强力型",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/TLJ/CQWQ/9685115920.jpg",
            },
            {
              name: "特利迦奥特曼 空中型",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/TLJ/CQWQ/1746007252.jpg",
            },
            {
              name: "胜利海帕枪",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/TLJ/CQWQ/1517811218.jpg",
            },
            {
              name: "胜利神光棒",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/TLJ/CQWQ/8101508826.jpg",
            },
          ],
        },
        ATM_08: {
          art: "ATM_08.png",
          data: [
            {
              name: "赛罗奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/08/4307423785.jpg",
            },
            {
              name: "罗索奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/08/6296827182.jpg",
            },
            {
              name: "布鲁奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/08/6384902861.jpg",
            },
            {
              name: "布鲁奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/08/6384902861.jpg",
            },
            {
              name: "格力乔奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/08/9235715024.jpg",
            },
            {
              name: "黑暗赛罗",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/08/1608274009.jpg",
            },
            {
              name: "黑暗欧布奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/08/4946116683.jpg",
            },
            {
              name: "黑暗奥特杀手",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/08/9419197220.jpg",
            },
            {
              name: "格尔吉欧波恩",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/08/8780115710.jpg",
            },
          ],
        },
        GSBLH: {
          art: "GSBLH.png",
          data: [
            {
              name: "哥莫拉",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/GSBLH/8556160725.jpg",
            },
            {
              name: "佩刀暴君马格马星人A",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/GSBLH/9072788524.jpg",
            },
            {
              name: "佩刀暴君马格马星人B",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/GSBLH/4057915124.jpg",
            },
            {
              name: "夏德奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/GSBLH/1656399403.jpg",
            },
            {
              name: "飞机A",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/GSBLH/3447852389.jpg",
            },
            {
              name: "飞机B",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/GSBLH/2958244704.jpg",
            },
          ],
        },
        JLBYSQ: {
          art: "JLBYSQ.png",
          data: [
            {
              name: "泽塔奥特曼 夜光版",
              color: "#bbc4cfcf",
              price: 0,
              pic: "/gashapon/YSQ/JLB/1711917337.jpg",
            },
            {
              name: "赛文加 夜光版",
              color: "#bbc4cfcf",
              price: 0,
              pic: "/gashapon/YSQ/JLB/6317631447.jpg",
            },
            {
              name: "赛罗奥特曼 夜光版",
              color: "#bbc4cfcf",
              price: 0,
              pic: "/gashapon/YSQ/JLB/4431639437.jpg",
            },
            {
              name: "哉阿斯奥特曼 夜光版",
              color: "#bbc4cfcf",
              price: 0,
              pic: "/gashapon/YSQ/JLB/5950221525.jpg",
            },
            {
              name: "迪迦奥特曼 夜光版",
              color: "#bbc4cfcf",
              price: 0,
              pic: "/gashapon/YSQ/JLB/9163882353.jpg",
            },
            {
              name: "戴拿奥特曼 夜光版",
              color: "#bbc4cfcf",
              price: 0,
              pic: "/gashapon/YSQ/JLB/7973570905.jpg",
            },
            {
              name: "电脑魔神 戴斯法萨 夜光版",
              color: "#bbc4cfcf",
              price: 0,
              pic: "/gashapon/YSQ/JLB/9170920115.jpg",
            },
            {
              name: "泽塔奥特曼",
              color: "#bbc4cfcf",
              price: 0,
              pic: "/gashapon/YSQ/JLB/6899468453.jpg",
            },
            {
              name: "赛文加",
              color: "#bbc4cfcf",
              price: 0,
              pic: "/gashapon/YSQ/JLB/9335889817.jpg",
            },
            {
              name: "赛罗奥特曼",
              color: "#bbc4cfcf",
              price: 0,
              pic: "/gashapon/YSQ/JLB/7663993632.jpg",
            },
            {
              name: "哉阿斯奥特曼",
              color: "#bbc4cfcf",
              price: 0,
              pic: "/gashapon/YSQ/JLB/9344661832.jpg",
            },
            {
              name: "迪迦奥特曼",
              color: "#bbc4cfcf",
              price: 0,
              pic: "/gashapon/YSQ/JLB/5832403645.jpg",
            },
            {
              name: "戴拿奥特曼",
              color: "#bbc4cfcf",
              price: 0,
              pic: "/gashapon/YSQ/JLB/4588498267.jpg",
            },
            {
              name: "电脑魔神 戴斯法萨",
              color: "#bbc4cfcf",
              price: 0,
              pic: "/gashapon/YSQ/JLB/3301742677.jpg",
            },
          ],
        },
        CBQ: {
          art: "CBQ.png",
          data: [
            {
              name: "胜利飞燕一号",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/CBQ/7013090707.jpg",
            },
            {
              name: "威托号",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/CBQ/8517087786.jpg",
            },
            {
              name: "TAC爱罗号",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/CBQ/0224746970.jpg",
            },
            {
              name: "哈马号",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/CBQ/1659735335.jpg",
            },
            {
              name: "麦基1号",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/CBQ/3558244848.jpg",
            },
          ],
        },
        HG03: {
          art: "HG03.png",
          data: [
            {
              name: "泽塔奥特曼 阿尔法装甲",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/HG/03/8015933702.jpg",
            },
            {
              name: "赛罗奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/HG/03/4180205956.jpg",
            },
            {
              name: "赛文奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/HG/03/3137503426.jpg",
            },
            {
              name: "乌英达姆",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/HG/03/2715176086.jpg",
            },
          ],
        },
        ATM_07: {
          art: "ATM_07.png",
          data: [
            {
              name: "艾克斯奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/07/1424963311.jpg",
            },
            {
              name: "电子哥莫拉",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/07/1263784070.jpg",
            },
            {
              name: "奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/07/8457323260.jpg",
            },
            {
              name: "辛勃",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/07/7437468294.jpg",
            },
            {
              name: "高斯奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/07/5865360143.jpg",
            },
            {
              name: "怪兽",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/07/3182225494.jpg",
            },
            {
              name: "阿古茹奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/07/1423433161.jpg",
            },
            {
              name: "佩盖萨星人",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/07/4523791919.jpg",
            },
          ],
        },
        Z_MINI: {
          art: "Z_MINI.png",
          data: [
            {
              name: "泽塔升华器套装",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/Z/MINI/3601447831.jpg",
            },
            {
              name: "泽塔升华器勋章盒套装",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/Z/MINI/1649468890.jpg",
            },
            {
              name: "泽塔光弩",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/Z/MINI/7859458116.jpg",
            },
          ],
        },
        ATM_06: {
          art: "ATM_06.png",
          data: [
            {
              name: "泰迦奥特曼 三重斯特利姆形态",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/06/3712640049.jpg",
            },
            {
              name: "雷欧奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/06/6867854752.jpg",
            },
            {
              name: "马格马星人",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/06/1296242449.jpg",
            },
            {
              name: "布莱克基拉斯",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/06/5781300742.jpg",
            },
            {
              name: "雷德基拉斯",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/06/3393837084.jpg",
            },
            {
              name: "捷德奥特曼 尊皇形态",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/06/4049418819.jpg",
            },
            {
              name: "极恶贝利亚",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/06/4787279375.jpg",
            },
            {
              name: "奥特之母",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/06/4232568717.jpg",
            },
            {
              name: "泰罗奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/06/6873348607.jpg",
            },
          ],
        },
        HG02: {
          art: "HG02.png",
          data: [
            {
              name: "捷德奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/HG/02/2261149245.jpg",
            },
            {
              name: "泰迦奥特曼 三重斯特利姆形态",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/HG/02/4089356676.jpg",
            },
            {
              name: "贝利亚奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/HG/02/4488594487.jpg",
            },
            {
              name: "哥莫拉",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/HG/02/3983938018.jpg",
            },
          ],
        },
        ATM_05: {
          art: "ATM_05.png",
          data: [
            {
              name: "泰迦奥特曼 光子地球形态",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/05/7328529386.jpg",
            },
            {
              name: "艾斯奥特曼",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/05/4463500754.jpg",
            },
            {
              name: "奥特之父",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/05/8456743219.jpg",
            },
            {
              name: "梦比优斯",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/05/4273320321.jpg",
            },
            {
              name: "古兰特王",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/05/6511291075.jpg",
            },
            {
              name: "艾斯杀手",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/05/8424873085.jpg",
            },
            {
              name: "多昆",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/05/2876842951.jpg",
            },
            {
              name: "达达",
              color: "#c32020ab",
              price: 0,
              pic: "/gashapon/ATM/05/3818514605.jpg",
            },
          ],
        },
      },
      eggPosition: [
        {
          top: 55,
          left: 25,
        },
        {
          top: 52,
          left: 64,
        },
        {
          top: 47,
          left: 0,
        },
        {
          top: 52,
          left: 85,
        },
        {
          top: 35,
          left: 19,
        },
        {
          top: 44,
          left: 99,
        },
        {
          top: 43,
          left: 45,
        },
        {
          top: 35,
          left: 70,
        },
        {
          top: 27,
          left: 0,
        },
        {
          top: 26,
          left: 97,
        },
        {
          top: 14,
          left: 19,
        },
        {
          top: 30,
          left: 44,
        },
        {
          top: 20,
          left: 75,
        },
        {
          top: 0,
          left: 3,
        },
        {
          top: 9,
          left: 56,
        },
        {
          top: 9,
          left: 99,
        },
        {
          top: 17,
          left: 43,
        },
        {
          top: 22,
          left: 14,
        },
        {
          top: 30,
          left: 92,
        },
        {
          top: 9,
          left: 24,
        },
        {
          top: 12,
          left: 74,
        },
      ],
    };
  },
  methods: {
    closeThis() {
      this.show = false;
    },
    actionByClick(gas, step) {
      if (gas.step == 1 && step == 1) {
        if (gas.stock.length == 0) {
          alert("这台扭蛋机已经空了，请使用其它机器游玩~");
          return;
        }
        if (this.myBag.coin < gas.needCoin) {
          alert("你的代币已经不够啦~");
          return;
        }
        //投币阶段，点击一下投一个币，满需总币数即可进入下一阶段
        gas.coin = gas.coin + 1;
        this.myBag.coin = this.myBag.coin - 1;
        this.soundForAction("insert-coin");
        console.log(gas.coin);
        if (gas.coin == gas.needCoin) {
          gas.step = 2;
          console.log("已投" + gas.coin + "币，请扭动");
        }
      } else if (gas.step == 2 && step == 2) {
        //扭蛋阶段，点击一下扭一半，总共180°，扭半圈即可进入下一阶段
        gas.rotate = gas.rotate + 1;
        this.soundForAction("turn");
        if (gas.rotate == 2) {
          let num = Math.floor(Math.random() * gas.stock.length); //随机数
          let it = gas.stock[num]; //取值
          this.myBag.stock.push({
            series: gas.series,
            num: num,
          });
          gas.stock.splice(num, 1); //删除取到的这个
          console.log("扭到 " + this.eggData[gas.series].data[it].name);
          this.nowGashapon = this.eggData[gas.series].data[it];
          gas.color = this.eggData[gas.series].data[it].color;
          console.log("扭蛋已出，请取货~");
          console.log(this.myBag.stock);
          setTimeout(() => {
            gas.step = 3;
            gas.rotate = 0;
            this.soundForAction("turn");
            gas.export = true;
            this.soundForAction("ball-out");
          }, 800);
        }
      } else if (gas.step == 3 && step == 3) {
        //取货阶段，初始化所有参数
        gas.step = 1;
        gas.coinTotal = gas.coinTotal + gas.coin;
        gas.coin = 0;
        gas.export = false;
        this.show = true;
      }
    },
    getColorByNum(series, num) {
      return this.eggData[series].data[num]["color"];
    },
    soundForAction(type) {
      let audio = new Audio();
      switch (type) {
        case "insert-coin":
          audio.src = require("../../assets/sounds/insert-coin.mp3");
          break;
        case "turn":
          audio.src = require("../../assets/sounds/turn.mp3");
          break;
        case "ball-out":
          audio.src = require("../../assets/sounds/ball-out.mp3");
          break;
        default:
          break;
      }
      audio.play();
    },
  },
};
</script>

<style scoped>
@-webkit-keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0) scaleY(3);
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0) scaleY(0.9);
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.95);
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0) scaleY(0.985);
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0) scaleY(3);
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0) scaleY(0.9);
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.95);
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0) scaleY(0.985);
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@-webkit-keyframes light-cool {
  0% {
    transform: translateX(0) skewX(-25deg);
  }
  75% {
    transform: translateX(150%) skewX(-25deg);
  }
  to {
    transform: translateX(150%) skewX(-25deg);
  }
}

@keyframes light-cool {
  0% {
    transform: translateX(0) skewX(-25deg);
  }
  75% {
    transform: translateX(150%) skewX(-25deg);
  }
  to {
    transform: translateX(150%) skewX(-25deg);
  }
}

.group-item {
  float: left;
  width: 160px;
}
@media (max-width: 1024px) {
  .group-item {
    float: unset;
    margin: 0 auto;
  }
}
.gashapon-item {
  width: 160px;
  height: 415px;
  position: relative;
}
.gashapon-item.type-top {
  height: 361px;
  background-image: url("../../assets/img/gashapon/gas_top.png");
}
.gashapon-item.type-mid {
  height: 310px;
  background-image: url("../../assets/img/gashapon/gas_mid.png");
}
.gashapon-item.type-bot {
  height: 364px;
  background-image: url("../../assets/img/gashapon/gas_bot.png");
}
.gas-panel {
  position: absolute;
  top: 50px;
  left: 18px;
  /* background-color: #ffeb3b8c; */
  width: 125px;
  height: 300px;
}
.gashapon-item.type-mid .gas-panel,
.gashapon-item.type-bot .gas-panel {
  top: 0;
}
.gas-box {
  position: absolute;
  top: 2px;
  left: -10px;
  width: 145px;
  height: 135px;
}
.gas-art {
  position: absolute;
  top: 2px;
  left: 10px;
  width: 125px;
  height: 135px;
  background-size: cover;
  z-index: 5;
}
.ball-box {
  position: absolute;
  top: 2px;
  left: 5px;
  width: 135px;
  height: 80px;
  background-color: rgba(255, 0, 0, 0.11);
  z-index: 2;
  overflow: hidden;
}
.ball-item {
  width: 35px;
  height: 35px;
  border-radius: 50px;
  background-image: url("../../assets/img/gashapon/ball.png");
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: all 0.3s;
}
.ball-item-color {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.b-0 {
  top: 55px;
  left: 25px;
}
.b-1 {
  top: 52px;
  left: 64px;
}
.b-2 {
  top: 47px;
  left: 0;
}
.b-3 {
  top: 52px;
  left: 85px;
}
.b-4 {
  top: 35px;
  left: 19px;
}
.b-5 {
  top: 44px;
  left: 99px;
}
.b-6 {
  top: 43px;
  left: 45px;
}
.b-7 {
  top: 35px;
  left: 70px;
}
.b-8 {
  top: 27px;
  left: 0;
}
.b-9 {
  top: 26px;
  left: 97px;
}
.b-10 {
  top: 14px;
  left: 19px;
}
.b-11 {
  top: 30px;
  left: 44px;
}
.b-12 {
  top: 20px;
  left: 75px;
}
.b-13 {
  top: 0;
  left: 3px;
}
.b-14 {
  top: 9px;
  left: 56px;
}
.b-15 {
  top: 9px;
  left: 99px;
}
.b-16 {
  top: 17px;
  left: 43px;
}
.b-17 {
  top: 22px;
  left: 14px;
}
.b-18 {
  top: 30px;
  left: 92px;
}
.b-19 {
  top: 9px;
  left: 24px;
}
.b-20 {
  top: 12px;
  left: 74px;
}
.step-1,
.step-2,
.step-3 {
  border-radius: 50px;
  position: absolute;
  cursor: pointer;
}
.step-1 {
  top: 150px;
  right: 18px;
  width: 20px;
  height: 20px;
}
.step-1:active {
  background-color: #6363638f;
}
.step-2 {
  top: 174px;
  right: 40px;
  width: 45px;
  height: 45px;
  transform: rotate(0deg);
  transition: all 1s;
  background-image: url("../../assets/img/gashapon/gas_rotate.png");
}
.step-2.rotate-1 {
  transform: rotate(90deg);
}
.step-2.rotate-2 {
  transform: rotate(180deg);
}
.step-3 {
  top: 233px;
  right: 67px;
  width: 55px;
  height: 55px;
  overflow: hidden;
}
.ball {
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-image: url("../../assets/img/gashapon/ball.png");
  position: absolute;
  top: -50px;
  left: 8px;
  overflow: hidden;
}
.ball-color {
  position: absolute;
  width: 100%;
  height: 100%;
}
.ball.show {
  top: 15px;
  animation: bounceInDown 1s;
  transition: all 0.5s;
}
.ball.show:hover {
  transform: scale(1.1);
}
.ball.show::before {
  content: "";
  position: absolute;
  width: 200%;
  height: 100%;
  top: 0;
  left: -150%;
  overflow: hidden;
  background: linear-gradient(
    270deg,
    hsla(0, 0%, 100%, 0) 30%,
    hsla(0, 0%, 100%, 0.5) 50%,
    hsla(0, 0%, 100%, 0) 70%
  );
  transform: skewX(-25deg);
  -webkit-animation: light-cool 5s ease-in-out infinite;
  animation: light-cool 5s ease-in-out infinite;
  z-index: 2;
}
.item-detail {
  width: 500px;
  background-color: #ffffff;
  -webkit-box-shadow: 0 10px 20px -6px #ababab;
  box-shadow: 0 10px 20px -6px #ababab;
  overflow: hidden;
  z-index: 9;
  position: fixed;
  left: 50%;
  top: 50%;
  border-radius: 8px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.gash-view {
  width: 100%;
}
.gash-view img {
  max-width: 100%;
  max-height: 100%;
}
.gash-info {
  height: 50px;
  background-color: #f5f8f9;
  padding: 10px 0 20px;
}
.gash-info p {
  text-align: center;
  font-weight: 600;
}
.gas-over {
  background-color: #ff5454;
  font-size: 12px;
  color: #ffeb3b;
  text-align: center;
  width: 22px;
  height: 35px;
  position: absolute;
  bottom: 0;
  right: 26px;
  transition: all 0.3s;
  z-index: 1;
}
.gas-over.show {
  bottom: -37px;
}
.gas-coin {
  position: absolute;
  top: 144px;
  left: 9px;
  text-align: center;
  width: 37px;
  height: 22px;
  line-height: 22px;
  border-radius: 26px;
  font-size: 14px;
  color: #fff;
  background-color: #03a9f4;
  transition: all 0.3s;
}
.gas-coin.ok {
  background-color: #4caf50;
}
</style>
