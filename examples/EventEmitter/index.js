// 引入 events 模块
var events = require("events")
    // 创建 eventEmitter
var eventEmitter = new events.EventEmitter()

// 定义监听器
var listener1 = function listener1() {
    console.log('监听器listener1 执行')
}
var listener2 = function listener1() {
    console.log('监听器listener2 执行')
}

// 绑定connection事件，处理函数为 listener1
eventEmitter.on('connection', listener1)

// 绑定connection事件，处理函数为 listener2
eventEmitter.on('connection', listener2)

var eventListeners = eventEmitter.listenerCount('connection')
console.log(`当前有${eventListeners}个监听器在监听connection事件`)

// 触发connection事件
eventEmitter.emit('connection')

// 移除connection事件
eventEmitter.removeListener('connection', listener1)
console.log('listener1 监听器被移除')

// 再次触发
eventEmitter.emit('connection')

eventListeners = eventEmitter.listenerCount('connection')
console.log(`当前有${eventListeners}个监听器在监听connection事件`)

console.log('程序执行完毕')