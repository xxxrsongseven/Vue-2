//人员管理相关配置
import axios from 'axios'
import { nanoid } from 'nanoid'
export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('addPerson', value)
            } else {
                alert('请输入姓王的名字')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then((res)=>{
                context.commit('addPerson',{id:nanoid(),name:res.data})
            },(err)=>{
                alert(err.message)
            })
        }
    },
    mutations: {
        addPerson(state, value) {
            state.person.push(value)
        }
    },
    state: {
        person: [
            { id: 888, name: '何子琪' }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.person[0].name
        }
    }
}