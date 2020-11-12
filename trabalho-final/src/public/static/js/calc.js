var socket;

window.onload = function () {
  connect();

  let form = document.getElementById("message-form");
  let operationField = document.getElementById("operation");
  let number1Field = document.getElementById("number1");
  let number2Field = document.getElementById("number2");
  let messagesList = document.getElementById("messages");

  form.onsubmit = function (e) {
    e.preventDefault();

    if (!socket) {
      messagesList.innerHTML +=
      `<li class="received"><span>Erro:</span>WebSocket desconectado.</li>`;
      return false;
    }

    //Cria um objeto com os valores digitados no formulário
    var payload = `{
      "x": ${number1Field.value},
      "y": ${number2Field.value},
      "operation": "${operationField.value}"
    }`

    // Envia a mensagem através do websocket
    socket.send(payload);

    // Limpa o campo de mensagem
    number1Field.value = undefined;
    number2Field.value = undefined;

    return false;
  };

  let connectionBtn = document.getElementById("connection");
  connectionBtn.onclick = function (e) {
    if (socket) {
      e.preventDefault();
      socket.close();
      socket = undefined;
    } else {
      connect();
    }
    return false;
  };
};

function connect() {
  let messagesList = document.getElementById("messages");
  let socketStatus = document.getElementById("status");

  // Cria um novo socket.
  socket = new WebSocket("ws://localhost:3000/math");

  // Função para tratar os erros que podem ocorrer
  socket.onerror = function (error) {
    console.log("WebSocket Error: ", error);
  };

  // Função chamada no momento da conexão do cliente com o servidor
  socket.onopen = function (event) {
    socketStatus.innerHTML =
      "Conectado ao servidor: " + event.currentTarget.url;
    socketStatus.className = "open";
  };

  // Função para tratar mensagens enviadas pelo servidor.
  socket.onmessage = function (event) {
    let result = JSON.parse(event.data);
    if (result.error) {
      messagesList.innerHTML +=
      `<li class="received"><span>Erro:</span>${result.error}</li>`;
      return false;
    }
    let operation = "";
    switch (result.operation) {
      case "sum":
        operation = "+";
      break;
      case "subtract":
        operation = "-";
      break;
      case "multiply":
        operation = "x";
      break;
      case "divide":
        operation = "÷";
      break;
    }
    messagesList.innerHTML +=
      `<li class="received"><span>${result.x} ${operation} ${result.y} = ${result.result}</span></li>`;
  };

  // Função chamada no momento da desconexão do servidor com o cliente
  socket.onclose = function (event) {
    socketStatus.innerHTML = "Websocket desconectado.";
    socketStatus.className = "closed";
  };
}
