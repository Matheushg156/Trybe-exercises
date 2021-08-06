const books = require('./data.js');

const assert = require('assert');

function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  books.forEach((book) => {
    if (!nameBook || nameBook.length > book.name.length) {
      nameBook = book.name;
    }
  });

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName());

assert.strictEqual(smallerName(), 'Duna');