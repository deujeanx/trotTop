// Añade a la api 

const usuariosApi = "https://67feaea558f18d7209ef0910.mockapi.io/usuarios"

const botonRegistrar = document.getElementById('botonRegistrar');

// Registra un nuevo usuario

botonRegistrar.addEventListener('click', ()=> {

    let permitirRegistro = true;

    const name = document.getElementById('nombreRegistro').value;
    const contraseña = document.getElementById('contraseñaRegistro').value;
    const imagen = document.getElementById('imagenRegistro').files[0];

    if (name && contraseña){

        let lector = new FileReader();

        let image = null

        if(imagen){

            lector.readAsDataURL(imagen);

        }

        lector.onload =  ()=> {

            image = lector.result;
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

                    fetch(usuariosApi).then(usuarios => {

                        return usuarios.json();

                    }).then(usuarios => {

                        let encontrado = false

                        usuarios.forEach(usuario => {

                            if(usuario.name == name){

                                encontrado = true

                            }

                            console.log(name)
                            console.log(usuario.name)
                            console.log(encontrado)

                            if (encontrado == true){

                                alert("Usuario registrado con exito, por favor inicie sesion");

                            }else {

                                alert("!!Hubo un problema por favor vuelva a intentar(Pruebe con otra imagen)");

                            }


                        })

                    })

                }).catch(error =>{
                    
                    alert("No se pudo concretar el registro",error);

                })

            } else {

                alert("Ese usuario ya existe porfavor ingrese otro nombre")

            }

        })

        }

        console.log(name)


    } else {

        alert("Por favor llene todos los campos")

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