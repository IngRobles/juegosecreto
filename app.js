/*let titulo = document.querySelector('h1');
titulo.textContent = "Juego del número secreto";

let parrafo = document.querySelector('p');
parrafo.textContent = "Indica un número del 1 al 10";
*/
let numeroSecreto = generarNumSecret();
console.log(numeroSecreto);

function generarNumSecret() {
    return Math.floor(Math.random()*10)+1;
}

function asignarTextoElemento(objetoHtml, texto) {
    let elementoHtml = document.querySelector(objetoHtml);
    elementoHtml.innerHTML = texto;
    
}
function intentoUsuario() {
    alert("Click desde la función");
}

asignarTextoElemento('h1', 'Juego del número secreto!');
asignarTextoElemento('p', 'Indica un número del 1 al 100');