/*para  validar que solo hayan letras en la variable*/
function validarnombre(inputElement) {
    const regex = new RegExp(/^[a-zA-Z ]*$/);
    
    return regex.test(inputElement.value);
}

/*para validar que no hayan letras repetidas consecutivas*/
function validarcaracteres(inputElement) {
    const invalidDataPattern = /(\w)\1\1/;
  
    return !invalidDataPattern.test(inputElement.value);
}

/*para validar que no hayan letras repetidas consecutivas*/
function validardireccion(inputElement) {
    const regex = new RegExp(/^[a-zA-Z0-9\s#\*\/\.\-\,\:\;°\+]{5,}$/);
    
    return regex.test(inputElement.value);
}

/*para validar que no hayan vocales o consonantes consecutivas*/
function validarvocalyconsonante(inputElement) {
    const text = inputElement.value.toLowerCase();
    const consonantPattern = /[bcdfghjklmnpqrstvwxyz]{3,}/;
    const vowelPattern = /[aeiou]{3,}/;
    
    if (consonantPattern.test(text)) {
        return false;
    }
    
    if (vowelPattern.test(text)) {
        return false;
    }
    
    return true;
}

/*para validar el email*/
function validaremail(inputElement) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del correo electrónico
    
    return emailPattern.test(inputElement.value);
}

/*comprobando que no hayan caracteres repetidos*/
function validarRepetidos(inputElement) {
    const value = inputElement.value.toLowerCase(); // Convertir el valor a minúsculas para simplificar la validación
    
    for (let i = 0; i < value.length - 2; i++) {
        if (value[i] === value[i + 1] && value[i] === value[i + 2]) {
            return false;
        }
    }    
    return true;
}


function validarnombreyapellido(inputElement){

    const validacion = validarnombre(inputElement) && validarcaracteres(inputElement) && validarRepetidos(inputElement);

    return validacion;
}

function validandocampos(){
    const validar = validarnombreyapellido($nombre1) && validarnombreyapellido($apellido) && validarnombreyapellido($ciudad)  && validardireccion($direccion) && validarcaracteres($direccion) && validarcaracteres($nNino) && validarcaracteres($email) && validaremail($email) && $telefono.value.length >= 5;

    return validar;
}

async function validarDatosingresados() {
    const nombre1 = $nombre1.value.trim();
    const apellido = $apellido.value.trim();
    const telefono = $telefono.value.trim();
    const cedula1 = $cedula1.value.trim();

    const existeNombre = pedidos.some(pedido => pedido.nombre1 === nombre1);
    const existeApellido = pedidos.some(pedido => pedido.apellido === apellido);
    const existeTelefono = pedidos.some(pedido => pedido.telefono === telefono);
    const existeCedula1 = pedidos.some(pedido => pedido.cedula1 === cedula1);

    if (existeNombre && existeApellido && existeTelefono && existeCedula1) {
        console.log("Los datos ingresados ya existen en pedidos.");
        const Encontrado = pedidos.findIndex(pedidos => parseInt(pedidos.cedula1) === parseInt($cedula1.value));
        const pedidoEncontrado = pedidos[Encontrado];
        $pedido.value = parseInt(pedidoEncontrado.pedido);
        return false;
    }
    return true;
}


/*funcion para generar la fecha*/

function darfecha(inputElement){
    const today = new Date(); // Obtener la fecha actual
    const day = String(today.getDate()).padStart(2, '0'); // Obtener el día con dos dígitos
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Obtener el mes con dos dígitos (se suma 1 porque los meses se indexan desde 0)
    const year = today.getFullYear(); // Obtener el año

    const formattedDate = `${day}/${month}/${year}`; // Formatear la fecha en el formato "dd/mm/yyyy"

    inputElement.value = formattedDate;
}

darfecha($fecha);