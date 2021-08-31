function maxRepeats(value) {
  let max = null;
  let countOne = 0;
  let countTwo = 0;

  for (let index = 0; index < value.length; index += 1) {
    for (let j = index; j < value.length; j += 1) {
      if (value[index] === value[j]) {
        countOne += 1;
      }
    }
    
    if (countOne > countTwo) {
      max = value[index];
      countTwo = countOne;
    }

    countOne = 0;
  }

  return max;
}

console.log(maxRepeats([2, 3, 2, 5, 8, 2, 3]));