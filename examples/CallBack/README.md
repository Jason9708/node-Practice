# NodeJs 回调函数
Node.js 异步编程的直接体现就是回调
异步编程依托于回调来实现，但不能说使用回调之后程序就是异步化了
回调函数在完成任务后才会被调用，Node 使用了大量的回调函数 （ Node中所有API都支持回调函数 ）

例如：我们可以一边读取文件，一边执行其他命令，在文件读取完后，我们将文件内容作为回调函数的参数返回。这样在执行代码时就没有阻塞或者等待文件`I/O`操作，大大提高`Node.js`的性能，可以处理大量的并发请求

#### 阻塞代码实例
```js
var fs = require('fs')

var data = fs.readFileSync(process.cwd() + '/examples/CallBack/test.txt')
console.log(data.toString())
console.log('读取完毕！')

// ReadFile test: I am a txt File
// 读取完毕！
```


#### 非阻塞代码实例
```js
var fs = require('fs')

fs.readFile(process.cwd() + '/examples/CallBack/test.txt', (err, data) => {
    if (err) return console.error(err)
    console.log(data.toString())
})
console.log('读取完毕')

// 读取完毕
// ReadFile test: I am a txt File
```