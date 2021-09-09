function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// 01. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" ... 
function criarListDays () {
  let days = document.getElementById('days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let day of dezDaysList) {
    let dayLI = document.createElement('li');
    dayLI.innerText = day;
    dayLI.classList.add('day');
    if ((day === 24) || (day === 25) || (day === 31)) {
      dayLI.classList.add('holiday');
    }

    if ((day === 4) || (day === 11) || (day === 18) || (day === 25)) {
      dayLI.classList.add('friday');
    }
    days.appendChild(dayLI);
  }
}

criarListDays();

// 02. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
function criarBotao (name, id) {
  const botoesConteiner = document.querySelector('.buttons-container');

  let botao = document.createElement('button');
  botao.innerText = name;
  botao.id = id;

  botoesConteiner.appendChild(botao);
}

criarBotao('Feriados', 'btn-holiday');

// 03. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
function mostrarFeriados () {
  let buttonFeriados = document.getElementById('btn-holiday');
 
  // Adicionando evento de clique no buttonFeriados
  buttonFeriados.addEventListener('click', () => {
    let diasFeriados = document.getElementsByClassName('holiday');
    
    if (diasFeriados[0].style.backgroundColor !== 'orange') {
      iterarFeriadosColor('orange', diasFeriados);
    } 
    else {
      iterarFeriadosColor('rgb(238,238,238)', diasFeriados);
    }

    // Função que muda a cor de um array de feriados
    function iterarFeriadosColor (cores, meuArray) {
      for (let index = 0; index < diasFeriados.length; index += 1) {
        meuArray[index].style.backgroundColor = cores;
      }
    }
    
  })
}

mostrarFeriados();

// 04. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Usando a função que criei no passo 02 para criar um botão.
criarBotao('Sexta-feira', 'btn-friday');

// 05. Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
function mostrarSextaFeira () {
  let buttonSexta = document.getElementById('btn-friday');
  let fridays = [];
  buttonSexta.addEventListener('click', () => {
    const dayFriday = document.getElementsByClassName('friday');
    
    if (fridays.length === 0) {
      for (day in dayFriday) {
        fridays.push(dayFriday[day].innerText);
        dayFriday[day].innerText = 'Sextou!';
      }
    } else {
      for (day in dayFriday) {
        dayFriday[day].innerText = fridays[day];
      }
      fridays = [];
    }
  })
}

mostrarSextaFeira();

// 06. Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
function zoomOnDay () {
  let li = document.getElementsByClassName('day');

  for (index of li){
    index.addEventListener('mouseover', elemento => {
      let day = elemento.target;
      day.style.fontSize = '26px';
    })
    
    index.addEventListener('mouseout', elemento => {
      let day = elemento.target;
      day.style.fontSize = '20px';
    })
  }
}

zoomOnDay();

// 07. Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
function adicionaTarefa (tarefa) {
  let myTasks = document.querySelector('.my-tasks');

  let task = document.createElement('span');
  task.innerText = tarefa;

  myTasks.appendChild(task);
}

adicionaTarefa('cozinhar');

// 08. Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
function addLegenda (cor) {
  let myTasks = document.querySelector('.my-tasks');

  let legenda = document.createElement('div');
  legenda.classList.add('task');
  legenda.style.backgroundColor = cor;

  myTasks.appendChild(legenda);
}

addLegenda('red');

// 09. Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
function selected () {
  let tasks = document.getElementsByClassName('task');

  for (task of tasks) {
    task.addEventListener('click', elemento => {
      let selecionado = elemento.target;

      if (!selecionado.classList.contains('selected')) {
        selecionado.classList.add('selected');
      }
      else {
        selecionado.classList.remove('selected');
      }
    })
  }
}

selected();

// 10. Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
function addTaskOnDay () {
  let days = document.getElementsByClassName('day');
  let taskSelected = document.getElementsByClassName('selected');

  for (day of days) {
    day.addEventListener('click', elemento => {
      let dia = elemento.target;

      if (taskSelected.length > 0) {
        if (dia.style.backgroundColor !== taskSelected[0].style.backgroundColor) {
          dia.style.backgroundColor = taskSelected[0].style.backgroundColor;
        }
        else {
          dia.style.backgroundColor = 'rgb(238,238,238)';
        }
      }
    })
  }
}

addTaskOnDay();

// BONUS. Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
function meusCompromissos () {
  let input = document.getElementById('task-input');
  let buttonAdd = document.getElementById('btn-add');
  let task = document.querySelector('.my-tasks');

  // let list = document.createElement('ul');
  // list.classList.add('list-task');
  // task.appendChild(list);

  buttonAdd.addEventListener('click', () => {
    if (input.value !== '') {
      let listItem = document.createElement('li');
      listItem.innerText= input.value;
      task.appendChild(listItem);
      input.value = '';
    }
    else {
      alert('Error: O campo compromissos deve ser prenchido.');
    }
  });

  input.addEventListener('keypress', elemento => {
    if (elemento.keyCode === 13) {
      if (input.value !== '') {
        let listItem = document.createElement('li');
        listItem.innerText= input.value;
        task.appendChild(listItem);
        input.value = '';
      }
      else {
        alert('Error: O campo compromissos deve ser prenchido.');
      }
    }
  });
}

meusCompromissos();
