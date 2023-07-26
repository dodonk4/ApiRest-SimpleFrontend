// document.getElementById('put-form').addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevenir que el formulario se envíe y la página se recargue
//   sendPut();
// });

// const sendPut = () => {
//   console.log('hola');
//   const formElement = document.getElementById('put-form');
//   const formData = new URLSearchParams(new FormData(formElement)); // Usar URLSearchParams en lugar de FormData
  
//   const requestOptions = {
//     method: 'POST', // Cambiar el método a POST
//     body: formData
//   };
  
//   // Agregar el encabezado necesario para indicar que es una solicitud PUT
//   requestOptions.headers = {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'X-HTTP-Method-Override': 'PUT'
//   };


//   fetch('/api/postgreSQLput', requestOptions)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Error al enviar la solicitud.');
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Manejar la respuesta si es necesario
//     console.log(data); // Por ejemplo, mostrar la respuesta en la consola
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// }