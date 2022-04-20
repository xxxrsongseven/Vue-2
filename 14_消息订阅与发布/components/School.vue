<template>
  <div class="school">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <h3>{{studentName}}</h3>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

//引入一个混合
export default {
    data() {
        return {
            name:'西安文理学院信息工程学院软件工程专业',
            address:'科技六路',
            studentName:''
        }
    },
    mounted(){
        // console.log('school',this.x);
/*         this.$bus.$on('hello',(data)=>{
            console.log('我是school组件收到数据'+data);
            this.studentName=data
        }) */
        //创建订阅者
        this.pubId = pubsub.subscribe('hello',(msgName,value)=>{
            console.log('有人发布了hello消息',value);
        })
    },
    beforeDestroy(){
        // this.$bus.$off('hello')
        //清除订阅者
        pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style lang="less" scoped>
.school{
    background-color: skyblue;
    padding: 5px;
    margin-top: 50px;
}
</style>
