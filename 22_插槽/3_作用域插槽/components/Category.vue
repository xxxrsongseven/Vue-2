<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽 -->
    <slot :games="games">没有传递时,我会出现1</slot>    
  </div>
</template>

<script>
export default {
    props:['title'],
     data() {
    return {
      games: ["英雄联盟", "穿越火线", "逆战", "QQ飞车"],
    };
  },
};
</script>

<style scoped>
.category {
  background-color: pink;
  width: 200px;
  height: 300px;
  margin-top: 50px;
}
h3{
    text-align: center;
    background-color: skyblue;
}
</style>