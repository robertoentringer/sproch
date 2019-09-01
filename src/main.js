import Vue from "vue"
import App from "@/App.vue"
import router from "@/router/router"
import "@/utils/registerServiceWorker"

Vue.config.productionTip = false

new Vue({
  router,
  data: { loaded: null },
  render: h => h(App)
}).$mount("#app")
