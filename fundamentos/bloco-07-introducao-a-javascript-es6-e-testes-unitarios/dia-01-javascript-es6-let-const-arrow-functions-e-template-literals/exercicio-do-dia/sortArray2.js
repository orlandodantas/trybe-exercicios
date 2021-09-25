const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Credits: https://www.w3schools.com/jsref/jsref_sort.asp;
const ordenaArray = (arraySort) => arraySort.sort((a, b) =>  a-b);

const arrayOrdenado = ordenaArray(oddsAndEvens);
console.log(arrayOrdenado); // será necessário alterar essa linha 😉