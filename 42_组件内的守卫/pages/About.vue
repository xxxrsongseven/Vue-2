<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  //通过路由规则进入该组件会被调用
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("name") === "何子琪") {
      next();
    } else {
      alert("无权查看");
    }
  },
  //通过路由规则离开该组件会被调用
  beforeRouteLeave(to, from, next) {
    next();
  },
};
</script>

<style>
</style>