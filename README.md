# React+ant-mobile+graphQLServer 服务端渲染 
优化打包、服务端首屏渲染、按需加载、按屏幕展示加载组件、使用antd-moubileUI框架、webpack4


* 客户端使用React + Redux + Ant-Mobile
* 服务端使用Koa2 + GraphQL 

### 启动
```
cnpm install
npm run start
```

### 注意antd-mobile 服务端渲染占时存在问题,需要手动更改包文件
把`other/CustomKeyboard.js` 替换至`/node_modules/antd-mobile/lib/input-item/`文件夹内
### 效果
![img1](https://github.com/tzuser/ant-mobile-base/blob/master/other/img1.jpg)
### 文件大小
![img2](https://github.com/tzuser/ant-mobile-base/blob/master/other/img2.jpg)
