# EventEmitter
Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列

Node.js 里面的许多对象都会分发事件：一个 `net Server` 对象会在每次有新连接时触发一个事件，一个 `fs.readStream` 对象会在文件被打开的时候触发一个事件，所有这些产生事件的对象都是 `events.EventEmitter` 的实例


`events` 模块只提供了一个对象： `events.EventEmitter`
`EventEmitter` 的核心就是事件触发与事件监听器功能的封装

你可以通过`require("events")`来访问该模块

```js
// 引入 events 模块
var events = require("events")
// 创建 eventEmitter
var eventEmitter = new events.EventEmitter()
```
`EventEmitter`对象如果在实例化时发生错误，会触发 error 事件，当添加新的监听器时，newListener 事件会触发，当监听器被移除时， removeListener 事件被触发

```js
// events.js 文件
var EventEmitter = require('events').EventEmitter
var event = new EventEmitter()

event.on('some_event', function() {
    console.log('some_event 被触发')
})

setTimeout(function(){
    event.emit('some_event')
},1000)
```

`EventEmitter` 支持若干个事件监听器，当事件触发时， 注册到这个事件的事件监听器会被依次调用， 事件参数作为回调函数参数传递

```js
var events = require('events')
var eventEmitter = new events.EventEmitter()

eventEmitter.on('someEvent', function(arg1,arg2) {
    console.log('listener1',arg1,arg2)
})

eventEmitter.on('someEvent', function(arg1,arg2) {
    console.log('listener2',arg1,arg2)
})

eventEmitter.emit('someEvent','参数1','参数2')

// listener1 参数 参数
// listener2 参数 参数
```


EventEmitter 方法
- addListener(event,listener)   为指定事件添加一个监听器到监听器数组的尾部
- on(event,listener)    为指定事件注册一个监听器，接收一个字符串 event 和一个回调
- once(event, listener)     为指定事件注册一个单次监听器，即监听器最多只会触发一次，触发后立即解除该监听器
- removeListener(event, listener)   移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器，它接收两个参数，参数名和回调函数名
- removeAllListener([event])    移除所有事件的所有监听器，如果指定事件，则移除指定事件的所有监听器
- setMaxListeners(n)    默认情况下，EventEmitters 如果你添加的监听器超过10个就会输出警告信息，该方法用于提高监听器的默认限制的数量
- listeners(event)      返回指定事件的监听器数组
- emit(event,[agr1],[arg2],[...])   按监听器的顺序执行每个监听器，如果事件有注册监听返回true，否则返回false

类方法 listenerCount(eventName)  返回指定事件的监听器数量

事件
- newListener
    - event 事件名 String
    - listener 处理事件函数
该事件在添加新监听器时被触发
- removeListener
    - event 事件名 String
    - listener 处理事件函数
从指定监听器数组中删除一个监听器，需要注意的时，此操作将会改变处于被删除监听器之后的那些监听器的索引


error 事件
`EventEmitter` 定义了一个特殊的事件 `error`，它包含了错误的语义，我们在遇到异常的时候通常会触发 error 事件

当 error 被触发时，`EventEmitter`规定如果没有响应的监听器，Node.js会把它当作异常，退出程序并输出错误信息

我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃

```js
var events = requrie('event')
var eventEmitter = new events.EventEmitter()

// 执行未注册事件
emitter.emit('error')
```


**继承 EventEmitter**
多数情况我们不会直接使用`EventEmitter`，而是在对象中继承它，包括`fs，net，http`等，只要是支持事件响应的核心模块都是`EventEmitter`的子类