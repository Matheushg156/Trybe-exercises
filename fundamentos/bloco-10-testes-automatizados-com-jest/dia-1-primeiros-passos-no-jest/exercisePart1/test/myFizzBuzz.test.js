const myFizzBuzz = require('../src/myFizzBuzz');

describe('myFizzBuzz(num)', () => {
  it('Test myFizzBuzz(num) with number divisible by 3 and 5', () => {
    const actual = myFizzBuzz(15);
    const expected = 'fizzbuzz';
    expect(actual).toBe(expected);
  });
  it('Test myFizzBuzz(num) with number divisible by 3', () => {
    const actual = myFizzBuzz(9);
    const expected = 'fizz';
    expect(actual).toBe(expected);
  });
  it('Test myFizzBuzz(num) with number divisible by 5', () => {
    const actual = myFizzBuzz(20);
    const expected = 'buzz';
    expect(actual).toBe(expected);
  });
  it('Test myFizzBuzz(num) with number not divisible by 3 and 5', () => {
    const actual = myFizzBuzz(13);
    const expected = 13;
    expect(actual).toBe(expected);
  });
  it('Test myFizzBuzz(num) when num is not a number', () => {
    const actual = myFizzBuzz('Xablau');
    const expected = false;
    expect(actual).toBe(expected);
  });
});
