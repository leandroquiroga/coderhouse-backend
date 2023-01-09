const socket = io();
const btnEnviar = document.querySelector('#enviar');
const btnLogout = document.querySelector('#logout');

btnEnviar.addEventListener('click', (e) => {
  e.preventDefault();
  // Realizar la comnunicacion con el servidor a travez de Socket.io
});

btnLogout.addEventListener('click', () => {
  // Conectarse con el servidor para cerrar sesion mediante Socket.io? 
});