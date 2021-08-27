let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let meuArray = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (index === numbers.length - 1){
        meuArray.push(numbers[index] * 2);
    }
    else {
        meuArray.push(numbers[index] * numbers[index +1]);
    }
}

console.log(meuArray);