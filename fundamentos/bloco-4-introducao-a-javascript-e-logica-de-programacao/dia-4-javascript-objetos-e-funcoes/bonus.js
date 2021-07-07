//B/õnus 01 - Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function Romanos(roma) {
  let romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let arrayNumbers = [];
  let result = 0;

  for (let indice in roma) {
    arrayNumbers[indice] = romanos[roma[indice]];
  }

  for (let indice in arrayNumbers) {
    if (arrayNumbers[indice] < arrayNumbers[indice + 1]) {
      arrayNumbers[indice + 1] = arrayNumbers[indice + 1] - arrayNumbers[indice];
    } else {
      result += arrayNumbers[indice];
    }
  }

  return result;
}

console.log(Romanos('MMXVIII'));

// Bônus 02 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

const vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vector) {
  const result = [];
  for (let index = 0; index < vector.length; index += 1) {
    const numbers = vector[index];
    for (let indexSub = 0; indexSub < numbers.length; indexSub += 1) {
      const current = numbers[indexSub];
      if ((current % 2) === 0) {
        result.push(current);
      } 
    }
  }
  return result;
}

console.log(arrayOfNumbers(vector));

