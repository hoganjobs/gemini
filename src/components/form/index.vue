<template>
  <div>
    <KForm :model="userInfo">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="userInfo.username" placeholder="请输入用户名"></KInput>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
  import KForm from '@/components/form/KForm.vue';
  import KFormItem from '@/components/form/KFormItem.vue';
  import KInput from '@/components/form/KInput.vue';
  export default {
    components: {
      KForm,
      KFormItem,
      KInput
    },
    data() {
      return {
        userInfo: {
          username: "hogan",
          password: ""
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>