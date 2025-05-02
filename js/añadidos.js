const cuerpo = document.getElementById('cuerpo');

let usuario = JSON.parse(localStorage.getItem('usuarioLocal'));

const tituloModal = document.getElementById('tituloModal');
const cuerpoModal = document.getElementById('cuerpoModal');

let url;

// Imprime los amigos que el usuario alla agregado

console.log(usuario)

usuario.amigos.forEach(amigo => {

    url = "https://67feaea558f18d7209ef0910.mockapi.io/usuarios/" + amigo;

    fetch(url).then(amigoUsuario => {

        return amigoUsuario.json();

    }).then(amigoUsuario => {

        const columna = document.createElement('div');
        columna.classList.add('col-11', 'rounded', 'mt-2' , 'fondo-oscuro');

        const columnaImagen = document.createElement('div');
        columnaImagen.setAttribute('id', 'user');
        columnaImagen.classList.add('rounded-circle');

        const image = document.createElement('img');
        image.classList.add('img-fluid', 'iconoUsuario');
        image.src = amigoUsuario.image;

        const boton = document.createElement('button');
        boton.classList.add('btn', 'rounded' , 'fondo-oscuro');
        boton.setAttribute('data-bs-toggle', 'modal');
        boton.setAttribute('data-bs-target', '#ventana');
        boton.addEventListener('click', ()=> imprimirModal(amigoUsuario.id));

        columnaImagen.appendChild(image)

        console.log(amigoUsuario.name)


        const h2 = document.createElement('h2');
        h2.textContent = amigoUsuario.name

        const columnaNombre = document.createElement('div');
        columnaNombre.classList.add('col-2')
        columnaNombre.appendChild(h2)

        boton.appendChild(columnaImagen);
        boton.appendChild(columnaNombre);

        cuerpo.appendChild(boton)

    })

})


function imprimirModal(idAmigo) {

    url = "https://67feaea558f18d7209ef0910.mockapi.io/usuarios/" + idAmigo;

    tituloModal.innerHTML = "";
    cuerpoModal.innerHTML = "";

    fetch(url).then(amigo => {

        return amigo.json();

    }).then(amigo => {

        tituloModal.textContent = amigo.name;

        amigo.habitos.forEach(habito => {

            const p = document.createElement('p');
            p.textContent = habito.nameHabito + " : Racha de días " + habito.racha; 

            cuerpoModal.appendChild(p)

        })
        
    })

}
