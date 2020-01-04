
let Vue;

class Store {
  constructor(options) {
    this._mutations = options.mutations;
    this._actions = options.actions;
    this._vm = new Vue({
      data: {
        // 加两个$，Vue不做代理
        $$state: options.state
      }
    })

    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  get state() {
    console.log('this._vm:', this._vm)
    return this._vm._data.$$state
  }

  set state(v) {
    console.log('unable!')
  }

  commit(type, payload) {
    const entry = this._mutations[type]
    if (entry) {
      entry(this.state, payload)
    }
  }

  dispatch(type, payload) {
    const entry = this._actions[type]
    if (entry) {
      entry(this, payload)
    }
  }
}


function install(_Vue) {
  Vue = _Vue;
  
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  }) 
}

export default {
  Store,
  install
}