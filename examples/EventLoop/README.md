# Node.js 事件循环
Node.js 是单进程单线程应用程序，但是因为V8引擎提供的异步执行回调接口，通过这些接口可以处理大量并发，所以性能非常高

Node.js几乎每一个Api都是支持回调函数的

Node.js 基本上所有的事件机制都是用观察者模式来实现

Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数

Node.js 有多个内置的事件，我们可以通过引入 `events` 模块，并通过实例化 `EventEmitter` 类来绑定和监听事件, 如下实例

```js
// 引入 events 模块
var event = require('events')
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter()
```
```js
// 以下程序绑定事件处理程序
eventEmitter.on('eventName', eventHandler)
```
```js
// 触发事件
eventEmitter.emit('eventName')
```


**Node 应用程序是如何工作的？**

在`Node`应用程序中，执行异步操作的函数将回调函数作为最后一个参数，回调函数接收错误对象作为第一个参数

```js
// 创建 test.txt 文件

var fs = require('fs')

fs.readFile(process.cwd() + '/examples/CallBack/test.txt', (err, data) => {
    if (err) return console.log(err.stack)
    console.log(data.toString())
})
console.log('读取完毕')
```