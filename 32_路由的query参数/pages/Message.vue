<template>
  <div>
    <ul>
      <li v-for="item in messageLsit" :key="item.id">
        <!-- 跳转路由并携带query参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${item.id}&message=${item.message}`">{{item.message}}</router-link> -->
                <router-link :to="{
                  path:'/home/message/detail',
                  query:{
                    id:item.id,
                    message:item.message
                  }
                }">
                {{item.message}}
                </router-link>

        </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
data() {
  return {
    messageLsit:[
      {id:'001',message:'消息001'},
      {id:'002',message:'消息002'},
      {id:'003',message:'消息003'}
    ]
  }
},
}
</script>

<style>
</style>