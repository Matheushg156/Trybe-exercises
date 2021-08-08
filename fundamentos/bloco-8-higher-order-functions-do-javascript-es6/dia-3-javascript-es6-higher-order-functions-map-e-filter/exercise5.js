const books = require('./data.js');

const assert = require('assert');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
  .map((bookAuthor) => `${bookAuthor.author.name}`).sort();
}

console.log(fantasyOrScienceFictionAuthors());

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);