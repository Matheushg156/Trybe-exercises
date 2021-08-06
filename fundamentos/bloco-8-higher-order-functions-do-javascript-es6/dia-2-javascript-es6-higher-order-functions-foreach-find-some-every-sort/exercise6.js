const books = require('./data.js');

const assert = require('assert');

const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
}

console.log(someBookWasReleaseOnThe80s());

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);