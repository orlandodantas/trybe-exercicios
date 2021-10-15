const uppercase = require('./exercise-07');

it('Testa se passado uma string, ela passar a ser maiuscula', (done) => {
  const test = (str) => {
    try {
      expect(str).toBe('OLA');
      done();
    } catch (error) {
      done(error);
    }
  }

  uppercase('ola', test);
});