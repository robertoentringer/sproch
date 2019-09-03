import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home.vue"

//if ("scrollRestoration" in history) history.scrollRestoration = "manual"

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
      path: "/expressions",
      name: "expressions",
      meta: { title: "Expressions Page", description: "expressions description..." },
      component: () => import(/* webpackChunkName: "single" */ "@/views/Expressions")
    },
    {
      path: "/expression/:slug",
      name: "expression",
      meta: { title: "Single Page Expression", description: "single-page expression description..." },
      component: () => import(/* webpackChunkName: "single" */ "@/views/Single")
    },
    {
      path: "/about",
      name: "about",
      meta: { title: "About Page", description: "about page description..." },
      component: () => import(/* webpackChunkName: "about" */ "@/views/About")
    },
    {
      path: "/contact",
      name: "contact",
      meta: { title: "Contact Page", description: "contact page description..." },
      component: () => import(/* webpackChunkName: "about" */ "@/views/Contact")
    },
    {
      path: "*",
      name: "404",
      meta: { title: "Page Not Found" },
      component: () => import(/* webpackChunkName: "not-found" */ "@/views/NotFound")
    }
  ] /* ,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    else if (to.hash) return { selector: to.hash }
    else return { x: 0, y: 0 }
  } */
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  document.head.querySelector("[name=Description]").setAttribute("content", to.meta.description)
  next()
})

export default router
