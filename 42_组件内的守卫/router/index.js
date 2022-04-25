//该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'
const router =  new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta:{title:'关于'}
        },
        {
            name:'zhuye',
            path: '/home',
            component: Home,
            meta:{title:'主页'},
            children: [
                {
                    name:'xinwen',
                    path: 'news',
                    component: News,
                    meta:{isAuth:true,title:'新闻'},
                },
                {
                    name:'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta:{isAuth:true,title:'消息'},
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:message',
                            component: Detail,
                            meta:{title:'详情'},
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

export default router