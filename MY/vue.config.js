let path = require('path')
const {config} = require('path')
module.exports = {
    chainWebpack: config => {
        config.plugin('html').tap(args=>{
            args[0].title= 'www'
            return args
        })
    }
    
}

module.exports = {
    runtimeCompiler: true,
    publicPath: './',  //输出的根路径  默认是/ 如果你的网站是app.com/vue 这更改此配置项
    devServer: {
      port: 8888 //端口
    }
}  