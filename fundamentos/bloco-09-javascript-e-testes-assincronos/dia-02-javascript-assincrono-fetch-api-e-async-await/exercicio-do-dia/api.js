const URL = `https://api.coincap.io/v2/assets`;
// const URL = `https://api.coincap.io/v2/assets?limit=10`;

const convertCurrency = async (value) => {
  const URLConvert = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';

  // return fetch(URLConvert)
  //   .then((response) => response.json())
  //   .then((data) => data.usd.brl);

  try {
    const response = await fetch(URLConvert);
    const data = await response.json();
    return data.usd.brl * value;
  } catch (error) {
    console.log(error);
  }
  
}

const append = (cryptoMoedas) => {
  const ul = document.getElementById('list-moedas');

  cryptoMoedas.data.forEach(async (cryptoMoeda, index) => {
    if (index < 10) {
      const { name, symbol, priceUsd } = cryptoMoeda;

      const currencyBrl = await convertCurrency(parseFloat(priceUsd));
      const li = document.createElement('li');

      li.innerText = `${name} (${symbol}): ${currencyBrl.toFixed(2)}`;
      ul.appendChild(li);
    }
  });
};

const getCrypto = () => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => append(data))
    .catch((err) => console.log(err));
}

window.onload = getCrypto;
