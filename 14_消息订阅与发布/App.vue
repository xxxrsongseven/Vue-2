<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School/>
    <Student/>
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
  components: {
    School,
    Student
  },

};
</script>

<style>
.app {
  background-color: pink;
  padding: 50px;
}
</style>