<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <communication></communication>
    <!-- <p @click="$store.commit('add')">counter: {{$store.state.counter}}</p> -->
    <!-- <p @click="$store.dispatch('add')">async counter: {{$store.state.counter}}</p> -->
    <!-- <p>double counter: {{$store.getters.doubleCounter}}</p> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import communication from '@/components/communication'

export default {
  name: 'home',
  components: {
    // HelloWorld,
    communication
  }
}
</script>
