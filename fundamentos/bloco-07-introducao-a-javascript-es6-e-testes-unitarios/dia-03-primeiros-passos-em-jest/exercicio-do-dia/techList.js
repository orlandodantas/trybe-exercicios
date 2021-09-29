function techList(list, name) {
  let meuArray = list.sort();
  let arrayList = [];
  let result;
  for (let index = 0; index < meuArray.length; index += 1) {
    arrayList.push(
      {
        tech: meuArray[index],
        name,
      },
    );
  }

  if (arrayList.length === 0) {
    result = 'Vazio!';
  } else {
    result = arrayList;
  }
  return result;
}

module.exports = techList;
