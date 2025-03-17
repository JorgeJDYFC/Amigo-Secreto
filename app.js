// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo()
{
    let nombre = document.getElementById("amigo");
    let lista = nombre.value.trim();
    if (lista !== '')
    {
       listaAmigos.push(lista);
       let li = document.createElement("li");
       li.textContent = lista;
       document.getElementById('listaAmigos').appendChild(li);
       limpiarCaja();
       asignarTextoElemento('h2','Digite el nombre de sus amigos');
    }
    else
    {
        asignarTextoElemento('h2','Ingrese un nombre');
    }
}

function sortearAmigo()
{
    if (listaAmigos.length === 0)
    {
        alert('Introduzca los nombres de sus amigos.');
    }

    else
    {
    let indice = numeroAleatorio();
    let amigoSecreto = listaAmigos[indice];
    asignarTextoElemento('h2',`Tu amigo secreto es ${amigoSecreto}.`);
    }
}

function limpiarCaja()
{
    document.getElementById("amigo").value = '';
}

function asignarTextoElemento(elemento,texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function numeroAleatorio()
{
    return Math.floor(Math.random() * listaAmigos.length)
}
