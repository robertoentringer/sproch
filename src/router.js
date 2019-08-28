import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      meta: { title: "Home Page", description: "home page description..." },
      component: Home
    },
    {
      path: "/expression/:id",
      name: "expression",
      meta: { title: "Single Page", description: "single page description..." },
      component: () => import(/* webpackChunkName: "single" */ "./views/Single")
    },
    {
      path: "/about",
      name: "about",
      meta: { title: "About Page", description: "about page description..." },
      component: () => import(/* webpackChunkName: "about" */ "./views/About")
    },
    {
      path: "*",
      name: "404",
      component: () => import(/* webpackChunkName: "not-found" */ "./views/NotFound")
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  document.head.querySelector("[name=Description]").setAttribute("content", to.meta.description)
  next()
})

export default router
