// Desafio 9
function encode(crypt) {
  let vogal = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let encrypt = crypt.split('');

  for (let key in encrypt) {
    if (vogal[encrypt[key]]) {
      encrypt[key] = vogal[encrypt[key]];
    }
  }

  return encrypt.join('');
}

function decode(crypt) {
  let vogal = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let encrypt = crypt.split('');

  for (let index in encrypt) {
    if (vogal[encrypt[index]]) {
      encrypt[index] = vogal[encrypt[index]];
    }
  }

  return encrypt.join('');
}

module.exports = {encode, decode};
