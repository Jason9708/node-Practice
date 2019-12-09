# nodeJs

### 目录解析
```
- bin  项目的启动文件，也可以放其他脚本
- node_modules  项目的依赖库
- public  用来放置项目的静态文件
- routes  路由控制器
- views 视图目录（MVC中的V）
- app.js  项目入口及程序启动文件
- models
- package.json  包描述文件 & 开发者信息

------  其他 -------
- models  数据模型（MVC中的M）
- controllers  控制器，对请求的操作（相当于MVC中的C）
- tools  工具库
- config  配置目录
- test 测试目录
- README.md  项目说明文件

------ 小册 ------
- examples  用于存放nodeJs练习demo
```

#### 使用小册
小册中的每一个文件夹代表一个示例，部分文件夹中的 README.md 用于对示例进行解析，运行示例，在终端输入`node 'xxx'`，xxx 表示 对应文件夹，例如运行 HelloWorld，执行`node 'examples/HelloWorld`