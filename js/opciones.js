const cerrar = document.getElementById('cerrarSesion');

cerrar.addEventListener('click', ()=>{

    localStorage.clear('usuarioLocal');
    window.location.href = 'index.html'

})