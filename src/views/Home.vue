<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <communication></communication> -->
    <slot-example></slot-example>
    <!-- <form-example></form-example> -->
    <!-- <p @click="$store.commit('add')">counter: {{$store.state.counter}}</p> -->
    <!-- <p @click="$store.dispatch('add')">async counter: {{$store.state.counter}}</p> -->
    <!-- <p>double counter: {{$store.getters.doubleCounter}}</p> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import communication from '@/components/communication'
// import FormExample from '@/components/form'
import SlotExample from '@/components/slots'

export default {
  name: 'home',
  components: {
    // HelloWorld,
    // communication,
    // FormExample,
    SlotExample
  },
  mounted () {
    // 调用toast提示框
    // this.$toast({
    //   msg: "toast",
    //   duration: 2000
    // });
  },
}
</script>
