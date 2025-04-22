const cuerpo = document.getElementById('cuerpoComentarios');

let usuario = JSON.parse(localStorage.getItem('usuarioLocal'));

console.log(usuario)

const url = "https://67feaea558f18d7209ef0910.mockapi.io/usuarios/1/comentarios";

const botonEnviar = document.getElementById('enviar');

imprimirComentarios();

// Opcion para enviar el comentario que el usuario escribio

botonEnviar.addEventListener('click', ()=> {

    const texto = document.getElementById('comentario').value;

    if (texto) {

        const comentario = {userId: usuario.id, userName:usuario.name, userImage: usuario.image, texto: texto}

        fetch(url, {

            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(comentario)

        }).then(exito=> {

            console.log('Comentario subido con exito');
            const comentario = document.getElementById('comentario');
            comentario.value = "";
            imprimirComentarios();

        }).catch(error =>{

            console.log('error' ,  error)

        })


    }

})

// Imprime todos los comentarios subidos a la appi

function imprimirComentarios() {

    fetch(url).then(comentarios => {

        return comentarios.json();

    }).then(comentarios => {

        cuerpo.innerHTML = ""

        comentarios.forEach(comentario => {

            

            const row = document.createElement('div');
            row.classList.add('row', 'd-flex');

            const image = document.createElement('img');
            image.src = comentario.userImage;
            image.classList.add('img-fluid', 'icono-usuario', 'rounded-circle');

            const divImage = document.createElement('div');
            divImage.classList.add('col-1')

            divImage.appendChild(image);

            row.appendChild(divImage)

            const nombre = document.createElement('h3');
            nombre.classList.add('color-oscuro')
            nombre.textContent = comentario.userName;

            const divNombre = document.createElement('div');
            divNombre.classList.add('col');
            divNombre.appendChild(nombre);

            row.appendChild(divNombre);

            const textoAgregar = document.createElement('p');
            textoAgregar.textContent = comentario.texto;

            const divTexto = document.createElement('div');
            divTexto.classList.add('fondo-oscuro', 'rounded', 'color-claro', 'col-11', 'm-3', 'fs-3');
            divTexto.appendChild(textoAgregar);

            row.appendChild(divTexto)

            cuerpo.appendChild(row)

        })

    })

}