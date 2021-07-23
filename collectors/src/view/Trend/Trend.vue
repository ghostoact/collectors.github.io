<template>
  <div class="item-list">
    <EchartsCoponent :chartData="chartData1" />
    <EchartsCoponent :chartData="chartData2" />
  </div>
</template>

<script>
import EchartsCoponent from "@/components/EchartsComponents";
export default {
  name: "Trend",
  components: {
    EchartsCoponent
  },
  data() {
    return {
      chartData1: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      chartData2: ["苹果", "香蕉", "橘子", "梨子", "樱桃", "哈密瓜"]
    };
  },
  components: {
    EchartsCoponent
  },
  mounted: function() {
    const vm = this;
    vm.$nextTick(() => {});
  }
};
</script>

<style></style>
