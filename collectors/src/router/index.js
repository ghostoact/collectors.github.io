import Vue from 'vue'
import VueRouter from 'vue-router'

//导入自定义组件
import Index from '../view/Index/Index'
import HyperKey from '../view/Trigger/HyperKey'
import UltraMedal from '../view/Z/UltraMedal'
import Sofubi from '../view/Sofubi/Sofubi'

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
      //路由路径
      path: '/HyperKey',
      //自定义路由名称
      name: 'HyperKey',
      //路由跳转的组件
      component: HyperKey
    },
    {
      //路由路径
      path: '/UltraMedal',
      //自定义路由名称
      name: 'UltraMedal',
      //路由跳转的组件
      component: UltraMedal
    },
    {
      //路由路径
      path: '/Sofubi',
      //自定义路由名称
      name: 'Sofubi',
      //路由跳转的组件
      component: Sofubi
    }
  ]
});
