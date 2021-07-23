<template>
  <div class="item-list">
    <EchartsCoponent :optionData="sparklence" />
  </div>
</template>

<script>
import EchartsCoponent from "@/components/EchartsComponents";
export default {
  name: "Trend",
  components: {
    EchartsCoponent,
  },
  data() {
    return {
      sparklence: {
        title:"特利迦胜利神光棒标准版",
        xAxis: ["2021.4.15", "2021.7.3", "2021.7.4", "2021.7.5"],
        yAxis: [354, 279, 336, 386],
      }
    };
  },
  components: {
    EchartsCoponent,
  },
  mounted: function () {
    const vm = this;
    vm.$nextTick(() => {});
  },
};
</script>

<style></style>
