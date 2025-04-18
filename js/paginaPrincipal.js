const userHeader = document.getElementById('user');
const cuerpoHabitos = document.getElementById('cuerpoHabitos');

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
    imagen.addEventListener('click', ()=> window.location.href = 'opciones.html');
    imagen.classList.add('img-fluid', 'iconoUsuario');

    userHeader.appendChild(imagen);

}

// Imprime habitos segun usuario

if (!usuario.habitos){

    const crearHabito = document.createElement('div');

    if(!usuario){

        crearHabito.addEventListener('click', ()=> window.location.href = 'registro.html')

    } else {

        crearHabito.addEventListener('click', ()=> window.location.href = 'habitos.html')

    }

    
    crearHabito.classList.add('rounded-circle', 'text-white', 'circulo-añadir');
    crearHabito.style.backgroundColor = '#003249';
    const icono = document.createElement('i');
    icono.classList.add('fa-solid', 'fa-plus');

    crearHabito.appendChild(icono);

    cuerpoHabitos.appendChild(crearHabito);

};