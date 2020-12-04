import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
//关闭路由拦截
// router.beforeEach((to,from,next) =>{//to: 要访问的路由（去向），from:访问的路由从哪里跳转到哪里的（来源） next: 下一步操作的选择
//   console.log(to.path)  //输出访问的路由的访问路径
//   next()
//
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
