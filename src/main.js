import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import '@/utils/registerServiceWorker'
import seo from '@/mixins/seo'

Vue.config.productionTip = false

Vue.mixin(seo)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
