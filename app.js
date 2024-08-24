//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número secreto';
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 100';
//Estos let se reemplaza por una sola función para optimizar el codigo inicia en linea 7 a 10 y se asigna en linea 16 y 17

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 100;

console.log(numeroSecreto);

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`¡Acertaste el número! en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }  else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número es menor')
        } else {
            asignarTextoElemento('p','El número es mayor')
        }intentos++;
        limpiarCaja();
    } 
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    //valorCaja.value = ''; quito let y añado esta función arriba
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se termino el juego');
    } else {}
    //si el numero esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();

    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}


function condicionesIniciales() {
    asignarTextoElemento ('h1','¡Juego del número secreto!');
    asignarTextoElemento ('p','Indica un número del 1 al 100');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar intervalos
    condicionesIniciales();
    //Generar numero aleatorio
    condicionesIniciales();
    //inicializar los numeros de intentos
    condicionesIniciales();
    //deshabilitar el boton de inicio
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();