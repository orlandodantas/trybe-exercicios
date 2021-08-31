function sum(n) {
  soma = 0;
  for (let index = 1; index <= n; index += 1){
    soma += index;
  }

  return soma;
}

console.log(sum(5));