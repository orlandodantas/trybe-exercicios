function verificaPalavra(word, ending) {
  let count = 0;
  let palavraReversa = word.split('').reverse().join('');
  let palavraReversa2 = ending.split('').reverse().join('');

  for (let index = 0; index < ending.length; index += 1) {
    if (palavraReversa2[index] === palavraReversa[index]) {
      count += 1;
    }
  }

  if (count === ending.length) {
    return true;
  }
  else{
    return false;
  }
}


console.log(verificaPalavra('trybe', 'be'));
console.log(verificaPalavra('joaofernando', 'fernan'));