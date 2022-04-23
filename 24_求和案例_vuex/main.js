import Vue from 'vue'
import App from './App.vue'
//引入store
import store from './store'
new Vue({
  el:'#app',
  render(h) {
    return h(App)
  },
  store
})