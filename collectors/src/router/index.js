import Vue from 'vue'
import VueRouter from 'vue-router'

//导入自定义组件
import Index from '../view/Index/Index'
import HyperKey from '../view/Trigger/HyperKey'
import UltraMedal from '../view/Z/UltraMedal'
import Sofubi from '../view/Sofubi/Sofubi'
import Trend from '../view/Trend/Trend'

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
      path: '/Trend',
      name: 'Trend',
      component: Trend
    }
  ]
});
