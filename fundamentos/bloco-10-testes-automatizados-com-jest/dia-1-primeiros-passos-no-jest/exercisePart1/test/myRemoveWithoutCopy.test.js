const myRemoveWithoutCopy = require('../src/myRemoveWithoutCopy');

describe('myRemoveWithoutCopy', () => {
  it('Verify if myRemoveWithoutCopy() returns what is expected', () => {
    const actual = myRemoveWithoutCopy([1, 2, 3, 4], 3);
    const expected = [1, 2, 4];
    
    expect(actual).toEqual(expected);
  });
  it('Verify if myRemoveWithoutCopy() returns what is not expected', () => {
    const actual = myRemoveWithoutCopy([1, 2, 3, 4], 3);
    const expected = expect.not.arrayContaining([1, 2, 3, 4]);
    
    expect(actual).toEqual(expected);
  });
  it('Verify if array has not been modified', () => {
    const actual = myRemoveWithoutCopy([1, 2, 3, 4]);
    const expected = [1, 2, 3, 4];
    
    expect(actual).toEqual(expected);
  });
  it('Verify if myRemoveWithoutCopy() returns what is expected', () => {
    const actual = myRemoveWithoutCopy([1, 2, 3, 4], 5);
    const expected = [1, 2, 3, 4];
    
    expect(actual).toEqual(expected);
  });
});
