module.exports = {
  lintOnSave: false,
  //开启代理方式一
/*   devServer:{
    proxy:'http://localhost:5000'
  }, */
  //开启代理方式二
/*   devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:5000',
        pathRewrite:{'^/api':''},
        ws:true,//默认为true
        changeOrigin:true//默认为true
      },
      '/foo':{
        target:'http://localhost:5001',
        pathRewrite:{'^/foo':''}
      }
    }
  } */
}