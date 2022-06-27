import Vue from 'vue'
import VueRouter from 'vue-router'

//导入自定义组件
import Index from '../view/Index/Index'
import UltraDimensionCard from '../view/Decker/UltraDimensionCard'
import HyperKey from '../view/Trigger/HyperKey'
import UltraMedal from '../view/Z/UltraMedal'
import Sofubi from '../view/Sofubi/Sofubi'
import SHF from '../view/SHF/SHF'
import Trend from '../view/Trend/Trend'
import Gashapon from '../view/Gashapon/Gashapon'

//安装路由，显示引用
Vue.use(VueRouter);


//配置导出路由
export default new VueRouter({
  routes: [

    {
      //路由路径
      path: '/',
      //自定义路由名称
      name: 'Index',
      //路由跳转的组件
      component: Index
    },
    {
      path: '/UltraDimensionCard',
      name: 'UltraDimensionCard',
      component: UltraDimensionCard
    },
    {
      path: '/HyperKey',
      name: 'HyperKey',
      component: HyperKey
    },
    {
      path: '/UltraMedal',
      name: 'UltraMedal',
      component: UltraMedal
    },
    {
      path: '/Sofubi',
      name: 'Sofubi',
      component: Sofubi
    },
    {
      path: '/SHF',
      name: 'SHF',
      component: SHF
    },
    {
      path: '/Trend',
      name: 'Trend',
      component: Trend
    },
    {
      path: '/Gashapon',
      name: 'Gashapon',
      component: Gashapon
    }
  ]
});
