const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 1 - Copie esse arquivo e edite apenas ele;



5 - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

//2 - Crie uma função que adicione a classe 'tech' ao elemento selecionado;
//2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function handleChangeTech (event) {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('.tech');
  event.target.classList.add('tech');
  input.value = '';
}

firstLi.addEventListener('click', handleChangeTech);

secondLi.addEventListener ('click', handleChangeTech);

thirdLi.addEventListener ('click', handleChangeTech);

//3 - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';

function changeTextTech (event) {
  const techElement = document.querySelector('.tech');
  techElement.innerHTML = event.target.value;
}

input.addEventListener('input', changeTextTech);

//4 - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página; 
//4.1. Que tal redirecionar para seu portifólio?

function redirecionar () {
  window.location.replace('https://blog.betrybe.com/');
}

myWebpage.addEventListener('dblclick', redirecionar);
