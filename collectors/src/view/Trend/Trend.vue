<template>
  <div class="item-list">
    <!-- <EchartsCoponent :optionData="sparklence" /> -->
    <div class="model-toy" v-for="toy in modeltoy" :key="toy.title">
      <div class="toy-warp">
        <span
          class="sale-date"
          v-html="toy.saledate ? toy.saledate + ' 发售' : ''"
        ></span>
        <a class="website" :href="toy.url" target="_blank" title="跳转到官网">
          <i class="iconfont icon-wangye"></i>
        </a>
        <p class="toy-title">{{ toy.name }}</p>
        <div class="price-box">
          <div class="price-item yen">
            <p class="price-num">
              <span v-html="toy.yenprice != 0 ? toy.yenprice : '-'"></span>
              <span class="unit" v-if="toy.yenprice != 0">元</span>
            </p>
            <p class="price-name">发售时参考价</p>
          </div>
          <div class="price-item min">
            <p class="price-num">
              <span v-html="arrMinNum(toy.pastprice)"></span>
              <span class="unit">元</span>
            </p>
            <p class="price-name">最低价</p>
          </div>
          <div class="price-item">
            <p class="price-num">
              <span v-html="getAverageNum(toy.pastprice)"></span>
              <span class="unit">元</span>
            </p>
            <p class="price-name">平均价</p>
          </div>
          <div class="price-item max">
            <p class="price-num">
              <span v-html="getMaxNum(toy.pastprice)"></span>
              <span class="unit">元</span>
            </p>
            <p class="price-name">最高价</p>
          </div>
        </div>
        <p class="toy-des">{{ toy.des }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// 需要的信息：最低值、平均值、最高值、中位数
import EchartsCoponent from "@/components/EchartsComponents";
export default {
  name: "Trend",
  components: {
    EchartsCoponent
  },
  data() {
    return {
      modeltoy: [
        {
          name: "特利迦·胜利神光棒 豪华版",
          saledate: "2021.7.10",
          yenprice: 597,
          pastprice: [470, 615, 495, 485],
          des: "含胜利神光棒+复合型和强力型钥匙+腰带",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11947/"
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
            238
          ], //历史出价
          des: "含胜利神光棒+特利迦复合型钥匙",
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11946/"
        },
        {
          name: "特利迦·圆环之臂",
          saledate: "2021.7.24",
          yenprice: 258,
          pastprice: [269, 179, 299, 189, 220, 190, 198, 256, 180],
          des: null,
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11950/"
        },
        {
          name: "特利迦·收纳腰带",
          saledate: "2021.7.10",
          yenprice: 175,
          pastprice: [179, 199, 99, 108],
          des: null,
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11943/"
        },
        {
          name: "特利迦·强力型钥匙",
          saledate: "2021.7.10",
          yenprice: 65,
          pastprice: [58, 89, 68, 56, 60],
          des: null,
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11944/"
        },
        {
          name: "特利迦·空中型钥匙",
          saledate: "2021.7.24",
          yenprice: 65,
          pastprice: [60, 89, 75],
          des: null,
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11949/"
        },
        {
          name: "特利迦·迪迦复合型钥匙",
          saledate: "2021.7.3",
          yenprice: 65,
          pastprice: [89, 68, 80, 64, 60],
          des: null,
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/11945/"
        },
        {
          name: "特利迦·迪迦钥匙套装",
          saledate: null,
          yenprice: 195,
          pastprice: [210, 215, 235, 255, 225, 258, 259, 230],
          des: "含迪迦强力型+迪迦空中型+闪耀迪迦",
          url: "https://p-bandai.jp/item/item-1000159699/"
        },
        {
          name: "特利迦·泽塔原生形态钥匙",
          saledate: "2021.9",
          yenprice: 65,
          pastprice: [60, 75, 89],
          des: null,
          url: "https://toy.bandai.co.jp/series/ultraman/item/detail/12055/"
        },
        {
          name: "特利迦·人造赛罗钥匙童装附赠",
          saledate: "2021.7.9",
          yenprice: 89,
          pastprice: [118, 108, 110, 330],
          des: "含童装内裤或体恤+人造赛罗钥匙",
          url: "https://m-78.jp/news/post-5952"
        },
        {
          name: "特利迦·奥特曼55周年纪念钥匙",
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
            190,
            179,
            160
          ],
          des: null,
          url: "https://m-78.jp/news/post-5907"
        },
        {
          name: "特利迦·贝利亚奥特曼钥匙",
          saledate: "2021.7.20",
          yenprice: 70,
          pastprice: [138, 165, 128, 150, 170, 199],
          des: "包含講談社MOOK特利迦专刊+贝利亚奥特曼钥匙",
          url: "https://bookclub.kodansha.co.jp/buy?item=0000352821"
        },
        {
          name: "特利迦·食玩第一弹套装SG01",
          saledate: "2021.7.19",
          yenprice: 114,
          pastprice: [139, 149, 150, 185, 130, 138, 90, 130, 140],
          des: "一套6款",
          url:
            "https://www.bandai.co.jp/candy/products/2021/4549660628194000.html"
        },
        {
          name: "特利迦·食玩第二弹套装SG02",
          saledate: "2021.10",
          yenprice: 152,
          pastprice: [168, 120, 205],
          des: "一套8款，含隐藏款",
          url:
            "https://www.bandai.co.jp/candy/products/2021/4549660700234000.html"
        },
        {
          name: "特利迦·扭蛋第一弹套装GP01",
          saledate: "2021.7",
          yenprice: 119,
          pastprice: [250, 280, 310, 175, 262],
          des: "一套7款，含隐藏款",
          url:
            "https://www.bandai.co.jp/catalog/item.php?jan_cd=4549660664239000"
        },
        {
          name: "特利迦·扭蛋第二弹套装GP02",
          saledate: "2021.10",
          yenprice: 153,
          pastprice: [240, 225, 235, 220, 248],
          des: "一套9款，含隐藏款",
          url: ""
        }
      ]
    };
  },
  components: {
    EchartsCoponent
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
    }
  },
  created() {}
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
  background-color: #003455c4;
  background-image: linear-gradient(-90deg, #08a1a1 0, #00366d 100%);
  /* -webkit-box-shadow: 0 2px 10px 3px rgba(0, 58, 124, 0.43);
  box-shadow: 0 2px 10px 3px rgba(0, 58, 124, 0.43);
  -webkit-filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
  -webkit-backdrop-filter: saturate(180%) blur(8px);
  backdrop-filter: saturate(180%) blur(8px); */
  min-height: 150px;
  width: 100%;
  height: 100%;
  text-align: center;
}
.toy-title {
  color: #fff;
  padding: 20px 0 15px;
  font-size: 22px;
}
.website {
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  width: 30px;
  height: 30px;
  line-height: 30px;
  color: #ffffffa6;
  cursor: pointer;
  border-radius: 0 0 10px 0;
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
}
.price-item {
  text-align: center;
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
  font-size: 14px;
}
</style>
