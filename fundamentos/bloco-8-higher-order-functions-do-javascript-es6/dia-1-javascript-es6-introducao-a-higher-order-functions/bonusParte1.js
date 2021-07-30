const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const maxDmg = dragon.strength;
  const dragonDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1) + minDmg));
  return dragonDamage;
};

const warriorAttack = (warrior) => {
  const maxDmg = warrior.strength * warrior.weaponDmg;
  const minDmg = warrior.strength;
  const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1) + minDmg));
  return warriorDamage;
};

const mageAttack = (mage) => {
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const mageMana = mage.mana;
  const status = {
    manaSpent: 0,
    damageDealt: 'Drink a mana potion!',
  };
  if (mageMana > 15) {
    const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
    status.manaSpent = 15;
    status.damageDealt = mageDamage;
    return status;
  }
  return status;
};
