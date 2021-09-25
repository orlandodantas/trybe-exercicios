const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listaObjeto = (obj) => {
  const array = Object.keys(obj);

  for (let index = 0; index < array.length; index += 1) {
    const descricao = `${array[index]}, ${obj[array[index]]}`;
    console.log(descricao);
  }
};

listaObjeto(student1);
console.log('');
listaObjeto(student2);