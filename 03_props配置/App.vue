<template>
  <div>
    <Student name="王思颖" sex="女" :age=20></Student>
    <hr>
    <Student name="何子琪" sex="男" :age=21></Student>
    <hr>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
export default {
  components: {
    Student,
  },
};
</script>

<style>
</style>