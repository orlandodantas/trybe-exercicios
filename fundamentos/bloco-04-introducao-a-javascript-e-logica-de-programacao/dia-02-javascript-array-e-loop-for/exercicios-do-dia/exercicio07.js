let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorValor = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (index === 0) {
        menorValor = numbers[index];
    }
    if (menorValor > numbers[index]) {
        menorValor = numbers[index];
    }
}

console.log(menorValor);