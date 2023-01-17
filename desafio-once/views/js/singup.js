const host = window.location.hostname;
const port = window.location.port;
const path = ['v1/auth/singup', 'v1/auth/login'];
const btnSesion = document.querySelector('#sesion');

btnSesion.addEventListener('click', (e) => {

  e.preventDefault();

  let email = document.querySelector('#email').value;
  let name = document.querySelector('#name').value;
  let password = document.querySelector('#password').value;
  
  if ([email, password, name].includes('')) {
    let errorMessage = document.querySelector('#errorMessage');
    errorMessage.textContent = 'Todos los campos son obligatorios';
    
    setTimeout(() => {
      errorMessage.textContent = '';
    }, 3000);
    
    return;
  };
  
  const data = { email, name, password };
  const url = `http://${host}:${port}/${path[0]}`;
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(res => res.json()).then((res) => {
    const {status, message} = res
    
    if (!status) {
      let errorMessage = document.querySelector('#errorMessage');
      errorMessage.textContent = message;
        
        setTimeout(() => {
          errorMessage.textContent = '';
        }, 3000);
        return;
    }
    window.location.href = `http://${host}:${port}/${path[1]}`
    }).catch(err => console.log(err))
});