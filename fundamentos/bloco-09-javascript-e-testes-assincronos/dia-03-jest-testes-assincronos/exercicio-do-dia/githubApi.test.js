// 1 - O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui
it('Verifica se repositorios se encontão na lista recebida', async () => {
  const URL = 'https://api.github.com/orgs/tryber/repos';
  expect.assertions(2);
  const listRepos = await getRepos(URL);

  const repos01 = 'sd-01-week4-5-project-todo-list';
  const repos02 = 'sd-01-week4-5-project-todo-list';

  expect(listRepos).toContain(repos01);
  expect(listRepos).toContain(repos02);
});

// 2 - Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach .
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});