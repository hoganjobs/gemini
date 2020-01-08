<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="error">{{error}}</p>
  </div>
</template>

<script>
  export default {
    inject: ["form"],
    data() {
      return {
        error: ''
      }
    },
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String
      }
    },
    methods: {
      validate() {
        const value = this.form.model[this.prop];
        console.log(value);
        // const rules = this.form.model[this.rules]
        // console.log(rules);
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>