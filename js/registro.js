// Añade a la api 

const usuariosApi = "https://67feaea558f18d7209ef0910.mockapi.io/usuarios"

const botonRegistrar = document.getElementById('botonRegistrar');

// Registra un nuevo usuario

botonRegistrar.addEventListener('click', ()=> {

    let permitirRegistro = true;

    const name = document.getElementById('nombreRegistro').value;
    const contraseña = document.getElementById('contraseñaRegistro').value;
    const imagen = document.getElementById('imagenRegistro').files[0];

    let lector = new FileReader();

    let image = null

    lector.readAsDataURL(imagen);

    lector.onload =  ()=> {

        image = lector.result;
        console.log(image);
        const nuevoUsuario = {name, contraseña, image}

    fetch(usuariosApi).then(usuarios =>{

        return usuarios.json()

    }).then(usuarios =>{

        usuarios.forEach(usuario =>{


            if (name == usuario.name){

                

                permitirRegistro = false;

            }

        })

        if(permitirRegistro == true){

            fetch(usuariosApi, {

                method: 'POST',
                headers: {'content-Type': 'application/json'},
                body: JSON.stringify(nuevoUsuario)

            }).then(usuarios =>{

                alert("Usuario registrado exitosamente, Por favor inicie sesion");

            }).catch(error =>{
                
                alert("No se pudo concretar el registro",error);

            })

        } else {

            alert("Ese usuario ya existe porfavor ingrese otro nombre")

        }

    })

    }

    

})

// Inicia sesion

const botonInicio = document.getElementById('botonIniciarSesion');

botonInicio.addEventListener('click', ()=>{

    let ingreso = false;

    const name = document.getElementById('nombreSesion').value;
    const contraseña = document.getElementById('contraseñaSesion').value;

    fetch(usuariosApi).then(usuarios =>{

        return usuarios.json();

    }).then(usuarios =>{

        usuarios.forEach(usuario =>{

            if (usuario.name == name && usuario.contraseña == contraseña){

                ingreso = true;
                localStorage.setItem('usuarioLocal', JSON.stringify(usuario));
                window.location.href = 'index.html';

            }

        })

        if(ingreso == false) {

            alert("Usuario o contraseña Incorrectos");

        }

    })

})