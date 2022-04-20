<template>
  <div class="app">
    <h1>{{ msg+'!'}}{{sutdentName}}</h1>
    <!-- props实现子组件传值给父组件 -->
    <School :getSchoolName="getSchoolName"></School>
    <hr />
    <!-- 自定义事件实现子组件传值给父组件(第一种写法：@或v-on) -->
    <Student @wsy="getStudentName" @demo="m1" @click.native="show"></Student>
    <!-- 自定义事件实现子组件传值给父组件(第二种写法：使用ref获得实例对象) -->
    <!-- <Student ref="student"></Student> -->
  </div>
</template>

<script>
//相同名称样式根据先后引入决定，后引入的决定
import School from "./components/School";
import Student from "./components/Student";
export default {
  data() {
    return {
      msg: "你好",
      sutdentName:''
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("app收到了学校名:" + name);
    },
    getStudentName(name) {
      console.log("app收到了学生名:" + name); 
      this.sutdentName=name
    },
    m1(){
      console.log('demo被触发了');
    },
    show(){
      alert('原生click事件触发了(.native)')
    }
  },
  components: {
    Student,
    School,
  },
  mounted(){
    //this.$refs.student.$on('wsy',this.getStudentName)  //绑定自定义事件
    // this.$refs.student.$once('wsy',this.getStudentName) //绑定自定义事件once
  }
};
</script>

<style>
.app {
  background-color: pink;
  padding: 50px;
}
</style>