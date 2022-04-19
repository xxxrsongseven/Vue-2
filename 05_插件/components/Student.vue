<template>
  <div>
      <h2 @click="showName">学生姓名：{{name}}</h2>
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

<style>
.school{
    background-color: darkcyan;
}
</style>