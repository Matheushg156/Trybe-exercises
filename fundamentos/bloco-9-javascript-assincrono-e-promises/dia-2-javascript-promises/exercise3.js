const myPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const numbers = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() *51) + 1,
    );
    const sum = numbers.map((number) => number * number)
    .reduce((acc, number) => acc + number, 0);

    (sum < 8000) ? resolve() : reject();
  });
  promise
  .then((sum) => [2, 3, 5, 10].map((number) => sum / number))
  .catch(() => console.log('Promise rejeitada'));
};

myPromise();
