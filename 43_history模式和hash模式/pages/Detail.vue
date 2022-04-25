<template>
  <ul>
      <li>消息编号：{{id}}</li>
      <li>消息信息：{{message}}</li>
  </ul>
</template>

<script>
export default {
  props:['id','message'],
  computed:{
    /* id(){
      return this.$route.params.id
    },
    message(){
      return this.$route.params.message
    }*/
  } 
}
</script>

<style>

</style>