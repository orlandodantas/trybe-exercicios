const object = (obj, chave, valor) => {
  obj[chave] = valor;
  return obj;
};

const aluno = {};

const eu = object(aluno, 'nome', 'Orlando');
console.log(eu);