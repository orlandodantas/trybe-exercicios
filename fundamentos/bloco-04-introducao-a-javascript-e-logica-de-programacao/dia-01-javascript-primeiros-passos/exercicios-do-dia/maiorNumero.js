//Retornar o maior de dois números
const number1 = 12;
const number2 = 23;

if (number1 > number2) {
    console.log("O maior número dos dois é: " + number1);
}
else {
    console.log("O maior número dos dois é: " + number2);
}

//Retorne o maior de três números
const a = 3;
const b = 25;
const c = 7;

if (a > b && a > c) {
    console.log("O maior número dos três é: " + a);
}
else if (b > a && b > c) {
    console.log("O maior número dos três é: " + b);
}
else if (c > a && c > b) {
    console.log("O maior número dos três é: " + c);
}