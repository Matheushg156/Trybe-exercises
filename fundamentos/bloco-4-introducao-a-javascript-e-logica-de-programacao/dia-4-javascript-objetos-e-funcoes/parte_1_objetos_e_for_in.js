let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//Exercício 01 - Imprimir mensagem de boas-vinda.

console.log('Bem-vinda ' + info.personagem);

//Exercício 02 - Adicionar (recorrente: sim) no objeto "info".

info.recorrente = 'Sim';

console.log(info);

// Exercício 03 - faça um for/in que exiba todas as chaves do objeto "info".

for (let index in info) {
  console.log(index);
}

//Exercício 04 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

for (let index in info) {
  console.log(info[index]);
}

//Exercício 05 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let infoTwo = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let index in info) {
  if (index === 'recorrente' && info[index] === 'Sim' && infoTwo[index] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[index] + ' e ' + infoTwo[index]);
  }
}
