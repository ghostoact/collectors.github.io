<template>
  <div class="item-list">
    <!-- <EchartsCoponent :optionData="sparklence" /> -->
    <div class="model-toy">
      <p class="toy-title">特利迦胜利神光棒标准版</p>
      <div class="price-box">
        <div class="price-item">
          <p class="price-num">279</p>
          <p class="price-name">最低价</p>
        </div>
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
      sparklence: {
        title: "特利迦胜利神光棒标准版",
        xAxis: ["2021.4.15", "2021.7.3", "2021.7.4", "2021.7.5"],
        yAxis: [354, 279, 336, 386]
      },
      modeltoy: [
        {
          name: "特利迦胜利神光棒标准版", //名称
          yenprice: 500, //官方参考价
          pastprice: [354, 279, 336, 386] //历史价格
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
      return ~~((sum / arr.length) * 100) / 100;
    }
  },
  created() {
    console.log(this.getAverageNum(this.modeltoy[0].pastprice));
  }
};
</script>

<style scoped>
.model-toy {
  width: 620px;
  height: 150px;
  background-color: #0f1f58;
  float: left;
}
.toy-title {
  color: #fff;
}
.price-item {
  text-align: center;
  width: 110px;
}
.price-num {
  color: aqua;
}
.price-name {
  color: red;
}
</style>
