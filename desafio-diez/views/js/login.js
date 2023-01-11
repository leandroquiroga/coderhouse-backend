const btnSesion = document.querySelector('#sesion');

btnSesion.addEventListener('click', (e) => {
  
  e.preventDefault();
  const name = document.querySelector('#nameSesion').value;
  const data = { name };
  // Comunicacion con el servidor para logear el usuario
  const url = 'http://localhost:8080/v1/auth/login';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
    .then(data => data.json())
    .then((data) => {
      const { message, status } = data;
      if (!status) {
        console.log(data);
        let errorMessage = document.querySelector('#errorMessage'); 
        errorMessage.textContent = message;

        setTimeout(() => {
          errorMessage.textContent = '';
        }, 2500);

        return
      };

      window.location.href = 'http://localhost:8080/v1/home'
    });

});