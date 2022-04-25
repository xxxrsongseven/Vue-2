<template>
  <div>
      <h1>人员列表</h1>
      <h3 style="color:red">Count组件求和为:{{sum}}</h3>
      <ul>
          <li v-for="item  in person" :key="item.id">{{item.name}}</li>
      </ul>
      <h3>列表中第一个人的名字是:{{ firstPersonName }}</h3>
      <input @keydown.enter="add" type="text" placeholder="添加一个人" v-model="addName">
      <button @click="add">添加</button>
      <button @click="addWang">添加一个姓王的人</button>
      <button @click="addServer">服务器添加名字</button>
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
        person(){
            return this.$store.state.personAbout.person
        },
        sum(){
            return this.$store.state.countAbout.sum
        },
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        }
    },
    methods: {
        add(){
            const PersonObj={id:nanoid(),name:this.addName}
            this.$store.commit('personAbout/addPerson',PersonObj) 
            this.addName=''
        },
        addWang(){
            const PersonObj={id:nanoid(),name:this.addName}
            this.$store.dispatch('personAbout/addPersonWang',PersonObj)
            this.addName=''
        },
        addServer(){
            this.$store.dispatch('personAbout/addPersonServer')
        }
    },
}
</script>

<style>

</style>