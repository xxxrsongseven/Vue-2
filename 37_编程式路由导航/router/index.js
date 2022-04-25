//该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'
export default new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:message',
                            component: Detail,
                            //props的第一种写法,值为对象，对象中所有key-value都会以props形式传给Detail组件
                            //props:{a:1,b:'hello'}
                            //props的第二种写法,值为布尔值，若为真就会把路由组件收到的params参数，以props形式传给Detail组件
                            // props: true,
                            //props的第三种写法,值为函数，
                            props($route){
                                return {id:$route.params.id,message:$route.params.id}
                            }
                        }
                    ]
                }
            ]
        },
    ]
})