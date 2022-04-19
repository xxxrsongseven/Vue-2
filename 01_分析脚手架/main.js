//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false
//创建实例对象
new Vue({
  render: h => h(App),
  //全貌
 /*  render(creatElement){
    return creatElement(App)
  } */
}).$mount('#app')
/* el:'#app',
template:'<App></App>',
comments:{
  App
}
}) */