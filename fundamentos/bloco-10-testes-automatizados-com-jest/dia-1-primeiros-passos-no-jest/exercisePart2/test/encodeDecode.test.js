const { encode, decode, encodeOrDecode } = require('../src/encodeDecode.js');

describe('Test function encodeOrDecode()', () => {
  it('encodeOrDecode is a function', () => {
    expect(typeof encodeOrDecode).toEqual('function');
  });
  it('converts only the "a" vowel into the number 1', () => {
    const actual = encodeOrDecode(encode, 'banana');
    const expected = 'b1n1n1';
    expect(actual).toEqual(expected);
  });
  it('converts only the "e" vowel into the number 2', () => {
    const actual = encodeOrDecode(encode, 'perecer');
    const expected = 'p2r2c2r';
    expect(actual).toEqual(expected);
  });
  it('converts only the "i" vowel into the number 3', () => {
    const actual = encodeOrDecode(encode, 'inibir');
    const expected = '3n3b3r';
    expect(actual).toEqual(expected);
  });
  it('converts only the "o" vowel into the number 4', () => {
    const actual = encodeOrDecode(encode, 'ortodoxo');
    const expected = '4rt4d4x4';
    expect(actual).toEqual(expected);
  });
  it('converts only the "u" vowel into the number 5', () => {
    const actual = encodeOrDecode(encode, 'urubu');
    const expected = '5r5b5';
    expect(actual).toEqual(expected);
  });
  it('checks if the return of function has the same number of characters', () => {
    const actual = encodeOrDecode(encode, 'maravilhoso').length;
    const expected = 11;
    expect(actual).toEqual(expected);
  });

  it('converts only the number "1" into the "a" vowel', () => {
    const actual = encodeOrDecode(decode, '1m1nd1');
    const expected = 'amanda';
    expect(actual).toEqual(expected);
  });
  it('converts only the number "2" into the "e" vowel', () => {
    const actual = encodeOrDecode(decode, '2m2rg2');
    const expected = 'emerge';
    expect(actual).toEqual(expected);
  });
  it('converts only the number "3" into the "i" vowel', () => {
    const actual = encodeOrDecode(decode, '3n3b3r');
    const expected = 'inibir';
    expect(actual).toEqual(expected);
  });
  it('converts only the number "4" into the "o" vowel', () => {
    const actual = encodeOrDecode(decode, '4xf4rd');
    const expected = 'oxford';
    expect(actual).toEqual(expected);
  });
  it('converts only the number "5" into the "u" vowel', () => {
    const actual = encodeOrDecode(decode, '5b5nt5');
    const expected = 'ubuntu';
    expect(actual).toEqual(expected);
  });
  it('checks if the return of function has the same number of characters', () => {
    const actual = encodeOrDecode(encode, 'xablau').length;
    const expected = 6;
    expect(actual).toEqual(expected);
  });
});
