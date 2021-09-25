const longestWord = (frase) => {
  let maior = '';
  const arrayPalavras = frase.split(' ');

  arrayPalavras.forEach(indice => {
    maior = (indice.length > maior.length) ? indice : maior;
  });

  return maior;
};

const maiorPalavra = longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');

console.log(maiorPalavra);