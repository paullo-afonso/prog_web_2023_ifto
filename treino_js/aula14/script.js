// para for

const base = parseInt(prompt("Digite a base"));
const potencia = parseInt(prompt("digite a potência"));

// 3^2 (3 elevado ao quadrado)

let resultado = 1;

for (let cont = 1; cont <=potencia; cont++) {
    resultado *= base;
}

console.log(`A potênciação de ${base} elevado a ${potencia} é igual a ${resultado}`);