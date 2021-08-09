const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello';
  let acc = [];

  for (const person in people) {
    acc.push(`${greeting} ${people[person]}`)
  }
  return acc;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

console.log(greetPeople(parameter));

assert.strictEqual(typeof greetPeople, 'function');

assert.deepStrictEqual(greetPeople(parameter), result);

