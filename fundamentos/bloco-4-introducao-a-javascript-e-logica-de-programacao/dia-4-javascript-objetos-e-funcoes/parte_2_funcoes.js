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

//Exercício 03 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValor (array) {
  let menor = 0;

  for (let index in array) {
    if (array[index] < array[menor] ) {
      menor = index;
    }
  }
  return menor;
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));

//Exercício 04 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome (nomes) {
  let maiorNome = nomes[0];

  for (let index in nomes) {
    if (maiorNome.length < nomes[index].length) {
      maiorNome = nomes[index];
    }
  }
  return maiorNome;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//Exercício 05 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maisRepete (numeros) {
  let contadorRepetidos = 0;
  let contadorNumero = 0;
  let indexRepetido = 0;

  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contadorNumero += 1;
      }
    }
    if (contadorNumero > contadorRepetidos) {
      contadorRepetidos = contadorNumero;
      indexRepetido = index;
    }
    contadorNumero = 0;
  }
  return numeros[indexRepetido];
}
console.log(maisRepete([5, 3, 7, 20, 11, 20, 12, 20, 14, 20, 15, 17, 15]));

//Exercício 06 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somatorioDeN (n) {
  let somatorio = 0;
  
  for (let index = 1; index <= n; index += 1) {
    somatorio = somatorio + index;
  }
  return somatorio;
}

console.log(somatorioDeN(5));







