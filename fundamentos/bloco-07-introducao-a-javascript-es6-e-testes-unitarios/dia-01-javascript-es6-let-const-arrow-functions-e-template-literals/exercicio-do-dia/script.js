const button = document.getElementById('button');
const contador = document.getElementById('contador');
clickCount = 0;

button.addEventListener('click', () => {
  clickCount += 1;
  contador.innerText = clickCount;
});
