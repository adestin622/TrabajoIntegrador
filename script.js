const open = document.getElementById('enviar');
const modal_container = document.getElementById('ventana_modal');
const close = document.getElementById('cerrar');
open.addEventListener('click', () => {
    modal_container.classList.add('show');
});
close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

function limpiarCampos(){
    document.getElementById('orador-nom').value = '';
    document.getElementById('orador-ape').value = '';
    document.getElementById('txt-area').value = '';
}

