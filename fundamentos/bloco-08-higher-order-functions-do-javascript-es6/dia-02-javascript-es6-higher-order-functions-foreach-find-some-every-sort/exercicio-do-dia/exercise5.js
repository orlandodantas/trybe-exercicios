const assert = require('assert');
const books = require('./template');

// Adicione o código do exercício aqui:
/* --------------------------------------------------------------------------------------------- */
// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((book) => book.author.birthYear >= 1900 && book.author.birthYear <= 1999);
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);