$(document).ready(function () {

    $('#AgregarCliente').click(function (e) {
        e.preventDefault();
        var data;
        var url = "http://localhost:8085/cliente/guardar/";
            data = JSON.stringify({           
              nombre: $('#nombre').val(),
              fechaNac: $('#fecha').val(),
              celular: $('#celular').val(),
              correo: $('#correo').val(),
            });

            $.ajax({
              method: "POST",
              url: url,
              data: data,
              dataType: 'json',
              contentType: "application/json",
              success: function (data) {
                $('.alert-success').html('Cliente agregado').fadeIn().delay(4000).fadeOut('snow');
              },
              error: function (errors) {
                $('.alert-success').html('Error al agregar cliente').fadeIn().delay(4000).fadeOut('snow');
                console.log(errors);
              }
            });

            $('#Nombre').val('');
            $('#Edad').val('')
            $('#Celular').val('')
            $('#Correo').val('')
      });


});