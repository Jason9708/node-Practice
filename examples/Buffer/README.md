# Node.js Buffer（缓冲区）
Js自身只有字符串数据类型，没有二进制数据类型

但在处理像 TCP流 或者 文件流时，必须使用到二进制数据，因此在 Node.js 中，定义了一个 Buffer 类，该类用来创建一个专门存二进制数据的缓存区。

在 Node.js 中，Buffer类是随 Node 内核一起发布的核心库，Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理I/0操作中移动的数据时，就可能会用到 Buffer库

原始数据存储在 Buffer 类的实例中，一个 Buffer 类似于一个整数数组，但他对应于 V8 堆内存之外的一块原始内存

**Buffer 与字符编码**
Buffer 实例一般用于表示编码字符的序列（比如UTF-8,UCS2,Base64...）

通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间相互转换

```js
const buffer = Buffer.from('rounb','ascli')

// 输出 726f756e62
console.log(buffer.toString('hex'))
// 输出 cm91bmI=
console.log(buffer.toString('base64'))
```

**创建 Buffer**
- Buffer.alloc(size[,fill[,encoding]])      返回一个指定大小的Buffer实例，如果没有设置 fill，则默认填满0
- Buffer.allocUnsafe(size)      返回一个指定大小的 Buffer 实例，但是他不会被初始化，所以他可能包含敏感的数据
- Buffer.allocUnsafeSlow(size)
- Buffer.from(array)        返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然会自动被0覆盖）
- Buffer.from（arrayBuffer[,byteOffset[,length]])       返回一个新建的与给定的ArrayBuffer共享同一内存的 Buffer
- Buffer.from(buffer)       复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
- Buffer.from(string[,encoding])        返回一个被 string 的值初始化的新的 Buffer 实例
```js
// 创建一个长度为 10，且用 0 填充的Buffer
const buf1 = Buffer.alloc(10)

// 创建一个长度为 10，且用 0x1 填充的 Buffer
const buf2 = Buffer.alloc(10,1)

// 创建一个长度为 10，且未初始化的 Buffer
// 这个方法比调用 Buffer.alloc() 更快
// 但返回的 Buffer 实例可能包含旧数据
// 因此需要使用 fill() 或 write() 重写
const buf3 = Buffer.allocUnsafe(10)

// 创建一个包含 [0x1m 0x2, 0x3] 的Buffer
const buf4 = Buffer.from([1,2,3])

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('test')

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer
const buf6 = Buffer.from('tést', 'latin1');
```