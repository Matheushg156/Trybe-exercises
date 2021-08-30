const techList = (tech, name) => {
  const techSort = tech.sort();

  if (techSort.length === 0) {
    return 'Vazio!';
  }

  const result = techSort.reduce((acc, curr) => {
    let obj = {
      tech: curr,
      name: name,
    };
    acc.push(obj);
    return acc;
  }, []);
  return result;
};

module.exports = techList;