const verificaAposta = (numApostado, numSorteado) => (numApostado === numSorteado) ? 'Parabéns você ganhou' : 'Tente novamente';

const sorteio = (numApostado, callback) => {
  const numSorteado = Math.ceil(Math.random() * 5);
  return callback(numApostado, numSorteado);
};

console.log(sorteio(5, verificaAposta));