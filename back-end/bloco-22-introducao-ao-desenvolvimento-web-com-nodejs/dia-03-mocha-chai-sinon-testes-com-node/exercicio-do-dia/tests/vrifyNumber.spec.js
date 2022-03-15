const { expect } = require('chai');
const { verifyNumber } = require('../verifyNumber');

describe('Verifica se um número é positivo', () => {
  const result = verifyNumber(3);

  it('O tipo de retorno é uma string', () => {
    expect(result).to.be.a('string');
  });

  it('Se número for maior que zero é positivo', () => {
    expect(result).to.be.equal('positivo');
  });
});

describe('Verifica se um número é neutro', () => {
  const result = verifyNumber(0);

  it('O tipo de retorno é uma string', () => {
    expect(result).to.be.a('string');
  });

  it('Se número for igual que zero é neutro', () => {
    expect(result).to.be.equal('neutro');
  });
});

describe('Verifica se um número é positivo', () => {
  const result = verifyNumber(-7);

  it('O tipo de retorno é uma string', () => {
    expect(result).to.be.a('string');
  });

  it('Se número for menor que zero é negativo', () => {
    expect(result).to.be.equal('negativo');
  });
});

describe('Verifica o retorno em casos que não é passado um number', () => {
  const result = verifyNumber('olá mundo');

  it('O tipo de retorno é uma string', () => {
    expect(result).to.be.a('string');
  });

  it('Verifica se o retorno é "o valor deve ser um número"', () => {
    expect(result).to.be.equal('o valor deve ser um número');
  });
});
