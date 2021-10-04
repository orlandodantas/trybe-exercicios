const verificaRespostas = (gabarito, respostasEstudante) => {
  let total = 0;
  for (let index = 0; index < gabarito.length; index+= 1) {
    if (gabarito[index] === respostasEstudante[index]) {
      total += 1;
    } else if (respostasEstudante[index] === 'N.A') {
      continue;
    } else {
      total -= 0.5;
    }
  }

  return total;
};

const hof = (gabarito, respostasEstudante, callback) => {
  return callback(gabarito, respostasEstudante);
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaRespostas));