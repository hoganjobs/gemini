<template>
  <div>
    <h3>child2</h3>
    <button @click="sendToChild1">send msg to child1</button>
  </div>
</template>

<script>
  export default {
    methods: {
      sendToChild1() {
        this.$parent.$emit('event-from-child2', 'some msg from child2')
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>