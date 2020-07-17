import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/layout' //layout
import login from '@/views/login/login'
import index from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/login/login'),
          meta: { title: '登录' }
        },
        {
          path: 'index',
          name: 'index',
          component: () => import('@/views/index'),
          meta: { title: 'index' }
        }
      ]
    }
  ]
})
