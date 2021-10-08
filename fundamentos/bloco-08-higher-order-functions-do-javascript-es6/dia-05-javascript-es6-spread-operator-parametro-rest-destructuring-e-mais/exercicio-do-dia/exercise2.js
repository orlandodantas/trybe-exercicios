// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// escreva sum abaixo
const sum = (...args) => args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const totalSum = sum(1, 2, 3, 4, 5);
console.log(totalSum);