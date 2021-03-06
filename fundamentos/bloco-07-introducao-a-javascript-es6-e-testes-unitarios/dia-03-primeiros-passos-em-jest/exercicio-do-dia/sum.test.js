const sum = require('./sum');

describe('Requisito 01', () => {
  it('A função sum(a, b) retorna a soma do parâmetro a com o b ', () => {
    expect(9).toBe(sum(4, 5));
  });

  it('Teste se o retorno de sum(0, 0) é 0 ', () => {
    expect(0).toBe(sum(0, 0));
  });

  it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow();
  });

  it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });
});
