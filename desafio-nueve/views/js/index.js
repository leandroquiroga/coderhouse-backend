const socket = io()
const btnEnviar = document.querySelector('#enviar');

socket.on('user_connect', (data) => { console.log(data); });

btnEnviar.addEventListener('click', () => {
  let userName = document.querySelector('#userName').value;
  let name = document.querySelector('#name').value;
  let lastName = document.querySelector('#lastName').value;
  let year = document.querySelector('#year').value;
  let alias = document.querySelector('#alias').value;
  let avatar = document.querySelector('#avatar').value;
  let message = document.querySelector('#message').value;

  const arrayValues = [ userName, name, lastName, year, alias, avatar, message];

  if(arrayValues.includes('')){
    alert('Todos los campos son obligatorios')
    return;
  };

  const newChat = {
    user: {
      idAuthor: Date.now(),
      userName,
      name,
      lastName,
      year,
      alias,
      avatar,
    },
    text: {
      idText: Date.now(),
      message,
    } 
  };
  socket.emit('new_chat_user', newChat, (data) => {
    let alertMessage;
    const { message, status } = data;

    if (!status) {
      alertMessage = message;
      alert(alertMessage)
      return;
    }
    alertMessage = message
    alert(alertMessage);
    const url = window.location.href;
    window.location.href = url;
  });
})