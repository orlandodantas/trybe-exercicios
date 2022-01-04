const fetch = require('node-fetch');

const numberRandon = () => {
  const number = Math.floor(Math.random() * 100);

  return number;
}
console.log(numberRandon());

const strUppercase = (word) => word.toUpperCase();
console.log(strUppercase('ola'));

const firstLetter = (word) => word[0];
console.log(firstLetter('Orlando'));

const concatWords = (word1, word2) => `${word1} ${word2}`;
console.log(concatWords('José', 'Orlando'));

// Credits: Essa função abaixo foi baseada no gabarito da Trybe. Link: https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-mocks-e-inputs/solutions/96709d24-8962-42f8-9318-a5dac56aacc5/exercicios/9188582b-4426-4a99-a0fd-f0244162dd8f?use_case=calendar;
const getDogPicture = async () => {
  const URL = 'https://dog.ceo/api/breeds/image/random';
  const response = await fetch(URL);
  const data = await response.json();

  return response.ok ? Promise.resolve(data) : Promise.reject(data);
}
// getDogPicture()
//   .then((resp) => console.log(resp));

module.exports = {
  numberRandon,
  strUppercase,
  firstLetter,
  concatWords,
  getDogPicture,
};