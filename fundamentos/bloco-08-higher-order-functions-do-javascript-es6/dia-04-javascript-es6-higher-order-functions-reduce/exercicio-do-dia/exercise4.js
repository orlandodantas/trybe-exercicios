const assert = require('assert');
const books = require('./template');

// 4 - Encontre o livro com o maior nome.

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  // escreva seu código aqui
  return books.reduce((acumulator, currentValue) => {
    return (acumulator.name.length < currentValue.name.length) ? currentValue : acumulator;
  });
}

assert.deepEqual(longestNamedBook(), expectedResult);