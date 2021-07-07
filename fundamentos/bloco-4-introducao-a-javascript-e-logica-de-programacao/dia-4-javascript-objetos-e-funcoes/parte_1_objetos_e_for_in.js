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



