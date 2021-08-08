const books = require('./data.js');

const assert = require('assert');

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  return books.find((book) => (
    book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3
  )).name;
}

console.log(authorWith3DotsOnName());

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);
