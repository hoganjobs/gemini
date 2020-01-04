<template>
  <div>
    <Child1 msg="some msg from parent" @some-event="onSomeEvent"></Child1>
    <Child2 msg="some msg from parent" @click="onClick"></Child2>
    <button @click="goHome">call child1 go home to eat</button>
  </div>
</template>

<script>
  import Child1 from '@/components/communication/Child1.vue'
  import Child2 from '@/components/communication/Child2.vue'

  export default {
    provide() {
      return {
        foo: 'fooooo'
      }
    },
    components: {
      Child1,
      Child2
    },
    methods: {
      onSomeEvent(msg) {
        console.log('communication: ', msg);
      },
      goHome() {
        this.$children[0].eat();
      },
      onClick() {
        console.log('from parent callback func', this)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>