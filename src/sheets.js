let pedidos;
let filaPedido;
let cargado;

async function getPedidos() {
    let response;
    let response2;
    let sebastian;
    try {
        //conexion con los sheets
        response = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1zjjoOVeIl11Ytg5grWpP_Z4BxlEbjMJYwjNpLebGbSg',
            range: 'pedidos!A:BJ',
        });
        response2 = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1zjjoOVeIl11Ytg5grWpP_Z4BxlEbjMJYwjNpLebGbSg',
            range: 'copia!A:BJ',
        });
    } catch (err) {
        console.error(err)
        return;
    }

    try{
    sebastian = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1zjjoOVeIl11Ytg5grWpP_Z4BxlEbjMJYwjNpLebGbSg',
        range: 'pedidosSebastian!A:BJ',
    });
    } catch (err) {
        console.error("Error al intentar cargar el Formulario de Sebastian: " +err)
        return;
    }


    const range = response.result;
    if (!range || !range.values || range.values.length == 0) {
        //Enviando un mensaje por consola en caso de que no se encuentren datos
        console.warn("No se encontraron valores")
        return;
    }
    const copia = response2.result;
    if (!copia || !copia.values || copia.values.length == 0) {
        console.warn("No se encontraron valores en la copia")
        return;
    }
    //obteniendo la cantidad de filas en la hoja de copia
    filaPedido = copia.values.length + 1;

    pedidos = [];
    range.values.forEach((fila) => {
        //guardamos los datos de los pedidos en el sheet en un objeto
        if (isNaN(parseInt(fila[0]))) return;
        const nuevoPedido = {
            pedido: fila[0],
            fecha: fila[1],
            cuenta: fila[2],
            nombre1: fila[3],
            apellido: fila[4],
            direccion: fila[5],
            telefono: fila[6],
            barrio: fila[7],
            empresa: fila[8],
            telefono2: fila[9],
            direccion2: fila[10],
            cargo: fila[11],
            antiguo: fila[12],
            sueldo: fila[13],
            email: fila[14],
            fCobro: fila[15],
            nNino: fila[16],
            ciudad: fila[17],
            cNomb: fila[18],
            cApell: fila[19],
            cEmpresa: fila[20],
            cTele: fila[21],
            cDir: fila[22],
            cCargo: fila[23],
            cAntig: fila[24],
            cSueldo: fila[25],
            rNomb1: fila[26],
            rp1: fila[27],
            rTele1: fila[28],
            rTeleres1: fila[29],
            rNomb2: fila[30],
            rp2: fila[31],
            rTele2: fila[32],
            rTeleres2: fila[33],
            rNomb3: fila[34],
            rp3: fila[35],
            rTele3: fila[36],
            rTeleres3: fila[37],
            rNomb4: fila[38],
            rp4: fila[39],
            rTele4: fila[40],
            rTeleres4: fila[41],
            oCuotas: fila[42],
            oValor: fila[43],
            cedula1: fila[44],
            cc1: fila[45],
            ce1: fila[46],
            relacionista: fila[47],
            colaborador: fila[48],
            director: fila[49],
            organizador: fila[50],
            cedula2: fila[51],
            cc2: fila[52],
            ce2: fila[53],
            cedula3: fila[54],
            cedula4: fila[55],
            detColec: fila[56],
            detValor: fila[57],
            totalVal: fila[58],
            nCoutas: fila[59],
            vrCuota: fila[60],
            observ: fila[61]
        };
        pedidos.push(nuevoPedido);
    });

    try{
        pedidosSeb = [];
        const rangeSeb = sebastian.result;
        rangeSeb.values.forEach((fila2) => {
            //guardamos los datos de los pedidos en el sheet en un objeto
            if (isNaN(parseInt(fila2[0]))) return;
            const nuevoPedidoSeb = {
                pedido: fila2[0],
                fecha: fila2[1],
                cuenta: fila2[2],
                nombre1: fila2[3],
                apellido: fila2[4],
                direccion: fila2[5],
                telefono: fila2[6],
                barrio: fila2[7],
                empresa: fila2[8],
                telefono2: fila2[9],
                direccion2: fila2[10],
                cargo: fila2[11],
                antiguo: fila2[12],
                sueldo: fila2[13],
                email: fila2[14],
                fCobro: fila2[15],
                nNino: fila2[16],
                ciudad: fila2[17],
                cNomb: fila2[18],
                cApell: fila2[19],
                cEmpresa: fila2[20],
                cTele: fila2[21],
                cDir: fila2[22],
                cCargo: fila2[23],
                cAntig: fila2[24],
                cSueldo: fila2[25],
                rNomb1: fila2[26],
                rp1: fila2[27],
                rTele1: fila2[28],
                rTeleres1: fila2[29],
                rNomb2: fila2[30],
                rp2: fila2[31],
                rTele2: fila2[32],
                rTeleres2: fila2[33],
                rNomb3: fila2[34],
                rp3: fila2[35],
                rTele3: fila2[36],
                rTeleres3: fila2[37],
                rNomb4: fila2[38],
                rp4: fila2[39],
                rTele4: fila2[40],
                rTeleres4: fila2[41],
                oCuotas: fila2[42],
                oValor: fila2[43],
                cedula1: fila2[44],
                cc1: fila2[45],
                ce1: fila2[46],
                relacionista: fila2[47],
                colaborador: fila2[48],
                director: fila2[49],
                organizador: fila2[50],
                cedula2: fila2[51],
                cc2: fila2[52],
                ce2: fila2[53],
                cedula3: fila2[54],
                cedula4: fila2[55],
                detColec: fila2[56],
                detValor: fila2[57],
                totalVal: fila2[58],
                nCoutas: fila2[59],
                vrCuota: fila2[60],
                observ: fila2[61]
            };
            pedidosSeb.push(nuevoPedidoSeb)
        });        
        } catch (err) {
            console.error("Error al cargar los datos del formulario de Sebastian: " +err)
            return;
        }

}

async function editPedidos() {
    const filaEditar = pedidos.findIndex(pedidos => parseInt(pedidos.pedido) === parseInt($pedido.value)) + 2;

    if (pedidos.findIndex(pedidos => parseInt(pedidos.pedido) === parseInt($pedido.value)) >= 0 && $pedido.value !== "") {
        quitarEspacios();
        let copiaAnterior = Object.values(pedidos[filaEditar - 2]);
        const update = [
            $pedido.value,
            $fecha.value,
            $cuenta.value,
            $nombre1.value.trim(),
            $apellido.value.trim(),
            $direccion.value.trim(),
            $telefono.value.trim(),
            $barrio.value,
            $empresa.value,
            $telefono2.value.trim(),
            $direccion2.value,
            $cargo.value,
            $antiguo.value,
            $sueldo.value,
            $email.value,
            $fCobro.value,
            $nNino.value.trim(),
            $ciudad.value.trim(),
            $cNomb.value.trim(),
            $cApell.value.trim(),
            $cEmpresa.value,
            $ctele.value.trim(),
            $cDir.value,
            $cCargo.value,
            $cAntig.value,
            $cSueldo.value,
            $rNomb1.value,
            $rp1.value,
            $rTele1.value,
            $rTeleres1.value,
            $rNomb2.value,
            $rp2.value,
            $rTele2.value,
            $rTeleres2.value,
            $rNomb3.value,
            $rp3.value,
            $rTele3.value,
            $rTeleres3.value,
            $rNomb4.value,
            $rp4.value,
            $rTele4.value,
            $rTeleres4.value,
            $oCuotas.value,
            $oValor.value,
            $cedula1.value,
            $cc1.value.trim(),
            $ce1.value,
            $relacionista.value,
            $colaborador.value,
            $director.value,
            $organizador.value,
            $cedula2.value,
            $cc2.value,
            $ce2.value,
            $cedula3.value,
            $cedula4.value,
            $detColec.value,
            $detValor.value,
            $totalVal.value,
            $nCoutas.value,
            $vrCuota.value,
            $observ.value
        ];

        response = await gapi.client.sheets.spreadsheets.values.update({
            spreadsheetId: '1zjjoOVeIl11Ytg5grWpP_Z4BxlEbjMJYwjNpLebGbSg',
            range: `pedidos!A${filaEditar}:BJ${filaEditar}`,
            values: [update],
            valueInputOption: "USER_ENTERED"
        });

        response = await gapi.client.sheets.spreadsheets.values.update({
            spreadsheetId: '1zjjoOVeIl11Ytg5grWpP_Z4BxlEbjMJYwjNpLebGbSg',
            range: `copia!A${filaPedido}:BJ${filaPedido}`,
            values: [copiaAnterior],
            valueInputOption: "USER_ENTERED"
        });
        await resaltarCampos();
        await getPedidos();
        guardarPdf();
    } else {
        alert("No se ha podido realizar la actualización, pedido no encontrado");
    }
}

async function buscarPedido() {
    //buscamos el pedido
    const Encontrado = pedidos.findIndex(pedidos => parseInt(pedidos.pedido) === parseInt($pedido.value));

    if (Encontrado >= 0) {
        //si encontramos el pedido, llevamos los datos al formulario
        const pedidoEncontrado = pedidos[Encontrado];

        $pedido.value = parseInt(pedidoEncontrado.pedido);
        $fecha.value = pedidoEncontrado.fecha;
        $cuenta.value = pedidoEncontrado.cuenta;
        $nombre1.value = pedidoEncontrado.nombre1;
        $apellido.value = pedidoEncontrado.apellido;
        $direccion.value = pedidoEncontrado.direccion;
        $telefono.value = pedidoEncontrado.telefono;
        $barrio.value = pedidoEncontrado.barrio;
        $empresa.value = pedidoEncontrado.empresa;
        $telefono2.value = pedidoEncontrado.telefono2;
        $direccion2.value = pedidoEncontrado.direccion2;
        $cargo.value = pedidoEncontrado.cargo;
        $antiguo.value = pedidoEncontrado.antiguo;
        $sueldo.value = pedidoEncontrado.sueldo;
        $email.value = pedidoEncontrado.email;
        $fCobro.value = pedidoEncontrado.fCobro;
        $nNino.value = pedidoEncontrado.nNino;
        $ciudad.value = pedidoEncontrado.ciudad;
        $cNomb.value = pedidoEncontrado.cNomb;
        $cApell.value = pedidoEncontrado.cApell;
        $cEmpresa.value = pedidoEncontrado.cEmpresa;
        $ctele.value = pedidoEncontrado.cTele;
        $cDir.value = pedidoEncontrado.cDir;
        $cCargo.value = pedidoEncontrado.cCargo;
        $cAntig.value = pedidoEncontrado.cAntig;
        $cSueldo.value = pedidoEncontrado.cSueldo;
        $rNomb1.value = pedidoEncontrado.rNomb1;
        $rp1.value = pedidoEncontrado.rp1;
        $rTele1.value = pedidoEncontrado.rTele1;
        $rTeleres1.value = pedidoEncontrado.rTeleres1;
        $rNomb2.value = pedidoEncontrado.rNomb2;
        $rp2.value = pedidoEncontrado.rp2;
        $rTele2.value = pedidoEncontrado.rTele2;
        $rTeleres2.value = pedidoEncontrado.rTeleres2;
        $rNomb3.value = pedidoEncontrado.rNomb3;
        $rp3.value = pedidoEncontrado.rp3;
        $rTele3.value = pedidoEncontrado.rTele3;
        $rTeleres3.value = pedidoEncontrado.rTeleres3;
        $rNomb4.value = pedidoEncontrado.rNomb4;
        $rp4.value = pedidoEncontrado.rp4;
        $rTele4.value = pedidoEncontrado.rTele4;
        $rTeleres4.value = pedidoEncontrado.rTeleres4;
        $oCuotas.value = pedidoEncontrado.oCuotas;
        $oValor.value = pedidoEncontrado.oValor;
        $cedula1.value = pedidoEncontrado.cedula1;
        $cc1.value = pedidoEncontrado.cc1;
        $ce1.value = pedidoEncontrado.ce1;
        $relacionista.value = pedidoEncontrado.relacionista;
        $colaborador.value = pedidoEncontrado.colaborador;
        $director.value = pedidoEncontrado.director;
        $organizador.value = pedidoEncontrado.organizador;
        $cedula2.value = pedidoEncontrado.cedula2;
        $cc2.value = pedidoEncontrado.cc2;
        $ce2.value = pedidoEncontrado.ce2;
        $cedula3.value = pedidoEncontrado.cedula3;
        $cedula4.value = pedidoEncontrado.cedula4;
        $detColec.value = pedidoEncontrado.detColec;
        $detValor.value = pedidoEncontrado.detValor;
        $totalVal.value = pedidoEncontrado.totalVal;
        $nCoutas.value = pedidoEncontrado.nCoutas;
        $vrCuota.value = pedidoEncontrado.vrCuota;
        $observ.value = pedidoEncontrado.observ;
        alert("Pedido encontrado");


    } else {
        //si no se encontro el numero de pedido, se le indica al usuario
        console.log("No existe el pedido");
        alert("Numero de pedido no encontrado");
    }

    try{
        const Encontrado = pedidosSeb.findIndex(pedidosSeb => parseInt(pedidosSeb.cedula1) === parseInt($cedula1.value));
        if($pedido.value === "" && $cedula1.value !== "" && Encontrado >= 0){

        //si encontramos el pedido, llevamos Encontrado datos al formulario
        const pedidoEncontrado = pedidosSeb[Encontrado];

        $pedido.value = parseInt(pedidoEncontrado.pedido);
        $fecha.value = pedidoEncontrado.fecha;
        $cuenta.value = pedidoEncontrado.cuenta;
        $nombre1.value = pedidoEncontrado.nombre1;
        $apellido.value = pedidoEncontrado.apellido;
        $direccion.value = pedidoEncontrado.direccion;
        $telefono.value = pedidoEncontrado.telefono;
        $barrio.value = pedidoEncontrado.barrio;
        $empresa.value = pedidoEncontrado.empresa;
        $telefono2.value = pedidoEncontrado.telefono2;
        $direccion2.value = pedidoEncontrado.direccion2;
        $cargo.value = pedidoEncontrado.cargo;
        $antiguo.value = pedidoEncontrado.antiguo;
        $sueldo.value = pedidoEncontrado.sueldo;
        $email.value = pedidoEncontrado.email;
        $fCobro.value = pedidoEncontrado.fCobro;
        $nNino.value = pedidoEncontrado.nNino;
        $ciudad.value = pedidoEncontrado.ciudad;
        $cNomb.value = pedidoEncontrado.cNomb;
        $cApell.value = pedidoEncontrado.cApell;
        $cEmpresa.value = pedidoEncontrado.cEmpresa;
        $ctele.value = pedidoEncontrado.cTele;
        $cDir.value = pedidoEncontrado.cDir;
        $cCargo.value = pedidoEncontrado.cCargo;
        $cAntig.value = pedidoEncontrado.cAntig;
        $cSueldo.value = pedidoEncontrado.cSueldo;
        $rNomb1.value = pedidoEncontrado.rNomb1;
        $rp1.value = pedidoEncontrado.rp1;
        $rTele1.value = pedidoEncontrado.rTele1;
        $rTeleres1.value = pedidoEncontrado.rTeleres1;
        $rNomb2.value = pedidoEncontrado.rNomb2;
        $rp2.value = pedidoEncontrado.rp2;
        $rTele2.value = pedidoEncontrado.rTele2;
        $rTeleres2.value = pedidoEncontrado.rTeleres2;
        $rNomb3.value = pedidoEncontrado.rNomb3;
        $rp3.value = pedidoEncontrado.rp3;
        $rTele3.value = pedidoEncontrado.rTele3;
        $rTeleres3.value = pedidoEncontrado.rTeleres3;
        $rNomb4.value = pedidoEncontrado.rNomb4;
        $rp4.value = pedidoEncontrado.rp4;
        $rTele4.value = pedidoEncontrado.rTele4;
        $rTeleres4.value = pedidoEncontrado.rTeleres4;
        $oCuotas.value = pedidoEncontrado.oCuotas;
        $oValor.value = pedidoEncontrado.oValor;
        $cedula1.value = pedidoEncontrado.cedula1;
        $cc1.value = pedidoEncontrado.cc1;
        $ce1.value = pedidoEncontrado.ce1;
        $relacionista.value = pedidoEncontrado.relacionista;
        $colaborador.value = pedidoEncontrado.colaborador;
        $director.value = pedidoEncontrado.director;
        $organizador.value = pedidoEncontrado.organizador;
        $cedula2.value = pedidoEncontrado.cedula2;
        $cc2.value = pedidoEncontrado.cc2;
        $ce2.value = pedidoEncontrado.ce2;
        $cedula3.value = pedidoEncontrado.cedula3;
        $cedula4.value = pedidoEncontrado.cedula4;
        $detColec.value = pedidoEncontrado.detColec;
        $detValor.value = pedidoEncontrado.detValor;
        $totalVal.value = pedidoEncontrado.totalVal;
        $nCoutas.value = pedidoEncontrado.nCoutas;
        $vrCuota.value = pedidoEncontrado.vrCuota;
        $observ.value = pedidoEncontrado.observ;
        alert("Pedido encontrado");

        }
    } catch (err){
        console.log("Error al tratar de ubicar el pedido de sebastian: " + err)
    }
}

async function nuevoPedido() {
    
    if (!cargado || cargado !== 1 ) {

        if ((pedidos.length >= 0 || !cargado) && (cedula1.value.length >= 5 && validarnombreyapellido($nombre1) && validarnombreyapellido($apellido) && validarnombreyapellido($ciudad)  && validardireccion($direccion) && validarcaracteres($direccion) && validarcaracteres($nNino) && validarcaracteres($email) && validaremail($email)) ) {
            quitarEspacios();
            const filaNueva = pedidos.length + 2;
            let pedidoNuevo = (parseInt(pedidos[pedidos.length - 1].pedido) + 1);
            $pedido.value = pedidoNuevo;

            const update = [
                pedidoNuevo,
                $fecha.value,
                $cuenta.value,
                $nombre1.value.trim(),
                $apellido.value.trim(),
                $direccion.value.trim(),
                $telefono.value,
                $barrio.value,
                $empresa.value,
                $telefono2.value,
                $direccion2.value,
                $cargo.value,
                $antiguo.value,
                $sueldo.value,
                $email.value.trim(),
                $fCobro.value,
                $nNino.value.trim(),
                $ciudad.value.trim(),
                $cNomb.value.trim(),
                $cApell.value.trim(),
                $cEmpresa.value,
                $ctele.value.trim(),
                $cDir.value,
                $cCargo.value,
                $cAntig.value,
                $cSueldo.value,
                $rNomb1.value,
                $rp1.value,
                $rTele1.value,
                $rTeleres1.value,
                $rNomb2.value,
                $rp2.value,
                $rTele2.value,
                $rTeleres2.value,
                $rNomb3.value,
                $rp3.value,
                $rTele3.value,
                $rTeleres3.value,
                $rNomb4.value,
                $rp4.value,
                $rTele4.value,
                $rTeleres4.value,
                $oCuotas.value,
                $oValor.value,
                $cedula1.value.trim(),
                $cc1.value,
                $ce1.value,
                $relacionista.value,
                $colaborador.value,
                $director.value,
                $organizador.value,
                $cedula2.value,
                $cc2.value,
                $ce2.value,
                $cedula3.value,
                $cedula4.value,
                $detColec.value,
                $detValor.value,
                $totalVal.value,
                $nCoutas.value,
                $vrCuota.value,
                $observ.value
            ];

            response = await gapi.client.sheets.spreadsheets.values.update({
                spreadsheetId: '1zjjoOVeIl11Ytg5grWpP_Z4BxlEbjMJYwjNpLebGbSg',
                range: `pedidos!A${filaNueva}:BJ${filaNueva}`,
                values: [update],
                valueInputOption: "USER_ENTERED"
            });
            getPedidos();
            cargado = 1;
        }
    } else if( $pedido.value >=1 && cedula1.value.length >= 5 && (validarnombreyapellido($nombre1) && validarnombreyapellido($apellido) && validarnombreyapellido($ciudad)  && validardireccion($direccion) && validarcaracteres($direccion) && validarcaracteres($nNino) && validarcaracteres($email) && validaremail($email)) ){
        editPedidos();
    }
}

function quitarEspacios(){
    /*$telefono.value = $telefono.value.replace(/\s/g, '');
    $organizador.value = $organizador.value.replace(/\s/g, '');
    $ctele.value = $ctele.value.replace(/\s/g, '');
    $telefono2.value = $telefono2.value.replace(/\s/g, '');
    $rTele1.value = $rTele1.value.replace(/\s/g, '');
    $rTeleres1.value = $rTeleres1.value.replace(/\s/g, '');
    $rTele2.value = $rTele2.value.replace(/\s/g, '');
    $rTeleres2.value = $rTeleres2.value.replace(/\s/g, '');
    $rTele3.value = $rTele3.value.replace(/\s/g, '');
    $rTeleres3.value = $rTeleres3.value.replace(/\s/g, '');
    $rTele4.value = $rTele4.value.replace(/\s/g, '');
    $rTeleres4.value = $rTeleres4.value.replace(/\s/g, '');*/

    if ($telefono.value.startsWith('+')) {
        // Agregar una comilla simple al principio del número
        $telefono.value = "'" + $telefono.value;
    }
    if ($organizador.value.startsWith('+')) {
        $organizador.value = "'" + $organizador.value;
    }
    if ($ctele.value.startsWith('+')) {
        $ctele.value = "'" + $ctele.value;
    }
    if ($telefono2.value.startsWith('+')) {
        $telefono2.value = "'" + $telefono2.value;
    }
    if ($rTele1.value.startsWith('+')) {
        $rTele1.value = "'" + $rTele1.value;
    }
    if ($rTeleres1.value.startsWith('+')) {
        $rTeleres1.value = "'" + $rTeleres1.value;
    }
    if ($rTele2.value.startsWith('+')) {
        $rTele2.value = "'" + $rTele2.value;
    }
    if ($rTeleres2.value.startsWith('+')) {
        $rTeleres2.value = "'" + $rTeleres2.value;
    }
    if ($rTele3.value.startsWith('+')) {
        $rTele3.value = "'" + $rTele3.value;
    }
    if ($rTeleres3.value.startsWith('+')) {
        $rTeleres3.value = "'" + $rTeleres3.value;
    }
    if ($rTele4.value.startsWith('+')) {
        $rTele4.value = "'" + $rTele4.value;
    }
    if ($rTeleres4.value.startsWith('+')) {
        $rTeleres4.value = "'" + $rTeleres4.value;
    }
}