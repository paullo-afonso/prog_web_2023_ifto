//percorrer

let frutas = ['maçã', 'pera', 'banana', 'morango'];
console.log(frutas);

for(let indice = 0; indice < frutas.length; indice++) {
    console.log(`A fruta Nº ${indice+1} é ${frutas[indice]}`);
}

//frutas.forEach((item, index, lista) => {
//    console.log(`A fruta Nº ${index+1} é ${item}`);
//    if (item == 'maçã') {
//        lista[index] = 'uva';
//    }
//});

frutas.forEach(changeMaca);

function changeMaca(item, index, lista) {
    console.log(`---A fruta Nº ${index+1} é ${item}---`);
    if (item == 'maçã') {
        lista[index] = 'uva';
    }
}

