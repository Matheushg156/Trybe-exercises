const books = require('./data.js');

const assert = require('assert');

const expectedResult = false;

function authorUnique() {
  return books.some((book) => book.author.birthYear !== book.author.birthYear);
}

console.log(authorUnique());

assert.strictEqual(authorUnique(), expectedResult);