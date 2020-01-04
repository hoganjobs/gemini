<template>
  <div>
    <Child1 msg="some msg from parent" @some-event="onSomeEvent"></Child1>
    <Child2 msg="some msg from parent" ></Child2>
  </div>
</template>

<script>
  import Child1 from '@/components/communication/Child1.vue'
  import Child2 from '@/components/communication/Child2.vue'

  export default {
    components: {
      Child1,
      Child2
    },
    methods: {
      onSomeEvent(msg) {
        console.log('communication: ', msg);
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>