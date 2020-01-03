import Link from './krouter-link'
import View from './krouter-view'

let Vue;

class KVueRouter {
  constructor(options) {
    this.$options = options;
    console.log(this.$options);
    Vue.util.defineReactive(this, 'current', '/')

    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))

    this.routeMap = {}
    options.routes.forEach(route => {
      this.routeMap[route.path] = route
    })
  }

  onHashChange() {
    this.current = window.location.hash.slice(1)
  }


}

KVueRouter.install = function(_Vue) {
  Vue = _Vue;

  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  Vue.component('router-link', Link)
  Vue.component('router-view', View)
}

export default KVueRouter