<template>
  <div>
    <h3 v-on="$listeners">child2</h3>
    <button @click="sendToChild1">send msg to child1</button>
    <!-- $attrs, 可以取到非props的值 -->
    <p>{{$attrs.msg}}</p>
    <p>{{foo}}</p>
  </div>
</template>

<script>
  export default {
    inject: ['foo'],
    methods: {
      sendToChild1() {
        this.$parent.$emit('event-from-child2', 'some msg from child2')
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>