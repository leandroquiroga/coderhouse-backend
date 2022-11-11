const socket = io();
const button = document.querySelector('#enviar');

socket.on('all_products', () => {});


// Cuando clickeamos el boton
button.addEventListener('click', (e) => {
  e.preventDefault();

  // Obtenemos los valores
  let name = document.querySelector('#name').value;
  let price = document.querySelector('#price').value;
  let url_imagen = document.querySelector('#url_image').value;

  // Armamos el nuevo producto con un id
  const nuevoProducto = {
    name: name,
    price: price,
    url_imagen: url_imagen,
    user: socket.id
  };

  socket.emit('new_product', nuevoProducto, (data) => {
    
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
  
});