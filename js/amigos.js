const imprimir = document.getElementById('imprimirGente');

const url = "https://67feaea558f18d7209ef0910.mockapi.io/usuarios";

let usuario = JSON.parse(localStorage.getItem('usuarioLocal'));

let amigos = NaN;

// Muestra los usuarios que estan registrados en la pagina

console.log(usuario)

fetch(url).then(usuarios => {

    return usuarios.json();

}).then(usuarios => {


    

    usuarios.forEach(usuarioIMP => {

        if (usuario.id != usuarioIMP.id){

            const columna = document.createElement('div');
            columna.classList.add('col-11', 'fondo-claro', 'rounded', 'd-flex', 'p-2', 'mt-2', 'justify-content-between');

            const divImage = document.createElement('div');
            divImage.setAttribute('id', 'user')
            divImage.classList.add('col-1', 'rounded-circle' ,'circulo-usuario');

            const image = document.createElement('img');
            image.src = usuarioIMP.image;
            image.classList.add('img-fluid')

            const nombre = document.createElement('h2');
            nombre.classList.add('color-oscuro');
            nombre.textContent = usuarioIMP.name;

            const divBoton = document.createElement('div');
            divBoton.classList.add('col-1')

            const boton = document.createElement('button');
            boton.classList.add('btn', 'fondo-oscuro', 'color-regular');
            boton.textContent = 'Añadir';
            boton.addEventListener('click', ()=> añadirAmigo(usuarioIMP.id));

            divImage.appendChild(image)

            columna.appendChild(divImage)
            columna.appendChild(nombre)
            columna.appendChild(boton)
            imprimir.appendChild(columna)

        }

        

    })

})

// Boton para añadir a los amigos

function añadirAmigo(id) {

    const urlUsuario = "https://67feaea558f18d7209ef0910.mockapi.io/usuarios/" + usuario.id;

    console.log(id)

    if (usuario.amigos){

        usuario.amigos.push(id);
        console.log("primer")

        amigos = {amigos: usuario.amigos}

    } else {

        console.log("segun")
        amigos = {amigos: [id]};
        

    }

    console.log(amigos)

    

    fetch(urlUsuario).then(usuarioApi => {

        return usuarioApi.json();

    }).then(usuarioApi => {

        let permitir = true

        if (usuarioApi.amigos) {

            usuarioApi.amigos.forEach(amigo => {


                if (amigo == id){

                    console.log("entro")
    
                    permitir = false;
    
                }
    
            })
    

        }

        if (permitir == true) {


            fetch(urlUsuario, {

                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(amigos)
        
            }).then(exito => {

                fetch(urlUsuario).then(usuarioAPP => {

                    return usuarioAPP.json();

                }).then(usuarioAPP => {

                    localStorage.setItem('usuarioLocal', JSON.stringify(usuarioAPP))
        
                    alert("Amigo añadido")

                    window.location.reload()

                })

                
        
            }).catch(error => {
        
                console.log(error + "error")
        
            })

        } else {

            alert("Ya es tu amigo")

        }

        

    })

}