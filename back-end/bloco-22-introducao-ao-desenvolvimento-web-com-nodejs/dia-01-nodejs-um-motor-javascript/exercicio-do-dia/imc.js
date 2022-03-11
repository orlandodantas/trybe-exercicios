const readline = require('readline-sync');

const imc = () => {
  const altura = readline.questionFloat('Qual a sua altura?\n');
  const peso = readline.questionInt('Qual o seu peso?\n');

  const result = (peso / Math.pow(altura, 2)).toFixed(2);

  if (result < 18.5) {
    return `IMC: ${result} \nAbaixo do peso (magreza)`;
  } else if (result >= 18.5 && result <= 24.9) {
    return `IMC: ${result} \nPeso normal`;
  } else if (result >= 25.0 && result <= 29,9) {
    return `IMC: ${result} \nAcima do peso (sobrepeso)`;
  } else if (result >= 30.0 && result <= 34,9) {
    return `IMC: ${result} \nObesidade grau I`;
  } else if (result >= 35.0 && result <= 39,9) {
    return `IMC: ${result} \nObesidade grau II`;
  } else if (result >= 40.0) {
    return `IMC: ${result} \nObesidade graus III e IV`;
  }
}

console.log(imc());