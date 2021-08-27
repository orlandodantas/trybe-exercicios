let meuArray = [];
for (let index = 0; index <= 25; index += 1) {
    meuArray.push(index);
}

for (arraySimples of meuArray) {
    console.log('O valor ', arraySimples, 'Dividido por dois dá: ', arraySimples / 2);
}