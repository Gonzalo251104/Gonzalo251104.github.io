// Obtener el estado del servicio (podrías obtenerlo de una API, por ejemplo)
var serviceStatus = "En ejecución"; // Puedes cambiar este valor según el estado real del servicio

// Mostrar el estado del servicio
document.getElementById('service-status').innerText = "Estado del servicio: " + serviceStatus;

// Obtener los datos del usuario almacenados en localStorage (o donde los hayas almacenado)
var userData = JSON.parse(localStorage.getItem('userData'));

// Mostrar los datos del usuario
if (userData) {
  var userDataDisplay = "Nombre de usuario: " + userData.username + ", Email: " + userData.email; // Puedes mostrar otros datos del usuario si los tienes
  document.getElementById('user-data').innerText = userDataDisplay;
} else {
  document.getElementById('user-data').innerText = "No se encontraron datos de usuario";
}
