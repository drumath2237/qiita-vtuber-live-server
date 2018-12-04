let ws = new WebSocket('ws://localhost:3000/');

let sendText = () => {

  let txtInput = document.getElementById('input-text')
  let btnSend = document.getElementById('send-button')

  let msg = txtInput.value

  ws.send("Hi.")
}

ws.onopen = function() {//WS接続確立
   ws.send('hello');
 };

ws.onerror = function (error) {
  console.log('WebSocket Error ' + error);
};

ws.onmessages = function (e) {
  console.log('Server: ' + e.data);
};
