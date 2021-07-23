<template>
  <div>
    <echarts :options="companyTypeChart" theme="infographic" />
  </div>
</template>

<script>
import Echarts from "@/components/Echarts";
export default {
  name: "Trend",
  components: {
    Echarts
  },
  data() {
    return {
      companyTypeChart: {
        color: ["#61A1A8"],
        title: {
          text: "建材单位公司类型",
          left: "center"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          // right: '4%',
          bottom: "3%",
          containLabel: true
        },
        label: {
          show: true,
          position: "top"
        },
        xAxis: {
          name: "公司类型",
          type: "category",
          data: [],
          axisLabel: {
            rotate: ["A", "B", "C", "D", "E"]
          },
          axisTick: {
            alignWithLabel: true
          }
        },
        yAxis: {
          name: "公司数量",
          type: "value"
        },
        series: [
          {
            data: [120, 200, 150, 80, 70],
            barWidth: "25%",
            type: "bar"
          }
        ]
      }
    };
  }
};
</script>

<style></style>
