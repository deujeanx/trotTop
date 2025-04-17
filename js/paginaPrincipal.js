const userHeader = document.getElementById('user')

// localStorage.clear();

// Detecta si el usuario ya ha sido registrado y pone un iconito bien bonito

const localusuario = localStorage.getItem('usuarioLocal');
let usuario = localusuario ? JSON.parse(localusuario) : NaN;


if (!usuario) {

    userHeader.addEventListener('click', ()=> window.location.href = 'registro.html')

    const icono = document.createElement('i');
    icono.classList.add("fa-user", "fa-solid", "text-black");

    userHeader.appendChild(icono);

} else {

    const imagen = document.createElement('img');
    imagen.src = usuario.image;
    imagen.classList.add('img-fluid', 'iconoUsuario')

    userHeader.appendChild(imagen);

}

console.log(usuario)