const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function adicionaClasseTech (elemento) {
    let classes = document.getElementsByClassName('tech');
    for (classe of classes) {
        classe.classList.remove('tech');
    }
    elemento.target.classList.add('tech');
}

firstLi.addEventListener('click', adicionaClasseTech);
secondLi.addEventListener('click', adicionaClasseTech);
thirdLi.addEventListener('click', adicionaClasseTech);

// O exercio 2 foi baseado no código do gabarito do course, pois não tinha conseguido compreender o enunciado da questão.

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function onChangeElementoTech (elemento) {
    let classes = document.getElementsByClassName('tech');
    for (classe of classes) {
        classe.innerText = elemento.target.value;
    } 
}

input.addEventListener('input', onChangeElementoTech);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
myWebpage.addEventListener('dblclick', () => {
    window.location.href = 'https://orlandodantas.github.io/'
})

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
const cores = ['red', 'grenn', 'yellow', 'black', 'grey'];
cor = 0;
myWebpage.addEventListener('mouseover', elemento => {
    elemento.target.style.color = cores[cor];
    cor += 1;
    if (cor === cores.length) {
        cor = 0;
    }
})

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.