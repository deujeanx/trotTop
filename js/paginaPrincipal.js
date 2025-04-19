const userHeader = document.getElementById('user');
const cuerpoHabitos = document.getElementById('cuerpoHabitos');
const divAgregar = document.getElementById('agregarHabito');

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

    cuerpoHabitos.classList.add('d-flex')
    cuerpoHabitos.appendChild(crearHabito);

} else {

    const crearHabito = document.createElement('div');
    crearHabito.classList.add('rounded-circle', 'text-white', 'circulo-añadir');
    crearHabito.style.backgroundColor = '#003249';
    const icono = document.createElement('i');
    icono.classList.add('fa-solid', 'fa-plus');
    crearHabito.addEventListener('click', ()=> window.location.href = 'habitos.html');
    crearHabito.appendChild(icono);

    divAgregar.appendChild(crearHabito);

    // Imprime uno por uno los habitos que tenga el usuario

    usuario.habitos.forEach(habito => {

        const div = document.createElement('div');
        div.classList.add('col-12', 'rounded', 'd-flex', 'fondo-oscuro', 'mt-2', 'p-2');
        
        const divIcono = document.createElement('div');
        div.classList.add('col-2', 'fs-1', 'ms-2');

        divIcono.innerHTML = habito.icono;

        const divTitulo = document.createElement('div');
        divTitulo.classList.add('col-5', 'ms-5', 'mt-2', 'align-self-center');

        const titulo =document.createElement('h3');
        titulo.textContent = habito.nameHabito;

        divTitulo.appendChild(titulo);
        
        div.appendChild(divIcono)
        div.appendChild(divTitulo)

        cuerpoHabitos.appendChild(div);

    })


}