const { it, expect } = require('@jest/globals');
const { execPath } = require('process');
const {encode, decode} = require('./encodeDecode');

describe('Requisito 04 ', () => {
  it('Testa se encode é uma function', () => {
    expect(typeof encode).toBe('function');
  });

  it('Testa se decode é uma function', () => {
    expect(typeof decode).toBe('function');
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente ', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it('Teste se as demais letras/números não são convertidos para no caso do encode', () => {
    expect(encode('bcdfghjlmnpqrstvxz67890')).toBe('bcdfghjlmnpqrstvxz67890');
  });

  it('Teste se as demais letras/números não são convertidos para no caso do decode', () => {
    expect(decode('bcdfghjlmnpqrstvxz67890')).toBe('bcdfghjlmnpqrstvxz67890');
  });

  it('Teste se a string que é retornada pelas função encode têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('orlando').length).toBe('orlando'.length);
  });

  it('Teste se a string que é retornada pelas função decode têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('orlando').length).toBe('orlando'.length);
  });
});
