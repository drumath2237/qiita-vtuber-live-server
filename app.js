const ws = require('ws').Server
const http = require('http')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname))
app.set('views')

app.get('/', (req, res) => {
  res.render(__dirname + '/views/index.pug')
})

let server = http.createServer(app)
server.listen(port)
console.log('server running on: ', port)


/* soket operations */
let wss = new ws({server: server})
console.log('socket server created')

let connections = []

wss.on('connection', (socket)=>{
  console.log('connected')
  connections.push(socket)

  socket.on('message', (data) => {
    console.log('msg: ' + data)
    wss.clients.forEach((client)=>{
      client.send(data)
    })
  })

  socket.on('close', ()=>{
    console.log('disconnected')
  })
})
