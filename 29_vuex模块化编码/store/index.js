//该文件用于创建vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import personOptions from './person'
import countOptions from './count'
Vue.use(Vuex)
//创建并导出Store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})
