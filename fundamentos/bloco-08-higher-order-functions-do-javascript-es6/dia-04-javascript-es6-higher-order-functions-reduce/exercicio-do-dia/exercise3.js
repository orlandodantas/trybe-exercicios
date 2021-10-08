const assert = require('assert');
const books = require('./template');

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const expectedResult = 43;

function averageAge() {
  // escreva seu código aqui
  return books.reduce((acumulator, currentValue, index) => {
    if (index !== books.length - 1) {
      return acumulator + (currentValue.releaseYear - currentValue.author.birthYear);
    }

    return (acumulator + (currentValue.releaseYear - currentValue.author.birthYear)) / books.length;
  }, 0);
}

assert.strictEqual(averageAge(), expectedResult);