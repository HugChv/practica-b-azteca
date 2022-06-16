$(document).ready(function () {
cargarClientes();
});

function cargarClientes() {
    $.get("http://localhost:8085/cliente/mostrar", function (response, state) {
     
      $("tbody").children().remove(); //Limpio la tabla
  
      for (i = 0; i < response.length; i++) {
  
        $('#tablaCliente').append(
          '<tr><td class="text-center">' + response[i].nombre + '</td><td class="text-center">' +
          response[i].fechaNac + '</td><td class="text-center">'
          + response[i].celular + '</td><td class="text-center">'
          + response[i].correo + '</td class="text-center"></tr>');
      }
    }, 'json');
}