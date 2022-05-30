<template>
  <div
    class="trend-echarts"
    style="width: 100%; height: 100%"
    ref="echarts"
  ></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "TrendEcharts",
  props: {
    xAxis: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      count: 1
    };
  },
  methods: {
    drawChart(it) {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(it);
      // 绘制图表
      myChart.setOption({
        title: {
          show: false
        },
        tooltip: {
          show: true,
          trigger: "axis",
          formatter: "{b}<br>{c} 元"
        },
        grid: {
          top: "20px",
          left: "0",
          right: "0",
          bottom: "0"
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          show: false
        },
        yAxis: {
          type: "value",
          show: false
        },
        series: [
          {
            data: this.xAxis,
            type: "line",
            symbol: "none",
            lineStyle: {
              color: "#01fefe"
            },
            smooth: true, //true 为平滑曲线，false为直线
            areaStyle: {
              //前四个参数代表位置 左下右上，如下表示从上往下渐变色 紫色到暗蓝色，
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(8,228,210, 1)"
                },
                {
                  offset: 1,
                  color: "rgba(8,228,210,  0)"
                }
              ])
            }
          }
        ]
      });
    }
  },
  computed: {},
  mounted: function() {
    const vm = this;
    vm.$nextTick(() => {
      vm.drawChart(this.$refs.echarts);
    });
  },
  watch: {
    xAxis: {
      handler(newVal, oldVal) {
        this.drawChart(this.$refs.echarts);
      }
    }
  },
  created: () => {}
};
</script>

<style scoped></style>
