import Vue from 'vue'
import App from './App.vue'
//完整引入elmentUI
//导入element-ui
// import ElementUI from 'element-ui'
//引入elementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

import { Button,Row,DatePicker } from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);
//关闭vue生产提示
Vue.config.productionTip = false
new Vue({
  el:'#app',
  render(h) {
    return h(App)
  },
})