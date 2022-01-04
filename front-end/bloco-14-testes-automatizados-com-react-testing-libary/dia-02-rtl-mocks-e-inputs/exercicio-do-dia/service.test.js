// const { expect, jest } = require("@jest/globals");
const { expect } = require("@jest/globals");
let Service/* , { numberRandon } */ = require('./service');

describe('1. Crie uma função que gere um número aleatório', () => {
  test('Teste se a função foi chamada', () => {
    numberRandon = jest.fn().mockReturnValue(10);
  
    numberRandon();
  
    expect(numberRandon).toBeCalled();
    expect(numberRandon).toBeCalledTimes(1);
  });

  test('Teste qual o retorno da função', () => {
    numberRandon = jest.fn().mockReturnValue(10);
  
    const result =  numberRandon();
    expect(numberRandon()).toBe(10);
  });

  test('Teste quantas vezes a função foi chamada', () => {
    numberRandon = jest.fn().mockReturnValue(10);
  
    numberRandon();
  
    expect(numberRandon).toBeCalledTimes(1);
  });
});

describe('2. Retorne a divisão do primeiro pelo segundo parâmetro.', () => {
  test('Defina o mock para a nova funcionalidade.', () => {
    numberRandon = jest.fn((num1, num2) => num1 / num2);

    const result = numberRandon(10, 5);

    expect(numberRandon).toBeCalled();
    expect(result).toBe(2);
    expect(numberRandon).toBeCalledTimes(1);
  });
});

describe('3. Desenvolva uma nova implementação que receba três parâmetros', () => {
  test('Retorne a multiplacação dos parâmetros.', () => {
    numberRandon = jest.fn((num1, num2, num3) => num1 * num2 * num3);

    const result = numberRandon(2, 5, 10);

    expect(numberRandon).toBeCalled();
    expect(result).toBe(100);
  });

  test('Implemente uma nova func que que receba um param e retorne o dobro.', () => {
    const numberRandon = jest.fn().mockImplementation((num1) => num1 * 2);

    const result = numberRandon(25);
    expect(numberRandon).toBeCalled();
    expect(numberRandon).toBeCalledTimes(1);
    expect(result).toBe(50);
  })
});

describe('Desenvolva novas funcionalidades para as funções.', () => {
  test('implementado as novas funcionalidades.', () => {
    const mockStrUppercase = jest.spyOn(Service, 'strUppercase').mockImplementation((word) => word.toLowerCase());
    const mockFirstLetter = jest.spyOn(Service, 'firstLetter').mockImplementation((word) => word[word.length - 1]);
    const mockConcatWords = jest.spyOn(Service, 'concatWords').mockImplementation((word1, word2, word3) => `${word1} ${word2} ${word3}`);

    const result1 = mockStrUppercase('Orlando');
    expect(mockStrUppercase).toBeCalled();
    expect(mockStrUppercase).toBeCalledTimes(1);
    expect(result1).toBe('orlando');

    const result2 = mockFirstLetter('José');
    expect(mockFirstLetter).toBeCalled();
    expect(mockFirstLetter).toBeCalledTimes(1);
    expect(result2).toBe('é');

    const result3 = mockConcatWords('José', 'Orlando', 'Dantas');
    expect(mockConcatWords).toBeCalled();
    expect(mockConcatWords).toBeCalledTimes(1);
    expect(result3).toBe('José Orlando Dantas');

    Service.strUppercase.mockRestore();
    const result4 = Service.strUppercase('Orlando');
    expect(result4).toBe('ORLANDO');
  });

  // Credits: https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-mocks-e-inputs/solutions/96709d24-8962-42f8-9318-a5dac56aacc5/exercicios/9188582b-4426-4a99-a0fd-f0244162dd8f?use_case=calendar
  describe('Testando a requisição a Dog API.', () => {
    Service.getDogPicture = jest.fn();
    afterEach(Service.getDogPicture.mockReset);

    test('Caso a promisse resolva', async () => {
      Service.getDogPicture.mockResolvedValue('request sucess');

      const result = Service.getDogPicture();

      expect(Service.getDogPicture).toHaveBeenCalled();
      expect(Service.getDogPicture).toHaveBeenCalledTimes(1);
      await expect(result).resolves.toBe('request sucess');
    });

    test('Caso a promisse seja rejeitada', async () => {
      Service.getDogPicture.mockRejectedValue('request failed');

      const result = Service.getDogPicture();
      
      expect(Service.getDogPicture).toHaveBeenCalled();
      expect(Service.getDogPicture).toHaveBeenCalledTimes(1);
      await expect(result).rejects.toMatch('request failed');
    });
  })
});
