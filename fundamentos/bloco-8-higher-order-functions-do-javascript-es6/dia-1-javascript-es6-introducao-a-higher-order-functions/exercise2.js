const checkNumberSort = (numChosen, numSort) => numChosen === numSort;

const resultSort = (numChosen, checkNumberSort) => {
  let numSort = Math.floor((Math.random() * 5) + 1);
  return checkNumberSort(numChosen, numSort) ? 'Parabéns você ganhou!' : 'Tente novamente!';
}

console.log(resultSort(3, checkNumberSort));
