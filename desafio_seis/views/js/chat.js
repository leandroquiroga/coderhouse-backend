const socket = io()
const btn = document.querySelector('#enviar')


socket.on('chat', () => {});

btn.addEventListener('click', (e) => {
  e.preventDefault();

  // Obtenemos los valores
  let nombre = document.querySelector('#nombre').value;
  let texto = document.querySelector('#texto').value;


  const mensaje = {
    nombre,
    texto
  };

  socket.emit('new_message_client', mensaje, (data) => {
    let alertMessage;
    const { message, status } = data;

    if (!status) {
      alertMessage = message;
      alert(alertMessage)
      return;
    }
    alertMessage = message
    alert(alertMessage);
    // Obtenemos la url altual
    const url = window.location.href;

   // Lo hago para que se renderize la pagina
     window.location.href = url;
  });
})