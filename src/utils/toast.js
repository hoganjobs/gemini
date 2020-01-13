import Vue from "vue";
import Toast from "@/components/Toast.vue";

/*
 * 用插件方式实现toast提示
 */
function create(Components, props) {
  // 需要挂载虚拟dom变成真实dom
  const vm = new Vue({
    render: h => h(Components, { props })
  }).$mount()
  // 获取真实dom
  document.body.appendChild(vm.$el);
  // 获取实例
  const comp = vm.$children[0];
  // 定义清除方法， 删除
  comp.remove = function() {
    document.body.removeChild(vm.$el)
  }
  return comp;
}
// 定义install，插件安装
function install(Vue) {
  Vue.prototype.$toast = function(options) {
    return create(Toast, options);
  }
}

export default {
  install
}