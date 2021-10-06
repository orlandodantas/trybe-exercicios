const assert = require('assert');
const books = require('./template');

// Adicione o código do exercício aqui:
// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
function authorBornIn1947() {
  // escreva aqui o seu código
  const book = books.find((book) => book.author.birthYear === 1947);
  return book.author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');
