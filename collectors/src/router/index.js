import Vue from 'vue'
import VueRouter from 'vue-router'

//导入自定义组件
import FrameTest from '../components/FrameTest'
import HyperKey from '../components/HyperKey'
import UltraMedal from '../components/UltraMedal'

//安装路由，显示引用
Vue.use(VueRouter);


//配置导出路由
export default new VueRouter({
  routes: [

    {
      //路由路径
      path: '/',
      //自定义路由名称
      name: 'FrameTest',
      //路由跳转的组件
      component: FrameTest
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
    }
  ]
});
