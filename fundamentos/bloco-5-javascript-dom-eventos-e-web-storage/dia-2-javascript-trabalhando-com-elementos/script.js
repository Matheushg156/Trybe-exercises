//9 - Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

//1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

const titleH1 = document.createElement('h1');
titleH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(titleH1);

//2 - Adicione a tag main com a classe main-content como filho da tag body;

const tagMain = document.createElement('main');
tagMain.className = 'main-content';
document.body.appendChild(tagMain);

//3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const tagSection = document.createElement('section');
tagSection.className = 'center-content';
tagMain.appendChild(tagSection);

//4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const paragraph = document.createElement('p');
paragraph.innerHTML = 'Muitos projetos para fazer e pouco tempo';
tagSection.appendChild(paragraph);

//5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
tagMain.appendChild(sectionLeft);

//6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
tagMain.appendChild(sectionRight);

//7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

const image = document.createElement('img');
image.className = 'small-image';
image.src = 'https://picsum.photos/200';
sectionLeft.appendChild(image);

//8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

const lista = document.createElement('ul');
sectionRight.appendChild(lista);

const numbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (let index = 0; index < numbers.length; index += 1) {
  const elementosLista = document.createElement('li');
  elementosLista.innerHTML = numbers[index];
  lista.appendChild(elementosLista);
}
