import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Parent.vue'),
    redirect: '/table' //重定向
  },

  {
    path:'/home/:id',  //访问路径 需要传递参数的页面
    name: 'home',
    component: () => import('../views/Home.vue'),  //主键
    children: [{  //嵌套路由
      path: '/child',
      component: () => import('../views/Child.vue')//懒加载 ，进入到组件才会渲染（不设置会默认渲染出所有路由里面的组件）
    }]
  },
  {
    path: '/layout',
    component: () => import('../views/element/Layout.vue')
  },

  {
    path: '/pop',
    component: () => import('../views/element/Pop.vue')
  },
  {
    path: '/table',
    component: () => import('../views/element/Table.vue')
  },

  {
    path: '/form',
    component: () => import('../views/element/Form.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
