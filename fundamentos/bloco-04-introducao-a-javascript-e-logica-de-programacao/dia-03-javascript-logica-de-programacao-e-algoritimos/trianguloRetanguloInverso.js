const n = 5;
let estrelas = '';

for (let index = n; index > 0; index -= 1) {
    let espacoVazio = '';
    for (let segundoIndex = 1; segundoIndex < index; segundoIndex += 1) {
        espacoVazio += ' ';
    }
    estrelas += '*';

    console.log(espacoVazio, estrelas);
}