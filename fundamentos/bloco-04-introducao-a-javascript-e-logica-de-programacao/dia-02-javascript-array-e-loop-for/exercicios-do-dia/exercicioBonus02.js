let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let segundoIndex = 0; segundoIndex < index; segundoIndex += 1) {
        if (numbers[index] > numbers[segundoIndex]) {
            let posicao = numbers[segundoIndex];
            numbers[segundoIndex] = numbers[index];
            numbers[index] = posicao;

        }
    }
}

console.log(numbers);