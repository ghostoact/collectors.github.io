<template>
  <div style="width:50%;height:200px;"  ref="echarts"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'EchartsComponents',
  props: {
    chartData: {
      type: Array,
      default: ()=>[]
    }
  },
  data () {
    return {
      count:1
    }
  },
  methods: {
    drawChart () {
      const vm = this
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.echarts)
      // 绘制图表
      myChart.setOption({
    title: {
        text: "用电负荷曲线图",
        textStyle: {
            color: "#f2f2f2",
            fontSize: 12,
        },
        top: "5px",
        right: "20px"
    },
    grid: {
        top: "20px",
        left: "50px",
        right: "30px",
        bottom: "40px"
    },
    xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"],
        axisLine: {
            lineStyle: {
                color: "#54d9ea",
            },
        },
    },
    yAxis: {
        type: "value",
        axisLine: {
            lineStyle: {
                color: "#54d9ea",
            },
        },
        splitLine: {
            show: false,
        },
    },
    series: [{
        data: [42, 150, 65, 100, 150, 110, 54, 130],
        type: "line",
        lineStyle: {
            color: "#01fefe",
        },
        smooth: true, //true 为平滑曲线，false为直线
        areaStyle: {
            //前四个参数代表位置 左下右上，如下表示从上往下渐变色 紫色到暗蓝色，
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "rgba(8,228,210, 1)",
                },
                {
                    offset: 1,
                    color: "rgba(8,228,210,  0)",
                },
            ]),
        },
    }, ],
})
    }
  },
  computed: {},
    mounted: function () {
        const vm = this
        vm.$nextTick(()=> {
            vm.drawChart()
      })
  },
  created: () => {}
}
</script>

<style scoped>
</style>