// 配置路由规则
import Vue from 'vue'
import Router from 'vue-router'
// 导入路由组件
import home from '@/components/home'
import authors from '@/components/authors'
import works from '@/components/works'

Vue.use(Router)

// 设置路由规则

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/authors',
      name: 'authors',
      component: authors
    },
    {
      path: '/works',
      name: 'works',
      component: works
    }
  ]
})
