const button = document.querySelector('#enviar');
// Cuando clickeamos el boton
button.addEventListener('click', (e) => {
  e.preventDefault();

  // Obtenemos los valores
  let name         = document.querySelector('#name').value;
  let price        = document.querySelector('#price').value;
  let url_imagen   = document.querySelector('#url_image').value;  
  let mensaje_info = document.querySelector('#mensaje');

  // Armamos el nuevo producto con un id
  const nuevoProducto = {
    name,
    price, 
    url_imagen,
  }

  console.log({nuevoProducto});

  // URI (CAMBIAR PUERTO SI ES NECESARIO)
  const url = `http://localhost:8080/api/productos`

  // Enviamos el producto
  fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(nuevoProducto)
  })
  .then(data  => data.json())
  .then(({status, mensaje, info}) => {
    console.log(info);
    if(status){
      mensaje_info.textContent = '';
      mensaje_info.classList.remove('text-danger');
      mensaje_info.classList.add('text-success');
      mensaje_info.textContent = `${mensaje}`
      setTimeout(() => {
        mensaje_info.textContent = '';
        mensaje_info.classList.add('text-danger');
        window.location.href = url
      },2000);

      return
    }

    mensaje_info.textContent =`${mensaje}`;
    setTimeout(() => {
      mensaje_info.textContent = '';
    },2000);
  }).catch((error) => {
    console.log(error);
  })
})