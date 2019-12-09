var fs = require('fs')

// 阻塞代码实例
// var data = fs.readFileSync(process.cwd() + '/examples/CallBack/test.txt')
// console.log(data.toString())
// console.log('读取完毕！')

// 非阻塞代码实例
fs.readFile(process.cwd() + '/examples/CallBack/test.txt', (err, data) => {
    if (err) return console.error(err)
    console.log(data.toString())
})
console.log('读取完毕')