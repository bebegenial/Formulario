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
    const regex = new RegExp(/^[a-zA-Z0-9\s#\*\/\.\-]{4,}$/);
    
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

    const validacion = validarnombre(inputElement) && validarcaracteres(inputElement) && validarvocalyconsonante(inputElement) && validarRepetidos(inputElement);

    return validacion;
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