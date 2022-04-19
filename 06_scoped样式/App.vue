<template>
  <div>
    <Student></Student>
    <hr>
    <School></School>
  </div>
</template>

<script>
//相同名称样式根据先后引入决定，后引入的决定
import School from "./components/School.vue"
import Student from "./components/Student.vue";
export default {
  components: {
    Student,
    School
  },
};
</script>

<style>
</style>