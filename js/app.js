document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Aquí puedes agregar la lógica para validar el nombre de usuario y la contraseña
  
    if (username === 'usuario' && password === 'contraseña') {
      
        window.location.href = 'homepage.html';

    } else {
      document.getElementById('error-message').innerText = 'Nombre de usuario o contraseña incorrectos';
    }
  });
  