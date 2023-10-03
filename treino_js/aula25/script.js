// selecionar pela tag
//let img = document.getElementsByTagName('img')[0];
//console.log(img)

// selecionar pela classe
//let img = document.getElementsByClassName('loading')[0];
//console.log(img)

// selecionar pelo ID do elemento
let img = document.getElementById('img_load');
//console.log(img)

// selecionar por query para um único elemento
//let img = document.querySelector('img[src="load.png"]');
//console.log(img)

// selecionar por query para trazer uma lista
//let img = document.querySelectorAll('img[src="load.png"]');



let grau = 0;

function girar() {
    grau++;
    if(grau >=360) {
        grau = 0;
    }
    img.style.transform = `rotate(${grau}deg)`;
    setTimeout(girar,10)
}

console.log(img)