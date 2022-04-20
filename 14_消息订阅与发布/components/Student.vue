<template>
  <div class="student">
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <button @click="giveName">把sutdent name 给 school</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    data() { 
        return {
            name:'何子琪',
            sex:'男'
        }
    },
    methods:{
        giveName(){
            //  this.$bus.$emit('hello',this.name)
            //创建发布者
            pubsub.publish('hello',666)
        }
    },
    mounted(){
        // console.log('school',this.x);
        
    }
}
</script>

<style scoped>
.student{
    background-color: red;
    padding: 5px;
}
</style>