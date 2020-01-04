// webpack default config file
// webpack written by node.js, so this file will use node.js code style
let path = require('path'); // built-in module
module.exports = {
  mode: 'development', // 模式， 默认两种(production/development), default is production， 
  entry: './src/index.js', // 入口 
  output: {
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist'), // 路径必须是绝对路径
  }, 
}
