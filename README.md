# Vue-dom主要架构
node + vue + webpack + vue-router + vuex

##主要插件

        node作为底层环境
        wepckack (配合插件实现自动化构建)
        koa.js(实现前端跨域)
        extract-text-webpack-plugin 模块化分离插件(js.css文件分离)
        uglifyjs-webpack-plugin (js压缩插件)
        cssnano (css压缩插件)
        postcss (scss预处理编译工具)

# 版本试用
        此版本的框架适合与------多个项目同时开发，并且依赖于同一套框架.

#项目启动
        npm run start --[这里是你的项目名称]
        yarn run start --[这里是你的项目名称]