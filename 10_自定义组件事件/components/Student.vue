<template>
  <div class="student">
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <button @click="sendStudentName">把学生名给App</button>
      <button @click="unbind">解绑自定义事件</button>
      <button @click="distory">销毁当前student组件实例对象（vc）</button>
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
    methods:{
        sendStudentName(){
            //触发student组件实例身上的wsy事件
            this.$emit('wsy',this.name)
            // this.$emit('demo')
        },
        unbind(){
            this.$off('wsy')//解绑一个自定义事件
            // this.$off(['wsy','demo'])//解绑多个自定义事件
            // this.$off()//解绑所有 自定义事件
        },
        distory(){
            this.$destroy() //销毁了当前组件实例,销毁后所有student实例的自定义事件都不奏效了
        }
    }
}
</script>

<style scoped>
.student{
    background-color: red;
    padding: 5px;
}
</style>