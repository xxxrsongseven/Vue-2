<template>
  <div class="row">
        <!-- 加载界面 -->
    <h1 v-if="info.isLoading">用户正在加载中~~~~~~~~</h1>
    <!-- 展示用户列表 -->
    <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-if="info.isFirst">欢迎来到GitHub用户搜索程序</h1>
    <!-- 请求错误 -->
    <h1 v-if="info.errMsg!=''">{{info.errMsg}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info:{
        isFirst:true,
        isLoading:false,
        users:[],
        errMsg:'',
      }
    }
  },
  mounted() {
    this.$bus.$on('updateListData',(dataObj)=>{
      this.info={...this.info,...dataObj}
    })
  },
  beforeDestroy(){
    this.$bus.$off('giveUsers')
  }
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>