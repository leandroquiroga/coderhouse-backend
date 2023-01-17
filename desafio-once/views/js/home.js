const socket = io();
const host = window.location.hostname;
const port = window.location.port;
const path = 'v1/auth/logout';
const btnEnviar = document.querySelector('#enviar');
const btnLogout = document.querySelector('#logout');
const allProducts = 'ALL_PRODUCTS';
const newProducts = 'NEW_PRODUCTS';

socket.on(allProducts, (data) => console.log(data));

btnEnviar.addEventListener('click', (e) => {
  e.preventDefault();
  let name = document.querySelector('#name').value;
  let price = document.querySelector('#price').value;
  let url_image = document.querySelector('#url_image').value;

  const producto = {
    name,
    price,
    url_image,
  }

  socket.emit(newProducts, producto, (data) => {
    let alertMessage; 
    const { status, message } = data; 
    
    if (!status) {
      alertMessage = message;
      let errorMessage = document.querySelector('#errorMessage');
      errorMessage.textContent =  message;
      setTimeout(() => {
        errorMessage.textContent = ''
      }, 2500);
      return;
    };

    alertMessage = message;
    alert(message);
    const url = window.location.href;
    window.location.href = url
  });
  
});

btnLogout.addEventListener('click', () => {
  const url = `http://${host}:${port}/${path}` ;
  window.location.href = url;
});