import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/expression/:id",
      name: "expression",
      component: () => import(/* webpackChunkName: "single" */ "./views/Single")
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: "about" */ "./views/About")
    },
    {
      path: "*",
      name: "404",
      component: () => import(/* webpackChunkName: "not-found" */ "./views/NotFound")
    }
  ]
})
