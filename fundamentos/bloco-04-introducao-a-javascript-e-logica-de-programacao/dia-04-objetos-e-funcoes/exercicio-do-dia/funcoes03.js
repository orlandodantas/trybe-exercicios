function minValue(value) {
  menor = {
      chave: null,
      valor: value[0]
  }

  for (const key in value){
      if (value[key] < menor.valor) {
        menor.chave = key;
        menor.valor = value[key];
      }
  }
  return menor.chave;
}

console.log(minValue([2, 4, 6, 7, 10, 0, -3]));