let pedidos;
let filaPedido;
let cargado;

async function getPedidos() {
    let response;
    let response2;
    try {
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
    const range = response.result;
    if (!range || !range.values || range.values.length == 0) {
        console.warn("No se encontraron valores")
        return;
    }
    const copia = response2.result;
    if (!copia || !copia.values || copia.values.length == 0) {
        console.warn("No se encontraron valores en la copia")
        return;
    }
    filaPedido = copia.values.length + 1;

    pedidos = [];
    range.values.forEach((fila) => {
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

}

async function editPedidos() {
    const filaEditar = pedidos.findIndex(pedidos => parseInt(pedidos.pedido) === parseInt($pedido.value)) + 2;

    if (pedidos.findIndex(pedidos => parseInt(pedidos.pedido) === parseInt($pedido.value)) >= 0) {
        let copiaAnterior = Object.values(pedidos[filaEditar - 2]);
        const update = [
            $pedido.value,
            $fecha.value,
            $cuenta.value,
            $nombre1.value,
            $apellido.value,
            $direccion.value,
            $telefono.value,
            $barrio.value,
            $empresa.value,
            $telefono2.value,
            $direccion2.value,
            $cargo.value,
            $antiguo.value,
            $sueldo.value,
            $email.value,
            $fCobro.value,
            $nNino.value,
            $ciudad.value,
            $cNomb.value,
            $cApell.value,
            $cEmpresa.value,
            $ctele.value,
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
        resaltarCampos();
        getPedidos();
        guardarPdf();
    } else {
        alert("No se ha podido realizar la actualización, pedido no encontrado");
    }
}

async function buscarPedido() {
    const Encontrado = pedidos.findIndex(pedidos => parseInt(pedidos.pedido) === parseInt($pedido.value));

    if (Encontrado >= 0) {
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
        console.log("La posición proporcionada está fuera de rango.");
        alert("Numero de pedido no encontrado");
    }
}

async function nuevoPedido() {

    if (!cargado || cargado !== 1 ) {

        if (pedidos.length >= 0 || !cargado) {
            const filaNueva = pedidos.length + 2;
            let pedidoNuevo = (parseInt(pedidos[pedidos.length - 1].pedido) + 1);
            $pedido.value = pedidoNuevo;

            const update = [
                pedidoNuevo,
                $fecha.value,
                $cuenta.value,
                $nombre1.value,
                $apellido.value,
                $direccion.value,
                $telefono.value,
                $barrio.value,
                $empresa.value,
                $telefono2.value,
                $direccion2.value,
                $cargo.value,
                $antiguo.value,
                $sueldo.value,
                $email.value,
                $fCobro.value,
                $nNino.value,
                $ciudad.value,
                $cNomb.value,
                $cApell.value,
                $cEmpresa.value,
                $ctele.value,
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
    } else {
        editPedidos();
    }
}