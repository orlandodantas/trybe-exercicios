const fs = require('fs').promises;
const { expect } = require("chai");
const sinon = require("sinon");

const { writeFile } = require('../writeFile');

describe('Escreve um conteúdo em um arquivo', () => {
  before(() => {
    sinon.stub(fs, 'appendFile').resolves(undefined);
  });

  after(() => {
    fs.appendFile.restore();
  });

  const CONTENT = 'olá como vai\n';
  
  it('Verifica se o tipo do retorno é string', async() => {
    const result = await writeFile('hello.txt', CONTENT);

    expect(result).to.be.a('string');
  });

  it('Verifica se o retorno é "ok"', async () => {
    const result = await writeFile('hello.txt', CONTENT);

    expect(result).to.be.equal('ok');
  });
});
