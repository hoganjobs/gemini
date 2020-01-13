<template>
  <div>
    <div class="box" v-if="isShow">
      <p class="box-content">{{msg}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      msg: {
        type: String,
        default: ""
      },
      duration: {
        type: Number,
        default: 1000
      }
    },
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      show() {
        this.isShow = true;
        // 定时消失
        setTimeout(this.hide, this.duration);
      },
      hide() {
        this.isShow = false;
        // 清除自己
        this.remove();
      }
    },
    mounted () {
      this.show();
    },
  }
</script>

<style scoped>
  .box {
  position: fixed;
  width: 100%;
  top: 40%;
  left: 0;
  text-align: center;
  pointer-events: none;
  box-sizing: border-box;
}
.box-content {
  width: 400px;
  margin: 10px auto;
  font-size: 20px;
  font-weight: 700;
  color: #fff; 
  padding: 36px 32px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  margin-bottom: 8px;
}
</style>