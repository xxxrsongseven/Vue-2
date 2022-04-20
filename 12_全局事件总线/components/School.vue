<template>
  <div class="school">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <h3>{{studentName}}</h3>
  </div>
</template>

<script>
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
        this.$bus.$on('hello',(data)=>{
            console.log('我是school组件收到数据'+data);
            this.studentName=data
        })
    },
    beforeDestroy(){
        this.$bus.$off('hello')
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
