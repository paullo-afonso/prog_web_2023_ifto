let frutas = ['abacaxi', 'pera', 'maçã']

// adicionar item no final da lista
frutas.push('abacate');
frutas.push('amora');
//remover item do final da lista
//frutas.pop(); // retorna o elemento removido

//adiciona um item ao começo da lista
frutas.unshift('pessego'); 
//frutas.shift(); // remove o primeiro elemento da minha lista
//let removido = frutas.shift(); // retorna o elemento removido;

//remove um elemento do meio da lista; splice

//console.log(frutas);

//frutas.splice(2,1); // remove o item 2 da lista e apenas 1 item;

frutas.splice(2, 0, 'banana') // não remove nenhum e adiciona um novo item no meio da lista.

console.log(frutas);

