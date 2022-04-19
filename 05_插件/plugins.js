export default{
    install(Vue){
        //清除开发版提示
        Vue.config.productionTip = false
        //过滤器
         Vue.filter('mySlice',function(value){
             return value.slice(0,12)
         })
        //混合
        Vue.mixin({
            methods: {
                showName(){
                    alert(this.name) 
                 }
            },
        })
        //原型对象添加方法
        Vue.prototype.hello=()=>{alert('hello')}
    }
}