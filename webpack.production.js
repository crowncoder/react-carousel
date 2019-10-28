const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports={
    entry: __dirname + '/src/Slider/Slider.js',//唯一入口文件,__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录,
    output: {//输出目录
        path: __dirname + '/build',//打包后的js文件存放的地方
        filename: 'bundle.js',//打包后输出的js的文件名
        library:'Slider',
        libraryExport: 'default',
        libraryTarget: 'umd'
    },
    externals:{
        'react':'react',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}