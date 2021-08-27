let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

console.log(soma);

console.log('==========================================================');

let total = 0;

for (const number of numbers) {
    total += number;
}

console.log(total);
