// _结尾表示目录  _开头表示文件
const path = require('path');
const alias = {
  '@': path.resolve(__dirname, './src/'),
  act_: path.resolve(__dirname, './src/actions/'),
  con_: path.resolve(__dirname, './src/Containers/'),
  com_: path.resolve(__dirname, './src/Components/'),
  _tools: path.resolve(__dirname, './src/public/tools.js'),
  _public: path.resolve(__dirname, './src/public/public.js'),
  public_: path.resolve(__dirname, './src/public'),
};
module.exports = alias;
