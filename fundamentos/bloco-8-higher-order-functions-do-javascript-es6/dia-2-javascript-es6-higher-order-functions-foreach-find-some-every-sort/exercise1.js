const books = require('./data.js');

const assert = require('assert');

// Adicione o código do exercício aqui:

function authorBornIn1947() {
  const result = books.find((book) => book.author.birthYear === 1947);
  return result.author.name;
}

console.log(authorBornIn1947());

assert.strictEqual(authorBornIn1947(), 'Stephen King');
