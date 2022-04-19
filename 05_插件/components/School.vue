<template>
  <div>
      <h2>学校名称：{{name | mySlice}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
//引入一个混合
export default {
    data() {
        return {
            name:'西安文理学院信息工程学院软件工程',
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