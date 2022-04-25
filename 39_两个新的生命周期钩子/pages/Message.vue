<template>
  <div>
    <ul>
      <li v-for="item in messageLsit" :key="item.id">
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${item.id}/${item.message}`">{{ item.message }}</router-link> -->
        <router-link
          replace
          :to="{
            //只能写name不能写path
            name: 'xiangqing',
            params: {
              id: item.id,
              message: item.message,
            },
          }"
        >
          {{ item.message }}
        </router-link>
        <button @click="pushShow(item)">push查看</button>
        <button @click="replaceShow(item)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageLsit: [
        { id: "001", message: "消息001" },
        { id: "002", message: "消息002" },
        { id: "003", message: "消息003" },
      ],
    };
  },
  methods:{
    pushShow(item){
      this.$router.push({
         name: 'xiangqing',
            params: {
              id: item.id,
              message: item.message,
            },
      })
    },
    replaceShow(item){
      this.$router.replace({
         name: 'xiangqing',
            params: {
              id: item.id,
              message: item.message,
            },
      })
    }
  }
};
</script>

<style>
</style>