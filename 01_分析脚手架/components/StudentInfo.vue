<template>
  <div class="demo">
    <h2>学生姓名：{{ StudentName }}</h2>
    <h2>学生年龄：{{ Age }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      StudentName: "何子琪",
      Age: 21,
    };
  },
};
</script>

<style>
.demo {
  background-color: aqua;
}
</style>