const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Test if objects are the same', () => {
  it('obj1 is equal to obj2 ?', () => {
    const actual = obj1;
    const expeted = obj2;
    expect(actual).toEqual(expeted);
  });
  it('obj2 is equal to obj3 ?', () => {
    const actual = obj2;
    const expeted = obj3;
    expect(actual).toEqual(expeted);
  });
  it('obj1 is equal to obj3 ?', () => {
    const actual = obj1;
    const expeted = obj3;
    expect(actual).toEqual(expeted);
  });
});
