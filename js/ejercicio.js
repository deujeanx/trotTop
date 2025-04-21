const btn1 = document.getElementById('btnDia1');
const btn2 = document.getElementById('btnDia2');
const btn3 = document.getElementById('btnDia3');
const btn4 = document.getElementById('btnDia4');
const btn5 = document.getElementById('btnDia5');
const btn6 = document.getElementById('btnDia6');
const btn7 = document.getElementById('btnDia7');

const div1 = document.getElementById('divDia1');
const div2 = document.getElementById('divDia2');
const div3 = document.getElementById('divDia3');
const div4 = document.getElementById('divDia4');
const div5 = document.getElementById('divDia5');
const div6 = document.getElementById('divDia6');
const div7 = document.getElementById('divDia7');

icono = document.createElement('i');

icono.classList.add('fa-solid', 'fa-check', 'chulo');

btn1.addEventListener('click', ()=> completarRacha(div1));
btn2.addEventListener('click', ()=> completarRacha(div2));
btn3.addEventListener('click', ()=> completarRacha(btn3));
btn4.addEventListener('click', ()=> completarRacha(div4));
btn5.addEventListener('click', ()=> completarRacha(div5));
btn6.addEventListener('click', ()=> completarRacha(div6));
btn7.addEventListener('click', ()=> completarRacha(div7));

function completarRacha(dia){

    dia.appendChild(icono)

};