const assert = require('assert');

// escreva greet abaixo

const greet = (name, greetings = 'Hi') => `${greetings} ${name}`;

/* console.log(greet('Matheus'));
console.log(greet('Matheus', 'Bora tomar um cafeinho')); */

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');
