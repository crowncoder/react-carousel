const webpack = require('webpack');
module.exports = {
    devtool: 'eval-source-map',//生成Source Maps,这里选择eval-source-map
    entry: __dirname + '/src/index.js',//唯一入口文件,__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录,
    output: {//输出目录
        path: __dirname + '/build',//打包后的js文件存放的地方
        filename: 'bundle.js',//打包后输出的js的文件名
    },
    //webpack-dev-server配置
    devServer: {
        contentBase: './',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 8000,//设置默认监听端口，如果省略，默认为"8080"
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
    ]
}