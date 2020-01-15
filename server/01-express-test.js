// nodejs
const express = require('express')

// 获取express实例
const server = express()

// 编写路由处理不同url请求
server.get('/', (req, res) => {
    res.send('<strong>hello world</strong>')
})

// 监听端口
server.listen(8888, () => {
    console.log('server');
})
