const promiseRefac = () => {
  const numbers = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() *51) + 1,
  );
  const sum = numbers.map((number) => number * number)
  .reduce((acc, number) => acc + number, 0);
  
  if (sum >= 8000) {
    throw new Error();
  }
  
  return sum;
};

const sumArray = (sum) => {
  [2, 3, 5, 10].map((number) => sum / number)
  .reduce((acc, curr) => acc + curr);
};

const myPromise = async () => {
  try {
    const sum = await promiseRefac();
    const sumFromSum = await sumArray(sum);
  } catch (error) { 
  console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  };
};

myPromise();
