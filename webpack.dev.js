const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin'); //html生成
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const configBase = require('./webpack.base.js');
const merge = require('webpack-merge');
const theme = require('./src/public/theme');
//获取本机ip
function getIPAdress() {
  //return '192.168.56.1'
  const interfaces = require('os').networkInterfaces();
  for (let devName in interfaces) {
    let iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}

const config = {
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader', { loader: 'less-loader', options: { modifyVars: theme, javascriptEnabled: true } }],
      },
    ],
  },
  devtool: 'eval-source-map',
  mode: 'development',
  devServer: {
    host: getIPAdress(), //localhost
    contentBase: path.join(__dirname, './build'),
    inline: true,
    hot: true,
    open: true,
    port: 5019,
    historyApiFallback: true,

    proxy: [
      {
        context: ['/graphql'],
        target: 'http://localhost:8182',
        changeOrigin: true,
        secure: false,
      },
    ],
    watchOptions: {
      //监听配置变化
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //热加载
  ],
};

module.exports = merge(configBase, config);
