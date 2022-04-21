<template>
  <div>
      <button @click="isShow=!isShow">显示/隐藏</button>
      <transition-group name="hello" appear>
        <h1 v-show="isShow" key="1">你好啊</h1>
        <h1 v-show="isShow" key="2">我不好</h1>
      </transition-group>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isShow:true,
        }
    },
}
</script>

<style scoped>
h1{
    background-color: orange;
}
.hello-enter-active{
    animation: move 1s linear;
}
.hello-leave-active{
    animation: move 1s linear reverse;
}
@keyframes move {
    from{
        transform :translateX(-100%);
    }
    to{
        transform :translateX(0);
    }
}
</style>