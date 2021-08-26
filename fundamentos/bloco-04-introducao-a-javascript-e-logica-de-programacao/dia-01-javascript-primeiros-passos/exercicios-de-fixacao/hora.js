const curretHour = 10;
let message = "";

if (curretHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} 
else if (curretHour >= 18) {
    message = "Rango da noite, vamos jantar :D";
} 
else if (curretHour >= 14) {
    message = "Vamos fazer um bolo pro café da tarde?" ;
} 
else if (curretHour >= 11) {
    message = "Hora do almoço!!!";
} 
else if (curretHour >= 4 && curretHour <= 11) {
    message = "Hmmm, cheiro de café recém passado";
}

console.log(message);