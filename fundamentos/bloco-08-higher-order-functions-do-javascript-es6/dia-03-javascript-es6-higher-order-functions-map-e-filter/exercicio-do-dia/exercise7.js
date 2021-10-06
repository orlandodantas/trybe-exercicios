const assert = require('assert');
const books = require('./template');

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  // retorna o primeiro que satifaz o books.find, ele separa todas as palavras pelo espaço e transforma em um array e filtra o array procurando as palavras que tem ponto (.) no final de cada uma, quando é devolvido do filter é verificado se o tamanho desse array que foi devolvido pelo filter é igual a 3 e por última devolve o nome do livro do array encontrado.
  return books.find((book) => (
    book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3
  )).name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);

// Credits: Gabarito Trybe Link: https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-higher-order-functions-map-e-filter-gabarito/solutions/d8df5a06-da72-4e76-9b2b-6266bf33186e/exercicios/5f837a4c-8492-4034-8ac6-5ed3ba02ecdd?use_case=calendar