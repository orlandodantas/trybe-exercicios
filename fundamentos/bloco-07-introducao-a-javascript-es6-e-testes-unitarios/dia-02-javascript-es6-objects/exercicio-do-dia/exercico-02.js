const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* Requisito 01 */
const addPropertyObj = (obj, chave, valor) => {
  obj[chave] = valor;
  // return obj; // Não necessariamente necessito retorna essa linha;
}
addPropertyObj(lesson2,'turno', 'noite');
console.log('---Requisito 01---');
console.log(lesson2);

/* Requisito 02 */
console.log('\n---Requisito 02---');
const listKeys = (obj) => Object.keys(obj).forEach((key) => {console.log(key)});
listKeys(lesson1);

/* Requisito 03 */
console.log('\n---Requisito 03---');
const lengthObj = (obj) => {
  const tamanhoOBj = Object.keys(obj).length;
  console.log(tamanhoOBj);
  
  // Credits: Carlos Cinelli em 07/05/2014 link: https://pt.stackoverflow.com/questions/15058/como-saberlesson2-o-tamanho-quantidade-de-propriedades-atributos-de-um-objeto-em-ja
};
lengthObj(lesson3);

/* Requisito 04 */
console.log('\n---Requisito 04---');
const listValues = (obj) => Object.values(obj).forEach((values) => {console.log(values)});
listValues(lesson2);

/* Requisito 05 */
console.log('\n---Requisito 05---');
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

/* Requisito 06 */
console.log('\n---Requisito 06---');
const totalEstudantes = (obj) => {
  let total = 0;

  Object.keys(obj).forEach((key) => {
    total += obj[key].numeroEstudantes;
  });
  // console.log(obj.lesson1.numeroEstudantes);

  return total;
}
console.log(totalEstudantes(allLessons));

/* Requisito 07 */
console.log('\n---Requisito 07---');
const getKey = (obj, posicao) => Object.values(obj)[posicao];
console.log(getKey(lesson1, 0));

/* Requisito 08 */
console.log('\n---Requisito 08---');
const existsEntradas = (obj, chave, value) => {
  // Pego um array de array com chave valor
  const entradas = Object.entries(obj);
  let result;

  // faco uma iteração no array principal e testo cada filho.
  entradas.forEach((key) => {
    if (key[0] === chave && key[1] === value) {
      result = true;
      return;
    } else {
      result = false;
    }
  });
  return result;
};

console.log(existsEntradas(lesson3, 'turno', 'noite'));
// console.log(existsEntradas(lesson3, 'materia', 'Maria Clara'));

/* Bonus 01 */
console.log('\n---bonus 01---');
const countMath = (obj) => {
  let total = 0;

  Object.keys(obj).forEach((key) => {
    if (obj[key].materia === 'Matemática') {
      total += obj[key].numeroEstudantes;
    }
  });

  return total;
};
console.log(countMath(allLessons));

/* Bonus 02 */
console.log('\n---bonus 02---');
const createReport = (obj, value) => {
  const object = {
    professor: '',
    aulas: [],
    estudantes: 0,
  };
  
  let total = 0;

  Object.keys(obj).forEach((key) => {
    if (obj[key].professor === value) {
      object.professor = obj[key].professor;
      object.aulas.push(obj[key].materia);
      total += obj[key].numeroEstudantes;
      object.estudantes = total;
    }
  });

  return object;
};
console.log(createReport(allLessons, 'Maria Clara'));
