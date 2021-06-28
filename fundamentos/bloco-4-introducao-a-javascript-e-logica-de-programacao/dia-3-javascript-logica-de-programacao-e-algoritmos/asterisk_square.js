/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . */

//Variaveis necessarias para o exercício //

let n = 50; //Variavel que vai determinar o lado "n" do quadrado.
let symbol = '*'; //O simbolo que forma o quadrado
let inputLine = ''; //Um espaço vazio para formar as linhas de asteriscos

//Primeiro loop para criar a linha de asteriscos
for (let index = 0; index < n; index += 1) {
  inputLine = inputLine + symbol;
}
//Segundo loop para imprimir a linha "n" vezes para formar o quadrado.
for (let index = 0; index < n; index += 1) {
  console.log(inputLine);
}
