<template>
  <div>
    <KForm :model="userInfo" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="userInfo.username" placeholder="请输入用户名"></KInput>
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <KInput type="password" v-model="userInfo.password" placeholder="请输入密码"></KInput>
      </KFormItem>
      <KFormItem>
        <button @click="login">登录</button>
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
        },
        rules: {
          username: [{ requried: true, message: "请输入用户名" }],
          password: [{ requried: true, message: "请输入密码" }]
        }
      }
    },
    methods: {
      login() {
        this.$refs["loginForm"].validate(valid => {
          this.$toast({
            msg: valid ? "请求登录" : "校验失败",
            duration: 2000
          });
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>