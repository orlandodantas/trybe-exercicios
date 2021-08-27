let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impar = [];
for (const number of numbers) {
    if (number % 2 !== 0) {
        impar.push(number);
    }
}

if (impar.length > 0) {
    console.log("Números impares: ", impar, "Quatidade: ", impar.length);
}
else {
    console.log('nenhum valor ímpar encontrado');
}