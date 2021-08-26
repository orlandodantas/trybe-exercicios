const angulo1 = -60;
const angulo2 = -60;
const angulo3 = 61;

if (angulo1 + angulo2 + angulo3 === 180) {
    console.log(true);
}
else if ((angulo1 + angulo2 + angulo3) < 0) {
    console.log("Houve algum erro");
}
else {
    console.log(false);
}