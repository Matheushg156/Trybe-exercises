/* Parte I - Game Actions Simulator

Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada. */

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

/* Parte II

Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função. */

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageDamage = mageAttack(mage).damageDealt;
    mage.damage = mageDamage;
    mage.mana -= mageAttack(mage).manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn : (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    dragon.damage = dragonDamage;
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
  },
  batleResult: () => {
    gameActions.warriorTurn(warriorAttack);
    gameActions.mageTurn(mageAttack);
    gameActions.dragonTurn(dragonAttack);
    return battleMembers;
  },
};

console.log(gameActions.batleResult());
