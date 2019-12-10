const buffer = Buffer.from('rounb', 'ascii')

// 输出 72756e6f6f62
console.log(buffer.toString('hex'))
    // 输出 cnVub29i
console.log(buffer.toString('base64'))