<template>
  <div class="test">
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
export default {
    data() { 
        return {
            name:'何子琪',
            sex:'男'
        }
    },
}
</script>

<style scoped>
.test{
    background-color: pink;
}
</style>