<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showMsg">输出上面字符</button>
    <school ref="sch"></school>
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  data() {
    return {
      msg: "欢迎来到西安文理学院",
    };
  },

  components: {
    School,
  },
  methods:{
      showMsg(){
          console.log(this.$refs.title)//真实DOM元素
          console.log(this.$refs.btn)//真实DOM元素
          console.log(this.$refs.sch)//school组件实例对象()
      }
  }
};
</script>

<style>
</style>