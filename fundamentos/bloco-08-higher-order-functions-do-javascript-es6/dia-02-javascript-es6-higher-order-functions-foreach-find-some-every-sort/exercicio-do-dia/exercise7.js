const assert = require('assert');
const books = require('./template');

// Adicione o código do exercício aqui:
/* --------------------------------------------------------------------------------------------- */
// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  return books.every((book) => {
    // Se ele encontrar um valor que satisfaça books.some ele nega o retorno de books.some que era verdadeiro e passa a ser false, assim fazendo com que books.every retorne false;
    return !books.some((livroSome) => {
      return (livroSome.author.birthYear === book.author.birthYear) && (livroSome.author.name !== book.author.name);
    });
  });
}

assert.strictEqual(authorUnique(), expectedResult);

// Credits: Gabarito Trybe Link: https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-higher-order-functions-foreach-find-some-every-sort-gabarito/solutions/9d72cb46-f95e-41c5-8f6b-67dd39642f78/conteudo/c1c5b9c9-18ff-4457-8f71-d80ea9916aab?use_case=calendar