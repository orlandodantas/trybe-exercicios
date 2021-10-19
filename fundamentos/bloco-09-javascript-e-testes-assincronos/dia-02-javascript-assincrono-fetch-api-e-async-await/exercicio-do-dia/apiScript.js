// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const writeScreen = (object) => {
  const paragraphy = document.getElementById('joke');
  paragraphy.innerText = object.joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => writeScreen(data));
};

window.onload = () => fetchJoke();