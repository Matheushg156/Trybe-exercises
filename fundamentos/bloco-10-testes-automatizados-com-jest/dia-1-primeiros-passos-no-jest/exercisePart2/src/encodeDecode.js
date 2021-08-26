const encode = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

const decode = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};

const encodeOrDecode = (obj, word) => {
  const splitWord = word.split('');
  const result = splitWord.map((character) => {
    if(obj[character]) {
      return obj[character];
    }
    return character;
  });
  return result.join('');
};

console.log(encodeOrDecode(encode, 'ortodoxo'));

module.exports = {
  encode,
  decode,
  encodeOrDecode,
};
