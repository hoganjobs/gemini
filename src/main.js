import Vue from 'vue'
import App from './App.vue'
import router from './krouter'
import store from './kstore'
import toast from './utils/toast'

Vue.config.productionTip = false

Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
