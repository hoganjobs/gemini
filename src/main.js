import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

export function createApp(context) {
  // 
  const router = createRouter()

  const app = new Vue({
    router,
    context,
    render: h => h(app)
  })

  return { app, router }
}
