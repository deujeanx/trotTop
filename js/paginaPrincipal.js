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

        const divRacha = document.createElement('div');
        const racha = document.createElement('i');

        racha.classList.add('fa-solid', 'fa-fire', 'color-yellow');

        divRacha.classList.add('col','d-flex','justify-content-end');

        const numero = document.createElement('p');
        numero.textContent = habito.racha;

        divRacha.appendChild(racha);
        divRacha.appendChild(numero);
        
        div.appendChild(divIcono);
        div.appendChild(divTitulo);
        div.appendChild(divRacha)

        if(habito.nameHabito == "Ejercicio"){

            div.addEventListener('click', ()=> window.location.href = 'ejercicio.html')

        } else if(habito.nameHabito == 'Tomar agua'){

            div.addEventListener('click', ()=> window.location.href = 'agua.html')

        } else if (habito.nameHabito == 'Lectura'){

            div.addEventListener('click', ()=> window.location.href = 'lectura.html')

        } else {

            console.log(habito.nameHabito)

            div.addEventListener('click', ()=>  {

                localStorage.setItem('habito', habito.nameHabito);
                window.location.href = 'habitoPersonal.html';


            })

        }

        cuerpoHabitos.appendChild(div);

        

    })


}

// Revisa las rachas que el usuario ha perdido

if (usuario.habitos){

    const urlApi = "https://67feaea558f18d7209ef0910.mockapi.io/usuarios/" +  usuario.id

    const hoy = new Date()

    usuario.habitos.forEach(habito => {


        const UltimaRacha = new Date(habito.diaUltimaRacha)

        const diferencia = hoy-UltimaRacha;
        
        if(diferencia >= Math.floor(2*(1000*60*60*24))){

            habito.racha = 0;

            fetch(urlApi, {

                method: 'PUT',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({habitos: usuario.habitos})

            }).then(exito => {

                console.log("Racha perdida")
                alert("Ups Acabas de perder tu racha de " + habito.nameHabito);

                localStorage.setItem('usuarioLocal', JSON.stringify(usuario));

            }).catch(error => {

                console.log("UPS" , error);

            })

        }


    })

}