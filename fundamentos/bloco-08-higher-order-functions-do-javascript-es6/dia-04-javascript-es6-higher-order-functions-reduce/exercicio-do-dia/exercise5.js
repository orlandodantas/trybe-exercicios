// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acumulator, currentValue) => {
    const arrayNome = currentValue.split('');

    const totalCount = arrayNome.reduce((total, letra) => {
      return (letra.toUpperCase() === 'A') ? (total + 1) : total;
    }, 0);

    return acumulator + totalCount;
  }, 0);
}

console.log(containsA());