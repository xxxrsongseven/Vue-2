<template>
  <div class="school">
      <h2>学校名称：{{schoolName}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
    data() {
        return {
            schoolName:'西安文理学院',
            address:'科技六路'
        }
    },
}
</script>

<style>
.school{
    background-color: darkcyan;
}
</style>