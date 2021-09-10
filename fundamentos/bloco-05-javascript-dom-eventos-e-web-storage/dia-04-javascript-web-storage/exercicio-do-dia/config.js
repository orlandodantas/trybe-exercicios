window.onload = () => {

  // *****************************Salvando no local storage****************************************
  let corFundo = document.getElementById('backgroundColor');
  let corFonte = document.getElementById('fonteColor');
  let tamanhoFonte = document.getElementById('fonteSize');
  let espacoLinha = document.getElementById('lineSpace');
  let fonte = document.getElementById('fontType');
  let button = document.getElementById('button-save');
  let buttonReset = document.getElementById('button-reset');

  let arrayInputs = [corFundo, corFonte, tamanhoFonte, espacoLinha, fonte];

  // Evento do butão reset
  buttonReset.addEventListener('click', () => {
    // Limpando o Local Storage
    localStorage.clear();

    // Colocando valores padões dentro dos inputs.
    corFundo.value = 'aquamarine';
    corFonte.value = 'black';
    tamanhoFonte.value = '16px';
    espacoLinha.value = '20px';
    fonte.value = "'Courier New', Courier, monospace";
  })

  // Evento do butão Salvar
  button.addEventListener('click', () => {
    let configs = verificaInputVazio(arrayInputs);
    if (configs) {
      addLocalStorage(arrayInputs)
    } else {
      console.log('Erro');
    }
  })

  // Verifica se existe algum campo do tipo input vazio
  function verificaInputVazio (inputs) {
    let count = 0;
    for (input of inputs) {
      if (input.value === '') {
        count += 1;
      }
    }

    if (count > 0) {
      alert('Favor preencher todos os campos');
      return false;
    }
    else {
      return true;
    }
    
  }

  // Adiciona valor de inputs ao local storage
  function addLocalStorage (meuArray) {
    for (array of meuArray) {
      // Aqui estou pegando o id do inpute para salvar como key e o valeu como o valor.
      localStorage.setItem(array.id, array.value);
    }
  }

  // ******************************************Lendo do Local Storage*******************************
  //lendo dados do local storage
  let backgroundColor = localStorage.getItem('backgroundColor');
  let fonteColor = localStorage.getItem('fonteColor');
  let fonteSize = localStorage.getItem('fonteSize');
  let lineSpace = localStorage.getItem('lineSpace');
  let fontType = localStorage.getItem('fontType');

  //estou usando o if ternario para diminuir as linhas
  backgroundColor !== null ? corFundo.value = backgroundColor : corFundo.value = 'aquamarine';
  fonteColor !== null ? corFonte.value = fonteColor : corFonte.value = 'black';
  fonteSize !== null ? tamanhoFonte.value = fonteSize : tamanhoFonte.value = '16px';
  lineSpace !== null ? espacoLinha.value = lineSpace : espacoLinha.value = '20px';
  fontType !== null ? fonte.value = fontType : fonte.value = "'Courier New', Courier, monospace";
}