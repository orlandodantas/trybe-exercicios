const salarioBruto = 3000.00;
let aliquotaINSS;
let salarioDeduzINSS;
let aliquotaIR;
let salarioDeduzIR;

if (salarioBruto <= 1556.94) {
    aliquotaINSS = ((salarioBruto * 8) / 100);
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaINSS = ((salarioBruto * 9) / 100);
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaINSS = ((salarioBruto * 11) / 100);
}
else if (salarioBruto > 5189.82) {
    aliquotaINSS = 570.88;
}

salarioDeduzINSS = salarioBruto - aliquotaINSS;

// console.log(salarioDeduzINSS);

if (salarioDeduzINSS <= 1903.98) {
    aliquotaIR = 0;
}
else if (salarioDeduzINSS >= 1903.99 && salarioDeduzINSS <= 2826.65) {
    aliquotaIR = ((salarioDeduzINSS * 7.5) / 100) - 142.80;
    aliquotaIR = Math.round(aliquotaIR * 100) / 100;
}
else if (salarioDeduzINSS >= 2826.66 && salarioDeduzINSS <= 3751.05) {
    aliquotaIR = ((salarioDeduzINSS * 15) / 100) - 354.80;
    aliquotaIR = Math.round(aliquotaIR * 100) / 100;
}
else if (salarioDeduzINSS >= 3751.06 && salarioDeduzINSS <= 4664.68) {
    aliquotaIR = ((salarioDeduzINSS * 22.5) / 100) - 636.13;
    aliquotaIR = Math.round(aliquotaIR * 100) / 100;
}
else if (salarioDeduzINSS > 4664.68) {
    aliquotaIR = ((salarioDeduzINSS * 27.5) / 100) - 869.36;
    aliquotaIR = Math.round(aliquotaIR * 100) / 100;
}

salarioDeduzIR = salarioDeduzINSS - aliquotaIR;

console.log(salarioDeduzIR);