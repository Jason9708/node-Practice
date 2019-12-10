var fs = require('fs')

fs.readFile(process.cwd() + '/examples/EventLoop/test.txt', (err, data) => {
    if (err) return console.log(err.stack)
    console.log(data.toString())
})
console.log('执行完毕')