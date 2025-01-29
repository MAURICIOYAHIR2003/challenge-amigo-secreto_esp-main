let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById ('amigo').value; 
    if (nombre === ""){
        alert ('Por favor, inserte un nombre');
    }else{
        amigos.push (nombre);
        console.log (amigos);
        document.getElementById('amigo').value = "";
        let elemento = document.getElementById ('resultado');
        elemento.innerHTML = "";

        for (let i = 0; i < amigos.length; i++){
            elemento.innerHTML += `<li> ${amigos[i]} </li>`;
        }
    }
}
function sortearAmigo(){
    if (amigos.length === 0){
        alert ('Agrega Nombres');
    }else{
        let total = amigos.length
        let numero = Math.floor(Math.random()*total)
        console.log (numero);
        let elemento = document.getElementById ('resultado');
        elemento.innerHTML = `<li> ${amigos[numero]} </li>`;
    }
}