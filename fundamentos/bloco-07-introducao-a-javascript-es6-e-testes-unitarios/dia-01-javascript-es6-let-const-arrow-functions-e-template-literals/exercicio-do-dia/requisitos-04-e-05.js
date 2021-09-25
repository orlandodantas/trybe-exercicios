// Requisito 04
// Aqui estou criando a função
const replaceLetter = (frase, word) => frase.replace('x', word);

// Aqui estou invocando a função
const wordChanged = replaceLetter('Tryber x aqui!', 'Orlando');

console.log(wordChanged);

// Requisito 05
const skills = ['Empatia', 'Foco', 'SQL', 'Delphi', 'GIT'];
const concatenar = (value) => {
  skills.sort();
  let fraseCompleta = `${value} Minhas cinco principais habilidades são: \n`;
  skills.forEach((key) => {
    fraseCompleta += `${key}\n`;
  });

  return fraseCompleta;
}

const fraseSkills = concatenar(wordChanged);

console.log(fraseSkills);