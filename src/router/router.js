import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/expressions',
      name: 'expressions',
      component: () => import(/* webpackChunkName: "single" */ '@/views/Expressions')
    },
    {
      path: '/expression/:slug',
      name: 'single',
      component: () => import(/* webpackChunkName: "single" */ '@/views/Single')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/About')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Contact')
    },
    {
      path: '*',
      name: '404',
      component: () => import(/* webpackChunkName: "not-found" */ '@/views/NotFound')
    }
  ],
  scrollBehavior() {
    return new Promise((resolve) => setTimeout(() => resolve({ x: 0, y: 0 }), 400))
  }
})

export default router
