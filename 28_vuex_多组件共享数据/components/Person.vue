<template>
  <div>
      <h1>人员列表</h1>
      <h3 style="color:red">Count组件求和为:{{sum}}</h3>
      <ul>
          <li v-for="item,index  in $store.state.person" :key="index">{{item.name}}</li>
      </ul>
      <input @keydown.enter="add" type="text" placeholder="添加一个人" v-model="addName">
      <button @click="add">添加</button>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    data() {
        return {
            addName:''
        }
    },
    computed:{
        sum(){
            return this.$store.state.sum
        }
    },
    methods: {
        add(){
            const PersonObj={id:nanoid(),name:this.addName}
            this.$store.commit('addPerson',PersonObj) 
            this.addName=''
        }
    },
}
</script>

<style>

</style>