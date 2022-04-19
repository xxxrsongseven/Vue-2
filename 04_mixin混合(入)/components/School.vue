<template>
  <div>
      <h2 @click="showName">学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
//引入一个混合
import {hunhe,hunhe2} from "../mixin"
export default {
    data() {
        return {
            name:'西安文理学院',
            address:'科技六路'
        }
    },
    mixins:[hunhe,hunhe2]
}
</script>

<style>
.school{
    background-color: darkcyan;
}
</style>