const btnSesion = document.querySelector('#sesion');

btnSesion.addEventListener('click', (e) => {
  e.preventDefault();
  
  const name = document.querySelector('#nameSesion').value;

  if (!name) {
    console.log('Por favor ingrese su nombre');
    return
  }

  // Realizar la comunicacion con el servidor para logear el usuario
});