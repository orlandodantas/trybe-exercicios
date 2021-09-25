// Fatorial
const fatorial = (number) => {
  let result = number;
  if (number > 0) {
    for(let index = number - 1; index > 0; index -= 1) {
      result *= index; 
    }
  } 
  return result;
};

const resultFatorial = fatorial(4);
console.log(`Fatorial: ${resultFatorial}`);

// Fatorial recursivo
let resultado = 1;
const fatorialRecursive = (number) => {
  if (number > 1) {
    resultado *= number;
    fatorialRecursive(number - 1);
  }
  return resultado;
};

const total = fatorialRecursive(4);
console.log(`Fatorial Recursive: ${total}`);