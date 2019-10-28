//webpack.config.js
const devConfig = require('./webpack.development')
const productionConfig = require('./webpack.production')
module.exports = env => {
    const extraConfig = env.mode === 'production' ? productionConfig : devConfig
    return {
        ...extraConfig,
        resolve: {
            extensions: [".js", ".jsx"]
        },
        module: {
            //loaders加载器
            rules: [
                {
                    test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                    exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                    use: { loader: 'babel-loader' }//loader的名称（必须）
                },
                { test: /\.css$/, use: ['style-loader', 'css-loader'] },
                { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
                { test: /\.(jpeg|jpg|png|gif|woff|eot|svg|woff2|ttf)$/, use: { loader: 'url-loader?limit=10240' } }
            ]
        }
    }
}