const books = require('./data.js');

const assert = require('assert');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  return books.filter((book) => book.releaseYear <= 1960)
  .map((bookName) => `${bookName.name}`);
}

console.log(oldBooks());

assert.deepStrictEqual(oldBooks(), expectedResult);