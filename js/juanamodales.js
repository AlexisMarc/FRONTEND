/*================ MODAL REGISTRAR PUBLICACION =================*/

const abrir = document.getElementById('abrirpubli');
const modal_container = document.getElementById('modalregpubli');
const cerrar = document.getElementById('cerrarpubli');

abrir.addEventListener('click', () => {
    modal_container.classList.add('show');
});

cerrar.addEventListener('click', () => {
    modal_container.classList.remove('show');
});