function maxValue(value) {
  let maior = {
      chave: null,
      valor: 0
  }
  for (const key in value) {
      if (value[key] > maior.valor) {
          maior.chave = key;
          maior.valor = value[key];
      }
  }
  return maior.chave;
}

console.log(maxValue([2, 3, 6, 7, 10, 1]));