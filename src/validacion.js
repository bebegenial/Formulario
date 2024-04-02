/*para  validar que solo hayan letras en la variable*/
function validarnombre(inputElement) {
    const regex = new RegExp(/^[a-zA-ZÀ-ÿ0-9\/ .,-]*$/);
    
    return regex.test(inputElement.value);
}

/*para validar que no hayan letras repetidas consecutivas*/
function validarcaracteres(inputElement) {
    const invalidDataPattern = /(\w)\1{4,}/;
  
    return !invalidDataPattern.test(inputElement.value);
}

/*para validar que no hayan letras repetidas consecutivas*/
function validardireccion(inputElement) {
    const regex = new RegExp(/^[a-zA-ZÀ-ÿ0-9\s#\*\/\.\-\,\:\;°+\(\)\{\}\[\]\|\\<>\?\&\$\=\'\$\"\s_-—]*$/);
    
    return regex.test(inputElement.value);
}

/*para validar el email*/
function validaremail(inputElement) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del correo electrónico
    //alert("El correo electronico presenta errores (por ejemplo espacios entre el nombre), revisar y corregir");
    //$email.style.background = "rgb(255, 209, 209)";
    return emailPattern.test(inputElement.value);
}


function validarnombreyapellido(inputElement){

    const validacion = validarnombre(inputElement) && validarcaracteres(inputElement);

    return validacion;
}

function validandocampos(){
    const validar = validarnombreyapellido($nombre1) && validarnombreyapellido($apellido) && validarnombreyapellido($ciudad)  && validardireccion($direccion) && validarcaracteres($direccion) && validarcaracteres($nNino) && validarcaracteres($email) && validaremail($email);

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
        cargado = 1;
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