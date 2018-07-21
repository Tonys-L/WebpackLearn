const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
module.exports = {
  // JavaScript 执行入口文件
  mode: 'development',
  entry: {
      app:'./src/index.js',
      print:'./src/print.js'
  },
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: '[name]1.bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module:{
    
  },
  plugins:[
      //打包完成后会自动修改html中引用的资源名，改为生成的资源名
      new HtmlWebpackPlugin({
          title:'Output Management111'
      }),
      //打包时先清理dist文件夹
      new CleanWebpackPlugin(['dist']),
      //追踪打包过程
      new ManifestPlugin()
    ]
};