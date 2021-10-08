// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Tangerina', 'Pera', 'Jaca'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite em po', 'melancia', 'maça'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const arrayFruitSalad = [...fruit, ...additional];
  return arrayFruitSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));