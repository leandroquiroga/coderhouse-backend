

const socket = io();
const button = document.querySelector('#enviar');

socket.on('all_products', () => {});


// Cuando clickeamos el boton
button.addEventListener('click', (e) => {
  e.preventDefault();

  // Obtenemos los valores
  let name = document.querySelector('#name');
  let price = document.querySelector('#price');
  let url_imagen = document.querySelector('#url_image');

  // Armamos el nuevo producto con un id
  const nuevoProducto = {
    name: name.value,
    price: price.value,
    url_imagen: url_imagen.value,
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