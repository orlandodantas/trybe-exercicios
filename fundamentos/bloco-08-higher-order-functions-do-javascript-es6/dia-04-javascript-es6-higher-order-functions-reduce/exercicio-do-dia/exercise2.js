const assert = require('assert');
const books = require('./template');

// 2 - Crie uma string com os nomes de todas as pessoas autoras.
const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
  return books.reduce((acumulator, currentValue, index) => {
    return (index !== books.length - 1) ? `${acumulator} ${currentValue.author.name},` : `${acumulator} ${currentValue.author.name}.`;
  }, '').trim();
}

console.log(reduceNames());

assert.strictEqual(reduceNames(), expectedResult);

// Credits: codigo baseado nos exemplos do developer.mozilla Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce