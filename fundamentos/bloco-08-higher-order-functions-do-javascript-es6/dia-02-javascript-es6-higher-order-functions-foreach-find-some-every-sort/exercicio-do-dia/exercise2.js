const assert = require('assert');
const books = require('./template');

// Adicione o código do exercício aqui:
/* ----------------------------------------------------------------------------------------- */
// 2 - Retorne o nome do livro de menor nome.
function smallerName() {
  let nameBook = books[0].name;
  // escreva aqui o seu código
  books.forEach((book) => {
    if (nameBook.length > book.name.length) {
      nameBook = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');