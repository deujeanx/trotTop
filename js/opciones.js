const cerrar = document.getElementById('cerrarSesion');

cerrar.addEventListener('click', ()=>{

    localStorage.clear('usuarioLocal');
    window.location.href = 'index.html';

});

const comentarios = document.getElementById('comentarios');


comentarios.addEventListener('click', ()=> {

    window.location.href = 'comentarios.html';

});

const amigos = document.getElementById('amigos');

amigos.addEventListener('click', ()=> {

    window.location.href = 'amigos.html';

})