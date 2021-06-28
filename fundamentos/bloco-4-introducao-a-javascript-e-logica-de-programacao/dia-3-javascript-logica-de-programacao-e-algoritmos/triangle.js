/* Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. */

let n = 5;
let symbol = '*';
let inputLine = '';
//Nesse loop, a cada volta vai ser impresso 1 linha de asteriscos e essa quantidade de asteriscos aumenta a cada volta.
for (let index = 0; index < n; index += 1) {
  inputLine = inputLine + symbol;
  console.log(inputLine);
}
