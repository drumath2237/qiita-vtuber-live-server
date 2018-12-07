let host = location.origin.replace(/^http/, 'ws')
let ws = new WebSocket(host);

let sendMesageInTextBox = () => {
  let text = document.getElementById('msg-input').value
  ws.send(text)
}

ws.onmessage = (event) => {
  console.log('msg: ', event.data);
}
