<template>
  <div class="item-list">
    <!-- <EchartsCoponent :optionData="sparklence" /> -->
    <div class="model-toy" v-for="toy in modeltoy" :key="toy.title">
      <div class="toy-warp">
        <p class="toy-title">{{ toy.name }}</p>
        <div class="price-box">
          <div class="price-item yen">
            <p class="price-num">
              <span v-html="toy.yenprice"></span>
              <span class="unit">元</span>
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
    EchartsCoponent,
  },
  data() {
    return {
      sparklence: {
        title: "特利迦胜利神光棒标准版",
        xAxis: ["2021.4.15", "2021.7.3", "2021.7.4", "2021.7.5"],
        yAxis: [354, 279, 336, 386, 265],
      },
      modeltoy: [
        {
          name: "特利迦·胜利神光棒 豪华版",
          yenprice: 597,
          pastprice: [597, 470],
          des: "含胜利神光棒+复合型和强力型钥匙+腰带+特典",
        },
        {
          name: "特利迦·胜利神光棒 标准版", //名称
          yenprice: 357, //官方参考价
          pastprice: [354, 357, 279, 336, 386, 424], //历史价格
          des: "含胜利神光棒+特利迦复合型钥匙+特典",
        },
        {
          name: "特利迦·圆环之臂",
          yenprice: 258,
          pastprice: [258, 269, 179, 299, 189],
          des: "",
        },
        {
          name: "特利迦·收纳腰带",
          yenprice: 175,
          pastprice: [175, 179, 199],
          des: "",
        },
      ],
    };
  },
  components: {
    EchartsCoponent,
  },
  mounted: function () {
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
  },
  created() {},
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
  background-color: #00558cdb;
  background-image: linear-gradient(-90deg, #168686 0, rgb(37 0 109) 100%);
  -webkit-box-shadow: 0 2px 10px 3px rgba(0, 58, 124, 0.43);
  box-shadow: 0 2px 10px 3px rgba(0, 58, 124, 0.43);
  -webkit-filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
  -webkit-backdrop-filter: saturate(180%) blur(8px);
  backdrop-filter: saturate(180%) blur(8px);
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
  color: #ff9800;
}
.price-num {
  color: cyan;
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
