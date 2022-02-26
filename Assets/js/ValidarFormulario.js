$(function () {
    const elementoNombre = $('#nombre');

    const elementoApellido = $('#apellido');

    $('#formularioRegistro').submit(function (evento) {

        // Funciones que se van a utilizar

        function validarDvLetraK(parametro) {
            var patron = /^[kK\s]*$/;
            if (parametro.search(patron)) {
                return false;
            } else {
                return true;
            }
        }

        function validarTexto(parametro) {
            var patron = /^[a-zA-Z\s]*$/;
            if (parametro.search(patron)) {
                return false;
            } else {
                return true;
            }
        }

        function validarNumerosLetrasEspacios(parametro) {
            var patron = /^[A-Za-z0-9\s]+$/g;
            if (parametro.search(patron)) {
                return false;
            } else {
                return true;
            }
        }

        // Creacion de las variables

        const elementoRut = $('#rut');
        const valorRut = elementoRut.val();

        const elementoDv = $('#dv');
        const valorDv = elementoDv.val();

        const elementoNombre = $('#nombre');
        const valorNombre = elementoNombre.val();

        const elementoApellido = $('#apellido');
        const valorApellido = elementoApellido.val();

        const errorDireccion = $('#direccion');
        const valorDireccion = errorDireccion.val();

        const elementoMarca = $('#marca');
        const valorMarca = elementoMarca.val();

        const elementoModelo = $('#modelo');
        const valorModelo = elementoModelo.val();

        const elementoAno = $('#ano');
        const valorAno = elementoAno.val();

        const elementoServicios = $("input[name='servicios']");
        const valorServicios = $("input[type='checkbox']:checked").length;

        const elementoFecha = $("fecha");
        const valorFecha = elementoFecha.val(); 

        const elementoHora = $("hora");
        const valorHora = elementoHora.val();

        // Validaciones para cada input del formulario

        if (valorRut == null || valorRut == '') {
            evento.preventDefault();
            $("#errorRut").text("Ingrese su Rut");
            elementoRut.addClass("inputError");
        } else if (isNaN(valorRut)) {
            evento.preventDefault();
            $("#errorRut").text("El Rut ingresado no es valido");
            elementoRut.addClass("inputError");
        } else if (valorRut.length != 8) {
            evento.preventDefault();
            $("#errorRut").text("El Rut ingresado tiene que tener 8 digitos");
            elementoRut.addClass("inputError");
        }

        if (valorDv == null || valorDv == '') {
            evento.preventDefault();
            $("#errorDv").text("Ingrese el digito verificador");
            elementoDv.addClass("inputError");
        } else if (isNaN(valorDv) && validarDvLetraK(valorDv) == false) {
            evento.preventDefault();
            $("#errorDv").text("El digito verificador solo puede ser numeros o letra K");
            elementoDv.addClass("inputError");
        } else if (valorDv.length != 1) {
            evento.preventDefault();
            $("#errorDv").text("El digito verificador solo tiene 1 digito");
            elementoDv.addClass("inputError");
        }

        if (valorNombre == null || valorNombre == '') {
            evento.preventDefault();
            $('#errorNombre').text("Ingrese su nombre");
            elementoNombre.addClass("inputError");
            // $("#nombre").focus(function(){
            //     $(this).css("background-color", "#FFFFCC");
            // });
        } else if (valorNombre.length > 30) {
            evento.preventDefault();
            $('#errorNombre').text("Nombre debe tener maximo 30 digitos");
            elementoNombre.addClass("inputError");
        } else if (validarTexto(valorNombre) == false) {
            evento.preventDefault();
            $('#errorNombre').text("Por favor ingresar solo letras");
            elementoNombre.addClass("inputError");
        }

        if (valorApellido == null || valorApellido == '') {
            evento.preventDefault();
            $('#errorApellido').text("Ingrese su apellido");
            elementoApellido.addClass("inputError");
        } else if (valorApellido.length > 30) {
            evento.preventDefault();
            $('#errorApellido').text("Apellido debe tener maximo 30 digitos");
            elementoApellido.addClass("inputError");
        } else if (validarTexto(valorApellido) == false) {
            evento.preventDefault();
            $('#errorApellido').text("Por favor ingresar solo letras");
            elementoApellido.addClass("inputError");
        }

        if (valorDireccion == null || valorDireccion == '') {
            evento.preventDefault();
            $('#errorDireccion').text("Ingrese su direccion");
            errorDireccion.addClass("inputError");
        } else if (valorDireccion.length > 80) {
            evento.preventDefault();
            $('#errorDireccion').text("Direccion debe tener maximo 80 digitos");
            errorDireccion.addClass("inputError");
        }
        else if (validarNumerosLetrasEspacios(valorDireccion) == false) {
            evento.preventDefault();
            $('#errorDireccion').text("Direccion ingresada invalida, por favor ingresar solo letras, numeros y espacios");
            errorDireccion.addClass("inputError");
        }

        if (valorMarca == null || valorMarca == '') {
            evento.preventDefault();
            $('#errorMarca').text("Ingrese la marca de su vehiculo");
            elementoMarca.addClass("inputError");
        } else if (valorMarca.length > 20) {
            evento.preventDefault();
            $('#errorMarca').text("Marca debe tener maximo 20 digitos");
            elementoMarca.addClass("inputError");
        } else if (validarTexto(valorMarca) == false) {
            evento.preventDefault();
            $('#errorMarca').text("Por favor ingresar solo letras");
            elementoMarca.addClass("inputError");
        }

        if (valorModelo == null || valorModelo == '') {
            evento.preventDefault();
            $('#errorModelo').text("Ingrese el modelo de su vehiculo");
            elementoModelo.addClass("inputError");
        } else if (valorModelo.length > 20) {
            evento.preventDefault();
            $('#errorModelo').text("Modelo debe tener maximo 20 digitos");
            elementoModelo.addClass("inputError");
        } else if (validarTexto(valorModelo) == false) {
            evento.preventDefault();
            $('#errorModelo').text("Por favor ingresar solo letras");
            elementoModelo.addClass("inputError");
        }

        if (valorAno == null || valorAno == '') {
            evento.preventDefault();
            $('#errorAno').text("Ingrese el Año del vehiculo");
            elementoAno.addClass("inputError");
        } else if (isNaN(valorAno)) {
            evento.preventDefault();
            $('#errorAno').text("Debe ingresar un numero");
            elementoAno.addClass("inputError");
        } else if (valorAno.length != 4) {
            evento.preventDefault();
            $('#errorAno').text("Ingrese un año valido, Ej: 2020");
            elementoAno.addClass("inputError");
        }

        if (valorServicios == 0) {
            evento.preventDefault();
            $('#errorServicios').text("Seleccione una opcion");
            elementoServicios.addClass("inputError");
        }

        $('input, textarea').change(function () {
            $(this).removeClass("inputError");       // remueve la clase border danger del elemento
            const padre = $(this).parent();             // encuentra al elemento padre del elemento original
            padre.children('div.mensajeError').text("");    // busca hijos con las caracteristicas pedidas, con el hijo encontrado, setea su texto en nada
        });

        // Validaciones para enviar los datos del formulario

        if (valorRut != '' && valorRut.length == 8 && !isNaN(valorRut) && valorDv != '' && valorDv.length == 1 && (!isNaN(valorDv) || validarDvLetraK(valorDv) == true) && valorNombre.length > 0 && valorNombre.length < 31 && validarTexto(valorNombre) == true && valorApellido.length > 0 && valorApellido.length < 31 && validarTexto(valorApellido) == true && valorDireccion.length > 0 && valorDireccion.length < 81 && validarNumerosLetrasEspacios(valorDireccion) == true && valorMarca.length > 0 && valorMarca.length < 21 && validarTexto(valorMarca) == true && valorModelo.length > 0 && valorModelo.length < 21 && validarTexto(valorModelo) == true && valorAno != '' && valorAno.length == 4 && !isNaN(valorAno) && valorServicios > 0) {
            alert("Datos enviados");
        } else {
            alert("Tiene errores en el formulario!");
        }

    });

    $('#btnTotal').click(function (e) {
        var total = 0;
        $('.checkbox').each(function (index, element) {
            if ($(this).prop('checked')) {
                total += parseInt($(this).val())
            }
            swal("Cliente: " + elementoNombre.val() + " " + elementoApellido.val() + "\nTotal a pagar: $" + total * 1.19);
        });
    });

});