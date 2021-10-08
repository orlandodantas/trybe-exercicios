// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acumulator, currentValue) => acumulator.concat(currentValue), []);
}

console.log(flatten());

// Credits: Gabarito Trybe Link: https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-higher-order-functions-reduce-gabarito/solutions/227114f0-f321-4cd5-b6be-80ae423b17d8/exercicios/fe5a684c-0b13-46bc-9a54-14b299c04bd7?use_case=calendar