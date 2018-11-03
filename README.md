Gst Mobile Site
---------------
new version for m.gstzy.cn weixin.gstyun.cn

### React+ant-mobile 服务端渲染
优化打包、服务端首屏渲染、按需加载、按屏幕展示加载组件、使用antd-moubileUI框架、webpack4
* 客户端 React + Redux + Ant-Mobile
* 服务端 Koa2


启动
-------------------
``` 
//安装依赖
npm install

//服务器环境
npm run build
npm run server

//开发环境
npm run start

```

开发规范
--------------------
请启用 prettier 插件,在文件保存时会自动规范代码
#### vscode
插件->prettier->安装
#### webstorm
file->setting->搜索prettier->启用prettier插件,并指定prettier包地址(需要本地全局安装prettier包)->fileWatcher->add 添加prettier文件监听,指定perttier.cmd执行文件位置

备忘录
------------

#### 开启eslint

```
#安装eslint相关包
npm i babel-eslint eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

#### eslint配置
```json
{
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
  "extends": ["airbnb", "prettier"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "arrow-parens": ["off"],
    "consistent-return": "off",
    "comma-dangle": "off",
    "generator-star-spacing": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-console": "off",
    "no-use-before-define": "off",
    "no-multi-assign": "off"
  },
  "plugins": ["import", "react"],
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "../webpack.config.eslint.js"
      }
    }
  }
}

```
