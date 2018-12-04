const express = require('express')
const app = express()
const expressWs = require('express-ws')(app)

app.use(express.static(__dirname))

app.get('/', (req, res, next) => {
  console.log('route')
  res.sendFile(__dirname + '/views/index.html')
})

app.ws('/', (ws, req) => {
  ws.on('message', (msg) => {
    console.log('recieved: ' + msg)
  })
  console.log('socket connected')
})

app.listen(3000);
console.log('server listening...');
