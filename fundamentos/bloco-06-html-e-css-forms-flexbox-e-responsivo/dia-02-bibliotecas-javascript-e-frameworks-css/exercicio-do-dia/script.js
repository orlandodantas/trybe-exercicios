//Preenchendo o select com as UFs
const selectUF = document.getElementById('select-uf');
const UFs = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];

UFs.forEach((value, index) => {
  const opcao = document.createElement('option');
  opcao.value = value;
  opcao.innerText = value;
  selectUF.appendChild(opcao);
});

/**
// Validações do formulario

// botão Limpar
const btnLimpar = document.getElementById('clear');
const mensagem = document.getElementsByClassName('mensagem')[0];

btnLimpar.addEventListener('click', () => {
  mensagem.innerText = '';
})

// botão enviar
const btnEnviar = document.getElementById('button-enviar');

btnEnviar.addEventListener('click', (elemento) => {
  elemento.preventDefault();
  const mensagem = document.getElementsByClassName('mensagem')[0];
  mensagem.innerText = '';
  
  validaFormInput(mensagem);
  validaFormRadio(mensagem);
  validaData(mensagem);

  // Se não encontrar encontrar problema em algum campo exibe todos os dados
  if (mensagem.innerText === '') {
    exibeDados(mensagem)
  }

});

// Valida os input text e textArea
function validaFormInput(mensagem) {
  const elemento = document.getElementsByTagName('input');
  const textArea = document.getElementById('input-resumo');

  for (element of elemento) {
    if (element.value === '') {
      // console.log(element.labels[0].innerText, 'vazio');
      mensagem.innerHTML += `Favor preencher o campo <strong> ${element.labels[0].innerText}  </strong>, <br>`;

    }
  }

  if (textArea.value === '') {
    mensagem.innerHTML += `Favor preencher o campo de <strong> Resumo do currículo: </strong>, <br>`
  }

}

// Valida os radio button
function validaFormRadio(mensagem) {
  const moradia = document.getElementsByName('moradia');

  if ((!moradia[0].checked) && (!moradia[1].checked)) {
    mensagem.innerHTML += `Favor preencher um dos campos de <strong> Moradia </strong>, <br>`;
  }
}

// Verifica data
function validaData(mensagem) {
  const date = document.getElementById('input-data');
  let dia = '';
  let mes = '';
  let ano = '';

  for (let index = 0; index < date.value.length; index += 1) {
    if ((index === 0) || (index === 1)) {
      dia += date.value[index];
    } else if ((index === 3) || (index === 4)) {
      mes += date.value[index];
    } else if ((index >= 6) && (index <= 9)) {
      ano += date.value[index];
    }
  }

  if((dia < 0) || (dia > 31)) {
    mensagem.innerHTML += `O formato do campo data está inválido, favor conferir. ${date.value} <br>`;
  } else if((mes < 0) || (mes > 12)) {
    mensagem.innerHTML += `O formato do campo data está inválido, favor conferir. ${date.value} <br>`;
  } else if(ano < 0) {
    mensagem.innerHTML += `O formato do campo data está inválido, favor conferir. ${date.value} <br>`;
  } else if((date.value[2] !== '/') || date.value[5] !== '/') {
    mensagem.innerHTML += `O formato do campo data está inválido, favor conferir. ${date.value} <br>`;
  }
}

// Exibe todos os dados
function exibeDados(mensagem) {
  const elemento = document.getElementsByTagName('input');
  const textArea = document.getElementById('input-resumo');
  const moradia = document.getElementsByName('moradia');

  // Input Text
  for (element of elemento) {
      mensagem.innerHTML += `<strong> ${element.labels[0].innerText} </strong> ${element.value}, <br>`;
  }

  // TextArea
  mensagem.innerHTML += `<strong> ${textArea.labels[0].innerText} </strong> ${textArea.value}, <br>`;

  // Radio Button
  if (moradia[0].checked) {
    mensagem.innerHTML += `<strong> ${moradia[0].labels[0].innerText} </strong> ${moradia[0].value}, <br>`;
  } else if (moradia[1].checked) {
    mensagem.innerHTML += `<strong> ${moradia[1].labels[0].innerText} </strong> ${moradia[1].value}, <br>`;
  }
} **/