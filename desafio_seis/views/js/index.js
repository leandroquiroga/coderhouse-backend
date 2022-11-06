const socket = io.connect();


socket.on('productos', (productos) => {

  console.log(productos);

  const button = document.querySelector('#enviar');
  // Cuando clickeamos el boton
  button.addEventListener('click', (e) => {
    e.preventDefault();

    // Obtenemos los valores
    let name = document.querySelector('#name').value;
    let price = document.querySelector('#price').value;
    let url_imagen = document.querySelector('#url_image').value;
    let mensaje_info = document.querySelector('#mensaje');

    // Armamos el nuevo producto con un id
    const nuevoProducto = {
      name,
      price,
      url_imagen,
      user: socket.id
    };
    
    socket.emit('nuevo_producto', nuevoProducto)
  });
})