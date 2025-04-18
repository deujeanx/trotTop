const botonEjercicio = document.getElementById('botonEjercicio');
const botonAgua = document.getElementById('botonTomarAgua');
const botonLectura = document.getElementById('botonLeer');
const botonAñadir = document.getElementById('botonAñadir');

// Envia los datos de el habito que el usuario escoja a la api 



const usuario = JSON.parse(localStorage.getItem('usuarioLocal'));

let permitirNuevoHabito = true;

const urlApi = "https://67feaea558f18d7209ef0910.mockapi.io/usuarios/" + usuario.id;

botonAñadir.addEventListener('click', () => {

    const nombreHabito = document.getElementById('nombreHabito').value;
    
    if (nombreHabito){

        fetch(urlApi).then(usuarios =>{

            return usuarios.json();
    
        }).then(usuarios => {
    
            if (usuarios.habitos) {
    
    
                console.log("se hace el if")
    
                usuarios.habitos.forEach(habito =>{
        
                    console.log("se hace el forEach")
        
                    if (habito.nameHabito == nombreHabito){
            
                        permitirNuevoHabito = false;
                        alert("Ya tienes este habito!!!")
            
                    }
            
                })
        
            }
    
            if (permitirNuevoHabito == true) {
    
                const nameHabito = nombreHabito;
                const racha = 0;
                const diaRacha = 1;
        
                let habitos;
    
                if (usuarios.habitos) {
    
                    usuarios.habitos.push({nameHabito, racha, diaRacha});
        
                    habitos = {habitos: usuarios.habitos}
        
                } else {
        
                    habitos = {habitos: [{nameHabito, racha, diaRacha}]};
        
                }
        
                fetch(urlApi, {
        
                    method: 'PUT',
                    headers: {'content-Type': 'application/json'},
                    body: JSON.stringify(habitos)
        
                }).then(usuario => {
        
                    console.log(usuarios)
        
                    alert("Nuevo habito iniciado");
                    localStorage.setItem('usuarioLocal' ,JSON.stringify(usuarios))
        
                    let visual = JSON.parse(localStorage.getItem('usuarioLocal'))
                    console.log(visual)
                    window.location.href = 'index.html'
        
                }).catch(error => {
        
                    console.log("error" , error)
        
                })
    
            }   
        })

    }else {

        alert("Por favor ingrese correctamente los campos solicitados")

    }

})

botonLectura.addEventListener('click', () => {

    fetch(urlApi).then(usuarios =>{

        return usuarios.json();

    }).then(usuarios => {

        if (usuarios.habitos) {


            console.log("se hace el if")

            usuarios.habitos.forEach(habito =>{
    
                console.log("se hace el forEach")
    
                if (habito.nameHabito == "Lectura"){
        
                    permitirNuevoHabito = false;
                    alert("Ya tienes este habito!!!")
        
                }
        
            })
    
        }

        if (permitirNuevoHabito == true) {

            const nameHabito = "Lectura";
            const racha = 0;
            const diaRacha = 1;
    
            let habitos;

            if (usuarios.habitos) {

                usuarios.habitos.push({nameHabito, racha, diaRacha});
    
                habitos = {habitos: usuarios.habitos}
    
            } else {
    
                habitos = {habitos: [{nameHabito, racha, diaRacha}]};
    
            }
    
            fetch(urlApi, {
    
                method: 'PUT',
                headers: {'content-Type': 'application/json'},
                body: JSON.stringify(habitos)
    
            }).then(usuario => {
    
                console.log(usuarios)
    
                alert("Nuevo habito iniciado");
                localStorage.setItem('usuarioLocal' ,JSON.stringify(usuarios))
    
                window.location.href = 'index.html'
    
            }).catch(error => {
    
                console.log("error" , error)
    
            })

        }   
    })

})

botonAgua.addEventListener('click', ()=>{

    fetch(urlApi).then(usuarios =>{

        return usuarios.json();

    }).then(usuarios => {

        if (usuarios.habitos) {


            console.log("se hace el if")

            usuarios.habitos.forEach(habito =>{
    
                console.log("se hace el forEach")
    
                if (habito.nameHabito == "Tomar agua"){
        
                    permitirNuevoHabito = false;
                    alert("Ya tienes este habito!!!")
        
                }
        
            })
    
        }

        if (permitirNuevoHabito == true) {

            const nameHabito = "Tomar agua";
            const racha = 0;
            const diaRacha = 1;
    
            let habitos;

            if (usuarios.habitos) {

                usuarios.habitos.push({nameHabito, racha, diaRacha});
    
                habitos = {habitos: usuarios.habitos}
    
            } else {
    
                habitos = {habitos: [{nameHabito, racha, diaRacha}]};
    
            }
    
            fetch(urlApi, {
    
                method: 'PUT',
                headers: {'content-Type': 'application/json'},
                body: JSON.stringify(habitos)
    
            }).then(usuario => {
    
                console.log(usuarios)
    
                alert("Nuevo habito iniciado");
                localStorage.setItem('usuarioLocal' ,JSON.stringify(usuarios))
    
                window.location.href = 'index.html'
    
            }).catch(error => {
    
                console.log("error" , error)
    
            })

        }   
    })

})

botonEjercicio.addEventListener('click', ()=> {


    
    fetch(urlApi).then(usuarios =>{

        return usuarios.json();

    }).then(usuarios => {

        if (usuarios.habitos) {


            console.log("se hace el if")

            usuarios.habitos.forEach(habito =>{
    
                console.log("se hace el forEach")
    
                if (habito.nameHabito == "Ejercicio"){
        
                    permitirNuevoHabito = false;
                    alert("Ya tienes este habito!!!")
        
                }
        
            })
    
        }

        if (permitirNuevoHabito == true) {

            const nameHabito = "Ejercicio";
            const racha = 0;
            const diaRacha = 1;
    
            let habitos;

            if (usuarios.habitos) {

                usuarios.habitos.push({nameHabito, racha, diaRacha});
    
                habitos = {habitos: usuarios.habitos}
    
            } else {
    
                habitos = {habitos: [{nameHabito, racha, diaRacha}]};
    
            }
    
            fetch(urlApi, {
    
                method: 'PUT',
                headers: {'content-Type': 'application/json'},
                body: JSON.stringify(habitos)
    
            }).then(usuario => {
    
                console.log(usuarios)
    
                alert("Nuevo habito iniciado");
                localStorage.setItem('usuarioLocal' ,JSON.stringify(usuarios))
    
                window.location.href = 'index.html'
    
            }).catch(error => {
    
                console.log("error" , error)
    
            })

        }   
    })

})