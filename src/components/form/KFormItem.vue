<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="error">{{error}}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
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
        const rules = this.form.rules[this.prop];
        const desc = { [this.prop]: rules };

        const schema = new Schema(desc);
        console.log(value, "|", rules, "|", desc);
        return schema.validate({ [this.prop]: value }, errors =>{
          if(errors) {
            this.error = errors[0].message;
          } else {
            this.error = "";
          }
        })
      }
    },
    mounted () {
      this.$on("validate", () => {
        this.validate();
      });
    },
  }
</script>

<style lang="scss" scoped>

</style>