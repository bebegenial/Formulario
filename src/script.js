var $botonGuardar = document.querySelector("#guardar");
var modal = document.getElementById('myModal');
var opcion1Button = document.getElementById('opcion1');
var opcion2Button = document.getElementById('opcion2');
var opcion3Button = document.getElementById('opcion3');
var opcion4Button = document.getElementById('opcion4');

var $pedido = document.querySelector("#pedido");
var $fecha = document.querySelector("#fecha");
var $cuenta = document.querySelector("#cuenta");

var $nombre1 = document.querySelector("#nombre");
var $apellido = document.querySelector("#apellido");
var $direccion = document.querySelector("#direccion");
var $telefono = document.querySelector("#celular");
var $barrio = document.querySelector("#barrio");

var $empresa = document.querySelector("#empresa");
var $telefono2 = document.querySelector("#telefonoEmp");
var $direccion2 = document.querySelector("#dirEmpr");

var $cargo = document.querySelector("#cargo");
var $antiguo = document.querySelector("#antiguedad");
var $sueldo = document.querySelector("#sueldo");

var $email = document.querySelector("#email");
var $fCobro = document.querySelector("#fCobro");

var $nNino = document.querySelector("#nino");
var $ciudad = document.querySelector("#ciudad");

var $cNomb = document.querySelector("#nombCo");
var $cApell = document.querySelector("#apellCo");
var $cEmpresa = document.querySelector("#empCo");
var $ctele = document.querySelector("#telCo");
var $cDir = document.querySelector("#direCo");

var $cCargo = document.querySelector("#cargoCo");
var $cAntig = document.querySelector("#antiCo");
var $cSueldo = document.querySelector("#suelCo");

var $rNomb1 = document.querySelector("#nombR1");
var $rp1 = document.querySelector("#ptco1");
var $rTele1 = document.querySelector("#telOR1");
var $rTeleres1 = document.querySelector("#telRR1");

var $rNomb2 = document.querySelector("#nombR2");
var $rp2 = document.querySelector("#ptco2");
var $rTele2 = document.querySelector("#telOR2");
var $rTeleres2 = document.querySelector("#telRR2");

var $rNomb3 = document.querySelector("#nombR3");
var $rp3 = document.querySelector("#ptco3");
var $rTele3 = document.querySelector("#telOR3");
var $rTeleres3 = document.querySelector("#telRR3");

var $rNomb4 = document.querySelector("#nombR4");
var $rp4 = document.querySelector("#ptco4");
var $rTele4 = document.querySelector("#telOR4");
var $rTeleres4 = document.querySelector("#telRR4");

var $oCuotas = document.querySelector("#nCoutas");
var $oValor = document.querySelector("#vrCuota");

var $cedula1 = document.querySelector("#cedula1");
var $cc1 = document.querySelector("#cc1");
var $ce1 = document.querySelector("#ce1");

var $relacionista = document.querySelector("#tomaCont");
var $colaborador = document.querySelector("#especialista");
var $director = document.querySelector("#director");
var $organizador = document.querySelector("#telCliente");

var $cedula2 = document.querySelector("#cedula2");
var $cc2 = document.querySelector("#cc2");
var $ce2 = document.querySelector("#ce2");

var $cedula3 = document.querySelector("#cedula3");
var $cedula4 = document.querySelector("#cedula4");
var $cedula5 = document.querySelector("#cedula5");
var $cedula6 = document.querySelector("#cedula6");
let $inputs = document.querySelector(".inputs");
const formulario = document.getElementById(".formulario");
$cedula1.addEventListener('input', (event) => {
    $cedula3.value = event.target.value;
    $cedula5.value = event.target.value;
});
$cedula2.addEventListener('input', (event) => {
    $cedula4.value = event.target.value;
    $cedula6.value = event.target.value;
});

var $detColec = document.getElementById('detColec');
var $detValor = document.getElementById('detValor');
var $totalVal = document.getElementById('totalVal');
var $nCoutas = document.getElementById('nCoutas');
var $vrCuota = document.getElementById('vrCuota');
var $observ = document.getElementById('observ');


var $imgcedula1 = document.querySelector("#imgfile");
var $imgcedula2 = document.querySelector("#imgfile2");
var $imgpago = document.querySelector("#pagofile");


async function guardarPdf() {

    $botonGuardar.style.background = "#CFE6F9";
    $botonGuardar.style.color = "#CFE6F9";
    $botonGuardar.style.visibility = "hidden";
    $imgcedula1.style.visibility = "hidden";
    $imgcedula2.style.visibility = "hidden";
    $imgpago.style.visibility = "hidden";

    window.print();

    $botonGuardar.style.background = "gray";
    $botonGuardar.style.color = "white";
    $botonGuardar.style.visibility = "visible";
    $imgcedula1.style.visibility = "visible";
    $imgcedula2.style.visibility = "visible";
    $imgpago.style.visibility = "visible";
}

function validarCampos() {
    if ($nombre1.value.length <= 2 || $apellido.value.length <= 2 || $direccion.value.length <= 4 || $telefono.value.length <= 5 
        || $email.value.length <= 5 || $ciudad.value.length === 0 || $cedula1.value.length <= 5 || $relacionista.value.length <= 5 
        || $colaborador.value.length <= 5 || $fecha.value.length <= 5 || $fCobro.value.length === 0) {
        return false;
    } else {
        //$pedido.value = (parseInt(pedidos[pedidos.length - 1].pedido) + 1);
        return true;
    }
}

async function resaltarCampos() {
    /*if($pedido.value.length === 0){
        $pedido.style.background = "rgb(255, 209, 209)";
    }else{
        $pedido.style.background = "transparent";
    }*/

    if ($fecha.value.length === 0) {
        $fecha.style.background = "rgb(255, 209, 209)";
    } else {
        $fecha.style.background = "transparent";
    }

    if ($fCobro.value.length === 0) {
        $fCobro.style.background = "rgb(255, 209, 209)";
    } else {
        $fCobro.style.background = "transparent";
    }

    if ($nombre1.value.length === 0) {
        $nombre1.style.background = "rgb(255, 209, 209)";
    } else {
        $nombre1.style.background = "transparent";
    }

    if ($apellido.value.length === 0) {
        $apellido.style.background = "rgb(255, 209, 209)";
    } else {
        $apellido.style.background = "transparent";
    }

    if ($direccion.value.length === 0) {
        $direccion.style.background = "rgb(255, 209, 209)";
    } else {
        $direccion.style.background = "transparent";
    }

    if ($telefono.value.length === 0) {
        $telefono.style.background = "rgb(255, 209, 209)";
    } else {
        $telefono.style.background = "transparent";
    }

    if ($email.value.length === 0) {
        $email.style.background = "rgb(255, 209, 209)";
    } else {
        $email.style.background = "transparent";
    }

    if ($ciudad.value.length === 0) {
        $ciudad.style.background = "rgb(255, 209, 209)";
    } else {
        $ciudad.style.background = "transparent";
    }

    if ($cedula1.value.length <= 5) {
        $cedula1.style.background = "rgb(255, 209, 209)";
    } else {
        $cedula1.style.background = "white";
    }

    if ($relacionista.value.length === 0) {
        $relacionista.style.background = "rgb(255, 209, 209)";
    } else {
        $relacionista.style.background = "transparent";
    }

    if ($colaborador.value.length === 0) {
        $colaborador.style.background = "rgb(255, 209, 209)";
    } else {
        $colaborador.style.background = "transparent";
    }
}

$imgcedula1.addEventListener('change', () => {
    let imgfile1 = $imgcedula1.files[0];
    let imgfileURL1 = URL.createObjectURL(imgfile1);
    document.querySelector("#visual1").setAttribute('src', imgfileURL1);
})

$imgcedula2.addEventListener('change', () => {
    let imgfile2 = $imgcedula2.files[0];
    let imgfileURL2 = URL.createObjectURL(imgfile2);
    document.querySelector("#visual2").setAttribute('src', imgfileURL2);
})

$imgpago.addEventListener('change', () => {
    let pago = $imgpago.files[0];
    let pagoURL2 = URL.createObjectURL(pago);
    document.querySelector("#pago1").setAttribute('src', pagoURL2);
})


// Mostrar el modal al hacer clic en el botón "Guardar"
$botonGuardar.addEventListener('click', function () {
    modal.style.display = 'block';
});

//Autenticacion
opcion1Button.addEventListener('click', function () {
    modal.style.display = 'none';
    handleAuthClick();
    if (pedidos !== undefined) {
        opcion1Button.style.display = "none";
    }
});

//Nuevo Pedido
opcion2Button.addEventListener('click', async function (event) {
    
    if (!pedidos) {
        event.preventDefault();
        alert("¡Debes Registrarte!")
        handleAuthClick();        
    } else {
        modal.style.display = 'none';
        if (validarCampos() === true && validandocampos()) {
            event.preventDefault();
            await getPedidos();
            resaltarCampos();
            //await validarDatosingresados();
            await nuevoPedido();
            guardarPdf();     
        } else if(validarCampos()) {
            event.preventDefault();
            alert("Debes llenar todos los campos requeridos")
            resaltarCampos();
        }else {
            event.preventDefault();
            alert("Debes llenar todos los campos requeridos")
            resaltarCampos();
        }
    }
});

//Buscar Pedido
opcion3Button.addEventListener('click', function (event) {
    if (!pedidos) {
        event.preventDefault();
        alert("¡Debes Registrarte!")
        handleAuthClick();
    } else {
        event.preventDefault();
        buscarPedido();
        modal.style.display = 'none';
    }
});

//Actualizar Pedido
opcion4Button.addEventListener('click', function (event) {
    if (!pedidos) {
        event.preventDefault();
        //validar si inicio sesion
        alert("¡Debes Registrarte!")
        handleAuthClick();
    } else if(validarCampos() === true) {
        event.preventDefault();
        modal.style.display = 'none';
        editPedidos();        
    } else {
        event.preventDefault();
        alert("Debes llenar todos los campos requeridos")
        resaltarCampos();
    }
});

// Cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

//Carga de Opciones al momento de ingresar a la pagina
window.onload = function () {
    modal.style.display = 'block'
};


document.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        event.preventDefault();
        console.log('La combinación de teclas Control + P está deshabilitada.');
    }
});


window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    modal.style.display = 'block';
});