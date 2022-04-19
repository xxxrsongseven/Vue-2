<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>年龄：{{myAge}}</h2>
      <button @click="changeAge">尝试修改传入的年龄</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg:'我是何子琪的女朋友',
            myAge:this.age
        }
    },
    // props:['name','sex','age']简单接收
    //接收同时对数据类型限制
    /* props:{
        name:String,
        sex:String,
        age:Number
    } */
    //接收时同时对数据进行类型的限制+默认值指定+必要性限制
    props:{
        name:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
            default:null
        },
        sex:{
            type:String,
            required:true
        }
    },
    methods:{
        changeAge(){
            this.myAge++
        }
    }
}
</script>

<style>
.school{
    background-color: darkcyan;
}
</style>