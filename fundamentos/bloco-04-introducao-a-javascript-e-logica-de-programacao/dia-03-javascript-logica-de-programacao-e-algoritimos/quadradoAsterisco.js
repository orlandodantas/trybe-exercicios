const n = 5;

for (let index = 0; index < n; index += 1) {
    let estrelas = '';
    for (let segundoIndex = 0; segundoIndex < n; segundoIndex += 1) {
        estrelas = estrelas + '*';
    }
    console.log(estrelas);
}