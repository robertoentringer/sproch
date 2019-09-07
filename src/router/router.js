import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home.vue"

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/expressions",
      name: "expressions",
      component: () => import(/* webpackChunkName: "single" */ "@/views/Expressions")
    },
    {
      path: "/expression/:slug",
      name: "expression",
      component: () => import(/* webpackChunkName: "single" */ "@/views/Single")
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: "about" */ "@/views/About")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import(/* webpackChunkName: "about" */ "@/views/Contact")
    },
    {
      path: "*",
      name: "404",
      component: () => import(/* webpackChunkName: "not-found" */ "@/views/NotFound")
    }
  ] /* ,
  scrollBehavior(to, from, savedPosition) {
    console.log(to)
    return false
    //console.log(to)
    //return { selector: `#page-${to.query.page}` }
    //if (savedPosition) return savedPosition
    //if (to.hash) return { selector: to.hash }
    //return { x: 0, y: 0 }
  } */
})

export default router
