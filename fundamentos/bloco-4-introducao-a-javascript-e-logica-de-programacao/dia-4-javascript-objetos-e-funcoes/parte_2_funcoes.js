//Exercício 01 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome (word) {
  for (let index in word) {
    if (word[index] != word[(word.length - 1) - index]) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(verificaPalindrome('tenet'));

// Exercício 02 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorValor (array) {
  let maior = 0;

  for (let index in array) {
    if (array[index] > array[maior] ) {
      maior = index;
    }
  }
  return maior;
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]));



