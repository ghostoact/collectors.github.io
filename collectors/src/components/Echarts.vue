<template>
  <v-chart ref="chart" :options="optionsMe" :theme="theme" :autoresize="true" v-on="$listeners" />
</template>

<script>
import * as echarts from 'echarts';
// 常用组件
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
export default {
  name: 'BaseEchart',
  components: {
    'v-chart': ECharts
  },
  props: {
    theme: {
      type: String,
      default: 'macarons'
    },
    options: {
      type: Object,
      default: (_) => {}
    }
  },
  data() {
    return {
      optionsMe: {
        title: {
          text: '实时训练数据',
          left: 'center'
        },
        grid: {
          left: '12%',
          right: '12%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            animation: false,
            label: {
              backgroundColor: '#505765'
            }
          }
        },
        legend: {
          data: ['Loss', 'mAP'],
          left: 'right'
        },
        xAxis: {
          name: '迭代数',
          type: 'category',
          data: [1, 2, 3, 4, 5, 6, 7]
        },
        yAxis: [
          {
            name: '损失值',
            type: 'value',
            position: 'left'
          },
          {
            name: '平均精度均值',
            type: 'value',
            position: 'right'
          }
        ],
        series: [
          {
            name: 'Loss',
            data: [224, 120, 102, 97, 85, 76, 52],
            type: 'line',
            smooth: true,
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            }
          },
          {
            name: 'mAP',
            yAxisIndex: 1,
            data: [85, 67, 76, 33, 67, 114, 127],
            type: 'line',
            smooth: true,
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            }
          }
        ]
      }
    }
  },
  watch: {
    options: {
      handler: function(nv) {
        console.log('changed options', nv)
        this.optionsMe = nv
      },
      deep: true
    }
  },
  created() {
    this.optionsMe = this.options
  }
}
</script>
<style>
#app .echarts {
  width: 100%;
  height: 100%;
}
</style>
