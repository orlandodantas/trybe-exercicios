// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

// Sem defalt parameters
/* const multiply = (number, value) => {
  // Escreva aqui a sua função
  return number * value;
}; */

// Com defalt parameters
const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

console.log(multiply(8));