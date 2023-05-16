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

function validarEntradas(){
    let cantEntradas = document.getElementById('recipient-entradas').value;
    if (cantEntradas>=1) {
        return cantEntradas
    }
    if(cantEntradas == '' && cantEntradas < 1)
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
            compra_container.classList.add('show');
        });
        cerrar.addEventListener('click', () => {
            compra_container.classList.remove('show');
        });
    }else{
        alert('Revisar los campos ingresados')
    }
    
}

function compraTicket(){
    let entradas = validarEntradas();
    let descuento = document.getElementById('recipient-descuentos').value;
    const precioFinal = document.getElementById('total');
    precioFinal.innerHTML = (entradas * 1000) * (1 - (descuento/100));
}

