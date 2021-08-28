const n = 5;
let estrelas = '';
let espacoVazio = '';

let meio = (n + 1) / 2;
let ladoEsquerdo = meio;
let ladoDireito = meio;

for (let index = 0; index <= meio; index += 1) {
    for (let segundoIndex = 0; segundoIndex <= n; segundoIndex += 1) {
        if (segundoIndex > ladoEsquerdo && segundoIndex < ladoDireito) {
            estrelas += '*';
        }
        else {
            estrelas += ' ';
        }
    }
    console.log(estrelas);
    estrelas = '';
    ladoDireito += 1;
    ladoEsquerdo -=1;
}

// Esta código foi baseado no gabarito da Trybe segue o link: 
//https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-logica-de-programacao-e-algoritmos/solutions/83bb1cd0-be4a-40cf-a9c2-22d71f700144/gabarito-dos-exercicios/2c2c208c-ebba-464a-9a18-d89f32063df3?use_case=calendar