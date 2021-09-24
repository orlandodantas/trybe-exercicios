const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenaArray = (arraySort) => {
  for (let index = 0; index < arraySort.length; index += 1) {
    for (let j = index + 1; j < arraySort.length; j += 1) {
      if (arraySort[j] < arraySort[index]) {
        let troca = arraySort[index];
        arraySort[index] = arraySort[j];
        arraySort[j] = troca;
      }
    }
  }
  return arraySort;
}
const arrayOrdenado = ordenaArray(oddsAndEvens);

console.log(`O array ${arrayOrdenado} está ordenado`); // será necessário alterar essa linha 😉