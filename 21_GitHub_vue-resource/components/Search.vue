<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      keyWord:''
    }
  },
  methods: {
    searchUsers(){
      //请求前更新Lsit数据
      this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errMsg:'',users:[]})
      this.$http.get('https://api.github.com/search/users?q='+this.keyWord).then(res=>{
        //请求后更新Lsit数据
        this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:res.data.items})
      },err=>{
        //请求失败更新Lsit数据
        this.$bus.$emit('updateListData',{isLoading:false,errMsg:err.message,users:[]})
      })
    }
  },
};
</script>

<style>
</style>