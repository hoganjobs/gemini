<template>
  <div>
    <h3>slot</h3>
    <Layout>
      <template v-slot:header>kaikeba</template>
      <template>content...</template>
      <template v-slot:footer="{fc}">{{fc}}</template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/slots/Layout.vue"
  export default {
    components: {
      Layout
    }
  }
</script>

<style scoped>

</style>