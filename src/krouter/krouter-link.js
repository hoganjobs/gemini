export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  render(h) {
    console.log(this.$slot);
    return h('a', { attrs: {href: '#' + this.to} },  this.$slots.default)
  }
}