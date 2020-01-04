// webpack default config file
// webpack written by node.js, so this file will use node.js code style
let path = require('path'); // built-in module
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production', // 模式， 默认两种(production/development), default is production， 
  entry: './src/index.js', // 入口 
  output: {
    // filename: 'bundle.js', // 打包后的文件名
    filename: 'bundle.[hash].js', // 每次打包生成不同的文件
    path: path.resolve(__dirname, 'build'), // 路径必须是绝对路径
  },
  devServer: { // 开发服务器的配置,在内存中打包
    port: 3000,
    progress: true, // 进度条
    contentBase: './build', // index.html的路径
    compress: true,
  },
  plugins: [ // 数组，放着所有plugin
    new HtmlWebpackPlugin({
      template: './src/index.html', // 模板index.html
      filename: 'index.html', // 打包后的文件名
      minify: {
        removeAttributeQuotes: true, // 删除双引号
        removeEmptyElements: true,
        removeTagWhitespace: true,
        collapseWhitespace: true, // 变成一行
      },
      hash: true // hash戳
    }),
  ],
  module: { // 模块
    rules: [ // loader特点： 希望单一; 默认从右向左执行,所以顺序不能颠倒
      {
        test: /\.css/,
        use: 'style-loader' // 解释@import这种语法的
      },
      {
        test: /\.css/,
        use: 'css-loader' // 把css插入到head的标签中
      },
      {
        test: /\.scss/,
        use: ['css-loader', 'sass-loader'] // 
      },
      // { test: /\.css/, use: ['style-loader', 'css-loader'] } 默认从右向左执行,所以顺序不能颠倒
      // { test: /\.css/, use: [{ loader: 'style-loader'， options: {}}, 'css-loader'] } 可以传参数
    ]
  },
}
