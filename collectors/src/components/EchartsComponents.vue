<template>
  <div style="width: 100%; height: 200px" ref="echarts"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "EchartsComponents",
  props: {
    optionData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    drawChart() {
      const vm = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.echarts);
      // 绘制图表
      myChart.setOption({
        title: {
          text: this.optionData.title,
          textStyle: {
            color: "#f2f2f2",
            fontSize: 14,
          },
          top: "0",
          right: "20px",
        },
        grid: {
          top: "20px",
          left: "50px",
          right: "30px",
          bottom: "40px",
        },
        tooltip: {
          trigger: "axis",
          formatter: "{b}<br>{c} 元" 
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.optionData.xAxis,
          axisLine: {
            lineStyle: {
              color: "#54d9ea",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLabel: { formatter: "{value} 元" },
          axisLine: {
            lineStyle: {
              color: "#54d9ea",
            },
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: this.optionData.yAxis,
            type: "line",
            lineStyle: {
              color: "#01fefe",
            },
            smooth: true, //true 为平滑曲线，false为直线
            areaStyle: {
              //前四个参数代表位置 左下右上，如下表示从上往下渐变色 紫色到暗蓝色，
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(8,228,210, 1)",
                },
                {
                  offset: 1,
                  color: "rgba(8,228,210,  0)",
                },
              ]),
            },
          },
        ],
      });
    },
  },
  computed: {},
  mounted: function () {
    const vm = this;
    vm.$nextTick(() => {
      vm.drawChart();
    });
  },
  created: () => {},
};
</script>

<style scoped>
</style>