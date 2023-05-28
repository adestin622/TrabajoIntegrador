const open = document.getElementById('enviar');
const modal_container = document.getElementById('ventana_modal');
const close = document.getElementById('cerrar');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});
close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});


/* 
    Funciones usadas para la compra del ticket
*/

function limpiarCampos(){
    document.getElementById('orador-nom').value = '';
    document.getElementById('orador-ape').value = '';
    document.getElementById('txt-area').value = '';
}

function limpiarCompra(){
    document.getElementById('recipient-name').value = '';
    document.getElementById('recipient-apellido').value = '';
    document.getElementById('recipient-telefono').value = '';
    document.getElementById('recipient-email').value = '';
    document.getElementById('recipient-entradas').value = 1;
    document.getElementById('message-text').value = '';
}

function validarEntradas(){
    let cantEntradas = document.getElementById('recipient-entradas').value;
    if (cantEntradas>=1) {
        return cantEntradas
    }
    if(cantEntradas == '' && cantEntradas < 1 || cantEntradas != [1,2,3,4,5,6,7,8,9])
    {
        alert('Ingrese la cantidad de entradas')
        cantEntradas.value = 1;
    }
}

function validarRegistro(){
    let email = document.getElementById('recipient-email').value;
    if (email.includes('@')) {
        const abrir = document.getElementById('comprar');
        const compra_container = document.getElementById('ventana_modal_compra');
        const cerrar = document.getElementById('cerrar_compra');

        abrir.addEventListener('click', () => {
            resumen()
            compra_container.classList.add('show');
        });
        cerrar.addEventListener('click', () => {
            compra_container.classList.remove('show');
        });
    }else{
        alert('Revisar los campos ingresados')
    }
    
}

function resetTotal(){
    document.getElementById('total').innerHTML = "$0"
}

function compraTicket(){
    let entradas = validarEntradas();
    let descuento = document.getElementById('recipient-descuentos').value;
    const precioFinal = document.getElementById('total');
    subtotal = entradas * 1000
    calcDescuento = 1 - (descuento/100)
    precioFinal.innerHTML = "$" + Math.round(subtotal * calcDescuento);
}
function resumen(){
    let client = document.getElementById('res_cliente')
    let var_email = document.getElementById('res_email')
    let var_entradas = document.getElementById('res_entradas')
    let var_descuento = document.getElementById('res_descuento')
    let var_total = document.getElementById('res_total')

    client.innerHTML = document.getElementById('recipient-name').value + " " + document.getElementById('recipient-apellido').value
    var_email.innerHTML = document.getElementById('recipient-email').value
    var_entradas.innerHTML = document.getElementById('recipient-entradas').value
    var_descuento.innerHTML = document.getElementById('recipient-descuentos').options[document.getElementById('recipient-descuentos').selectedIndex].text + " " + document.getElementById('recipient-descuentos').value+"%"
    var_total.innerHTML = document.getElementById('total').innerHTML
}

