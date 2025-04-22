const cuerpo = document.getElementById('cuerpo');

const botonRacha = document.getElementById('btnSubir');

const usuario = JSON.parse(localStorage.getItem('usuarioLocal'))

console.log(usuario)

let cont = 1;

const url = "https://67feaea558f18d7209ef0910.mockapi.io/usuarios/" + usuario.id;

const textoModal = document.getElementById('textoModal');

const tituloModal = document.getElementById('exampleModalLabel');

// imprime la cantidad de días que el usuario lleve haciendo Tomar agua

if (usuario.habitos) {

    usuario.habitos.forEach(habito => {

        if (habito.nameHabito == "Lectura"){

            for (let i=0; i<habito.racha; i++){

                console.log('vuelta' + i)

                const boton = document.createElement('button');
                boton.setAttribute('type', 'button');
                boton.classList.add('btn');

                const div = document.createElement('div');
                div.setAttribute('id', 'divDia'+cont);
                div.classList.add('d-flex', 'rounded', 'fs-1', 'justify-content-center', 'fondo-claro', 'mt-2', 'p-2');

                const divIcono = document.createElement('div');
                divIcono.classList.add('color-oscuro', 'text-center');
                
                const icono = document.createElement('i');
                icono.classList.add('fa-brands', 'color-oscuro', 'fa-font-awesome');

                const dia = document.createElement('h3');
                dia.textContent = "Dia" + cont;
                
                divIcono.appendChild(icono);
                divIcono.appendChild(dia);

                const iconoChulo = document.createElement('i');
                iconoChulo.classList.add('fa-solid', 'fa-check', 'chulo')                
                
                div.appendChild(divIcono);

                div.appendChild(iconoChulo)

                boton.appendChild(div);

                const divPadre = document.createElement('div');
                divPadre.classList.add('col-2')
                divPadre.appendChild(boton)

                cuerpo.appendChild(divPadre);

                

                cont ++;

                

                if (habito.racha < 5) {

                    textoModal.textContent = 'El dia de hoy debes leer al menos dos capitulos de un libro, Dale a "LISTO" cuando lo hagas';

                } else if (habito.racha < 10) {

                    textoModal.textContent = 'El dia de hoy debes leer al menos 3 capitulos de un libro';

                } else {

                    textoModal.textContent = 'El dia de hoy debes leer al menos 4 capitulos de un libro';

                }

            }

            

        }

    })

}

const boton = document.createElement('button');
boton.setAttribute('type', 'button');
boton.setAttribute('data-bs-toggle', 'modal');
boton.setAttribute('data-bs-target', '#dia');
boton.classList.add('btn');

const div = document.createElement('div');
div.setAttribute('id', 'divDia'+cont);
div.classList.add('d-flex', 'rounded', 'fs-1', 'justify-content-center', 'fondo-claro', 'mt-2', 'p-2');

const divIcono = document.createElement('div');
divIcono.classList.add('color-oscuro', 'text-center');

const icono = document.createElement('i');
icono.classList.add('fa-brands', 'color-oscuro', 'fa-font-awesome');

const dia = document.createElement('h3');
dia.textContent = "Dia" + cont;
    
divIcono.appendChild(icono);
divIcono.appendChild(dia);

div.appendChild(divIcono);

boton.appendChild(div);

cuerpo.appendChild(boton);

if (cont == 1) {

    textoModal.textContent = 'El dia de hoy debes Leer al menos un capitulo de un libro, Dale a "LISTO" cuando lo hagas';; 

}

tituloModal.textContent = 'Dia ' + cont;

botonRacha.addEventListener('click', ()=>{

    usuario.habitos.forEach(habito => {

        if (habito.nameHabito == 'Lectura'){

            habito.racha ++;
            habito.diaUltimaRacha = new Date();

            fetch(url, {

                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({habitos: usuario.habitos})

            }).then(exito => {

                console.log(usuario)

                localStorage.setItem('usuarioLocal', JSON.stringify(usuario))
                console.log('exito');
                window.location.reload();

            })

        }

    })

})

