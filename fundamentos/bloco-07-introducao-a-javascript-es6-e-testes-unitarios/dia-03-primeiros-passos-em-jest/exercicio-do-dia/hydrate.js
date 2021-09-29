function hydrate(value) {
  let regex = /\d+/g;
  let numeros = value.match(regex);
  let resultado;

  let sum = 0;
  for (let num of numeros) {
    sum += Number(num);
  }

  if (sum === 1) {
    resultado = `${sum} copo de água`;
  } else {
    resultado = `${sum} copos de água`;
  }
  return resultado;

  /* O código acima contem parte de um código que foi retirado do stackoverflow, feito pelo usuário bobo da corte em 11-05-2015;
  link: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994 */
}

module.exports = hydrate;
