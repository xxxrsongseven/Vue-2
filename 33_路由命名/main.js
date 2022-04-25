import Vue from 'vue'
import App from './App.vue'
//导入vue-router
import VueRouter from 'vue-router'
//导入路由器
import router from './router/index'
//应用vuerouter
Vue.use(VueRouter)
//关闭vue生产提示
Vue.config.productionTip = false
new Vue({
  el:'#app',
  render(h) {
    return h(App)
  },
  router
})