<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽 -->
    <slot name="center">没有传递时,我会出现1</slot>
    <slot name="footer">没有传递时,我会出现2</slot>
    
  </div>
</template>

<script>
export default {
    props:['title']
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
img{
    width: 100%;
}
video{
  width: 100%;
}
</style>