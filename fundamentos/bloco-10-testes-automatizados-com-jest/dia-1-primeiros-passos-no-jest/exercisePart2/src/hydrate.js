const hydrate = (drinks) => {
  let quantDrinks = drinks.replace(/\D/gim, '');
  let sum = 0;

  for (let index = 0; index < quantDrinks.length; index += 1) {
    let quant = parseInt(quantDrinks[index], 10);
    if (quant !== 0) {
      sum += quant;
    }
  }
  if (sum === 1) {
    return sum + " copo de água";
  } else {
    return sum + " copos de água";
  }
};

module.exports = hydrate;
